// Study 06–07: the other side of the street, and the street running on.
// Re-uses the authored Cape (a 1940s tract house type that was genuinely built in
// repeated rows) to line the far side, each lot with its own paint, roof, chimney
// side and planting; mirrors the pine backdrop behind them; and places CC0 street
// props. Everything is added before the scene's batching pass, so it merges into
// the existing draw calls per material.
import * as THREE from 'three';

// Far-side lots: centre x, paint (siding), trim, roof, mirrored chimney, setback jitter.
export const FAR_LOTS = [
	{ x: -63.5, siding: '#b3b7a6', trim: '#ede8d8', roof: '#555c57', mirror: true, z: 26.8, turn: -.012 },
	{ x: -49.5, siding: '#9fa9ad', trim: '#efe9da', roof: '#4f5552', mirror: false, z: 27.3, turn: .01 },
	{ x: -35.5, siding: '#c7b48f', trim: '#ebe4d2', roof: '#5a5650', mirror: true, z: 26.4, turn: 0 },
	{ x: -21.5, siding: '#c9c2ad', trim: '#ece6d6', roof: '#59605a', mirror: false, z: 26.6, turn: .015 },
	{ x: -7.5, siding: '#b9a873', trim: '#f0e9d6', roof: '#4e4a44', mirror: true, z: 27.1, turn: -.01 },
	{ x: 7.5, siding: '#8d9a8f', trim: '#e9e3d2', roof: '#5f6660', mirror: false, z: 26.3, turn: 0 },
	{ x: 21.5, siding: '#a5786a', trim: '#e7dfcc', roof: '#4c5250', mirror: true, z: 26.9, turn: .02 },
	{ x: 35.5, siding: '#d0c8b0', trim: '#e4dcc8', roof: '#61655e', mirror: false, z: 27.2, turn: -.015 },
	{ x: 49.5, siding: '#7f8c80', trim: '#ece7d7', roof: '#4b4f4c', mirror: true, z: 26.5, turn: .01 },
	{ x: 63.5, siding: '#b49a7c', trim: '#efe8d6', roof: '#57534d', mirror: false, z: 26.9, turn: 0 },
];
// Near-side lots continue the row past the Victorian and the authored Cape (front faces +z at z≈0).
export const NEAR_LOTS = [
	{ x: -63, siding: '#a9b2a0', trim: '#ede7d5', roof: '#55595a', mirror: false, z: -.6, turn: .01, side: 'near' },
	{ x: -47, siding: '#cbbf9e', trim: '#f0e9d8', roof: '#4d4b47', mirror: true, z: -.2, turn: -.01, side: 'near' },
	{ x: -31, siding: '#98a3a8', trim: '#e9e3d1', roof: '#5b615d', mirror: false, z: -.8, turn: 0, side: 'near' },
	{ x: 31, siding: '#bfae8a', trim: '#ece5d3', roof: '#545a56', mirror: true, z: -.5, turn: .012, side: 'near' },
	{ x: 47, siding: '#9a7f72', trim: '#efe8d6', roof: '#4e5250', mirror: false, z: 0, turn: -.008, side: 'near' },
	{ x: 63, siding: '#c3c6b8', trim: '#e6dfcc', roof: '#5d625e', mirror: true, z: -.4, turn: 0, side: 'near' },
];
export const LOTS = [...FAR_LOTS, ...NEAR_LOTS];
export const CAPE_CENTER = new THREE.Vector3(15, 0, 0); // authored Cape: x 10.8–19.2, front face z≈0
const STREET_MID = 13.8; // centre line of the road between z 9.3 and 18.3

const isCape = o => /^Cape/.test(o.name);
const nearCape = o => { const b = new THREE.Box3().setFromObject(o), c = b.getCenter(new THREE.Vector3()); return c.x > 10 && c.x < 20.5 && c.z > -9.5 && c.z < 3.2; };

// Beds along the house front travel with it; the lone yard bed reads as a hole once repeated.
const frontBed = o => new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3()).z < .8;

function variantMaterial(cache, m, lot) {
	const key = m.uuid + lot.siding;
	if (cache.has(key)) return cache.get(key);
	let out = m;
	if (/cedar paint/i.test(m.name)) { out = m.clone(); out.name = 'Far Cape siding ' + lot.siding; out.color.set(lot.siding); }
	else if (/ivory paint/i.test(m.name)) { out = m.clone(); out.name = 'Far Cape trim ' + lot.trim; out.color.set(lot.trim); }
	else if (/^Cape slate$/i.test(m.name)) { out = m.clone(); out.name = 'Far Cape roof ' + lot.roof; out.color.set(lot.roof); }
	cache.set(key, out); return out;
}

