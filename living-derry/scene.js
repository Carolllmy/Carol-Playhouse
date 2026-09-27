import * as THREE from 'three';
import { RoundedBoxGeometry } from './vendor/RoundedBoxGeometry.js';
import { Reflector } from './vendor/objects/Reflector.js';
import { Tree } from './vendor/ez-tree.js';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js';
import { mergeGeometries } from './vendor/BufferGeometryUtils.js';

const $ = id => document.getElementById(id);
const canvas = $('world');
let renderer;
try { renderer = new THREE.WebGLRenderer({canvas, antialias:true, powerPreference:'low-power'}); }
catch(e){ $('loading').innerHTML='<p>This study needs WebGL2. Please open it in an up-to-date browser with graphics acceleration enabled.</p>'; throw e; }
renderer.setPixelRatio(1);
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.05;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate=false;
const scene=new THREE.Scene(); scene.fog=new THREE.FogExp2('#c3c4a6',.0105);
const camera=new THREE.PerspectiveCamera(44,1,.1,260);
camera.position.set(-2.8,1.48,12);
const clock={time:0}, wind={value:0};
const wetness={value:0};
const state={weather:0,targetWeather:0,stroll:false,strollT:0,quality:'battery',reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,hidden:document.hidden,sound:false,scale:1};
let seed=915;
function rand(a=0,b=1){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return a+(seed/4294967296)*(b-a);}
const clamp=THREE.MathUtils.clamp;
const mix=THREE.MathUtils.lerp;
const groups=new Map(), materials={}, windows=[], glows=[];
const unitBox=new THREE.BoxGeometry(1,1,1), leafGeo=new THREE.PlaneGeometry(1,1);
const dummy=new THREE.Object3D(), tmp=new THREE.Vector3();
function material(name,color,roughness=.85,extra={}){const m=new THREE.MeshStandardMaterial({color,roughness,...extra});materials[name]=m;return m;}
const trim=material('trim','#dfd7bd'), roof=material('roof','#343d3a'), wood=material('wood','#71634b'), foundation=material('foundation','#77786d'), dark=material('dark','#243b33'), metal=material('metal','#333c37',.52,{metalness:.35});
const windowMat=material('windows','#4e655c',.26,{metalness:.2,emissive:'#efac51',emissiveIntensity:.09});
const porchWood=material('porch','#8b8770'), brick=material('brick','#805e4b'), soil=material('soil','#767857');
function batch(geo,mat,pos=[0,0,0],scale=[1,1,1],rot=[0,0,0],parent=null){dummy.position.set(...pos);dummy.scale.set(...scale);dummy.rotation.set(...rot);dummy.updateMatrix();let matrix=dummy.matrix.clone();if(parent)matrix.premultiply(parent);const g=geo.index?geo.toNonIndexed():geo.clone();g.applyMatrix4(matrix);
 const posA=g.attributes.position,normA=g.attributes.normal,uvA=g.attributes.uv;
 if(mat.userData.tile&&uvA){for(let i=0;i<posA.count;i++){const nx=Math.abs(normA.getX(i)),ny=Math.abs(normA.getY(i)),nz=Math.abs(normA.getZ(i));let u,v;if(ny>nx&&ny>nz){u=posA.getX(i);v=posA.getZ(i);}else if(nx>nz){u=posA.getZ(i);v=posA.getY(i);}else{u=posA.getX(i);v=posA.getY(i);}if(mat===materials.slate){u=nx>nz?posA.getZ(i):posA.getX(i);v=posA.getY(i)*1.65;}uvA.setXY(i,u/mat.userData.tile,v/mat.userData.tile);}}
if(!groups.has(mat))groups.set(mat,[]);groups.get(mat).push(g);}
const bevelCache=new Map();
function box(mat,pos,scale,rot=[0,0,0],parent=null){
 const bevel=[materials.paleTrim,materials.pavement,foundation,porchWood].includes(mat)&&Math.min(...scale)>.045&&Math.max(...scale)<12;
 if(!bevel){batch(unitBox,mat,pos,scale,rot,parent);return;}
 const key=scale.join(',');let g=bevelCache.get(key);if(!g){g=new RoundedBoxGeometry(...scale,1,Math.min(.018,Math.min(...scale)*.16));bevelCache.set(key,g);}batch(g,mat,pos,[1,1,1],rot,parent);
}
function tube(a,b,r,mat,parent=null,r2=r){const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),len=av.distanceTo(bv),g=new THREE.CylinderGeometry(r2,r,len,7);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),bv.clone().sub(av).normalize()));g.translate(...av.add(bv).multiplyScalar(.5).toArray());batch(g,mat,[0,0,0],[1,1,1],[0,0,0],parent);g.dispose();}
function matTransform(x,z,rotation=0,scale=1){return new THREE.Matrix4().compose(new THREE.Vector3(x,0,z),new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),rotation),new THREE.Vector3(scale,scale,scale));}
const manager=new THREE.LoadingManager();let assetsFailed=false;
manager.onError=()=>{assetsFailed=true;};
const loader=new THREE.TextureLoader(manager);
function texture(file,repeat,normal=false){const t=loader.load('./assets/'+file);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(...repeat);if(!normal)t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());return t;}
const asphalt=material('asphalt','#adb1a3',.95,{map:texture('aerial_asphalt_01_Diffuse.jpg',[2,36]),normalMap:texture('aerial_asphalt_01_nor_gl.jpg',[2,36],true),normalScale:new THREE.Vector2(.4,.4)});
asphalt.onBeforeCompile=shader=>{shader.uniforms.uWet=wetness;shader.vertexShader='varying vec3 vRoad;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvRoad=position;');shader.fragmentShader='uniform float uWet;varying vec3 vRoad;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
 float edge=smoothstep(2.4,4.,abs(vRoad.x));roughnessFactor=mix(roughnessFactor,.44,uWet);diffuseColor.rgb*=mix(1.,.78,uWet*(.5+.5*edge));`);};
const grass=material('ground','#8a9870',1,{map:texture('forrest_ground_01_Diffuse.jpg',[32,48]),normalMap:texture('forrest_ground_01_nor_gl.jpg',[32,48],true),normalScale:new THREE.Vector2(.2,.2)});
const bark=material('bark','#969385',.98,{map:texture('bark_brown_02_Diffuse.jpg',[1,3]),normalMap:texture('bark_brown_02_nor_gl.jpg',[1,3],true),normalScale:new THREE.Vector2(.55,.55)});
function pbr(name,slug,color,tile=2){const m=material(name,color,.9,{map:texture(slug+'_diff.jpg',[1,1]),normalMap:texture(slug+'_nor_gl.jpg',[1,1],true),roughnessMap:texture(slug+'_rough.jpg',[1,1],true),normalScale:new THREE.Vector2(.65,.65)});m.userData.tile=tile;m.onBeforeCompile=shader=>{shader.vertexShader='varying vec3 vSurface;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvSurface=position;');shader.fragmentShader='varying vec3 vSurface;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 float fade=.93+.045*sin(vSurface.x*.73+vSurface.y*1.8)*sin(vSurface.z*.49+vSurface.y*.6);float baseDirt=1.-.14*exp(-max(vSurface.y,0.)*1.8);diffuseColor.rgb*=fade*baseDirt;`);};return m;}
const pavement=pbr('pavement','concrete_pavement','#b7b7aa',2);
const slate=pbr('slate','roof_slates_02','#424942',2.3);
const warmBoards=pbr('warmBoards','brown_planks_03','#97917f',2.5);
const masonry=pbr('masonry','red_brick','#b09a88',2);
const painted=pbr('painted','white_planks_clean','#c6c4b4',3.2);
const capePaint=pbr('capePaint','white_planks_clean','#7f999a',3.2);
const redPaint=pbr('redPaint','white_planks_clean','#996d57',3.2);
const paleTrim=pbr('paleTrim','brown_planks_03','#d5cdb7',2);
const recess=material('recess','#202720');
const interior=material('interior','#d6b47e',.97,{emissive:'#9a632e',emissiveIntensity:.12});
const glass=material('glass','#8a9992',.16,{metalness:.28,transparent:true,opacity:.38,depthWrite:false});
const velvet=material('door','#3f514e',.72), rust=material('rust','#806346',.88);
const fabric=material('linen','#b9af94',.96,{side:THREE.DoubleSide});
box(grass,[0,-.20,-30],[140,.35,190]);
box(asphalt,[0,-.025,-30],[8,.08,160]);
for(const side of [-1,1]){
 for(let z=-103;z<49;z+=1.7){box(pavement,[side*5.10,.092+rand(-.008,.008),z],[1.72,.18,1.68],[rand(-.001,.001),rand(-.002,.002),rand(-.004,.004)]);if(side===-1&&Math.abs(z+7.8)<.1){for(const dz of [-.575,.575])box(foundation,[side*4.14,.09,z+dz],[.23,.26,.51]);}else box(foundation,[side*4.14,.09,z],[.23,.26,1.66]);}
}
// Three individually authored building types, with a shared construction kit.
function opening(p,x,y,z,w=1.04,h=1.56,shutters=false){
 box(recess,[x,y,z-.24],[w+.18,h+.18,.03],[0,0,0],p);
 box(interior,[x,y,z-.19],[w-.07,h-.08,.025],[0,0,0],p);
 // Curtains sit behind glass, with actual depth in the window reveal.
 for(const side of [-1,1])for(let i=0;i<5;i++)box(fabric,[x+side*(w*.25+i*.03),y,z-.115+Math.sin(i*1.3)*.018],[.06,h*.95,.025],[0,0,0],p);
 box(glass,[x,y,z+.015],[w,h,.02],[0,0,0],p);
 for(const dx of [-w/2-.045,w/2+.045])box(paleTrim,[x+dx,y,z+.03],[.09,h+.20,.15],[0,0,0],p);
 for(const dy of [-h/2,h/2])box(paleTrim,[x,y+dy,z+.045],[w+.20,.10,.16],[0,0,0],p);
 box(paleTrim,[x,y,z+.04],[w,.065,.065],[0,0,0],p);
 box(paleTrim,[x,y,z+.035],[.037,h,.05],[0,0,0],p);
 box(paleTrim,[x,y-h/2-.075,z+.11],[w+.32,.09,.32],[0,0,0],p);
 // Separate sill apron and lintel cap give believable shadow breaks.
 box(paleTrim,[x,y+h/2+.12,z+.085],[w+.31,.045,.21],[0,0,0],p);
 if(shutters)for(const side of [-1,1]){const sx=x+side*(w*.5+.30);box(velvet,[sx,y,z],[.37,h+.04,.07],[0,0,0],p);for(let k=0;k<13;k++)box(wood,[sx,y-h*.43+k*h*.071,z+.047],[.28,.045,.05],[.35,0,0],p);}
}
function wall(p,w,h,d,mat,win=[],base=.46){
 // Wall segments leave real window apertures instead of placing glass on a solid block.
 for(const [front,rot] of [[d/2,0],[-d/2,Math.PI]]){
 const pp=p.clone().multiply(matTransform(0,front,rot));
 const cuts=front>0?win:[];
 for(let y=base;y<base+h;y+=.13){const high=Math.min(.13,base+h-y);let spans=[[-w/2,w/2]];
 for(const o of cuts)if(y+high>o[1]-o[4]/2-.07&&y<o[1]+o[4]/2+.07){const lo=o[0]-o[3]/2-.06,hi=o[0]+o[3]/2+.06;spans=spans.flatMap(([a,b])=>hi<=a||lo>=b?[[a,b]]:[[a,Math.max(a,lo)],[Math.min(b,hi),b]].filter(([a,b])=>b-a>.001));}
 for(const [a,b] of spans)box(mat,[(a+b)/2,y+high/2,0],[b-a,high-.006,.105],[.035,0,0],pp);
 }
 }
 for(const side of [-1,1])for(let y=base;y<base+h;y+=.13){let spans=[[-d/2,d/2]];if(w===6.4&&((y+.13>1.95-.78&&y<1.95+.78)||(y+.13>4.22-.78&&y<4.22+.78))){for(const zz of [-2.25,.5])spans=spans.flatMap(([a,b])=>zz+.58<=a||zz-.58>=b?[[a,b]]:[[a,Math.max(a,zz-.58)],[Math.min(b,zz+.58),b]].filter(([a,b])=>b-a>.001));}for(const [a,b] of spans)box(mat,[side*w/2,y+.06,(a+b)/2],[.1,.124,b-a],[0,0,-side*.035],p);}
 for(const xx of [-w/2,w/2])for(const zz of [-d/2,d/2])box(paleTrim,[xx,base+h/2,zz],[.13,h,.14],[0,0,0],p);
 box(masonry,[0,base/2,0],[w+.08,base,d+.08],[0,0,0],p);
 for(const o of win)opening(p,o[0],o[1],d/2+.01,o[3],o[4],o[5]);
}
function gable(p,w,d,eave,rise,mat,along=false){
 const q=along?p.clone().multiply(matTransform(0,0,Math.PI/2)):p;
 const ww=along?d:w,dd=along?w:d;
 const sh=new THREE.Shape();sh.moveTo(-ww/2,0);sh.lineTo(ww/2,0);sh.lineTo(0,rise);sh.closePath();
 const g=new THREE.ExtrudeGeometry(sh,{depth:dd,bevelEnabled:false});batch(g,mat,[0,eave,-dd/2],[1,1,1],[0,0,0],q);g.dispose();
 const run=ww/2+.35,r=rise+.2,sl=Math.atan2(r,run);
 for(const side of [-1,1]){box(slate,[side*run/2,eave+r/2,0],[Math.hypot(run,r),.11,dd+.8],[0,0,-side*sl],q);
 for(const zz of [-dd/2-.41,dd/2+.41])box(paleTrim,[side*run/2,eave+r/2-.035,zz],[Math.hypot(run,r),.16,.13],[0,0,-side*sl],q);
 box(paleTrim,[side*run,eave-.04,0],[.13,.21,dd+.75],[0,0,0],q);tube([side*run,eave+.01,-dd/2],[side*run,eave+.01,dd/2],.07,metal,q);}
 box(slate,[0,eave+r+.05,0],[.17,.10,dd+.83],[0,0,0],q);
}

