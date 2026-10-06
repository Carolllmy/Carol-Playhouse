// Study 06: the other side of the street.
// Re-uses the authored Cape (a 1940s tract house type that was genuinely built in
// repeated rows) to line the far side, each lot with its own paint, roof, chimney
// side and planting; mirrors the pine backdrop behind them; and places CC0 street
// props. Everything is added before the scene's batching pass, so it merges into
// the existing draw calls per material.
import * as THREE from 'three';

// Far-side lots: centre x, paint (siding), trim, roof, mirrored chimney, setback jitter.
export const FAR_LOTS = [
	{ x: -21.5, siding: '#c9c2ad', trim: '#ece6d6', roof: '#59605a', mirror: false, z: 26.6, turn: .015 },
	{ x: -7.5, siding: '#b9a873', trim: '#f0e9d6', roof: '#4e4a44', mirror: true, z: 27.1, turn: -.01 },
	{ x: 7.5, siding: '#8d9a8f', trim: '#e9e3d2', roof: '#5f6660', mirror: false, z: 26.3, turn: 0 },
	{ x: 21.5, siding: '#a5786a', trim: '#e7dfcc', roof: '#4c5250', mirror: true, z: 26.9, turn: .02 },
];
export const CAPE_CENTER = new THREE.Vector3(15, 0, 0); // authored Cape: x 10.8–19.2, front face z≈0
const STREET_MID = 13.8; // centre line of the road between z 9.3 and 18.3

const isCape = o => /^Cape/.test(o.name);
const nearCape = o => { const b = new THREE.Box3().setFromObject(o), c = b.getCenter(new THREE.Vector3()); return c.x > 10 && c.x < 20.5 && c.z > -9.5 && c.z < 3.2; };

function variantMaterial(cache, m, lot) {
	const key = m.uuid + lot.siding;
	if (cache.has(key)) return cache.get(key);
	let out = m;
	if (/cedar paint/i.test(m.name)) { out = m.clone(); out.name = 'Far Cape siding ' + lot.siding; out.color.set(lot.siding); }
	else if (/ivory paint/i.test(m.name)) { out = m.clone(); out.name = 'Far Cape trim ' + lot.trim; out.color.set(lot.trim); }
	else if (/^Cape slate$/i.test(m.name)) { out = m.clone(); out.name = 'Far Cape roof ' + lot.roof; out.color.set(lot.roof); }
	cache.set(key, out); return out;
}

// Matrix that turns the authored Cape to face the street from the far side.
export function lotMatrix(lot) {
	const m = new THREE.Matrix4().makeTranslation(lot.x, 0, lot.z)
		.multiply(new THREE.Matrix4().makeRotationY(Math.PI + lot.turn))
		.multiply(new THREE.Matrix4().makeScale(lot.mirror ? -1 : 1, 1, 1))
		.multiply(new THREE.Matrix4().makeTranslation(-CAPE_CENTER.x, 0, -CAPE_CENTER.z));
	return m;
}

export function buildFarSide(settingScene, into, lots = FAR_LOTS) {
	settingScene.updateMatrixWorld(true);
	const sources = [], pines = [];
	settingScene.traverse(o => {
		if (!o.isMesh) return;
		if (isCape(o) || (/^(shrub|Planting[ _]earth)/.test(o.name) && nearCape(o))) sources.push(o);
		if (/^Distant[ _]pine/.test(o.name)) pines.push(o);
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
	}
	// Pine backdrop mirrored across the street so the far side ends in woods, not sky.
	const flip = new THREE.Matrix4().makeTranslation(0, 0, 22).multiply(new THREE.Matrix4().makeRotationY(Math.PI));
	for (const p of pines) {
		const mesh = new THREE.Mesh(p.geometry, p.material); mesh.name = 'Far side ' + p.name;
		mesh.matrixAutoUpdate = false; mesh.matrix.multiplyMatrices(flip, p.matrixWorld); mesh.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
		into.add(mesh); added.push(mesh);
	}
	// Extend the ground behind the far lots so the mirrored woods stand on lawn, not void.
	let lawn = null; settingScene.traverse(o => { if (!lawn && o.isMesh && /^Living[ _]lawn[ _]surface/.test(o.name)) lawn = o.material; });
	if (lawn) { const geo = new THREE.PlaneGeometry(160, 106).rotateX(-Math.PI / 2), uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 48, uv.getY(i) * 32); geo.setAttribute('uv1', uv.clone()); const mat = lawn.clone(); mat.name = 'Far side lawn'; mat.vertexColors = false; mat.aoMap = null; mat.lightMap = null; const g = new THREE.Mesh(geo, mat); g.name = 'Far side ground'; g.position.set(0, .004, 77); g.receiveShadow = true; into.add(g); added.push(g); }
	into.updateMatrixWorld(true);
	return { houses: lots.length, meshes: added.length, sources: sources.length, pines: pines.length };
}

// CC0 Poly Haven props (see assets/props/README.md). Units are metres, Y up.
export const PROPS = [
	{ name: 'metal_trash_can', at: [-9.6, .12, 8.75], rot: .3 },
	{ name: 'metal_trash_can', at: [-3.0, .12, 19.15], rot: 2.9 },
	{ name: 'fire_hydrant', at: [2.6, .12, 8.75], rot: Math.PI },
	{ name: 'covered_car', at: [-18.45, 0, -1.2], rot: 0, fitLength: 4.9 },
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
