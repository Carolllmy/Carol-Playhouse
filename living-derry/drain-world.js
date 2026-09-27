import * as THREE from 'three';
import {RoundedBoxGeometry} from './vendor/RoundedBoxGeometry.js';
export function buildDrainWorld(maps={}){
 const root=new THREE.Group();root.name='Witcham curb';let seed=917;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const mat=(name,color,roughness,map,normal)=>new THREE.MeshStandardMaterial({name,color,roughness,map:maps[map]||null,normalMap:maps[normal]||null,normalScale:new THREE.Vector2(.55,.55)});
 const stone=mat('Weathered wet concrete','#858985',.57,'stone','stoneNormal'),road=mat('Wet asphalt','#757c79',.3,'asphalt','asphaltNormal'),paving=mat('Sidewalk','#a1a69c',.7,'pavement','pavementNormal'),soil=mat('Rain-dark soil','#555c3f',.91,'ground','groundNormal'),brick=mat('Inside catch basin','#45443d',.8,'brick','brickNormal'),iron=mat('Oxidized iron','#362c24',.75,'stone','stoneNormal');iron.metalness=.48;road.roughness=.58;stone.roughnessMap=maps.stoneRough;stone.roughness=.7;stone.color.set('#747b73');stone.normalScale.set(.8,.8);stone.vertexColors=true;
 // Broad wet patches and tire-worn streaks change roughness, not just color.
 road.onBeforeCompile=shader=>{
  shader.vertexShader='varying vec3 vRoadWorld;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvRoadWorld=(modelMatrix*vec4(transformed,1.)).xyz;');
  shader.fragmentShader='varying vec3 vRoadWorld;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
   float wetPatch=sin(vRoadWorld.x*1.8+sin(vRoadWorld.z*2.3))*sin(vRoadWorld.z*2.6+sin(vRoadWorld.x*.73));
   float wet=smoothstep(-.2,.65,wetPatch);
   float rut=exp(-pow((vRoadWorld.z-2.4)*3.,2.))+exp(-pow((vRoadWorld.z-4.1)*3.,2.));
   roughnessFactor=mix(.64,.24,clamp(wet*.8+rut*.35,0.,1.));
   diffuseColor.rgb*=mix(1.,.70,wet);`);
 };
 brick.color.set('#161b18');brick.envMapIntensity=.05;
 const moss=mat('Moss in joints','#303e24',.96,'ground','groundNormal');
 function add(g,m,x=0,y=0,z=0,name=''){const mesh=new THREE.Mesh(g,m);mesh.position.set(x,y,z);mesh.name=name;mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);return mesh;}
 function box(x,y,z,w,h,d,m,name,bevel=.014){const g=new RoundedBoxGeometry(w,h,d,2,Math.min(bevel,w/4,h/4,d/4));const p=g.attributes.position,n=g.attributes.normal,u=g.attributes.uv,cs=[];for(let i=0;i<p.count;i++){let a,b;if(Math.abs(n.getY(i))>.5){a=p.getX(i)+x;b=p.getZ(i)+z;}else if(Math.abs(n.getZ(i))>.5){a=p.getX(i)+x;b=p.getY(i)+y;}else{a=p.getZ(i)+z;b=p.getY(i)+y;}u.setXY(i,a*1.3,b*1.3);const wy=p.getY(i)+y,wx=p.getX(i)+x;let c=1;if(m.vertexColors){const damp=.48+.52*THREE.MathUtils.smoothstep(wy,.015,.38);const runoff=.86+.14*Math.sin(wx*18+Math.sin(wx*7));c=damp*runoff;}cs.push(c,c*.99,c*.93);if(m===stone||name==='Jointed curb'){const d=Math.sin(p.getX(i)*81+p.getY(i)*71+p.getZ(i)*61+x)*.002;p.setXYZ(i,p.getX(i)+n.getX(i)*d,p.getY(i)+n.getY(i)*d,p.getZ(i)+n.getZ(i)*d);}}if(m.vertexColors)g.setAttribute('color',new THREE.Float32BufferAttribute(cs,3));return add(g,m,x,y,z,name);}
 // Crowned asphalt drops into a shallow depression along the gutter.
 const rg=new THREE.PlaneGeometry(52,20,150,70);rg.rotateX(-Math.PI/2);const p=rg.attributes.position,uv=rg.attributes.uv,colors=[];
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i)+10.015;p.setZ(i,z);p.setY(i,.003+Math.min(Math.max(z,0),4)*.009-.018*Math.exp(-Math.pow((z-.36)*3,2))+(rnd()-.5)*.005-.009*(.5+.5*Math.sin(x*2.9+Math.sin(z*3.2)))*Math.min(z,3)/3);uv.setXY(i,x*.68,z*.68);const c=.72+rnd()*.18;colors.push(c,c,c);}rg.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));rg.computeVertexNormals();road.vertexColors=true;add(rg,road,0,0,0,'Road crown and depressed gutter');
 // The drain is a real opening. No box or black decal fills its mouth.
 box(0,-.085,-.68,1.13,.08,1.5,brick,'Basin floor');box(-.655,.13,-.65,.14,.36,1.7,stone,'Basin left return');box(.655,.13,-.65,.14,.36,1.7,stone,'Basin right return');box(0,.365,-.66,1.45,.16,1.38,stone,'Drain lintel',.035);box(0,.16,-1.48,1.3,.6,.08,brick,'Basin back');
 box(-.58,.14,-.08,.035,.32,.04,iron,'Iron left frame',.004);box(.58,.14,-.08,.035,.32,.04,iron,'Iron right frame',.004);box(0,.274,-.08,1.19,.027,.05,iron,'Iron top frame',.004);
 for(let side of [-1,1]){let edge=.724;for(let i=0;i<22;i++){const length=.95+rnd()*.48,x=side*(edge+length/2),m=stone.clone();edge+=length+.013;m.color.multiplyScalar(.94+rnd()*.10);box(x,.213+(rnd()-.5)*.008,-.25,length,.426,.53,m,'Jointed curb',.028);}}
 for(let i=-19;i<20;i++){if(i===0)continue;box(i*1.25,.335,-1.18,1.235,.18,1.42,paving,'Separated pavement slab',.012);}box(0,.335,-1.62,1.23,.18,.55,paving,'Pavement behind drain');
 box(0,.18,-8,53,.25,12,soil,'Garden verge',.025);
 const channel=add(new THREE.PlaneGeometry(1.10,1.42),new THREE.MeshBasicMaterial({name:'Shadowed catch basin water',color:'#0a1210'}),0,.012,-.70,'Water inside catch basin');channel.rotation.x=-Math.PI/2;channel.castShadow=false;
 // Chips and gritty deposits collect at joints, not uniformly across the street.
 const gritGeo=new THREE.IcosahedronGeometry(1,0),grit=new THREE.InstancedMesh(gritGeo,mat('Wet aggregate','#454b43',.42,'asphalt','asphaltNormal'),320),dummy=new THREE.Object3D();
 for(let i=0;i<320;i++){const near=rnd()<.5;let x=near?(rnd()<.5?-1:1)*(.67+rnd()*.3):(rnd()-.5)*32;dummy.position.set(x,.014,.04+rnd()*.27);dummy.rotation.set(rnd()*3,rnd()*6,rnd()*3);dummy.scale.set(.002+rnd()*.005,.0015+rnd()*.003,.002+rnd()*.005);dummy.updateMatrix();grit.setMatrixAt(i,dummy.matrix);}grit.name='Gutter grit';root.add(grit);

 // Curled leaf cards use nine photographed maple leaves, grouped at obstacles.
 const leafMat=new THREE.MeshStandardMaterial({name:'Photographed wet maple leaves',map:maps.leaf||null,alphaMap:maps.leafAlpha||null,normalMap:maps.leafNormal||null,roughness:.46,side:THREE.DoubleSide,alphaTest:.45,color:'#8c7759',vertexColors:true});
 const leafGroup=new THREE.Group();leafGroup.name='Curled wet leaves';root.add(leafGroup);
 // Debris hangs up in small pockets; exposed wet asphalt separates each pocket.
 const pockets=[[-5.35,.13],[-3.25,.06],[-1.8,.1],[-.82,.14],[.83,.13],[2.2,.09],[4.65,.12],[7.1,.17],[-8.3,.1],[11.5,.08]];
 for(let i=0;i<290;i++){
  const atlas=Math.floor(rnd()*9),g=new THREE.PlaneGeometry(1,1,4,4),q=g.attributes.position,v=g.attributes.uv,colors=[],curl=.025+rnd()*.12,tone=.62+rnd()*.36;
  for(let j=0;j<q.count;j++){q.setZ(j,Math.pow(q.getX(j),2)*curl+Math.sin(q.getY(j)*4)*curl*.12);v.setXY(j,(v.getX(j)+atlas%3)/3,(v.getY(j)+Math.floor(atlas/3))/3);colors.push(tone,tone*.96,tone*.87);}g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.computeVertexNormals();
  const l=new THREE.Mesh(g,leafMat);let x,z;
  if(i<185){const pocket=pockets[Math.floor(rnd()*pockets.length)];x=pocket[0]+(rnd()+rnd()-1)*.55;z=pocket[1]+rnd()*.15;}
  else{x=(rnd()-.5)*23;z=.65+rnd()*5.4;}
  // Keep the boat corridor clear without clamping all leaves into one artificial line.
  if(x>-4.3&&x<.5&&z>.21&&z<.49)z=.06+rnd()*.12;
  const roadY=.003+Math.min(z,4)*.009-.018*Math.exp(-Math.pow((z-.36)*3,2));
  l.position.set(x,z<.55?.017+rnd()*.006:roadY+.003,z);l.rotation.set(-Math.PI/2,0,rnd()*Math.PI*2);l.scale.setScalar(.105+rnd()*.13);l.receiveShadow=true;leafGroup.add(l);
 }
 // Fully folded hull and center ridge: visible from every side, with a concave interior.
 const boat=new THREE.Group();boat.name='Folded paper boat';const paper=new THREE.MeshStandardMaterial({name:'Damp paper',color:'#e3ddc6',map:maps.paper||null,normalMap:maps.paperNormal||null,normalScale:new THREE.Vector2(.2,.2),roughnessMap:maps.paperRough||null,roughness:.65,side:THREE.DoubleSide,vertexColors:true});
 // Raised bow/stern, a submerged keel, inner folded paper, and a tent-shaped center fold.
 const vertices=[[-.17,.075,0],[-.095,.057,-.068],[.095,.057,-.068],[.17,.075,0],[.095,.057,.068],[-.095,.057,.068],[-.09,0,-.008],[.09,0,-.008],[.09,0,.008],[-.09,0,.008],[-.17,.075,0],[-.095,.058,-.066],[.095,.058,-.066],[.17,.075,0],[.095,.058,.066],[-.095,.058,.066],[-.09,.001,-.007],[.09,.001,-.007],[.09,.001,.007],[-.09,.001,.007],[-.086,.022,-.015],[.086,.022,-.015],[-.086,.022,.015],[.086,.022,.015],[0,.155,0]];
 const faces=[[0,6,1],[1,6,7],[1,7,2],[2,7,3],[3,7,8],[3,8,4],[4,8,9],[4,9,5],[5,9,0],[0,9,6],[6,9,8],[6,8,7], [10,11,16],[11,12,17],[11,17,16],[12,13,17],[13,18,17],[13,14,18],[14,15,19],[14,19,18],[15,10,19],[10,16,19],[16,18,19],[16,17,18], [1,11,12],[1,12,2],[4,14,15],[4,15,5], [20,21,24],[23,22,24],[22,20,24],[21,23,24]];
 const bp=[],puv=[],pc=[];faces.forEach(f=>f.forEach(i=>{const v=vertices[i];bp.push(...v);puv.push(v[0]*2.6+.5,v[1]*4+v[2]*2.5+.12);const damp=.72+.26*THREE.MathUtils.smoothstep(v[1],.004,.055);pc.push(damp,damp*.985,damp*.94);}));
 const bg=new THREE.BufferGeometry();bg.setAttribute('position',new THREE.Float32BufferAttribute(bp,3));bg.setAttribute('uv',new THREE.Float32BufferAttribute(puv,2));bg.setAttribute('color',new THREE.Float32BufferAttribute(pc,3));bg.computeVertexNormals();const hull=new THREE.Mesh(bg,paper);hull.name='Folded paper hull with inner surfaces';boat.add(hull);
 const seam=new THREE.MeshStandardMaterial({name:'Paper fold seams',color:'#aaa58f',roughness:.85});
 for(const pair of [[1,2],[4,5],[20,24],[21,24]]){const curve=new THREE.LineCurve3(new THREE.Vector3(...vertices[pair[0]]),new THREE.Vector3(...vertices[pair[1]]));const crease=new THREE.Mesh(new THREE.TubeGeometry(curve,1,.00035,4,false),seam);crease.name='Fine paper crease';boat.add(crease);}
 boat.scale.setScalar(.65);boat.position.set(-4,.018,.34);root.add(boat);

 // Distant trunks and the existing authored house anchor the street.
 const bark=mat('Tree bark','#514d3d',.9,'bark','barkNormal');for(const [x,z,s] of [[-6,-2.4,1],[8,-3,1.25],[-15,-2.5,.8]]){const trunk=add(new THREE.CylinderGeometry(.18*s,.3*s,8*s,11,8),bark,x,4*s,z,'Street tree trunk');trunk.rotation.z=.035;const uv=trunk.geometry.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*2,uv.getY(i)*5);for(let j=0;j<4;j++){const branch=add(new THREE.CylinderGeometry(.04,.12,3,7),bark,x+(j%2?1:-1)*.65,5+j*.6,z+.2,'Upper branch');branch.rotation.z=(j%2?1:-1)*.6;}}
 const canopy=new THREE.Group();canopy.name='Asymmetric autumn canopy';root.add(canopy);
 const branchMat=bark;const crownMat=leafMat.clone();crownMat.vertexColors=false;crownMat.name='Autumn maple canopy';crownMat.color.set('#a0783c');crownMat.roughness=.72;
 for(const [tx,tz,height,spread] of [[-6,-2.4,6.8,2.6],[8,-3,8.2,3.2],[-15,-2.5,5.8,2.3]]){
  for(let j=0;j<9;j++){const theta=j*2.39996,reach=spread*(.7+rnd()*.4),end=new THREE.Vector3(tx+Math.cos(theta)*reach,height+rnd()*1.5,tz+Math.sin(theta)*reach),curve=new THREE.CubicBezierCurve3(new THREE.Vector3(tx,height-2,tz),new THREE.Vector3(tx,height-1,tz),new THREE.Vector3((tx+end.x)*.5,height+.2,(tz+end.z)*.5),end);const branch=add(new THREE.TubeGeometry(curve,8,.025+rnd()*.025,5,false),branchMat,0,0,0,'Natural upper branch');
   for(let k=0;k<85;k++){const c=curve.getPoint(.4+rnd()*.6),g=new THREE.PlaneGeometry(.20,.23);const tile=Math.floor(rnd()*9),uv=g.attributes.uv;for(let u=0;u<uv.count;u++)uv.setXY(u,(uv.getX(u)+tile%3)/3,(uv.getY(u)+Math.floor(tile/3))/3);const leaf=new THREE.Mesh(g,crownMat);leaf.position.set(c.x+(rnd()-.5)*1.4,c.y+(rnd()-.5)*1.2,c.z+(rnd()-.5)*1.4);leaf.rotation.set(rnd()*Math.PI,rnd()*Math.PI,rnd()*Math.PI);leaf.scale.setScalar(.7+rnd()*.8);leaf.castShadow=leaf.receiveShadow=true;canopy.add(leaf);}
  }
 }

 // Curb top is 26 cm above the low gutter; compress masonry only, not plants.
 for(const mesh of root.children){if(/Basin|Drain lintel|Iron .*frame|Jointed curb|pavement|Pavement|Garden verge/.test(mesh.name)){mesh.geometry.scale(1,.6,1);mesh.position.y*=.6;}}
 return {root,boat,leafGroup,canopy};
}
