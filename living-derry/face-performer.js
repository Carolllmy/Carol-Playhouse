// Asset-agnostic facial character loader and performance module.
//
// Loads any glTF/GLB head, resolves a named mapping of morph targets and bones
// (blink, gaze, jaw, head/neck), and drives them with an independent-eye gaze
// solver, stochastic blinks and saccades, a damped head, and an anticipation →
// lunge curve. Nothing here is specific to one character: the scene supplies the
// model path and a mapping file, and the report says which channels the asset
// can actually perform.
import * as THREE from 'three';

// Common blendshape names (ARKit / Face Cap / many DCC exports). Mapping files can
// override any channel with explicit names.
export const MORPH_ALIASES = {
	blinkL: ['eyeBlinkLeft', 'eyeBlink_L', 'EyeBlinkLeft', 'Blink_L', 'blink_L'],
	blinkR: ['eyeBlinkRight', 'eyeBlink_R', 'EyeBlinkRight', 'Blink_R', 'blink_R'],
	jawOpen: ['jawOpen', 'JawOpen', 'jaw_open', 'mouthOpen'],
	lookUpL: ['eyeLookUpLeft'], lookUpR: ['eyeLookUpRight'],
	lookDownL: ['eyeLookDownLeft'], lookDownR: ['eyeLookDownRight'],
	lookInL: ['eyeLookInLeft'], lookInR: ['eyeLookInRight'],
	lookOutL: ['eyeLookOutLeft'], lookOutR: ['eyeLookOutRight'],
	squintL: ['eyeSquintLeft'], squintR: ['eyeSquintRight'],
	wideL: ['eyeWideLeft'], wideR: ['eyeWideRight'],
};
export const BONE_KEYS = ['root', 'neck', 'head', 'jaw', 'eyeL', 'eyeR', 'lidUpperL', 'lidUpperR', 'lidLowerL', 'lidLowerR'];

export const DEFAULT_MAPPING = {
	morphs: {},
	bones: {},
	autoMorphs: true,
	axes: {
		// Local axes of the bones in their rest pose. glTF characters face +Z.
		forward: [0, 0, 1], up: [0, 1, 0],
		jawOpenAxis: [1, 0, 0], jawOpenAngle: 0.32,
		lidCloseAxis: [1, 0, 0], lidCloseAngle: 0.55, lidLowerAngle: 0.12,
	},
	limits: { eyeYaw: 0.62, eyePitchUp: 0.36, eyePitchDown: 0.46, headYaw: 0.85, headPitch: 0.45, headRoll: 0.35 },
	materials: { skin: 'skin|head|face|body', eye: 'eye|sclera|cornea|iris', teeth: 'teeth|tooth|gum', mouth: 'tongue|mouth|oral' },
	normalize: null, // e.g. { height: 0.24 } scales the loaded root so the head is 24 cm tall
	textures: null,  // optional external texture sets per material role
};

const sanitize = name => THREE.PropertyBinding.sanitizeNodeName(name);
const asList = v => (v == null ? [] : Array.isArray(v) ? v : [v]);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export function mergeMapping(mapping = {}) {
	return {
		...DEFAULT_MAPPING, ...mapping,
		axes: { ...DEFAULT_MAPPING.axes, ...(mapping.axes || {}) },
		limits: { ...DEFAULT_MAPPING.limits, ...(mapping.limits || {}) },
		materials: { ...DEFAULT_MAPPING.materials, ...(mapping.materials || {}) },
		morphs: { ...(mapping.morphs || {}) }, bones: { ...(mapping.bones || {}) },
	};
}

function findNode(root, name) {
	if (!name) return null;
	return root.getObjectByName(name) || root.getObjectByName(sanitize(name)) || null;
}

