import * as THREE from 'three';
// A depth-shaped portrait with localized eyes and an independent breathing/head performance.
export async function createPresence(loader){
 const tex=await loader.loadAsync('assets/georgie/pennywise-portrait.png');tex.colorSpace=THREE.SRGBColorSpace;
 const geo=new THREE.PlaneGeometry(.29,.29,32,32),p=geo.attributes.position;
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i);p.setZ(i,.035*Math.exp(-(x*x*75+y*y*50))+.015*Math.exp(-(x*x*1200+y*y*500)));}geo.computeVertexNormals();
 const uniforms={uTime:{value:0},uReveal:{value:0},uBlink:{value:0},uDread:{value:0}};
 const mat=new THREE.MeshBasicMaterial({map:tex,transparent:true,opacity:1,depthWrite:false,color:'#a1aaa6',side:THREE.DoubleSide});
 mat.onBeforeCompile=shader=>{Object.assign(shader.uniforms,uniforms);shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform float uTime,uReveal,uBlink,uDread;');shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`
 vec2 uv=vMapUv;
 vec2 e1=vec2(.383,.575),e2=vec2(.615,.573);
 float eyes=max(exp(-dot((uv-e1)*vec2(32.,70.),(uv-e1)*vec2(32.,70.))),exp(-dot((uv-e2)*vec2(32.,70.),(uv-e2)*vec2(32.,70.))));
 uv.x+=eyes*.006*sin(uTime*.7);
 float mouth=exp(-dot((uv-vec2(.5,.30))*vec2(9.,18.),(uv-vec2(.5,.30))*vec2(9.,18.)));
 uv.x-=mouth*(uv.x-.5)*uDread*.16;
 uv.y+=mouth*.005*sin(uTime*1.61);
 vec4 portrait=texture2D(map,uv);
 diffuseColor*=portrait;
 diffuseColor.rgb*=mix(.05,.86,uReveal)+eyes*(.16+.12*uDread);
 float iris=max(exp(-dot((uv-e1)*vec2(110.,125.),(uv-e1)*vec2(110.,125.))),exp(-dot((uv-e2)*vec2(110.,125.),(uv-e2)*vec2(110.,125.))));
 diffuseColor.rgb+=vec3(.20,.115,.025)*iris*smoothstep(0.,.25,uReveal);
 diffuseColor.rgb*=1.-eyes*uBlink*.95;
 diffuseColor.a*=smoothstep(.48,.34,length((vMapUv-vec2(.5,.51))*vec2(1.,.88)))*smoothstep(0.,.15,uReveal);
 `);};
 const mesh=new THREE.Mesh(geo,mat);mesh.name='Animated shadow portrait';mesh.position.set(.08,.105,-.32);
 return {mesh,update(state,time,reduced,camera){const reveal=state.phase==='revealed'?state.reveal:state.phase==='ending'?1:0;uniforms.uTime.value=time;uniforms.uReveal.value=reveal;uniforms.uDread.value=Math.min(1,state.beatTime/7.8);const beat=state.beatTime;uniforms.uBlink.value=!reduced&&beat>3.7&&beat<3.88?Math.sin((beat-3.7)/.18*Math.PI):0;mesh.visible=reveal>0;mesh.position.set(.08+(reduced?0:Math.sin(time*.83)*.006),.09+(reduced?0:Math.sin(time*1.61)*.0035),-.32+Math.min(1,beat/7.8)*.065);mesh.rotation.set(reduced?0:Math.sin(time*.6)*.018,reduced?0:Math.sin(time*.77)*.045,reduced?0:Math.sin(time*.37)*.035+Math.sin(Math.min(1,Math.max(0,(beat-4)/2))*Math.PI/2)*.09);mesh.scale.set(1,.66+(reduced?0:Math.sin(time*1.61)*.012),1);
 if(state.phase==='ending'){const t=Math.min(1,state.endingTime/.35),a=t*t*t;mesh.position.lerp(new THREE.Vector3(camera.position.x,camera.position.y-.012,camera.position.z-.10),a);mesh.rotation.z=-.12*a;}
 }};
}
