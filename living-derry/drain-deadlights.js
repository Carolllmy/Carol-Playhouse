import * as THREE from 'three';
// The Deadlights: an original, faceless presence for the drain encounter.
// Cold pinpricks wake deep in the basin, a first pair opens like eyes, more lights
// gather and turn into a slow vortex, then the whole swarm rushes the camera
// before the scene's hard cut to black. Same interface as drain-presence.js.
const N = 720;
export function deadlightsField(seed = 1957) {
	// Deterministic particle layout inside the basin volume (metres, basin space).
	let a = seed >>> 0; const rand = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
	const pos = new Float32Array(N * 3), data = new Float32Array(N * 4);
	for (let i = 0; i < N; i++) {
		const r = Math.pow(rand(), 0.6) * 0.34, th = rand() * Math.PI * 2, depth = rand();
		pos[i * 3] = Math.cos(th) * r;
		pos[i * 3 + 1] = Math.sin(th) * r * 0.32;          // basin is wide and low
		pos[i * 3 + 2] = -depth * 0.55;
		// wake order (0..1, later = wakes later), phase, size, orbit speed
		data[i * 4] = Math.min(1, 0.08 + rand() * 0.92 * (0.35 + 0.65 * r / 0.34));
		data[i * 4 + 1] = rand() * Math.PI * 2;
		data[i * 4 + 2] = 0.5 + rand() * rand() * 2.2;
		data[i * 4 + 3] = (0.35 + rand()) * (rand() < 0.5 ? -1 : 1);
	}
	return { pos, data };
}
// How many lights are awake at a given point in the presence beat (0..7.8 s).
export function wakeLevel(beat) { return Math.min(1, Math.max(0, (beat - 1.6) / 5.4)); }

export async function createPresence() {
	const group = new THREE.Group(); group.name = 'The Deadlights';
	const { pos, data } = deadlightsField();
	const geo = new THREE.BufferGeometry();
	geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
	geo.setAttribute('aData', new THREE.BufferAttribute(data, 4));
	const uniforms = { uTime: { value: 0 }, uWake: { value: 0 }, uSwirl: { value: 0 }, uRush: { value: 0 }, uPixel: { value: 1 } };
	const points = new THREE.Points(geo, new THREE.ShaderMaterial({
		uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
		vertexShader: `
			attribute vec4 aData; uniform float uTime,uWake,uSwirl,uRush,uPixel; varying float vA; varying float vHot;
			void main(){
				vec3 p=position; float order=aData.x, ph=aData.y, sz=aData.z, sp=aData.w;
				float r=length(p.xy*vec2(1.,3.125)); float ang=uTime*sp*.35*(0.25+uSwirl)+uSwirl*(1.8-r*3.);
				float c=cos(ang), s=sin(ang); p.xy=vec2(p.x*c-p.y*3.125*s, (p.x*s+p.y*3.125*c)/3.125);
				p.xy*=1.-uSwirl*.45*(1.-order); p.z+=sin(uTime*.9+ph)*.012;
				float awake=smoothstep(order-.06,order,uWake);
				float flicker=.65+.35*sin(uTime*(2.+sz*3.)+ph*7.);
				vA=awake*flicker; vHot=smoothstep(1.4,2.7,sz)+uRush;
				p.z+=uRush*(.9-p.z*.2); p.xy*=1.+uRush*1.6;
				vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
				gl_PointSize=uPixel*sz*(5.+uRush*40.)*(.55/max(.05,-mv.z));
			}`,
		fragmentShader: `
			varying float vA; varying float vHot;
			void main(){ vec2 d=gl_PointCoord-.5; float f=exp(-dot(d,d)*18.); if(f<.01||vA<.01)discard;
				vec3 cold=vec3(.62,.78,.95), hot=vec3(1.,.93,.72), ember=vec3(1.,.62,.28);
				vec3 col=mix(cold,hot,clamp(vHot,0.,1.)); col=mix(col,ember,.25*(1.-f));
				gl_FragColor=vec4(col*f*vA*2.2,f*vA); }`,
	}));
	points.frustumCulled = false; group.add(points);
	// The first pair: two lights that open like eyes before anything else wakes.
	const eyeTex = (() => { const c = typeof document !== 'undefined' ? document.createElement('canvas') : null; if (!c) return null; c.width = c.height = 64; const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,248,225,1)'); gr.addColorStop(.18, 'rgba(255,214,150,.9)'); gr.addColorStop(.5, 'rgba(160,190,230,.18)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
	const eyeMat = new THREE.SpriteMaterial({ map: eyeTex, color: '#fff3d8', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
	const eyes = [-1, 1].map(s => { const e = new THREE.Sprite(eyeMat); e.position.set(s * .031, .006, -.12); e.scale.setScalar(.03); e.name = 'First light'; group.add(e); return e; });
	// Motivated light from inside: it lights the wet brick and the water lip.
	const glow = new THREE.PointLight('#ffd9a8', 0, .9, 2); glow.position.set(0, .01, -.2); group.add(glow);
	group.position.set(.08, .09, -.2);
	const home = group.position.clone(), target = new THREE.Vector3();
	return {
		mesh: group, points, eyes, glow, uniforms,
		update(state, time, reduced, camera) {
			const reveal = state.phase === 'revealed' ? state.reveal : state.phase === 'ending' ? 1 : 0;
			// Keep the group (and its light) in the scene so the light count never changes
			// mid-encounter, which would force every material to recompile at the reveal.
			group.visible = true; const on = reveal > 0; points.visible = on; for (const e of eyes) e.visible = on;
			if (!on) { glow.intensity = 0; return; }
			const beat = state.phase === 'ending' ? 7.8 : Math.min(7.8, state.beatTime || 0);
			uniforms.uTime.value = reduced ? 0 : time;
			uniforms.uWake.value = wakeLevel(beat) * reveal;
			uniforms.uSwirl.value = reduced ? 0 : Math.max(0, (beat - 4.6) / 3.2);
			uniforms.uPixel.value = typeof devicePixelRatio === 'number' ? Math.min(devicePixelRatio, 1.5) : 1;
			// Eyes open between 0.4 and 1.4 s, blink once at 3.7 s, flare on the approach.
			const open = Math.min(1, Math.max(0, (beat - .4) / 1)) * reveal;
			const blink = !reduced && beat > 3.7 && beat < 3.88 ? Math.sin((beat - 3.7) / .18 * Math.PI) : 0;
			eyeMat.opacity = open * (1 - blink * .95);
			const eyeSize = .044 + .022 * Math.min(1, beat / 7.8) + (reduced ? 0 : Math.sin(time * 1.3) * .002);
			for (const e of eyes) e.scale.setScalar(eyeSize);
			glow.intensity = (.02 + .11 * uniforms.uWake.value + .05 * open) * (reduced ? 1 : .85 + .15 * Math.sin(time * 5.1));
			group.position.copy(home); group.position.z += Math.min(1, beat / 7.8) * .06;
			uniforms.uRush.value = 0;
			if (state.phase === 'ending' && camera) {
				const t = Math.min(1, (state.endingTime || 0) / .35), a = t * t * t;
				target.set(camera.position.x, camera.position.y - .01, camera.position.z - .08);
				group.position.lerp(target, a); uniforms.uRush.value = a; glow.intensity += a * 1.8;
				for (const e of eyes) e.scale.setScalar(eyeSize * (1 + a * 5));
			}
		},
	};
}
