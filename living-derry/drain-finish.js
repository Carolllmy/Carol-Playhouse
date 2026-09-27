import * as THREE from 'three';
// Depth-aware contact shading and a restrained photographic finish.
// One 8-neighbor pass; no temporal history, ray tracing, or full-resolution SSAO buffer.
export function createDrainFinish(renderer,camera){
 const target=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,depthBuffer:true});target.depthTexture=new THREE.DepthTexture(1,1,THREE.UnsignedIntType);
 const uniforms={tColor:{value:target.texture},tDepth:{value:target.depthTexture},uTexel:{value:new THREE.Vector2(1,1)},uNear:{value:camera.near},uFar:{value:camera.far},uTime:{value:0}};
 const material=new THREE.ShaderMaterial({uniforms,depthTest:false,depthWrite:false,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`
 varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform vec2 uTexel;uniform float uNear,uFar,uTime;
 float depthAt(vec2 uv){float d=texture2D(tDepth,uv).x;return (2.*uNear*uFar)/(uFar+uNear-(d*2.-1.)*(uFar-uNear));}
 float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTime)*43758.5453);}
 void main(){float d=depthAt(vUv);vec3 c=texture2D(tColor,vUv).rgb;
  float ao=0.;float r=clamp(22./max(d,1.),1.5,9.);
  for(int i=0;i<8;i++){float a=float(i)*.785398;vec2 offset=vec2(cos(a),sin(a))*uTexel*r;float nd=depthAt(vUv+offset);float delta=d-nd;ao+=smoothstep(.018,.12,delta)*(1.-smoothstep(.2,.7,delta));}
  c*=1.-ao*.043;
  float blur=smoothstep(6.,24.,d)*.78;vec3 soft=c*.2;float radius=1.5+smoothstep(5.,25.,d)*4.5;
  for(int i=0;i<8;i++){float a=float(i)*.785398;vec2 b=vec2(cos(a),sin(a))*uTexel*radius;soft+=texture2D(tColor,vUv+b).rgb*.1;}c=mix(c,soft,blur);
  float luminance=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(luminance),c,.87);c*=vec3(.96,1.,1.035);
  vec2 p=(vUv-.5)*vec2(1.,.85);c*=1.-.27*smoothstep(.18,.64,length(p));c+=vec3((h(vUv)-.5)*.0018);
  gl_FragColor=vec4(max(c,0.),1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`});
 const quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),material),screen=new THREE.Scene(),ortho=new THREE.OrthographicCamera(-1,1,1,-1,0,1);quad.frustumCulled=false;screen.add(quad);
 return {resize(w,h){target.setSize(w,h);uniforms.uTexel.value.set(1/w,1/h);},render(scene,seconds,reduced){uniforms.uTime.value=reduced?0:Math.floor(seconds*12);renderer.setRenderTarget(target);renderer.render(scene,camera);renderer.setRenderTarget(null);renderer.render(screen,ortho);},dispose(){target.dispose();material.dispose();quad.geometry.dispose();}};
}
