(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var yu={exports:{}},La={},Mu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function cv(){if(Up)return _t;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function x(L,V,me){this.props=L,this.context=V,this.refs=C,this.updater=me||y}x.prototype.isReactComponent={},x.prototype.setState=function(L,V){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,V,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function S(){}S.prototype=x.prototype;function R(L,V,me){this.props=L,this.context=V,this.refs=C,this.updater=me||y}var N=R.prototype=new S;N.constructor=R,E(N,x.prototype),N.isPureReactComponent=!0;var P=Array.isArray,I=Object.prototype.hasOwnProperty,U={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(L,V,me){var be,Le={},ne=null,he=null;if(V!=null)for(be in V.ref!==void 0&&(he=V.ref),V.key!==void 0&&(ne=""+V.key),V)I.call(V,be)&&!O.hasOwnProperty(be)&&(Le[be]=V[be]);var ge=arguments.length-2;if(ge===1)Le.children=me;else if(1<ge){for(var ze=Array(ge),ke=0;ke<ge;ke++)ze[ke]=arguments[ke+2];Le.children=ze}if(L&&L.defaultProps)for(be in ge=L.defaultProps,ge)Le[be]===void 0&&(Le[be]=ge[be]);return{$$typeof:s,type:L,key:ne,ref:he,props:Le,_owner:U.current}}function b(L,V){return{$$typeof:s,type:L.type,key:V,ref:L.ref,props:L.props,_owner:L._owner}}function ue(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function k(L){var V={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(me){return V[me]})}var Z=/\/+/g;function K(L,V){return typeof L=="object"&&L!==null&&L.key!=null?k(""+L.key):V.toString(36)}function ce(L,V,me,be,Le){var ne=typeof L;(ne==="undefined"||ne==="boolean")&&(L=null);var he=!1;if(L===null)he=!0;else switch(ne){case"string":case"number":he=!0;break;case"object":switch(L.$$typeof){case s:case e:he=!0}}if(he)return he=L,Le=Le(he),L=be===""?"."+K(he,0):be,P(Le)?(me="",L!=null&&(me=L.replace(Z,"$&/")+"/"),ce(Le,V,me,"",function(ke){return ke})):Le!=null&&(ue(Le)&&(Le=b(Le,me+(!Le.key||he&&he.key===Le.key?"":(""+Le.key).replace(Z,"$&/")+"/")+L)),V.push(Le)),1;if(he=0,be=be===""?".":be+":",P(L))for(var ge=0;ge<L.length;ge++){ne=L[ge];var ze=be+K(ne,ge);he+=ce(ne,V,me,ze,Le)}else if(ze=g(L),typeof ze=="function")for(L=ze.call(L),ge=0;!(ne=L.next()).done;)ne=ne.value,ze=be+K(ne,ge++),he+=ce(ne,V,me,ze,Le);else if(ne==="object")throw V=String(L),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return he}function Q(L,V,me){if(L==null)return L;var be=[],Le=0;return ce(L,be,"","",function(ne){return V.call(me,ne,Le++)}),be}function ee(L){if(L._status===-1){var V=L._result;V=V(),V.then(function(me){(L._status===0||L._status===-1)&&(L._status=1,L._result=me)},function(me){(L._status===0||L._status===-1)&&(L._status=2,L._result=me)}),L._status===-1&&(L._status=0,L._result=V)}if(L._status===1)return L._result.default;throw L._result}var W={current:null},Y={transition:null},se={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Y,ReactCurrentOwner:U};function q(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:Q,forEach:function(L,V,me){Q(L,function(){V.apply(this,arguments)},me)},count:function(L){var V=0;return Q(L,function(){V++}),V},toArray:function(L){return Q(L,function(V){return V})||[]},only:function(L){if(!ue(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},_t.Component=x,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=R,_t.StrictMode=r,_t.Suspense=m,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,_t.act=q,_t.cloneElement=function(L,V,me){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var be=E({},L.props),Le=L.key,ne=L.ref,he=L._owner;if(V!=null){if(V.ref!==void 0&&(ne=V.ref,he=U.current),V.key!==void 0&&(Le=""+V.key),L.type&&L.type.defaultProps)var ge=L.type.defaultProps;for(ze in V)I.call(V,ze)&&!O.hasOwnProperty(ze)&&(be[ze]=V[ze]===void 0&&ge!==void 0?ge[ze]:V[ze])}var ze=arguments.length-2;if(ze===1)be.children=me;else if(1<ze){ge=Array(ze);for(var ke=0;ke<ze;ke++)ge[ke]=arguments[ke+2];be.children=ge}return{$$typeof:s,type:L.type,key:Le,ref:ne,props:be,_owner:he}},_t.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},_t.createElement=T,_t.createFactory=function(L){var V=T.bind(null,L);return V.type=L,V},_t.createRef=function(){return{current:null}},_t.forwardRef=function(L){return{$$typeof:d,render:L}},_t.isValidElement=ue,_t.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ee}},_t.memo=function(L,V){return{$$typeof:p,type:L,compare:V===void 0?null:V}},_t.startTransition=function(L){var V=Y.transition;Y.transition={};try{L()}finally{Y.transition=V}},_t.unstable_act=q,_t.useCallback=function(L,V){return W.current.useCallback(L,V)},_t.useContext=function(L){return W.current.useContext(L)},_t.useDebugValue=function(){},_t.useDeferredValue=function(L){return W.current.useDeferredValue(L)},_t.useEffect=function(L,V){return W.current.useEffect(L,V)},_t.useId=function(){return W.current.useId()},_t.useImperativeHandle=function(L,V,me){return W.current.useImperativeHandle(L,V,me)},_t.useInsertionEffect=function(L,V){return W.current.useInsertionEffect(L,V)},_t.useLayoutEffect=function(L,V){return W.current.useLayoutEffect(L,V)},_t.useMemo=function(L,V){return W.current.useMemo(L,V)},_t.useReducer=function(L,V,me){return W.current.useReducer(L,V,me)},_t.useRef=function(L){return W.current.useRef(L)},_t.useState=function(L){return W.current.useState(L)},_t.useSyncExternalStore=function(L,V,me){return W.current.useSyncExternalStore(L,V,me)},_t.useTransition=function(){return W.current.useTransition()},_t.version="18.3.1",_t}var Fp;function id(){return Fp||(Fp=1,Mu.exports=cv()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function uv(){if(Op)return La;Op=1;var s=id(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,m,p){var v,_={},g=null,y=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(y=m.ref);for(v in m)r.call(m,v)&&!l.hasOwnProperty(v)&&(_[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)_[v]===void 0&&(_[v]=m[v]);return{$$typeof:e,type:d,key:g,ref:y,props:_,_owner:o.current}}return La.Fragment=n,La.jsx=u,La.jsxs=u,La}var kp;function fv(){return kp||(kp=1,yu.exports=uv()),yu.exports}var re=fv(),rl={},Eu={exports:{}},Ln={},wu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function dv(){return Bp||(Bp=1,(function(s){function e(Y,se){var q=Y.length;Y.push(se);e:for(;0<q;){var L=q-1>>>1,V=Y[L];if(0<o(V,se))Y[L]=se,Y[q]=V,q=L;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var se=Y[0],q=Y.pop();if(q!==se){Y[0]=q;e:for(var L=0,V=Y.length,me=V>>>1;L<me;){var be=2*(L+1)-1,Le=Y[be],ne=be+1,he=Y[ne];if(0>o(Le,q))ne<V&&0>o(he,Le)?(Y[L]=he,Y[ne]=q,L=ne):(Y[L]=Le,Y[be]=q,L=be);else if(ne<V&&0>o(he,q))Y[L]=he,Y[ne]=q,L=ne;else break e}}return se}function o(Y,se){var q=Y.sortIndex-se.sortIndex;return q!==0?q:Y.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var m=[],p=[],v=1,_=null,g=3,y=!1,E=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Y){for(var se=n(p);se!==null;){if(se.callback===null)r(p);else if(se.startTime<=Y)r(p),se.sortIndex=se.expirationTime,e(m,se);else break;se=n(p)}}function P(Y){if(C=!1,N(Y),!E)if(n(m)!==null)E=!0,ee(I);else{var se=n(p);se!==null&&W(P,se.startTime-Y)}}function I(Y,se){E=!1,C&&(C=!1,S(T),T=-1),y=!0;var q=g;try{for(N(se),_=n(m);_!==null&&(!(_.expirationTime>se)||Y&&!k());){var L=_.callback;if(typeof L=="function"){_.callback=null,g=_.priorityLevel;var V=L(_.expirationTime<=se);se=s.unstable_now(),typeof V=="function"?_.callback=V:_===n(m)&&r(m),N(se)}else r(m);_=n(m)}if(_!==null)var me=!0;else{var be=n(p);be!==null&&W(P,be.startTime-se),me=!1}return me}finally{_=null,g=q,y=!1}}var U=!1,O=null,T=-1,b=5,ue=-1;function k(){return!(s.unstable_now()-ue<b)}function Z(){if(O!==null){var Y=s.unstable_now();ue=Y;var se=!0;try{se=O(!0,Y)}finally{se?K():(U=!1,O=null)}}else U=!1}var K;if(typeof R=="function")K=function(){R(Z)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Q=ce.port2;ce.port1.onmessage=Z,K=function(){Q.postMessage(null)}}else K=function(){x(Z,0)};function ee(Y){O=Y,U||(U=!0,K())}function W(Y,se){T=x(function(){Y(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,ee(I))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var se=3;break;default:se=g}var q=g;g=se;try{return Y()}finally{g=q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,se){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var q=g;g=Y;try{return se()}finally{g=q}},s.unstable_scheduleCallback=function(Y,se,q){var L=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?L+q:L):q=L,Y){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=q+V,Y={id:v++,callback:se,priorityLevel:Y,startTime:q,expirationTime:V,sortIndex:-1},q>L?(Y.sortIndex=q,e(p,Y),n(m)===null&&Y===n(p)&&(C?(S(T),T=-1):C=!0,W(P,q-L))):(Y.sortIndex=V,e(m,Y),E||y||(E=!0,ee(I))),Y},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(Y){var se=g;return function(){var q=g;g=se;try{return Y.apply(this,arguments)}finally{g=q}}}})(Tu)),Tu}var zp;function hv(){return zp||(zp=1,wu.exports=dv()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function pv(){if(Vp)return Ln;Vp=1;var s=id(),e=hv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(t){return m.call(_,t)?!0:m.call(v,t)?!1:p.test(t)?_[t]=!0:(v[t]=!0,!1)}function y(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,c){if(i===null||typeof i>"u"||y(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,c,f,h,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(S,R);x[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(S,R);x[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(S,R);x[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),U=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),k=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Y=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,L;function V(t){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+t}var me=!1;function be(t,i){if(!t||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var c=ae}Reflect.construct(t,[],i)}else{try{i.call()}catch(ae){c=ae}t.call(i.prototype)}else{try{throw Error()}catch(ae){c=ae}t()}}catch(ae){if(ae&&c&&typeof ae.stack=="string"){for(var f=ae.stack.split(`
`),h=c.stack.split(`
`),w=f.length-1,F=h.length-1;1<=w&&0<=F&&f[w]!==h[F];)F--;for(;1<=w&&0<=F;w--,F--)if(f[w]!==h[F]){if(w!==1||F!==1)do if(w--,F--,0>F||f[w]!==h[F]){var z=`
`+f[w].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=w&&0<=F);break}}}finally{me=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?V(t):""}function Le(t){switch(t.tag){case 5:return V(t.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return t=be(t.type,!1),t;case 11:return t=be(t.type.render,!1),t;case 1:return t=be(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case U:return"Portal";case b:return"Profiler";case T:return"StrictMode";case K:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case ue:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return i=t.displayName||null,i!==null?i:ne(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return ne(t(i))}catch{}}return null}function he(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ke(t){var i=ze(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,h.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tt(t){t._valueTracker||(t._valueTracker=ke(t))}function Vt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=ze(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function St(t,i){var a=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function At(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function It(t,i){ct(t,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?nt(t,i.type,a):i.hasOwnProperty("defaultValue")&&nt(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function nt(t,i,a){(i!=="number"||dt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var ut=Array.isArray;function pt(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Ne(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(ut(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ge(a)}}function M(t,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function X(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fe,He=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function we(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(t){st.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),qe[i]=qe[t]})});function ye(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||qe.hasOwnProperty(t)&&qe[t]?(""+i).trim():i+"px"}function Ae(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var Ye=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(t,i){if(i){if(Ye[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ie(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,Ee=null,Ue=null;function Me(t){if(t=va(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=xo(i),Ce(t.stateNode,t.type,i))}}function de(t){Ee?Ue?Ue.push(t):Ue=[t]:Ee=t}function Xe(){if(Ee){var t=Ee,i=Ue;if(Ue=Ee=null,Me(t),i)for(t=0;t<i.length;t++)Me(i[t])}}function at(t,i){return t(i)}function Lt(){}var Et=!1;function Wn(t,i,a){if(Et)return t(i,a);Et=!0;try{return at(t,i,a)}finally{Et=!1,(Ee!==null||Ue!==null)&&(Lt(),Xe())}}function Sn(t,i){var a=t.stateNode;if(a===null)return null;var c=xo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var is=!1;if(d)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){is=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{is=!1}function Gl(t,i,a,c,f,h,w,F,z){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(xe){this.onError(xe)}}var er=!1,Pr=null,Xn=!1,Dr=null,Ka={onError:function(t){er=!0,Pr=t}};function Za(t,i,a,c,f,h,w,F,z){er=!1,Pr=null,Gl.apply(Ka,arguments)}function rs(t,i,a,c,f,h,w,F,z){if(Za.apply(this,arguments),er){if(er){var ae=Pr;er=!1,Pr=null}else throw Error(n(198));Xn||(Xn=!0,Dr=ae)}}function gi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Lr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Js(t){if(gi(t)!==t)throw Error(n(188))}function Qa(t){var i=t.alternate;if(!i){if(i=gi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return Js(f),t;if(h===c)return Js(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=h;else{for(var w=!1,F=f.child;F;){if(F===a){w=!0,a=f,c=h;break}if(F===c){w=!0,c=f,a=h;break}F=F.sibling}if(!w){for(F=h.child;F;){if(F===a){w=!0,a=h,c=f;break}if(F===c){w=!0,c=h,a=f;break}F=F.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Ja(t){return t=Qa(t),t!==null?eo(t):null}function eo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=eo(t);if(i!==null)return i;t=t.sibling}return null}var to=e.unstable_scheduleCallback,no=e.unstable_cancelCallback,Wl=e.unstable_shouldYield,Xl=e.unstable_requestPaint,A=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,Pe=e.unstable_LowPriority,Ve=e.unstable_IdlePriority,Re=null,Oe=null;function Qe(t){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Pt,mt=Math.log,Je=Math.LN2;function Pt(t){return t>>>=0,t===0?32:31-(mt(t)/Je|0)|0}var Ot=64,Ft=4194304;function Mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,h=t.pingedLanes,w=a&268435455;if(w!==0){var F=w&~f;F!==0?c=Mt(F):(h&=w,h!==0&&(c=Mt(h)))}else w=a&~f,w!==0?c=Mt(w):h!==0&&(c=Mt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-et(i),f=1<<a,c|=t[a],i&=~f;return c}function Ke(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var w=31-et(h),F=1<<w,z=f[w];z===-1?((F&a)===0||(F&c)!==0)&&(f[w]=Ke(F,i)):z<=i&&(t.expiredLanes|=F),h&=~F}}function xt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tn(){var t=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),t}function An(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Un(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-et(i),t[i]=a}function tr(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-et(a),h=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~h}}function bt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-et(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var ot=0;function ni(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qt,jn,Li,ea,vd,jl=!1,io=[],nr=null,ir=null,rr=null,ta=new Map,na=new Map,sr=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(i.pointerId)}}function ia(t,i,a,c,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[f]},i!==null&&(i=va(i),i!==null&&jn(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Lg(t,i,a,c,f){switch(i){case"focusin":return nr=ia(nr,t,i,a,c,f),!0;case"dragenter":return ir=ia(ir,t,i,a,c,f),!0;case"mouseover":return rr=ia(rr,t,i,a,c,f),!0;case"pointerover":var h=f.pointerId;return ta.set(h,ia(ta.get(h)||null,t,i,a,c,f)),!0;case"gotpointercapture":return h=f.pointerId,na.set(h,ia(na.get(h)||null,t,i,a,c,f)),!0}return!1}function xd(t){var i=Nr(t.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=Lr(a),i!==null){t.blockedOn=i,vd(t.priority,function(){Li(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ro(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);ht=c,a.target.dispatchEvent(c),ht=null}else return i=va(a),i!==null&&jn(i),t.blockedOn=a,!1;i.shift()}return!0}function Sd(t,i,a){ro(t)&&a.delete(i)}function Ng(){jl=!1,nr!==null&&ro(nr)&&(nr=null),ir!==null&&ro(ir)&&(ir=null),rr!==null&&ro(rr)&&(rr=null),ta.forEach(Sd),na.forEach(Sd)}function ra(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function sa(t){function i(f){return ra(f,t)}if(0<io.length){ra(io[0],t);for(var a=1;a<io.length;a++){var c=io[a];c.blockedOn===t&&(c.blockedOn=null)}}for(nr!==null&&ra(nr,t),ir!==null&&ra(ir,t),rr!==null&&ra(rr,t),ta.forEach(i),na.forEach(i),a=0;a<sr.length;a++)c=sr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)xd(a),a.blockedOn===null&&sr.shift()}var ss=P.ReactCurrentBatchConfig,so=!0;function Ig(t,i,a,c){var f=ot,h=ss.transition;ss.transition=null;try{ot=1,ql(t,i,a,c)}finally{ot=f,ss.transition=h}}function Ug(t,i,a,c){var f=ot,h=ss.transition;ss.transition=null;try{ot=4,ql(t,i,a,c)}finally{ot=f,ss.transition=h}}function ql(t,i,a,c){if(so){var f=Yl(t,i,a,c);if(f===null)fc(t,i,c,ao,a),_d(t,c);else if(Lg(f,t,i,a,c))c.stopPropagation();else if(_d(t,c),i&4&&-1<Dg.indexOf(t)){for(;f!==null;){var h=va(f);if(h!==null&&qt(h),h=Yl(t,i,a,c),h===null&&fc(t,i,c,ao,a),h===f)break;f=h}f!==null&&c.stopPropagation()}else fc(t,i,c,null,a)}}var ao=null;function Yl(t,i,a,c){if(ao=null,t=H(c),t=Nr(t),t!==null)if(i=gi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Lr(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ao=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case le:return 1;case ie:return 4;case J:case Pe:return 16;case Ve:return 536870912;default:return 16}default:return 16}}var ar=null,$l=null,oo=null;function Md(){if(oo)return oo;var t,i=$l,a=i.length,c,f="value"in ar?ar.value:ar.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var w=a-t;for(c=1;c<=w&&i[a-c]===f[h-c];c++);return oo=f.slice(t,1<c?1-c:void 0)}function lo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function Ed(){return!1}function Fn(t){function i(a,c,f,h,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(a=t[F],this[F]=a?a(h):h[F]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?co:Ed,this.isPropagationStopped=Ed,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Fn(as),aa=q({},as,{view:0,detail:0}),Fg=Fn(aa),Zl,Ql,oa,uo=q({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Zl=t.screenX-oa.screenX,Ql=t.screenY-oa.screenY):Ql=Zl=0,oa=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),wd=Fn(uo),Og=q({},uo,{dataTransfer:0}),kg=Fn(Og),Bg=q({},aa,{relatedTarget:0}),Jl=Fn(Bg),zg=q({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=Fn(zg),Hg=q({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gg=Fn(Hg),Wg=q({},as,{data:0}),Td=Fn(Wg),Xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qg[t])?!!i[t]:!1}function ec(){return Yg}var $g=q({},aa,{key:function(t){if(t.key){var i=Xg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kg=Fn($g),Zg=q({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=Fn(Zg),Qg=q({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),Jg=Fn(Qg),e0=q({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=Fn(e0),n0=q({},uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=Fn(n0),r0=[9,13,27,32],tc=d&&"CompositionEvent"in window,la=null;d&&"documentMode"in document&&(la=document.documentMode);var s0=d&&"TextEvent"in window&&!la,Cd=d&&(!tc||la&&8<la&&11>=la),Rd=" ",bd=!1;function Pd(t,i){switch(t){case"keyup":return r0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function a0(t,i){switch(t){case"compositionend":return Dd(i);case"keypress":return i.which!==32?null:(bd=!0,Rd);case"textInput":return t=i.data,t===Rd&&bd?null:t;default:return null}}function o0(t,i){if(os)return t==="compositionend"||!tc&&Pd(t,i)?(t=Md(),oo=$l=ar=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cd&&i.locale!=="ko"?null:i.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!l0[t.type]:i==="textarea"}function Nd(t,i,a,c){de(c),i=go(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ca=null,ua=null;function c0(t){Zd(t,0)}function fo(t){var i=ds(t);if(Vt(i))return t}function u0(t,i){if(t==="change")return i}var Id=!1;if(d){var nc;if(d){var ic="oninput"in document;if(!ic){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),ic=typeof Ud.oninput=="function"}nc=ic}else nc=!1;Id=nc&&(!document.documentMode||9<document.documentMode)}function Fd(){ca&&(ca.detachEvent("onpropertychange",Od),ua=ca=null)}function Od(t){if(t.propertyName==="value"&&fo(ua)){var i=[];Nd(i,ua,t,H(t)),Wn(c0,i)}}function f0(t,i,a){t==="focusin"?(Fd(),ca=i,ua=a,ca.attachEvent("onpropertychange",Od)):t==="focusout"&&Fd()}function d0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fo(ua)}function h0(t,i){if(t==="click")return fo(i)}function p0(t,i){if(t==="input"||t==="change")return fo(i)}function m0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:m0;function fa(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!m.call(i,f)||!ii(t[f],i[f]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,i){var a=kd(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kd(a)}}function zd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Vd(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=dt(t.document)}return i}function rc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function g0(t){var i=Vd(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&zd(a.ownerDocument.documentElement,a)){if(c!==null&&rc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(c.start,f);c=c.end===void 0?h:Math.min(c.end,f),!t.extend&&h>c&&(f=c,c=h,h=f),f=Bd(a,h);var w=Bd(a,c);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v0=d&&"documentMode"in document&&11>=document.documentMode,ls=null,sc=null,da=null,ac=!1;function Hd(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||ls==null||ls!==dt(c)||(c=ls,"selectionStart"in c&&rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&fa(da,c)||(da=c,c=go(sc,"onSelect"),0<c.length&&(i=new Kl("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ls)))}function ho(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var cs={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},oc={},Gd={};d&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function po(t){if(oc[t])return oc[t];if(!cs[t])return t;var i=cs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gd)return oc[t]=i[a];return t}var Wd=po("animationend"),Xd=po("animationiteration"),jd=po("animationstart"),qd=po("transitionend"),Yd=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,i){Yd.set(t,i),l(i,[t])}for(var lc=0;lc<$d.length;lc++){var cc=$d[lc],_0=cc.toLowerCase(),x0=cc[0].toUpperCase()+cc.slice(1);or(_0,"on"+x0)}or(Wd,"onAnimationEnd"),or(Xd,"onAnimationIteration"),or(jd,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(qd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Kd(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,rs(c,i,void 0,t),t.currentTarget=null}function Zd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var w=c.length-1;0<=w;w--){var F=c[w],z=F.instance,ae=F.currentTarget;if(F=F.listener,z!==h&&f.isPropagationStopped())break e;Kd(f,F,ae),h=z}else for(w=0;w<c.length;w++){if(F=c[w],z=F.instance,ae=F.currentTarget,F=F.listener,z!==h&&f.isPropagationStopped())break e;Kd(f,F,ae),h=z}}}if(Xn)throw t=Dr,Xn=!1,Dr=null,t}function Bt(t,i){var a=i[vc];a===void 0&&(a=i[vc]=new Set);var c=t+"__bubble";a.has(c)||(Qd(i,t,2,!1),a.add(c))}function uc(t,i,a){var c=0;i&&(c|=4),Qd(a,t,c,i)}var mo="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[mo]){t[mo]=!0,r.forEach(function(a){a!=="selectionchange"&&(S0.has(a)||uc(a,!1,t),uc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[mo]||(i[mo]=!0,uc("selectionchange",!1,i))}}function Qd(t,i,a,c){switch(yd(i)){case 1:var f=Ig;break;case 4:f=Ug;break;default:f=ql}a=f.bind(null,i,a,t),f=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function fc(t,i,a,c,f){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;w=w.return}for(;F!==null;){if(w=Nr(F),w===null)return;if(z=w.tag,z===5||z===6){c=h=w;continue e}F=F.parentNode}}c=c.return}Wn(function(){var ae=h,xe=H(a),Se=[];e:{var _e=Yd.get(t);if(_e!==void 0){var Be=Kl,je=t;switch(t){case"keypress":if(lo(a)===0)break e;case"keydown":case"keyup":Be=Kg;break;case"focusin":je="focus",Be=Jl;break;case"focusout":je="blur",Be=Jl;break;case"beforeblur":case"afterblur":Be=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Jg;break;case Wd:case Xd:case jd:Be=Vg;break;case qd:Be=t0;break;case"scroll":Be=Fg;break;case"wheel":Be=i0;break;case"copy":case"cut":case"paste":Be=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Ad}var $e=(i&4)!==0,Yt=!$e&&t==="scroll",$=$e?_e!==null?_e+"Capture":null:_e;$e=[];for(var G=ae,te;G!==null;){te=G;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,$!==null&&(Te=Sn(G,$),Te!=null&&$e.push(ma(G,Te,te)))),Yt)break;G=G.return}0<$e.length&&(_e=new Be(_e,je,null,a,xe),Se.push({event:_e,listeners:$e}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",_e&&a!==ht&&(je=a.relatedTarget||a.fromElement)&&(Nr(je)||je[Ni]))break e;if((Be||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(je=a.relatedTarget||a.toElement,Be=ae,je=je?Nr(je):null,je!==null&&(Yt=gi(je),je!==Yt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=ae),Be!==je)){if($e=wd,Te="onMouseLeave",$="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&($e=Ad,Te="onPointerLeave",$="onPointerEnter",G="pointer"),Yt=Be==null?_e:ds(Be),te=je==null?_e:ds(je),_e=new $e(Te,G+"leave",Be,a,xe),_e.target=Yt,_e.relatedTarget=te,Te=null,Nr(xe)===ae&&($e=new $e($,G+"enter",je,a,xe),$e.target=te,$e.relatedTarget=Yt,Te=$e),Yt=Te,Be&&je)t:{for($e=Be,$=je,G=0,te=$e;te;te=us(te))G++;for(te=0,Te=$;Te;Te=us(Te))te++;for(;0<G-te;)$e=us($e),G--;for(;0<te-G;)$=us($),te--;for(;G--;){if($e===$||$!==null&&$e===$.alternate)break t;$e=us($e),$=us($)}$e=null}else $e=null;Be!==null&&Jd(Se,_e,Be,$e,!1),je!==null&&Yt!==null&&Jd(Se,Yt,je,$e,!0)}}e:{if(_e=ae?ds(ae):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var Ze=u0;else if(Ld(_e))if(Id)Ze=p0;else{Ze=d0;var it=f0}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ze=h0);if(Ze&&(Ze=Ze(t,ae))){Nd(Se,Ze,a,xe);break e}it&&it(t,_e,ae),t==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&nt(_e,"number",_e.value)}switch(it=ae?ds(ae):window,t){case"focusin":(Ld(it)||it.contentEditable==="true")&&(ls=it,sc=ae,da=null);break;case"focusout":da=sc=ls=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Hd(Se,a,xe);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Hd(Se,a,xe)}var rt;if(tc)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else os?Pd(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(Cd&&a.locale!=="ko"&&(os||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&os&&(rt=Md()):(ar=xe,$l="value"in ar?ar.value:ar.textContent,os=!0)),it=go(ae,lt),0<it.length&&(lt=new Td(lt,t,null,a,xe),Se.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=Dd(a),rt!==null&&(lt.data=rt)))),(rt=s0?a0(t,a):o0(t,a))&&(ae=go(ae,"onBeforeInput"),0<ae.length&&(xe=new Td("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:ae}),xe.data=rt))}Zd(Se,i)})}function ma(t,i,a){return{instance:t,listener:i,currentTarget:a}}function go(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Sn(t,a),h!=null&&c.unshift(ma(t,h,f)),h=Sn(t,i),h!=null&&c.push(ma(t,h,f))),t=t.return}return c}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,i,a,c,f){for(var h=i._reactName,w=[];a!==null&&a!==c;){var F=a,z=F.alternate,ae=F.stateNode;if(z!==null&&z===c)break;F.tag===5&&ae!==null&&(F=ae,f?(z=Sn(a,h),z!=null&&w.unshift(ma(a,z,F))):f||(z=Sn(a,h),z!=null&&w.push(ma(a,z,F)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var y0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(y0,`
`).replace(M0,"")}function vo(t,i,a){if(i=eh(i),eh(t)!==i&&a)throw Error(n(425))}function _o(){}var dc=null,hc=null;function pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(T0)}:mc;function T0(t){setTimeout(function(){throw t})}function gc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),sa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);sa(i)}function lr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),vi="__reactFiber$"+fs,ga="__reactProps$"+fs,Ni="__reactContainer$"+fs,vc="__reactEvents$"+fs,A0="__reactListeners$"+fs,C0="__reactHandles$"+fs;function Nr(t){var i=t[vi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ni]||a[vi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=nh(t);t!==null;){if(a=t[vi])return a;t=nh(t)}return i}t=a,a=t.parentNode}return null}function va(t){return t=t[vi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xo(t){return t[ga]||null}var _c=[],hs=-1;function cr(t){return{current:t}}function zt(t){0>hs||(t.current=_c[hs],_c[hs]=null,hs--)}function kt(t,i){hs++,_c[hs]=t.current,t.current=i}var ur={},hn=cr(ur),Cn=cr(!1),Ir=ur;function ps(t,i){var a=t.type.contextTypes;if(!a)return ur;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Rn(t){return t=t.childContextTypes,t!=null}function So(){zt(Cn),zt(hn)}function ih(t,i,a){if(hn.current!==ur)throw Error(n(168));kt(hn,i),kt(Cn,a)}function rh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,he(t)||"Unknown",f));return q({},a,c)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Ir=hn.current,kt(hn,t),kt(Cn,Cn.current),!0}function sh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=rh(t,i,Ir),c.__reactInternalMemoizedMergedChildContext=t,zt(Cn),zt(hn),kt(hn,t)):zt(Cn),kt(Cn,a)}var Ii=null,Mo=!1,xc=!1;function ah(t){Ii===null?Ii=[t]:Ii.push(t)}function R0(t){Mo=!0,ah(t)}function fr(){if(!xc&&Ii!==null){xc=!0;var t=0,i=ot;try{var a=Ii;for(ot=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Ii=null,Mo=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(t+1)),to(le,fr),f}finally{ot=i,xc=!1}}return null}var ms=[],gs=0,Eo=null,wo=0,qn=[],Yn=0,Ur=null,Ui=1,Fi="";function Fr(t,i){ms[gs++]=wo,ms[gs++]=Eo,Eo=t,wo=i}function oh(t,i,a){qn[Yn++]=Ui,qn[Yn++]=Fi,qn[Yn++]=Ur,Ur=t;var c=Ui;t=Fi;var f=32-et(c)-1;c&=~(1<<f),a+=1;var h=32-et(i)+f;if(30<h){var w=f-f%5;h=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Ui=1<<32-et(i)+f|a<<f|c,Fi=h+t}else Ui=1<<h|a<<f|c,Fi=t}function Sc(t){t.return!==null&&(Fr(t,1),oh(t,1,0))}function yc(t){for(;t===Eo;)Eo=ms[--gs],ms[gs]=null,wo=ms[--gs],ms[gs]=null;for(;t===Ur;)Ur=qn[--Yn],qn[Yn]=null,Fi=qn[--Yn],qn[Yn]=null,Ui=qn[--Yn],qn[Yn]=null}var On=null,kn=null,Ht=!1,ri=null;function lh(t,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ch(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,kn=lr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,On=t,kn=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(Ht){var i=kn;if(i){var a=i;if(!ch(t,i)){if(Mc(t))throw Error(n(418));i=lr(a.nextSibling);var c=On;i&&ch(t,i)?lh(c,a):(t.flags=t.flags&-4097|2,Ht=!1,On=t)}}else{if(Mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,On=t}}}function uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function To(t){if(t!==On)return!1;if(!Ht)return uh(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pc(t.type,t.memoizedProps)),i&&(i=kn)){if(Mc(t))throw fh(),Error(n(418));for(;i;)lh(t,i),i=lr(i.nextSibling)}if(uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){kn=lr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=On?lr(t.stateNode.nextSibling):null;return!0}function fh(){for(var t=kn;t;)t=lr(t.nextSibling)}function vs(){kn=On=null,Ht=!1}function wc(t){ri===null?ri=[t]:ri.push(t)}var b0=P.ReactCurrentBatchConfig;function _a(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(w){var F=f.refs;w===null?delete F[h]:F[h]=w},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ao(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function dh(t){var i=t._init;return i(t._payload)}function hh(t){function i($,G){if(t){var te=$.deletions;te===null?($.deletions=[G],$.flags|=16):te.push(G)}}function a($,G){if(!t)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function c($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function f($,G){return $=xr($,G),$.index=0,$.sibling=null,$}function h($,G,te){return $.index=te,t?(te=$.alternate,te!==null?(te=te.index,te<G?($.flags|=2,G):te):($.flags|=2,G)):($.flags|=1048576,G)}function w($){return t&&$.alternate===null&&($.flags|=2),$}function F($,G,te,Te){return G===null||G.tag!==6?(G=mu(te,$.mode,Te),G.return=$,G):(G=f(G,te),G.return=$,G)}function z($,G,te,Te){var Ze=te.type;return Ze===O?xe($,G,te.props.children,Te,te.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ee&&dh(Ze)===G.type)?(Te=f(G,te.props),Te.ref=_a($,G,te),Te.return=$,Te):(Te=Ko(te.type,te.key,te.props,null,$.mode,Te),Te.ref=_a($,G,te),Te.return=$,Te)}function ae($,G,te,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=gu(te,$.mode,Te),G.return=$,G):(G=f(G,te.children||[]),G.return=$,G)}function xe($,G,te,Te,Ze){return G===null||G.tag!==7?(G=Wr(te,$.mode,Te,Ze),G.return=$,G):(G=f(G,te),G.return=$,G)}function Se($,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=mu(""+G,$.mode,te),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return te=Ko(G.type,G.key,G.props,null,$.mode,te),te.ref=_a($,null,G),te.return=$,te;case U:return G=gu(G,$.mode,te),G.return=$,G;case ee:var Te=G._init;return Se($,Te(G._payload),te)}if(ut(G)||se(G))return G=Wr(G,$.mode,te,null),G.return=$,G;Ao($,G)}return null}function _e($,G,te,Te){var Ze=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ze!==null?null:F($,G,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===Ze?z($,G,te,Te):null;case U:return te.key===Ze?ae($,G,te,Te):null;case ee:return Ze=te._init,_e($,G,Ze(te._payload),Te)}if(ut(te)||se(te))return Ze!==null?null:xe($,G,te,Te,null);Ao($,te)}return null}function Be($,G,te,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(te)||null,F(G,$,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case I:return $=$.get(Te.key===null?te:Te.key)||null,z(G,$,Te,Ze);case U:return $=$.get(Te.key===null?te:Te.key)||null,ae(G,$,Te,Ze);case ee:var it=Te._init;return Be($,G,te,it(Te._payload),Ze)}if(ut(Te)||se(Te))return $=$.get(te)||null,xe(G,$,Te,Ze,null);Ao(G,Te)}return null}function je($,G,te,Te){for(var Ze=null,it=null,rt=G,lt=G=0,ln=null;rt!==null&&lt<te.length;lt++){rt.index>lt?(ln=rt,rt=null):ln=rt.sibling;var Ct=_e($,rt,te[lt],Te);if(Ct===null){rt===null&&(rt=ln);break}t&&rt&&Ct.alternate===null&&i($,rt),G=h(Ct,G,lt),it===null?Ze=Ct:it.sibling=Ct,it=Ct,rt=ln}if(lt===te.length)return a($,rt),Ht&&Fr($,lt),Ze;if(rt===null){for(;lt<te.length;lt++)rt=Se($,te[lt],Te),rt!==null&&(G=h(rt,G,lt),it===null?Ze=rt:it.sibling=rt,it=rt);return Ht&&Fr($,lt),Ze}for(rt=c($,rt);lt<te.length;lt++)ln=Be(rt,$,lt,te[lt],Te),ln!==null&&(t&&ln.alternate!==null&&rt.delete(ln.key===null?lt:ln.key),G=h(ln,G,lt),it===null?Ze=ln:it.sibling=ln,it=ln);return t&&rt.forEach(function(Sr){return i($,Sr)}),Ht&&Fr($,lt),Ze}function $e($,G,te,Te){var Ze=se(te);if(typeof Ze!="function")throw Error(n(150));if(te=Ze.call(te),te==null)throw Error(n(151));for(var it=Ze=null,rt=G,lt=G=0,ln=null,Ct=te.next();rt!==null&&!Ct.done;lt++,Ct=te.next()){rt.index>lt?(ln=rt,rt=null):ln=rt.sibling;var Sr=_e($,rt,Ct.value,Te);if(Sr===null){rt===null&&(rt=ln);break}t&&rt&&Sr.alternate===null&&i($,rt),G=h(Sr,G,lt),it===null?Ze=Sr:it.sibling=Sr,it=Sr,rt=ln}if(Ct.done)return a($,rt),Ht&&Fr($,lt),Ze;if(rt===null){for(;!Ct.done;lt++,Ct=te.next())Ct=Se($,Ct.value,Te),Ct!==null&&(G=h(Ct,G,lt),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return Ht&&Fr($,lt),Ze}for(rt=c($,rt);!Ct.done;lt++,Ct=te.next())Ct=Be(rt,$,lt,Ct.value,Te),Ct!==null&&(t&&Ct.alternate!==null&&rt.delete(Ct.key===null?lt:Ct.key),G=h(Ct,G,lt),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return t&&rt.forEach(function(lv){return i($,lv)}),Ht&&Fr($,lt),Ze}function Yt($,G,te,Te){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var Ze=te.key,it=G;it!==null;){if(it.key===Ze){if(Ze=te.type,Ze===O){if(it.tag===7){a($,it.sibling),G=f(it,te.props.children),G.return=$,$=G;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ee&&dh(Ze)===it.type){a($,it.sibling),G=f(it,te.props),G.ref=_a($,it,te),G.return=$,$=G;break e}a($,it);break}else i($,it);it=it.sibling}te.type===O?(G=Wr(te.props.children,$.mode,Te,te.key),G.return=$,$=G):(Te=Ko(te.type,te.key,te.props,null,$.mode,Te),Te.ref=_a($,G,te),Te.return=$,$=Te)}return w($);case U:e:{for(it=te.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a($,G.sibling),G=f(G,te.children||[]),G.return=$,$=G;break e}else{a($,G);break}else i($,G);G=G.sibling}G=gu(te,$.mode,Te),G.return=$,$=G}return w($);case ee:return it=te._init,Yt($,G,it(te._payload),Te)}if(ut(te))return je($,G,te,Te);if(se(te))return $e($,G,te,Te);Ao($,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a($,G.sibling),G=f(G,te),G.return=$,$=G):(a($,G),G=mu(te,$.mode,Te),G.return=$,$=G),w($)):a($,G)}return Yt}var _s=hh(!0),ph=hh(!1),Co=cr(null),Ro=null,xs=null,Tc=null;function Ac(){Tc=xs=Ro=null}function Cc(t){var i=Co.current;zt(Co),t._currentValue=i}function Rc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function Ss(t,i){Ro=t,Tc=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function $n(t){var i=t._currentValue;if(Tc!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(Ro===null)throw Error(n(308));xs=t,Ro.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Or=null;function bc(t){Or===null?Or=[t]:Or.push(t)}function mh(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,bc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Oi(t,c)}function Oi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var dr=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Oi(t,a)}return f=c.interleaved,f===null?(i.next=i,bc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Oi(t,a)}function bo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,bt(t,a)}}function vh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Po(t,i,a,c){var f=t.updateQueue;dr=!1;var h=f.firstBaseUpdate,w=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var z=F,ae=z.next;z.next=null,w===null?h=ae:w.next=ae,w=z;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==w&&(F===null?xe.firstBaseUpdate=ae:F.next=ae,xe.lastBaseUpdate=z))}if(h!==null){var Se=f.baseState;w=0,xe=ae=z=null,F=h;do{var _e=F.lane,Be=F.eventTime;if((c&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=t,$e=F;switch(_e=i,Be=a,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){Se=je.call(Be,Se,_e);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,_e=typeof je=="function"?je.call(Be,Se,_e):je,_e==null)break e;Se=q({},Se,_e);break e;case 2:dr=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,_e=f.effects,_e===null?f.effects=[F]:_e.push(F))}else Be={eventTime:Be,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(ae=xe=Be,z=Se):xe=xe.next=Be,w|=_e;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(xe===null&&(z=Se),f.baseState=z,f.firstBaseUpdate=ae,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);zr|=w,t.lanes=w,t.memoizedState=Se}}function _h(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var xa={},_i=cr(xa),Sa=cr(xa),ya=cr(xa);function kr(t){if(t===xa)throw Error(n(174));return t}function Dc(t,i){switch(kt(ya,i),kt(Sa,t),kt(_i,xa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ve(i,t)}zt(_i),kt(_i,i)}function ys(){zt(_i),zt(Sa),zt(ya)}function xh(t){kr(ya.current);var i=kr(_i.current),a=ve(i,t.type);i!==a&&(kt(Sa,t),kt(_i,a))}function Lc(t){Sa.current===t&&(zt(_i),zt(Sa))}var Gt=cr(0);function Do(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Ic(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Lo=P.ReactCurrentDispatcher,Uc=P.ReactCurrentBatchConfig,Br=0,Wt=null,en=null,an=null,No=!1,Ma=!1,Ea=0,P0=0;function pn(){throw Error(n(321))}function Fc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ii(t[a],i[a]))return!1;return!0}function Oc(t,i,a,c,f,h){if(Br=h,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Lo.current=t===null||t.memoizedState===null?I0:U0,t=a(c,f),Ma){h=0;do{if(Ma=!1,Ea=0,25<=h)throw Error(n(301));h+=1,an=en=null,i.updateQueue=null,Lo.current=F0,t=a(c,f)}while(Ma)}if(Lo.current=Fo,i=en!==null&&en.next!==null,Br=0,an=en=Wt=null,No=!1,i)throw Error(n(300));return t}function kc(){var t=Ea!==0;return Ea=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Wt.memoizedState=an=t:an=an.next=t,an}function Kn(){if(en===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=an===null?Wt.memoizedState:an.next;if(i!==null)an=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?Wt.memoizedState=an=t:an=an.next=t}return an}function wa(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=en,f=c.baseQueue,h=a.pending;if(h!==null){if(f!==null){var w=f.next;f.next=h.next,h.next=w}c.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,c=c.baseState;var F=w=null,z=null,ae=h;do{var xe=ae.lane;if((Br&xe)===xe)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),c=ae.hasEagerState?ae.eagerState:t(c,ae.action);else{var Se={lane:xe,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(F=z=Se,w=c):z=z.next=Se,Wt.lanes|=xe,zr|=xe}ae=ae.next}while(ae!==null&&ae!==h);z===null?w=c:z.next=F,ii(c,i.memoizedState)||(bn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=z,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do h=f.lane,Wt.lanes|=h,zr|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zc(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do h=t(h,w.action),w=w.next;while(w!==f);ii(h,i.memoizedState)||(bn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function Sh(){}function yh(t,i){var a=Wt,c=Kn(),f=i(),h=!ii(c.memoizedState,f);if(h&&(c.memoizedState=f,bn=!0),c=c.queue,Vc(wh.bind(null,a,c,t),[t]),c.getSnapshot!==i||h||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Eh.bind(null,a,c,f,i),void 0,null),on===null)throw Error(n(349));(Br&30)!==0||Mh(a,i,f)}return f}function Mh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Eh(t,i,a,c){i.value=a,i.getSnapshot=c,Th(i)&&Ah(t)}function wh(t,i,a){return a(function(){Th(i)&&Ah(t)})}function Th(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ii(t,a)}catch{return!0}}function Ah(t){var i=Oi(t,1);i!==null&&li(i,t,1,-1)}function Ch(t){var i=xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},i.queue=t,t=t.dispatch=N0.bind(null,Wt,t),[i.memoizedState,t]}function Ta(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Rh(){return Kn().memoizedState}function Io(t,i,a,c){var f=xi();Wt.flags|=t,f.memoizedState=Ta(1|i,a,void 0,c===void 0?null:c)}function Uo(t,i,a,c){var f=Kn();c=c===void 0?null:c;var h=void 0;if(en!==null){var w=en.memoizedState;if(h=w.destroy,c!==null&&Fc(c,w.deps)){f.memoizedState=Ta(i,a,h,c);return}}Wt.flags|=t,f.memoizedState=Ta(1|i,a,h,c)}function bh(t,i){return Io(8390656,8,t,i)}function Vc(t,i){return Uo(2048,8,t,i)}function Ph(t,i){return Uo(4,2,t,i)}function Dh(t,i){return Uo(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Nh(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4,4,Lh.bind(null,i,t),a)}function Hc(){}function Ih(t,i){var a=Kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Uh(t,i){var a=Kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Fh(t,i,a){return(Br&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=a):(ii(a,i)||(a=Tn(),Wt.lanes|=a,zr|=a,t.baseState=!0),i)}function D0(t,i){var a=ot;ot=a!==0&&4>a?a:4,t(!0);var c=Uc.transition;Uc.transition={};try{t(!1),i()}finally{ot=a,Uc.transition=c}}function Oh(){return Kn().memoizedState}function L0(t,i,a){var c=vr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},kh(t))Bh(i,a);else if(a=mh(t,i,a,c),a!==null){var f=En();li(a,t,c,f),zh(a,i,c)}}function N0(t,i,a){var c=vr(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(kh(t))Bh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,F=h(w,a);if(f.hasEagerState=!0,f.eagerState=F,ii(F,w)){var z=i.interleaved;z===null?(f.next=f,bc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}a=mh(t,i,f,c),a!==null&&(f=En(),li(a,t,c,f),zh(a,i,c))}}function kh(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Bh(t,i){Ma=No=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function zh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,bt(t,a)}}var Fo={readContext:$n,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},I0={readContext:$n,useCallback:function(t,i){return xi().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:bh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Io(4194308,4,Lh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Io(4194308,4,t,i)},useInsertionEffect:function(t,i){return Io(4,2,t,i)},useMemo:function(t,i){var a=xi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=xi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=L0.bind(null,Wt,t),[c.memoizedState,t]},useRef:function(t){var i=xi();return t={current:t},i.memoizedState=t},useState:Ch,useDebugValue:Hc,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Ch(!1),i=t[0];return t=D0.bind(null,t[1]),xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Wt,f=xi();if(Ht){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),on===null)throw Error(n(349));(Br&30)!==0||Mh(c,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,bh(wh.bind(null,c,h,t),[t]),c.flags|=2048,Ta(9,Eh.bind(null,c,h,a,i),void 0,null),a},useId:function(){var t=xi(),i=on.identifierPrefix;if(Ht){var a=Fi,c=Ui;a=(c&~(1<<32-et(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=P0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},U0={readContext:$n,useCallback:Ih,useContext:$n,useEffect:Vc,useImperativeHandle:Nh,useInsertionEffect:Ph,useLayoutEffect:Dh,useMemo:Uh,useReducer:Bc,useRef:Rh,useState:function(){return Bc(wa)},useDebugValue:Hc,useDeferredValue:function(t){var i=Kn();return Fh(i,en.memoizedState,t)},useTransition:function(){var t=Bc(wa)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:yh,useId:Oh,unstable_isNewReconciler:!1},F0={readContext:$n,useCallback:Ih,useContext:$n,useEffect:Vc,useImperativeHandle:Nh,useInsertionEffect:Ph,useLayoutEffect:Dh,useMemo:Uh,useReducer:zc,useRef:Rh,useState:function(){return zc(wa)},useDebugValue:Hc,useDeferredValue:function(t){var i=Kn();return en===null?i.memoizedState=t:Fh(i,en.memoizedState,t)},useTransition:function(){var t=zc(wa)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:yh,useId:Oh,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=q({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Gc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:q({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Oo={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=En(),f=vr(t),h=ki(c,f);h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,f),i!==null&&(li(i,t,f,c),bo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=En(),f=vr(t),h=ki(c,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,f),i!==null&&(li(i,t,f,c),bo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=En(),c=vr(t),f=ki(a,c);f.tag=2,i!=null&&(f.callback=i),i=hr(t,f,c),i!==null&&(li(i,t,c,a),bo(i,t,c))}};function Vh(t,i,a,c,f,h,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,w):i.prototype&&i.prototype.isPureReactComponent?!fa(a,c)||!fa(f,h):!0}function Hh(t,i,a){var c=!1,f=ur,h=i.contextType;return typeof h=="object"&&h!==null?h=$n(h):(f=Rn(i)?Ir:hn.current,c=i.contextTypes,h=(c=c!=null)?ps(t,f):ur),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Gh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Oo.enqueueReplaceState(i,i.state,null)}function Wc(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Pc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=$n(h):(h=Rn(i)?Ir:hn.current,f.context=ps(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Gc(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Oo.enqueueReplaceState(f,f.state,null),Po(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var a="",c=i;do a+=Le(c),c=c.return;while(c);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Xc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function jc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function Wh(t,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Wo||(Wo=!0,ou=c),jc(t,i)},a}function Xh(t,i,a){a=ki(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){jc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){jc(t,i),typeof c!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function jh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new O0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=Z0.bind(null,t,i,a),i.then(t,t))}function qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Yh(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var k0=P.ReactCurrentOwner,bn=!1;function Mn(t,i,a,c){i.child=t===null?ph(i,null,a,c):_s(i,t.child,a,c)}function $h(t,i,a,c,f){a=a.render;var h=i.ref;return Ss(i,f),c=Oc(t,i,a,c,h,f),a=kc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Ht&&a&&Sc(i),i.flags|=1,Mn(t,i,c,f),i.child)}function Kh(t,i,a,c,f){if(t===null){var h=a.type;return typeof h=="function"&&!pu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Zh(t,i,h,c,f)):(t=Ko(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:fa,a(w,c)&&t.ref===i.ref)return Bi(t,i,f)}return i.flags|=1,t=xr(h,c),t.ref=i.ref,t.return=i,i.child=t}function Zh(t,i,a,c,f){if(t!==null){var h=t.memoizedProps;if(fa(h,c)&&t.ref===i.ref)if(bn=!1,i.pendingProps=c=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,Bi(t,i,f)}return qc(t,i,a,c,f)}function Qh(t,i,a){var c=i.pendingProps,f=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(ws,Bn),Bn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(ws,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,kt(ws,Bn),Bn|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,kt(ws,Bn),Bn|=c;return Mn(t,i,f,a),i.child}function Jh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function qc(t,i,a,c,f){var h=Rn(a)?Ir:hn.current;return h=ps(i,h),Ss(i,f),a=Oc(t,i,a,c,h,f),c=kc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Ht&&c&&Sc(i),i.flags|=1,Mn(t,i,a,f),i.child)}function ep(t,i,a,c,f){if(Rn(a)){var h=!0;yo(i)}else h=!1;if(Ss(i,f),i.stateNode===null)Bo(t,i),Hh(i,a,c),Wc(i,a,c,f),c=!0;else if(t===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var z=w.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=$n(ae):(ae=Rn(a)?Ir:hn.current,ae=ps(i,ae));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||z!==ae)&&Gh(i,w,c,ae),dr=!1;var _e=i.memoizedState;w.state=_e,Po(i,c,w,f),z=i.memoizedState,F!==c||_e!==z||Cn.current||dr?(typeof xe=="function"&&(Gc(i,a,xe,c),z=i.memoizedState),(F=dr||Vh(i,a,F,c,_e,z,ae))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),w.props=c,w.state=z,w.context=ae,c=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,gh(t,i),F=i.memoizedProps,ae=i.type===i.elementType?F:si(i.type,F),w.props=ae,Se=i.pendingProps,_e=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=$n(z):(z=Rn(a)?Ir:hn.current,z=ps(i,z));var Be=a.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Se||_e!==z)&&Gh(i,w,c,z),dr=!1,_e=i.memoizedState,w.state=_e,Po(i,c,w,f);var je=i.memoizedState;F!==Se||_e!==je||Cn.current||dr?(typeof Be=="function"&&(Gc(i,a,Be,c),je=i.memoizedState),(ae=dr||Vh(i,a,ae,c,_e,je,z)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,je,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,je,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),w.props=c,w.state=je,w.context=z,c=ae):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),c=!1)}return Yc(t,i,a,c,h,f)}function Yc(t,i,a,c,f,h){Jh(t,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&sh(i,a,!1),Bi(t,i,h);c=i.stateNode,k0.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&w?(i.child=_s(i,t.child,null,h),i.child=_s(i,null,F,h)):Mn(t,i,F,h),i.memoizedState=c.state,f&&sh(i,a,!0),i.child}function tp(t){var i=t.stateNode;i.pendingContext?ih(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ih(t,i.context,!1),Dc(t,i.containerInfo)}function np(t,i,a,c,f){return vs(),wc(f),i.flags|=256,Mn(t,i,a,c),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ip(t,i,a){var c=i.pendingProps,f=Gt.current,h=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=t!==null&&t.memoizedState===null?!1:(f&2)!==0),F?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),kt(Gt,f&1),t===null)return Ec(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,t=c.fallback,h?(c=i.mode,h=i.child,w={mode:"hidden",children:w},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=w):h=Zo(w,c,0,null),t=Wr(t,c,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Kc(a),i.memoizedState=$c,t):Zc(i,w));if(f=t.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return B0(t,i,w,c,F,f,a);if(h){h=c.fallback,w=i.mode,f=t.child,F=f.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=xr(f,z),c.subtreeFlags=f.subtreeFlags&14680064),F!==null?h=xr(F,h):(h=Wr(h,w,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,w=t.child.memoizedState,w=w===null?Kc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=t.childLanes&~a,i.memoizedState=$c,c}return h=t.child,t=h.sibling,c=xr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function Zc(t,i){return i=Zo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ko(t,i,a,c){return c!==null&&wc(c),_s(i,t.child,null,a),t=Zc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function B0(t,i,a,c,f,h,w){if(a)return i.flags&256?(i.flags&=-257,c=Xc(Error(n(422))),ko(t,i,w,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,f=i.mode,c=Zo({mode:"visible",children:c.children},f,0,null),h=Wr(h,f,w,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&_s(i,t.child,null,w),i.child.memoizedState=Kc(w),i.memoizedState=$c,h);if((i.mode&1)===0)return ko(t,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var F=c.dgst;return c=F,h=Error(n(419)),c=Xc(h,c,void 0),ko(t,i,w,c)}if(F=(w&t.childLanes)!==0,bn||F){if(c=on,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Oi(t,f),li(c,t,f,-1))}return hu(),c=Xc(Error(n(421))),ko(t,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Q0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,kn=lr(f.nextSibling),On=i,Ht=!0,ri=null,t!==null&&(qn[Yn++]=Ui,qn[Yn++]=Fi,qn[Yn++]=Ur,Ui=t.id,Fi=t.overflow,Ur=i),i=Zc(i,c.children),i.flags|=4096,i)}function rp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Rc(t.return,i,a)}function Qc(t,i,a,c,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=f)}function sp(t,i,a){var c=i.pendingProps,f=c.revealOrder,h=c.tail;if(Mn(t,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,a,i);else if(t.tag===19)rp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(kt(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Qc(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Do(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Qc(i,!0,a,null,h);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=xr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=xr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function z0(t,i,a){switch(i.tag){case 3:tp(i),vs();break;case 5:xh(i);break;case 1:Rn(i.type)&&yo(i);break;case 4:Dc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;kt(Co,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ip(t,i,a):(kt(Gt,Gt.current&1),t=Bi(t,i,a),t!==null?t.sibling:null);kt(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return sp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,Qh(t,i,a)}return Bi(t,i,a)}var ap,Jc,op,lp;ap=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jc=function(){},op=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,kr(_i.current);var h=null;switch(a){case"input":f=St(t,f),c=St(t,c),h=[];break;case"select":f=q({},f,{value:void 0}),c=q({},c,{value:void 0}),h=[];break;case"textarea":f=Ne(t,f),c=Ne(t,c),h=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=_o)}We(a,c);var w;a=null;for(ae in f)if(!c.hasOwnProperty(ae)&&f.hasOwnProperty(ae)&&f[ae]!=null)if(ae==="style"){var F=f[ae];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?h||(h=[]):(h=h||[]).push(ae,null));for(ae in c){var z=c[ae];if(F=f!=null?f[ae]:void 0,c.hasOwnProperty(ae)&&z!==F&&(z!=null||F!=null))if(ae==="style")if(F){for(w in F)!F.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&F[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(h||(h=[]),h.push(ae,a)),a=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(h=h||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&Bt("scroll",t),h||F===z||(h=[])):(h=h||[]).push(ae,z))}a&&(h=h||[]).push("style",a);var ae=h;(i.updateQueue=ae)&&(i.flags|=4)}},lp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Aa(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function V0(t,i,a){var c=i.pendingProps;switch(yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Rn(i.type)&&So(),mn(i),null;case 3:return c=i.stateNode,ys(),zt(Cn),zt(hn),Ic(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(To(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(uu(ri),ri=null))),Jc(t,i),mn(i),null;case 5:Lc(i);var f=kr(ya.current);if(a=i.type,t!==null&&i.stateNode!=null)op(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=kr(_i.current),To(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[vi]=i,c[ga]=h,t=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(f=0;f<ha.length;f++)Bt(ha[f],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":At(c,h),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Bt("invalid",c);break;case"textarea":D(c,h),Bt("invalid",c)}We(a,h),f=null;for(var w in h)if(h.hasOwnProperty(w)){var F=h[w];w==="children"?typeof F=="string"?c.textContent!==F&&(h.suppressHydrationWarning!==!0&&vo(c.textContent,F,t),f=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(h.suppressHydrationWarning!==!0&&vo(c.textContent,F,t),f=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Bt("scroll",c)}switch(a){case"input":tt(c),B(c,h,!0);break;case"textarea":tt(c),X(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=_o)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=w.createElement(a,{is:c.is}):(t=w.createElement(a),a==="select"&&(w=t,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):t=w.createElementNS(t,a),t[vi]=i,t[ga]=c,ap(t,i,!1,!1),i.stateNode=t;e:{switch(w=Ie(a,c),a){case"dialog":Bt("cancel",t),Bt("close",t),f=c;break;case"iframe":case"object":case"embed":Bt("load",t),f=c;break;case"video":case"audio":for(f=0;f<ha.length;f++)Bt(ha[f],t);f=c;break;case"source":Bt("error",t),f=c;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),f=c;break;case"details":Bt("toggle",t),f=c;break;case"input":At(t,c),f=St(t,c),Bt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=q({},c,{value:void 0}),Bt("invalid",t);break;case"textarea":D(t,c),f=Ne(t,c),Bt("invalid",t);break;default:f=c}We(a,f),F=f;for(h in F)if(F.hasOwnProperty(h)){var z=F[h];h==="style"?Ae(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&He(t,z)):h==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&we(t,z):typeof z=="number"&&we(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Bt("scroll",t):z!=null&&N(t,h,z,w))}switch(a){case"input":tt(t),B(t,c,!1);break;case"textarea":tt(t),X(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ge(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?pt(t,!!c.multiple,h,!1):c.defaultValue!=null&&pt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=_o)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)lp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=kr(ya.current),kr(_i.current),To(i)){if(c=i.stateNode,a=i.memoizedProps,c[vi]=i,(h=c.nodeValue!==a)&&(t=On,t!==null))switch(t.tag){case 3:vo(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(c.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[vi]=i,i.stateNode=c}return mn(i),null;case 13:if(zt(Gt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)fh(),vs(),i.flags|=98560,h=!1;else if(h=To(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[vi]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),h=!1}else ri!==null&&(uu(ri),ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?tn===0&&(tn=3):hu())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return ys(),Jc(t,i),t===null&&pa(i.stateNode.containerInfo),mn(i),null;case 10:return Cc(i.type._context),mn(i),null;case 17:return Rn(i.type)&&So(),mn(i),null;case 19:if(zt(Gt),h=i.memoizedState,h===null)return mn(i),null;if(c=(i.flags&128)!==0,w=h.rendering,w===null)if(c)Aa(h,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Do(t),w!==null){for(i.flags|=128,Aa(h,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,t=c,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,t=w.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return kt(Gt,Gt.current&1|2),i.child}t=t.sibling}h.tail!==null&&A()>Ts&&(i.flags|=128,c=!0,Aa(h,!1),i.lanes=4194304)}else{if(!c)if(t=Do(w),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Aa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!Ht)return mn(i),null}else 2*A()-h.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,c=!0,Aa(h,!1),i.lanes=4194304);h.isBackwards?(w.sibling=i.child,i.child=w):(a=h.last,a!==null?a.sibling=w:i.child=w,h.last=w)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=A(),i.sibling=null,a=Gt.current,kt(Gt,c?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return du(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function H0(t,i){switch(yc(i),i.tag){case 1:return Rn(i.type)&&So(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),zt(Cn),zt(hn),Ic(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Lc(i),null;case 13:if(zt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(Gt),null;case 4:return ys(),null;case 10:return Cc(i.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var zo=!1,gn=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Es(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(t,i,c)}else a.current=null}function eu(t,i,a){try{a()}catch(c){Xt(t,i,c)}}var cp=!1;function W0(t,i){if(dc=so,t=Vd(),rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var w=0,F=-1,z=-1,ae=0,xe=0,Se=t,_e=null;t:for(;;){for(var Be;Se!==a||f!==0&&Se.nodeType!==3||(F=w+f),Se!==h||c!==0&&Se.nodeType!==3||(z=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(Be=Se.firstChild)!==null;)_e=Se,Se=Be;for(;;){if(Se===t)break t;if(_e===a&&++ae===f&&(F=w),_e===h&&++xe===c&&(z=w),(Be=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Be}a=F===-1||z===-1?null:{start:F,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(hc={focusedElem:t,selectionRange:a},so=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,Yt=je.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?$e:si(i.type,$e),Yt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Xt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return je=cp,cp=!1,je}function Ca(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&eu(i,a,h)}f=f.next}while(f!==c)}}function Vo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function tu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function up(t){var i=t.alternate;i!==null&&(t.alternate=null,up(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[vi],delete i[ga],delete i[vc],delete i[A0],delete i[C0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fp(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_o));else if(c!==4&&(t=t.child,t!==null))for(nu(t,i,a),t=t.sibling;t!==null;)nu(t,i,a),t=t.sibling}function iu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(iu(t,i,a),t=t.sibling;t!==null;)iu(t,i,a),t=t.sibling}var un=null,ai=!1;function pr(t,i,a){for(a=a.child;a!==null;)hp(t,i,a),a=a.sibling}function hp(t,i,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 5:gn||Es(a,i);case 6:var c=un,f=ai;un=null,pr(t,i,a),un=c,ai=f,un!==null&&(ai?(t=un,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(ai?(t=un,a=a.stateNode,t.nodeType===8?gc(t.parentNode,a):t.nodeType===1&&gc(t,a),sa(t)):gc(un,a.stateNode));break;case 4:c=un,f=ai,un=a.stateNode.containerInfo,ai=!0,pr(t,i,a),un=c,ai=f;break;case 0:case 11:case 14:case 15:if(!gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var h=f,w=h.destroy;h=h.tag,w!==void 0&&((h&2)!==0||(h&4)!==0)&&eu(a,i,w),f=f.next}while(f!==c)}pr(t,i,a);break;case 1:if(!gn&&(Es(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){Xt(a,i,F)}pr(t,i,a);break;case 21:pr(t,i,a);break;case 22:a.mode&1?(gn=(c=gn)||a.memoizedState!==null,pr(t,i,a),gn=c):pr(t,i,a);break;default:pr(t,i,a)}}function pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new G0),i.forEach(function(c){var f=J0.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function oi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var h=t,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:un=F.stateNode,ai=!1;break e;case 3:un=F.stateNode.containerInfo,ai=!0;break e;case 4:un=F.stateNode.containerInfo,ai=!0;break e}F=F.return}if(un===null)throw Error(n(160));hp(h,w,f),un=null,ai=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ae){Xt(f,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mp(i,t),i=i.sibling}function mp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),Si(t),c&4){try{Ca(3,t,t.return),Vo(3,t)}catch($e){Xt(t,t.return,$e)}try{Ca(5,t,t.return)}catch($e){Xt(t,t.return,$e)}}break;case 1:oi(i,t),Si(t),c&512&&a!==null&&Es(a,a.return);break;case 5:if(oi(i,t),Si(t),c&512&&a!==null&&Es(a,a.return),t.flags&32){var f=t.stateNode;try{we(f,"")}catch($e){Xt(t,t.return,$e)}}if(c&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,w=a!==null?a.memoizedProps:h,F=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{F==="input"&&h.type==="radio"&&h.name!=null&&ct(f,h),Ie(F,w);var ae=Ie(F,h);for(w=0;w<z.length;w+=2){var xe=z[w],Se=z[w+1];xe==="style"?Ae(f,Se):xe==="dangerouslySetInnerHTML"?He(f,Se):xe==="children"?we(f,Se):N(f,xe,Se,ae)}switch(F){case"input":It(f,h);break;case"textarea":M(f,h);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Be=h.value;Be!=null?pt(f,!!h.multiple,Be,!1):_e!==!!h.multiple&&(h.defaultValue!=null?pt(f,!!h.multiple,h.defaultValue,!0):pt(f,!!h.multiple,h.multiple?[]:"",!1))}f[ga]=h}catch($e){Xt(t,t.return,$e)}}break;case 6:if(oi(i,t),Si(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch($e){Xt(t,t.return,$e)}}break;case 3:if(oi(i,t),Si(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{sa(i.containerInfo)}catch($e){Xt(t,t.return,$e)}break;case 4:oi(i,t),Si(t);break;case 13:oi(i,t),Si(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(au=A())),c&4&&pp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(gn=(ae=gn)||xe,oi(i,t),gn=ae):oi(i,t),Si(t),c&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!xe&&(t.mode&1)!==0)for(Ge=t,xe=t.child;xe!==null;){for(Se=Ge=xe;Ge!==null;){switch(_e=Ge,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ca(4,_e,_e.return);break;case 1:Es(_e,_e.return);var je=_e.stateNode;if(typeof je.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch($e){Xt(c,a,$e)}}break;case 5:Es(_e,_e.return);break;case 22:if(_e.memoizedState!==null){_p(Se);continue}}Be!==null?(Be.return=_e,Ge=Be):_p(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{f=Se.stateNode,ae?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(F=Se.stateNode,z=Se.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=ye("display",w))}catch($e){Xt(t,t.return,$e)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ae?"":Se.memoizedProps}catch($e){Xt(t,t.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:oi(i,t),Si(t),c&4&&pp(t);break;case 21:break;default:oi(i,t),Si(t)}}function Si(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(fp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(we(f,""),c.flags&=-33);var h=dp(t);iu(t,h,f);break;case 3:case 4:var w=c.stateNode.containerInfo,F=dp(t);nu(t,F,w);break;default:throw Error(n(161))}}catch(z){Xt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function X0(t,i,a){Ge=t,gp(t)}function gp(t,i,a){for(var c=(t.mode&1)!==0;Ge!==null;){var f=Ge,h=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||zo;if(!w){var F=f.alternate,z=F!==null&&F.memoizedState!==null||gn;F=zo;var ae=gn;if(zo=w,(gn=z)&&!ae)for(Ge=f;Ge!==null;)w=Ge,z=w.child,w.tag===22&&w.memoizedState!==null?xp(f):z!==null?(z.return=w,Ge=z):xp(f);for(;h!==null;)Ge=h,gp(h),h=h.sibling;Ge=f,zo=F,gn=ae}vp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ge=h):vp(t)}}function vp(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Vo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!gn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&_h(i,h,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}_h(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var xe=ae.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&sa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&tu(i)}catch(_e){Xt(i,i.return,_e)}}if(i===t){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function _p(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function xp(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Vo(4,i)}catch(z){Xt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){Xt(i,f,z)}}var h=i.return;try{tu(i)}catch(z){Xt(i,h,z)}break;case 5:var w=i.return;try{tu(i)}catch(z){Xt(i,w,z)}}}catch(z){Xt(i,i.return,z)}if(i===t){Ge=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Ge=F;break}Ge=i.return}}var j0=Math.ceil,Ho=P.ReactCurrentDispatcher,ru=P.ReactCurrentOwner,Zn=P.ReactCurrentBatchConfig,wt=0,on=null,Kt=null,fn=0,Bn=0,ws=cr(0),tn=0,Ra=null,zr=0,Go=0,su=0,ba=null,Pn=null,au=0,Ts=1/0,zi=null,Wo=!1,ou=null,mr=null,Xo=!1,gr=null,jo=0,Pa=0,lu=null,qo=-1,Yo=0;function En(){return(wt&6)!==0?A():qo!==-1?qo:qo=A()}function vr(t){return(t.mode&1)===0?1:(wt&2)!==0&&fn!==0?fn&-fn:b0.transition!==null?(Yo===0&&(Yo=Tn()),Yo):(t=ot,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function li(t,i,a,c){if(50<Pa)throw Pa=0,lu=null,Error(n(185));Un(t,a,c),((wt&2)===0||t!==on)&&(t===on&&((wt&2)===0&&(Go|=a),tn===4&&_r(t,fn)),Dn(t,c),a===1&&wt===0&&(i.mode&1)===0&&(Ts=A()+500,Mo&&fr()))}function Dn(t,i){var a=t.callbackNode;yn(t,i);var c=jt(t,t===on?fn:0);if(c===0)a!==null&&no(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&no(a),i===1)t.tag===0?R0(yp.bind(null,t)):ah(yp.bind(null,t)),w0(function(){(wt&6)===0&&fr()}),a=null;else{switch(ni(c)){case 1:a=le;break;case 4:a=ie;break;case 16:a=J;break;case 536870912:a=Ve;break;default:a=J}a=bp(a,Sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Sp(t,i){if(qo=-1,Yo=0,(wt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(As()&&t.callbackNode!==a)return null;var c=jt(t,t===on?fn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=$o(t,c);else{i=c;var f=wt;wt|=2;var h=Ep();(on!==t||fn!==i)&&(zi=null,Ts=A()+500,Hr(t,i));do try{$0();break}catch(F){Mp(t,F)}while(!0);Ac(),Ho.current=h,wt=f,Kt!==null?i=0:(on=null,fn=0,i=tn)}if(i!==0){if(i===2&&(f=xt(t),f!==0&&(c=f,i=cu(t,f))),i===1)throw a=Ra,Hr(t,0),_r(t,c),Dn(t,A()),a;if(i===6)_r(t,c);else{if(f=t.current.alternate,(c&30)===0&&!q0(f)&&(i=$o(t,c),i===2&&(h=xt(t),h!==0&&(c=h,i=cu(t,h))),i===1))throw a=Ra,Hr(t,0),_r(t,c),Dn(t,A()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,Pn,zi);break;case 3:if(_r(t,c),(c&130023424)===c&&(i=au+500-A(),10<i)){if(jt(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){En(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=mc(Gr.bind(null,t,Pn,zi),i);break}Gr(t,Pn,zi);break;case 4:if(_r(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var w=31-et(c);h=1<<w,w=i[w],w>f&&(f=w),c&=~h}if(c=f,c=A()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*j0(c/1960))-c,10<c){t.timeoutHandle=mc(Gr.bind(null,t,Pn,zi),c);break}Gr(t,Pn,zi);break;case 5:Gr(t,Pn,zi);break;default:throw Error(n(329))}}}return Dn(t,A()),t.callbackNode===a?Sp.bind(null,t):null}function cu(t,i){var a=ba;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=$o(t,i),t!==2&&(i=Pn,Pn=a,i!==null&&uu(i)),t}function uu(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function q0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],h=f.getSnapshot;f=f.value;try{if(!ii(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(t,i){for(i&=~su,i&=~Go,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-et(i),c=1<<a;t[a]=-1,i&=~c}}function yp(t){if((wt&6)!==0)throw Error(n(327));As();var i=jt(t,0);if((i&1)===0)return Dn(t,A()),null;var a=$o(t,i);if(t.tag!==0&&a===2){var c=xt(t);c!==0&&(i=c,a=cu(t,c))}if(a===1)throw a=Ra,Hr(t,0),_r(t,i),Dn(t,A()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,Pn,zi),Dn(t,A()),null}function fu(t,i){var a=wt;wt|=1;try{return t(i)}finally{wt=a,wt===0&&(Ts=A()+500,Mo&&fr())}}function Vr(t){gr!==null&&gr.tag===0&&(wt&6)===0&&As();var i=wt;wt|=1;var a=Zn.transition,c=ot;try{if(Zn.transition=null,ot=1,t)return t()}finally{ot=c,Zn.transition=a,wt=i,(wt&6)===0&&fr()}}function du(){Bn=ws.current,zt(ws)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,E0(a)),Kt!==null)for(a=Kt.return;a!==null;){var c=a;switch(yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&So();break;case 3:ys(),zt(Cn),zt(hn),Ic();break;case 5:Lc(c);break;case 4:ys();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:Cc(c.type._context);break;case 22:case 23:du()}a=a.return}if(on=t,Kt=t=xr(t.current,null),fn=Bn=i,tn=0,Ra=null,su=Go=zr=0,Pn=ba=null,Or!==null){for(i=0;i<Or.length;i++)if(a=Or[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,h=a.pending;if(h!==null){var w=h.next;h.next=f,c.next=w}a.pending=c}Or=null}return t}function Mp(t,i){do{var a=Kt;try{if(Ac(),Lo.current=Fo,No){for(var c=Wt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}No=!1}if(Br=0,an=en=Wt=null,Ma=!1,Ea=0,ru.current=null,a===null||a.return===null){tn=1,Ra=i,Kt=null;break}e:{var h=t,w=a.return,F=a,z=i;if(i=fn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,xe=F,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=qh(w);if(Be!==null){Be.flags&=-257,Yh(Be,w,F,h,i),Be.mode&1&&jh(h,ae,i),i=Be,z=ae;var je=i.updateQueue;if(je===null){var $e=new Set;$e.add(z),i.updateQueue=$e}else je.add(z);break e}else{if((i&1)===0){jh(h,ae,i),hu();break e}z=Error(n(426))}}else if(Ht&&F.mode&1){var Yt=qh(w);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Yh(Yt,w,F,h,i),wc(Ms(z,F));break e}}h=z=Ms(z,F),tn!==4&&(tn=2),ba===null?ba=[h]:ba.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var $=Wh(h,z,i);vh(h,$);break e;case 1:F=z;var G=h.type,te=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(mr===null||!mr.has(te)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Xh(h,F,i);vh(h,Te);break e}}h=h.return}while(h!==null)}Tp(a)}catch(Ze){i=Ze,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function Ep(){var t=Ho.current;return Ho.current=Fo,t===null?Fo:t}function hu(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||(zr&268435455)===0&&(Go&268435455)===0||_r(on,fn)}function $o(t,i){var a=wt;wt|=2;var c=Ep();(on!==t||fn!==i)&&(zi=null,Hr(t,i));do try{Y0();break}catch(f){Mp(t,f)}while(!0);if(Ac(),wt=a,Ho.current=c,Kt!==null)throw Error(n(261));return on=null,fn=0,tn}function Y0(){for(;Kt!==null;)wp(Kt)}function $0(){for(;Kt!==null&&!Wl();)wp(Kt)}function wp(t){var i=Rp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Tp(t):Kt=i,ru.current=null}function Tp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=V0(a,i,Bn),a!==null){Kt=a;return}}else{if(a=H0(a,i),a!==null){a.flags&=32767,Kt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=t}while(i!==null);tn===0&&(tn=5)}function Gr(t,i,a){var c=ot,f=Zn.transition;try{Zn.transition=null,ot=1,K0(t,i,a,c)}finally{Zn.transition=f,ot=c}return null}function K0(t,i,a,c){do As();while(gr!==null);if((wt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(tr(t,h),t===on&&(Kt=on=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xo||(Xo=!0,bp(J,function(){return As(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Zn.transition,Zn.transition=null;var w=ot;ot=1;var F=wt;wt|=4,ru.current=null,W0(t,a),mp(a,t),g0(hc),so=!!dc,hc=dc=null,t.current=a,X0(a),Xl(),wt=F,ot=w,Zn.transition=h}else t.current=a;if(Xo&&(Xo=!1,gr=t,jo=f),h=t.pendingLanes,h===0&&(mr=null),Qe(a.stateNode),Dn(t,A()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Wo)throw Wo=!1,t=ou,ou=null,t;return(jo&1)!==0&&t.tag!==0&&As(),h=t.pendingLanes,(h&1)!==0?t===lu?Pa++:(Pa=0,lu=t):Pa=0,fr(),null}function As(){if(gr!==null){var t=ni(jo),i=Zn.transition,a=ot;try{if(Zn.transition=null,ot=16>t?16:t,gr===null)var c=!1;else{if(t=gr,gr=null,jo=0,(wt&6)!==0)throw Error(n(331));var f=wt;for(wt|=4,Ge=t.current;Ge!==null;){var h=Ge,w=h.child;if((Ge.flags&16)!==0){var F=h.deletions;if(F!==null){for(var z=0;z<F.length;z++){var ae=F[z];for(Ge=ae;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:Ca(8,xe,h)}var Se=xe.child;if(Se!==null)Se.return=xe,Ge=Se;else for(;Ge!==null;){xe=Ge;var _e=xe.sibling,Be=xe.return;if(up(xe),xe===ae){Ge=null;break}if(_e!==null){_e.return=Be,Ge=_e;break}Ge=Be}}}var je=h.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var Yt=$e.sibling;$e.sibling=null,$e=Yt}while($e!==null)}}Ge=h}}if((h.subtreeFlags&2064)!==0&&w!==null)w.return=h,Ge=w;else e:for(;Ge!==null;){if(h=Ge,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ca(9,h,h.return)}var $=h.sibling;if($!==null){$.return=h.return,Ge=$;break e}Ge=h.return}}var G=t.current;for(Ge=G;Ge!==null;){w=Ge;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Ge=te;else e:for(w=G;Ge!==null;){if(F=Ge,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Vo(9,F)}}catch(Ze){Xt(F,F.return,Ze)}if(F===w){Ge=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,Ge=Te;break e}Ge=F.return}}if(wt=f,fr(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Re,t)}catch{}c=!0}return c}finally{ot=a,Zn.transition=i}}return!1}function Ap(t,i,a){i=Ms(a,i),i=Wh(t,i,1),t=hr(t,i,1),i=En(),t!==null&&(Un(t,1,i),Dn(t,i))}function Xt(t,i,a){if(t.tag===3)Ap(t,t,a);else for(;i!==null;){if(i.tag===3){Ap(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){t=Ms(a,t),t=Xh(i,t,1),i=hr(i,t,1),t=En(),i!==null&&(Un(i,1,t),Dn(i,t));break}}i=i.return}}function Z0(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=En(),t.pingedLanes|=t.suspendedLanes&a,on===t&&(fn&a)===a&&(tn===4||tn===3&&(fn&130023424)===fn&&500>A()-au?Hr(t,0):su|=a),Dn(t,i)}function Cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=En();t=Oi(t,i),t!==null&&(Un(t,i,a),Dn(t,a))}function Q0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Cp(t,a)}function J0(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Cp(t,a)}var Rp;Rp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)bn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return bn=!1,z0(t,i,a);bn=(t.flags&131072)!==0}else bn=!1,Ht&&(i.flags&1048576)!==0&&oh(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Bo(t,i),t=i.pendingProps;var f=ps(i,hn.current);Ss(i,a),f=Oc(null,i,c,t,f,a);var h=kc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(h=!0,yo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Pc(i),f.updater=Oo,i.stateNode=f,f._reactInternals=i,Wc(i,c,t,a),i=Yc(null,i,c,!0,h,a)):(i.tag=0,Ht&&h&&Sc(i),Mn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Bo(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=tv(c),t=si(c,t),f){case 0:i=qc(null,i,c,t,a);break e;case 1:i=ep(null,i,c,t,a);break e;case 11:i=$h(null,i,c,t,a);break e;case 14:i=Kh(null,i,c,si(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),qc(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),ep(t,i,c,f,a);case 3:e:{if(tp(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,f=h.element,gh(t,i),Po(i,c,null,a);var w=i.memoizedState;if(c=w.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ms(Error(n(423)),i),i=np(t,i,c,a,f);break e}else if(c!==f){f=Ms(Error(n(424)),i),i=np(t,i,c,a,f);break e}else for(kn=lr(i.stateNode.containerInfo.firstChild),On=i,Ht=!0,ri=null,a=ph(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),c===f){i=Bi(t,i,a);break e}Mn(t,i,c,a)}i=i.child}return i;case 5:return xh(i),t===null&&Ec(i),c=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,w=f.children,pc(c,f)?w=null:h!==null&&pc(c,h)&&(i.flags|=32),Jh(t,i),Mn(t,i,w,a),i.child;case 6:return t===null&&Ec(i),null;case 13:return ip(t,i,a);case 4:return Dc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=_s(i,null,c,a):Mn(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),$h(t,i,c,f,a);case 7:return Mn(t,i,i.pendingProps,a),i.child;case 8:return Mn(t,i,i.pendingProps.children,a),i.child;case 12:return Mn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,h=i.memoizedProps,w=f.value,kt(Co,c._currentValue),c._currentValue=w,h!==null)if(ii(h.value,w)){if(h.children===f.children&&!Cn.current){i=Bi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var F=h.dependencies;if(F!==null){w=h.child;for(var z=F.firstContext;z!==null;){if(z.context===c){if(h.tag===1){z=ki(-1,a&-a),z.tag=2;var ae=h.updateQueue;if(ae!==null){ae=ae.shared;var xe=ae.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),ae.pending=z}}h.lanes|=a,z=h.alternate,z!==null&&(z.lanes|=a),Rc(h.return,a,i),F.lanes|=a;break}z=z.next}}else if(h.tag===10)w=h.type===i.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(n(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),Rc(w,a,i),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===i){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}Mn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ss(i,a),f=$n(f),c=c(f),i.flags|=1,Mn(t,i,c,a),i.child;case 14:return c=i.type,f=si(c,i.pendingProps),f=si(c.type,f),Kh(t,i,c,f,a);case 15:return Zh(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Bo(t,i),i.tag=1,Rn(c)?(t=!0,yo(i)):t=!1,Ss(i,a),Hh(i,c,f),Wc(i,c,f,a),Yc(null,i,c,!0,t,a);case 19:return sp(t,i,a);case 22:return Qh(t,i,a)}throw Error(n(156,i.tag))};function bp(t,i){return to(t,i)}function ev(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,a,c){return new ev(t,i,a,c)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tv(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===Q)return 14}return 2}function xr(t,i){var a=t.alternate;return a===null?(a=Qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Ko(t,i,a,c,f,h){var w=2;if(c=t,typeof t=="function")pu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case O:return Wr(a.children,f,h,i);case T:w=8,f|=8;break;case b:return t=Qn(12,a,i,f|2),t.elementType=b,t.lanes=h,t;case K:return t=Qn(13,a,i,f),t.elementType=K,t.lanes=h,t;case ce:return t=Qn(19,a,i,f),t.elementType=ce,t.lanes=h,t;case W:return Zo(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ue:w=10;break e;case k:w=9;break e;case Z:w=11;break e;case Q:w=14;break e;case ee:w=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(w,a,i,f),i.elementType=t,i.type=c,i.lanes=h,i}function Wr(t,i,a,c){return t=Qn(7,t,c,i),t.lanes=a,t}function Zo(t,i,a,c){return t=Qn(22,t,c,i),t.elementType=W,t.lanes=a,t.stateNode={isHidden:!1},t}function mu(t,i,a){return t=Qn(6,t,null,i),t.lanes=a,t}function gu(t,i,a){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function nv(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vu(t,i,a,c,f,h,w,F,z){return t=new nv(t,i,a,F,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(h),t}function iv(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Pp(t){if(!t)return ur;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Rn(a))return rh(t,a,i)}return i}function Dp(t,i,a,c,f,h,w,F,z){return t=vu(a,c,!0,t,f,h,w,F,z),t.context=Pp(null),a=t.current,c=En(),f=vr(a),h=ki(c,f),h.callback=i??null,hr(a,h,f),t.current.lanes=f,Un(t,f,c),Dn(t,c),t}function Qo(t,i,a,c){var f=i.current,h=En(),w=vr(f);return a=Pp(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(h,w),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=hr(f,i,w),t!==null&&(li(t,f,w,h),bo(t,f,w)),w}function Jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function _u(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function rv(){return null}var Np=typeof reportError=="function"?reportError:function(t){console.error(t)};function xu(t){this._internalRoot=t}el.prototype.render=xu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qo(t,i,null,null)},el.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){Qo(null,t,null,null)}),i[Ni]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var i=ea();t={blockedOn:null,target:t,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,t),a===0&&xd(t)}};function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function sv(t,i,a,c,f){if(f){if(typeof c=="function"){var h=c;c=function(){var ae=Jo(w);h.call(ae)}}var w=Dp(i,c,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=w,t[Ni]=w.current,pa(t.nodeType===8?t.parentNode:t),Vr(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var F=c;c=function(){var ae=Jo(z);F.call(ae)}}var z=vu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=z,t[Ni]=z.current,pa(t.nodeType===8?t.parentNode:t),Vr(function(){Qo(i,z,a,c)}),z}function nl(t,i,a,c,f){var h=a._reactRootContainer;if(h){var w=h;if(typeof f=="function"){var F=f;f=function(){var z=Jo(w);F.call(z)}}Qo(i,w,t,f)}else w=sv(a,i,t,f,c);return Jo(w)}qt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mt(i.pendingLanes);a!==0&&(bt(i,a|1),Dn(i,A()),(wt&6)===0&&(Ts=A()+500,fr()))}break;case 13:Vr(function(){var c=Oi(t,1);if(c!==null){var f=En();li(c,t,1,f)}}),_u(t,1)}},jn=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var a=En();li(i,t,134217728,a)}_u(t,134217728)}},Li=function(t){if(t.tag===13){var i=vr(t),a=Oi(t,i);if(a!==null){var c=En();li(a,t,i,c)}_u(t,i)}},ea=function(){return ot},vd=function(t,i){var a=ot;try{return ot=t,i()}finally{ot=a}},Ce=function(t,i,a){switch(i){case"input":if(It(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=xo(c);if(!f)throw Error(n(90));Vt(c),It(c,f)}}}break;case"textarea":M(t,a);break;case"select":i=a.value,i!=null&&pt(t,!!a.multiple,i,!1)}},at=fu,Lt=Vr;var av={usingClientEntryPoint:!1,Events:[va,ds,xo,de,Xe,fu]},Da={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ov={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ja(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Re=il.inject(ov),Oe=il}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(n(200));return iv(t,i,null,a)},Ln.createRoot=function(t,i){if(!Su(t))throw Error(n(299));var a=!1,c="",f=Np;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=vu(t,1,!1,null,null,a,!1,c,f),t[Ni]=i.current,pa(t.nodeType===8?t.parentNode:t),new xu(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ja(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Vr(t)},Ln.hydrate=function(t,i,a){if(!tl(i))throw Error(n(200));return nl(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!Su(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,h="",w=Np;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Dp(i,null,t,1,a??null,f,!1,h,w),t[Ni]=i.current,pa(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new el(i)},Ln.render=function(t,i,a){if(!tl(i))throw Error(n(200));return nl(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!tl(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Ln.unstable_batchedUpdates=fu,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!tl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return nl(t,i,a,!1,c)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Hp;function mv(){if(Hp)return Eu.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eu.exports=pv(),Eu.exports}var Gp;function gv(){if(Gp)return rl;Gp=1;var s=mv();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var vv=gv(),Fe=id();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xv=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Wp=s=>{const e=xv(s);return e.charAt(0).toUpperCase()+e.slice(1)},qm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},m)=>Fe.createElement("svg",{ref:m,...Sv,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:qm("lucide",o),...d},[...u.map(([p,v])=>Fe.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=(s,e)=>{const n=Fe.forwardRef(({className:r,...o},l)=>Fe.createElement(yv,{ref:l,iconNode:e,className:qm(`lucide-${_v(Wp(s))}`,`lucide-${s}`,r),...o}));return n.displayName=Wp(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Ev=sn("brain",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Tv=sn("circle-alert",wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Cv=sn("circle-check",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],bv=sn("download",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Xp=sn("eye",Pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Lv=sn("image",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ym=sn("layers",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Uv=sn("loader-circle",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Ov=sn("maximize-2",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Bv=sn("minimize-2",kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],$m=sn("mouse-pointer-click",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Km=sn("move",Vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Gv=sn("rotate-ccw",Hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],Xv=sn("sliders-vertical",Wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],cf=sn("smartphone",jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Yv=sn("sparkles",qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Kv=sn("upload",$v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qv=sn("x",Zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],e_=sn("zap",Jv);function t_({onImageSelect:s,disabled:e=!1}){const[n,r]=Fe.useState(!1),[o,l]=Fe.useState(null),u=Fe.useRef(null),d=Fe.useCallback((C,x)=>new Promise(S=>{const R=new window.Image;R.onload=()=>{const{naturalWidth:N,naturalHeight:P}=R;if(N<=x&&P<=x){S(C);return}const I=x/Math.max(N,P),U=Math.round(N*I),O=Math.round(P*I),T=document.createElement("canvas");T.width=U,T.height=O;const b=T.getContext("2d");if(!b){S(C);return}b.drawImage(R,0,0,U,O),S(T.toDataURL("image/jpeg",.92))},R.onerror=()=>S(C),R.src=C}),[]),m=Fe.useCallback(async C=>{if(!C.type.startsWith("image/"))return;const x=new FileReader;x.onload=async S=>{var U;const R=(U=S.target)==null?void 0:U.result,P=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)?1024:2048,I=await d(R,P);l(I),s(C,I)},x.readAsDataURL(C)},[s,d]),p=C=>{C.preventDefault(),C.stopPropagation(),e||r(!0)},v=C=>{C.preventDefault(),C.stopPropagation(),r(!1)},_=C=>{C.preventDefault(),C.stopPropagation()},g=C=>{if(C.preventDefault(),C.stopPropagation(),r(!1),e)return;const x=C.dataTransfer.files[0];x&&m(x)},y=()=>{var C;e||(C=u.current)==null||C.click()},E=C=>{C.stopPropagation(),l(null)};return re.jsxs("div",{onClick:y,onDragEnter:p,onDragLeave:v,onDragOver:_,onDrop:g,className:`
        relative w-full max-w-2xl mx-auto rounded-2xl border-2 border-dashed
        transition-all duration-300 cursor-pointer overflow-hidden
        ${e?"opacity-50 cursor-not-allowed border-white/10":n?"border-violet-400 bg-violet-500/10 scale-[1.02]":"border-white/20 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.06]"}
      `,children:[re.jsx("input",{ref:u,type:"file",accept:"image/*",className:"hidden",onChange:C=>{var S;const x=(S=C.target.files)==null?void 0:S[0];x&&m(x)},disabled:e}),o?re.jsxs("div",{className:"relative aspect-video",children:[re.jsx("img",{src:o,alt:"Preview",className:"w-full h-full object-contain bg-black/50"}),!e&&re.jsx("button",{onClick:E,className:"absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white transition-colors",children:re.jsx(Qv,{className:"w-4 h-4"})})]}):re.jsxs("div",{className:"flex flex-col items-center justify-center py-16 px-8",children:[re.jsx("div",{className:`
            w-16 h-16 rounded-2xl flex items-center justify-center mb-5
            transition-all duration-300
            ${n?"bg-violet-500/20 scale-110":"bg-white/[0.06]"}
          `,children:n?re.jsx(Lv,{className:"w-7 h-7 text-violet-400"}):re.jsx(Kv,{className:"w-7 h-7 text-white/40"})}),re.jsx("p",{className:"text-white/80 mb-2",children:n?"Drop your image here":"Upload an image"}),re.jsx("p",{className:"text-white/40 text-sm text-center",children:"Drag & drop or click to browse. Supports JPG, PNG, WebP."})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="183",n_=0,jp=1,i_=2,bl=1,r_=2,za=3,br=0,In=1,ji=2,qi=0,Hs=1,qp=2,Yp=3,$p=4,s_=5,Qr=100,a_=101,o_=102,l_=103,c_=104,u_=200,f_=201,d_=202,h_=203,uf=204,ff=205,p_=206,m_=207,g_=208,v_=209,__=210,x_=211,S_=212,y_=213,M_=214,df=0,hf=1,pf=2,Ws=3,mf=4,gf=5,vf=6,_f=7,Zm=0,E_=1,w_=2,Ai=0,Qm=1,Jm=2,eg=3,tg=4,ng=5,ig=6,rg=7,sg=300,ns=301,Xs=302,Au=303,Cu=304,Bl=306,xf=1e3,Hn=1001,Sf=1002,dn=1003,T_=1004,sl=1005,Qt=1006,Ru=1007,es=1008,ti=1009,ag=1010,og=1011,Ha=1012,sd=1013,bi=1014,wi=1015,Ki=1016,ad=1017,od=1018,Ga=1020,lg=35902,cg=35899,ug=1021,fg=1022,pi=1023,Zi=1026,ts=1027,dg=1028,ld=1029,js=1030,cd=1031,ud=1033,Pl=33776,Dl=33777,Ll=33778,Nl=33779,yf=35840,Mf=35841,Ef=35842,wf=35843,Tf=36196,Af=37492,Cf=37496,Rf=37488,bf=37489,Pf=37490,Df=37491,Lf=37808,Nf=37809,If=37810,Uf=37811,Ff=37812,Of=37813,kf=37814,Bf=37815,zf=37816,Vf=37817,Hf=37818,Gf=37819,Wf=37820,Xf=37821,jf=36492,qf=36494,Yf=36495,$f=36283,Kf=36284,Zf=36285,Qf=36286,A_=3200,C_=0,R_=1,Cr="",ei="srgb",qs="srgb-linear",Fl="linear",Nt="srgb",Cs=7680,Kp=519,b_=512,P_=513,D_=514,fd=515,L_=516,N_=517,dd=518,I_=519,Zp=35044,Qp="300 es",Ti=2e3,Ol=2001;function U_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function F_(){const s=Wa("canvas");return s.style.display="block",s}const Jp={};function em(...s){const e="THREE."+s.shift();console.log(e,...s)}function hg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=hg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Rt(...s){s=hg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function kl(...s){const e=s.join(" ");e in Jp||(Jp[e]=!0,ft(...s))}function O_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const k_={[df]:hf,[pf]:vf,[mf]:_f,[Ws]:gf,[hf]:df,[vf]:pf,[_f]:mf,[gf]:Ws};class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=Math.PI/180,Jf=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function yt(s,e,n){return Math.max(e,Math.min(n,s))}function B_(s,e){return(s%e+e)%e}function Pu(s,e,n){return(1-n)*s+n*e}function Na(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,n=0){Dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let m=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3],g=l[u+0],y=l[u+1],E=l[u+2],C=l[u+3];if(_!==C||m!==g||p!==y||v!==E){let x=m*g+p*y+v*E+_*C;x<0&&(g=-g,y=-y,E=-E,C=-C,x=-x);let S=1-d;if(x<.9995){const R=Math.acos(x),N=Math.sin(R);S=Math.sin(S*R)/N,d=Math.sin(d*R)/N,m=m*S+g*d,p=p*S+y*d,v=v*S+E*d,_=_*S+C*d}else{m=m*S+g*d,p=p*S+y*d,v=v*S+E*d,_=_*S+C*d;const R=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=R,p*=R,v*=R,_*=R}}e[n]=m,e[n+1]=p,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],m=r[o+1],p=r[o+2],v=r[o+3],_=l[u],g=l[u+1],y=l[u+2],E=l[u+3];return e[n]=d*E+v*_+m*y-p*g,e[n+1]=m*E+v*g+p*_-d*y,e[n+2]=p*E+v*y+d*g-m*_,e[n+3]=v*E-d*_-m*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(o/2),_=d(l/2),g=m(r/2),y=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=g*v*_+p*y*E,this._y=p*y*_-g*v*E,this._z=p*v*E+g*y*_,this._w=p*v*_-g*y*E;break;case"YXZ":this._x=g*v*_+p*y*E,this._y=p*y*_-g*v*E,this._z=p*v*E-g*y*_,this._w=p*v*_+g*y*E;break;case"ZXY":this._x=g*v*_-p*y*E,this._y=p*y*_+g*v*E,this._z=p*v*E+g*y*_,this._w=p*v*_-g*y*E;break;case"ZYX":this._x=g*v*_-p*y*E,this._y=p*y*_+g*v*E,this._z=p*v*E-g*y*_,this._w=p*v*_+g*y*E;break;case"YZX":this._x=g*v*_+p*y*E,this._y=p*y*_+g*v*E,this._z=p*v*E-g*y*_,this._w=p*v*_-g*y*E;break;case"XZY":this._x=g*v*_-p*y*E,this._y=p*y*_-g*v*E,this._z=p*v*E+g*y*_,this._w=p*v*_+g*y*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],m=n[9],p=n[2],v=n[6],_=n[10],g=r+d+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-m)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(v-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,m=n._y,p=n._z,v=n._w;return this._x=r*v+u*d+o*p-l*m,this._y=o*v+u*m+l*d-r*p,this._z=l*v+u*p+r*m-o*d,this._w=u*v-r*d-o*m-l*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,n=Math.sin(n*p)/v,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,n=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*r),v=2*(d*n-l*o),_=2*(l*r-u*n);return this.x=n+m*p+u*_-d*v,this.y=r+m*v+d*p-l*_,this.z=o+m*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-l*d,this.y=l*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new oe,tm=new Ks;class gt{constructor(e,n,r,o,l,u,d,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,m,p)}set(e,n,r,o,l,u,d,m,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=l,v[5]=m,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],m=r[6],p=r[1],v=r[4],_=r[7],g=r[2],y=r[5],E=r[8],C=o[0],x=o[3],S=o[6],R=o[1],N=o[4],P=o[7],I=o[2],U=o[5],O=o[8];return l[0]=u*C+d*R+m*I,l[3]=u*x+d*N+m*U,l[6]=u*S+d*P+m*O,l[1]=p*C+v*R+_*I,l[4]=p*x+v*N+_*U,l[7]=p*S+v*P+_*O,l[2]=g*C+y*R+E*I,l[5]=g*x+y*N+E*U,l[8]=g*S+y*P+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return n*u*v-n*d*p-r*l*v+r*d*m+o*l*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=v*u-d*p,g=d*m-v*l,y=p*l-u*m,E=n*_+r*g+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(o*p-v*r)*C,e[2]=(d*r-o*u)*C,e[3]=g*C,e[4]=(v*n-o*m)*C,e[5]=(o*l-d*n)*C,e[6]=y*C,e[7]=(r*m-p*n)*C,e[8]=(u*n-r*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new gt,nm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z_(){const s={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(o.r=Yi(o.r),o.g=Yi(o.g),o.b=Yi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(o.r=Gs(o.r),o.g=Gs(o.g),o.b=Gs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?Fl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[qs]:{primaries:e,whitePoint:r,transfer:Fl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Tt=z_();function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class V_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=Wa("canvas")),Rs.width=e.width,Rs.height=e.height;const o=Rs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wa("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Yi(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Yi(n[r]/255)*255):n[r]=Yi(n[r]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H_=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Nu(o[u].image)):l.push(Nu(o[u]))}else l=Nu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?V_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let G_=0;const Iu=new oe;class xn extends $s{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,r=Hn,o=Hn,l=Qt,u=es,d=pi,m=ti,p=xn.DEFAULT_ANISOTROPY,v=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ja(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=sg;xn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const m=e.elements,p=m[0],v=m[4],_=m[8],g=m[1],y=m[5],E=m[9],C=m[2],x=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(E-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(E+x)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,P=(y+1)/2,I=(S+1)/2,U=(v+g)/4,O=(_+C)/4,T=(E+x)/4;return N>P&&N>I?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=U/r,l=O/r):P>I?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=U/o,l=T/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=O/l,o=T/l),this.set(r,o,l,n),this}let R=Math.sqrt((x-E)*(x-E)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(_-C)/R,this.z=(g-v)/R,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends $s{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new xn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new hd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends W_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class pg extends xn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends xn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(e,n,r,o,l,u,d,m,p,v,_,g,y,E,C,x){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,m,p,v,_,g,y,E,C,x)}set(e,n,r,o,l,u,d,m,p,v,_,g,y,E,C,x){const S=this.elements;return S[0]=e,S[4]=n,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=_,S[14]=g,S[3]=y,S[7]=E,S[11]=C,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),u=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,y=u*_,E=d*v,C=d*_;n[0]=m*v,n[4]=-m*_,n[8]=p,n[1]=y+E*p,n[5]=g-C*p,n[9]=-d*m,n[2]=C-g*p,n[6]=E+y*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*v,y=m*_,E=p*v,C=p*_;n[0]=g+C*d,n[4]=E*d-y,n[8]=u*p,n[1]=u*_,n[5]=u*v,n[9]=-d,n[2]=y*d-E,n[6]=C+g*d,n[10]=u*m}else if(e.order==="ZXY"){const g=m*v,y=m*_,E=p*v,C=p*_;n[0]=g-C*d,n[4]=-u*_,n[8]=E+y*d,n[1]=y+E*d,n[5]=u*v,n[9]=C-g*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const g=u*v,y=u*_,E=d*v,C=d*_;n[0]=m*v,n[4]=E*p-y,n[8]=g*p+C,n[1]=m*_,n[5]=C*p+g,n[9]=y*p-E,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,y=u*p,E=d*m,C=d*p;n[0]=m*v,n[4]=C-g*_,n[8]=E*_+y,n[1]=_,n[5]=u*v,n[9]=-d*v,n[2]=-p*v,n[6]=y*_+E,n[10]=g-C*_}else if(e.order==="XZY"){const g=u*m,y=u*p,E=d*m,C=d*p;n[0]=m*v,n[4]=-_,n[8]=p*v,n[1]=g*_+C,n[5]=u*v,n[9]=y*_-E,n[2]=E*_-y,n[6]=d*v,n[10]=C*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,q_)}lookAt(e,n,r){const o=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),yr.crossVectors(r,zn),yr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),yr.crossVectors(r,zn)),yr.normalize(),al.crossVectors(zn,yr),o[0]=yr.x,o[4]=al.x,o[8]=zn.x,o[1]=yr.y,o[5]=al.y,o[9]=zn.y,o[2]=yr.z,o[6]=al.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],m=r[8],p=r[12],v=r[1],_=r[5],g=r[9],y=r[13],E=r[2],C=r[6],x=r[10],S=r[14],R=r[3],N=r[7],P=r[11],I=r[15],U=o[0],O=o[4],T=o[8],b=o[12],ue=o[1],k=o[5],Z=o[9],K=o[13],ce=o[2],Q=o[6],ee=o[10],W=o[14],Y=o[3],se=o[7],q=o[11],L=o[15];return l[0]=u*U+d*ue+m*ce+p*Y,l[4]=u*O+d*k+m*Q+p*se,l[8]=u*T+d*Z+m*ee+p*q,l[12]=u*b+d*K+m*W+p*L,l[1]=v*U+_*ue+g*ce+y*Y,l[5]=v*O+_*k+g*Q+y*se,l[9]=v*T+_*Z+g*ee+y*q,l[13]=v*b+_*K+g*W+y*L,l[2]=E*U+C*ue+x*ce+S*Y,l[6]=E*O+C*k+x*Q+S*se,l[10]=E*T+C*Z+x*ee+S*q,l[14]=E*b+C*K+x*W+S*L,l[3]=R*U+N*ue+P*ce+I*Y,l[7]=R*O+N*k+P*Q+I*se,l[11]=R*T+N*Z+P*ee+I*q,l[15]=R*b+N*K+P*W+I*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],m=e[9],p=e[13],v=e[2],_=e[6],g=e[10],y=e[14],E=e[3],C=e[7],x=e[11],S=e[15],R=m*y-p*g,N=d*y-p*_,P=d*g-m*_,I=u*y-p*v,U=u*g-m*v,O=u*_-d*v;return n*(C*R-x*N+S*P)-r*(E*R-x*I+S*U)+o*(E*N-C*I+S*O)-l*(E*P-C*U+x*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=e[9],g=e[10],y=e[11],E=e[12],C=e[13],x=e[14],S=e[15],R=n*d-r*u,N=n*m-o*u,P=n*p-l*u,I=r*m-o*d,U=r*p-l*d,O=o*p-l*m,T=v*C-_*E,b=v*x-g*E,ue=v*S-y*E,k=_*x-g*C,Z=_*S-y*C,K=g*S-y*x,ce=R*K-N*Z+P*k+I*ue-U*b+O*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ce;return e[0]=(d*K-m*Z+p*k)*Q,e[1]=(o*Z-r*K-l*k)*Q,e[2]=(C*O-x*U+S*I)*Q,e[3]=(g*U-_*O-y*I)*Q,e[4]=(m*ue-u*K-p*b)*Q,e[5]=(n*K-o*ue+l*b)*Q,e[6]=(x*P-E*O-S*N)*Q,e[7]=(v*O-g*P+y*N)*Q,e[8]=(u*Z-d*ue+p*T)*Q,e[9]=(r*ue-n*Z-l*T)*Q,e[10]=(E*U-C*P+S*R)*Q,e[11]=(_*P-v*U-y*R)*Q,e[12]=(d*b-u*k-m*T)*Q,e[13]=(n*k-r*b+o*T)*Q,e[14]=(C*N-E*I-x*R)*Q,e[15]=(v*I-_*N+g*R)*Q,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,m=e.z,p=l*u,v=l*d;return this.set(p*u+r,p*d-o*m,p*m+o*d,0,p*d+o*m,v*d+r,v*m-o*u,0,p*m-o*d,v*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,m=n._w,p=l+l,v=u+u,_=d+d,g=l*p,y=l*v,E=l*_,C=u*v,x=u*_,S=d*_,R=m*p,N=m*v,P=m*_,I=r.x,U=r.y,O=r.z;return o[0]=(1-(C+S))*I,o[1]=(y+P)*I,o[2]=(E-N)*I,o[3]=0,o[4]=(y-P)*U,o[5]=(1-(g+S))*U,o[6]=(x+R)*U,o[7]=0,o[8]=(E+N)*O,o[9]=(x-R)*O,o[10]=(1-(g+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),n.identity(),this;let u=bs.set(o[0],o[1],o[2]).length();const d=bs.set(o[4],o[5],o[6]).length(),m=bs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ci.copy(this);const p=1/u,v=1/d,_=1/m;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=v,ci.elements[5]*=v,ci.elements[6]*=v,ci.elements[8]*=_,ci.elements[9]*=_,ci.elements[10]*=_,n.setFromRotationMatrix(ci),r.x=u,r.y=d,r.z=m,this}makePerspective(e,n,r,o,l,u,d=Ti,m=!1){const p=this.elements,v=2*l/(n-e),_=2*l/(r-o),g=(n+e)/(n-e),y=(r+o)/(r-o);let E,C;if(m)E=l/(u-l),C=u*l/(u-l);else if(d===Ti)E=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(d===Ol)E=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=Ti,m=!1){const p=this.elements,v=2/(n-e),_=2/(r-o),g=-(n+e)/(n-e),y=-(r+o)/(r-o);let E,C;if(m)E=1/(u-l),C=u/(u-l);else if(d===Ti)E=-2/(u-l),C=-(u+l)/(u-l);else if(d===Ol)E=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new oe,ci=new Jt,j_=new oe(0,0,0),q_=new oe(1,1,1),yr=new oe,al=new oe,zn=new oe,rm=new Jt,sm=new Ks;class Qi{constructor(e=0,n=0,r=0,o=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],m=o[1],p=o[5],v=o[9],_=o[2],g=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y_=0;const am=new oe,Ps=new Ks,Vi=new Jt,ol=new oe,Ia=new oe,$_=new oe,K_=new Ks,om=new oe(1,0,0),lm=new oe(0,1,0),cm=new oe(0,0,1),um={type:"added"},Z_={type:"removed"},Ds={type:"childadded",child:null},Uu={type:"childremoved",child:null};class Gn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new oe,n=new Qi,r=new Ks,o=new oe(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new gt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ia,ol,this.up):Vi.lookAt(ol,Ia,this.up),this.quaternion.setFromRotationMatrix(Vi),o&&(Vi.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z_),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];l(e.shapes,_)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(l(e.materials,this.material[m]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(l(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new oe(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ll extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q_={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const x=n.getJointPose(C,r),S=this._getHandJoint(p,C);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ll;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Ou(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ut{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=B_(e,1),n=yt(n,0,1),r=yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Ou(u,l,e+1/3),this.g=Ou(u,l,e),this.b=Ou(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=ei){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=gg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(_n.copy(this),e),Math.round(yt(_n.r*255,0,255))*65536+Math.round(yt(_n.g*255,0,255))*256+Math.round(yt(_n.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(_n.copy(this),n);const r=_n.r,o=_n.g,l=_n.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let m,p;const v=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=v<=.5?_/(u+d):_/(2-u-d),u){case r:m=(o-l)/_+(o<l?6:0);break;case o:m=(l-r)/_+2;break;case l:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ei){Tt.workingToColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,o=_n.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(cl);const r=Pu(Mr.h,cl.h,n),o=Pu(Mr.s,cl.s,n),l=Pu(Mr.l,cl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Ut;Ut.NAMES=gg;class J_ extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ui=new oe,Hi=new oe,ku=new oe,Gi=new oe,Ls=new oe,Ns=new oe,fm=new oe,Bu=new oe,zu=new oe,Vu=new oe,Hu=new $t,Gu=new $t,Wu=new $t;class hi{constructor(e=new oe,n=new oe,r=new oe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ui.subVectors(e,n),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){ui.subVectors(o,n),Hi.subVectors(r,n),ku.subVectors(e,n);const u=ui.dot(ui),d=ui.dot(Hi),m=ui.dot(ku),p=Hi.dot(Hi),v=Hi.dot(ku),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const g=1/_,y=(p*m-d*v)*g,E=(u*v-d*m)*g;return l.set(1-y-E,E,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,r,o,l,u,d,m){return this.getBarycoord(e,n,r,o,Gi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Gi.x),m.addScaledVector(u,Gi.y),m.addScaledVector(d,Gi.z),m)}static getInterpolatedAttribute(e,n,r,o,l,u){return Hu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Hu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,r),Wu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Hu,l.x),u.addScaledVector(Gu,l.y),u.addScaledVector(Wu,l.z),u}static isFrontFacing(e,n,r,o){return ui.subVectors(r,n),Hi.subVectors(e,n),ui.cross(Hi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ui.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;Ls.subVectors(o,r),Ns.subVectors(l,r),Bu.subVectors(e,r);const m=Ls.dot(Bu),p=Ns.dot(Bu);if(m<=0&&p<=0)return n.copy(r);zu.subVectors(e,o);const v=Ls.dot(zu),_=Ns.dot(zu);if(v>=0&&_<=v)return n.copy(o);const g=m*_-v*p;if(g<=0&&m>=0&&v<=0)return u=m/(m-v),n.copy(r).addScaledVector(Ls,u);Vu.subVectors(e,l);const y=Ls.dot(Vu),E=Ns.dot(Vu);if(E>=0&&y<=E)return n.copy(l);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(r).addScaledVector(Ns,d);const x=v*E-y*_;if(x<=0&&_-v>=0&&y-E>=0)return fm.subVectors(l,o),d=(_-v)/(_-v+(y-E)),n.copy(o).addScaledVector(fm,d);const S=1/(x+C+g);return u=C*S,d=g*S,n.copy(r).addScaledVector(Ls,u).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(l,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),fl.subVectors(this.max,Ua),Is.subVectors(e.a,Ua),Us.subVectors(e.b,Ua),Fs.subVectors(e.c,Ua),Er.subVectors(Us,Is),wr.subVectors(Fs,Us),Xr.subVectors(Is,Fs);let n=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-Xr.z,Xr.y,Er.z,0,-Er.x,wr.z,0,-wr.x,Xr.z,0,-Xr.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-Xr.y,Xr.x,0];return!Xu(n,Is,Us,Fs,fl)||(n=[1,0,0,0,1,0,0,0,1],!Xu(n,Is,Us,Fs,fl))?!1:(dl.crossVectors(Er,wr),n=[dl.x,dl.y,dl.z],Xu(n,Is,Us,Fs,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],fi=new oe,ul=new qa,Is=new oe,Us=new oe,Fs=new oe,Er=new oe,wr=new oe,Xr=new oe,Ua=new oe,fl=new oe,dl=new oe,jr=new oe;function Xu(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){jr.fromArray(s,l);const d=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),m=e.dot(jr),p=n.dot(jr),v=r.dot(jr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Zt=new oe,hl=new Dt;let ex=0;class Ri{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Zp,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Na(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Na(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Na(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Na(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),o=Nn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),o=Nn(o,this.array),l=Nn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class vg extends Ri{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class _g extends Ri{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $i extends Ri{constructor(e,n,r){super(new Float32Array(e),n,r)}}const tx=new qa,Fa=new oe,ju=new oe;class pd{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):tx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const n=Fa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(ju)),this.expandByPoint(Fa.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nx=0;const Jn=new Jt,qu=new Gn,Os=new oe,Vn=new qa,Oa=new qa,cn=new oe;class Ji extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?_g:vg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $i(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Oa.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(Vn.min,Oa.min),Vn.expandByPoint(cn),cn.addVectors(Vn.max,Oa.max),Vn.expandByPoint(cn)):(Vn.expandByPoint(Oa.min),Vn.expandByPoint(Oa.max))}Vn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(cn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)cn.fromBufferAttribute(d,p),m&&(Os.fromBufferAttribute(e,p),cn.add(Os)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new oe,m[T]=new oe;const p=new oe,v=new oe,_=new oe,g=new Dt,y=new Dt,E=new Dt,C=new oe,x=new oe;function S(T,b,ue){p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,b),_.fromBufferAttribute(r,ue),g.fromBufferAttribute(l,T),y.fromBufferAttribute(l,b),E.fromBufferAttribute(l,ue),v.sub(p),_.sub(p),y.sub(g),E.sub(g);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(k),x.copy(_).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(k),d[T].add(C),d[b].add(C),d[ue].add(C),m[T].add(x),m[b].add(x),m[ue].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,b=R.length;T<b;++T){const ue=R[T],k=ue.start,Z=ue.count;for(let K=k,ce=k+Z;K<ce;K+=3)S(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const N=new oe,P=new oe,I=new oe,U=new oe;function O(T){I.fromBufferAttribute(o,T),U.copy(I);const b=d[T];N.copy(b),N.sub(I.multiplyScalar(I.dot(b))).normalize(),P.crossVectors(U,b);const k=P.dot(m[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,k)}for(let T=0,b=R.length;T<b;++T){const ue=R[T],k=ue.start,Z=ue.count;for(let K=k,ce=k+Z;K<ce;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new oe,l=new oe,u=new oe,d=new oe,m=new oe,p=new oe,v=new oe,_=new oe;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),C=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(n,E),l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,y=n.count;g<y;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,_=d.normalized,g=new p.constructor(m.length*v);let y=0,E=0;for(let C=0,x=m.length;C<x;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*v;for(let S=0;S<v;S++)g[E++]=p[y++]}return new Ri(g,v,_)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);n.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const m=[],p=l[d];for(let v=0,_=p.length;v<_;v++){const g=p[v],y=e(g,r);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,g=p.length;_<g;_++){const y=p[_];v.push(y.toJSON(e.data))}v.length>0&&(o[m]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(n))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,y=_.length;g<y;g++)v.push(_[g].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ix=0;class zl extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Hs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=ff,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uf&&(r.blendSrc=this.blendSrc),this.blendDst!==ff&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xi=new oe,Yu=new oe,pl=new oe,Tr=new oe,$u=new oe,ml=new oe,Ku=new oe;class rx{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Yu.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(Yu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(pl),d=Tr.dot(this.direction),m=-Tr.dot(pl),p=Tr.lengthSq(),v=Math.abs(1-u*u);let _,g,y,E;if(v>0)if(_=u*m-d,g=u*d-m,E=l*v,_>=0)if(g>=-E)if(g<=E){const C=1/v;_*=C,g*=C,y=_*(_+u*g+2*d)+g*(u*_+g+2*m)+p}else g=l,_=Math.max(0,-(u*g+d)),y=-_*_+g*(g+2*m)+p;else g=-l,_=Math.max(0,-(u*g+d)),y=-_*_+g*(g+2*m)+p;else g<=-E?(_=Math.max(0,-(-u*l+d)),g=_>0?-l:Math.min(Math.max(-l,-m),l),y=-_*_+g*(g+2*m)+p):g<=E?(_=0,g=Math.min(Math.max(-l,-m),l),y=g*(g+2*m)+p):(_=Math.max(0,-(u*l+d)),g=_>0?l:Math.min(Math.max(-l,-m),l),y=-_*_+g*(g+2*m)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+d)),y=-_*_+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Yu).addScaledVector(pl,g),y}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),o=Xi.dot(Xi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,r,o,l){$u.subVectors(n,e),ml.subVectors(r,e),Ku.crossVectors($u,ml);let u=this.direction.dot(Ku),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const m=d*this.direction.dot(ml.crossVectors(Tr,ml));if(m<0)return null;const p=d*this.direction.dot($u.cross(Tr));if(p<0||m+p>u)return null;const v=-d*Tr.dot(Ku);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xg extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dm=new Jt,qr=new rx,gl=new pd,hm=new oe,vl=new oe,_l=new oe,xl=new oe,Zu=new oe,Sl=new oe,pm=new oe,yl=new oe;class Pi extends Gn{constructor(e=new Ji,n=new xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Sl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=d[m],_=l[m];v!==0&&(Zu.fromBufferAttribute(_,e),u?Sl.addScaledVector(Zu,v):Sl.addScaledVector(Zu.sub(n),v))}n.add(Sl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(l),qr.copy(e.ray).recast(e.near),!(gl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(gl,hm)===null||qr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(dm.copy(l).invert(),qr.copy(e.ray).applyMatrix4(dm),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const x=g[E],S=u[x.materialIndex],R=Math.max(x.start,y.start),N=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let P=R,I=N;P<I;P+=3){const U=d.getX(P),O=d.getX(P+1),T=d.getX(P+2);o=Ml(this,S,e,r,p,v,_,U,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const R=d.getX(x),N=d.getX(x+1),P=d.getX(x+2);o=Ml(this,u,e,r,p,v,_,R,N,P),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const x=g[E],S=u[x.materialIndex],R=Math.max(x.start,y.start),N=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let P=R,I=N;P<I;P+=3){const U=P,O=P+1,T=P+2;o=Ml(this,S,e,r,p,v,_,U,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const R=x,N=x+1,P=x+2;o=Ml(this,u,e,r,p,v,_,R,N,P),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function sx(s,e,n,r,o,l,u,d){let m;if(e.side===In?m=r.intersectTriangle(u,l,o,!0,d):m=r.intersectTriangle(o,l,u,e.side===br,d),m===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(yl);return p<n.near||p>n.far?null:{distance:p,point:yl.clone(),object:s}}function Ml(s,e,n,r,o,l,u,d,m,p){s.getVertexPosition(d,vl),s.getVertexPosition(m,_l),s.getVertexPosition(p,xl);const v=sx(s,e,n,r,vl,_l,xl,pm);if(v){const _=new oe;hi.getBarycoord(pm,vl,_l,xl,_),o&&(v.uv=hi.getInterpolatedAttribute(o,d,m,p,_,new Dt)),l&&(v.uv1=hi.getInterpolatedAttribute(l,d,m,p,_,new Dt)),u&&(v.normal=hi.getInterpolatedAttribute(u,d,m,p,_,new oe),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new oe,materialIndex:0};hi.getNormal(vl,_l,xl,g.normal),v.face=g,v.barycoord=_}return v}class ax extends xn{constructor(e=null,n=1,r=1,o,l,u,d,m,p=dn,v=dn,_,g){super(null,u,d,m,p,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=new oe,ox=new oe,lx=new gt;class Zr{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Qu.subVectors(r,n).cross(ox.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Qu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||lx.getNormalMatrix(e),o=this.coplanarPoint(Qu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new pd,cx=new Dt(.5,.5),El=new oe;class Sg{constructor(e=new Zr,n=new Zr,r=new Zr,o=new Zr,l=new Zr,u=new Zr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ti,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],m=l[2],p=l[3],v=l[4],_=l[5],g=l[6],y=l[7],E=l[8],C=l[9],x=l[10],S=l[11],R=l[12],N=l[13],P=l[14],I=l[15];if(o[0].setComponents(p-u,y-v,S-E,I-R).normalize(),o[1].setComponents(p+u,y+v,S+E,I+R).normalize(),o[2].setComponents(p+d,y+_,S+C,I+N).normalize(),o[3].setComponents(p-d,y-_,S-C,I-N).normalize(),r)o[4].setComponents(m,g,x,P).normalize(),o[5].setComponents(p-m,y-g,S-x,I-P).normalize();else if(o[4].setComponents(p-m,y-g,S-x,I-P).normalize(),n===Ti)o[5].setComponents(p+m,y+g,S+x,I+P).normalize();else if(n===Ol)o[5].setComponents(m,g,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=cx.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(El.x=o.normal.x>0?e.max.x:e.min.x,El.y=o.normal.y>0?e.max.y:e.min.y,El.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yg extends xn{constructor(e=[],n=ns,r,o,l,u,d,m,p,v){super(e,n,r,o,l,u,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xa extends xn{constructor(e,n,r=bi,o,l,u,d=dn,m=dn,p,v=Zi,_=1){if(v!==Zi&&v!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:_};super(g,o,l,u,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ux extends Xa{constructor(e,n=bi,r=ns,o,l,u=dn,d=dn,m,p=Zi){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,n,r,o,l,u,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mg extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends Ji{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],_=[];let g=0,y=0;E("z","y","x",-1,-1,r,n,e,u,l,0),E("z","y","x",1,-1,r,n,-e,u,l,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,l,4),E("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new $i(p,3)),this.setAttribute("normal",new $i(v,3)),this.setAttribute("uv",new $i(_,2));function E(C,x,S,R,N,P,I,U,O,T,b){const ue=P/O,k=I/T,Z=P/2,K=I/2,ce=U/2,Q=O+1,ee=T+1;let W=0,Y=0;const se=new oe;for(let q=0;q<ee;q++){const L=q*k-K;for(let V=0;V<Q;V++){const me=V*ue-Z;se[C]=me*R,se[x]=L*N,se[S]=ce,p.push(se.x,se.y,se.z),se[C]=0,se[x]=0,se[S]=U>0?1:-1,v.push(se.x,se.y,se.z),_.push(V/O),_.push(1-q/T),W+=1}}for(let q=0;q<T;q++)for(let L=0;L<O;L++){const V=g+L+Q*q,me=g+L+Q*(q+1),be=g+(L+1)+Q*(q+1),Le=g+(L+1)+Q*q;m.push(V,me,Le),m.push(me,be,Le),Y+=6}d.addGroup(y,Y,b),y+=Y,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $a extends Ji{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),m=Math.floor(o),p=d+1,v=m+1,_=e/d,g=n/m,y=[],E=[],C=[],x=[];for(let S=0;S<v;S++){const R=S*g-u;for(let N=0;N<p;N++){const P=N*_-l;E.push(P,-R,0),C.push(0,0,1),x.push(N/d),x.push(1-S/m)}}for(let S=0;S<m;S++)for(let R=0;R<d;R++){const N=R+p*S,P=R+p*(S+1),I=R+1+p*(S+1),U=R+1+p*S;y.push(N,P,U),y.push(P,I,U)}this.setIndex(y),this.setAttribute("position",new $i(E,3)),this.setAttribute("normal",new $i(C,3)),this.setAttribute("uv",new $i(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function wn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const o in r)e[o]=r[o]}return e}function fx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Eg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const dx={clone:Ys,merge:wn};var hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class mx extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gx extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vx extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ju={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(mm(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!mm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function mm(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _x{constructor(e,n,r){const o=this;let l=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(v){d++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,d),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,_){return p.push(v,_),this},this.removeHandler=function(v){const _=p.indexOf(v);return _!==-1&&p.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=p.length;_<g;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(v))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xx=new _x;class md{constructor(e){this.manager=e!==void 0?e:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,l){r.load(e,o,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}md.DEFAULT_MATERIAL_NAME="__DEFAULT";const ks=new WeakMap;class Sx extends md{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Ju.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){n&&n(u),l.manager.itemEnd(e)},0);else{let _=ks.get(u);_===void 0&&(_=[],ks.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=Wa("img");function m(){v(),n&&n(this);const _=ks.get(this)||[];for(let g=0;g<_.length;g++){const y=_[g];y.onLoad&&y.onLoad(this)}ks.delete(this),l.manager.itemEnd(e)}function p(_){v(),o&&o(_),Ju.remove(`image:${e}`);const g=ks.get(this)||[];for(let y=0;y<g.length;y++){const E=g[y];E.onError&&E.onError(_)}ks.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ju.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class yx extends md{constructor(e){super(e)}load(e,n,r,o){const l=new xn,u=new Sx(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,n!==void 0&&n(l)},r,o),l}}const wl=new oe,Tl=new Ks,yi=new oe;class wg extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wl,Tl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Tl,yi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(wl,Tl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Tl,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new oe,gm=new Dt,vm=new Dt;class di extends wg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,gm,vm),n.subVectors(vm,gm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class gd extends wg{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=-90,zs=1;class Mx extends Gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(Bs,zs,e,n);o.layers=this.layers,this.add(o);const l=new di(Bs,zs,e,n);l.layers=this.layers,this.add(l);const u=new di(Bs,zs,e,n);u.layers=this.layers,this.add(u);const d=new di(Bs,zs,e,n);d.layers=this.layers,this.add(d);const m=new di(Bs,zs,e,n);m.layers=this.layers,this.add(m);const p=new di(Bs,zs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,m]=n;for(const p of n)this.remove(p);if(e===Ti)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,m,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(_,g,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Ex extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function _m(s,e,n,r){const o=wx(r);switch(n){case ug:return s*e;case dg:return s*e/o.components*o.byteLength;case ld:return s*e/o.components*o.byteLength;case js:return s*e*2/o.components*o.byteLength;case cd:return s*e*2/o.components*o.byteLength;case fg:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case ud:return s*e*4/o.components*o.byteLength;case Pl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:case wf:return Math.max(s,16)*Math.max(e,8)/4;case yf:case Ef:return Math.max(s,8)*Math.max(e,8)/2;case Tf:case Af:case Rf:case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cf:case Pf:case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jf:case qf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $f:case Kf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zf:case Qf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wx(s){switch(s){case ti:case ag:return{byteLength:1,components:1};case Ha:case og:case Ki:return{byteLength:2,components:1};case ad:case od:return{byteLength:2,components:4};case bi:case sd:case wi:return{byteLength:4,components:1};case lg:case cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tg(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Tx(s){const e=new WeakMap;function n(d,m){const p=d.array,v=d.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const v=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,v);else{_.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<_.length;y++){const E=_[g],C=_[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,_[g]=C)}_.length=g+1;for(let y=0,E=_.length;y<E;y++){const C=_[y];s.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:l,update:u}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nS="gl_FragColor = linearToOutputTexel( gl_FragColor );",iS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ES=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,US=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ey=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,py=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,my=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ny=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Ax,alphahash_pars_fragment:Cx,alphamap_fragment:Rx,alphamap_pars_fragment:bx,alphatest_fragment:Px,alphatest_pars_fragment:Dx,aomap_fragment:Lx,aomap_pars_fragment:Nx,batching_pars_vertex:Ix,batching_vertex:Ux,begin_vertex:Fx,beginnormal_vertex:Ox,bsdfs:kx,iridescence_fragment:Bx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:jx,color_pars_vertex:qx,color_vertex:Yx,common:$x,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Qx,displacementmap_vertex:Jx,emissivemap_fragment:eS,emissivemap_pars_fragment:tS,colorspace_fragment:nS,colorspace_pars_fragment:iS,envmap_fragment:rS,envmap_common_pars_fragment:sS,envmap_pars_fragment:aS,envmap_pars_vertex:oS,envmap_physical_pars_fragment:_S,envmap_vertex:lS,fog_vertex:cS,fog_pars_vertex:uS,fog_fragment:fS,fog_pars_fragment:dS,gradientmap_pars_fragment:hS,lightmap_pars_fragment:pS,lights_lambert_fragment:mS,lights_lambert_pars_fragment:gS,lights_pars_begin:vS,lights_toon_fragment:xS,lights_toon_pars_fragment:SS,lights_phong_fragment:yS,lights_phong_pars_fragment:MS,lights_physical_fragment:ES,lights_physical_pars_fragment:wS,lights_fragment_begin:TS,lights_fragment_maps:AS,lights_fragment_end:CS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:bS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:DS,map_fragment:LS,map_pars_fragment:NS,map_particle_fragment:IS,map_particle_pars_fragment:US,metalnessmap_fragment:FS,metalnessmap_pars_fragment:OS,morphinstance_vertex:kS,morphcolor_vertex:BS,morphnormal_vertex:zS,morphtarget_pars_vertex:VS,morphtarget_vertex:HS,normal_fragment_begin:GS,normal_fragment_maps:WS,normal_pars_fragment:XS,normal_pars_vertex:jS,normal_vertex:qS,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:$S,clearcoat_normal_fragment_maps:KS,clearcoat_pars_fragment:ZS,iridescence_pars_fragment:QS,opaque_fragment:JS,packing:ey,premultiplied_alpha_fragment:ty,project_vertex:ny,dithering_fragment:iy,dithering_pars_fragment:ry,roughnessmap_fragment:sy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ly,shadowmap_vertex:cy,shadowmask_pars_fragment:uy,skinbase_vertex:fy,skinning_pars_vertex:dy,skinning_vertex:hy,skinnormal_vertex:py,specularmap_fragment:my,specularmap_pars_fragment:gy,tonemapping_fragment:vy,tonemapping_pars_fragment:_y,transmission_fragment:xy,transmission_pars_fragment:Sy,uv_pars_fragment:yy,uv_pars_vertex:My,uv_vertex:Ey,worldpos_vertex:wy,background_vert:Ty,background_frag:Ay,backgroundCube_vert:Cy,backgroundCube_frag:Ry,cube_vert:by,cube_frag:Py,depth_vert:Dy,depth_frag:Ly,distance_vert:Ny,distance_frag:Iy,equirect_vert:Uy,equirect_frag:Fy,linedashed_vert:Oy,linedashed_frag:ky,meshbasic_vert:By,meshbasic_frag:zy,meshlambert_vert:Vy,meshlambert_frag:Hy,meshmatcap_vert:Gy,meshmatcap_frag:Wy,meshnormal_vert:Xy,meshnormal_frag:jy,meshphong_vert:qy,meshphong_frag:Yy,meshphysical_vert:$y,meshphysical_frag:Ky,meshtoon_vert:Zy,meshtoon_frag:Qy,points_vert:Jy,points_frag:eM,shadow_vert:tM,shadow_frag:nM,sprite_vert:iM,sprite_frag:rM},De={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ei={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ut(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ei.physical={uniforms:wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Al={r:0,b:0,g:0},$r=new Qi,sM=new Jt;function aM(s,e,n,r,o,l){const u=new Ut(0);let d=o===!0?0:1,m,p,v=null,_=0,g=null;function y(R){let N=R.isScene===!0?R.background:null;if(N&&N.isTexture){const P=R.backgroundBlurriness>0;N=e.get(N,P)}return N}function E(R){let N=!1;const P=y(R);P===null?x(u,d):P&&P.isColor&&(x(P,1),N=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,N){const P=y(N);P&&(P.isCubeTexture||P.mapping===Bl)?(p===void 0&&(p=new Pi(new Ya(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Ys(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),$r.copy(N.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler($r)),p.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,(v!==P||_!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,g=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Pi(new $a(2,2),new mi({name:"BackgroundMaterial",uniforms:Ys(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=P,_=P.version,g=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function x(R,N){R.getRGB(Al,Eg(s)),n.buffers.color.setClear(Al.r,Al.g,Al.b,N,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,N=1){u.set(R),d=N,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,x(u,d)},render:E,addToRenderList:C,dispose:S}}function oM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(k,Z,K,ce,Q){let ee=!1;const W=_(k,ce,K,Z);l!==W&&(l=W,p(l.object)),ee=y(k,ce,K,Q),ee&&E(k,ce,K,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,P(k,Z,K,ce),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return s.createVertexArray()}function p(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function _(k,Z,K,ce){const Q=ce.wireframe===!0;let ee=r[Z.id];ee===void 0&&(ee={},r[Z.id]=ee);const W=k.isInstancedMesh===!0?k.id:0;let Y=ee[W];Y===void 0&&(Y={},ee[W]=Y);let se=Y[K.id];se===void 0&&(se={},Y[K.id]=se);let q=se[Q];return q===void 0&&(q=g(m()),se[Q]=q),q}function g(k){const Z=[],K=[],ce=[];for(let Q=0;Q<n;Q++)Z[Q]=0,K[Q]=0,ce[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:K,attributeDivisors:ce,object:k,attributes:{},index:null}}function y(k,Z,K,ce){const Q=l.attributes,ee=Z.attributes;let W=0;const Y=K.getAttributes();for(const se in Y)if(Y[se].location>=0){const L=Q[se];let V=ee[se];if(V===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),L===void 0||L.attribute!==V||V&&L.data!==V.data)return!0;W++}return l.attributesNum!==W||l.index!==ce}function E(k,Z,K,ce){const Q={},ee=Z.attributes;let W=0;const Y=K.getAttributes();for(const se in Y)if(Y[se].location>=0){let L=ee[se];L===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(L=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(L=k.instanceColor));const V={};V.attribute=L,L&&L.data&&(V.data=L.data),Q[se]=V,W++}l.attributes=Q,l.attributesNum=W,l.index=ce}function C(){const k=l.newAttributes;for(let Z=0,K=k.length;Z<K;Z++)k[Z]=0}function x(k){S(k,0)}function S(k,Z){const K=l.newAttributes,ce=l.enabledAttributes,Q=l.attributeDivisors;K[k]=1,ce[k]===0&&(s.enableVertexAttribArray(k),ce[k]=1),Q[k]!==Z&&(s.vertexAttribDivisor(k,Z),Q[k]=Z)}function R(){const k=l.newAttributes,Z=l.enabledAttributes;for(let K=0,ce=Z.length;K<ce;K++)Z[K]!==k[K]&&(s.disableVertexAttribArray(K),Z[K]=0)}function N(k,Z,K,ce,Q,ee,W){W===!0?s.vertexAttribIPointer(k,Z,K,Q,ee):s.vertexAttribPointer(k,Z,K,ce,Q,ee)}function P(k,Z,K,ce){C();const Q=ce.attributes,ee=K.getAttributes(),W=Z.defaultAttributeValues;for(const Y in ee){const se=ee[Y];if(se.location>=0){let q=Q[Y];if(q===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),q!==void 0){const L=q.normalized,V=q.itemSize,me=e.get(q);if(me===void 0)continue;const be=me.buffer,Le=me.type,ne=me.bytesPerElement,he=Le===s.INT||Le===s.UNSIGNED_INT||q.gpuType===sd;if(q.isInterleavedBufferAttribute){const ge=q.data,ze=ge.stride,ke=q.offset;if(ge.isInstancedInterleavedBuffer){for(let tt=0;tt<se.locationSize;tt++)S(se.location+tt,ge.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let tt=0;tt<se.locationSize;tt++)x(se.location+tt);s.bindBuffer(s.ARRAY_BUFFER,be);for(let tt=0;tt<se.locationSize;tt++)N(se.location+tt,V/se.locationSize,Le,L,ze*ne,(ke+V/se.locationSize*tt)*ne,he)}else{if(q.isInstancedBufferAttribute){for(let ge=0;ge<se.locationSize;ge++)S(se.location+ge,q.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ge=0;ge<se.locationSize;ge++)x(se.location+ge);s.bindBuffer(s.ARRAY_BUFFER,be);for(let ge=0;ge<se.locationSize;ge++)N(se.location+ge,V/se.locationSize,Le,L,V*ne,V/se.locationSize*ge*ne,he)}}else if(W!==void 0){const L=W[Y];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(se.location,L);break;case 3:s.vertexAttrib3fv(se.location,L);break;case 4:s.vertexAttrib4fv(se.location,L);break;default:s.vertexAttrib1fv(se.location,L)}}}}R()}function I(){b();for(const k in r){const Z=r[k];for(const K in Z){const ce=Z[K];for(const Q in ce){const ee=ce[Q];for(const W in ee)v(ee[W].object),delete ee[W];delete ce[Q]}}delete r[k]}}function U(k){if(r[k.id]===void 0)return;const Z=r[k.id];for(const K in Z){const ce=Z[K];for(const Q in ce){const ee=ce[Q];for(const W in ee)v(ee[W].object),delete ee[W];delete ce[Q]}}delete r[k.id]}function O(k){for(const Z in r){const K=r[Z];for(const ce in K){const Q=K[ce];if(Q[k.id]===void 0)continue;const ee=Q[k.id];for(const W in ee)v(ee[W].object),delete ee[W];delete Q[k.id]}}}function T(k){for(const Z in r){const K=r[Z],ce=k.isInstancedMesh===!0?k.id:0,Q=K[ce];if(Q!==void 0){for(const ee in Q){const W=Q[ee];for(const Y in W)v(W[Y].object),delete W[Y];delete Q[ee]}delete K[ce],Object.keys(K).length===0&&delete r[Z]}}}function b(){ue(),u=!0,l!==o&&(l=o,p(l.object))}function ue(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:b,resetDefaultState:ue,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:x,disableUnusedAttributes:R}}function lM(s,e,n){let r;function o(p){r=p}function l(p,v){s.drawArrays(r,p,v),n.update(v,r,1)}function u(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),n.update(v,r,_))}function d(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let y=0;for(let E=0;E<_;E++)y+=v[E];n.update(y,r,1)}function m(p,v,_,g){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)u(p[E],v[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,g,0,_);let E=0;for(let C=0;C<_;C++)E+=v[C]*g[C];n.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function cM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==pi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const T=O===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==wi&&!T)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(ft("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:P,maxSamples:I,samples:U}}function uM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Zr,d=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||r!==0||o;return o=g,r=_.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){n=v(_,g,0)},this.setState=function(_,g,y){const E=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!o||E===null||E.length===0||l&&!x)l?v(null):p();else{const R=l?0:r,N=R*4;let P=S.clippingState||null;m.value=P,P=v(E,g,N,y);for(let I=0;I!==N;++I)P[I]=n[I];S.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,y,E){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=m.value,E!==!0||x===null){const S=y+C*4,R=g.matrixWorldInverse;d.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let N=0,P=y;N!==C;++N,P+=4)u.copy(_[N]).applyMatrix4(R,d),u.normal.toArray(x,P),x[P+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const Rr=4,xm=[.125,.215,.35,.446,.526,.582],Jr=20,fM=256,ka=new gd,Sm=new Ut;let ef=null,tf=0,nf=0,rf=!1;const dM=new oe;class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:d=dM}=l;ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=rf,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ki,format:pi,colorSpace:qs,depthBuffer:!1},o=Mm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hM(l)),this._blurMaterial=mM(l,e,n),this._ggxMaterial=pM(l,e,n)}return o}_compileMaterial(e){const n=new Pi(new Ji,e);this._renderer.compile(n,ka)}_sceneToCubeUV(e,n,r,o,l){const m=new di(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(Sm),_.toneMapping=Ai,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new Ya,new xg({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let S=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,S=!0):(x.color.copy(Sm),S=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,p[N],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[N],l.y,l.z)):P===1?(m.up.set(0,0,p[N]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[N],l.z)):(m.up.set(0,p[N],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[N]));const I=this._cubeSize;Vs(o,P*I,N>2?I:0,I,I),_.setRenderTarget(o),S&&_.render(C,m),_.render(e,m)}_.toneMapping=y,_.autoClear=g,e.background=R}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===Xs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;Vs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,y=_*g,{_lodMax:E}=this,C=this._sizeLods[r],x=3*C*(r>E-Rr?r-E+Rr:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-n,Vs(l,x,S,3*C,2*C),o.setRenderTarget(l),o.render(d,ka),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-r,Vs(e,x,S,3*C,2*C),o.setRenderTarget(e),o.render(d,ka)}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=p;const g=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Jr-1),C=l/E,x=isFinite(l)?1+Math.floor(v*C):Jr;x>Jr&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Jr}`);const S=[];let R=0;for(let O=0;O<Jr;++O){const T=O/C,b=Math.exp(-T*T/2);S.push(b),O===0?R+=b:O<x&&(R+=2*b)}for(let O=0;O<S.length;O++)S[O]=S[O]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=S,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:N}=this;g.dTheta.value=E,g.mipInt.value=N-r;const P=this._sizeLods[o],I=3*P*(o>N-Rr?o-N+Rr:0),U=4*(this._cubeSize-P);Vs(n,I,U,3*P,2*P),m.setRenderTarget(n),m.render(_,ka)}}function hM(s){const e=[],n=[],r=[];let o=s;const l=s-Rr+1+xm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>s-Rr?m=xm[u-s+Rr-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,E=6,C=3,x=2,S=1,R=new Float32Array(C*E*y),N=new Float32Array(x*E*y),P=new Float32Array(S*E*y);for(let U=0;U<y;U++){const O=U%3*2/3-1,T=U>2?0:-1,b=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];R.set(b,C*E*U),N.set(g,x*E*U);const ue=[U,U,U,U,U,U];P.set(ue,S*E*U)}const I=new Ji;I.setAttribute("position",new Ri(R,C)),I.setAttribute("uv",new Ri(N,x)),I.setAttribute("faceIndex",new Ri(P,S)),r.push(new Pi(I,null)),o>Rr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Mm(s,e,n){const r=new Ci(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function pM(s,e,n){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function mM(s,e,n){const r=new Float32Array(Jr),o=new oe(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Em(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function wm(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ag extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new yg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ya(5,5,5),l=new mi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:qi});l.uniforms.tEquirect.value=n;const u=new Pi(o,l),d=n.minFilter;return n.minFilter===es&&(n.minFilter=Qt),new Mx(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function gM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Au||y===Cu)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new Ag(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),d(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,E=y===Au||y===Cu,C=y===ns||y===Xs;if(E||C){let x=n.get(g);const S=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new ym(s)),x=E?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),x.texture;if(x!==void 0)return x.texture;{const R=g.image;return E&&R&&R.height>0||C&&R&&m(R)?(r===null&&(r=new ym(s)),x=E?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function d(g,y){return y===Au?g.mapping=ns:y===Cu&&(g.mapping=Xs),g}function m(g){let y=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const E=n.get(y);E!==void 0&&(n.delete(y),E.dispose())}function _(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function vM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&kl("WebGLRenderer: "+r+" extension not supported."),o}}}function _M(s,e,n,r){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(_){const g=_.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function p(_){const g=[],y=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const R=y.array;C=y.version;for(let N=0,P=R.length;N<P;N+=3){const I=R[N+0],U=R[N+1],O=R[N+2];g.push(I,U,U,O,O,I)}}else{const R=E.array;C=E.version;for(let N=0,P=R.length/3-1;N<P;N+=3){const I=N+0,U=N+1,O=N+2;g.push(I,U,U,O,O,I)}}const x=new(E.count>=65535?_g:vg)(g,1);x.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function v(_){const g=l.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function xM(s,e,n){let r;function o(g){r=g}let l,u;function d(g){l=g.type,u=g.bytesPerElement}function m(g,y){s.drawElements(r,y,l,g*u),n.update(y,r,1)}function p(g,y,E){E!==0&&(s.drawElementsInstanced(r,y,l,g*u,E),n.update(y,r,E))}function v(g,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,g,0,E);let x=0;for(let S=0;S<E;S++)x+=y[S];n.update(x,r,1)}function _(g,y,E,C){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<g.length;S++)p(g[S]/u,y[S],C[S]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,l,g,0,C,0,E);let S=0;for(let R=0;R<E;R++)S+=y[R]*C[R];n.update(S,r,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function SM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function yM(s,e,n){const r=new WeakMap,o=new $t;function l(u,d,m){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let ue=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",ue)};var y=ue;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),C===!0&&(P=2),x===!0&&(P=3);let I=d.attributes.position.count*P,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*U*4*_),T=new pg(O,I,U,_);T.type=wi,T.needsUpdate=!0;const b=P*4;for(let k=0;k<_;k++){const Z=S[k],K=R[k],ce=N[k],Q=I*U*4*k;for(let ee=0;ee<Z.count;ee++){const W=ee*b;E===!0&&(o.fromBufferAttribute(Z,ee),O[Q+W+0]=o.x,O[Q+W+1]=o.y,O[Q+W+2]=o.z,O[Q+W+3]=0),C===!0&&(o.fromBufferAttribute(K,ee),O[Q+W+4]=o.x,O[Q+W+5]=o.y,O[Q+W+6]=o.z,O[Q+W+7]=0),x===!0&&(o.fromBufferAttribute(ce,ee),O[Q+W+8]=o.x,O[Q+W+9]=o.y,O[Q+W+10]=o.z,O[Q+W+11]=ce.itemSize===4?o.w:1)}}g={count:_,texture:T,size:new Dt(I,U)},r.set(d,g),d.addEventListener("dispose",ue)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function MM(s,e,n,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==v&&(y.update(),l.set(y,v))}return g}function d(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:u,dispose:d}}const EM={[Qm]:"LINEAR_TONE_MAPPING",[Jm]:"REINHARD_TONE_MAPPING",[eg]:"CINEON_TONE_MAPPING",[tg]:"ACES_FILMIC_TONE_MAPPING",[ig]:"AGX_TONE_MAPPING",[rg]:"NEUTRAL_TONE_MAPPING",[ng]:"CUSTOM_TONE_MAPPING"};function wM(s,e,n,r,o){const l=new Ci(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Ci(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new Ji;d.setAttribute("position",new $i([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $i([0,2,0,0,2,0],2));const m=new mx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Pi(d,m),v=new gd(-1,1,1,-1,0,1);let _=null,g=null,y=!1,E,C=null,x=[],S=!1;this.setSize=function(R,N){l.setSize(R,N),u.setSize(R,N);for(let P=0;P<x.length;P++){const I=x[P];I.setSize&&I.setSize(R,N)}},this.setEffects=function(R){x=R,S=x.length>0&&x[0].isRenderPass===!0;const N=l.width,P=l.height;for(let I=0;I<x.length;I++){const U=x[I];U.setSize&&U.setSize(N,P)}},this.begin=function(R,N){if(y||R.toneMapping===Ai&&x.length===0)return!1;if(C=N,N!==null){const P=N.width,I=N.height;(l.width!==P||l.height!==I)&&this.setSize(P,I)}return S===!1&&R.setRenderTarget(l),E=R.toneMapping,R.toneMapping=Ai,!0},this.hasRenderPass=function(){return S},this.end=function(R,N){R.toneMapping=E,y=!0;let P=l,I=u;for(let U=0;U<x.length;U++){const O=x[U];if(O.enabled!==!1&&(O.render(R,I,P,N),O.needsSwap!==!1)){const T=P;P=I,I=T}}if(_!==R.outputColorSpace||g!==R.toneMapping){_=R.outputColorSpace,g=R.toneMapping,m.defines={},Tt.getTransfer(_)===Nt&&(m.defines.SRGB_TRANSFER="");const U=EM[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(C),R.render(p,v),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),m.dispose()}}const Cg=new xn,ed=new Xa(1,1),Rg=new pg,bg=new X_,Pg=new yg,Tm=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),bm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Tm[o];if(l===void 0&&(l=new Float32Array(o),Tm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Hl(s,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function TM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function AM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function CM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function RM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function bM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;bm.set(r),s.uniformMatrix2fv(this.addr,!1,bm),rn(n,r)}}function PM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),rn(n,r)}}function DM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Cm.set(r),s.uniformMatrix4fv(this.addr,!1,Cm),rn(n,r)}}function LM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function FM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function zM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ed.compareFunction=n.isReversedDepthBuffer()?dd:fd,l=ed):l=Cg,n.setTexture2D(e||l,o)}function VM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||bg,o)}function HM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Pg,o)}function GM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Rg,o)}function WM(s){switch(s){case 5126:return TM;case 35664:return AM;case 35665:return CM;case 35666:return RM;case 35674:return bM;case 35675:return PM;case 35676:return DM;case 5124:case 35670:return LM;case 35667:case 35671:return NM;case 35668:case 35672:return IM;case 35669:case 35673:return UM;case 5125:return FM;case 36294:return OM;case 36295:return kM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function XM(s,e){s.uniform1fv(this.addr,e)}function jM(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function qM(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function YM(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function $M(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function KM(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function ZM(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function QM(s,e){s.uniform1iv(this.addr,e)}function JM(s,e){s.uniform2iv(this.addr,e)}function eE(s,e){s.uniform3iv(this.addr,e)}function tE(s,e){s.uniform4iv(this.addr,e)}function nE(s,e){s.uniform1uiv(this.addr,e)}function iE(s,e){s.uniform2uiv(this.addr,e)}function rE(s,e){s.uniform3uiv(this.addr,e)}function sE(s,e){s.uniform4uiv(this.addr,e)}function aE(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ed:u=Cg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,l[d])}function oE(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||bg,l[u])}function lE(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Pg,l[u])}function cE(s,e,n){const r=this.cache,o=e.length,l=Hl(n,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Rg,l[u])}function uE(s){switch(s){case 5126:return XM;case 35664:return jM;case 35665:return qM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}class fE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=WM(n.type)}}class dE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uE(n.type)}}class hE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const sf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function pE(s,e,n){const r=s.name,o=r.length;for(sf.lastIndex=0;;){const l=sf.exec(r),u=sf.lastIndex;let d=l[1];const m=l[2]==="]",p=l[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){Pm(n,p===void 0?new fE(d,s,e):new dE(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new hE(d),Pm(n,_)),n=_}}}class Il{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),m=e.getUniformLocation(n,d.name);pE(d,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Dm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const mE=37297;let gE=0;function vE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Lm=new gt;function _E(s){Tt._getMatrix(Lm,Tt.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+vE(s.getShaderSource(e),d)}else return l}function xE(s,e){const n=_E(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const SE={[Qm]:"Linear",[Jm]:"Reinhard",[eg]:"Cineon",[tg]:"ACESFilmic",[ig]:"AgX",[rg]:"Neutral",[ng]:"Custom"};function yE(s,e){const n=SE[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new oe;function ME(){Tt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function wE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function TE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Va(s){return s!==""}function Im(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(s){return s.replace(AE,RE)}const CE=new Map;function RE(s,e){let n=vt[e];if(n===void 0){const r=CE.get(e);if(r!==void 0)n=vt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return td(n)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(s){return s.replace(bE,PE)}function PE(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Om(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DE={[bl]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function LE(s){return DE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NE={[ns]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[Bl]:"ENVMAP_TYPE_CUBE_UV"};function IE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":NE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const UE={[Xs]:"ENVMAP_MODE_REFRACTION"};function FE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":UE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OE={[Zm]:"ENVMAP_BLENDING_MULTIPLY",[E_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function kE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":OE[s.combine]||"ENVMAP_BLENDING_NONE"}function BE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function zE(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=LE(n),p=IE(n),v=FE(n),_=kE(n),g=BE(n),y=EE(n),E=wE(l),C=o.createProgram();let x,S,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Va).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Va).join(`
`),S.length>0&&(S+=`
`)):(x=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),S=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?vt.tonemapping_pars_fragment:"",n.toneMapping!==Ai?yE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,xE("linearToOutputTexel",n.outputColorSpace),ME(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),u=td(u),u=Im(u,n),u=Um(u,n),d=td(d),d=Im(d,n),d=Um(d,n),u=Fm(u),d=Fm(d),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=R+x+u,P=R+S+d,I=Dm(o,o.VERTEX_SHADER,N),U=Dm(o,o.FRAGMENT_SHADER,P);o.attachShader(C,I),o.attachShader(C,U),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(k){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(C)||"",K=o.getShaderInfoLog(I)||"",ce=o.getShaderInfoLog(U)||"",Q=Z.trim(),ee=K.trim(),W=ce.trim();let Y=!0,se=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,I,U);else{const q=Nm(o,I,"vertex"),L=Nm(o,U,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Q+`
`+q+`
`+L)}else Q!==""?ft("WebGLProgram: Program Info Log:",Q):(ee===""||W==="")&&(se=!1);se&&(k.diagnostics={runnable:Y,programLog:Q,vertexShader:{log:ee,prefix:x},fragmentShader:{log:W,prefix:S}})}o.deleteShader(I),o.deleteShader(U),T=new Il(o,C),b=TE(o,C)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let ue=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=o.getProgramParameter(C,mE)),ue},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=U,this}let VE=0;class HE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new GE(e),n.set(e,r)),r}}class GE{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}}function WE(s,e,n,r,o,l){const u=new mg,d=new HE,m=new Set,p=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,b,ue,k,Z){const K=k.fog,ce=Z.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,W=e.get(T.envMap||Q,ee),Y=W&&W.mapping===Bl?W.image.height:null,se=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ft("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const q=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,L=q!==void 0?q.length:0;let V=0;ce.morphAttributes.position!==void 0&&(V=1),ce.morphAttributes.normal!==void 0&&(V=2),ce.morphAttributes.color!==void 0&&(V=3);let me,be,Le,ne;if(se){const Et=Ei[se];me=Et.vertexShader,be=Et.fragmentShader}else me=T.vertexShader,be=T.fragmentShader,d.update(T),Le=d.getVertexShaderID(T),ne=d.getFragmentShaderID(T);const he=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),ze=Z.isInstancedMesh===!0,ke=Z.isBatchedMesh===!0,tt=!!T.map,Vt=!!T.matcap,dt=!!W,St=!!T.aoMap,At=!!T.lightMap,ct=!!T.bumpMap,It=!!T.normalMap,B=!!T.displacementMap,nt=!!T.emissiveMap,ut=!!T.metalnessMap,pt=!!T.roughnessMap,Ne=T.anisotropy>0,D=T.clearcoat>0,M=T.dispersion>0,X=T.iridescence>0,pe=T.sheen>0,ve=T.transmission>0,fe=Ne&&!!T.anisotropyMap,He=D&&!!T.clearcoatMap,we=D&&!!T.clearcoatNormalMap,qe=D&&!!T.clearcoatRoughnessMap,st=X&&!!T.iridescenceMap,ye=X&&!!T.iridescenceThicknessMap,Ae=pe&&!!T.sheenColorMap,Ye=pe&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ie=!!T.specularColorMap,ht=!!T.specularIntensityMap,H=ve&&!!T.transmissionMap,Ce=ve&&!!T.thicknessMap,Ee=!!T.gradientMap,Ue=!!T.alphaMap,Me=T.alphaTest>0,de=!!T.alphaHash,Xe=!!T.extensions;let at=Ai;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=s.toneMapping);const Lt={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:me,fragmentShader:be,defines:T.defines,customVertexShaderID:Le,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ke,batchingColor:ke&&Z._colorsTexture!==null,instancing:ze,instancingColor:ze&&Z.instanceColor!==null,instancingMorph:ze&&Z.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:qs,alphaToCoverage:!!T.alphaToCoverage,map:tt,matcap:Vt,envMap:dt,envMapMode:dt&&W.mapping,envMapCubeUVHeight:Y,aoMap:St,lightMap:At,bumpMap:ct,normalMap:It,displacementMap:B,emissiveMap:nt,normalMapObjectSpace:It&&T.normalMapType===R_,normalMapTangentSpace:It&&T.normalMapType===C_,metalnessMap:ut,roughnessMap:pt,anisotropy:Ne,anisotropyMap:fe,clearcoat:D,clearcoatMap:He,clearcoatNormalMap:we,clearcoatRoughnessMap:qe,dispersion:M,iridescence:X,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:pe,sheenColorMap:Ae,sheenRoughnessMap:Ye,specularMap:We,specularColorMap:Ie,specularIntensityMap:ht,transmission:ve,transmissionMap:H,thicknessMap:Ce,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===Hs&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:de,combine:T.combine,mapUv:tt&&E(T.map.channel),aoMapUv:St&&E(T.aoMap.channel),lightMapUv:At&&E(T.lightMap.channel),bumpMapUv:ct&&E(T.bumpMap.channel),normalMapUv:It&&E(T.normalMap.channel),displacementMapUv:B&&E(T.displacementMap.channel),emissiveMapUv:nt&&E(T.emissiveMap.channel),metalnessMapUv:ut&&E(T.metalnessMap.channel),roughnessMapUv:pt&&E(T.roughnessMap.channel),anisotropyMapUv:fe&&E(T.anisotropyMap.channel),clearcoatMapUv:He&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(T.sheenRoughnessMap.channel),specularMapUv:We&&E(T.specularMap.channel),specularColorMapUv:Ie&&E(T.specularColorMap.channel),specularIntensityMapUv:ht&&E(T.specularIntensityMap.channel),transmissionMapUv:H&&E(T.transmissionMap.channel),thicknessMapUv:Ce&&E(T.thicknessMap.channel),alphaMapUv:Ue&&E(T.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(It||Ne),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(tt||Ue),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ce.attributes.normal===void 0&&It===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ge,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:V,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ue.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:tt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:nt&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ji,flipSided:T.side===In,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Lt.vertexUv1s=m.has(1),Lt.vertexUv2s=m.has(2),Lt.vertexUv3s=m.has(3),m.clear(),Lt}function x(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ue in T.defines)b.push(ue),b.push(T.defines[ue]);return T.isRawShaderMaterial===!1&&(S(b,T),R(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function S(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function R(T,b){u.disableAll(),b.instancing&&u.enable(0),b.instancingColor&&u.enable(1),b.instancingMorph&&u.enable(2),b.matcap&&u.enable(3),b.envMap&&u.enable(4),b.normalMapObjectSpace&&u.enable(5),b.normalMapTangentSpace&&u.enable(6),b.clearcoat&&u.enable(7),b.iridescence&&u.enable(8),b.alphaTest&&u.enable(9),b.vertexColors&&u.enable(10),b.vertexAlphas&&u.enable(11),b.vertexUv1s&&u.enable(12),b.vertexUv2s&&u.enable(13),b.vertexUv3s&&u.enable(14),b.vertexTangents&&u.enable(15),b.anisotropy&&u.enable(16),b.alphaHash&&u.enable(17),b.batching&&u.enable(18),b.dispersion&&u.enable(19),b.batchingColor&&u.enable(20),b.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reversedDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),T.push(u.mask)}function N(T){const b=y[T.type];let ue;if(b){const k=Ei[b];ue=dx.clone(k.uniforms)}else ue=T.uniforms;return ue}function P(T,b){let ue=v.get(b);return ue!==void 0?++ue.usedTimes:(ue=new zE(s,b,T,o),p.push(ue),v.set(b,ue)),ue}function I(T){if(--T.usedTimes===0){const b=p.indexOf(T);p[b]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function U(T){d.remove(T)}function O(){d.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:N,acquireProgram:P,releaseProgram:I,releaseShaderCache:U,programs:p,dispose:O}}function XE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,m){s.get(u)[d]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function jE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,C,x,S){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:y,material:E,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:x,group:S},s[e]=R):(R.id=g.id,R.object=g,R.geometry=y,R.material=E,R.materialVariant=u(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=x,R.group=S),e++,R}function m(g,y,E,C,x,S){const R=d(g,y,E,C,x,S);E.transmission>0?r.push(R):E.transparent===!0?o.push(R):n.push(R)}function p(g,y,E,C,x,S){const R=d(g,y,E,C,x,S);E.transmission>0?r.unshift(R):E.transparent===!0?o.unshift(R):n.unshift(R)}function v(g,y){n.length>1&&n.sort(g||jE),r.length>1&&r.sort(y||km),o.length>1&&o.sort(y||km)}function _(){for(let g=e,y=s.length;g<y;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:m,unshift:p,finish:_,sort:v}}function qE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Bm,s.set(r,[u])):o>=l.length?(u=new Bm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function YE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new Ut};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=n,n}}}function $E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let KE=0;function ZE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QE(s){const e=new YE,n=$E(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const o=new oe,l=new Jt,u=new Jt;function d(p){let v=0,_=0,g=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let y=0,E=0,C=0,x=0,S=0,R=0,N=0,P=0,I=0,U=0,O=0;p.sort(ZE);for(let b=0,ue=p.length;b<ue;b++){const k=p[b],Z=k.color,K=k.intensity,ce=k.distance;let Q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===js?Q=k.shadow.map.texture:Q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=Z.r*K,_+=Z.g*K,g+=Z.b*K;else if(k.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(k.sh.coefficients[ee],K);O++}else if(k.isDirectionalLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,Y=n.get(k);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=k.shadow.matrix,R++}r.directional[y]=ee,y++}else if(k.isSpotLight){const ee=e.get(k);ee.position.setFromMatrixPosition(k.matrixWorld),ee.color.copy(Z).multiplyScalar(K),ee.distance=ce,ee.coneCos=Math.cos(k.angle),ee.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ee.decay=k.decay,r.spot[C]=ee;const W=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,W.updateMatrices(k),k.castShadow&&U++),r.spotLightMatrix[C]=W.matrix,k.castShadow){const Y=n.get(k);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=Q,P++}C++}else if(k.isRectAreaLight){const ee=e.get(k);ee.color.copy(Z).multiplyScalar(K),ee.halfWidth.set(k.width*.5,0,0),ee.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=ee,x++}else if(k.isPointLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),ee.distance=k.distance,ee.decay=k.decay,k.castShadow){const W=k.shadow,Y=n.get(k);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=Q,r.pointShadowMatrix[E]=k.shadow.matrix,N++}r.point[E]=ee,E++}else if(k.isHemisphereLight){const ee=e.get(k);ee.skyColor.copy(k.color).multiplyScalar(K),ee.groundColor.copy(k.groundColor).multiplyScalar(K),r.hemi[S]=ee,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==x||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==N||T.numSpotShadows!==P||T.numSpotMaps!==I||T.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,T.directionalLength=y,T.pointLength=E,T.spotLength=C,T.rectAreaLength=x,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=N,T.numSpotShadows=P,T.numSpotMaps=I,T.numLightProbes=O,r.version=KE++)}function m(p,v){let _=0,g=0,y=0,E=0,C=0;const x=v.matrixWorldInverse;for(let S=0,R=p.length;S<R;S++){const N=p[S];if(N.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),_++}else if(N.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),y++}else if(N.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(x),u.identity(),l.copy(N.matrixWorld),l.premultiply(x),u.extractRotation(l),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(x),g++}else if(N.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(x),C++}}}return{setup:d,setupView:m,state:r}}function zm(s){const e=new QE(s),n=[],r=[];function o(v){p.camera=v,n.length=0,r.length=0}function l(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function m(v){e.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:l,pushShadow:u}}function JE(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new zm(s),e.set(o,[d])):l>=u.length?(d=new zm(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n1=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],i1=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Vm=new Jt,Ba=new oe,af=new oe;function r1(s,e,n){let r=new Sg;const o=new Dt,l=new Dt,u=new $t,d=new gx,m=new vx,p={},v=n.maxTextureSize,_={[br]:In,[In]:br,[ji]:ji},g=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:e1,fragmentShader:t1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ji;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Pi(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let S=this.type;this.render=function(U,O,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;this.type===r_&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bl);const b=s.getRenderTarget(),ue=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(qi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=S!==this.type;K&&O.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(Q=>Q.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,Q=U.length;ce<Q;ce++){const ee=U[ce],W=ee.shadow;if(W===void 0){ft("WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Y=W.getFrameExtents();o.multiply(Y),l.copy(W.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Y.x),o.x=l.x*Y.x,W.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Y.y),o.y=l.y*Y.y,W.mapSize.y=l.y));const se=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=se,W.map===null||K===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===za){if(ee.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ci(o.x,o.y,{format:js,type:Ki,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),W.map.texture.name=ee.name+".shadowMap",W.map.depthTexture=new Xa(o.x,o.y,wi),W.map.depthTexture.name=ee.name+".shadowMapDepth",W.map.depthTexture.format=Zi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn}else ee.isPointLight?(W.map=new Ag(o.x),W.map.depthTexture=new ux(o.x,bi)):(W.map=new Ci(o.x,o.y),W.map.depthTexture=new Xa(o.x,o.y,bi)),W.map.depthTexture.name=ee.name+".shadowMap",W.map.depthTexture.format=Zi,this.type===bl?(W.map.depthTexture.compareFunction=se?dd:fd,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn);W.camera.updateProjectionMatrix()}const q=W.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<q;L++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,L),s.clear();else{L===0&&(s.setRenderTarget(W.map),s.clear());const V=W.getViewport(L);u.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),Z.viewport(u)}if(ee.isPointLight){const V=W.camera,me=W.matrix,be=ee.distance||V.far;be!==V.far&&(V.far=be,V.updateProjectionMatrix()),Ba.setFromMatrixPosition(ee.matrixWorld),V.position.copy(Ba),af.copy(V.position),af.add(n1[L]),V.up.copy(i1[L]),V.lookAt(af),V.updateMatrixWorld(),me.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Vm.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Vm,V.coordinateSystem,V.reversedDepth)}else W.updateMatrices(ee);r=W.getFrustum(),P(O,T,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===za&&R(W,T),W.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(b,ue,k)};function R(U,O){const T=e.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ci(o.x,o.y,{format:js,type:Ki})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,T,g,C,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,T,y,C,null)}function N(U,O,T,b){let ue=null;const k=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)ue=k;else if(ue=T.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=ue.uuid,K=O.uuid;let ce=p[Z];ce===void 0&&(ce={},p[Z]=ce);let Q=ce[K];Q===void 0&&(Q=ue.clone(),ce[K]=Q,O.addEventListener("dispose",I)),ue=Q}if(ue.visible=O.visible,ue.wireframe=O.wireframe,b===za?ue.side=O.shadowSide!==null?O.shadowSide:O.side:ue.side=O.shadowSide!==null?O.shadowSide:_[O.side],ue.alphaMap=O.alphaMap,ue.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ue.map=O.map,ue.clipShadows=O.clipShadows,ue.clippingPlanes=O.clippingPlanes,ue.clipIntersection=O.clipIntersection,ue.displacementMap=O.displacementMap,ue.displacementScale=O.displacementScale,ue.displacementBias=O.displacementBias,ue.wireframeLinewidth=O.wireframeLinewidth,ue.linewidth=O.linewidth,T.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const Z=s.properties.get(ue);Z.light=T}return ue}function P(U,O,T,b,ue){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&ue===za)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const K=e.update(U),ce=U.material;if(Array.isArray(ce)){const Q=K.groups;for(let ee=0,W=Q.length;ee<W;ee++){const Y=Q[ee],se=ce[Y.materialIndex];if(se&&se.visible){const q=N(U,se,b,ue);U.onBeforeShadow(s,U,O,T,K,q,Y),s.renderBufferDirect(T,null,K,q,U,Y),U.onAfterShadow(s,U,O,T,K,q,Y)}}}else if(ce.visible){const Q=N(U,ce,b,ue);U.onBeforeShadow(s,U,O,T,K,Q,null),s.renderBufferDirect(T,null,K,Q,U,null),U.onAfterShadow(s,U,O,T,K,Q,null)}}const Z=U.children;for(let K=0,ce=Z.length;K<ce;K++)P(Z[K],O,T,b,ue)}function I(U){U.target.removeEventListener("dispose",I);for(const T in p){const b=p[T],ue=U.target.uuid;ue in b&&(b[ue].dispose(),delete b[ue])}}}function s1(s,e){function n(){let H=!1;const Ce=new $t;let Ee=null;const Ue=new $t(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!H&&(s.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){H=Me},setClear:function(Me,de,Xe,at,Lt){Lt===!0&&(Me*=at,de*=at,Xe*=at),Ce.set(Me,de,Xe,at),Ue.equals(Ce)===!1&&(s.clearColor(Me,de,Xe,at),Ue.copy(Ce))},reset:function(){H=!1,Ee=null,Ue.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,Ee=null,Ue=null,Me=null;return{setReversed:function(de){if(Ce!==de){const Xe=e.get("EXT_clip_control");de?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ce=de;const at=Me;Me=null,this.setClear(at)}},getReversed:function(){return Ce},setTest:function(de){de?he(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(de){Ee!==de&&!H&&(s.depthMask(de),Ee=de)},setFunc:function(de){if(Ce&&(de=k_[de]),Ue!==de){switch(de){case df:s.depthFunc(s.NEVER);break;case hf:s.depthFunc(s.ALWAYS);break;case pf:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case mf:s.depthFunc(s.EQUAL);break;case gf:s.depthFunc(s.GEQUAL);break;case vf:s.depthFunc(s.GREATER);break;case _f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=de}},setLocked:function(de){H=de},setClear:function(de){Me!==de&&(Me=de,Ce&&(de=1-de),s.clearDepth(de))},reset:function(){H=!1,Ee=null,Ue=null,Me=null,Ce=!1}}}function o(){let H=!1,Ce=null,Ee=null,Ue=null,Me=null,de=null,Xe=null,at=null,Lt=null;return{setTest:function(Et){H||(Et?he(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Et){Ce!==Et&&!H&&(s.stencilMask(Et),Ce=Et)},setFunc:function(Et,Wn,Sn){(Ee!==Et||Ue!==Wn||Me!==Sn)&&(s.stencilFunc(Et,Wn,Sn),Ee=Et,Ue=Wn,Me=Sn)},setOp:function(Et,Wn,Sn){(de!==Et||Xe!==Wn||at!==Sn)&&(s.stencilOp(Et,Wn,Sn),de=Et,Xe=Wn,at=Sn)},setLocked:function(Et){H=Et},setClear:function(Et){Lt!==Et&&(s.clearStencil(Et),Lt=Et)},reset:function(){H=!1,Ce=null,Ee=null,Ue=null,Me=null,de=null,Xe=null,at=null,Lt=null}}}const l=new n,u=new r,d=new o,m=new WeakMap,p=new WeakMap;let v={},_={},g=new WeakMap,y=[],E=null,C=!1,x=null,S=null,R=null,N=null,P=null,I=null,U=null,O=new Ut(0,0,0),T=0,b=!1,ue=null,k=null,Z=null,K=null,ce=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,W=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ee=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ee=W>=2);let se=null,q={};const L=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),me=new $t().fromArray(L),be=new $t().fromArray(V);function Le(H,Ce,Ee,Ue){const Me=new Uint8Array(4),de=s.createTexture();s.bindTexture(H,de),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<Ee;Xe++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Ce+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return de}const ne={};ne[s.TEXTURE_2D]=Le(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),he(s.DEPTH_TEST),u.setFunc(Ws),ct(!1),It(jp),he(s.CULL_FACE),St(qi);function he(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function ge(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function ze(H,Ce){return _[H]!==Ce?(s.bindFramebuffer(H,Ce),_[H]=Ce,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ce),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ke(H,Ce){let Ee=y,Ue=!1;if(H){Ee=g.get(Ce),Ee===void 0&&(Ee=[],g.set(Ce,Ee));const Me=H.textures;if(Ee.length!==Me.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Xe=Me.length;de<Xe;de++)Ee[de]=s.COLOR_ATTACHMENT0+de;Ee.length=Me.length,Ue=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Ee)}function tt(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const Vt={[Qr]:s.FUNC_ADD,[a_]:s.FUNC_SUBTRACT,[o_]:s.FUNC_REVERSE_SUBTRACT};Vt[l_]=s.MIN,Vt[c_]=s.MAX;const dt={[u_]:s.ZERO,[f_]:s.ONE,[d_]:s.SRC_COLOR,[uf]:s.SRC_ALPHA,[__]:s.SRC_ALPHA_SATURATE,[g_]:s.DST_COLOR,[p_]:s.DST_ALPHA,[h_]:s.ONE_MINUS_SRC_COLOR,[ff]:s.ONE_MINUS_SRC_ALPHA,[v_]:s.ONE_MINUS_DST_COLOR,[m_]:s.ONE_MINUS_DST_ALPHA,[x_]:s.CONSTANT_COLOR,[S_]:s.ONE_MINUS_CONSTANT_COLOR,[y_]:s.CONSTANT_ALPHA,[M_]:s.ONE_MINUS_CONSTANT_ALPHA};function St(H,Ce,Ee,Ue,Me,de,Xe,at,Lt,Et){if(H===qi){C===!0&&(ge(s.BLEND),C=!1);return}if(C===!1&&(he(s.BLEND),C=!0),H!==s_){if(H!==x||Et!==b){if((S!==Qr||P!==Qr)&&(s.blendEquation(s.FUNC_ADD),S=Qr,P=Qr),Et)switch(H){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qp:s.blendFunc(s.ONE,s.ONE);break;case Yp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",H);break}else switch(H){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yp:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",H);break}R=null,N=null,I=null,U=null,O.set(0,0,0),T=0,x=H,b=Et}return}Me=Me||Ce,de=de||Ee,Xe=Xe||Ue,(Ce!==S||Me!==P)&&(s.blendEquationSeparate(Vt[Ce],Vt[Me]),S=Ce,P=Me),(Ee!==R||Ue!==N||de!==I||Xe!==U)&&(s.blendFuncSeparate(dt[Ee],dt[Ue],dt[de],dt[Xe]),R=Ee,N=Ue,I=de,U=Xe),(at.equals(O)===!1||Lt!==T)&&(s.blendColor(at.r,at.g,at.b,Lt),O.copy(at),T=Lt),x=H,b=!1}function At(H,Ce){H.side===ji?ge(s.CULL_FACE):he(s.CULL_FACE);let Ee=H.side===In;Ce&&(Ee=!Ee),ct(Ee),H.blending===Hs&&H.transparent===!1?St(qi):St(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ue=H.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),nt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){ue!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ue=H)}function It(H){H!==n_?(he(s.CULL_FACE),H!==k&&(H===jp?s.cullFace(s.BACK):H===i_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),k=H}function B(H){H!==Z&&(ee&&s.lineWidth(H),Z=H)}function nt(H,Ce,Ee){H?(he(s.POLYGON_OFFSET_FILL),(K!==Ce||ce!==Ee)&&(K=Ce,ce=Ee,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,Ee))):ge(s.POLYGON_OFFSET_FILL)}function ut(H){H?he(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function pt(H){H===void 0&&(H=s.TEXTURE0+Q-1),se!==H&&(s.activeTexture(H),se=H)}function Ne(H,Ce,Ee){Ee===void 0&&(se===null?Ee=s.TEXTURE0+Q-1:Ee=se);let Ue=q[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},q[Ee]=Ue),(Ue.type!==H||Ue.texture!==Ce)&&(se!==Ee&&(s.activeTexture(Ee),se=Ee),s.bindTexture(H,Ce||ne[H]),Ue.type=H,Ue.texture=Ce)}function D(){const H=q[se];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function pe(){try{s.texSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ve(){try{s.texSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function He(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function we(){try{s.texStorage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function qe(){try{s.texStorage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function st(){try{s.texImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Ae(H){me.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),me.copy(H))}function Ye(H){be.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function We(H,Ce){let Ee=p.get(Ce);Ee===void 0&&(Ee=new WeakMap,p.set(Ce,Ee));let Ue=Ee.get(H);Ue===void 0&&(Ue=s.getUniformBlockIndex(Ce,H.name),Ee.set(H,Ue))}function Ie(H,Ce){const Ue=p.get(Ce).get(H);m.get(Ce)!==Ue&&(s.uniformBlockBinding(Ce,Ue,H.__bindingPointIndex),m.set(Ce,Ue))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},se=null,q={},_={},g=new WeakMap,y=[],E=null,C=!1,x=null,S=null,R=null,N=null,P=null,I=null,U=null,O=new Ut(0,0,0),T=0,b=!1,ue=null,k=null,Z=null,K=null,ce=null,me.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:he,disable:ge,bindFramebuffer:ze,drawBuffers:ke,useProgram:tt,setBlending:St,setMaterial:At,setFlipSided:ct,setCullFace:It,setLineWidth:B,setPolygonOffset:nt,setScissorTest:ut,activeTexture:pt,bindTexture:Ne,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:st,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:we,texStorage3D:qe,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:He,scissor:Ae,viewport:Ye,reset:ht}}function a1(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,v=new WeakMap;let _;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,M){return y?new OffscreenCanvas(D,M):Wa("canvas")}function C(D,M,X){let pe=1;const ve=Ne(D);if((ve.width>X||ve.height>X)&&(pe=X/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(pe*ve.width),He=Math.floor(pe*ve.height);_===void 0&&(_=E(fe,He));const we=M?E(fe,He):_;return we.width=fe,we.height=He,we.getContext("2d").drawImage(D,0,0,fe,He),ft("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+He+")."),we}else return"data"in D&&ft("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function x(D){return D.generateMipmaps}function S(D){s.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(D,M,X,pe,ve=!1){if(D!==null){if(s[D]!==void 0)return s[D];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=M;if(M===s.RED&&(X===s.FLOAT&&(fe=s.R32F),X===s.HALF_FLOAT&&(fe=s.R16F),X===s.UNSIGNED_BYTE&&(fe=s.R8)),M===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.R8UI),X===s.UNSIGNED_SHORT&&(fe=s.R16UI),X===s.UNSIGNED_INT&&(fe=s.R32UI),X===s.BYTE&&(fe=s.R8I),X===s.SHORT&&(fe=s.R16I),X===s.INT&&(fe=s.R32I)),M===s.RG&&(X===s.FLOAT&&(fe=s.RG32F),X===s.HALF_FLOAT&&(fe=s.RG16F),X===s.UNSIGNED_BYTE&&(fe=s.RG8)),M===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RG8UI),X===s.UNSIGNED_SHORT&&(fe=s.RG16UI),X===s.UNSIGNED_INT&&(fe=s.RG32UI),X===s.BYTE&&(fe=s.RG8I),X===s.SHORT&&(fe=s.RG16I),X===s.INT&&(fe=s.RG32I)),M===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),X===s.UNSIGNED_INT&&(fe=s.RGB32UI),X===s.BYTE&&(fe=s.RGB8I),X===s.SHORT&&(fe=s.RGB16I),X===s.INT&&(fe=s.RGB32I)),M===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),X===s.UNSIGNED_INT&&(fe=s.RGBA32UI),X===s.BYTE&&(fe=s.RGBA8I),X===s.SHORT&&(fe=s.RGBA16I),X===s.INT&&(fe=s.RGBA32I)),M===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),M===s.RGBA){const He=ve?Fl:Tt.getTransfer(pe);X===s.FLOAT&&(fe=s.RGBA32F),X===s.HALF_FLOAT&&(fe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(fe=He===Nt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(D,M){let X;return D?M===null||M===bi||M===Ga?X=s.DEPTH24_STENCIL8:M===wi?X=s.DEPTH32F_STENCIL8:M===Ha&&(X=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===Ga?X=s.DEPTH_COMPONENT24:M===wi?X=s.DEPTH_COMPONENT32F:M===Ha&&(X=s.DEPTH_COMPONENT16),X}function I(D,M){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function U(D){const M=D.target;M.removeEventListener("dispose",U),T(M),M.isVideoTexture&&v.delete(M)}function O(D){const M=D.target;M.removeEventListener("dispose",O),ue(M)}function T(D){const M=r.get(D);if(M.__webglInit===void 0)return;const X=D.source,pe=g.get(X);if(pe){const ve=pe[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(D),Object.keys(pe).length===0&&g.delete(X)}r.remove(D)}function b(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const X=D.source,pe=g.get(X);delete pe[M.__cacheKey],u.memory.textures--}function ue(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let ve=0;ve<M.__webglFramebuffer[pe].length;ve++)s.deleteFramebuffer(M.__webglFramebuffer[pe][ve]);else s.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)s.deleteFramebuffer(M.__webglFramebuffer[pe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=D.textures;for(let pe=0,ve=X.length;pe<ve;pe++){const fe=r.get(X[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(X[pe])}r.remove(D)}let k=0;function Z(){k=0}function K(){const D=k;return D>=o.maxTextures&&ft("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function ce(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function Q(D,M){const X=r.get(D);if(D.isVideoTexture&&ut(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){const pe=D.image;if(pe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(X,D,M);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+M)}function ee(D,M){const X=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){ne(X,D,M);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+M)}function W(D,M){const X=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){ne(X,D,M);return}n.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+M)}function Y(D,M){const X=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){he(X,D,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+M)}const se={[xf]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[Sf]:s.MIRRORED_REPEAT},q={[dn]:s.NEAREST,[T_]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},L={[b_]:s.NEVER,[I_]:s.ALWAYS,[P_]:s.LESS,[fd]:s.LEQUAL,[D_]:s.EQUAL,[dd]:s.GEQUAL,[L_]:s.GREATER,[N_]:s.NOTEQUAL};function V(D,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===Ru||M.magFilter===sl||M.magFilter===es||M.minFilter===Qt||M.minFilter===Ru||M.minFilter===sl||M.minFilter===es)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,se[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,se[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,se[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,q[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==sl&&M.minFilter!==es||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function me(D,M){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",U));const pe=M.source;let ve=g.get(pe);ve===void 0&&(ve={},g.set(pe,ve));const fe=ce(M);if(fe!==D.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),ve[fe].usedTimes++;const He=ve[D.__cacheKey];He!==void 0&&(ve[D.__cacheKey].usedTimes--,He.usedTimes===0&&b(M)),D.__cacheKey=fe,D.__webglTexture=ve[fe].texture}return X}function be(D,M,X){return Math.floor(Math.floor(D/X)/M)}function Le(D,M,X,pe){const fe=D.updateRanges;if(fe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,X,pe,M.data);else{fe.sort((ye,Ae)=>ye.start-Ae.start);let He=0;for(let ye=1;ye<fe.length;ye++){const Ae=fe[He],Ye=fe[ye],We=Ae.start+Ae.count,Ie=be(Ye.start,M.width,4),ht=be(Ae.start,M.width,4);Ye.start<=We+1&&Ie===ht&&be(Ye.start+Ye.count-1,M.width,4)===Ie?Ae.count=Math.max(Ae.count,Ye.start+Ye.count-Ae.start):(++He,fe[He]=Ye)}fe.length=He+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),qe=s.getParameter(s.UNPACK_SKIP_PIXELS),st=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ye=0,Ae=fe.length;ye<Ae;ye++){const Ye=fe[ye],We=Math.floor(Ye.start/4),Ie=Math.ceil(Ye.count/4),ht=We%M.width,H=Math.floor(We/M.width),Ce=Ie,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,ht,H,Ce,Ee,X,pe,M.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,st)}}function ne(D,M,X){let pe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=s.TEXTURE_3D);const ve=me(D,M),fe=M.source;n.bindTexture(pe,D.__webglTexture,s.TEXTURE0+X);const He=r.get(fe);if(fe.version!==He.__version||ve===!0){n.activeTexture(s.TEXTURE0+X);const we=Tt.getPrimaries(Tt.workingColorSpace),qe=M.colorSpace===Cr?null:Tt.getPrimaries(M.colorSpace),st=M.colorSpace===Cr||we===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=C(M.image,!1,o.maxTextureSize);ye=pt(M,ye);const Ae=l.convert(M.format,M.colorSpace),Ye=l.convert(M.type);let We=N(M.internalFormat,Ae,Ye,M.colorSpace,M.isVideoTexture);V(pe,M);let Ie;const ht=M.mipmaps,H=M.isVideoTexture!==!0,Ce=He.__version===void 0||ve===!0,Ee=fe.dataReady,Ue=I(M,ye);if(M.isDepthTexture)We=P(M.format===ts,M.type),Ce&&(H?n.texStorage2D(s.TEXTURE_2D,1,We,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,Ae,Ye,null));else if(M.isDataTexture)if(ht.length>0){H&&Ce&&n.texStorage2D(s.TEXTURE_2D,Ue,We,ht[0].width,ht[0].height);for(let Me=0,de=ht.length;Me<de;Me++)Ie=ht[Me],H?Ee&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,Ye,Ie.data):n.texImage2D(s.TEXTURE_2D,Me,We,Ie.width,Ie.height,0,Ae,Ye,Ie.data);M.generateMipmaps=!1}else H?(Ce&&n.texStorage2D(s.TEXTURE_2D,Ue,We,ye.width,ye.height),Ee&&Le(M,ye,Ae,Ye)):n.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,Ae,Ye,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,We,ht[0].width,ht[0].height,ye.depth);for(let Me=0,de=ht.length;Me<de;Me++)if(Ie=ht[Me],M.format!==pi)if(Ae!==null)if(H){if(Ee)if(M.layerUpdates.size>0){const Xe=_m(Ie.width,Ie.height,M.format,M.type);for(const at of M.layerUpdates){const Lt=Ie.data.subarray(at*Xe/Ie.data.BYTES_PER_ELEMENT,(at+1)*Xe/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,at,Ie.width,Ie.height,1,Ae,Lt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,ye.depth,Ae,Ie.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,We,Ie.width,Ie.height,ye.depth,0,Ie.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,ye.depth,Ae,Ye,Ie.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Me,We,Ie.width,Ie.height,ye.depth,0,Ae,Ye,Ie.data)}else{H&&Ce&&n.texStorage2D(s.TEXTURE_2D,Ue,We,ht[0].width,ht[0].height);for(let Me=0,de=ht.length;Me<de;Me++)Ie=ht[Me],M.format!==pi?Ae!==null?H?Ee&&n.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,Ie.data):n.compressedTexImage2D(s.TEXTURE_2D,Me,We,Ie.width,Ie.height,0,Ie.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,Ye,Ie.data):n.texImage2D(s.TEXTURE_2D,Me,We,Ie.width,Ie.height,0,Ae,Ye,Ie.data)}else if(M.isDataArrayTexture)if(H){if(Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,We,ye.width,ye.height,ye.depth),Ee)if(M.layerUpdates.size>0){const Me=_m(ye.width,ye.height,M.format,M.type);for(const de of M.layerUpdates){const Xe=ye.data.subarray(de*Me/ye.data.BYTES_PER_ELEMENT,(de+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,Ae,Ye,Xe)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ae,Ye,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,We,ye.width,ye.height,ye.depth,0,Ae,Ye,ye.data);else if(M.isData3DTexture)H?(Ce&&n.texStorage3D(s.TEXTURE_3D,Ue,We,ye.width,ye.height,ye.depth),Ee&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ae,Ye,ye.data)):n.texImage3D(s.TEXTURE_3D,0,We,ye.width,ye.height,ye.depth,0,Ae,Ye,ye.data);else if(M.isFramebufferTexture){if(Ce)if(H)n.texStorage2D(s.TEXTURE_2D,Ue,We,ye.width,ye.height);else{let Me=ye.width,de=ye.height;for(let Xe=0;Xe<Ue;Xe++)n.texImage2D(s.TEXTURE_2D,Xe,We,Me,de,0,Ae,Ye,null),Me>>=1,de>>=1}}else if(ht.length>0){if(H&&Ce){const Me=Ne(ht[0]);n.texStorage2D(s.TEXTURE_2D,Ue,We,Me.width,Me.height)}for(let Me=0,de=ht.length;Me<de;Me++)Ie=ht[Me],H?Ee&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ae,Ye,Ie):n.texImage2D(s.TEXTURE_2D,Me,We,Ae,Ye,Ie);M.generateMipmaps=!1}else if(H){if(Ce){const Me=Ne(ye);n.texStorage2D(s.TEXTURE_2D,Ue,We,Me.width,Me.height)}Ee&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ye,ye)}else n.texImage2D(s.TEXTURE_2D,0,We,Ae,Ye,ye);x(M)&&S(pe),He.__version=fe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function he(D,M,X){if(M.image.length!==6)return;const pe=me(D,M),ve=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const fe=r.get(ve);if(ve.version!==fe.__version||pe===!0){n.activeTexture(s.TEXTURE0+X);const He=Tt.getPrimaries(Tt.workingColorSpace),we=M.colorSpace===Cr?null:Tt.getPrimaries(M.colorSpace),qe=M.colorSpace===Cr||He===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const st=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let de=0;de<6;de++)!st&&!ye?Ae[de]=C(M.image[de],!0,o.maxCubemapSize):Ae[de]=ye?M.image[de].image:M.image[de],Ae[de]=pt(M,Ae[de]);const Ye=Ae[0],We=l.convert(M.format,M.colorSpace),Ie=l.convert(M.type),ht=N(M.internalFormat,We,Ie,M.colorSpace),H=M.isVideoTexture!==!0,Ce=fe.__version===void 0||pe===!0,Ee=ve.dataReady;let Ue=I(M,Ye);V(s.TEXTURE_CUBE_MAP,M);let Me;if(st){H&&Ce&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ht,Ye.width,Ye.height);for(let de=0;de<6;de++){Me=Ae[de].mipmaps;for(let Xe=0;Xe<Me.length;Xe++){const at=Me[Xe];M.format!==pi?We!==null?H?Ee&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,0,0,at.width,at.height,We,at.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,ht,at.width,at.height,0,at.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,0,0,at.width,at.height,We,Ie,at.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,ht,at.width,at.height,0,We,Ie,at.data)}}}else{if(Me=M.mipmaps,H&&Ce){Me.length>0&&Ue++;const de=Ne(Ae[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ht,de.width,de.height)}for(let de=0;de<6;de++)if(ye){H?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae[de].width,Ae[de].height,We,Ie,Ae[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ht,Ae[de].width,Ae[de].height,0,We,Ie,Ae[de].data);for(let Xe=0;Xe<Me.length;Xe++){const Lt=Me[Xe].image[de].image;H?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,0,0,Lt.width,Lt.height,We,Ie,Lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,ht,Lt.width,Lt.height,0,We,Ie,Lt.data)}}else{H?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,We,Ie,Ae[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ht,We,Ie,Ae[de]);for(let Xe=0;Xe<Me.length;Xe++){const at=Me[Xe];H?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,0,0,We,Ie,at.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,ht,We,Ie,at.image[de])}}}x(M)&&S(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ge(D,M,X,pe,ve,fe){const He=l.convert(X.format,X.colorSpace),we=l.convert(X.type),qe=N(X.internalFormat,He,we,X.colorSpace),st=r.get(M),ye=r.get(X);if(ye.__renderTarget=M,!st.__hasExternalTextures){const Ae=Math.max(1,M.width>>fe),Ye=Math.max(1,M.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,fe,qe,Ae,Ye,M.depth,0,He,we,null):n.texImage2D(ve,fe,qe,Ae,Ye,0,He,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ve,ye.__webglTexture,0,B(M)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ve,ye.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(D,M,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const pe=M.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,fe=P(M.stencilBuffer,ve),He=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(M),fe,M.width,M.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(M),fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,fe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,D)}else{const pe=M.textures;for(let ve=0;ve<pe.length;ve++){const fe=pe[ve],He=l.convert(fe.format,fe.colorSpace),we=l.convert(fe.type),qe=N(fe.internalFormat,He,we,fe.colorSpace);nt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(M),qe,M.width,M.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(M),qe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,qe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(D,M,X){const pe=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(M.depthTexture);if(ve.__renderTarget=M,(!ve.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pe){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),ve.__webglTexture===void 0){ve.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),V(s.TEXTURE_CUBE_MAP,M.depthTexture);const st=l.convert(M.depthTexture.format),ye=l.convert(M.depthTexture.type);let Ae;M.depthTexture.format===Zi?Ae=s.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(Ae=s.DEPTH24_STENCIL8);for(let Ye=0;Ye<6;Ye++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,Ae,M.width,M.height,0,st,ye,null)}}else Q(M.depthTexture,0);const fe=ve.__webglTexture,He=B(M),we=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,qe=M.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,we,fe,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,qe,we,fe,0);else if(M.depthTexture.format===ts)nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,we,fe,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,qe,we,fe,0);else throw new Error("Unknown depthTexture format")}function tt(D){const M=r.get(D),X=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const ve=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),M.__depthDisposeCallback=ve}M.__boundDepthTexture=pe}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let pe=0;pe<6;pe++)ke(M.__webglFramebuffer[pe],D,pe);else{const pe=D.texture.mipmaps;pe&&pe.length>0?ke(M.__webglFramebuffer[0],D,0):ke(M.__webglFramebuffer,D,0)}else if(X){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=s.createRenderbuffer(),ze(M.__webglDepthbuffer[pe],D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ze(M.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(D,M,X){const pe=r.get(D);M!==void 0&&ge(pe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&tt(D)}function dt(D){const M=D.texture,X=r.get(D),pe=r.get(M);D.addEventListener("dispose",O);const ve=D.textures,fe=D.isWebGLCubeRenderTarget===!0,He=ve.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=M.version,u.memory.textures++),fe){X.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[we]=[];for(let qe=0;qe<M.mipmaps.length;qe++)X.__webglFramebuffer[we][qe]=s.createFramebuffer()}else X.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)X.__webglFramebuffer[we]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(He)for(let we=0,qe=ve.length;we<qe;we++){const st=r.get(ve[we]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&nt(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){const qe=ve[we];X.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[we]);const st=l.convert(qe.format,qe.colorSpace),ye=l.convert(qe.type),Ae=N(qe.internalFormat,st,ye,qe.colorSpace,D.isXRRenderTarget===!0),Ye=B(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ae,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,X.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(X.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),V(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let qe=0;qe<M.mipmaps.length;qe++)ge(X.__webglFramebuffer[we][qe],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe);else ge(X.__webglFramebuffer[we],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(M)&&S(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let we=0,qe=ve.length;we<qe;we++){const st=ve[we],ye=r.get(st);let Ae=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,ye.__webglTexture),V(Ae,st),ge(X.__webglFramebuffer,D,st,s.COLOR_ATTACHMENT0+we,Ae,0),x(st)&&S(Ae)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),V(we,M),M.mipmaps&&M.mipmaps.length>0)for(let qe=0;qe<M.mipmaps.length;qe++)ge(X.__webglFramebuffer[qe],D,M,s.COLOR_ATTACHMENT0,we,qe);else ge(X.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,we,0);x(M)&&S(we),n.unbindTexture()}D.depthBuffer&&tt(D)}function St(D){const M=D.textures;for(let X=0,pe=M.length;X<pe;X++){const ve=M[X];if(x(ve)){const fe=R(D),He=r.get(ve).__webglTexture;n.bindTexture(fe,He),S(fe),n.unbindTexture()}}}const At=[],ct=[];function It(D){if(D.samples>0){if(nt(D)===!1){const M=D.textures,X=D.width,pe=D.height;let ve=s.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(D),we=M.length>1;if(we)for(let st=0;st<M.length;st++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const qe=D.texture.mipmaps;qe&&qe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let st=0;st<M.length;st++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[st]);const ye=r.get(M[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,X,pe,0,0,X,pe,ve,s.NEAREST),m===!0&&(At.length=0,ct.length=0,At.push(s.COLOR_ATTACHMENT0+st),D.depthBuffer&&D.resolveDepthBuffer===!1&&(At.push(fe),ct.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let st=0;st<M.length;st++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,He.__webglColorRenderbuffer[st]);const ye=r.get(M[st]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function B(D){return Math.min(o.maxSamples,D.samples)}function nt(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(D){const M=u.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function pt(D,M){const X=D.colorSpace,pe=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==qs&&X!==Cr&&(Tt.getTransfer(X)===Nt?(pe!==pi||ve!==ti)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",X)),M}function Ne(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=Vt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function o1(s,e){function n(r,o=Cr){let l;const u=Tt.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===od)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===cg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ag)return s.BYTE;if(r===og)return s.SHORT;if(r===Ha)return s.UNSIGNED_SHORT;if(r===sd)return s.INT;if(r===bi)return s.UNSIGNED_INT;if(r===wi)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===ug)return s.ALPHA;if(r===fg)return s.RGB;if(r===pi)return s.RGBA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===dg)return s.RED;if(r===ld)return s.RED_INTEGER;if(r===js)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===ud)return s.RGBA_INTEGER;if(r===Pl||r===Dl||r===Ll||r===Nl)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===Mf||r===Ef||r===wf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ef)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tf||r===Af||r===Cf||r===Rf||r===bf||r===Pf||r===Df)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Tf||r===Af)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Cf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Rf)return l.COMPRESSED_R11_EAC;if(r===bf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Pf)return l.COMPRESSED_RG11_EAC;if(r===Df)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Lf||r===Nf||r===If||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Lf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===If)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ff)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Of)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xf)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jf||r===qf||r===Yf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===jf)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$f||r===Kf||r===Zf||r===Qf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===$f)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Kf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ga?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Mg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new mi({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pi(new $a(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f1 extends $s{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",m=1,p=null,v=null,_=null,g=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",x=new u1,S={},R=n.getContextAttributes();let N=null,P=null;const I=[],U=[],O=new Dt;let T=null;const b=new di;b.viewport=new $t;const ue=new di;ue.viewport=new $t;const k=[b,ue],Z=new Ex;let K=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=I[ne];return he===void 0&&(he=new Fu,I[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=I[ne];return he===void 0&&(he=new Fu,I[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=I[ne];return he===void 0&&(he=new Fu,I[ne]=he),he.getHandSpace()};function Q(ne){const he=U.indexOf(ne.inputSource);if(he===-1)return;const ge=I[he];ge!==void 0&&(ge.update(ne.inputSource,ne.frame,p||u),ge.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ee(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",W);for(let ne=0;ne<I.length;ne++){const he=U[ne];he!==null&&(U[ne]=null,I[ne].disconnect(he))}K=null,ce=null,x.reset();for(const ne in S)delete S[ne];e.setRenderTarget(N),y=null,g=null,_=null,o=null,P=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ze=null,ke=null;R.depth&&(ke=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=R.stencil?ts:Zi,ze=R.stencil?Ga:bi);const tt={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(tt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Ci(g.textureWidth,g.textureHeight,{format:pi,type:ti,depthTexture:new Xa(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ge={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,n,ge),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Ci(y.framebufferWidth,y.framebufferHeight,{format:pi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(ne){for(let he=0;he<ne.removed.length;he++){const ge=ne.removed[he],ze=U.indexOf(ge);ze>=0&&(U[ze]=null,I[ze].disconnect(ge))}for(let he=0;he<ne.added.length;he++){const ge=ne.added[he];let ze=U.indexOf(ge);if(ze===-1){for(let tt=0;tt<I.length;tt++)if(tt>=U.length){U.push(ge),ze=tt;break}else if(U[tt]===null){U[tt]=ge,ze=tt;break}if(ze===-1)break}const ke=I[ze];ke&&ke.connect(ge)}}const Y=new oe,se=new oe;function q(ne,he,ge){Y.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(ge.matrixWorld);const ze=Y.distanceTo(se),ke=he.projectionMatrix.elements,tt=ge.projectionMatrix.elements,Vt=ke[14]/(ke[10]-1),dt=ke[14]/(ke[10]+1),St=(ke[9]+1)/ke[5],At=(ke[9]-1)/ke[5],ct=(ke[8]-1)/ke[0],It=(tt[8]+1)/tt[0],B=Vt*ct,nt=Vt*It,ut=ze/(-ct+It),pt=ut*-ct;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(pt),ne.translateZ(ut),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ke[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ne=Vt+ut,D=dt+ut,M=B-pt,X=nt+(ze-pt),pe=St*dt/D*Ne,ve=At*dt/D*Ne;ne.projectionMatrix.makePerspective(M,X,pe,ve,Ne,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function L(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let he=ne.near,ge=ne.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),Z.near=ue.near=b.near=he,Z.far=ue.far=b.far=ge,(K!==Z.near||ce!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),K=Z.near,ce=Z.far),Z.layers.mask=ne.layers.mask|6,b.layers.mask=Z.layers.mask&-5,ue.layers.mask=Z.layers.mask&-3;const ze=ne.parent,ke=Z.cameras;L(Z,ze);for(let tt=0;tt<ke.length;tt++)L(ke[tt],ze);ke.length===2?q(Z,b,ue):Z.projectionMatrix.copy(b.projectionMatrix),V(ne,Z,ze)};function V(ne,he,ge){ge===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(ge.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Jf*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(ne){return S[ne]};let me=null;function be(ne,he){if(v=he.getViewerPose(p||u),E=he,v!==null){const ge=v.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let ze=!1;ge.length!==Z.cameras.length&&(Z.cameras.length=0,ze=!0);for(let dt=0;dt<ge.length;dt++){const St=ge[dt];let At=null;if(y!==null)At=y.getViewport(St);else{const It=_.getViewSubImage(g,St);At=It.viewport,dt===0&&(e.setRenderTargetTextures(P,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(P))}let ct=k[dt];ct===void 0&&(ct=new di,ct.layers.enable(dt),ct.viewport=new $t,k[dt]=ct),ct.matrix.fromArray(St.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(St.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(At.x,At.y,At.width,At.height),dt===0&&(Z.matrix.copy(ct.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ze===!0&&Z.cameras.push(ct)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const dt=_.getDepthInformation(ge[0]);dt&&dt.isValid&&dt.texture&&x.init(dt,o.renderState)}if(ke&&ke.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<ge.length;dt++){const St=ge[dt].camera;if(St){let At=S[St];At||(At=new Mg,S[St]=At);const ct=_.getCameraImage(St);At.sourceTexture=ct}}}}for(let ge=0;ge<I.length;ge++){const ze=U[ge],ke=I[ge];ze!==null&&ke!==void 0&&ke.update(ze,he,p||u)}me&&me(ne,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),E=null}const Le=new Tg;Le.setAnimationLoop(be),this.setAnimationLoop=function(ne){me=ne},this.dispose=function(){}}}const Kr=new Qi,d1=new Jt;function h1(s,e){function n(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,Eg(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,R,N,P){S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),v(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),g(x,S),S.isMeshPhysicalMaterial&&y(x,S,P)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),C(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?m(x,S,R,N):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,n(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,n(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,n(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===In&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,n(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===In&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,n(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,n(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=e.get(S),N=R.envMap,P=R.envMapRotation;N&&(x.envMap.value=N,Kr.copy(P),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),x.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(Kr)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,n(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function m(x,S,R,N){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=N*.5,S.map&&(x.map.value=S.map,n(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,n(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,n(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,n(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function v(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function g(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===In&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function C(x,S){const R=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function p1(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,N){const P=N.program;r.uniformBlockBinding(R,P)}function p(R,N){let P=o[R.id];P===void 0&&(E(R),P=v(R),o[R.id]=P,R.addEventListener("dispose",x));const I=N.program;r.updateUBOMapping(R,I);const U=e.render.frame;l[R.id]!==U&&(g(R),l[R.id]=U)}function v(R){const N=_();R.__bindingPointIndex=N;const P=s.createBuffer(),I=R.__size,U=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function _(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const N=o[R.id],P=R.uniforms,I=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let U=0,O=P.length;U<O;U++){const T=Array.isArray(P[U])?P[U]:[P[U]];for(let b=0,ue=T.length;b<ue;b++){const k=T[b];if(y(k,U,b,I)===!0){const Z=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let Q=0;Q<K.length;Q++){const ee=K[Q],W=C(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,Z+ce,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):(ee.toArray(k.__data,ce),ce+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(R,N,P,I){const U=R.value,O=N+"_"+P;if(I[O]===void 0)return typeof U=="number"||typeof U=="boolean"?I[O]=U:I[O]=U.clone(),!0;{const T=I[O];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return I[O]=U,!0}else if(T.equals(U)===!1)return T.copy(U),!0}return!1}function E(R){const N=R.uniforms;let P=0;const I=16;for(let O=0,T=N.length;O<T;O++){const b=Array.isArray(N[O])?N[O]:[N[O]];for(let ue=0,k=b.length;ue<k;ue++){const Z=b[ue],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let ce=0,Q=K.length;ce<Q;ce++){const ee=K[ce],W=C(ee),Y=P%I,se=Y%W.boundary,q=Y+se;P+=se,q!==0&&I-q<W.storage&&(P+=I-q),Z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=W.storage}}}const U=P%I;return U>0&&(P+=I-U),R.__size=P,R.__cache={},this}function C(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",R),N}function x(R){const N=R.target;N.removeEventListener("dispose",x);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:m,update:p,dispose:S}}const m1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function g1(){return Mi===null&&(Mi=new ax(m1,16,16,js,Ki),Mi.name="DFG_LUT",Mi.minFilter=Qt,Mi.magFilter=Qt,Mi.wrapS=Hn,Mi.wrapT=Hn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class v1{constructor(e={}){const{canvas:n=F_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ti}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=y,x=new Set([ud,cd,ld]),S=new Set([ti,bi,Ha,Ga,ad,od]),R=new Uint32Array(4),N=new Int32Array(4);let P=null,I=null;const U=[],O=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let ue=!1;this._outputColorSpace=ei;let k=0,Z=0,K=null,ce=-1,Q=null;const ee=new $t,W=new $t;let Y=null;const se=new Ut(0);let q=0,L=n.width,V=n.height,me=1,be=null,Le=null;const ne=new $t(0,0,L,V),he=new $t(0,0,L,V);let ge=!1;const ze=new Sg;let ke=!1,tt=!1;const Vt=new Jt,dt=new oe,St=new $t,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function It(){return K===null?me:1}let B=r;function nt(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rd}`),n.addEventListener("webglcontextlost",Xe,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),B===null){const j="webgl2";if(B=nt(j,A),B===null)throw nt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let ut,pt,Ne,D,M,X,pe,ve,fe,He,we,qe,st,ye,Ae,Ye,We,Ie,ht,H,Ce,Ee,Ue;function Me(){ut=new vM(B),ut.init(),Ce=new o1(B,ut),pt=new cM(B,ut,e,Ce),Ne=new s1(B,ut),pt.reversedDepthBuffer&&g&&Ne.buffers.depth.setReversed(!0),D=new SM(B),M=new XE,X=new a1(B,ut,Ne,M,pt,Ce,D),pe=new gM(b),ve=new Tx(B),Ee=new oM(B,ve),fe=new _M(B,ve,D,Ee),He=new MM(B,fe,ve,Ee,D),Ie=new yM(B,pt,X),Ae=new uM(M),we=new WE(b,pe,ut,pt,Ee,Ae),qe=new h1(b,M),st=new qE,ye=new JE(ut),We=new aM(b,pe,Ne,He,E,m),Ye=new r1(b,He,pt),Ue=new p1(B,D,pt,Ne),ht=new lM(B,ut,D),H=new xM(B,ut,D),D.programs=we.programs,b.capabilities=pt,b.extensions=ut,b.properties=M,b.renderLists=st,b.shadowMap=Ye,b.state=Ne,b.info=D}Me(),C!==ti&&(T=new wM(C,n.width,n.height,o,l));const de=new f1(b,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(L,V,!1))},this.getSize=function(A){return A.set(L,V)},this.setSize=function(A,j,le=!0){if(de.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,V=j,n.width=Math.floor(A*me),n.height=Math.floor(j*me),le===!0&&(n.style.width=A+"px",n.style.height=j+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(L*me,V*me).floor()},this.setDrawingBufferSize=function(A,j,le){L=A,V=j,me=le,n.width=Math.floor(A*le),n.height=Math.floor(j*le),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,j,le,ie){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,j,le,ie),Ne.viewport(ee.copy(ne).multiplyScalar(me).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,j,le,ie){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,j,le,ie),Ne.scissor(W.copy(he).multiplyScalar(me).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){Ne.setScissorTest(ge=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Le=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,le=!0){let ie=0;if(A){let J=!1;if(K!==null){const Pe=K.texture.format;J=x.has(Pe)}if(J){const Pe=K.texture.type,Ve=S.has(Pe),Re=We.getClearColor(),Oe=We.getClearAlpha(),Qe=Re.r,et=Re.g,mt=Re.b;Ve?(R[0]=Qe,R[1]=et,R[2]=mt,R[3]=Oe,B.clearBufferuiv(B.COLOR,0,R)):(N[0]=Qe,N[1]=et,N[2]=mt,N[3]=Oe,B.clearBufferiv(B.COLOR,0,N))}else ie|=B.COLOR_BUFFER_BIT}j&&(ie|=B.DEPTH_BUFFER_BIT),le&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Xe,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),We.dispose(),st.dispose(),ye.dispose(),M.dispose(),pe.dispose(),He.dispose(),Ee.dispose(),Ue.dispose(),we.dispose(),de.dispose(),de.removeEventListener("sessionstart",er),de.removeEventListener("sessionend",Pr),Xn.stop()};function Xe(A){A.preventDefault(),em("WebGLRenderer: Context Lost."),ue=!0}function at(){em("WebGLRenderer: Context Restored."),ue=!1;const A=D.autoReset,j=Ye.enabled,le=Ye.autoUpdate,ie=Ye.needsUpdate,J=Ye.type;Me(),D.autoReset=A,Ye.enabled=j,Ye.autoUpdate=le,Ye.needsUpdate=ie,Ye.type=J}function Lt(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Et(A){const j=A.target;j.removeEventListener("dispose",Et),Wn(j)}function Wn(A){Sn(A),M.remove(A)}function Sn(A){const j=M.get(A).programs;j!==void 0&&(j.forEach(function(le){we.releaseProgram(le)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,le,ie,J,Pe){j===null&&(j=At);const Ve=J.isMesh&&J.matrixWorld.determinant()<0,Re=Ja(A,j,le,ie,J);Ne.setMaterial(ie,Ve);let Oe=le.index,Qe=1;if(ie.wireframe===!0){if(Oe=fe.getWireframeAttribute(le),Oe===void 0)return;Qe=2}const et=le.drawRange,mt=le.attributes.position;let Je=et.start*Qe,Pt=(et.start+et.count)*Qe;Pe!==null&&(Je=Math.max(Je,Pe.start*Qe),Pt=Math.min(Pt,(Pe.start+Pe.count)*Qe)),Oe!==null?(Je=Math.max(Je,0),Pt=Math.min(Pt,Oe.count)):mt!=null&&(Je=Math.max(Je,0),Pt=Math.min(Pt,mt.count));const Ot=Pt-Je;if(Ot<0||Ot===1/0)return;Ee.setup(J,ie,Re,le,Oe);let Ft,Mt=ht;if(Oe!==null&&(Ft=ve.get(Oe),Mt=H,Mt.setIndex(Ft)),J.isMesh)ie.wireframe===!0?(Ne.setLineWidth(ie.wireframeLinewidth*It()),Mt.setMode(B.LINES)):Mt.setMode(B.TRIANGLES);else if(J.isLine){let jt=ie.linewidth;jt===void 0&&(jt=1),Ne.setLineWidth(jt*It()),J.isLineSegments?Mt.setMode(B.LINES):J.isLineLoop?Mt.setMode(B.LINE_LOOP):Mt.setMode(B.LINE_STRIP)}else J.isPoints?Mt.setMode(B.POINTS):J.isSprite&&Mt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))Mt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const jt=J._multiDrawStarts,Ke=J._multiDrawCounts,yn=J._multiDrawCount,xt=Oe?ve.get(Oe).bytesPerElement:1,Tn=M.get(ie).currentProgram.getUniforms();for(let An=0;An<yn;An++)Tn.setValue(B,"_gl_DrawID",An),Mt.render(jt[An]/xt,Ke[An])}else if(J.isInstancedMesh)Mt.renderInstances(Je,Ot,J.count);else if(le.isInstancedBufferGeometry){const jt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ke=Math.min(le.instanceCount,jt);Mt.renderInstances(Je,Ot,Ke)}else Mt.render(Je,Ot)};function is(A,j,le){A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,Lr(A,j,le),A.side=br,A.needsUpdate=!0,Lr(A,j,le),A.side=ji):Lr(A,j,le)}this.compile=function(A,j,le=null){le===null&&(le=A),I=ye.get(le),I.init(j),O.push(I),le.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),A!==le&&A.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),I.setupLights();const ie=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Ve=0;Ve<Pe.length;Ve++){const Re=Pe[Ve];is(Re,le,J),ie.add(Re)}else is(Pe,le,J),ie.add(Pe)}),I=O.pop(),ie},this.compileAsync=function(A,j,le=null){const ie=this.compile(A,j,le);return new Promise(J=>{function Pe(){if(ie.forEach(function(Ve){M.get(Ve).currentProgram.isReady()&&ie.delete(Ve)}),ie.size===0){J(A);return}setTimeout(Pe,10)}ut.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Di=null;function Gl(A){Di&&Di(A)}function er(){Xn.stop()}function Pr(){Xn.start()}const Xn=new Tg;Xn.setAnimationLoop(Gl),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Di=A,de.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},de.addEventListener("sessionstart",er),de.addEventListener("sessionend",Pr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,ie=T!==null&&(K===null||le)&&T.begin(b,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(j),j=de.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,j,K),I=ye.get(A,O.length),I.init(j),O.push(I),Vt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ze.setFromProjectionMatrix(Vt,Ti,j.reversedDepth),tt=this.localClippingEnabled,ke=Ae.init(this.clippingPlanes,tt),P=st.get(A,U.length),P.init(),U.push(P),de.enabled===!0&&de.isPresenting===!0){const Ve=b.xr.getDepthSensingMesh();Ve!==null&&Dr(Ve,j,-1/0,b.sortObjects)}Dr(A,j,0,b.sortObjects),P.finish(),b.sortObjects===!0&&P.sort(be,Le),ct=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ct&&We.addToRenderList(P,A),this.info.render.frame++,ke===!0&&Ae.beginShadows();const J=I.state.shadowsArray;if(Ye.render(J,A,j),ke===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&T.hasRenderPass())===!1){const Ve=P.opaque,Re=P.transmissive;if(I.setupLights(),j.isArrayCamera){const Oe=j.cameras;if(Re.length>0)for(let Qe=0,et=Oe.length;Qe<et;Qe++){const mt=Oe[Qe];Za(Ve,Re,A,mt)}ct&&We.render(A);for(let Qe=0,et=Oe.length;Qe<et;Qe++){const mt=Oe[Qe];Ka(P,A,mt,mt.viewport)}}else Re.length>0&&Za(Ve,Re,A,j),ct&&We.render(A),Ka(P,A,j)}K!==null&&Z===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),ie&&T.end(b),A.isScene===!0&&A.onAfterRender(b,A,j),Ee.resetDefaultState(),ce=-1,Q=null,O.pop(),O.length>0?(I=O[O.length-1],ke===!0&&Ae.setGlobalState(b.clippingPlanes,I.state.camera)):I=null,U.pop(),U.length>0?P=U[U.length-1]:P=null};function Dr(A,j,le,ie){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ze.intersectsSprite(A)){ie&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Vt);const Ve=He.update(A),Re=A.material;Re.visible&&P.push(A,Ve,Re,le,St.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ze.intersectsObject(A))){const Ve=He.update(A),Re=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),St.copy(Ve.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(Vt)),Array.isArray(Re)){const Oe=Ve.groups;for(let Qe=0,et=Oe.length;Qe<et;Qe++){const mt=Oe[Qe],Je=Re[mt.materialIndex];Je&&Je.visible&&P.push(A,Ve,Je,le,St.z,mt)}}else Re.visible&&P.push(A,Ve,Re,le,St.z,null)}}const Pe=A.children;for(let Ve=0,Re=Pe.length;Ve<Re;Ve++)Dr(Pe[Ve],j,le,ie)}function Ka(A,j,le,ie){const{opaque:J,transmissive:Pe,transparent:Ve}=A;I.setupLightsView(le),ke===!0&&Ae.setGlobalState(b.clippingPlanes,le),ie&&Ne.viewport(ee.copy(ie)),J.length>0&&rs(J,j,le),Pe.length>0&&rs(Pe,j,le),Ve.length>0&&rs(Ve,j,le),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Za(A,j,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ie.id]===void 0){const Je=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ie.id]=new Ci(1,1,{generateMipmaps:!0,type:Je?Ki:ti,minFilter:es,samples:pt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Pe=I.state.transmissionRenderTarget[ie.id],Ve=ie.viewport||ee;Pe.setSize(Ve.z*b.transmissionResolutionScale,Ve.w*b.transmissionResolutionScale);const Re=b.getRenderTarget(),Oe=b.getActiveCubeFace(),Qe=b.getActiveMipmapLevel();b.setRenderTarget(Pe),b.getClearColor(se),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),ct&&We.render(le);const et=b.toneMapping;b.toneMapping=Ai;const mt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),I.setupLightsView(ie),ke===!0&&Ae.setGlobalState(b.clippingPlanes,ie),rs(A,le,ie),X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Pt=0,Ot=j.length;Pt<Ot;Pt++){const Ft=j[Pt],{object:Mt,geometry:jt,material:Ke,group:yn}=Ft;if(Ke.side===ji&&Mt.layers.test(ie.layers)){const xt=Ke.side;Ke.side=In,Ke.needsUpdate=!0,gi(Mt,le,ie,jt,Ke,yn),Ke.side=xt,Ke.needsUpdate=!0,Je=!0}}Je===!0&&(X.updateMultisampleRenderTarget(Pe),X.updateRenderTargetMipmap(Pe))}b.setRenderTarget(Re,Oe,Qe),b.setClearColor(se,q),mt!==void 0&&(ie.viewport=mt),b.toneMapping=et}function rs(A,j,le){const ie=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Pe=A.length;J<Pe;J++){const Ve=A[J],{object:Re,geometry:Oe,group:Qe}=Ve;let et=Ve.material;et.allowOverride===!0&&ie!==null&&(et=ie),Re.layers.test(le.layers)&&gi(Re,j,le,Oe,et,Qe)}}function gi(A,j,le,ie,J,Pe){A.onBeforeRender(b,j,le,ie,J,Pe),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(b,j,le,ie,A,Pe),J.transparent===!0&&J.side===ji&&J.forceSinglePass===!1?(J.side=In,J.needsUpdate=!0,b.renderBufferDirect(le,j,ie,J,A,Pe),J.side=br,J.needsUpdate=!0,b.renderBufferDirect(le,j,ie,J,A,Pe),J.side=ji):b.renderBufferDirect(le,j,ie,J,A,Pe),A.onAfterRender(b,j,le,ie,J,Pe)}function Lr(A,j,le){j.isScene!==!0&&(j=At);const ie=M.get(A),J=I.state.lights,Pe=I.state.shadowsArray,Ve=J.state.version,Re=we.getParameters(A,J.state,Pe,j,le),Oe=we.getProgramCacheKey(Re);let Qe=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,ie.fog=j.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=pe.get(A.envMap||ie.environment,et),ie.envMapRotation=ie.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Et),Qe=new Map,ie.programs=Qe);let mt=Qe.get(Oe);if(mt!==void 0){if(ie.currentProgram===mt&&ie.lightsStateVersion===Ve)return Qa(A,Re),mt}else Re.uniforms=we.getUniforms(A),A.onBeforeCompile(Re,b),mt=we.acquireProgram(Re,Oe),Qe.set(Oe,mt),ie.uniforms=Re.uniforms;const Je=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ae.uniform),Qa(A,Re),ie.needsLights=to(A),ie.lightsStateVersion=Ve,ie.needsLights&&(Je.ambientLightColor.value=J.state.ambient,Je.lightProbe.value=J.state.probe,Je.directionalLights.value=J.state.directional,Je.directionalLightShadows.value=J.state.directionalShadow,Je.spotLights.value=J.state.spot,Je.spotLightShadows.value=J.state.spotShadow,Je.rectAreaLights.value=J.state.rectArea,Je.ltc_1.value=J.state.rectAreaLTC1,Je.ltc_2.value=J.state.rectAreaLTC2,Je.pointLights.value=J.state.point,Je.pointLightShadows.value=J.state.pointShadow,Je.hemisphereLights.value=J.state.hemi,Je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Je.spotLightMatrix.value=J.state.spotLightMatrix,Je.spotLightMap.value=J.state.spotLightMap,Je.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=mt,ie.uniformsList=null,mt}function Js(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Il.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Qa(A,j){const le=M.get(A);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function Ja(A,j,le,ie,J){j.isScene!==!0&&(j=At),X.resetTextureUnits();const Pe=j.fog,Ve=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?j.environment:null,Re=K===null?b.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:qs,Oe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Qe=pe.get(ie.envMap||Ve,Oe),et=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,mt=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!le.morphAttributes.position,Pt=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let Ft=Ai;ie.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=b.toneMapping);const Mt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,jt=Mt!==void 0?Mt.length:0,Ke=M.get(ie),yn=I.state.lights;if(ke===!0&&(tt===!0||A!==Q)){const qt=A===Q&&ie.id===ce;Ae.setState(ie,A,qt)}let xt=!1;ie.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==yn.state.version||Ke.outputColorSpace!==Re||J.isBatchedMesh&&Ke.batching===!1||!J.isBatchedMesh&&Ke.batching===!0||J.isBatchedMesh&&Ke.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ke.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ke.instancingMorph===!1&&J.morphTexture!==null||Ke.envMap!==Qe||ie.fog===!0&&Ke.fog!==Pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ae.numPlanes||Ke.numIntersection!==Ae.numIntersection)||Ke.vertexAlphas!==et||Ke.vertexTangents!==mt||Ke.morphTargets!==Je||Ke.morphNormals!==Pt||Ke.morphColors!==Ot||Ke.toneMapping!==Ft||Ke.morphTargetsCount!==jt)&&(xt=!0):(xt=!0,Ke.__version=ie.version);let Tn=Ke.currentProgram;xt===!0&&(Tn=Lr(ie,j,J));let An=!1,Un=!1,tr=!1;const bt=Tn.getUniforms(),ot=Ke.uniforms;if(Ne.useProgram(Tn.program)&&(An=!0,Un=!0,tr=!0),ie.id!==ce&&(ce=ie.id,Un=!0),An||Q!==A){Ne.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(B,"projectionMatrix",A.projectionMatrix),bt.setValue(B,"viewMatrix",A.matrixWorldInverse);const jn=bt.map.cameraPosition;jn!==void 0&&jn.setValue(B,dt.setFromMatrixPosition(A.matrixWorld)),pt.logarithmicDepthBuffer&&bt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&bt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Un=!0,tr=!0)}if(Ke.needsLights&&(yn.state.directionalShadowMap.length>0&&bt.setValue(B,"directionalShadowMap",yn.state.directionalShadowMap,X),yn.state.spotShadowMap.length>0&&bt.setValue(B,"spotShadowMap",yn.state.spotShadowMap,X),yn.state.pointShadowMap.length>0&&bt.setValue(B,"pointShadowMap",yn.state.pointShadowMap,X)),J.isSkinnedMesh){bt.setOptional(B,J,"bindMatrix"),bt.setOptional(B,J,"bindMatrixInverse");const qt=J.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),bt.setValue(B,"boneTexture",qt.boneTexture,X))}J.isBatchedMesh&&(bt.setOptional(B,J,"batchingTexture"),bt.setValue(B,"batchingTexture",J._matricesTexture,X),bt.setOptional(B,J,"batchingIdTexture"),bt.setValue(B,"batchingIdTexture",J._indirectTexture,X),bt.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(B,"batchingColorTexture",J._colorsTexture,X));const ni=le.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Ie.update(J,le,Tn),(Un||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,bt.setValue(B,"receiveShadow",J.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&j.environment!==null&&(ot.envMapIntensity.value=j.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=g1()),Un&&(bt.setValue(B,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&eo(ot,tr),Pe&&ie.fog===!0&&qe.refreshFogUniforms(ot,Pe),qe.refreshMaterialUniforms(ot,ie,me,V,I.state.transmissionRenderTarget[A.id]),Il.upload(B,Js(Ke),ot,X)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Il.upload(B,Js(Ke),ot,X),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&bt.setValue(B,"center",J.center),bt.setValue(B,"modelViewMatrix",J.modelViewMatrix),bt.setValue(B,"normalMatrix",J.normalMatrix),bt.setValue(B,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const qt=ie.uniformsGroups;for(let jn=0,Li=qt.length;jn<Li;jn++){const ea=qt[jn];Ue.update(ea,Tn),Ue.bind(ea,Tn)}}return Tn}function eo(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function to(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,j,le){const ie=M.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=j,M.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const le=M.get(A);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const no=B.createFramebuffer();this.setRenderTarget=function(A,j=0,le=0){K=A,k=j,Z=le;let ie=null,J=!1,Pe=!1;if(A){const Re=M.get(A);if(Re.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(B.FRAMEBUFFER,Re.__webglFramebuffer),ee.copy(A.viewport),W.copy(A.scissor),Y=A.scissorTest,Ne.viewport(ee),Ne.scissor(W),Ne.setScissorTest(Y),ce=-1;return}else if(Re.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(Re.__hasExternalTextures)X.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Re.__boundDepthTexture!==et){if(et!==null&&M.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Pe=!0);const Qe=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?ie=Qe[j][le]:ie=Qe[j],J=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?ie=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[le]:ie=Qe,ee.copy(A.viewport),W.copy(A.scissor),Y=A.scissorTest}else ee.copy(ne).multiplyScalar(me).floor(),W.copy(he).multiplyScalar(me).floor(),Y=ge;if(le!==0&&(ie=no),Ne.bindFramebuffer(B.FRAMEBUFFER,ie)&&Ne.drawBuffers(A,ie),Ne.viewport(ee),Ne.scissor(W),Ne.setScissorTest(Y),J){const Re=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re.__webglTexture,le)}else if(Pe){const Re=j;for(let Oe=0;Oe<A.textures.length;Oe++){const Qe=M.get(A.textures[Oe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Oe,Qe.__webglTexture,le,Re)}}else if(A!==null&&le!==0){const Re=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Re.__webglTexture,le)}ce=-1},this.readRenderTargetPixels=function(A,j,le,ie,J,Pe,Ve,Re=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Oe=Oe[Ve]),Oe){Ne.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const Qe=A.textures[Re],et=Qe.format,mt=Qe.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!pt.textureFormatReadable(et)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(mt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ie&&le>=0&&le<=A.height-J&&B.readPixels(j,le,ie,J,Ce.convert(et),Ce.convert(mt),Pe)}finally{const Qe=K!==null?M.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,j,le,ie,J,Pe,Ve,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Oe=Oe[Ve]),Oe)if(j>=0&&j<=A.width-ie&&le>=0&&le<=A.height-J){Ne.bindFramebuffer(B.FRAMEBUFFER,Oe);const Qe=A.textures[Re],et=Qe.format,mt=Qe.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!pt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Je),B.bufferData(B.PIXEL_PACK_BUFFER,Pe.byteLength,B.STREAM_READ),B.readPixels(j,le,ie,J,Ce.convert(et),Ce.convert(mt),0);const Pt=K!==null?M.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,Pt);const Ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await O_(B,Ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Pe),B.deleteBuffer(Je),B.deleteSync(Ot),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,le=0){const ie=Math.pow(2,-le),J=Math.floor(A.image.width*ie),Pe=Math.floor(A.image.height*ie),Ve=j!==null?j.x:0,Re=j!==null?j.y:0;X.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,le,0,0,Ve,Re,J,Pe),Ne.unbindTexture()};const Wl=B.createFramebuffer(),Xl=B.createFramebuffer();this.copyTextureToTexture=function(A,j,le=null,ie=null,J=0,Pe=0){let Ve,Re,Oe,Qe,et,mt,Je,Pt,Ot;const Ft=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(le!==null)Ve=le.max.x-le.min.x,Re=le.max.y-le.min.y,Oe=le.isBox3?le.max.z-le.min.z:1,Qe=le.min.x,et=le.min.y,mt=le.isBox3?le.min.z:0;else{const ot=Math.pow(2,-J);Ve=Math.floor(Ft.width*ot),Re=Math.floor(Ft.height*ot),A.isDataArrayTexture?Oe=Ft.depth:A.isData3DTexture?Oe=Math.floor(Ft.depth*ot):Oe=1,Qe=0,et=0,mt=0}ie!==null?(Je=ie.x,Pt=ie.y,Ot=ie.z):(Je=0,Pt=0,Ot=0);const Mt=Ce.convert(j.format),jt=Ce.convert(j.type);let Ke;j.isData3DTexture?(X.setTexture3D(j,0),Ke=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(X.setTexture2DArray(j,0),Ke=B.TEXTURE_2D_ARRAY):(X.setTexture2D(j,0),Ke=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const yn=B.getParameter(B.UNPACK_ROW_LENGTH),xt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Tn=B.getParameter(B.UNPACK_SKIP_PIXELS),An=B.getParameter(B.UNPACK_SKIP_ROWS),Un=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),B.pixelStorei(B.UNPACK_SKIP_ROWS,et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,mt);const tr=A.isDataArrayTexture||A.isData3DTexture,bt=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const ot=M.get(A),ni=M.get(j),qt=M.get(ot.__renderTarget),jn=M.get(ni.__renderTarget);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Li=0;Li<Oe;Li++)tr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(A).__webglTexture,J,mt+Li),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(j).__webglTexture,Pe,Ot+Li)),B.blitFramebuffer(Qe,et,Ve,Re,Je,Pt,Ve,Re,B.DEPTH_BUFFER_BIT,B.NEAREST);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||M.has(A)){const ot=M.get(A),ni=M.get(j);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,Wl),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,Xl);for(let qt=0;qt<Oe;qt++)tr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ot.__webglTexture,J,mt+qt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ot.__webglTexture,J),bt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ni.__webglTexture,Pe,Ot+qt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ni.__webglTexture,Pe),J!==0?B.blitFramebuffer(Qe,et,Ve,Re,Je,Pt,Ve,Re,B.COLOR_BUFFER_BIT,B.NEAREST):bt?B.copyTexSubImage3D(Ke,Pe,Je,Pt,Ot+qt,Qe,et,Ve,Re):B.copyTexSubImage2D(Ke,Pe,Je,Pt,Qe,et,Ve,Re);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ke,Pe,Je,Pt,Ot,Ve,Re,Oe,Mt,jt,Ft.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Ke,Pe,Je,Pt,Ot,Ve,Re,Oe,Mt,Ft.data):B.texSubImage3D(Ke,Pe,Je,Pt,Ot,Ve,Re,Oe,Mt,jt,Ft):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Pe,Je,Pt,Ve,Re,Mt,jt,Ft.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Pe,Je,Pt,Ft.width,Ft.height,Mt,Ft.data):B.texSubImage2D(B.TEXTURE_2D,Pe,Je,Pt,Ve,Re,Mt,jt,Ft);B.pixelStorei(B.UNPACK_ROW_LENGTH,yn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Tn),B.pixelStorei(B.UNPACK_SKIP_ROWS,An),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Un),Pe===0&&j.generateMipmaps&&B.generateMipmap(Ke),Ne.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){k=0,Z=0,K=null,Ne.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const _1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,x1=`
  precision highp float;

  uniform sampler2D uTexture;
  uniform sampler2D uDepthMap;
  uniform vec2  uMouse;          // smoothed mouse/tilt  –1…1
  uniform float uIntensity;      // depth parallax strength
  uniform float uTime;
  uniform vec2  uResolution;

  // Panorama uniforms
  uniform float uPanoMode;       // 0 = normal, 1 = panoramic
  uniform float uImageAspect;    // source image  w / h
  uniform float uViewportAspect; // viewport  w / h

  varying vec2 vUv;

  // ─── Tuning ───
  const float ZOOM_RESERVE       = 0.07;
  const float EXPANSION_STRENGTH = 0.5;
  const float DEPTH_CONTRAST     = 1.3;
  const float DISOCCLUDE_THRESH  = 0.055;
  const float FILL_BLEND_MAX     = 0.65;
  const float AO_STRENGTH        = 0.35;
  const float DOF_STRENGTH       = 0.25;

  // ─── Depth (5-tap blur) ───
  float sampleDepth(vec2 uv) {
    vec2 c = clamp(uv, vec2(0.001), vec2(0.999));
    float t = 0.0018;
    float d  = texture2D(uDepthMap, c).r;
    float dL = texture2D(uDepthMap, c + vec2(-t, 0.0)).r;
    float dR = texture2D(uDepthMap, c + vec2( t, 0.0)).r;
    float dU = texture2D(uDepthMap, c + vec2(0.0,  t)).r;
    float dD = texture2D(uDepthMap, c + vec2(0.0, -t)).r;
    return (d * 2.0 + dL + dR + dU + dD) / 6.0;
  }

  // ─── Panorama mapping ───
  // Maps viewport UV (0-1) to a scrollable window in the panorama image.
  // uMouse.x drives horizontal pan; uMouse.y adds slight vertical.
  // Pan range is softened so the effect stays subtle — you see a gentle
  // drift rather than a full panorama sweep.
  vec2 panoMap(vec2 uv) {
    if (uPanoMode < 0.5) return uv;

    float visFrac = clamp(uViewportAspect / uImageAspect, 0.05, 1.0);
    float rawPanRange = max(1.0 - visFrac, 0.0);

    // Cap effective pan range so we never sweep more than ~40% of the
    // hidden region.  This keeps the effect subtle on wide panos.
    float panRange = rawPanRange * 0.4;

    // Map mouse –1…1 → 0…1, center the visible window, then shift
    float center = rawPanRange * 0.5;       // default: centered in the pano
    float panX = center + uMouse.x * panRange * -0.5;
    float panY = -uMouse.y * 0.015;

    vec2 out_uv;
    out_uv.x = panX + uv.x * visFrac;
    out_uv.y = uv.y + panY;
    return out_uv;
  }

  // ─── Zoom-reserve expansion ───
  vec2 applyExpansion(vec2 uv, vec2 camShift) {
    float baseZoom = 1.0 - ZOOM_RESERVE;
    // In pano mode reduce expansion offset (panning already reveals edges)
    float expMul = uPanoMode > 0.5 ? 0.12 : EXPANSION_STRENGTH;
    vec2 offset = camShift * ZOOM_RESERVE * expMul;
    return uv * baseZoom + (1.0 - baseZoom) * 0.5 + offset;
  }

  // ─── Iterative inverse reprojection ───
  vec2 reproject(vec2 uv, vec2 camShift) {
    vec2 src = uv;
    for (int i = 0; i < 5; i++) {
      float d = sampleDepth(src);
      d = pow(d, DEPTH_CONTRAST);
      src = uv + camShift * d;
    }
    return src;
  }

  // ─── Disocclusion-aware sampling ───
  vec4 sampleWithFill(vec2 outUV, vec2 srcUV, vec2 camShift) {
    vec2 cs = clamp(srcUV, vec2(0.001), vec2(0.999));
    float centerDepth = sampleDepth(cs);
    float p = 0.005;
    float dL = sampleDepth(cs + vec2(-p, 0.0));
    float dR = sampleDepth(cs + vec2( p, 0.0));
    float dU = sampleDepth(cs + vec2(0.0,  p));
    float dD = sampleDepth(cs + vec2(0.0, -p));
    float maxJump = max(max(abs(centerDepth-dL),abs(centerDepth-dR)),
                        max(abs(centerDepth-dU),abs(centerDepth-dD)));

    vec4 baseColor = texture2D(uTexture, cs);
    float shiftLen = length(camShift);

    if (maxJump > DISOCCLUDE_THRESH && shiftLen > 0.0005) {
      vec2 searchDir = normalize(-camShift + vec2(0.0001));
      float st = 0.005;
      vec4  fill = vec4(0.0);
      float tw   = 0.0;

      for (int i = 1; i <= 12; i++) {
        vec2 sUV = clamp(cs + searchDir * st * float(i), vec2(0.001), vec2(0.999));
        float w  = (1.0 - sampleDepth(sUV)) / float(i);
        fill += texture2D(uTexture, sUV) * w;
        tw   += w;
      }
      vec2 perpDir = vec2(-searchDir.y, searchDir.x);
      for (int i = 1; i <= 6; i++) {
        vec2 a = clamp(cs + perpDir * st * float(i), vec2(0.001), vec2(0.999));
        vec2 b = clamp(cs - perpDir * st * float(i), vec2(0.001), vec2(0.999));
        float w = 0.4 / float(i);
        fill += (texture2D(uTexture, a) + texture2D(uTexture, b)) * w;
        tw   += w * 2.0;
      }
      if (tw > 0.0) {
        fill /= tw;
        float blend = smoothstep(DISOCCLUDE_THRESH, DISOCCLUDE_THRESH*3.5, maxJump)
                    * smoothstep(0.0005, 0.015, shiftLen);
        baseColor = mix(baseColor, fill, blend * FILL_BLEND_MAX);
      }
    }
    return baseColor;
  }

  // ─── Edge fade ───
  float edgeFade(vec2 uv) {
    float fw = 0.04;
    return smoothstep(0.0, fw, uv.x) * smoothstep(0.0, fw, 1.0-uv.x)
         * smoothstep(0.0, fw, uv.y) * smoothstep(0.0, fw, 1.0-uv.y);
  }

  // ─── Main ───
  void main() {
    vec2 camShift = uMouse * uIntensity;

    // 1. Zoom reserve (viewport space)
    vec2 expandedUV = applyExpansion(vUv, camShift);

    // 2. Panorama mapping (viewport → image window)
    vec2 panoUV = panoMap(expandedUV);

    // 3. Depth reprojection (image space)
    vec2 sourceUV = reproject(panoUV, camShift);

    // 4. Sample with disocclusion fill
    vec4 color = sampleWithFill(panoUV, sourceUV, camShift);

    // 5. Depth shading
    vec2 cs = clamp(sourceUV, vec2(0.001), vec2(0.999));
    float depth = sampleDepth(cs);
    color.rgb *= mix(0.86, 1.0, pow(depth, 1.2));

    // 6. AO
    float ao_s = 0.004;
    float adL = sampleDepth(cs + vec2(-ao_s,  0.0));
    float adR = sampleDepth(cs + vec2( ao_s,  0.0));
    float adU = sampleDepth(cs + vec2( 0.0,  ao_s));
    float adD = sampleDepth(cs + vec2( 0.0, -ao_s));
    float depthEdge = abs(depth-adL)+abs(depth-adR)+abs(depth-adU)+abs(depth-adD);
    color.rgb *= 1.0 - clamp(depthEdge*1.2, 0.0, 0.25) * AO_STRENGTH;

    // 7. DOF on far background
    float dofR = smoothstep(0.35, 0.0, depth) * 0.003;
    if (dofR > 0.0008) {
      vec4 blur = texture2D(uTexture, cs+vec2(dofR,0.0))
                + texture2D(uTexture, cs-vec2(dofR,0.0))
                + texture2D(uTexture, cs+vec2(0.0,dofR))
                + texture2D(uTexture, cs-vec2(0.0,dofR));
      color = mix(color, blur*0.25, DOF_STRENGTH);
    }

    // 8. Edge fade (viewport space)
    color.a *= edgeFade(vUv);

    gl_FragColor = color;
  }
`;function Hm({imageUrl:s,depthMapUrl:e,intensity:n=.04,sensitivity:r=.5,isPano:o=!1,className:l=""}){const u=Fe.useRef(null),d=Fe.useRef(null),m=Fe.useRef(null),p=Fe.useRef(null),v=Fe.useRef(null),_=Fe.useRef(0),g=Fe.useRef({x:0,y:0}),y=Fe.useRef({x:0,y:0}),E=Fe.useRef(null),C=Fe.useRef(n),x=Fe.useRef(r),S=Fe.useRef(o),R=Fe.useRef(typeof navigator<"u"&&/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)),N=Fe.useRef({x:0,y:0}),P=Fe.useRef({x:0,y:0}),[I,U]=Fe.useState(!1),[O,T]=Fe.useState("checking"),b=Fe.useRef(!1),ue=Fe.useRef(0),k=Fe.useRef(null);Fe.useEffect(()=>{C.current=n},[n]),Fe.useEffect(()=>{x.current=r},[r]),Fe.useEffect(()=>{S.current=o},[o]);const Z=Fe.useCallback(q=>{const L=u.current;if(!L)return;const V=L.getBoundingClientRect();g.current.x=((q.clientX-V.left)/V.width-.5)*2,g.current.y=-((q.clientY-V.top)/V.height-.5)*2},[]),K=Fe.useRef(!1),ce=Fe.useCallback(()=>{K.current=!0},[]),Q=Fe.useCallback(()=>{K.current=!1},[]),ee=Fe.useCallback(q=>{const L=u.current;if(!L||q.touches.length===0)return;const V=q.touches[0],me=L.getBoundingClientRect();g.current.x=((V.clientX-me.left)/me.width-.5)*2,g.current.y=-((V.clientY-me.top)/me.height-.5)*2,q.preventDefault()},[]),W=Fe.useCallback(q=>{if(q.gamma!==null&&q.beta!==null){ue.current++;const L=3,V=40;let me=q.gamma,be=q.beta-45;me=Math.abs(me)<L?0:me-Math.sign(me)*L,be=Math.abs(be)<L?0:be-Math.sign(be)*L;const Le=V-L,ne=Math.max(-1,Math.min(1,me/Le)),he=Math.max(-1,Math.min(1,be/Le)),ge=.15;N.current.x+=(ne-N.current.x)*ge,N.current.y+=(he-N.current.y)*ge,K.current||(g.current.x=N.current.x,g.current.y=N.current.y)}},[]),Y=Fe.useCallback(()=>{b.current||(b.current=!0,ue.current=0,window.addEventListener("deviceorientation",W),k.current=setTimeout(()=>{ue.current>5?T("active"):(console.warn("Gyro permission granted but no events received"),window.removeEventListener("deviceorientation",W),b.current=!1,T("denied"))},3e3))},[W]);Fe.useEffect(()=>{if(!R.current){T("unavailable");return}return typeof DeviceOrientationEvent.requestPermission=="function"?T("prompt"):(T("granted"),Y()),()=>{b.current&&(window.removeEventListener("deviceorientation",W),b.current=!1),k.current&&clearTimeout(k.current)}},[W,Y]);const se=Fe.useCallback(async()=>{T("checking");const q=DeviceOrientationEvent,L=new Promise(V=>setTimeout(()=>V("timeout"),5e3));try{const V=await Promise.race([q.requestPermission(),L]);V==="granted"?(T("granted"),Y()):(V==="timeout"&&console.warn("Gyro permission request timed out (possibly blocked by iframe)"),T("denied"))}catch(V){console.warn("Gyro permission request failed:",V),T("denied")}},[Y]);return Fe.useEffect(()=>{if(O==="active"){const q=setTimeout(()=>T("granted"),2500);return()=>clearTimeout(q)}},[O]),Fe.useEffect(()=>{const q=u.current;if(!q)return;const L=q.clientWidth||1,V=q.clientHeight||1;let me;try{me=new v1({antialias:!R.current,alpha:!0,powerPreference:R.current?"low-power":"high-performance",failIfMajorPerformanceCaveat:!1})}catch(nt){console.warn("WebGL context creation failed:",nt),U(!0);return}if(!me.getContext()){console.warn("WebGL context is null"),me.dispose(),U(!0);return}me.setPixelRatio(R.current?1:Math.min(window.devicePixelRatio,2)),me.setClearColor(0,0),q.appendChild(me.domElement),d.current=me;const be=new J_;m.current=be;const Le=new gd(-1,1,1,-1,.1,10);Le.position.z=1,p.current=Le;const ne=new yx;ne.crossOrigin="anonymous";const he={uTexture:{value:null},uDepthMap:{value:null},uMouse:{value:new Dt(0,0)},uIntensity:{value:n},uTime:{value:0},uResolution:{value:new Dt(L,V)},uPanoMode:{value:o?1:0},uImageAspect:{value:1},uViewportAspect:{value:L/V}},ge=new mi({vertexShader:_1,fragmentShader:x1,uniforms:he,transparent:!0});v.current=ge;const ze=new $a(2,2),ke=new Pi(ze,ge);E.current=ke,be.add(ke);function tt(){if(!q||!me)return;const nt=q.clientWidth||1,ut=q.clientHeight||1;me.setSize(nt,ut),he.uResolution.value.set(nt,ut),he.uViewportAspect.value=nt/ut}function Vt(nt,ut){if(!q||!ke)return;const pt=nt/Math.max(ut,1);if(he.uImageAspect.value=pt,S.current)ke.scale.set(1,1,1);else{const Ne=(q.clientWidth||1)/(q.clientHeight||1);Ne>pt?ke.scale.set(pt/Ne,1,1):ke.scale.set(1,Ne/pt,1)}}const dt=ne.load(s,nt=>{nt.minFilter=Qt,nt.magFilter=Qt,nt.wrapS=Hn,nt.wrapT=Hn,he.uTexture.value=nt,Vt(nt.image.width,nt.image.height)}),St=ne.load(e,nt=>{nt.minFilter=Qt,nt.magFilter=Qt,nt.wrapS=Hn,nt.wrapT=Hn,he.uDepthMap.value=nt});tt();const At=Date.now();let ct=!1;function It(){ct||(ct=!!(he.uTexture.value&&he.uDepthMap.value));const nt=x.current,ut=R.current,pt=ut?.03+nt*.12:.02+nt*.14;y.current.x+=(g.current.x-y.current.x)*pt,y.current.y+=(g.current.y-y.current.y)*pt;let Ne=y.current.x,D=y.current.y;if(ut&&S.current){const M=he.uViewportAspect.value,X=he.uImageAspect.value,pe=Math.min(1,Math.max(.05,M/X)),ve=Math.max(0,1-pe),fe=.04+nt*.2,He=Math.min(1,.15/Math.max(ve,.05)),we=fe*He;Ne*=we,D*=we;const qe=.008+nt*.022;P.current.x+=(Ne-P.current.x)*qe,P.current.y+=(D-P.current.y)*qe,Ne=P.current.x,D=P.current.y}else if(!ut&&S.current){const M=.35+nt*.35;Ne*=M,D*=M}he.uMouse.value.set(Ne,D),he.uIntensity.value=C.current,he.uPanoMode.value=S.current?1:0,he.uTime.value=(Date.now()-At)/1e3,ct&&me.render(be,Le),_.current=requestAnimationFrame(It)}It(),q.addEventListener("mousemove",Z),q.addEventListener("touchstart",ce,{passive:!0}),q.addEventListener("touchend",Q,{passive:!0}),q.addEventListener("touchmove",ee,{passive:!1});const B=new ResizeObserver(()=>{tt(),dt.image&&Vt(dt.image.width,dt.image.height)});return B.observe(q),()=>{cancelAnimationFrame(_.current),q.removeEventListener("mousemove",Z),q.removeEventListener("touchstart",ce),q.removeEventListener("touchend",Q),q.removeEventListener("touchmove",ee),B.disconnect();try{me.dispose()}catch{}try{ze.dispose()}catch{}try{ge.dispose()}catch{}try{dt.dispose()}catch{}try{St.dispose()}catch{}me.domElement.parentElement&&me.domElement.parentElement.removeChild(me.domElement)}},[s,e]),I?re.jsx("div",{className:`w-full h-full flex items-center justify-center bg-zinc-900 ${l}`,children:re.jsxs("p",{className:"text-white/50 text-sm text-center px-4",children:["WebGL is not available in this environment.",re.jsx("br",{}),"Try opening in a new browser tab."]})}):re.jsxs("div",{className:`relative w-full h-full ${l}`,children:[re.jsx("div",{ref:u,className:"w-full h-full overflow-hidden",style:{cursor:o?"ew-resize":"crosshair"}}),O==="prompt"&&re.jsxs("button",{onClick:se,className:"absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-5 py-3 rounded-full bg-violet-600/90 backdrop-blur-xl border border-violet-400/30 text-white shadow-lg shadow-violet-900/40 active:scale-95 transition-transform",children:[re.jsx(cf,{className:"w-4 h-4"}),re.jsx("span",{className:"text-sm",children:"Enable Motion Control"})]}),O==="denied"&&re.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white/40 text-xs max-w-[90vw]",children:[re.jsx(cf,{className:"w-3.5 h-3.5 shrink-0"}),re.jsx("span",{children:"Motion unavailable — try opening in Safari or use touch"})]}),O==="active"&&re.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white/40 text-xs",children:[re.jsx(Km,{className:"w-3.5 h-3.5"}),re.jsx("span",{children:"Motion active"})]})]})}function S1({intensity:s,onIntensityChange:e,sensitivity:n,onSensitivityChange:r,viewMode:o,onViewModeChange:l,onReset:u,onDownloadDepth:d,isFullscreen:m,onToggleFullscreen:p}){const v=[{key:"parallax",label:"3D Parallax",icon:Ym},{key:"original",label:"Original",icon:Xp},{key:"depth",label:"Depth Map",icon:Xp},{key:"split",label:"Split View",icon:Xv}];return re.jsxs("div",{className:"bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 p-4 space-y-5",children:[re.jsxs("div",{children:[re.jsx("label",{className:"text-white/50 text-xs uppercase tracking-wider mb-2 block",children:"View Mode"}),re.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:v.map(({key:_,label:g,icon:y})=>re.jsxs("button",{onClick:()=>l(_),className:`
                flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all
                ${o===_?"bg-violet-500/20 text-violet-300 border border-violet-500/30":"bg-white/[0.04] text-white/50 border border-transparent hover:bg-white/[0.08] hover:text-white/70"}
              `,children:[re.jsx(y,{className:"w-3.5 h-3.5"}),g]},_))})]}),(o==="parallax"||o==="split")&&re.jsxs("div",{children:[re.jsxs("div",{className:"flex items-center justify-between mb-2",children:[re.jsx("label",{className:"text-white/50 text-xs uppercase tracking-wider",children:"Depth Intensity"}),re.jsxs("span",{className:"text-white/70 text-xs font-mono",children:[(s*100).toFixed(0),"%"]})]}),re.jsx("input",{type:"range",min:"0",max:"0.15",step:"0.001",value:s,onChange:_=>e(parseFloat(_.target.value)),className:"w-full h-1.5 rounded-full appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #8b5cf6 ${s/.15*100}%, rgba(255,255,255,0.1) ${s/.15*100}%)`}}),re.jsxs("div",{className:"flex justify-between mt-1",children:[re.jsx("span",{className:"text-white/30 text-[10px]",children:"Subtle"}),re.jsx("span",{className:"text-white/30 text-[10px]",children:"Extreme"})]})]}),re.jsxs("div",{children:[re.jsxs("div",{className:"flex items-center justify-between mb-2",children:[re.jsxs("label",{className:"text-white/50 text-xs uppercase tracking-wider",children:[re.jsx(Km,{className:"w-3 h-3 inline mr-1.5 -mt-0.5"}),"Motion Sensitivity"]}),re.jsxs("span",{className:"text-white/70 text-xs font-mono",children:[(n*100).toFixed(0),"%"]})]}),re.jsx("input",{type:"range",min:"0.05",max:"1",step:"0.01",value:n,onChange:_=>r(parseFloat(_.target.value)),className:"w-full h-1.5 rounded-full appearance-none cursor-pointer",style:{background:`linear-gradient(to right, #06b6d4 ${(n-.05)/.95*100}%, rgba(255,255,255,0.1) ${(n-.05)/.95*100}%)`}}),re.jsxs("div",{className:"flex justify-between mt-1",children:[re.jsx("span",{className:"text-white/30 text-[10px]",children:"Gentle"}),re.jsx("span",{className:"text-white/30 text-[10px]",children:"Responsive"})]})]}),re.jsxs("div",{className:"flex gap-2",children:[re.jsxs("button",{onClick:u,className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/[0.08] transition-all text-xs",children:[re.jsx(Gv,{className:"w-3.5 h-3.5"}),"New Image"]}),re.jsxs("button",{onClick:d,className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/[0.08] transition-all text-xs",children:[re.jsx(bv,{className:"w-3.5 h-3.5"}),"Depth Map"]}),re.jsx("button",{onClick:p,className:"flex items-center justify-center p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/[0.08] transition-all",children:m?re.jsx(Bv,{className:"w-3.5 h-3.5"}):re.jsx(Ov,{className:"w-3.5 h-3.5"})})]})]})}const y1={idle:"Ready to process","loading-model":"Loading AI depth model...",estimating:"Generating depth map...",complete:"Depth map generated!",error:"AI model unavailable",fallback:"Using algorithmic depth estimation..."},M1={idle:"","loading-model":"Downloading Depth-Anything V2 neural network. This only happens once — the model is cached in your browser.",estimating:"Running dense prediction transformer on your image to estimate per-pixel depth values.",complete:"Your 3D parallax experience is ready. Move your mouse to explore!",error:"Falling back to algorithmic depth estimation.",fallback:"Using gradient and edge detection to approximate depth. For best results, try refreshing to retry the AI model."};function Gm({status:s,modelProgress:e,errorMessage:n}){const[r,o]=Fe.useState("");Fe.useEffect(()=>{if(s==="loading-model"||s==="estimating"||s==="fallback"){const u=setInterval(()=>{o(d=>d.length>=3?"":d+".")},400);return()=>clearInterval(u)}},[s]);const l=s==="loading-model"||s==="estimating"||s==="fallback";return re.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",children:re.jsxs("div",{className:"max-w-md w-full mx-4 p-8 rounded-3xl bg-zinc-900/90 border border-white/10 text-center",children:[re.jsx("div",{className:"flex justify-center mb-6",children:re.jsx("div",{className:`
            w-20 h-20 rounded-2xl flex items-center justify-center
            ${s==="complete"?"bg-emerald-500/20":s==="error"?"bg-red-500/20":"bg-violet-500/20"}
          `,children:l?re.jsx(Uv,{className:`w-10 h-10 animate-spin ${s==="fallback"?"text-amber-400":"text-violet-400"}`}):s==="complete"?re.jsx(Cv,{className:"w-10 h-10 text-emerald-400"}):s==="error"?re.jsx(Tv,{className:"w-10 h-10 text-red-400"}):re.jsx(Ev,{className:"w-10 h-10 text-violet-400"})})}),re.jsxs("h3",{className:"text-white mb-2",children:[y1[s],l&&r]}),re.jsxs("p",{className:"text-white/40 text-sm mb-6",children:[M1[s],n&&re.jsx("span",{className:"block mt-2 text-red-400/60 text-xs",children:n})]}),s==="loading-model"&&re.jsx("div",{className:"w-full bg-white/10 rounded-full h-2 overflow-hidden",children:re.jsx("div",{className:"h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-300",style:{width:`${Math.max(e,2)}%`}})}),s==="estimating"&&re.jsx("div",{className:"w-full bg-white/10 rounded-full h-2 overflow-hidden",children:re.jsx("div",{className:"h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full animate-pulse w-full"})}),s==="fallback"&&re.jsx("div",{className:"w-full bg-white/10 rounded-full h-2 overflow-hidden",children:re.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse w-full"})}),s==="loading-model"&&e>0&&re.jsxs("p",{className:"text-white/30 text-xs mt-2 font-mono",children:[e.toFixed(0),"%"]})]})})}const E1="modulepreload",w1=function(s){return"/depthflow-parallax-app/"+s},Wm={},T1=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let u=function(p){return Promise.all(p.map(v=>Promise.resolve(v).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(n.map(p=>{if(p=w1(p),p in Wm)return;Wm[p]=!0;const v=p.endsWith(".css"),_=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const g=document.createElement("link");if(g.rel=v?"stylesheet":E1,v||(g.as="script"),g.crossOrigin="",g.href=p,m&&g.setAttribute("nonce",m),document.head.appendChild(g),v)return new Promise((y,E)=>{g.addEventListener("load",y),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};let Ul=null,of=!1;const Qs=typeof navigator<"u"&&/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),A1=Qs&&(!navigator.deviceMemory||navigator.deviceMemory<6),C1=Qs?2e4:12e4,R1=Qs?512:1024,b1=Qs?512:1024;function P1(s,e){return new Promise(n=>{const r=new Image;r.onload=()=>{const{naturalWidth:o,naturalHeight:l}=r;if(o<=e&&l<=e){n(s);return}const u=e/Math.max(o,l),d=Math.round(o*u),m=Math.round(l*u),p=document.createElement("canvas");p.width=d,p.height=m;const v=p.getContext("2d");if(!v){n(s);return}v.drawImage(r,0,0,d,m);const _=p.toDataURL("image/jpeg",.85);p.width=0,p.height=0,n(_)},r.onerror=()=>n(s),r.src=s})}async function D1(s,e){try{return e==null||e({status:"estimating"}),await N1(s)}catch(n){console.warn("Server depth estimation failed, falling back to browser AI:",n)}if(A1&&of){e==null||e({status:"fallback"});try{const n=await nd(s);return Xm(n)}catch{return jm(s)}}if(!of)try{const n=await P1(s,R1);return await Promise.race([L1(n,e),new Promise((o,l)=>setTimeout(()=>l(new Error("AI model timed out")),C1))])}catch(n){console.warn("AI depth estimation failed:",n),of=!0;try{Ul=null}catch{}}e==null||e({status:"fallback"});try{const n=await nd(s);return Xm(n)}catch(n){return console.warn("Algorithmic fallback failed:",n),jm(s)}}async function L1(s,e){if(!Ul){e==null||e({status:"loading"});let y;try{y=await T1(()=>import("./transformers.web-DBr2xyJF.js"),[])}catch(E){throw console.warn("Failed to import @huggingface/transformers:",E),new Error("Transformers library failed to load")}y.env.allowLocalModels=!1,e==null||e({status:"progress",progress:5}),Ul=await y.pipeline("depth-estimation","onnx-community/depth-anything-v2-small",{dtype:"q8",progress_callback:E=>{E.status==="progress"&&E.progress!==void 0&&(e==null||e({status:"progress",progress:E.progress})),E.status==="ready"&&(e==null||e({status:"ready"}))}})}e==null||e({status:"ready"});const r=(await Ul(s)).depth,o=r.width,l=r.height,u=document.createElement("canvas");u.width=o,u.height=l;const d=u.getContext("2d"),m=d.createImageData(o,l),p=r.data;let v=1/0,_=-1/0;for(let y=0;y<p.length;y++)p[y]<v&&(v=p[y]),p[y]>_&&(_=p[y]);const g=_-v||1;for(let y=0;y<p.length;y++){const E=(p[y]-v)/g*255,C=y*4;m.data[C]=E,m.data[C+1]=E,m.data[C+2]=E,m.data[C+3]=255}return d.putImageData(m,0,0),{depthCanvas:u}}async function N1(s){const e=String(s||"");if(!e.startsWith("data:"))throw new Error("Server depth expects data URL image source");const n=await fetch("/api/depth/estimate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageDataUrl:e,blur:.9})}),r=await n.json();if(!n.ok||!r.ok||!r.depthDataUrl)throw new Error((r==null?void 0:r.error)||"Server depth estimation failed");const o=await nd(r.depthDataUrl),l=document.createElement("canvas");l.width=o.naturalWidth||o.width,l.height=o.naturalHeight||o.height;const u=l.getContext("2d");if(!u)throw new Error("Canvas unavailable");return u.drawImage(o,0,0),{depthCanvas:l}}function nd(s){return new Promise((e,n)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>e(r),r.onerror=n,r.src=s})}function Xm(s){const e=document.createElement("canvas"),n=b1,r=s.naturalWidth||s.width,o=s.naturalHeight||s.height,l=Math.min(1,n/Math.max(r,o)),u=Math.round(r*l),d=Math.round(o*l);e.width=u,e.height=d;const m=e.getContext("2d");m.drawImage(s,0,0,u,d);const v=m.getImageData(0,0,u,d).data,_=new Float32Array(u*d);for(let I=0;I<u*d;I++)_[I]=.299*v[I*4]+.587*v[I*4+1]+.114*v[I*4+2];const g=new Float32Array(u*d);for(let I=1;I<d-1;I++)for(let U=1;U<u-1;U++){const O=I*u+U,T=-_[(I-1)*u+(U-1)]+_[(I-1)*u+(U+1)]-2*_[I*u+(U-1)]+2*_[I*u+(U+1)]-_[(I+1)*u+(U-1)]+_[(I+1)*u+(U+1)],b=-_[(I-1)*u+(U-1)]-2*_[(I-1)*u+U]-_[(I-1)*u+(U+1)]+_[(I+1)*u+(U-1)]+2*_[(I+1)*u+U]+_[(I+1)*u+(U+1)];g[O]=Math.sqrt(T*T+b*b)}let y=0;for(let I=0;I<g.length;I++)g[I]>y&&(y=g[I]);const E=new Float32Array(u*d);for(let I=0;I<d;I++)for(let U=0;U<u;U++){const O=I*u+U,T=I/d,b=_[O]/255,ue=y>0?g[O]/y:0,k=(U/u-.5)*2,Z=(I/d-.5)*2,K=1-Math.sqrt(k*k+Z*Z)*.5;E[O]=.35*T+.25*b+.2*K+.2*(1-ue)}const x=I1(E,u,d,Qs?8:12);let S=1/0,R=-1/0;for(let I=0;I<x.length;I++)x[I]<S&&(S=x[I]),x[I]>R&&(R=x[I]);const N=R-S||1,P=m.createImageData(u,d);for(let I=0;I<u*d;I++){const U=(x[I]-S)/N*255;P.data[I*4]=U,P.data[I*4+1]=U,P.data[I*4+2]=U,P.data[I*4+3]=255}return m.putImageData(P,0,0),{depthCanvas:e}}function I1(s,e,n,r){const o=new Float32Array(s.length),l=new Float32Array(s.length);for(let u=0;u<n;u++)for(let d=0;d<e;d++){let m=0,p=0;for(let v=-r;v<=r;v++){const _=d+v;if(_>=0&&_<e){const g=Math.exp(-v*v/(2*r*r));m+=s[u*e+_]*g,p+=g}}o[u*e+d]=m/p}for(let u=0;u<n;u++)for(let d=0;d<e;d++){let m=0,p=0;for(let v=-r;v<=r;v++){const _=u+v;if(_>=0&&_<n){const g=Math.exp(-v*v/(2*r*r));m+=o[_*e+d]*g,p+=g}}l[u*e+d]=m/p}return l}function jm(s){return new Promise(e=>{const n=()=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>{const u=(Qs?256:512)/Math.max(o.naturalWidth,o.naturalHeight),d=Math.round(o.naturalWidth*Math.min(u,1)),m=Math.round(o.naturalHeight*Math.min(u,1));try{const p=document.createElement("canvas");p.width=d,p.height=m;const v=p.getContext("2d");v.drawImage(o,0,0,d,m);const _=v.createImageData(d,m);for(let g=0;g<m;g++)for(let y=0;y<d;y++){const E=(g*d+y)*4,C=g/m,x=(y/d-.5)*2,S=(g/m-.5)*2,R=1-Math.sqrt(x*x+S*S)*.4,N=Math.min(255,Math.max(0,(.5*C+.5*R)*255));_.data[E]=N,_.data[E+1]=N,_.data[E+2]=N,_.data[E+3]=255}v.putImageData(_,0,0),e({depthCanvas:p})}catch{r()}},o.onerror=()=>r(),o.src=s},r=()=>{const o=document.createElement("canvas");o.width=256,o.height=256;const l=o.getContext("2d"),u=l.createLinearGradient(0,0,0,256);u.addColorStop(0,"#000"),u.addColorStop(1,"#fff"),l.fillStyle=u,l.fillRect(0,0,256,256),e({depthCanvas:o})};n()})}function U1(){const[s,e]=Fe.useState(null),[n,r]=Fe.useState(null),[o,l]=Fe.useState(null),[u,d]=Fe.useState("idle"),[m,p]=Fe.useState(0),[v,_]=Fe.useState(),[g,y]=Fe.useState(.04),[E,C]=Fe.useState(.5),[x,S]=Fe.useState("parallax"),[R,N]=Fe.useState(!1),[P,I]=Fe.useState(!0),[U,O]=Fe.useState(!1),[T,b]=Fe.useState(1),[ue,k]=Fe.useState(1),Z=Fe.useRef(null);Fe.useEffect(()=>{const L=Z.current;if(!L)return;const V=()=>{const be=L.clientWidth,Le=L.clientHeight;Le>0&&k(be/Le)};V();const me=new ResizeObserver(V);return me.observe(L),()=>me.disconnect()},[s,n]),Fe.useEffect(()=>{O(T>ue*1.15)},[T,ue]);const K=Fe.useCallback(L=>new Promise(V=>{const me=new Image;me.onload=()=>V(me.naturalWidth/me.naturalHeight),me.onerror=()=>V(1),me.src=L}),[]),ce=Fe.useCallback(async L=>{e(L),r(L),d("loading-model"),p(0);const V=await K(L);b(V);try{const me=await D1(L,Le=>{Le.status==="progress"&&Le.progress&&(p(Le.progress),d("loading-model")),Le.status==="ready"&&d("estimating"),Le.status==="fallback"&&d("fallback")}),be=me.depthCanvas.toDataURL("image/jpeg",.9);r(be),l(me.depthCanvas),d("complete"),setTimeout(()=>d("idle"),1500)}catch(me){console.error("Depth estimation completely failed:",me),d("error"),_(me.message)}},[K]),Q=Fe.useCallback((L,V)=>{ce(V)},[ce]),ee=Fe.useCallback(()=>{e(null),r(null),l(null),O(!1),d("idle"),p(0),_(void 0),S("parallax")},[]),W=Fe.useCallback(()=>{if(!o)return;const L=document.createElement("a");L.download="depth-map.png",L.href=o.toDataURL("image/png"),L.click()},[o]),Y=Fe.useCallback(()=>{var L,V;try{R?document.fullscreenElement&&document.exitFullscreen().catch(()=>{}):(V=(L=Z.current)==null?void 0:L.requestFullscreen)==null||V.call(L).catch(()=>{})}catch{}N(!R)},[R]);Fe.useEffect(()=>{const L=()=>{N(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",L),()=>document.removeEventListener("fullscreenchange",L)},[]);const se=s&&n,q=u==="loading-model"||u==="estimating"||u==="fallback";return!se&&!q?re.jsxs("div",{className:"min-h-full bg-zinc-950 text-white overflow-auto",children:[u==="error"&&re.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-red-500/20 border border-red-500/30 backdrop-blur-xl",children:[re.jsx("p",{className:"text-red-300 text-sm text-center",children:"Depth estimation failed. Please try again with a different image."}),re.jsx("button",{onClick:ee,className:"mt-2 w-full text-center text-xs text-red-400 hover:text-red-300 underline",children:"Dismiss"})]}),re.jsxs("div",{className:"relative",children:[re.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-violet-950/30 via-zinc-950 to-zinc-950 pointer-events-none"}),re.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"}),re.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-12",children:[re.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8",children:[re.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center",children:re.jsx(Ym,{className:"w-5 h-5 text-white"})}),re.jsx("h1",{className:"text-white tracking-tight",children:"DepthFlow"})]}),re.jsxs("div",{className:"text-center mb-12",children:[re.jsxs("h2",{className:"text-white/90 mb-3",children:["Transform any image into a"," ",re.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400",children:"living 3D experience"})]}),re.jsx("p",{className:"text-white/40 max-w-xl mx-auto",children:"Upload a photo and watch AI generate a real-time depth map, powering an immersive parallax effect that brings your images to life."})]}),re.jsx(t_,{onImageSelect:Q}),re.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-16",children:[re.jsx(lf,{icon:re.jsx(Yv,{className:"w-5 h-5 text-violet-400"}),title:"AI Depth Estimation",description:"Powered by Depth-Anything V2 transformer running directly in your browser. No server required."}),re.jsx(lf,{icon:re.jsx($m,{className:"w-5 h-5 text-fuchsia-400"}),title:"Interactive Parallax",description:"Move your mouse to explore depth. Custom GLSL shaders create smooth, realistic 3D motion."}),re.jsx(lf,{icon:re.jsx(cf,{className:"w-5 h-5 text-cyan-400"}),title:"Mobile Ready",description:"Supports device tilt and orientation on mobile for a natural, gyroscope-driven experience."})]}),re.jsxs("div",{className:"mt-16",children:[re.jsx("h3",{className:"text-center text-white/60 mb-8",children:"How it works"}),re.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center gap-4",children:[re.jsx(Rl,{step:1,title:"Upload",description:"Drop any 2D image"}),re.jsx("div",{className:"hidden md:block text-white/20",children:"→"}),re.jsx(Rl,{step:2,title:"Analyze",description:"AI estimates per-pixel depth"}),re.jsx("div",{className:"hidden md:block text-white/20",children:"→"}),re.jsx(Rl,{step:3,title:"Render",description:"WebGL parallax engine"}),re.jsx("div",{className:"hidden md:block text-white/20",children:"→"}),re.jsx(Rl,{step:4,title:"Interact",description:"Mouse or tilt to explore"})]})]})]})]})]}):re.jsxs("div",{className:"h-full bg-zinc-950 text-white flex flex-col",ref:Z,children:[q&&re.jsx(Gm,{status:u,modelProgress:m,errorMessage:v}),u==="complete"&&re.jsx(Gm,{status:"complete",modelProgress:100}),se&&re.jsxs("div",{className:"flex-1 relative",children:[re.jsx("div",{className:"absolute inset-0 flex items-start md:items-center justify-center pt-[120px] md:pt-0 bg-black",children:x==="split"?re.jsxs("div",{className:"w-full h-full flex flex-col md:flex-row",children:[re.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden",children:[re.jsx("img",{src:s,alt:"Original",className:"max-w-full max-h-[90%] object-contain rounded-lg p-3"}),re.jsx("p",{className:"text-white/40 text-xs mt-2 uppercase tracking-wider",children:"Original"})]}),re.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden",children:[re.jsx("img",{src:n,alt:"Depth Map",className:"max-w-full max-h-[90%] object-contain rounded-lg p-3"}),re.jsx("p",{className:"text-white/40 text-xs mt-2 uppercase tracking-wider",children:"Depth Map"})]}),re.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center border-b md:border-b-0 border-white/10 relative overflow-hidden",children:[re.jsx("div",{className:"w-full h-[90%] flex items-center justify-center p-3",children:re.jsx("div",{className:"max-w-full max-h-full w-full rounded-lg overflow-hidden",style:{aspectRatio:T},children:re.jsx(Hm,{imageUrl:s,depthMapUrl:n,intensity:g,sensitivity:E,isPano:U})})}),re.jsx("p",{className:"text-white/40 text-xs mt-2 uppercase tracking-wider",children:"3D Parallax"})]})]}):re.jsxs("div",{className:"w-full h-full relative overflow-hidden flex items-start md:items-center justify-center pt-[120px] md:pt-0",children:[x==="parallax"&&re.jsx("div",{className:`relative overflow-hidden ${U?"w-[95%] aspect-[4/3] max-h-full rounded-xl border border-white/5 md:w-full md:aspect-auto md:h-full md:rounded-none md:border-0":"w-full h-full"}`,children:re.jsx(Hm,{imageUrl:s,depthMapUrl:n,intensity:g,sensitivity:E,isPano:U})}),x==="original"&&re.jsx("div",{className:"w-full h-full flex items-center justify-center p-4 overflow-auto",children:re.jsx("img",{src:s,alt:"Original",className:"max-w-full max-h-full object-contain rounded-lg"})}),x==="depth"&&re.jsx("div",{className:"w-full h-full flex items-center justify-center p-4 overflow-auto",children:re.jsx("img",{src:n,alt:"Depth Map",className:"max-w-full max-h-full object-contain rounded-lg"})})]})}),re.jsx("button",{onClick:()=>I(!P),className:"absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 text-white/60 hover:text-white hover:bg-black/60 transition-all",children:re.jsx(e_,{className:"w-4 h-4"})}),P&&re.jsx("div",{className:"absolute bottom-4 left-4 z-20 w-72",children:re.jsx(S1,{intensity:g,onIntensityChange:y,sensitivity:E,onSensitivityChange:C,viewMode:x,onViewModeChange:S,onReset:ee,onDownloadDepth:W,isFullscreen:R,onToggleFullscreen:Y})}),x==="parallax"&&u==="idle"&&re.jsx(F1,{isPano:U})]})]})}function lf({icon:s,title:e,description:n}){return re.jsxs("div",{className:"p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors",children:[re.jsx("div",{className:"mb-3",children:s}),re.jsx("h4",{className:"text-white/80 mb-1",children:e}),re.jsx("p",{className:"text-white/35 text-sm",children:n})]})}function Rl({step:s,title:e,description:n}){return re.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",children:[re.jsx("div",{className:"w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-sm shrink-0",children:s}),re.jsxs("div",{children:[re.jsx("p",{className:"text-white/70 text-sm",children:e}),re.jsx("p",{className:"text-white/30 text-xs",children:n})]})]})}function F1({isPano:s=!1}){const[e,n]=Fe.useState(!0);return Fe.useEffect(()=>{const r=setTimeout(()=>n(!1),4e3);return()=>clearTimeout(r)},[]),e?re.jsx("div",{className:"absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-1000",style:{opacity:e?1:0},children:re.jsxs("div",{className:"flex items-center gap-3 px-5 py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 animate-pulse",children:[re.jsx($m,{className:"w-5 h-5 text-violet-400"}),re.jsx("span",{className:"text-white/60 text-sm",children:s?"Move your mouse to pan & explore the 3D panorama":"Move your mouse to explore the 3D depth"})]})}):null}vv.createRoot(document.getElementById("root")).render(re.jsx(U1,{}));