function chimney(p,x,z,y){box(masonry,[x,y,z],[.68,2.3,.76],[0,0,0],p);box(foundation,[x,y+1.18,z],[.85,.11,.9],[0,0,0],p);box(recess,[x,y+1.245,z],[.43,.025,.55],[0,0,0],p);}
function door(p,x,z){box(recess,[x,1.58,z-.06],[1.25,2.35,.17],[0,0,0],p);box(velvet,[x,1.55,z],[1.03,2.16,.09],[0,0,0],p);for(const y of [.85,1.5])for(const dx of [-.25,.25])box(wood,[x+dx,y,z+.049],[.38,.46,.012],[0,0,0],p);box(windowMat,[x,2.20,z+.06],[.78,.50,.02],[0,0,0],p);for(const dx of [-.60,.60])box(paleTrim,[x+dx,1.58,z+.05],[.11,2.45,.16],[0,0,0],p);box(paleTrim,[x,2.82,z+.04],[1.34,.15,.2],[0,0,0],p);batch(new THREE.SphereGeometry(.038,10,8),rust,[x+.39,1.45,z+.13],[1,1,1],[0,0,0],p);}
function porch(p,x,z,width,depth){
 const q=p.clone().multiply(matTransform(x,z));
 box(recess,[0,.24,0],[width,.43,depth],[0,0,0],q);
 for(let xx=-width/2;xx<width/2;xx+=.14)box(warmBoards,[xx,.49,0],[.132,.07,depth],[0,0,0],q);
 for(const xx of [-width/2+.1,width/2-.1]){box(paleTrim,[xx,1.91,depth/2-.13],[.15,2.82,.15],[0,0,0],q);box(paleTrim,[xx,.66,depth/2-.13],[.24,.27,.24],[0,0,0],q);box(paleTrim,[xx,3.19,depth/2-.13],[.27,.17,.27],[0,0,0],q);}
 box(warmBoards,[0,3.16,0],[width,.06,depth],[0,0,0],q);box(slate,[0,3.42,0],[width+.55,.11,depth+.4],[.13,0,0],q);box(paleTrim,[0,3.20,depth/2+.13],[width+.5,.20,.13],[0,0,0],q);
 for(let xx=-width/2;xx<width/2;xx+=.43)box(wood,[xx,3.23,0],[.065,.10,depth],[.13,0,0],q);
 for(const side of [-1,1]){for(const yy of [.68,1.36])box(paleTrim,[side*(width/4+.52),yy,depth/2-.12],[width/2-1.15,.08,.11],[0,0,0],q);for(let xx=1.08;xx<width/2-.1;xx+=.15)box(paleTrim,[side*xx,1.01,depth/2-.12],[.035,.62,.035],[0,0,0],q);}
 for(let i=0;i<3;i++)box(pavement,[0,.075*(i+1),depth/2+.81-i*.31],[1.94,.15*(i+1),.33],[0,0,0],q);
 for(let xx=-width/2+.08;xx<width/2;xx+=.17)box(paleTrim,[xx,.23,depth/2+.015],[.038,.33,.04],[0,0,.5],q);
 return q;
}
// Hero: narrow gable-front New Englander, off-centre entry and a lower rear wing.
const hero=matTransform(-12,-3,Math.PI/2);
wall(hero,6.4,5.15,7.8,painted,[[-1.65,1.86,0,1.14,1.56],[1.65,1.86,0,1.14,1.56],[-1.55,4.19,0,1.05,1.53],[1.55,4.19,0,1.05,1.53]]);
gable(hero,6.4,7.8,5.61,2.65,painted);opening(hero,0,6.65,3.92,.66,.96);door(hero,0,4.02);
const hp=porch(hero,0,5.04,6.55,2.45);chimney(hero,.9,1.35,8.1);
const wing=hero.clone().multiply(matTransform(-.8,-5.6));wall(wing,4.7,2.8,4.2,capePaint,[[0,1.9,0,1.3,1.4]]);gable(wing,4.7,4.2,3.26,1.15,capePaint,true);
for(const side of [-1,1])for(const zz of [-2.25,.5]){const q=hero.clone().multiply(matTransform(side*3.28,zz,side*Math.PI/2));opening(q,0,1.95,0);opening(q,0,4.22,0);}
// Cape: wide single-storey body, crosswise roof, two different dormers and an entry stoop.
const cape=matTransform(12.8,-24,-Math.PI/2);
wall(cape,9.1,2.55,6.3,capePaint,[[-3,1.76,0,1.25,1.45,true],[3,1.76,0,1.25,1.45,true]]);gable(cape,9.1,6.3,3.01,3.0,capePaint,true);door(cape,0,3.26);
for(const xx of [-2.65,2.6]){const q=cape.clone().multiply(matTransform(xx,1.50));wall(q,1.6,1.58,1.85,capePaint,[],3.35);gable(q,1.6,1.85,4.93,.74,capePaint);opening(q,0,4.14,.96,.92,1.1);}
for(let i=0;i<3;i++)box(pavement,[0,.065*(i+1),3.99-i*.25],[1.65,.13*(i+1),.33],[0,0,0],cape);chimney(cape,2.9,-.8,5.6);
// Foursquare: square plan, pyramidal roof, inset entry, projecting bay and a side verandah.
const square=matTransform(-14.7,-34,Math.PI/2);
wall(square,7.6,5.4,7.3,redPaint,[[-2.0,1.98,0,1.25,1.7],[-2.0,4.5,0,1.25,1.65],[.25,4.5,0,1.15,1.65],[2.3,4.5,0,1.15,1.65]]);
const hip=new THREE.ConeGeometry(6.0,2.45,4);batch(hip,slate,[0,7.04,0],[1,1,1],[0,Math.PI/4,0],square);door(square,1.7,3.76);porch(square,1.25,4.55,4.5,1.9);chimney(square,-2.1,-1.7,7.1);
const bay=square.clone().multiply(matTransform(-2,4.10));box(painted,[0,1.37,0],[2.05,2.2,.93],[0,0,0],bay);opening(bay,0,1.9,.49,1.55,1.42);box(slate,[0,2.65,0],[2.3,.17,1.3],[.13,0,0],bay);
// One background cottage has a compact saltbox silhouette, not another hero clone.
const cottage=matTransform(13,-62,-Math.PI/2);wall(cottage,5.8,3.35,6.8,painted,[[-1.55,1.96,0,1.1,1.6],[1.55,1.96,0,1.1,1.6]]);gable(cottage,5.8,6.8,3.81,2.05,painted,true);door(cottage,0,3.5);
// Individual gardens. No fence is stretched identically down both sides of the road.
for(let z=1;z<11;z+=.32){box(warmBoards,[-7.8,.61,z],[.06,1.12,.095],[rand(-.015,.015),0,rand(-.025,.025)]);}
for(const y of [.31,.84])box(warmBoards,[-7.81,y,6],[.07,.07,10]);
box(pavement,[-7,.13,-3],[3.7,.08,1.65]);
for(let z=-29;z<-19;z+=1.1)box(masonry,[7.8,.35,z],[.40,.70,1.08]);
// Hose, handrail, mailbox, antenna and uneven drain detail give objects a purpose.
for(const zz of [-1.0,1.0]){tube([-4.90,.96,-3+zz],[-5.74,1.38,-3+zz],.023,metal);tube([-4.96,.17,-3+zz],[-4.96,.99,-3+zz],.022,metal);}
box(metal,[-7.82,1.40,-2.11],[.10,.34,.25]);
const hose=new THREE.TorusGeometry(.35,.014,6,48);for(let i=0;i<3;i++)batch(hose,velvet,[-7.9,.12+i*.025,-5.8],[1,1,1],[-Math.PI/2,0,.2]);hose.dispose();
for(let i=0;i<8;i++)box(metal,[-3.96,.035,-8+i*.07],[.47,.03,.027]);
tube([-12,7.7,-3],[-12,10,-3],.018,metal);for(let i=0;i<5;i++)tube([-12-.65,9.3+i*.1,-3-i*.21],[-12+.65,9.3+i*.1,-3-i*.21],.009,metal);
// Downspouts connect the porch gutter to a splash block beside the planting bed.
tube([-5.64,3.30,-6.14],[-5.64,3.30,.14],.045,metal);
const downpipe=[[-5.64,3.30,-6.14],[-5.85,3.05,-6.14],[-5.85,.38,-6.14],[-6.06,.16,-6.34]];
for(let i=1;i<downpipe.length;i++)tube(downpipe[i-1],downpipe[i],.032,metal);
box(pavement,[-6.10,.075,-6.41],[.29,.10,.56],[0,-.35,0]);
for(const y of [.7,2.65])box(metal,[-5.85,y,-6.14],[.10,.026,.085]);
// Settled seams carry dirt and sparse weeds; the walking centre remains clear.
for(let z=-35;z<18;z+=1.7){for(const side of [-1,1]){const x=side*5.88;box(soil,[x,.188,z+.83],[rand(.10,.32),.005,.018],[0,rand(-.13,.13),0]);}}
// A shallow dark throat behind the grate, with the curb interrupted at the inlet.
box(recess,[-3.90,.018,-7.77],[.53,.012,.69]);
// Actual CC0 modeled props and plants, loaded locally.
const gltfLoader=new GLTFLoader(manager);const propLoads=[];
function props(slug,placements){propLoads.push(gltfLoader.loadAsync('./assets/'+slug+'/model.gltf').then(g=>{for(const v of placements){const o=g.scene.clone(true);o.position.set(v[0],v[1],v[2]);o.rotation.y=v[3]||0;o.scale.setScalar(v[4]||1);o.traverse(n=>{if(n.isMesh){n.castShadow=true;n.receiveShadow=true;}});scene.add(o);}renderer.shadowMap.needsUpdate=true;}));}
props('painted_wooden_chair_01',[[-6.9,.54,-4.65,-1.35,.94]]);
props('wooden_crate_01',[[-7.4,.54,-.8,.2,.7]]);
props('planter_pot_clay',[[-5.72,.19,-5.9,0,.7],[-5.72,.19,-.25,.7,.62]]);
props('fern_02',[[-6.25,.12,-6.3,0,.7],[-7.3,.1,-7.0,1,.65],[-7.2,.08,1.1,2,.9],[6.8,.07,-16,3,.8],[-9,.06,2.6,.5,.8]]);
props('rock_moss_set_01',[[-7.9,.04,-8.9,1,.8],[8.5,.02,-18,2,.7]]);
// Telegraph poles and sagging lines lead the eye through the street.
for(const side of [-1,1])for(let z=-110;z<60;z+=26){
 tube([side*6.45,0,z],[side*6.45,10.3,z],.13,bark,null,.085);
 box(wood,[side*6.45,9.72,z],[2.4,.13,.16]);
 for(const dx of [-.9,0,.9]){
  batch(new THREE.CylinderGeometry(.06,.07,.19,7),dark,[side*6.45+dx,9.9,z]);
  if(z<34){const pts=[];for(let i=0;i<=14;i++){let t=i/14;pts.push(new THREE.Vector3(side*6.45+dx,9.97-Math.sin(t*Math.PI)*1.05,z+t*26));}const g=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),18,.013,3,false);batch(g,metal);g.dispose();}
 }
}