// Even lawn beyond the authored block: [x0, x1, z0, z1, name]. Gaps leave the road band clear.
export const LAWN_TINT = '#a3b67f'; // stands in for the vertex colour the authored lawn carries
export const LAWNS = [
	[-130, 130, 24, 130, 'Far side ground'],
	[-130, -33.6, 19.9, 24, 'Far verge west'], [33.6, 130, 19.9, 24, 'Far verge east'],
	[-130, -28, -70, 7.38, 'Near lawn west'], [23.5, 130, -70, 7.38, 'Near lawn east'],
];

// Matrix that turns the authored Cape to face the street from the far side.
function place(into, src, M, prefix) {
	const mesh = new THREE.Mesh(src.geometry, src.material); mesh.name = prefix + src.name;
	mesh.matrixAutoUpdate = false; mesh.matrix.multiplyMatrices(M, src.matrixWorld); mesh.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
	mesh.castShadow = src.castShadow; mesh.receiveShadow = src.receiveShadow; into.add(mesh); return mesh;
}

// The street runs on past the authored block: repeat the paving, curbs, lawn, blades and the
// pole line by their own run lengths so the seams land on existing joints.
export const RUNS = [
	{ re: /^(Sidewalk[ _]slab|Granite[ _]curb)/, shifts: [-51.7, 51.7] },
	{ re: /^Opposite[ _](curb|sidewalk)/, shifts: [-67.4, 67.4] },
	{ re: /^(Road|Yard)$/, shifts: [-110, 110] },
	{ re: /^Irregular[ _]mown[ _]lawn[ _]blades/, shifts: [-59, 59] },
	{ re: /^Overhead[ _]service[ _]wire/, shifts: [-51.2, 51.2] },
	// Each pole steps outward only, so the copies never land on the other authored pole.
	{ re: /^(Weathered[ _]utility[ _]pole|Utility[ _]crossarm)/, shifts: [-51.2, 51.2], outward: true },
];
export function buildStreetRun(scenes, into, runs = RUNS) {
	const found = [];
	for (const sc of scenes) { sc.updateMatrixWorld(true); sc.traverse(o => { if (o.isMesh) { const run = runs.find(r => r.re.test(o.name) || r.re.test(o.parent?.name || '')); if (run) found.push([o, run]); } }); }
	const added = [], poles = [], c = new THREE.Vector3();
	for (const [o, run] of found) {
		new THREE.Box3().setFromObject(o).getCenter(c);
		const isPole = /pole/i.test(o.name) || /pole/i.test(o.parent?.name || '');
		if (isPole) poles.push([c.x, c.z]);
		for (const dx of run.shifts) {
			if (run.outward && Math.sign(dx) !== Math.sign(c.x - 10)) continue;
			added.push(place(into, o, new THREE.Matrix4().makeTranslation(dx, 0, 0), 'Run '));
			if (isPole) poles.push([c.x + dx, c.z]);
		}
	}
	into.updateMatrixWorld(true);
	const uniq = poles.filter((p, i) => poles.findIndex(q => Math.abs(q[0] - p[0]) < 1) === i).sort((a, b) => a[0] - b[0]);
	return { sources: found.length, meshes: added.length, poles: uniq };
}

export function lotMatrix(lot) {
	const m = new THREE.Matrix4().makeTranslation(lot.x, 0, lot.z)
		.multiply(new THREE.Matrix4().makeRotationY((lot.side === 'near' ? 0 : Math.PI) + lot.turn))
		.multiply(new THREE.Matrix4().makeScale(lot.mirror ? -1 : 1, 1, 1))
		.multiply(new THREE.Matrix4().makeTranslation(-CAPE_CENTER.x, 0, -CAPE_CENTER.z));
	return m;
}

