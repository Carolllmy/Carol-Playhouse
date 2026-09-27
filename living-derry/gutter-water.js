import * as THREE from 'three';
import {Reflector} from './vendor/objects/Reflector.js';
export function createGutterWater(geometry,camera){
 const g=geometry.clone();g.translate(0,-.029,0);g.rotateX(Math.PI/2);
 const shader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uRain:{value:0}},vertexShader:`uniform mat4 textureMatrix;varying vec4 vReflection;varying vec3 vWorld;void main(){vWorld=(modelMatrix*vec4(position,1.)).xyz;vReflection=textureMatrix*vec4(position,1.);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime,uRain;varying vec4 vReflection;varying vec3 vWorld;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){vec2 cell=floor(vWorld.xz*7.);vec2 local=fract(vWorld.xz*7.)-.5;float age=fract(uTime*.8+hash(cell));float radialDistance=length(local);float ring=sin((radialDistance-age*.7)*70.)*exp(-abs(radialDistance-age*.7)*28.)*(1.-age)*uRain;vec2 ripple=normalize(local+vec2(.0001))*ring*.0015;
vec3 reflection=texture2DProj(tDiffuse,vReflection+vec4(ripple*vReflection.w,0.,0.)).rgb;float facing=max(normalize(cameraPosition-vWorld).y,0.);float fresnel=.035+.965*pow(1.-facing,5.);gl_FragColor=vec4(mix(vec3(.07,.085,.075),reflection,mix(.32,.88,fresnel)),mix(.38,.92,uRain));
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`};
 const water=new Reflector(g,{textureWidth:512,textureHeight:512,multisample:0,clipBias:.001,shader});water.rotation.x=-Math.PI/2;water.position.y=.031;water.material.transparent=true;water.material.depthWrite=false;water.renderOrder=2;
 const capture=water.onBeforeRender;let last=-Infinity,time=0,rate=10;
 water.onBeforeRender=function(r,s,c,...args){if(c!==camera||time-last<1/rate)return;last=time;capture.call(this,r,s,c,...args);};
 water.userData.update=(seconds,rain,smooth,reduced)=>{time=seconds;rate=smooth?20:10;water.material.uniforms.uTime.value=reduced?0:seconds;water.material.uniforms.uRain.value=rain;};return water;
}