// A full-size steel bicycle leaning near the fence, not a box-shaped car.
const tire=material('tire','#262822',.95),cycle=material('cycle','#364f49',.55,{metalness:.3});
const bp=matTransform(-7.52,4.1,.11);for(const xx of [-.54,.54]){batch(new THREE.TorusGeometry(.34,.026,8,40),tire,[xx,.38,0],[1,1,1],[0,0,0],bp);batch(new THREE.TorusGeometry(.313,.007,5,40),metal,[xx,.38,0],[1,1,1],[0,0,0],bp);for(let i=0;i<20;i++){const a=i*Math.PI/10;tube([xx,.38,0],[xx+Math.cos(a)*.309,.38+Math.sin(a)*.309,0],.0018,metal,bp);}}
for(const [a,b] of [[[-.54,.38,0],[-.12,.39,0]],[[-.54,.38,0],[-.22,.88,0]],[[-.22,.88,0],[-.12,.39,0]],[[-.22,.88,0],[.33,.86,0]],[[.33,.86,0],[-.12,.39,0]],[[.33,.86,0],[.54,.38,0]],[[.33,.86,0],[.32,1.06,0]]])tube(a,b,.018,cycle,bp);
box(tire,[-.22,.97,0],[.25,.05,.15],[0,0,0],bp);tube([.32,1.06,-.22],[.32,1.06,.22],.014,metal,bp);