// Resolve a mapping against a loaded object hierarchy. Never throws for missing
// channels: they are listed so the caller can see what the asset lacks.
export function resolveFaceRig(root, mappingInput = {}) {
	const mapping = mergeMapping(mappingInput);
	const bones = {}, rest = new Map(), missing = [], sources = {};
	for (const key of BONE_KEYS) {
		const node = findNode(root, mapping.bones[key]);
		if (mapping.bones[key] && !node) missing.push(`bone:${key}=${mapping.bones[key]}`);
		if (node) { bones[key] = node; rest.set(node, { q: node.quaternion.clone(), p: node.position.clone() }); }
	}
	const morphMeshes = [];
	root.traverse(o => { if (o.isMesh && o.morphTargetDictionary && o.morphTargetInfluences) morphMeshes.push(o); });
	const morphs = {};
	for (const channel of Object.keys(MORPH_ALIASES)) {
		const explicit = asList(mapping.morphs[channel]);
		const names = explicit.length ? explicit : mapping.autoMorphs ? MORPH_ALIASES[channel] : [];
		const hits = [];
		for (const mesh of morphMeshes) for (const n of names) {
			const index = mesh.morphTargetDictionary[n];
			if (index !== undefined) { hits.push({ mesh, index }); break; }
		}
		if (hits.length) morphs[channel] = hits;
		else if (explicit.length) missing.push(`morph:${channel}=${explicit.join('|')}`);
	}
	const hasEyes = !!(bones.eyeL && bones.eyeR), hasLook = ['lookUpL', 'lookDownL', 'lookInL', 'lookOutL'].some(k => morphs[k]);
	sources.gaze = hasEyes ? 'eye bones' : hasLook ? 'look morphs' : null;
	sources.blink = morphs.blinkL && morphs.blinkR ? 'morphs' : bones.lidUpperL && bones.lidUpperR ? 'lid bones' : null;
	sources.jaw = morphs.jawOpen && bones.jaw ? 'morph + jaw bone' : morphs.jawOpen ? 'morph' : bones.jaw ? 'jaw bone' : null;
	sources.head = bones.head ? (bones.neck ? 'neck + head bones' : 'head bone') : 'root transform';
	const capabilities = { gaze: !!sources.gaze, blink: !!sources.blink, jaw: !!sources.jaw, head: true, independentEyes: hasEyes };
	return { root, mapping, bones, morphs, rest, missing, sources, capabilities, rootRest: { q: root.quaternion.clone(), p: root.position.clone() } };
}

// Upgrade matched materials to physically based skin, wet eyes and teeth while
// keeping every texture the asset already carries.
export function applyFaceMaterials(root, mappingInput = {}, textures = {}) {
	const mapping = mergeMapping(mappingInput), roles = {};
	for (const [role, pattern] of Object.entries(mapping.materials)) roles[role] = new RegExp(pattern, 'i');
	const done = new Map(), counts = { skin: 0, eye: 0, teeth: 0, mouth: 0 };
	const roleOf = (mesh, m) => {
		const label = `${m.name || ''} ${mesh.name || ''}`;
		for (const role of ['eye', 'teeth', 'mouth', 'skin']) if (roles[role]?.test(label)) return role;
		return mapping.defaultRole || null;
	};
	root.traverse(mesh => {
		if (!mesh.isMesh) return;
		const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
		const next = list.map(m => {
			const role = roleOf(mesh, m);
			if (!role) return m;
			const key = m.uuid + role;
			if (done.has(key)) return done.get(key);
			const p = new THREE.MeshPhysicalMaterial({ name: m.name || role });
			for (const k of ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'emissiveMap', 'alphaMap']) if (m[k]) p[k] = m[k];
			if (m.color) p.color.copy(m.color);
			if (m.normalScale) p.normalScale.copy(m.normalScale);
			p.vertexColors = !!m.vertexColors; p.transparent = !!m.transparent; p.side = m.side ?? THREE.FrontSide;
			p.metalness = 0;
			Object.assign(p, {
				skin: { roughness: 0.52, specularIntensity: 0.55, sheen: 0.28, sheenRoughness: 0.62, clearcoat: 0.06, clearcoatRoughness: 0.45 },
				eye: { roughness: 0.18, specularIntensity: 0.9, clearcoat: 1, clearcoatRoughness: 0.02 },
				teeth: { roughness: 0.32, specularIntensity: 0.7, clearcoat: 0.25, clearcoatRoughness: 0.2 },
				mouth: { roughness: 0.3, specularIntensity: 0.8, clearcoat: 0.5, clearcoatRoughness: 0.12 },
			}[role]);
			if (role === 'skin') p.sheenColor.set('#d9a79a');
			for (const [k, t] of Object.entries(textures[role] || {})) {
				if (!t) continue;
				p[k] = t;
				if (k === 'map') p.color.set('#ffffff');
			}
			p.userData.faceRole = role; counts[role]++;
			done.set(key, p);
			return p;
		});
		mesh.material = Array.isArray(mesh.material) ? next : next[0];
	});
	return counts;
}

