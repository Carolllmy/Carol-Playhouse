// Living residents for the neighborhood: routines, rain shelter, look-at,
// proximity talk prompts, branching dialogue and small persistent memories.
// Character art is swappable: CHARACTER describes the model and its clip names.
import * as THREE from 'three';
import { clone as cloneSkinned } from './vendor/utils/SkeletonUtils.js';
import { RESIDENTS } from './npc-data.js';

export const CHARACTER = {
	url: './assets/characters/xbot.glb', // placeholder mannequin (Mixamo X Bot via three.js examples)
	clips: { idle: 'idle', walk: 'walk', agree: 'agree', no: 'headShake', sad: 'sad_pose' },
	additive: ['agree', 'headShake', 'sad_pose'],
	head: 'mixamorigHead', neck: 'mixamorigNeck',
	materials: { body: /HighLimbs|Body/i, joints: /Joints/i },
	walkSpeed: 1.3, // metres per second covered by one playback of the walk clip at timeScale 1
};

const TALK_RANGE = 2.4, LOOK_RANGE = 7;
const MEMORY_KEY = 'living-derry-town-memory';
export function loadMemory(storage = globalThis.localStorage) {
	try { return JSON.parse(storage?.getItem(MEMORY_KEY) || '{}') || {}; } catch { return {}; }
}
export function saveMemory(mem, storage = globalThis.localStorage) { try { storage?.setItem(MEMORY_KEY, JSON.stringify(mem)); } catch { } }

// Ground height of the walkable street (matches the player's camera ground rule).
export function groundAt(x, z) { return (z > 7.38 && z < 9.03) || (z > 18.44 && z < 19.88) ? .12 : (Math.abs(x + 4.7) < 1.2 && z < 7.36 ? .08 : 0); }

// Pure routine stepper: moves a resident along its looping route, or to shelter when raining.
export function stepRoutine(r, def, dt, raining) {
	const route = def.route;
	let target, dwellTotal = 0, activity = 'walk';
	if (raining) { target = def.shelter; }
	else { const w = route[r.index]; target = [w[0], w[1]]; dwellTotal = w[2]; activity = w[3]; }
	const dx = target[0] - r.x, dz = target[1] - r.z, d = Math.hypot(dx, dz);
	if (d > .05) {
		const step = Math.min(d, def.speed * dt);
		r.x += dx / d * step; r.z += dz / d * step; r.heading = Math.atan2(dx, dz); r.moving = true; r.dwell = 0; r.activity = 'walk';
		return r;
	}
	r.moving = false;
	r.activity = raining ? 'idle' : activity === 'walk' ? 'idle' : activity;
	if (raining) return r;
	r.dwell += dt;
	if (r.dwell >= dwellTotal) { r.dwell = 0; r.index = (r.index + 1) % route.length; }
	return r;
}

// Pick the line set for a conversation from weather and memory.
export function openingLines(def, mem, raining) {
	const seen = mem[def.id]?.visits || 0;
	if (raining && seen > 0) return def.talk.rain;
	return seen ? def.talk.again : def.talk.first;
}

function ui() {
	const css = document.createElement('style');
	css.textContent = `#talk-prompt{position:fixed;left:50%;bottom:118px;transform:translateX(-50%);z-index:8;background:#101715e6;color:#ece3cd;border:1px solid #e4c98d55;border-radius:999px;padding:9px 16px;font:13px/1.2 Georgia,serif;cursor:pointer;display:none}
#talk-prompt b{font-family:Arial,sans-serif;font-size:11px;letter-spacing:.08em;color:#e4c98d;margin-left:8px}
#talk{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);width:min(620px,calc(100% - 32px));z-index:9;background:#0f1513f2;color:#ece3cd;border:1px solid #e4c98d40;border-radius:10px;padding:18px 20px 16px;font:16px/1.55 Georgia,serif;display:none;box-shadow:0 12px 40px #0008}
#talk .who{font:600 11px Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#e4c98d;margin-bottom:6px}
#talk .who span{color:#a9b3a6;font-weight:400;letter-spacing:.06em;text-transform:none;margin-left:8px}
#talk .line{min-height:2.9em}
#talk .choices{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
#talk button{background:#1c2622;color:#ece3cd;border:1px solid #e4c98d55;border-radius:6px;padding:8px 12px;font:13px Arial,sans-serif;cursor:pointer}
#talk button:hover,#talk button:focus-visible{border-color:#e4c98d;outline:none}
body.talking footer,body.talking #touch{visibility:hidden}`;
	document.head.appendChild(css);
	const prompt = document.createElement('button'); prompt.id = 'talk-prompt'; prompt.type = 'button';
	const box = document.createElement('section'); box.id = 'talk'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-live', 'polite');
	box.innerHTML = '<div class="who"></div><div class="line"></div><div class="choices"></div>';
	document.body.append(prompt, box);
	return { prompt, box, who: box.querySelector('.who'), line: box.querySelector('.line'), choices: box.querySelector('.choices') };
}