// Nine scanned maple leaves: alpha edges retain stems, damage and veins.
const leafMaps={map:texture('leaves/LeafSet027_1K-JPG_Color.jpg',[1,1]),alphaMap:texture('leaves/LeafSet027_1K-JPG_Opacity.jpg',[1,1],true),normalMap:texture('leaves/LeafSet027_1K-JPG_NormalGL.jpg',[1,1],true),roughnessMap:texture('leaves/LeafSet027_1K-JPG_Roughness.jpg',[1,1],true)};
const litterMaterial=material('litter','#c4ac79',.94,{...leafMaps,normalScale:new THREE.Vector2(.42,.42),side:THREE.DoubleSide,alphaTest:.55});
function leafGeometry(cell,curled=true){const g=new THREE.PlaneGeometry(.21,.24,4,5),a=g.attributes.position,u=g.attributes.uv;for(let i=0;i<a.count;i++){const x=a.getX(i),y=a.getY(i);a.setZ(i,curled?.014*Math.pow(Math.abs(x)/.105,2)+.008*Math.sin(y*19):.001);u.setXY(i,(u.getX(i)+cell%3)/3,(u.getY(i)+Math.floor(cell/3))/3);}g.computeVertexNormals();return g;}
// Photographic leaf atlases, tapered branching and species-specific silhouettes.
const livingTrees=[];
function plantedTree(preset,x,z,height,treeSeed,lean=0){const t=new Tree();t.loadPreset(preset);t.options.seed=treeSeed;t.options.leaves.tint=0xc2c9a4;t.options.leaves.size*=.94;t.options.leaves.count=Math.round(t.options.leaves.count*1.35);t.options.branch.angle[1]+=treeSeed%13-6;t.options.branch.length[1]*=.85+(treeSeed%7)*.045;if(treeSeed===643){t.options.leaves.size*=.38;t.options.leaves.count*=4;}t.generate();if(treeSeed===643){const lm=leafMaps.map.clone(),la=leafMaps.alphaMap.clone();for(const m of [lm,la]){m.repeat.set(1/3,1/3);m.offset.set(0,1/3);}t.leavesMesh.material.map=lm;t.leavesMesh.material.alphaMap=la;t.leavesMesh.material.color.set('#c4ba8d');}t.leavesMesh.material.alphaToCoverage=true;t.leavesMesh.material.name=preset;const bounds=new THREE.Box3().setFromObject(t);t.scale.setScalar(height/(bounds.max.y-bounds.min.y));t.position.set(x,0,z);t.rotation.set(0,treeSeed*.73,lean);t.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(t);livingTrees.push(t);}
plantedTree('Oak Medium',-6.6,8.6,14.8,643,.02);
plantedTree('Ash Medium',6.8,-9,12.5,991,-.025);
plantedTree('Aspen Medium',-8.5,-16,13.8,142,.018);
plantedTree('Oak Large',-19,-25,17,312,-.02);
plantedTree('Ash Small',7.1,-40,10,943,.015);
plantedTree('Aspen Large',17,4,15.5,283);
for(let i=0;i<30;i++){plantedTree(['Oak Small','Ash Medium','Pine Medium','Aspen Small'][i%4],i%2?rand(22,32):rand(-32,-21),rand(-100,23),rand(11,20),2100+i*173,rand(-.03,.03));}
for(let i=0;i<13;i++)plantedTree(i%3===0?'Pine Small':'Oak Small',-23+Math.sin(i)*2,-49+i*6,11+(i%4),7501+i*79);
// Dense, irregular treeline replaces the faceted placeholder hills.
for(let i=0;i<10;i++)plantedTree(i%2?'Pine Medium':'Ash Small',-35+i*8,-94+rand(-5,4),rand(12,18),5800+i*137);
for(const [x,z,h] of [[-7.2,-8.2,1.25],[-7.3,1.5,1.05],[-9.1,2.1,1.7],[-15,3.4,1.4],[7.8,-18,1.2],[8,-30,1.4],[-10,-29,1.4],[-9,-39,1.1]])plantedTree('Bush 1',x,z,h,Math.round((x+50)*z*z));
let bakeIndex=0;
for(const [mat,geos] of groups){const g=mergeGeometries(geos,false);if(!g)throw new Error('Geometry merge failed');const mesh=new THREE.Mesh(g,mat);mesh.castShadow=![grass,asphalt,pavement].includes(mat);mesh.receiveShadow=true;mesh.userData.bakeIndex=bakeIndex++;scene.add(mesh);for(const a of geos)a.dispose();}
groups.clear();
const groundAO=loader.load('./assets/ground-ao.png');groundAO.channel=1;groundAO.colorSpace=THREE.NoColorSpace;grass.aoMap=groundAO;grass.aoMapIntensity=1;
scene.traverse(o=>{if(o.isMesh&&o.material===grass){const a=o.geometry.attributes.position,uv=new Float32Array(a.count*2);for(let i=0;i<a.count;i++){uv[i*2]=(a.getX(i)+70)/140;uv[i*2+1]=(a.getZ(i)+125)/190;}o.geometry.setAttribute('uv1',new THREE.BufferAttribute(uv,2));}});


