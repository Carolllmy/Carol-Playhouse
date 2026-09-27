// Neutral inspection page for face-performer.js: front, three-quarter and side
// views of any GLB plus mapping. ?model=path.glb&map=path.json overrides the menu.
import * as THREE from 'three';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js';
import { HDRLoader } from './vendor/loaders/HDRLoader.js';
import { loadFaceCharacter } from './face-performer.js';

const ASSETS = {
	lee: { model: 'assets/test-heads/lee-perry-smith/LeePerrySmith.glb', map: 'assets/test-heads/lee-perry-smith/face-map.json' },
	fixture: { model: 'assets/test-heads/rig-fixture/rig-fixture.glb', map: 'assets/test-heads/rig-fixture/face-map.json' },
};
const $ = id => document.getElementById(id), params = new URLSearchParams(location.search);
const canvas = $('c'), renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: params.has('qa') });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1; renderer.setScissorTest(true);
const scene = new THREE.Scene(), bg = new THREE.Color('#3a3d40');
const pmrem = new THREE.PMREMGenerator(renderer);

// Lighting rigs.
const studio = new THREE.Group(), sky = new THREE.Group();
const key = new THREE.DirectionalLight('#fff4e8', 2.2); key.position.set(.9, 1.1, 1.3); studio.add(key);
const fill = new THREE.DirectionalLight('#dfe7f2', .55); fill.position.set(-1.2, .3, .8); studio.add(fill);
const rim = new THREE.DirectionalLight('#ffffff', 1.1); rim.position.set(-.4, .9, -1.4); studio.add(rim);
const top = new THREE.DirectionalLight('#cfd9df', 2.4); top.position.set(0, 3, .35); sky.add(top);
scene.add(studio, sky); sky.visible = false;
let envStudio = null, envSky = null;
new HDRLoader().load('assets/overcast.hdr', hdr => {
	hdr.mapping = THREE.EquirectangularReflectionMapping;
	envStudio = pmrem.fromEquirectangular(hdr).texture; envSky = envStudio; applyLight(); hdr.dispose();
});
function applyLight() {
	const m = $('light').value; studio.visible = m === 'studio'; sky.visible = m === 'sky';
	scene.environment = envStudio; scene.environmentIntensity = m === 'sky' ? .12 : .5;
}

const views = [0, Math.PI / 4, Math.PI / 2].map(a => ({ angle: a, cam: new THREE.PerspectiveCamera(22, 1, .01, 20) }));
let char = null, center = new THREE.Vector3(), radius = .15, lungeUntil = 0;
const clock = new THREE.Timer(), gazePoint = new THREE.Vector3();

async function load(model, mapUrl) {
	$('report').textContent = 'Loading…';
	if (char) { scene.remove(char.root); char.root.traverse(o => { if (o.isMesh) { o.geometry.dispose(); } }); char = null; }
	try {
		char = await loadFaceCharacter({ url: model, mappingUrl: mapUrl, loader: new GLTFLoader(), textureLoader: new THREE.TextureLoader(), seed: 3, auto: $('auto').checked });
	} catch (e) { $('report').innerHTML = `<span class="warn">Could not load ${model}: ${e.message}</span>`; console.error(e); return; }
	scene.add(char.root);
	char.root.updateMatrixWorld(true);
	const box = new THREE.Box3().setFromObject(char.root); box.getCenter(center); radius = box.getSize(new THREE.Vector3()).length() / 2;
	let tris = 0; char.root.traverse(o => { if (o.isMesh) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; });
	const r = char.report, map = char.rig.mapping, yes = v => v ? '<b>yes</b>' : '<span class="warn">no</span>';
	$('report').innerHTML = `<b>${map.name || model}</b>\n` +
		`gaze ${yes(r.capabilities.gaze)} (${r.sources.gaze || '—'})  independent eyes ${yes(r.capabilities.independentEyes)}\n` +
		`blink ${yes(r.capabilities.blink)} (${r.sources.blink || '—'})  jaw ${yes(r.capabilities.jaw)} (${r.sources.jaw || '—'})\n` +
		`head via ${r.sources.head}\n` +
		`materials skin ${r.materials.skin} · eye ${r.materials.eye} · teeth ${r.materials.teeth} · mouth ${r.materials.mouth}\n` +
		`${Math.round(tris).toLocaleString()} triangles` + (r.missing.length ? `\n<span class="warn">missing: ${r.missing.join(', ')}</span>` : '') +
		(map.attribution ? `\n${map.attribution}` : '');
	window.__faceInspect = { ready: true, report: r, triangles: tris, performer: char.performer };
}

function modelFromUi() {
	if (params.get('model')) return load(params.get('model'), params.get('map'));
	const a = ASSETS[$('asset').value]; return load(a.model, a.map);
}
if (params.get('asset') && ASSETS[params.get('asset')]) $('asset').value = params.get('asset');
if (params.get('light')) $('light').value = params.get('light');
$('asset').onchange = modelFromUi; $('light').onchange = applyLight;
$('auto').onchange = () => { if (char) char.performer.auto = $('auto').checked; };
for (const id of ['gx', 'gy', 'blink', 'jaw', 'yaw', 'pitch']) {
	const el = $(id), out = el.parentElement.querySelector('output');
	const sync = () => { out.textContent = (+el.value).toFixed(2); if (!char) return; const m = char.performer.manual; if (id in m) m[id] = +el.value; };
	el.oninput = sync; sync();
}
$('neutral').onclick = () => { for (const id of ['gx', 'gy', 'blink', 'jaw', 'yaw', 'pitch']) { $(id).value = 0; $(id).oninput(); } if (char) char.performer.reset(); };
$('lunge').onclick = () => { if (!char) return; char.performer.startLunge(new THREE.Vector3(0, 0, 1), radius * .9); lungeUntil = clock.getElapsed() + 1.4; };
addEventListener('keydown', e => { if (e.key === 'Escape' && char) { char.performer.stopLunge(); char.performer.reset(); } });

function frame() {
	clock.update(); const dt = Math.min(clock.getDelta(), .1), w = innerWidth, h = Math.max(1, innerHeight - (innerWidth > 820 ? 188 : innerHeight * .46));
	renderer.setSize(w, h, false);
	if (char) {
		const p = char.performer;
		for (const id of ['blink', 'jaw', 'yaw', 'pitch']) p.manual[id] = +$(id).value;
		if (lungeUntil && clock.getElapsed() > lungeUntil) { p.stopLunge(); p.reset(); lungeUntil = 0; }
		const front = views[0].cam.position;
		if ($('track').checked) gazePoint.copy(front); else gazePoint.set(center.x, center.y, center.z + 1);
		gazePoint.x += +$('gx').value * .6; gazePoint.y += +$('gy').value * .4;
		p.lookAt(gazePoint); p.update(dt);
	}
	const cols = views.length, vw = Math.floor(w / cols);
	for (let i = 0; i < cols; i++) {
		const v = views[i], dist = radius / Math.sin(THREE.MathUtils.degToRad(v.cam.fov / 2)) * .82;
		v.cam.aspect = vw / h; v.cam.updateProjectionMatrix();
		v.cam.position.set(center.x + Math.sin(v.angle) * dist, center.y + radius * .08, center.z + Math.cos(v.angle) * dist); v.cam.lookAt(center);
		renderer.setViewport(i * vw, 0, vw, h); renderer.setScissor(i * vw, 0, vw, h);
		scene.background = bg; renderer.render(scene, v.cam);
	}
	requestAnimationFrame(frame);
}
applyLight(); modelFromUi(); requestAnimationFrame(frame);
