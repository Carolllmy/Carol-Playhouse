import * as THREE from 'three';
import {Reflector} from './vendor/objects/Reflector.js';
// One low-resolution planar capture feeds a thin, discontinuous water film.
// Shape and alpha are shared by every view; never a screen-space image plate.
export function createDrainWater(camera){
 const g=new THREE.PlaneGeometry(48,5.8,1,1);
 const shader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uFlow:{value:1},uRipple:{value:1},uBoat:{value:new THREE.Vector4(-4,.34,0,0)},uBoatPresent:{value:1}},vertexShader:`uniform mat4 textureMatrix;varying vec4 vReflection;varying vec3 vWorld;void main(){vWorld=(modelMatrix*vec4(position,1.)).xyz;vReflection=textureMatrix*vec4(position,1.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
 uniform sampler2D tDiffuse;uniform float uTime,uFlow,uRipple,uBoatPresent;uniform vec4 uBoat;varying vec4 vReflection;varying vec3 vWorld;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
 void main(){
  vec2 p=vWorld.xz;float edge=.36+noise(vec2(p.x*1.8,2.))*.16+noise(p*8.)*.045;
  float gutter=1.-smoothstep(edge-.08,edge+.08,p.y);
  float basin=1.-smoothstep(.45,.8,length((p-vec2(0.,.18))*vec2(.85,1.4)));
  float puddles=smoothstep(.59,.74,noise(p*1.85)+noise(p*5.5)*.16)*(1.-smoothstep(2.6,4.3,p.y));
  float mask=max(max(gutter,basin),puddles*.73)*smoothstep(-.025,.06,p.y);
  if(mask<.015)discard;
  vec2 cell=floor(p*5.);vec2 local=fract(p*5.)-.5;float age=fract(uTime*.85+hash(cell));float radius=length(local);float ring=sin((radius-age*.58)*95.)*exp(-abs(radius-age*.58)*42.)*(1.-age);
  vec2 d=normalize(local+vec2(.00001))*ring*.0017*uRipple;
  float pull=exp(-length(p-vec2(0.,0.))*2.3);vec2 flow=vec2(p.x-uTime*.31*uFlow,p.y-uTime*.06*uFlow-pull*uTime*.04);
  d+=vec2(sin(flow.x*19.+flow.y*8.)+sin(flow.x*37.-flow.y*11.),cos(flow.y*29.+flow.x*7.))*.00038;
  vec2 forward=vec2(cos(uBoat.z),-sin(uBoat.z)),side=vec2(-forward.y,forward.x),relative=p-uBoat.xy;
  float along=dot(relative,forward),across=dot(relative,side),behind=max(-along,0.);
  float wakeDistance=abs(abs(across)-(.052+behind*.32));
  float wake=sin(wakeDistance*125.-uTime*5.)*exp(-wakeDistance*45.)*exp(-behind*3.6)*(1.-smoothstep(-.08,.015,along))*uBoat.w*uRipple;
  float bow=exp(-pow((length(relative*vec2(1.,1.6))-.16)*45.,2.))*smoothstep(.04,.14,along)*uBoat.w*uRipple;
  d+=side*sign(across)*wake*.0012+forward*bow*.0006;
  vec4 projected=vReflection;projected.xy+=d*projected.w;
  vec2 reflectionUv=projected.xy/projected.w;
  vec2 blur=vec2(.0014,.0008);
  vec3 reflected=texture2D(tDiffuse,reflectionUv).rgb*.4;
  reflected+=(texture2D(tDiffuse,reflectionUv+blur).rgb+texture2D(tDiffuse,reflectionUv-blur).rgb+texture2D(tDiffuse,reflectionUv+vec2(blur.x,-blur.y)).rgb+texture2D(tDiffuse,reflectionUv+vec2(-blur.x,blur.y)).rgb)*.15;
  float cosTheta=max(normalize(cameraPosition-vWorld).y,0.);float fresnel=.025+.975*pow(1.-cosTheta,5.);
  vec3 tint=vec3(.035,.045,.042);float opacity=mask*mix(.13,.64,fresnel);
  float contact=exp(-pow(along/.14,2.)-pow(across/.055,2.))*.20*uBoatPresent;vec3 c=mix(tint,reflected,.82)*(1.-contact);gl_FragColor=vec4(c,opacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`};
 const water=new Reflector(g,{textureWidth:768,textureHeight:768,multisample:0,clipBias:.001,shader});water.name='Shallow runoff and irregular puddles';water.rotation.x=-Math.PI/2;water.position.set(0,.023,2.85);water.material.transparent=true;water.material.depthWrite=false;water.renderOrder=2;
 const capture=water.onBeforeRender;let last=-Infinity,time=0,rate=12;
 water.onBeforeRender=function(r,s,c,...args){if(c!==camera||time-last<1/rate)return;last=time;const hidden=[];s.traverse(o=>{if(o.visible&&o.userData.skipDrainReflection){hidden.push(o);o.visible=false;}});try{capture.call(this,r,s,c,...args);}finally{hidden.forEach(o=>o.visible=true);}};
 water.userData.update=(seconds,smooth,reduced)=>{time=seconds;rate=smooth?20:12;water.material.uniforms.uTime.value=reduced?0:seconds;water.material.uniforms.uRipple.value=reduced?0:1;};
 water.userData.setBoat=(x,z,heading,moving,present)=>{water.material.uniforms.uBoat.value.set(x,z,heading,moving);water.material.uniforms.uBoatPresent.value=present?1:0;};
 return water;
}