// Lighting: one static shadow map, updated only during weather transitions.
const hemi=new THREE.HemisphereLight('#ced9df','#555345',1.15);scene.add(hemi);
const sun=new THREE.DirectionalLight('#ffe0a1',3.5);sun.position.set(-15,27,18);sun.target.position.set(-7,0,-10);scene.add(sun,sun.target);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:1,far:180});sun.shadow.bias=-.0004;sun.shadow.normalBias=.035;
const skyUniforms={top:{value:new THREE.Color('#658f96')},bottom:{value:new THREE.Color('#e5d4a7')},sunColor:{value:new THREE.Color('#fff1bd')},weather:{value:0}};
const sky=new THREE.Mesh(new THREE.SphereGeometry(220,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:skyUniforms,vertexShader:'varying vec3 v; void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec3 v;uniform vec3 top;uniform vec3 bottom;uniform vec3 sunColor;uniform float weather;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
void main(){vec3 d=normalize(v);float h=max(d.y,0.);vec3 col=mix(bottom,top,pow(h,.50));vec2 p=d.xz/(max(d.y,.12))*.8;float n=noise(p*2.)*.55+noise(p*5.)*.26+noise(p*13.)*.12;float clouds=smoothstep(.44,.73,n)*smoothstep(.01,.25,h);col=mix(col,mix(vec3(.92,.88,.74),vec3(.3,.39,.42),weather),clouds*.6);float sd=max(dot(d,normalize(vec3(-15.,27.,18.))),0.);col+=sunColor*(pow(sd,1500.)*.8+pow(sd,18.)*.12)*(1.-weather);gl_FragColor=vec4(col,1.);#include <tonemapping_fragment>\n#include <colorspace_fragment>}`.replace(';#include',';\n#include')}));scene.add(sky);

// Ambient reflections are a tiny fixed sky cube, not another scene render per frame.
const faces=[];for(let i=0;i<6;i++){const c=document.createElement('canvas');c.width=c.height=64;const cx=c.getContext('2d');const gr=cx.createLinearGradient(0,0,0,64);gr.addColorStop(0,'#b4c7b9');gr.addColorStop(.5,'#acb8a0');gr.addColorStop(1,'#344c41');cx.fillStyle=gr;cx.fillRect(0,0,64,64);faces.push(c);}const env=new THREE.CubeTexture(faces);env.colorSpace=THREE.SRGBColorSpace;env.needsUpdate=true;scene.environment=env;scene.environmentIntensity=.35;

function radialTexture(){const c=document.createElement('canvas');c.width=c.height=64;const cx=c.getContext('2d'),g=cx.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,226,152,1)');g.addColorStop(.2,'rgba(255,208,115,.22)');g.addColorStop(1,'rgba(255,203,111,0)');cx.fillStyle=g;cx.fillRect(0,0,64,64);return new THREE.CanvasTexture(c);}
const glowTexture=radialTexture();
for(const p of windows){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture,color:'#ffd08a',transparent:true,opacity:.18,depthWrite:false,blending:THREE.AdditiveBlending}));s.position.copy(p);s.scale.set(1.35,1.35,1.35);scene.add(s);glows.push(s);}

// Ground leaf litter is one instanced draw; animation only concerns a few leaves.

