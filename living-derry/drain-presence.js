import * as THREE from 'three';
// Public build: the character portrait is not published. The encounter keeps its
// timing (dark pause, approach, hard cut to black) with nothing resolving in the drain.
export async function createPresence(){const mesh=new THREE.Group();mesh.name='Presence (not published)';return {mesh,update(){}};}
