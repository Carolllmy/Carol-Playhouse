import {DURATION,clamp,shotAt} from './georgie-timeline.js';
const $=id=>document.getElementById(id),canvas=$('frame'),ctx=canvas.getContext('2d',{alpha:false});
const names=['curb.png','below.png','after.png'],images=[];let t=0,playing=false,started=false,ready=false,last=0,lastDraw=0,width=0,height=0,chapter=-1;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');$('motion').checked=reduced.matches;
let audio,source,gain,filter,sound=false;
async function toggleSound(){
 if(!audio){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)throw Error('Audio unavailable');audio=new Audio();gain=audio.createGain();gain.gain.value=0;filter=audio.createBiquadFilter();filter.type='lowpass';filter.frequency.value=16000;filter.connect(gain).connect(audio.destination);const response=await fetch('assets/audio/rain.ogg');if(!response.ok)throw Error('Rain recording unavailable');const buffer=await audio.decodeAudioData(await response.arrayBuffer());let peak=0;for(let ch=0;ch<buffer.numberOfChannels;ch++){const samples=buffer.getChannelData(ch);for(let i=0;i<samples.length;i++)peak=Math.max(peak,Math.abs(samples[i]));}const normalization=Math.min(12,.65/Math.max(peak,.001));for(let ch=0;ch<buffer.numberOfChannels;ch++){const samples=buffer.getChannelData(ch);for(let i=0;i<samples.length;i++)samples[i]*=normalization;}source=audio.createBufferSource();source.buffer=buffer;source.loop=true;source.connect(filter);source.start();}
 await audio.resume();sound=!sound;gain.gain.setTargetAtTime(sound&&playing?.65:0,audio.currentTime,.35);$('sound').textContent=sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(sound));
}
$('sound').onclick=async()=>{const b=$('sound');b.disabled=true;try{await toggleSound();}catch(e){b.textContent='Retry sound';$('status').textContent='Rain audio could not load. You can still watch the scene.';if(audio)await audio.close();audio=null;}finally{b.disabled=false;}};
function setPlaying(value){playing=value;$('play').textContent=value?'Pause':'Play';$('play').setAttribute('aria-label',value?'Pause scene':'Play scene');if(audio&&gain)gain.gain.setTargetAtTime(sound&&value?.65:0,audio.currentTime,.3);last=0;}
function start(){if(!ready)return;started=true;$('opening').hidden=true;$('ending').hidden=true;if(t>=DURATION)t=0;setPlaying(true);render();}
$('begin').onclick=start;$('replay').onclick=()=>{t=0;start();};$('play').onclick=()=>playing?setPlaying(false):start();
$('seek').oninput=e=>{t=Number(e.target.value);started=true;$('opening').hidden=true;$('ending').hidden=t<DURATION;render();};
document.querySelectorAll('[data-time]').forEach(b=>b.onclick=()=>{if(!ready)return;t=+b.dataset.time;start();});
$('motion').onchange=render;
document.addEventListener('visibilitychange',()=>{if(document.hidden)setPlaying(false);});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!['BUTTON','INPUT','A'].includes(document.activeElement.tagName)){e.preventDefault();if(ready)playing?setPlaying(false):start();}if(e.key==='Escape')setPlaying(false);});
function resize(){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio,1.5);width=r.width;height=r.height;canvas.width=Math.round(width*d);canvas.height=Math.round(height*d);ctx.setTransform(d,0,0,d,0,0);render();}window.addEventListener('resize',resize);
function render(){ctx.fillStyle='#060909';ctx.fillRect(0,0,width,height);if(!ready)return;const s=shotAt(t),im=images[s.image],still=$('motion').checked;
 const fit=width/height<1.1?Math.min(width/im.width,height/im.height):Math.max(width/im.width,height/im.height),z=still?1:s.zoom,w=im.width*fit*z,h=im.height*fit*z;
 ctx.drawImage(im,(width-w)*(still?.5:s.x),(height-h)*(still?.5:s.y),w,h);
 if(s.shade){ctx.fillStyle=`rgba(3,6,6,${s.shade})`;ctx.fillRect(0,0,width,height);}
 if(audio&&filter){filter.frequency.setTargetAtTime(t>=20&&t<37?1900:14000,audio.currentTime,.7);gain.gain.setTargetAtTime(sound&&playing?(t>=29&&t<37?.07:.65):0,audio.currentTime,.55);}
 if(chapter!==s.chapter){chapter=s.chapter;$('status').textContent=s.description;canvas.setAttribute('aria-label',s.description);document.querySelectorAll('[data-time]').forEach((b,i)=>b.classList.toggle('active',i===chapter));}
 $('seek').value=t;$('time').textContent=`00:${String(Math.floor(t)).padStart(2,'0')} / 00:48`;
}
function tick(now){requestAnimationFrame(tick);if(!playing||document.hidden){last=0;return;}if(last)t=clamp(t+(now-last)/1000,0,DURATION);last=now;if(now-lastDraw>1000/30){render();lastDraw=now;}if(t>=DURATION){setPlaying(false);$('ending').hidden=false;render();}}
Promise.all(names.map(name=>new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src='assets/georgie/'+name;}))).then(result=>{images.push(...result);ready=true;$('begin').disabled=false;$('begin').textContent='Watch the scene →';$('play').disabled=false;$('seek').disabled=false;resize();}).catch(()=>{$('begin').textContent='Reload to try again';$('begin').disabled=false;$('begin').onclick=()=>location.reload();$('status').textContent='A scene image could not load. Reload to retry.';});resize();requestAnimationFrame(tick);