// Fine verge grass breaks up the transition between pavement and lawn.
const bladeGeo=new THREE.BufferGeometry();bladeGeo.setAttribute('position',new THREE.Float32BufferAttribute([-.018,0,0,.018,0,0,.035,.27,0],3));bladeGeo.computeVertexNormals();
const bladeMat=material('verge','#7b8050',1,{side:THREE.DoubleSide});
const blades=new THREE.InstancedMesh(bladeGeo,bladeMat,9000);
for(let i=0;i<9000;i++){const side=rand()<.5?-1:1;dummy.position.set(side*rand(6.0,7.7),.025,rand(-126,55));dummy.rotation.set(0,rand(0,6.28),rand(-.2,.2));dummy.scale.setScalar(rand(.3,1));dummy.updateMatrix();blades.setMatrixAt(i,dummy.matrix);blades.setColorAt(i,new THREE.Color().setHSL(rand(.14,.22),.23,rand(.31,.49)));}blades.receiveShadow=true;scene.add(blades);
// Deposits follow the gutter and the maple canopy rather than a uniform scatter.
const leafPositions=[];
for(let variant=0;variant<9;variant++){
 const litter=new THREE.InstancedMesh(leafGeometry(variant),litterMaterial,280);
 for(let i=0;i<280;i++){
  let x,z,y;const mode=rand();
  if(mode<.54){x=-rand(3.65,4.0);z=rand(-14,17);y=.022;}
  else if(mode<.85){const r=Math.sqrt(rand())*4.4,a=rand(0,Math.PI*2);x=-6.6+Math.cos(a)*r;z=8.6+Math.sin(a)*r;y=Math.abs(x)>4.26&&Math.abs(x)<5.96?.198:Math.abs(x)<4.02?.022:-.020;}
  else{x=-rand(3.58,3.98);z=-7.5+rand(-.9,.8);y=.022+rand(0,.028);}
  // Keep the curb top free: leaf beds sit either side of its vertical edge.
  if(x< -4.0&&x> -4.28){x=-4.31;y=.198;}
  dummy.position.set(x,y,z);dummy.rotation.set(-Math.PI/2,rand(-.06,.06),rand(0,6.28));dummy.scale.setScalar(rand(.48,.88));dummy.updateMatrix();litter.setMatrixAt(i,dummy.matrix);litter.setColorAt(i,new THREE.Color().setRGB(rand(.65,1),rand(.61,.9),rand(.48,.72)));leafPositions.push({x,z});
 }
 litter.receiveShadow=true;scene.add(litter);
}
const drifting=new THREE.InstancedMesh(leafGeometry(3),litterMaterial,12),driftData=[];
for(let i=0;i<12;i++)driftData.push({x:rand(-8,-4),y:rand(1,10),z:rand(4,13),s:rand(.4,1),r:rand(0,6.28)});scene.add(drifting);
function shelterHeight(x,z){if(x>-8.2&&x<-5.45&&z>-6.5&&z<.5)return 3.38;if(x>-16&&x<-8&&z>-6.4&&z<.4)return 6;return 0;}
const rainGeometry=new THREE.BufferGeometry(),rainPoints=new Float32Array(1800*6);
for(let i=0;i<1800;i++){const j=i*6;rainPoints[j]=rand(-35,35);rainPoints[j+1]=rand(0,25);rainPoints[j+2]=rand(-70,35);rainPoints[j+3]=rainPoints[j]-.06;rainPoints[j+4]=rainPoints[j+1]-.47;rainPoints[j+5]=rainPoints[j+2]+.02;}
rainGeometry.setAttribute('position',new THREE.BufferAttribute(rainPoints,3));
const rainMaterial=new THREE.LineBasicMaterial({color:'#b7c9cb',transparent:true,opacity:0,depthWrite:false});const rain=new THREE.LineSegments(rainGeometry,rainMaterial);rain.frustumCulled=false;scene.add(rain);
// One low-resolution planar capture is shared by the gutter's shallow pools.
const poolSites=[[-3.69,8.7,.28,1.5],[-3.73,2.2,.24,1.9],[-3.67,-6.9,.34,1.1],[-3.70,-9.5,.28,1.6],[3.7,-17,.29,1.8]];
const waterShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uRain:{value:0},uPools:{value:poolSites.map(p=>new THREE.Vector4(...p))}},vertexShader:`uniform mat4 textureMatrix;varying vec4 vReflection;varying vec3 vWorld;void main(){vWorld=(modelMatrix*vec4(position,1.)).xyz;vReflection=textureMatrix*vec4(position,1.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime,uRain;uniform vec4 uPools[5];varying vec4 vReflection;varying vec3 vWorld;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 void main(){float coverage=0.;for(int i=0;i<5;i++){vec2 q=(vWorld.xz-uPools[i].xy)/uPools[i].zw;float edge=.055*sin(vWorld.z*29.+sin(vWorld.x*31.))+.035*sin(vWorld.z*71.);coverage=max(coverage,1.-smoothstep(.77,.97,length(q)+edge));}if(coverage<.03)discard;
 vec2 cell=floor(vWorld.xz*5.);vec2 local=fract(vWorld.xz*5.)-.5;float age=fract(uTime*.73+hash(cell));float radius=age*.65;float d=length(local);float ring=sin((d-radius)*75.)*exp(-abs(d-radius)*30.)*(1.-age)*uRain;vec2 ripple=normalize(local+vec2(.0001))*ring*.0018;
 vec3 reflected=texture2DProj(tDiffuse,vReflection+vec4(ripple*vReflection.w,0.,0.)).rgb;vec3 viewDir=normalize(cameraPosition-vWorld);float fresnel=.035+.965*pow(1.-max(viewDir.y,0.),5.);float strength=mix(.22,.84,fresnel);vec3 color=mix(vec3(.075,.09,.076),reflected,strength);gl_FragColor=vec4(color,coverage*mix(.42,.92,uRain));
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`};
const water=new Reflector(new THREE.PlaneGeometry(8,42),{textureWidth:512,textureHeight:512,multisample:0,clipBias:.001,shader:waterShader});water.rotation.x=-Math.PI/2;water.position.set(0,.031,-5);water.material.transparent=true;water.material.depthWrite=false;water.renderOrder=1;scene.add(water);
const captureWater=water.onBeforeRender;let lastWaterCapture=-Infinity;
water.onBeforeRender=function(r,s,c,...args){if(c!==camera)return;const time=clock.time;if(time-lastWaterCapture<1/(state.quality==='battery'?10:20))return;lastWaterCapture=time;captureWater.call(this,r,s,c,...args);};

