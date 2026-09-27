export const BOAT_START={x:-4,z:.34};
export function newEncounter(){return {phase:'ready',boatTime:0,reveal:0,beatTime:0,endingTime:0};}
export const cinematic=s=>['looking','revealed','ending','after'].includes(s.phase);
export function beginLooking(s){if(s.phase==='waiting'){s.phase='looking';s.beatTime=0;}return s;}
export function stepEncounter(s,dt,near,crouched){
 if(s.phase==='floating'){s.boatTime=Math.min(1,s.boatTime+dt/17);if(s.boatTime>=1)s.phase='waiting';}
 if(s.phase==='waiting'&&near&&crouched)beginLooking(s);
 if(s.phase==='looking'){s.beatTime+=dt;if(s.beatTime>=4.7){s.phase='revealed';s.beatTime=0;}}
 else if(s.phase==='revealed'){s.beatTime+=dt;s.reveal=Math.min(1,s.beatTime/3);if(s.beatTime>=7.8){s.phase='ending';s.endingTime=0;}}
 else if(s.phase==='ending'){s.endingTime+=dt;if(s.endingTime>=.35)s.phase='after';}
 return s;
}
export function interact(s,nearBoat,nearDrain){if(s.phase==='ready'&&nearBoat)s.phase='floating';else if(s.phase==='waiting'&&nearDrain)beginLooking(s);return s;}
export function boatPose(t){const p=boatPosition(t),drop=Math.max(0,Math.min(1,(t-.93)/.07));return {...p,y:.018-.62*drop*drop,tip:-1.0*drop,visible:drop<.92,drop};}
export function boatPosition(t){
 t=Math.max(0,Math.min(1,t));
 if(t<.72)return{x:-4+3.35*t/.72,z:.34};
 const a=(t-.72)/.28,b=1-a;
 return{x:b*b*b*(-.65)+3*b*b*a*(-.05)+3*b*a*a*.04+a*a*a*.04,z:b*b*b*.34+3*b*b*a*.34+3*b*a*a*.05-a*a*a*.51};
}
export function boatHeading(t){const a=boatPosition(Math.max(0,t-.0001)),b=boatPosition(Math.min(1,t+.0001));return Math.atan2(-(b.z-a.z),b.x-a.x);}

export function constrainPosition(x,z){return {x:Math.max(-17,Math.min(17,x)),z:Math.max(.38,Math.min(10,z))};}

// Follow uses walking speed and the same street bounds as manual movement.
export function followBoatPosition(player,boat,dt){
 const target=constrainPosition(boat.x-.55,1.02),dx=target.x-player.x,dz=target.z-player.z,distance=Math.hypot(dx,dz),step=Math.min(distance,1.1*Math.max(0,dt));
 return {...constrainPosition(player.x+(distance?dx/distance*step:0),player.z+(distance?dz/distance*step:0)),arrived:distance-step<.025};
}