// Scale/offset the loaded root so its bounding box has a known height and its
// base sits on the origin; handy when assets arrive in centimetres or inches.
export function normalizeRoot(root, { height = 0.24, center = true } = {}) {
	root.updateMatrixWorld(true);
	const box = new THREE.Box3().setFromObject(root), size = box.getSize(new THREE.Vector3());
	if (!(size.y > 0)) return 1;
	const s = height / size.y;
	root.scale.multiplyScalar(s);
	root.updateMatrixWorld(true);
	const b2 = new THREE.Box3().setFromObject(root), c = b2.getCenter(new THREE.Vector3());
	if (center) root.position.sub(new THREE.Vector3(c.x, b2.min.y, c.z));
	root.updateMatrixWorld(true);
	return s;
}

// Deterministic RNG so tests and replays produce identical performances.
export function mulberry32(seed) {
	let a = seed >>> 0;
	return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// Blink profile: fast close (~70 ms), brief hold, slower open (~130 ms).
export function blinkProfile(t, close = 0.07, hold = 0.03, open = 0.13) {
	if (t <= 0 || t >= close + hold + open) return 0;
	if (t < close) { const x = t / close; return x * x * (3 - 2 * x); }
	if (t < close + hold) return 1;
	const x = (t - close - hold) / open; return 1 - x * x * (3 - 2 * x);
}

// Anticipation → lunge. t is seconds from lunge start. The subject coils back by
// `windup` (fraction of distance) during `anticipation`, holds a beat, then
// strikes over `strike` seconds with acceleration concentrated late, like a body
// released from tension. Returns normalized forward displacement (1 = contact).
export function lungeCurve(t, { anticipation = 0.32, hold = 0.06, strike = 0.35, windup = 0.08 } = {}) {
	if (t <= 0) return { value: 0, phase: 'rest' };
	if (t < anticipation) { const x = t / anticipation; return { value: -windup * (0.5 - 0.5 * Math.cos(Math.PI * x)), phase: 'anticipation' }; }
	if (t < anticipation + hold) return { value: -windup, phase: 'hold' };
	const x = Math.min(1, (t - anticipation - hold) / strike);
	// Quintic ease-in with a small late surge; monotonic and reaches exactly 1.
	const e = x * x * x * (0.6 + 0.4 * x * x);
	return { value: -windup + (1 + windup) * e, phase: x >= 1 ? 'contact' : 'strike' };
}
// Secondary actions keyed to the same timing (head coil, jaw and eye widening).
export function lungePose(t, opts = {}) {
	const { anticipation = 0.32, hold = 0.06, strike = 0.35 } = opts, c = lungeCurve(t, opts);
	const coil = t <= 0 ? 0 : t < anticipation + hold ? Math.min(1, t / anticipation) : Math.max(0, 1 - (t - anticipation - hold) / (strike * 0.5));
	const strikeX = clamp((t - anticipation - hold) / strike, 0, 1);
	return { forward: c.value, phase: c.phase, headPitch: -0.14 * coil + 0.1 * strikeX, jaw: clamp(strikeX * 1.4, 0, 1) * 0.85, wide: Math.max(coil, strikeX), blinkSuppressed: t > 0 };
}

// Critically damped spring towards a target (frame-rate independent).
function damp(current, target, omega, dt) {
	const x = omega * dt, exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
	return target + (current - target) * exp;
}

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _m = new THREE.Matrix4();

export class FacePerformer {
	constructor(rig, { seed = 1, auto = true } = {}) {
		this.rig = rig; this.rand = mulberry32(seed); this.auto = auto;
		const a = rig.mapping.axes;
		this.forward = new THREE.Vector3(...a.forward).normalize();
		this.up = new THREE.Vector3(...a.up).normalize();
		this.right = new THREE.Vector3().crossVectors(this.up, this.forward).normalize();
		this.jawAxis = new THREE.Vector3(...a.jawOpenAxis).normalize();
		this.lidAxis = new THREE.Vector3(...a.lidCloseAxis).normalize();
		this.gazeTarget = null;            // world-space point; null = look straight ahead
		this.headFollow = 0.35;            // fraction of gaze the head turns toward
		this.manual = { blink: 0, jaw: 0, yaw: 0, pitch: 0, roll: 0, wide: 0, squint: 0 };
		this.lunge = null;                 // {start, direction:Vector3, distance, opts}
		this.time = 0;
		this.eyes = { L: { yaw: 0, pitch: 0 }, R: { yaw: 0, pitch: 0 } };
		this.head = { yaw: 0, pitch: 0, roll: 0 };
		this.saccade = { x: 0, y: 0, next: 0.4 };
		this.blink = { t: -1, next: 1.5 + this.rand() * 2 };
		this.output = { blink: 0, jaw: 0, forward: 0 };
	}

	lookAt(point) { this.gazeTarget = point ? (this.gazeTarget || new THREE.Vector3()).copy(point) : null; }
	startLunge(direction, distance, opts = {}) { this.lunge = { start: this.time, direction: direction.clone().normalize(), distance, opts }; }
	stopLunge() { this.lunge = null; }

	reset() {
		const r = this.rig;
		for (const [node, s] of r.rest) { node.quaternion.copy(s.q); node.position.copy(s.p); }
		r.root.quaternion.copy(r.rootRest.q); r.root.position.copy(r.rootRest.p);
		for (const hits of Object.values(r.morphs)) for (const h of hits) h.mesh.morphTargetInfluences[h.index] = 0;
		this.eyes.L = { yaw: 0, pitch: 0 }; this.eyes.R = { yaw: 0, pitch: 0 }; this.head = { yaw: 0, pitch: 0, roll: 0 };
		this.lunge = null; this.output = { blink: 0, jaw: 0, forward: 0 };
		r.root.updateMatrixWorld(true);
	}

	setMorph(channel, value) { for (const h of this.rig.morphs[channel] || []) h.mesh.morphTargetInfluences[h.index] = clamp(value, 0, 1); }

	// Yaw/pitch (radians) that points a node's rest forward axis at a world point.
	aimAngles(node, restQ, point) {
		node.parent.updateWorldMatrix(true, false);
		_m.copy(node.parent.matrixWorld).invert();
		const local = _v.copy(point).applyMatrix4(_m).sub(node.position);
		const dir = local.applyQuaternion(_q.copy(restQ).invert()).normalize();
		return { yaw: Math.atan2(dir.dot(this.right), dir.dot(this.forward)), pitch: Math.asin(clamp(dir.dot(this.up), -1, 1)) };
	}
	orient(node, restQ, yaw, pitch, roll = 0) {
		_q.setFromAxisAngle(this.up, yaw);
		_q2.setFromAxisAngle(this.right, -pitch); _q.multiply(_q2);
		if (roll) { _q2.setFromAxisAngle(this.forward, roll); _q.multiply(_q2); }
		node.quaternion.copy(restQ).multiply(_q);
	}

	update(dt) {
		dt = clamp(dt, 0, 0.1); this.time += dt;
		const r = this.rig, lim = r.mapping.limits, b = r.bones, m = this.manual;
		// Lunge secondary pose.
		let pose = null;
		if (this.lunge) pose = lungePose(this.time - this.lunge.start, this.lunge.opts);
		// Stochastic micro-saccades while gazing (auto mode only).
		if (this.auto) {
			this.saccade.next -= dt;
			if (this.saccade.next <= 0) {
				const big = this.rand() < 0.18, amp = big ? 0.06 : 0.012;
				this.saccade.x = (this.rand() * 2 - 1) * amp; this.saccade.y = (this.rand() * 2 - 1) * amp * 0.7;
				this.saccade.next = 0.35 + this.rand() * (big ? 1.6 : 0.9);
			}
		}
		// Head: damped toward manual pose plus a share of the gaze direction.
		r.root.updateMatrixWorld(true);
		let gy = 0, gp = 0;
		const headNode = b.head;
		if (this.gazeTarget && headNode) { const a = this.aimAngles(headNode, r.rest.get(headNode).q, this.gazeTarget); gy = a.yaw; gp = a.pitch; }
		const breathe = this.auto ? Math.sin(this.time * 1.55) * 0.012 : 0;
		const tYaw = clamp(m.yaw + gy * this.headFollow, -lim.headYaw, lim.headYaw);
		const tPitch = clamp(m.pitch + gp * this.headFollow + breathe + (pose ? pose.headPitch : 0), -lim.headPitch, lim.headPitch);
		const tRoll = clamp(m.roll, -lim.headRoll, lim.headRoll);
		const headOmega = pose && pose.phase === 'strike' ? 40 : 7;
		this.head.yaw = damp(this.head.yaw, tYaw, headOmega, dt);
		this.head.pitch = damp(this.head.pitch, tPitch, headOmega, dt);
		this.head.roll = damp(this.head.roll, tRoll, headOmega, dt);
		if (b.head && b.neck) {
			this.orient(b.neck, r.rest.get(b.neck).q, this.head.yaw * 0.4, this.head.pitch * 0.4, this.head.roll * 0.4);
			this.orient(b.head, r.rest.get(b.head).q, this.head.yaw * 0.6, this.head.pitch * 0.6, this.head.roll * 0.6);
		} else if (b.head) this.orient(b.head, r.rest.get(b.head).q, this.head.yaw, this.head.pitch, this.head.roll);
		else this.orient(r.root, r.rootRest.q, this.head.yaw, this.head.pitch, this.head.roll);
		// Root translation for the lunge.
		r.root.position.copy(r.rootRest.p);
		if (this.lunge && pose) { r.root.position.addScaledVector(this.lunge.direction, pose.forward * this.lunge.distance); this.output.forward = pose.forward; }
		r.root.updateMatrixWorld(true);
		// Eyes: each eye solves its own angles toward the target (vergence), then clamps.
		let pitchAvg = 0;
		for (const side of ['L', 'R']) {
			const node = b['eye' + side], e = this.eyes[side];
			let yaw = this.saccade.x, pitch = this.saccade.y;
			if (this.gazeTarget && node) { const a = this.aimAngles(node, r.rest.get(node).q, this.gazeTarget); yaw += a.yaw; pitch += a.pitch; }
			else if (this.gazeTarget && headNode) { const a = this.aimAngles(headNode, r.rest.get(headNode).q, this.gazeTarget); yaw += a.yaw - this.head.yaw; pitch += a.pitch - this.head.pitch; }
			yaw = clamp(yaw, -lim.eyeYaw, lim.eyeYaw); pitch = clamp(pitch, -lim.eyePitchDown, lim.eyePitchUp);
			e.yaw = damp(e.yaw, yaw, 55, dt); e.pitch = damp(e.pitch, pitch, 55, dt);
			if (node) this.orient(node, r.rest.get(node).q, e.yaw, e.pitch);
			pitchAvg += e.pitch / 2;
			// Look morphs (character's left eye: +yaw = outward).
			const out = side === 'L' ? e.yaw : -e.yaw;
			this.setMorph('lookOut' + side, Math.max(0, out) / lim.eyeYaw);
			this.setMorph('lookIn' + side, Math.max(0, -out) / lim.eyeYaw);
			this.setMorph('lookUp' + side, Math.max(0, e.pitch) / lim.eyePitchUp);
			this.setMorph('lookDown' + side, Math.max(0, -e.pitch) / lim.eyePitchDown);
		}
		// Blinks: stochastic in auto mode, suppressed during a lunge (eyes locked open).
		let blink = 0;
		if (this.auto && !(pose && pose.blinkSuppressed)) {
			if (this.blink.t >= 0) { this.blink.t += dt; blink = blinkProfile(this.blink.t); if (this.blink.t > 0.25) { this.blink.t = -1; this.blink.next = 2 + this.rand() * 4.5; } }
			else { this.blink.next -= dt; if (this.blink.next <= 0) this.blink.t = 0; }
		}
		blink = Math.max(blink, m.blink);
		// Upper lids ride with vertical gaze; widening opposes them.
		const wide = Math.max(m.wide, pose ? pose.wide : 0);
		const lidFollow = clamp(-pitchAvg * 0.6, 0, 0.35) - wide * 0.25;
		const lid = clamp(blink + lidFollow * (1 - blink), -0.3, 1);
		this.output.blink = blink;
		if (r.morphs.blinkL) { this.setMorph('blinkL', lid); this.setMorph('blinkR', lid); }
		for (const side of ['L', 'R']) {
			const up = b['lidUpper' + side], low = b['lidLower' + side], a = r.mapping.axes;
			if (up) { _q.setFromAxisAngle(this.lidAxis, lid * a.lidCloseAngle); up.quaternion.copy(r.rest.get(up).q).multiply(_q); }
			if (low) { _q.setFromAxisAngle(this.lidAxis, -blink * a.lidLowerAngle); low.quaternion.copy(r.rest.get(low).q).multiply(_q); }
			this.setMorph('wide' + side, wide); this.setMorph('squint' + side, m.squint);
		}
		// Jaw.
		const jaw = clamp(Math.max(m.jaw, pose ? pose.jaw : 0) + (this.auto ? Math.max(0, Math.sin(this.time * 1.55)) * 0.02 : 0), 0, 1);
		this.output.jaw = jaw;
		this.setMorph('jawOpen', jaw);
		if (b.jaw) { _q.setFromAxisAngle(this.jawAxis, jaw * r.mapping.axes.jawOpenAngle); b.jaw.quaternion.copy(r.rest.get(b.jaw).q).multiply(_q); }
		r.root.updateMatrixWorld(true);
		return this.output;
	}
}

// Load a GLB/glTF plus mapping and return a ready performer.
export async function loadFaceCharacter({ url, mapping = null, mappingUrl = null, loader, textureLoader = null, seed = 1, auto = true, fetchImpl = globalThis.fetch }) {
	if (!loader) { const { GLTFLoader } = await import('./vendor/loaders/GLTFLoader.js'); loader = new GLTFLoader(); }
	if (!mapping && mappingUrl) mapping = await (await fetchImpl(mappingUrl)).json();
	const gltf = await loader.loadAsync(url), root = gltf.scene || gltf.scenes[0];
	root.name = root.name || 'Face character';
	const merged = mergeMapping(mapping || {});
	if (merged.normalize) normalizeRoot(root, merged.normalize);
	let textures = {};
	if (merged.textures && textureLoader) {
		const base = new URL(merged.textureBase || '.', new URL(url, globalThis.location?.href || 'file:///')).href;
		for (const [role, set] of Object.entries(merged.textures)) {
			textures[role] = {};
			for (const [slot, spec] of Object.entries(set)) {
				const s = typeof spec === 'string' ? { path: spec } : spec;
				const t = await textureLoader.loadAsync(new URL(s.path, base).href);
				t.flipY = s.flipY ?? false;
				if (slot === 'map' || slot === 'sheenColorMap') t.colorSpace = THREE.SRGBColorSpace;
				t.anisotropy = 4; t.needsUpdate = true;
				textures[role][slot] = t;
			}
		}
	}
	const materialCounts = applyFaceMaterials(root, merged, textures);
	const rig = resolveFaceRig(root, merged);
	const performer = new FacePerformer(rig, { seed, auto });
	return { gltf, root, rig, performer, materialCounts, report: { sources: rig.sources, capabilities: rig.capabilities, missing: rig.missing, materials: materialCounts } };
}