export function buildFarSide(settingScene, into, lots = LOTS) {
	settingScene.updateMatrixWorld(true);
	const sources = [], pines = [], drive = [];
	settingScene.traverse(o => {
		if (!o.isMesh) return;
		if (isCape(o) || (/^shrub/.test(o.name) && nearCape(o)) || (/^Planting[ _]earth/.test(o.name) && nearCape(o) && frontBed(o))) sources.push(o);
		if (/^Distant[ _]pine/.test(o.name)) pines.push(o);
		if (/^Driveway[ _]wheel/.test(o.name)) drive.push(o);
	});
	const cache = new Map(), added = [];
	for (const lot of lots) {
		const M = lotMatrix(lot);
		for (const s of sources) {
			const mats = Array.isArray(s.material) ? s.material.map(m => variantMaterial(cache, m, lot)) : variantMaterial(cache, s.material, lot);
			const mesh = new THREE.Mesh(s.geometry, mats);
			mesh.name = 'Far side ' + s.name;
			mesh.matrixAutoUpdate = false; mesh.matrix.multiplyMatrices(M, s.matrixWorld); mesh.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
			into.add(mesh); added.push(mesh);
		}
		// Near lots get a gravel driveway beside the house, like the Victorian's.
		if (lot.side === 'near') for (const d of drive) added.push(place(into, d, new THREE.Matrix4().makeTranslation(lot.x + (lot.mirror ? -6.55 : 6.55) + 18.45, 0, lot.z), 'Lot '));
	}
	// Pine backdrop mirrored across the street so the far side ends in woods, not sky.
	const flip = new THREE.Matrix4().makeTranslation(0, 0, 22).multiply(new THREE.Matrix4().makeRotationY(Math.PI));
	for (const p of pines) for (const dx of [-100, 0, 100]) {
		const shift = new THREE.Matrix4().makeTranslation(dx, 0, 0);
		added.push(place(into, p, shift.clone().multiply(flip), 'Far side '));
		if (dx) added.push(place(into, p, shift, 'Woods '));
	}
	// Extend the ground behind the far lots so the mirrored woods stand on lawn, not void.
	let lawn = null; settingScene.traverse(o => { if (!lawn && o.isMesh && /^Living[ _]lawn[ _]surface/.test(o.name)) lawn = o.material; });
	if (lawn) {
		const mat = lawn.clone(); mat.name = 'Far side lawn'; mat.vertexColors = false; mat.color.multiply(new THREE.Color(LAWN_TINT)); mat.aoMap = null; mat.lightMap = null;
		for (const [x0, x1, z0, z1, name] of LAWNS) {
			const w = x1 - x0, d = z1 - z0, geo = new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), uv = geo.attributes.uv;
			for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / 3.3, uv.getY(i) * d / 3.3);
			geo.setAttribute('uv1', uv.clone());
			const g = new THREE.Mesh(geo, mat); g.name = name; g.position.set((x0 + x1) / 2, .004, (z0 + z1) / 2); g.receiveShadow = true; into.add(g); added.push(g);
		}
	}
	// Each end of the street runs into woods, so the town closes in rather than stopping.
	for (const p of pines) for (const side of [-1, 1]) added.push(place(into, p, new THREE.Matrix4().makeTranslation(side * 127, 0, 6).multiply(new THREE.Matrix4().makeRotationY(-side * Math.PI / 2)), 'Street end '));
	into.updateMatrixWorld(true);
	return { houses: lots.length, meshes: added.length, sources: sources.length, pines: pines.length };
}

// CC0 Poly Haven props (see assets/props/README.md). Units are metres, Y up.
export const PROPS = [
	{ name: 'metal_trash_can', at: [-9.6, .12, 8.75], rot: .3 },
	{ name: 'metal_trash_can', at: [-3.0, .12, 19.15], rot: 2.9 },
	{ name: 'fire_hydrant', at: [2.6, .12, 8.75], rot: Math.PI },
	{ name: 'covered_car', at: [-18.45, 0, -1.2], rot: 0, fitLength: 4.9 },
	{ name: 'metal_trash_can', at: [-24.9, .12, 8.7], rot: 1.1 },
	{ name: 'metal_trash_can', at: [47.6, .12, 19.2], rot: -.4 },
	{ name: 'fire_hydrant', at: [-44, .12, 8.75], rot: Math.PI },
	{ name: 'fire_hydrant', at: [42, .12, 19.05], rot: 0 },
];
export async function placeProps(loader, into, props = PROPS, base = './assets/props/') {
	const cache = new Map(), placed = [];
	for (const p of props) {
		if (!cache.has(p.name)) cache.set(p.name, loader.loadAsync(`${base}${p.name}/${p.name}.gltf`).then(g => g.scene));
		const src = await cache.get(p.name), obj = src.clone(true);
		obj.name = 'Prop ' + p.name;
		if (p.fitLength) { const s = new THREE.Box3().setFromObject(src).getSize(new THREE.Vector3()); obj.scale.setScalar(p.fitLength / Math.max(s.x, s.z)); if (s.x > s.z) p.rot += Math.PI / 2; }
		obj.position.set(...p.at); obj.rotation.y = p.rot;
		obj.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
		into.add(obj); placed.push(obj);
	}
	return placed;
}