export async function createTown({ scene, camera, loader, defs = RESIDENTS, character = CHARACTER, storage, dom = true }) {
	const gltf = await loader.loadAsync(character.url);
	const clipsByName = new Map(gltf.animations.map(c => [c.name, c]));
	for (const name of character.additive) { const c = clipsByName.get(name); if (c) THREE.AnimationUtils.makeClipAdditive(c); }
	const memory = loadMemory(storage);
	// The street's shadow map is static, so each resident gets a soft contact shadow.
	const blobTex = (() => { if (typeof document === 'undefined') return null; const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 2, 32, 32, 32); gr.addColorStop(0, 'rgba(0,0,0,.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
	const blobMat = new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false, opacity: blobTex ? 1 : 0 });
	const blobGeo = new THREE.PlaneGeometry(.9, .9).rotateX(-Math.PI / 2);
	const residents = defs.map((def, i) => {
		const root = cloneSkinned(gltf.scene); root.name = 'Resident: ' + def.name;
		root.scale.setScalar(def.scale);
		root.traverse(o => {
			if (!o.isMesh) return; o.castShadow = false; o.receiveShadow = true; o.frustumCulled = false;
			const m = o.material.clone();
			if (character.materials.body.test(m.name)) { m.color.set(def.tint); m.roughness = .78; m.metalness = 0; }
			else if (character.materials.joints.test(m.name)) { m.color.set(def.accent); m.roughness = .6; m.metalness = 0; }
			o.material = m;
		});
		const mixer = new THREE.AnimationMixer(root), act = {};
		for (const [k, n] of Object.entries(character.clips)) { const c = clipsByName.get(n); if (c) { act[k] = mixer.clipAction(c); } }
		act.idle?.play(); act.walk?.play(); if (act.walk) act.walk.setEffectiveWeight(0);
		for (const k of ['agree', 'no', 'sad']) if (act[k]) { act[k].play(); act[k].setEffectiveWeight(0); }
		const head = root.getObjectByName(character.head);
		const w = def.route[0];
		const r = { x: w[0], z: w[1], heading: 0, index: Math.min(1, def.route.length - 1), dwell: 0, moving: false, activity: 'idle', walkW: 0, gestureT: 0, gesture: null };
		root.position.set(r.x, groundAt(r.x, r.z), r.z);
		const blob = new THREE.Mesh(blobGeo, blobMat); blob.renderOrder = 1; blob.scale.setScalar(def.scale); scene.add(blob);
		scene.add(root);
		return { def, root, blob, mixer, act, head, r, headQ: head ? head.quaternion.clone() : null, phase: i * 1.7 };
	});

	const els = dom ? ui() : null;
	let near = null, talking = null, page = 0, pages = [], busy = false;
	const tmp = new THREE.Vector3(), fwd = new THREE.Vector3();

	function remember(id, key) { memory[id] = memory[id] || { visits: 0, notes: [] }; if (key && !memory[id].notes.includes(key)) memory[id].notes.push(key); saveMemory(memory, storage); }
	function gesture(n, kind) { const map = { agree: 'agree', headShake: 'no' }; const k = map[kind] || kind; if (n.act[k]) { n.gesture = k; n.gestureT = 0; } }
	function show(text) { if (els) els.line.textContent = text; }
	function renderChoices() {
		if (!els) return; els.choices.innerHTML = '';
		const add = (label, fn) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.onclick = fn; els.choices.append(b); return b; };
		if (page < pages.length - 1) { add('Continue', () => { page++; show(pages[page]); renderChoices(); }).focus(); return; }
		const done = memory[talking.def.id]?.notes || [];
		for (const c of talking.def.talk.choices) add(c.label + (c.memory && done.includes(c.memory) ? ' (again)' : ''), () => { pages = c.lines; page = 0; show(pages[0]); gesture(talking, c.gesture); if (c.memory) remember(talking.def.id, c.memory); renderChoices(); });
		add('Say goodbye', end).focus();
	}
	function begin(n) {
		if (talking) return; talking = n; busy = true;
		const raining = api.raining;
		pages = openingLines(n.def, memory, raining); page = 0;
		memory[n.def.id] = memory[n.def.id] || { visits: 0, notes: [] }; memory[n.def.id].visits++; saveMemory(memory, storage);
		if (els) { els.who.innerHTML = ''; els.who.append(n.def.name); const s = document.createElement('span'); s.textContent = n.def.role; els.who.append(s); els.box.style.display = 'block'; els.prompt.style.display = 'none'; document.body.classList.add('talking'); }
		show(pages[0]); renderChoices(); gesture(n, 'agree');
	}
	function end() { talking = null; busy = false; if (els) { els.box.style.display = 'none'; document.body.classList.remove('talking'); } }
	if (els) {
		els.prompt.onclick = () => near && begin(near);
		addEventListener('keydown', e => {
			if (e.target.matches?.('input,select,textarea')) return;
			if (talking && e.code === 'Escape') { e.preventDefault(); end(); }
			else if (!talking && near && e.code === 'KeyE' && !e.repeat) { e.preventDefault(); begin(near); }
		});
	}

	const api = {
		residents, memory, raining: false,
		get busy() { return busy; }, get near() { return near; }, get talking() { return talking; },
		begin, end,
		// Keep the player from walking through anyone.
		collide(pos) { for (const n of residents) { const dx = pos.x - n.root.position.x, dz = pos.z - n.root.position.z, d = Math.hypot(dx, dz), min = .55 * n.def.scale + .2; if (d < min && d > 1e-4) { pos.x = n.root.position.x + dx / d * min; pos.z = n.root.position.z + dz / d * min; } } return pos; },
		update(dt, { rain = 0, reduced = false } = {}) {
			api.raining = rain > .5;
			camera.getWorldDirection(fwd); fwd.y = 0; fwd.normalize();
			let best = null, bestScore = Infinity;
			for (const n of residents) {
				const r = n.r, p = n.root.position;
				const dist = Math.hypot(camera.position.x - p.x, camera.position.z - p.z);
				const isTalking = talking === n;
				// Pause the routine while talking or when the player blocks the path.
				const blocked = dist < 1.1 && r.moving;
				if (!isTalking && !blocked) stepRoutine(r, n.def, dt, api.raining);
				else r.moving = false;
				p.set(r.x, groundAt(r.x, r.z), r.z); n.blob.position.set(r.x, p.y + .012, r.z);
				// Face travel direction, or the player when talking / close.
				let face = r.heading;
				if (isTalking || (!r.moving && dist < 3.2)) face = Math.atan2(camera.position.x - p.x, camera.position.z - p.z);
				let dy = face - n.root.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
				n.root.rotation.y += dy * Math.min(1, dt * (isTalking ? 6 : 4));
				// Blend walk/idle and gestures.
				n.r.walkW = THREE.MathUtils.damp(n.r.walkW, r.moving ? 1 : 0, 8, dt);
				if (n.act.walk) { n.act.walk.setEffectiveWeight(n.r.walkW); n.act.walk.timeScale = n.def.speed / CHARACTER.walkSpeed / n.def.scale; }
				if (n.act.idle) n.act.idle.setEffectiveWeight(1 - n.r.walkW);
				if (n.act.sad) n.act.sad.setEffectiveWeight(THREE.MathUtils.damp(n.act.sad.getEffectiveWeight(), !r.moving && r.activity === 'sad' && !isTalking ? .7 : 0, 3, dt));
				if (!r.moving && !isTalking && r.activity === 'agree' && !n.gesture && Math.random() < dt * .25) gesture(n, 'agree');
				for (const k of ['agree', 'no']) if (n.act[k]) n.act[k].setEffectiveWeight(0);
				if (n.gesture) { n.gestureT += dt; const len = n.act[n.gesture].getClip().duration, t = n.gestureT / len; n.act[n.gesture].setEffectiveWeight(Math.sin(Math.min(1, t) * Math.PI)); if (t >= 1) n.gesture = null; }
				const visible = dist < 45;
				if (visible && !reduced) n.mixer.update(dt); else if (visible) n.mixer.update(0);
				// Head turns toward the player within range (after the mixer pose).
				if (n.head && dist < LOOK_RANGE) {
					n.head.getWorldPosition(tmp);
					const local = n.root.worldToLocal(camera.position.clone());
					const yaw = THREE.MathUtils.clamp(Math.atan2(local.x, local.z), -1, 1), pitch = THREE.MathUtils.clamp(Math.atan2(camera.position.y - tmp.y, Math.max(.3, dist)) * .6, -.4, .4);
					const amt = (1 - THREE.MathUtils.smoothstep(dist, LOOK_RANGE * .6, LOOK_RANGE)) * (Math.abs(yaw) < 1 ? 1 : 0);
					n.head.rotation.y += yaw * .7 * amt; n.head.rotation.x -= pitch * amt;
				}
				// Talk prompt candidate: close and roughly in front of the player.
				if (!talking && dist < TALK_RANGE) {
					tmp.set(p.x - camera.position.x, 0, p.z - camera.position.z).normalize();
					const facing = tmp.dot(fwd);
					if (facing > .55 && dist - facing < bestScore) { best = n; bestScore = dist - facing; }
				}
			}
			near = talking ? null : best;
			if (els && !talking) {
				if (near) { els.prompt.innerHTML = ''; els.prompt.append('Talk to ' + near.def.name.split(' ')[0]); const b = document.createElement('b'); b.textContent = 'E'; els.prompt.append(b); els.prompt.style.display = 'block'; }
				else els.prompt.style.display = 'none';
			}
		},
	};
	return api;
}
