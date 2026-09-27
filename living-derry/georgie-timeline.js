export const DURATION=48;
export const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export function shotAt(seconds){
 const t=clamp(seconds,0,DURATION);
 if(t<10)return {image:0,chapter:0,zoom:1.22-.12*t/10,x:.55,y:.60,shade:0,description:'A folded paper boat floats in rainwater beside the storm drain.'};
 if(t<20)return {image:0,chapter:1,zoom:1.10-.07*(t-10)/10,x:.45,y:.48,shade:0,description:'Georgie kneels beside the curb in his yellow raincoat. The drain is dark.'};
 if(t<33)return {image:1,chapter:2,zoom:1+.055*(t-20)/13,x:.55,y:.53,shade:clamp((t-32)/.8,0,1),description:'Pennywise waits in the drain, holding the paper boat.'};
 if(t<37)return {image:1,chapter:2,zoom:1.055,x:.55,y:.53,shade:1,description:'Darkness. Rain continues.'};
 return {image:2,chapter:3,zoom:1.025-.025*(t-37)/11,x:.5,y:.5,shade:1-clamp((t-37)/1.8,0,1),description:'The curb is empty. Georgie and the paper boat are gone. The rain continues.'};
}