// Street lamps: an original gooseneck arm with an enamel reflector on each utility pole, the
// way small New England towns lit their streets. Off in the afternoon; at rainy dusk they come
// on one after another, with a halo in the wet air and a warm pool on the road.
function glowTexture(stops) {
	if (typeof document === 'undefined') return null;
	const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
	const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64); for (const [o, col] of stops) gr.addColorStop(o, col);
	g.fillStyle = gr; g.fillRect(0, 0, 128, 128); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export const LAMP = { armHeight: 6.35, reach: 1.9, lit: 7, lights: 2 };
export function lampCurve() {
	return new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, .12), new THREE.Vector3(0, .32, .55), new THREE.Vector3(0, .46, 1.2), new THREE.Vector3(0, .34, LAMP.reach - .15), new THREE.Vector3(0, .16, LAMP.reach)]);
}
export function buildLamps(scene, poles, opts = {}) {
	const near = opts.near ?? [-6, 10];
	const metal = new THREE.MeshStandardMaterial({ name: 'Lamp arm', color: '#3a3d3a', roughness: .55, metalness: .6 });
	const enamel = new THREE.MeshStandardMaterial({ name: 'Lamp reflector', color: '#3f4f45', roughness: .4, metalness: .1, side: THREE.DoubleSide });
	const armGeo = new THREE.TubeGeometry(lampCurve(), 16, .035, 6);
	const shadeGeo = new THREE.LatheGeometry([[.02, .1], [.12, .08], [.28, .03], [.4, -.04], [.42, -.06]].map(([r, y]) => new THREE.Vector2(r, y)), 20);
	const bulbGeo = new THREE.SphereGeometry(.075, 12, 8);
	const haloTex = glowTexture([[0, 'rgba(255,236,200,1)'], [.15, 'rgba(255,210,150,.55)'], [.5, 'rgba(255,190,120,.12)'], [1, 'rgba(0,0,0,0)']]);
	const poolTex = glowTexture([[0, 'rgba(255,205,140,.9)'], [.45, 'rgba(255,180,110,.35)'], [1, 'rgba(0,0,0,0)']]);
	const poolGeo = new THREE.CircleGeometry(4.2, 32).rotateX(-Math.PI / 2);
	const lamps = [];
	poles.forEach(([x, z], i) => {
		const g = new THREE.Group(); g.name = 'Street lamp ' + i; g.position.set(x, LAMP.armHeight, z);
		const arm = new THREE.Mesh(armGeo, metal); arm.castShadow = true;
		const head = new THREE.Group(); head.position.set(0, .16, LAMP.reach);
		const shade = new THREE.Mesh(shadeGeo, enamel); shade.castShadow = true;
		const bulbMat = new THREE.MeshStandardMaterial({ name: 'Lamp bulb', color: '#d8d2c2', emissive: '#ffcf8a', emissiveIntensity: 0, roughness: .3 });
		const bulb = new THREE.Mesh(bulbGeo, bulbMat); bulb.position.y = -.08;
		const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, color: '#ffe2b8', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, fog: false }));
		halo.position.y = -.1; halo.scale.setScalar(1.9);
		head.add(shade, bulb, halo); g.add(arm, head); scene.add(g);
		const pool = new THREE.Mesh(poolGeo, new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, polygonOffset: true, polygonOffsetFactor: -2 }));
		pool.name = 'Lamp pool ' + i; pool.position.set(x, .02, z + LAMP.reach + .6); scene.add(pool);
		let light = null;
		if (x > near[0] - 30 && x < near[1] + 30 && lamps.filter(l => l.light).length < LAMP.lights) {
			light = new THREE.PointLight('#ffc98a', 0, 16, 2); light.position.set(x, LAMP.armHeight - .05, z + LAMP.reach); scene.add(light);
		}
		lamps.push({ group: g, bulbMat, halo, pool, light, on: 0, at: .35 + .12 * i });
	});
	return {
		lamps,
		update(dt, rain) {
			for (const l of lamps) {
				const want = rain > l.at ? 1 : 0;
				l.on = want > l.on ? Math.min(1, l.on + dt * 1.6) : Math.max(0, l.on - dt * .8);
				const k = l.on * Math.min(1, rain * 1.4);
				l.bulbMat.emissiveIntensity = k * LAMP.lit;
				l.halo.material.opacity = k * .6;
				l.pool.material.opacity = k * .32;
				if (l.light) l.light.intensity = k * 55;
			}
		},
	};
}