// UI and camera controller are kept separate from the scenery.
let yaw=.53,pitch=.06,drag=null,keys=new Set(),last=0,frameLast=0,frameCount=0,frameStart=0,avgCost=0,raf=0,qualityTicks=0;
const start={pos:new THREE.Vector3(-2.8,1.48,12),yaw:.53,pitch:.06};
const path=new THREE.CatmullRomCurve3([new THREE.Vector3(-2.8,1.48,12),new THREE.Vector3(-4.8,1.54,8),new THREE.Vector3(-4.9,1.54,6),new THREE.Vector3(-4.9,1.54,0),new THREE.Vector3(-5.0,1.54,-3),new THREE.Vector3(-5.3,1.54,-3)]);
function notice(text){$('notice').textContent=text;$('notice').classList.add('visible');clearTimeout(notice.timer);notice.timer=setTimeout(()=>$('notice').classList.remove('visible'),3200);}
function stopStroll(){state.stroll=false;$('stroll').innerHTML='Take a stroll <span aria-hidden="true">↗</span>';}
function resize(){const maxPixels=state.quality==='battery'?1400000:2200000,base=Math.min(devicePixelRatio,1.35),scale=Math.min(base,Math.sqrt(maxPixels/(innerWidth*innerHeight)))*state.scale;renderer.setSize(Math.max(1,Math.floor(innerWidth*scale)),Math.max(1,Math.floor(innerHeight*scale)),false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
addEventListener('resize',resize);
function weather(value){state.targetWeather=value;$('afternoon').setAttribute('aria-pressed',String(!value));$('rain').setAttribute('aria-pressed',String(!!value));document.querySelector('h1').textContent=value?'When the rain comes.':'An autumn afternoon.';$('mood').textContent=value?'The same street. A different kind of quiet.':'Somewhere familiar. Nothing required.';}
$('afternoon').onclick=()=>weather(0);$('rain').onclick=()=>weather(1);
$('stroll').onclick=()=>{if(state.stroll){stopStroll();return;}if(state.reduced){notice('Turn off Reduce motion to use the guided stroll.');return;}state.stroll=true;state.strollT=0;camera.position.copy(start.pos);$('stroll').textContent='Pause stroll';notice('A quiet walk. Drag to look around.');canvas.focus();};
$('home').onclick=()=>{stopStroll();camera.position.copy(start.pos);yaw=start.yaw;pitch=start.pitch;};
$('settings').onclick=()=>{const open=$('panel').hidden;$('panel').hidden=!open;$('settings').setAttribute('aria-expanded',String(open));};
$('close-panel').onclick=()=>{$('panel').hidden=true;$('settings').setAttribute('aria-expanded','false');$('settings').focus();};
$('quality').onchange=e=>{state.quality=e.target.value;state.scale=1;resize();};
$('motion').checked=state.reduced;$('motion').onchange=e=>{state.reduced=e.target.checked;if(state.reduced)stopStroll();};
$('stats-toggle').onchange=e=>$('stats').hidden=!e.target.checked;
canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);canvas.focus();});
canvas.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;yaw-=dx*.003;pitch=clamp(pitch-dy*.0025,-.6,.65);drag={x:e.clientX,y:e.clientY};});
canvas.addEventListener('pointerup',()=>drag=null);canvas.addEventListener('pointercancel',()=>drag=null);
addEventListener('keydown',e=>{if(['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName))return;if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){e.preventDefault();keys.add(e.code);stopStroll();}if(e.code==='Escape'){$('panel').hidden=true;$('settings').setAttribute('aria-expanded','false');stopStroll();}if(e.code==='KeyH')document.body.classList.toggle('clean');});
addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',()=>{keys.clear();drag=null;});
for(const b of document.querySelectorAll('[data-key]')){b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(b.dataset.key);stopStroll();});for(const ev of ['pointerup','pointercancel'])b.addEventListener(ev,()=>keys.delete(b.dataset.key));}
function moveCamera(dt){
 if(state.stroll){state.strollT=Math.min(1,state.strollT+dt/44);camera.position.copy(path.getPointAt(state.strollT));if(!drag){yaw=THREE.MathUtils.damp(yaw,mix(.53,Math.PI/2,THREE.MathUtils.smoothstep(state.strollT,.15,.88)),.75,dt);pitch=THREE.MathUtils.damp(pitch,mix(.035,.12,state.strollT),.7,dt);}if(state.strollT>=1)stopStroll();}
 else {
  if(keys.has('ArrowLeft'))yaw+=dt*.9;if(keys.has('ArrowRight'))yaw-=dt*.9;
  let f=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown')),s=Number(keys.has('KeyD'))-Number(keys.has('KeyA'));const n=Math.hypot(f,s)||1;f/=n;s/=n;
  const speed=2.15;let nx=camera.position.x+(-Math.sin(yaw)*f+Math.cos(yaw)*s)*speed*dt,nz=camera.position.z+(-Math.cos(yaw)*f-Math.sin(yaw)*s)*speed*dt;
  // The public walk stays inside the two sidewalks and the hero front path.
  nx=clamp(nx,-5.5,6);nz=clamp(nz,-55,25);
  if(Math.abs(nx)>6&&!(nx<0&&Math.abs(nz+3)<.82))nx=clamp(nx,-6,6);
  camera.position.x=nx;camera.position.z=nz;
  let ground=Math.abs(nx)>4.2?.19:0;if(Math.abs(nz+3)<.94&&nx< -4.76)ground=Math.max(ground,nx< -5.38?.45:nx< -5.07?.30:.15);camera.position.y=THREE.MathUtils.damp(camera.position.y,1.35+ground,10,dt);
 }
 camera.rotation.order='YXZ';camera.rotation.set(pitch,yaw,0);
}

// Recorded ambience, opt-in only. Overlaps hide the non-loopable rain file's seam.
let audioCtx,master,rainGain,birdGain,birdPanner,audioLoading=false,audioReady=false;
const audioBuffers=new Map(),audioBeds=[];let stepDistance=0,stepIndex=0;
function scheduleBed(bed){const now=audioCtx.currentTime;if(bed.next>now+1)return;const source=audioCtx.createBufferSource(),fade=audioCtx.createGain();source.buffer=audioBuffers.get(bed.name);const duration=source.buffer.duration,start=Math.max(now+.03,bed.next),overlap=2;fade.gain.setValueAtTime(0,start);fade.gain.linearRampToValueAtTime(1,start+overlap);fade.gain.setValueAtTime(1,start+duration-overlap);fade.gain.linearRampToValueAtTime(0,start+duration);source.connect(fade).connect(bed.output);source.start(start);source.onended=()=>{source.disconnect();fade.disconnect();};bed.next=start+duration-overlap;}
async function startSound(){
 if(audioLoading)return;
 if(!audioCtx){audioCtx=new AudioContext();master=audioCtx.createGain();master.gain.value=.6;master.connect(audioCtx.destination);rainGain=audioCtx.createGain();rainGain.gain.value=0;rainGain.connect(master);birdGain=audioCtx.createGain();birdGain.gain.value=.32;birdPanner=audioCtx.createPanner();birdPanner.panningModel='HRTF';birdPanner.distanceModel='inverse';birdPanner.refDistance=9;birdPanner.rolloffFactor=.7;birdPanner.positionX.value=-6.6;birdPanner.positionY.value=6;birdPanner.positionZ.value=8.6;birdGain.connect(birdPanner).connect(master);}
 await audioCtx.resume();if(audioReady)return;audioLoading=true;$('sound').textContent='Loading sound…';
 try{await Promise.all(['birds','rain','stone01','leaves01','leaves02'].map(async name=>{const r=await fetch('./assets/audio/'+name+'.ogg');if(!r.ok)throw new Error('Audio unavailable');const buffer=await audioCtx.decodeAudioData(await r.arrayBuffer());let peak=0;for(let c=0;c<buffer.numberOfChannels;c++){const a=buffer.getChannelData(c);for(let i=0;i<a.length;i++)peak=Math.max(peak,Math.abs(a[i]));}const gain=Math.min(20,.65/Math.max(peak,.001));for(let c=0;c<buffer.numberOfChannels;c++){const a=buffer.getChannelData(c);for(let i=0;i<a.length;i++)a[i]*=gain;}audioBuffers.set(name,buffer);}));audioBeds.push({name:'birds',output:birdGain,next:audioCtx.currentTime},{name:'rain',output:rainGain,next:audioCtx.currentTime});audioReady=true;if(!state.sound||state.hidden)await audioCtx.suspend();}
 catch(e){state.sound=false;await audioCtx.suspend();notice('Recorded sound could not load. Try Sound again.');}finally{audioLoading=false;$('sound').textContent=state.sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(state.sound));}
}
$('sound').onclick=()=>{state.sound=!state.sound;if(state.sound)startSound();else audioCtx?.suspend();$('sound').textContent=state.sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(state.sound));};
function updateSound(distance){if(!audioReady||!state.sound||state.hidden)return;const now=audioCtx.currentTime,w=state.weather;audioBeds.forEach(scheduleBed);rainGain.gain.setTargetAtTime(w*.48*(shelterHeight(camera.position.x,camera.position.z)>camera.position.y?.55:1),now,.4);birdGain.gain.setTargetAtTime((1-w)*.32,now,.4);const l=audioCtx.listener;for(const [k,v] of Object.entries({positionX:camera.position.x,positionY:camera.position.y,positionZ:camera.position.z,forwardX:-Math.sin(yaw)*Math.cos(pitch),forwardY:Math.sin(pitch),forwardZ:-Math.cos(yaw)*Math.cos(pitch),upX:0,upY:1,upZ:0}))l[k].setTargetAtTime(v,now,.05);
 if(distance>.2){stepDistance=0;return;}stepDistance+=distance;if(stepDistance<.66)return;stepDistance%=.66;const onLeaves=leafPositions.some(p=>Math.hypot(p.x-camera.position.x,p.z-camera.position.z)<.17);const name=onLeaves?'leaves0'+(1+(stepIndex%2)):'stone01';const source=audioCtx.createBufferSource(),gain=audioCtx.createGain();source.buffer=audioBuffers.get(name);source.playbackRate.value=.96+(stepIndex%5)*.02;gain.gain.value=onLeaves?.15:.11;source.connect(gain).connect(master);source.start();source.onended=()=>{source.disconnect();gain.disconnect();};stepIndex++;
}

const warmFog=new THREE.Color('#c3c4a6'),coolFog=new THREE.Color('#6b8388'),warmSky=new THREE.Color('#658f96'),coolSky=new THREE.Color('#344b5b'),warmHorizon=new THREE.Color('#e5d4a7'),coolHorizon=new THREE.Color('#8d9e9a');
let previousWeather=-1,refreshReflection=null,lastProbeWeather=0;
function update(dt){
 clock.time+=dt;for(const t of livingTrees)t.update(state.reduced?0:clock.time*.25);wind.value=state.reduced?0:clock.time;
 state.weather=THREE.MathUtils.damp(state.weather,state.targetWeather,1.25,dt);
 if(Math.abs(state.weather-state.targetWeather)<.001)state.weather=state.targetWeather;
 const w=state.weather;water.material.uniforms.uTime.value=state.reduced?0:clock.time;water.material.uniforms.uRain.value=w;wetness.value=.25+.75*w;porchLight.intensity=mix(2,14,w);
 if(w!==previousWeather){scene.fog.color.copy(warmFog).lerp(coolFog,w);scene.fog.density=mix(.0105,.016,w);skyUniforms.top.value.copy(warmSky).lerp(coolSky,w);skyUniforms.bottom.value.copy(warmHorizon).lerp(coolHorizon,w);skyUniforms.weather.value=w;sun.intensity=mix(2.6,.22,w);hemi.intensity=mix(1.15,.95,w);windowMat.emissiveIntensity=mix(.09,1.5,w);renderer.toneMappingExposure=mix(1.05,.95,w);asphalt.roughness=mix(.95,.31,w);asphalt.color.setRGB(mix(.50,.22,w),mix(.52,.26,w),mix(.48,.26,w));for(const s of glows)s.material.opacity=mix(.12,.62,w);previousWeather=w;}
 rainMaterial.opacity=state.reduced?0:w*.29;rain.visible=w>.01&&!state.reduced;
 if(rain.visible){for(let i=0;i<rainPoints.length;i+=6){rainPoints[i+1]-=dt*13;rainPoints[i+4]-=dt*13;if(rainPoints[i+1]<Math.max(.15,shelterHeight(rainPoints[i],rainPoints[i+2]))){rainPoints[i+1]+=25;rainPoints[i+4]+=25;}}rainGeometry.attributes.position.needsUpdate=true;}
 drifting.visible=!state.reduced;
 if(!state.reduced){driftData.forEach((d,i)=>{const t=clock.time*d.s;dummy.position.set(d.x+Math.sin(t*.4+d.r)*1.7,((d.y-t*.28)%10+10)%10,d.z+Math.sin(t*.21)*1.4);dummy.rotation.set(t+d.r,t*.6,t*.4);dummy.scale.setScalar(1);dummy.updateMatrix();drifting.setMatrixAt(i,dummy.matrix);});drifting.instanceMatrix.needsUpdate=true;}
 if(refreshReflection&&Math.abs(w-state.targetWeather)<.002&&Math.abs(w-lastProbeWeather)>.2){refreshReflection();lastProbeWeather=w;}
 const oldX=camera.position.x,oldZ=camera.position.z;moveCamera(dt);updateSound(Math.hypot(camera.position.x-oldX,camera.position.z-oldZ));
}
function frame(now){
 raf=requestAnimationFrame(frame);if(state.hidden)return;
 const interval=1000/(state.quality==='battery'?30:60);if(now-frameLast<interval-.65)return;
 const dt=Math.min((now-(last||now))/1000,.065);last=now;frameLast=now-((now-frameLast)%interval);
 const before=performance.now();update(dt);renderer.render(scene,camera);const cost=performance.now()-before;avgCost=avgCost*.95+cost*.05;frameCount++;
 if(now-frameStart>1500){const fps=frameCount*1000/(now-frameStart),r=renderer.info.render;
  $('stats').textContent=`${fps.toFixed(0)} fps · ${state.quality==='battery'?'30 fps cap':'60 fps cap'}\nCPU submission ${avgCost.toFixed(1)} ms (not GPU time)\n${r.calls} draws · ${(r.triangles/1000).toFixed(0)}k triangles\n${canvas.width} × ${canvas.height} pixels\n${renderer.info.memory.textures} textures · local rendering`;
  if(fps<(state.quality==='battery'?25:48)&&state.scale>.65){state.scale=Math.max(.65,state.scale-.08);resize();}frameCount=0;frameStart=now;qualityTicks++;
 }
}
document.addEventListener('visibilitychange',()=>{state.hidden=document.hidden;keys.clear();if(state.hidden){cancelAnimationFrame(raf);audioCtx?.suspend();}else{last=0;frameLast=performance.now();frameStart=frameLast;frameCount=0;if(state.sound)audioCtx?.resume();raf=requestAnimationFrame(frame);}});
resize();camera.rotation.order='YXZ';camera.rotation.set(pitch,yaw,0);renderer.shadowMap.needsUpdate=true;
manager.onLoad=()=>{renderer.shadowMap.needsUpdate=true;};
const propResults=await Promise.allSettled(propLoads);if(propResults.some(p=>p.status==='rejected'))assetsFailed=true;
// Offline 16-ray hemispherical ambient occlusion, baked with Blender BVH.
if(renderer.isWebGLRenderer){
 try{const [meta,buffer]=await Promise.all([fetch('./assets/baked-ao.json').then(r=>r.json()),fetch('./assets/baked-ao.bin').then(r=>r.arrayBuffer())]);const bytes=new Uint8Array(buffer);scene.traverse(o=>{const ix=o.userData.bakeIndex;if(ix===undefined)return;const entry=meta.find(x=>x.index===ix);if(entry?.bytes!==o.geometry.attributes.position.count*3)throw new Error('Stale occlusion bake');const colors=new Uint8Array(bytes.slice(entry.offset,entry.offset+entry.bytes));o.geometry.setAttribute('color',new THREE.BufferAttribute(colors,3,true));o.material.vertexColors=true;o.material.needsUpdate=true;});}catch(e){assetsFailed=true;console.error('Occlusion bake failed',e);}
 const probeTarget=new THREE.WebGLCubeRenderTarget(128,{generateMipmaps:true,minFilter:THREE.LinearMipmapLinearFilter,type:THREE.HalfFloatType});
 const probe=new THREE.CubeCamera(.15,170,probeTarget);probe.position.set(0,2,-9);scene.add(probe);scene.environment=null;probe.update(renderer,scene);scene.environment=probeTarget.texture;scene.environmentIntensity=.6;refreshReflection=()=>{scene.environment=null;probe.update(renderer,scene);scene.environment=probeTarget.texture;};
}
// Warm practical light spills under the porch without an extra shadow pass.
const porchLight=new THREE.PointLight('#ffc580',8,6,2);porchLight.position.set(-7.3,2.65,-2.1);scene.add(porchLight);

renderer.render(scene,camera);$('loading').classList.add('done');setTimeout(()=>$('loading').hidden=true,800);if(assetsFailed)notice('Some surface textures could not load. The scene is still available.');
raf=requestAnimationFrame(frame);

// Optional agent controls share the exact actions used by the visible buttons.
if(document.modelContext?.registerTool){
 const lifecycle=new AbortController();
 try{Promise.resolve(document.modelContext.registerTool({name:'set_atmosphere',description:'Select afternoon or rainy dusk in this visual study. Does not advance any story.',inputSchema:{type:'object',properties:{atmosphere:{type:'string',enum:['afternoon','rainy-dusk']}},required:['atmosphere'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||!['afternoon','rainy-dusk'].includes(input.atmosphere)||Object.keys(input).length!==1)throw new Error('Choose afternoon or rainy-dusk.');weather(input.atmosphere==='rainy-dusk'?1:0);return {selected:input.atmosphere,transition:'started',storyAdvanced:false};}},{signal:lifecycle.signal})).catch(()=>{});}catch{}
 addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}
