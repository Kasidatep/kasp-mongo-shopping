(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pa(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const st={},Pn=[],te=()=>{},Qd=()=>!1,Yd=/^on[^a-z]/,li=e=>Yd.test(e),ma=e=>e.startsWith("onUpdate:"),Ot=Object.assign,ga=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xd=Object.prototype.hasOwnProperty,G=(e,t)=>Xd.call(e,t),U=Array.isArray,Cn=e=>ui(e)==="[object Map]",wu=e=>ui(e)==="[object Set]",q=e=>typeof e=="function",_t=e=>typeof e=="string",ci=e=>typeof e=="symbol",lt=e=>e!==null&&typeof e=="object",Au=e=>(lt(e)||q(e))&&q(e.then)&&q(e.catch),Ru=Object.prototype.toString,ui=e=>Ru.call(e),Jd=e=>ui(e).slice(8,-1),Pu=e=>ui(e)==="[object Object]",_a=e=>_t(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vs=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zd=/-(\w)/g,On=hi(e=>e.replace(Zd,(t,n)=>n?n.toUpperCase():"")),tp=/\B([A-Z])/g,Kn=hi(e=>e.replace(tp,"-$1").toLowerCase()),Cu=hi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ji=hi(e=>e?`on${Cu(e)}`:""),cn=(e,t)=>!Object.is(e,t),Ds=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Bs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},wo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Bl;const Ao=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=_t(r)?sp(r):ya(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(_t(e)||lt(e))return e}const ep=/;(?![^(]*\))/g,np=/:([^]+)/,rp=/\/\*[^]*?\*\//g;function sp(e){const t={};return e.replace(rp,"").split(ep).forEach(n=>{if(n){const r=n.split(np);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function fi(e){let t="";if(_t(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=fi(e[n]);r&&(t+=r+" ")}else if(lt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",op=pa(ip);function Su(e){return!!e||e===""}const $l=e=>_t(e)?e:e==null?"":U(e)||lt(e)&&(e.toString===Ru||!q(e.toString))?JSON.stringify(e,bu,2):String(e),bu=(e,t)=>t&&t.__v_isRef?bu(e,t.value):Cn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:wu(t)?{[`Set(${t.size})`]:[...t.values()]}:lt(t)&&!U(t)&&!Pu(t)?String(t):t;let Yt;class ap{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!t&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Yt;try{return Yt=this,t()}finally{Yt=n}}}on(){Yt=this}off(){Yt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lp(e,t=Yt){t&&t.active&&t.effects.push(e)}function cp(){return Yt}const Ea=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Vu=e=>(e.w&Be)>0,Du=e=>(e.n&Be)>0,up=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Be},hp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Vu(s)&&!Du(s)?s.delete(e):t[n++]=s,s.w&=~Be,s.n&=~Be}t.length=n}},Ro=new WeakMap;let ur=0,Be=1;const Po=30;let Xt;const on=Symbol(""),Co=Symbol("");class Ta{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lp(this,r)}run(){if(!this.active)return this.fn();let t=Xt,n=Me;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Xt,Xt=this,Me=!0,Be=1<<++ur,ur<=Po?up(this):jl(this),this.fn()}finally{ur<=Po&&hp(this),Be=1<<--ur,Xt=this.parent,Me=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(jl(this),this.onStop&&this.onStop(),this.active=!1)}}function jl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Me=!0;const xu=[];function Wn(){xu.push(Me),Me=!1}function Gn(){const e=xu.pop();Me=e===void 0?!0:e}function qt(e,t,n){if(Me&&Xt){let r=Ro.get(e);r||Ro.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Ea()),Nu(s)}}function Nu(e,t){let n=!1;ur<=Po?Du(e)||(e.n|=Be,n=!Vu(e)):n=!e.has(Xt),n&&(e.add(Xt),Xt.deps.push(e))}function ve(e,t,n,r,s,i){const o=Ro.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&U(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ci(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":U(e)?_a(n)&&a.push(o.get("length")):(a.push(o.get(on)),Cn(e)&&a.push(o.get(Co)));break;case"delete":U(e)||(a.push(o.get(on)),Cn(e)&&a.push(o.get(Co)));break;case"set":Cn(e)&&a.push(o.get(on));break}if(a.length===1)a[0]&&So(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);So(Ea(l))}}function So(e,t){const n=U(e)?e:[...e];for(const r of n)r.computed&&ql(r);for(const r of n)r.computed||ql(r)}function ql(e,t){(e!==Xt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const fp=pa("__proto__,__v_isRef,__isVue"),Ou=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ci)),zl=dp();function dp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)qt(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wn();const r=J(this)[t].apply(this,n);return Gn(),r}}),e}function pp(e){const t=J(this);return qt(t,"has",e),t.hasOwnProperty(e)}class Mu{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Cp:Uu:i?Lu:Fu).get(t))return t;const o=U(t);if(!s){if(o&&G(zl,n))return Reflect.get(zl,n,r);if(n==="hasOwnProperty")return pp}const a=Reflect.get(t,n,r);return(ci(n)?Ou.has(n):fp(n))||(s||qt(t,"get",n),i)?a:Dt(a)?o&&_a(n)?a:a.value:lt(a)?s?Bu(a):wa(a):a}}class ku extends Mu{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(Mn(i)&&Dt(i)&&!Dt(r))return!1;if(!this._shallow&&(!$s(r)&&!Mn(r)&&(i=J(i),r=J(r)),!U(t)&&Dt(i)&&!Dt(r)))return i.value=r,!0;const o=U(t)&&_a(n)?Number(n)<t.length:G(t,n),a=Reflect.set(t,n,r,s);return t===J(s)&&(o?cn(r,i)&&ve(t,"set",n,r):ve(t,"add",n,r)),a}deleteProperty(t,n){const r=G(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ve(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!ci(n)||!Ou.has(n))&&qt(t,"has",n),r}ownKeys(t){return qt(t,"iterate",U(t)?"length":on),Reflect.ownKeys(t)}}class mp extends Mu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const gp=new ku,_p=new mp,yp=new ku(!0),va=e=>e,di=e=>Reflect.getPrototypeOf(e);function gs(e,t,n=!1,r=!1){e=e.__v_raw;const s=J(e),i=J(t);n||(cn(t,i)&&qt(s,"get",t),qt(s,"get",i));const{has:o}=di(s),a=r?va:n?Ra:Pr;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function _s(e,t=!1){const n=this.__v_raw,r=J(n),s=J(e);return t||(cn(e,s)&&qt(r,"has",e),qt(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ys(e,t=!1){return e=e.__v_raw,!t&&qt(J(e),"iterate",on),Reflect.get(e,"size",e)}function Hl(e){e=J(e);const t=J(this);return di(t).has.call(t,e)||(t.add(e),ve(t,"add",e,e)),this}function Kl(e,t){t=J(t);const n=J(this),{has:r,get:s}=di(n);let i=r.call(n,e);i||(e=J(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?cn(t,o)&&ve(n,"set",e,t):ve(n,"add",e,t),this}function Wl(e){const t=J(this),{has:n,get:r}=di(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ve(t,"delete",e,void 0),i}function Gl(){const e=J(this),t=e.size!==0,n=e.clear();return t&&ve(e,"clear",void 0,void 0),n}function Es(e,t){return function(r,s){const i=this,o=i.__v_raw,a=J(o),l=t?va:e?Ra:Pr;return!e&&qt(a,"iterate",on),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ts(e,t,n){return function(...r){const s=this.__v_raw,i=J(s),o=Cn(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...r),u=n?va:t?Ra:Pr;return!t&&qt(i,"iterate",l?Co:on),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function xe(e){return function(...t){return e==="delete"?!1:this}}function Ep(){const e={get(i){return gs(this,i)},get size(){return ys(this)},has:_s,add:Hl,set:Kl,delete:Wl,clear:Gl,forEach:Es(!1,!1)},t={get(i){return gs(this,i,!1,!0)},get size(){return ys(this)},has:_s,add:Hl,set:Kl,delete:Wl,clear:Gl,forEach:Es(!1,!0)},n={get(i){return gs(this,i,!0)},get size(){return ys(this,!0)},has(i){return _s.call(this,i,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:Es(!0,!1)},r={get(i){return gs(this,i,!0,!0)},get size(){return ys(this,!0)},has(i){return _s.call(this,i,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:Es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ts(i,!1,!1),n[i]=Ts(i,!0,!1),t[i]=Ts(i,!1,!0),r[i]=Ts(i,!0,!0)}),[e,n,t,r]}const[Tp,vp,Ip,wp]=Ep();function Ia(e,t){const n=t?e?wp:Ip:e?vp:Tp;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Ap={get:Ia(!1,!1)},Rp={get:Ia(!1,!0)},Pp={get:Ia(!0,!1)},Fu=new WeakMap,Lu=new WeakMap,Uu=new WeakMap,Cp=new WeakMap;function Sp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bp(e){return e.__v_skip||!Object.isExtensible(e)?0:Sp(Jd(e))}function wa(e){return Mn(e)?e:Aa(e,!1,gp,Ap,Fu)}function Vp(e){return Aa(e,!1,yp,Rp,Lu)}function Bu(e){return Aa(e,!0,_p,Pp,Uu)}function Aa(e,t,n,r,s){if(!lt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=bp(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Sn(e){return Mn(e)?Sn(e.__v_raw):!!(e&&e.__v_isReactive)}function Mn(e){return!!(e&&e.__v_isReadonly)}function $s(e){return!!(e&&e.__v_isShallow)}function $u(e){return Sn(e)||Mn(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function ju(e){return Bs(e,"__v_skip",!0),e}const Pr=e=>lt(e)?wa(e):e,Ra=e=>lt(e)?Bu(e):e;function qu(e){Me&&Xt&&(e=J(e),Nu(e.dep||(e.dep=Ea())))}function zu(e,t){e=J(e);const n=e.dep;n&&So(n)}function Dt(e){return!!(e&&e.__v_isRef===!0)}function Hu(e){return Dp(e,!1)}function Dp(e,t){return Dt(e)?e:new xp(e,t)}class xp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:Pr(t)}get value(){return qu(this),this._value}set value(t){const n=this.__v_isShallow||$s(t)||Mn(t);t=n?t:J(t),cn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Pr(t),zu(this))}}function Np(e){return Dt(e)?e.value:e}const Op={get:(e,t,n)=>Np(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Dt(s)&&!Dt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ku(e){return Sn(e)?e:new Proxy(e,Op)}class Mp{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ta(t,()=>{this._dirty||(this._dirty=!0,zu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=J(this);return qu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function kp(e,t,n=!1){let r,s;const i=q(e);return i?(r=e,s=te):(r=e.get,s=e.set),new Mp(r,s,i||!s,n)}function ke(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){pi(i,t,n)}return s}function ee(e,t,n,r){if(q(e)){const i=ke(e,t,n,r);return i&&Au(i)&&i.catch(o=>{pi(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(ee(e[i],t,n,r));return s}function pi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ke(l,null,10,[e,o,a]);return}}Fp(e,n,s,r)}function Fp(e,t,n,r=!0){console.error(e)}let Cr=!1,bo=!1;const bt=[];let he=0;const bn=[];let Ee=null,Ze=0;const Wu=Promise.resolve();let Pa=null;function Lp(e){const t=Pa||Wu;return e?t.then(this?e.bind(this):e):t}function Up(e){let t=he+1,n=bt.length;for(;t<n;){const r=t+n>>>1,s=bt[r],i=Sr(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function Ca(e){(!bt.length||!bt.includes(e,Cr&&e.allowRecurse?he+1:he))&&(e.id==null?bt.push(e):bt.splice(Up(e.id),0,e),Gu())}function Gu(){!Cr&&!bo&&(bo=!0,Pa=Wu.then(Yu))}function Bp(e){const t=bt.indexOf(e);t>he&&bt.splice(t,1)}function $p(e){U(e)?bn.push(...e):(!Ee||!Ee.includes(e,e.allowRecurse?Ze+1:Ze))&&bn.push(e),Gu()}function Ql(e,t=Cr?he+1:0){for(;t<bt.length;t++){const n=bt[t];n&&n.pre&&(bt.splice(t,1),t--,n())}}function Qu(e){if(bn.length){const t=[...new Set(bn)];if(bn.length=0,Ee){Ee.push(...t);return}for(Ee=t,Ee.sort((n,r)=>Sr(n)-Sr(r)),Ze=0;Ze<Ee.length;Ze++)Ee[Ze]();Ee=null,Ze=0}}const Sr=e=>e.id==null?1/0:e.id,jp=(e,t)=>{const n=Sr(e)-Sr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Yu(e){bo=!1,Cr=!0,bt.sort(jp);const t=te;try{for(he=0;he<bt.length;he++){const n=bt[he];n&&n.active!==!1&&ke(n,null,14)}}finally{he=0,bt.length=0,Qu(),Cr=!1,Pa=null,(bt.length||bn.length)&&Yu()}}function qp(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||st;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||st;p&&(s=n.map(m=>_t(m)?m.trim():m)),f&&(s=n.map(wo))}let a,l=r[a=Ji(t)]||r[a=Ji(On(t))];!l&&i&&(l=r[a=Ji(Kn(t))]),l&&ee(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ee(c,e,6,s)}}function Xu(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!q(e)){const l=c=>{const u=Xu(c,t,!0);u&&(a=!0,Ot(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(lt(e)&&r.set(e,null),null):(U(i)?i.forEach(l=>o[l]=null):Ot(o,i),lt(e)&&r.set(e,o),o)}function mi(e,t){return!e||!li(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,Kn(t))||G(e,t))}let Jt=null,Ju=null;function js(e){const t=Jt;return Jt=e,Ju=e&&e.type.__scopeId||null,t}function zp(e,t=Jt,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ic(-1);const i=js(t);let o;try{o=e(...s)}finally{js(i),r._d&&ic(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zi(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:m,ctx:b,inheritAttrs:P}=e;let V,z;const Y=js(e);try{if(n.shapeFlag&4){const k=s||r;V=ue(u.call(k,k,f,i,m,p,b)),z=l}else{const k=t;V=ue(k.length>1?k(i,{attrs:l,slots:a,emit:c}):k(i,null)),z=t.props?l:Hp(l)}}catch(k){yr.length=0,pi(k,e,1),V=we(br)}let Z=V;if(z&&P!==!1){const k=Object.keys(z),{shapeFlag:Ut}=Z;k.length&&Ut&7&&(o&&k.some(ma)&&(z=Kp(z,o)),Z=kn(Z,z))}return n.dirs&&(Z=kn(Z),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&(Z.transition=n.transition),V=Z,js(Y),V}const Hp=e=>{let t;for(const n in e)(n==="class"||n==="style"||li(n))&&((t||(t={}))[n]=e[n]);return t},Kp=(e,t)=>{const n={};for(const r in e)(!ma(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Wp(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Yl(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!mi(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Yl(r,o,c):!0:!!o;return!1}function Yl(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!mi(n,i))return!0}return!1}function Gp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Qp=Symbol.for("v-ndc"),Yp=e=>e.__isSuspense;function Xp(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):$p(e)}const vs={};function to(e,t,n){return Zu(e,t,n)}function Zu(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=st){var a;const l=cp()===((a=Vt)==null?void 0:a.scope)?Vt:null;let c,u=!1,f=!1;if(Dt(e)?(c=()=>e.value,u=$s(e)):Sn(e)?(c=()=>e,r=!0):U(e)?(f=!0,u=e.some(k=>Sn(k)||$s(k)),c=()=>e.map(k=>{if(Dt(k))return k.value;if(Sn(k))return en(k);if(q(k))return ke(k,l,2)})):q(e)?t?c=()=>ke(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),ee(e,l,3,[m])}:c=te,t&&r){const k=c;c=()=>en(k())}let p,m=k=>{p=Y.onStop=()=>{ke(k,l,4)}},b;if(Dr)if(m=te,t?n&&ee(t,l,3,[c(),f?[]:void 0,m]):c(),s==="sync"){const k=Gm();b=k.__watcherHandles||(k.__watcherHandles=[])}else return te;let P=f?new Array(e.length).fill(vs):vs;const V=()=>{if(Y.active)if(t){const k=Y.run();(r||u||(f?k.some((Ut,Gt)=>cn(Ut,P[Gt])):cn(k,P)))&&(p&&p(),ee(t,l,3,[k,P===vs?void 0:f&&P[0]===vs?[]:P,m]),P=k)}else Y.run()};V.allowRecurse=!!t;let z;s==="sync"?z=V:s==="post"?z=()=>Bt(V,l&&l.suspense):(V.pre=!0,l&&(V.id=l.uid),z=()=>Ca(V));const Y=new Ta(c,z);t?n?V():P=Y.run():s==="post"?Bt(Y.run.bind(Y),l&&l.suspense):Y.run();const Z=()=>{Y.stop(),l&&l.scope&&ga(l.scope.effects,Y)};return b&&b.push(Z),Z}function Jp(e,t,n){const r=this.proxy,s=_t(e)?e.includes(".")?th(r,e):()=>r[e]:e.bind(r,r);let i;q(t)?i=t:(i=t.handler,n=t);const o=Vt;Fn(this);const a=Zu(s,i.bind(r),n);return o?Fn(o):an(),a}function th(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function en(e,t){if(!lt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Dt(e))en(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)en(e[n],t);else if(wu(e)||Cn(e))e.forEach(n=>{en(n,t)});else if(Pu(e))for(const n in e)en(e[n],t);return e}function Zp(e,t){const n=Jt;if(n===null)return e;const r=Ei(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,l,c=st]=t[i];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&en(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Ye(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Wn(),ee(l,n,8,[e.el,a,e,t]),Gn())}}const xs=e=>!!e.type.__asyncLoader,eh=e=>e.type.__isKeepAlive;function tm(e,t){nh(e,"a",t)}function em(e,t){nh(e,"da",t)}function nh(e,t,n=Vt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(gi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)eh(s.parent.vnode)&&nm(r,t,n,s),s=s.parent}}function nm(e,t,n,r){const s=gi(t,e,r,!0);sh(()=>{ga(r[t],s)},n)}function gi(e,t,n=Vt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Wn(),Fn(n);const a=ee(t,n,e,o);return an(),Gn(),a});return r?s.unshift(i):s.push(i),i}}const Ve=e=>(t,n=Vt)=>(!Dr||e==="sp")&&gi(e,(...r)=>t(...r),n),rm=Ve("bm"),rh=Ve("m"),sm=Ve("bu"),im=Ve("u"),om=Ve("bum"),sh=Ve("um"),am=Ve("sp"),lm=Ve("rtg"),cm=Ve("rtc");function um(e,t=Vt){gi("ec",e,t)}function hm(e,t,n,r){let s;const i=n&&n[r];if(U(e)||_t(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(lt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Vo=e=>e?ph(e)?Ei(e)||e.proxy:Vo(e.parent):null,_r=Ot(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vo(e.parent),$root:e=>Vo(e.root),$emit:e=>e.emit,$options:e=>Sa(e),$forceUpdate:e=>e.f||(e.f=()=>Ca(e.update)),$nextTick:e=>e.n||(e.n=Lp.bind(e.proxy)),$watch:e=>Jp.bind(e)}),eo=(e,t)=>e!==st&&!e.__isScriptSetup&&G(e,t),fm={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(eo(r,t))return o[t]=1,r[t];if(s!==st&&G(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&G(c,t))return o[t]=3,i[t];if(n!==st&&G(n,t))return o[t]=4,n[t];Do&&(o[t]=0)}}const u=_r[t];let f,p;if(u)return t==="$attrs"&&qt(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==st&&G(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,G(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return eo(s,t)?(s[t]=n,!0):r!==st&&G(r,t)?(r[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==st&&G(e,o)||eo(t,o)||(a=i[0])&&G(a,o)||G(r,o)||G(_r,o)||G(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xl(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Do=!0;function dm(e){const t=Sa(e),n=e.proxy,r=e.ctx;Do=!1,t.beforeCreate&&Jl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:b,activated:P,deactivated:V,beforeDestroy:z,beforeUnmount:Y,destroyed:Z,unmounted:k,render:Ut,renderTracked:Gt,renderTriggered:We,errorCaptured:De,serverPrefetch:rr,expose:ie,inheritAttrs:sr,components:fs,directives:ds,filters:Qi}=t;if(c&&pm(c,r,null),o)for(const ut in o){const nt=o[ut];q(nt)&&(r[ut]=nt.bind(n))}if(s){const ut=s.call(n,n);lt(ut)&&(e.data=wa(ut))}if(Do=!0,i)for(const ut in i){const nt=i[ut],Ge=q(nt)?nt.bind(n,n):q(nt.get)?nt.get.bind(n,n):te,ps=!q(nt)&&q(nt.set)?nt.set.bind(n):te,Qe=Km({get:Ge,set:ps});Object.defineProperty(r,ut,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:oe=>Qe.value=oe})}if(a)for(const ut in a)ih(a[ut],r,n,ut);if(l){const ut=q(l)?l.call(n):l;Reflect.ownKeys(ut).forEach(nt=>{Tm(nt,ut[nt])})}u&&Jl(u,e,"c");function kt(ut,nt){U(nt)?nt.forEach(Ge=>ut(Ge.bind(n))):nt&&ut(nt.bind(n))}if(kt(rm,f),kt(rh,p),kt(sm,m),kt(im,b),kt(tm,P),kt(em,V),kt(um,De),kt(cm,Gt),kt(lm,We),kt(om,Y),kt(sh,k),kt(am,rr),U(ie))if(ie.length){const ut=e.exposed||(e.exposed={});ie.forEach(nt=>{Object.defineProperty(ut,nt,{get:()=>n[nt],set:Ge=>n[nt]=Ge})})}else e.exposed||(e.exposed={});Ut&&e.render===te&&(e.render=Ut),sr!=null&&(e.inheritAttrs=sr),fs&&(e.components=fs),ds&&(e.directives=ds)}function pm(e,t,n=te){U(e)&&(e=xo(e));for(const r in e){const s=e[r];let i;lt(s)?"default"in s?i=Ns(s.from||r,s.default,!0):i=Ns(s.from||r):i=Ns(s),Dt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Jl(e,t,n){ee(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ih(e,t,n,r){const s=r.includes(".")?th(n,r):()=>n[r];if(_t(e)){const i=t[e];q(i)&&to(s,i)}else if(q(e))to(s,e.bind(n));else if(lt(e))if(U(e))e.forEach(i=>ih(i,t,n,r));else{const i=q(e.handler)?e.handler.bind(n):t[e.handler];q(i)&&to(s,i,e)}}function Sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>qs(l,c,o,!0)),qs(l,t,o)),lt(t)&&i.set(t,l),l}function qs(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&qs(e,i,n,!0),s&&s.forEach(o=>qs(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=mm[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const mm={data:Zl,props:tc,emits:tc,methods:hr,computed:hr,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:hr,directives:hr,watch:_m,provide:Zl,inject:gm};function Zl(e,t){return t?e?function(){return Ot(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function gm(e,t){return hr(xo(e),xo(t))}function xo(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ft(e,t){return e?[...new Set([].concat(e,t))]:t}function hr(e,t){return e?Ot(Object.create(null),e,t):t}function tc(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:Ot(Object.create(null),Xl(e),Xl(t??{})):t}function _m(e,t){if(!e)return t;if(!t)return e;const n=Ot(Object.create(null),e);for(const r in t)n[r]=Ft(e[r],t[r]);return n}function oh(){return{app:null,config:{isNativeTag:Qd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ym=0;function Em(e,t){return function(r,s=null){q(r)||(r=Ot({},r)),s!=null&&!lt(s)&&(s=null);const i=oh(),o=new WeakSet;let a=!1;const l=i.app={_uid:ym++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Qm,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const p=we(r,s);return p.appContext=i,u&&t?t(p,c):e(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Ei(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){zs=l;try{return c()}finally{zs=null}}};return l}}let zs=null;function Tm(e,t){if(Vt){let n=Vt.provides;const r=Vt.parent&&Vt.parent.provides;r===n&&(n=Vt.provides=Object.create(r)),n[e]=t}}function Ns(e,t,n=!1){const r=Vt||Jt;if(r||zs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zs._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&q(t)?t.call(r&&r.proxy):t}}function vm(e,t,n,r=!1){const s={},i={};Bs(i,yi,1),e.propsDefaults=Object.create(null),ah(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Vp(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Im(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=J(s),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(mi(e.emitsOptions,p))continue;const m=t[p];if(l)if(G(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const b=On(p);s[b]=No(l,a,b,m,e,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{ah(e,t,s,i)&&(c=!0);let u;for(const f in a)(!t||!G(t,f)&&((u=Kn(f))===f||!G(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=No(l,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!G(t,f))&&(delete i[f],c=!0)}c&&ve(e,"set","$attrs")}function ah(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Vs(l))continue;const c=t[l];let u;s&&G(s,u=On(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:mi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=J(n),c=a||st;for(let u=0;u<i.length;u++){const f=i[u];n[f]=No(s,l,f,c[f],e,!G(c,f))}}return o}function No(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Fn(s),r=c[n]=l.call(null,t),an())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Kn(n))&&(r=!0))}return r}function lh(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!q(e)){const u=f=>{l=!0;const[p,m]=lh(f,t,!0);Ot(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return lt(e)&&r.set(e,Pn),Pn;if(U(i))for(let u=0;u<i.length;u++){const f=On(i[u]);ec(f)&&(o[f]=st)}else if(i)for(const u in i){const f=On(u);if(ec(f)){const p=i[u],m=o[f]=U(p)||q(p)?{type:p}:Ot({},p);if(m){const b=sc(Boolean,m.type),P=sc(String,m.type);m[0]=b>-1,m[1]=P<0||b<P,(b>-1||G(m,"default"))&&a.push(f)}}}const c=[o,a];return lt(e)&&r.set(e,c),c}function ec(e){return e[0]!=="$"}function nc(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function rc(e,t){return nc(e)===nc(t)}function sc(e,t){return U(t)?t.findIndex(n=>rc(n,e)):q(t)&&rc(t,e)?0:-1}const ch=e=>e[0]==="_"||e==="$stable",ba=e=>U(e)?e.map(ue):[ue(e)],wm=(e,t,n)=>{if(t._n)return t;const r=zp((...s)=>ba(t(...s)),n);return r._c=!1,r},uh=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ch(s))continue;const i=e[s];if(q(i))t[s]=wm(s,i,r);else if(i!=null){const o=ba(i);t[s]=()=>o}}},hh=(e,t)=>{const n=ba(t);e.slots.default=()=>n},Am=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),Bs(t,"_",n)):uh(t,e.slots={})}else e.slots={},t&&hh(e,t);Bs(e.slots,yi,1)},Rm=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=st;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Ot(s,t),!n&&a===1&&delete s._):(i=!t.$stable,uh(t,s)),o=t}else t&&(hh(e,t),o={default:1});if(i)for(const a in s)!ch(a)&&o[a]==null&&delete s[a]};function Oo(e,t,n,r,s=!1){if(U(e)){e.forEach((p,m)=>Oo(p,t&&(U(t)?t[m]:t),n,r,s));return}if(xs(r)&&!s)return;const i=r.shapeFlag&4?Ei(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===st?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,G(f,c)&&(f[c]=null)):Dt(c)&&(c.value=null)),q(l))ke(l,a,12,[o,u]);else{const p=_t(l),m=Dt(l);if(p||m){const b=()=>{if(e.f){const P=p?G(f,l)?f[l]:u[l]:l.value;s?U(P)&&ga(P,i):U(P)?P.includes(i)||P.push(i):p?(u[l]=[i],G(f,l)&&(f[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,G(f,l)&&(f[l]=o)):m&&(l.value=o,e.k&&(u[e.k]=o))};o?(b.id=-1,Bt(b,n)):b()}}}const Bt=Xp;function Pm(e){return Cm(e)}function Cm(e,t){const n=Ao();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=te,insertStaticContent:b}=e,P=(h,d,g,y=null,E=null,w=null,C=!1,I=null,A=!!d.dynamicChildren)=>{if(h===d)return;h&&!or(h,d)&&(y=ms(h),oe(h,E,w,!0),h=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:v,ref:O,shapeFlag:x}=d;switch(v){case _i:V(h,d,g,y);break;case br:z(h,d,g,y);break;case no:h==null&&Y(d,g,y,C);break;case ce:fs(h,d,g,y,E,w,C,I,A);break;default:x&1?Ut(h,d,g,y,E,w,C,I,A):x&6?ds(h,d,g,y,E,w,C,I,A):(x&64||x&128)&&v.process(h,d,g,y,E,w,C,I,A,_n)}O!=null&&E&&Oo(O,h&&h.ref,w,d||h,!d)},V=(h,d,g,y)=>{if(h==null)r(d.el=a(d.children),g,y);else{const E=d.el=h.el;d.children!==h.children&&c(E,d.children)}},z=(h,d,g,y)=>{h==null?r(d.el=l(d.children||""),g,y):d.el=h.el},Y=(h,d,g,y)=>{[h.el,h.anchor]=b(h.children,d,g,y,h.el,h.anchor)},Z=({el:h,anchor:d},g,y)=>{let E;for(;h&&h!==d;)E=p(h),r(h,g,y),h=E;r(d,g,y)},k=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),s(h),h=g;s(d)},Ut=(h,d,g,y,E,w,C,I,A)=>{C=C||d.type==="svg",h==null?Gt(d,g,y,E,w,C,I,A):rr(h,d,E,w,C,I,A)},Gt=(h,d,g,y,E,w,C,I)=>{let A,v;const{type:O,props:x,shapeFlag:M,transition:$,dirs:H}=h;if(A=h.el=o(h.type,w,x&&x.is,x),M&8?u(A,h.children):M&16&&De(h.children,A,null,y,E,w&&O!=="foreignObject",C,I),H&&Ye(h,null,y,"created"),We(A,h,h.scopeId,C,y),x){for(const et in x)et!=="value"&&!Vs(et)&&i(A,et,null,x[et],w,h.children,y,E,ye);"value"in x&&i(A,"value",null,x.value),(v=x.onVnodeBeforeMount)&&le(v,y,h)}H&&Ye(h,null,y,"beforeMount");const rt=Sm(E,$);rt&&$.beforeEnter(A),r(A,d,g),((v=x&&x.onVnodeMounted)||rt||H)&&Bt(()=>{v&&le(v,y,h),rt&&$.enter(A),H&&Ye(h,null,y,"mounted")},E)},We=(h,d,g,y,E)=>{if(g&&m(h,g),y)for(let w=0;w<y.length;w++)m(h,y[w]);if(E){let w=E.subTree;if(d===w){const C=E.vnode;We(h,C,C.scopeId,C.slotScopeIds,E.parent)}}},De=(h,d,g,y,E,w,C,I,A=0)=>{for(let v=A;v<h.length;v++){const O=h[v]=I?Ne(h[v]):ue(h[v]);P(null,O,d,g,y,E,w,C,I)}},rr=(h,d,g,y,E,w,C)=>{const I=d.el=h.el;let{patchFlag:A,dynamicChildren:v,dirs:O}=d;A|=h.patchFlag&16;const x=h.props||st,M=d.props||st;let $;g&&Xe(g,!1),($=M.onVnodeBeforeUpdate)&&le($,g,d,h),O&&Ye(d,h,g,"beforeUpdate"),g&&Xe(g,!0);const H=E&&d.type!=="foreignObject";if(v?ie(h.dynamicChildren,v,I,g,y,H,w):C||nt(h,d,I,null,g,y,H,w,!1),A>0){if(A&16)sr(I,d,x,M,g,y,E);else if(A&2&&x.class!==M.class&&i(I,"class",null,M.class,E),A&4&&i(I,"style",x.style,M.style,E),A&8){const rt=d.dynamicProps;for(let et=0;et<rt.length;et++){const ft=rt[et],Qt=x[ft],yn=M[ft];(yn!==Qt||ft==="value")&&i(I,ft,Qt,yn,E,h.children,g,y,ye)}}A&1&&h.children!==d.children&&u(I,d.children)}else!C&&v==null&&sr(I,d,x,M,g,y,E);(($=M.onVnodeUpdated)||O)&&Bt(()=>{$&&le($,g,d,h),O&&Ye(d,h,g,"updated")},y)},ie=(h,d,g,y,E,w,C)=>{for(let I=0;I<d.length;I++){const A=h[I],v=d[I],O=A.el&&(A.type===ce||!or(A,v)||A.shapeFlag&70)?f(A.el):g;P(A,v,O,null,y,E,w,C,!0)}},sr=(h,d,g,y,E,w,C)=>{if(g!==y){if(g!==st)for(const I in g)!Vs(I)&&!(I in y)&&i(h,I,g[I],null,C,d.children,E,w,ye);for(const I in y){if(Vs(I))continue;const A=y[I],v=g[I];A!==v&&I!=="value"&&i(h,I,v,A,C,d.children,E,w,ye)}"value"in y&&i(h,"value",g.value,y.value)}},fs=(h,d,g,y,E,w,C,I,A)=>{const v=d.el=h?h.el:a(""),O=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:M,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),h==null?(r(v,g,y),r(O,g,y),De(d.children,g,O,E,w,C,I,A)):x>0&&x&64&&M&&h.dynamicChildren?(ie(h.dynamicChildren,M,g,E,w,C,I),(d.key!=null||E&&d===E.subTree)&&fh(h,d,!0)):nt(h,d,g,O,E,w,C,I,A)},ds=(h,d,g,y,E,w,C,I,A)=>{d.slotScopeIds=I,h==null?d.shapeFlag&512?E.ctx.activate(d,g,y,C,A):Qi(d,g,y,E,w,C,A):Ol(h,d,A)},Qi=(h,d,g,y,E,w,C)=>{const I=h.component=Bm(h,y,E);if(eh(h)&&(I.ctx.renderer=_n),$m(I),I.asyncDep){if(E&&E.registerDep(I,kt),!h.el){const A=I.subTree=we(br);z(null,A,d,g)}return}kt(I,h,d,g,E,w,C)},Ol=(h,d,g)=>{const y=d.component=h.component;if(Wp(h,d,g))if(y.asyncDep&&!y.asyncResolved){ut(y,d,g);return}else y.next=d,Bp(y.update),y.update();else d.el=h.el,y.vnode=d},kt=(h,d,g,y,E,w,C)=>{const I=()=>{if(h.isMounted){let{next:O,bu:x,u:M,parent:$,vnode:H}=h,rt=O,et;Xe(h,!1),O?(O.el=H.el,ut(h,O,C)):O=H,x&&Ds(x),(et=O.props&&O.props.onVnodeBeforeUpdate)&&le(et,$,O,H),Xe(h,!0);const ft=Zi(h),Qt=h.subTree;h.subTree=ft,P(Qt,ft,f(Qt.el),ms(Qt),h,E,w),O.el=ft.el,rt===null&&Gp(h,ft.el),M&&Bt(M,E),(et=O.props&&O.props.onVnodeUpdated)&&Bt(()=>le(et,$,O,H),E)}else{let O;const{el:x,props:M}=d,{bm:$,m:H,parent:rt}=h,et=xs(d);if(Xe(h,!1),$&&Ds($),!et&&(O=M&&M.onVnodeBeforeMount)&&le(O,rt,d),Xe(h,!0),x&&Xi){const ft=()=>{h.subTree=Zi(h),Xi(x,h.subTree,h,E,null)};et?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ft()):ft()}else{const ft=h.subTree=Zi(h);P(null,ft,g,y,h,E,w),d.el=ft.el}if(H&&Bt(H,E),!et&&(O=M&&M.onVnodeMounted)){const ft=d;Bt(()=>le(O,rt,ft),E)}(d.shapeFlag&256||rt&&xs(rt.vnode)&&rt.vnode.shapeFlag&256)&&h.a&&Bt(h.a,E),h.isMounted=!0,d=g=y=null}},A=h.effect=new Ta(I,()=>Ca(v),h.scope),v=h.update=()=>A.run();v.id=h.uid,Xe(h,!0),v()},ut=(h,d,g)=>{d.component=h;const y=h.vnode.props;h.vnode=d,h.next=null,Im(h,d.props,y,g),Rm(h,d.children,g),Wn(),Ql(),Gn()},nt=(h,d,g,y,E,w,C,I,A=!1)=>{const v=h&&h.children,O=h?h.shapeFlag:0,x=d.children,{patchFlag:M,shapeFlag:$}=d;if(M>0){if(M&128){ps(v,x,g,y,E,w,C,I,A);return}else if(M&256){Ge(v,x,g,y,E,w,C,I,A);return}}$&8?(O&16&&ye(v,E,w),x!==v&&u(g,x)):O&16?$&16?ps(v,x,g,y,E,w,C,I,A):ye(v,E,w,!0):(O&8&&u(g,""),$&16&&De(x,g,y,E,w,C,I,A))},Ge=(h,d,g,y,E,w,C,I,A)=>{h=h||Pn,d=d||Pn;const v=h.length,O=d.length,x=Math.min(v,O);let M;for(M=0;M<x;M++){const $=d[M]=A?Ne(d[M]):ue(d[M]);P(h[M],$,g,null,E,w,C,I,A)}v>O?ye(h,E,w,!0,!1,x):De(d,g,y,E,w,C,I,A,x)},ps=(h,d,g,y,E,w,C,I,A)=>{let v=0;const O=d.length;let x=h.length-1,M=O-1;for(;v<=x&&v<=M;){const $=h[v],H=d[v]=A?Ne(d[v]):ue(d[v]);if(or($,H))P($,H,g,null,E,w,C,I,A);else break;v++}for(;v<=x&&v<=M;){const $=h[x],H=d[M]=A?Ne(d[M]):ue(d[M]);if(or($,H))P($,H,g,null,E,w,C,I,A);else break;x--,M--}if(v>x){if(v<=M){const $=M+1,H=$<O?d[$].el:y;for(;v<=M;)P(null,d[v]=A?Ne(d[v]):ue(d[v]),g,H,E,w,C,I,A),v++}}else if(v>M)for(;v<=x;)oe(h[v],E,w,!0),v++;else{const $=v,H=v,rt=new Map;for(v=H;v<=M;v++){const zt=d[v]=A?Ne(d[v]):ue(d[v]);zt.key!=null&&rt.set(zt.key,v)}let et,ft=0;const Qt=M-H+1;let yn=!1,Fl=0;const ir=new Array(Qt);for(v=0;v<Qt;v++)ir[v]=0;for(v=$;v<=x;v++){const zt=h[v];if(ft>=Qt){oe(zt,E,w,!0);continue}let ae;if(zt.key!=null)ae=rt.get(zt.key);else for(et=H;et<=M;et++)if(ir[et-H]===0&&or(zt,d[et])){ae=et;break}ae===void 0?oe(zt,E,w,!0):(ir[ae-H]=v+1,ae>=Fl?Fl=ae:yn=!0,P(zt,d[ae],g,null,E,w,C,I,A),ft++)}const Ll=yn?bm(ir):Pn;for(et=Ll.length-1,v=Qt-1;v>=0;v--){const zt=H+v,ae=d[zt],Ul=zt+1<O?d[zt+1].el:y;ir[v]===0?P(null,ae,g,Ul,E,w,C,I,A):yn&&(et<0||v!==Ll[et]?Qe(ae,g,Ul,2):et--)}}},Qe=(h,d,g,y,E=null)=>{const{el:w,type:C,transition:I,children:A,shapeFlag:v}=h;if(v&6){Qe(h.component.subTree,d,g,y);return}if(v&128){h.suspense.move(d,g,y);return}if(v&64){C.move(h,d,g,_n);return}if(C===ce){r(w,d,g);for(let x=0;x<A.length;x++)Qe(A[x],d,g,y);r(h.anchor,d,g);return}if(C===no){Z(h,d,g);return}if(y!==2&&v&1&&I)if(y===0)I.beforeEnter(w),r(w,d,g),Bt(()=>I.enter(w),E);else{const{leave:x,delayLeave:M,afterLeave:$}=I,H=()=>r(w,d,g),rt=()=>{x(w,()=>{H(),$&&$()})};M?M(w,H,rt):rt()}else r(w,d,g)},oe=(h,d,g,y=!1,E=!1)=>{const{type:w,props:C,ref:I,children:A,dynamicChildren:v,shapeFlag:O,patchFlag:x,dirs:M}=h;if(I!=null&&Oo(I,null,g,h,!0),O&256){d.ctx.deactivate(h);return}const $=O&1&&M,H=!xs(h);let rt;if(H&&(rt=C&&C.onVnodeBeforeUnmount)&&le(rt,d,h),O&6)Gd(h.component,g,y);else{if(O&128){h.suspense.unmount(g,y);return}$&&Ye(h,null,d,"beforeUnmount"),O&64?h.type.remove(h,d,g,E,_n,y):v&&(w!==ce||x>0&&x&64)?ye(v,d,g,!1,!0):(w===ce&&x&384||!E&&O&16)&&ye(A,d,g),y&&Ml(h)}(H&&(rt=C&&C.onVnodeUnmounted)||$)&&Bt(()=>{rt&&le(rt,d,h),$&&Ye(h,null,d,"unmounted")},g)},Ml=h=>{const{type:d,el:g,anchor:y,transition:E}=h;if(d===ce){Wd(g,y);return}if(d===no){k(h);return}const w=()=>{s(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:C,delayLeave:I}=E,A=()=>C(g,w);I?I(h.el,w,A):A()}else w()},Wd=(h,d)=>{let g;for(;h!==d;)g=p(h),s(h),h=g;s(d)},Gd=(h,d,g)=>{const{bum:y,scope:E,update:w,subTree:C,um:I}=h;y&&Ds(y),E.stop(),w&&(w.active=!1,oe(C,h,d,g)),I&&Bt(I,d),Bt(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ye=(h,d,g,y=!1,E=!1,w=0)=>{for(let C=w;C<h.length;C++)oe(h[C],d,g,y,E)},ms=h=>h.shapeFlag&6?ms(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),kl=(h,d,g)=>{h==null?d._vnode&&oe(d._vnode,null,null,!0):P(d._vnode||null,h,d,null,null,null,g),Ql(),Qu(),d._vnode=h},_n={p:P,um:oe,m:Qe,r:Ml,mt:Qi,mc:De,pc:nt,pbc:ie,n:ms,o:e};let Yi,Xi;return t&&([Yi,Xi]=t(_n)),{render:kl,hydrate:Yi,createApp:Em(kl,Yi)}}function Xe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Sm(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fh(e,t,n=!1){const r=e.children,s=t.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ne(s[i]),a.el=o.el),n||fh(o,a)),a.type===_i&&(a.el=o.el)}}function bm(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vm=e=>e.__isTeleport,ce=Symbol.for("v-fgt"),_i=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),no=Symbol.for("v-stc"),yr=[];let Zt=null;function Er(e=!1){yr.push(Zt=e?null:[])}function Dm(){yr.pop(),Zt=yr[yr.length-1]||null}let Vr=1;function ic(e){Vr+=e}function xm(e){return e.dynamicChildren=Vr>0?Zt||Pn:null,Dm(),Vr>0&&Zt&&Zt.push(e),e}function Tr(e,t,n,r,s,i){return xm(Ie(e,t,n,r,s,i,!0))}function Nm(e){return e?e.__v_isVNode===!0:!1}function or(e,t){return e.type===t.type&&e.key===t.key}const yi="__vInternal",dh=({key:e})=>e??null,Os=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_t(e)||Dt(e)||q(e)?{i:Jt,r:e,k:t,f:!!n}:e:null);function Ie(e,t=null,n=null,r=0,s=null,i=e===ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&dh(t),ref:t&&Os(t),scopeId:Ju,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Jt};return a?(Va(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),Vr>0&&!o&&Zt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Zt.push(l),l}const we=Om;function Om(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Qp)&&(e=br),Nm(e)){const a=kn(e,t,!0);return n&&Va(a,n),Vr>0&&!i&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(e)]=a:Zt.push(a)),a.patchFlag|=-2,a}if(Hm(e)&&(e=e.__vccOpts),t){t=Mm(t);let{class:a,style:l}=t;a&&!_t(a)&&(t.class=fi(a)),lt(l)&&($u(l)&&!U(l)&&(l=Ot({},l)),t.style=ya(l))}const o=_t(e)?1:Yp(e)?128:Vm(e)?64:lt(e)?4:q(e)?2:0;return Ie(e,t,n,r,s,o,i,!0)}function Mm(e){return e?$u(e)||yi in e?Ot({},e):e:null}function kn(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Fm(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&dh(a),ref:t&&t.ref?n&&s?U(s)?s.concat(Os(t)):[s,Os(t)]:Os(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kn(e.ssContent),ssFallback:e.ssFallback&&kn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function km(e=" ",t=0){return we(_i,null,e,t)}function ue(e){return e==null||typeof e=="boolean"?we(br):U(e)?we(ce,null,e.slice()):typeof e=="object"?Ne(e):we(_i,null,String(e))}function Ne(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kn(e)}function Va(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Va(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(yi in t)?t._ctx=Jt:s===3&&Jt&&(Jt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Jt},n=32):(t=String(t),r&64?(n=16,t=[km(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fm(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=fi([t.class,r.class]));else if(s==="style")t.style=ya([t.style,r.style]);else if(li(s)){const i=t[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function le(e,t,n,r=null){ee(e,t,7,[n,r])}const Lm=oh();let Um=0;function Bm(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Lm,i={uid:Um++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lh(r,s),emitsOptions:Xu(r,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:r.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=qp.bind(null,i),e.ce&&e.ce(i),i}let Vt=null,Da,En,oc="__VUE_INSTANCE_SETTERS__";(En=Ao()[oc])||(En=Ao()[oc]=[]),En.push(e=>Vt=e),Da=e=>{En.length>1?En.forEach(t=>t(e)):En[0](e)};const Fn=e=>{Da(e),e.scope.on()},an=()=>{Vt&&Vt.scope.off(),Da(null)};function ph(e){return e.vnode.shapeFlag&4}let Dr=!1;function $m(e,t=!1){Dr=t;const{props:n,children:r}=e.vnode,s=ph(e);vm(e,n,s,t),Am(e,r);const i=s?jm(e,t):void 0;return Dr=!1,i}function jm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ju(new Proxy(e.ctx,fm));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?zm(e):null;Fn(e),Wn();const i=ke(r,e,0,[e.props,s]);if(Gn(),an(),Au(i)){if(i.then(an,an),t)return i.then(o=>{ac(e,o,t)}).catch(o=>{pi(o,e,0)});e.asyncDep=i}else ac(e,i,t)}else mh(e,t)}function ac(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:lt(t)&&(e.setupState=Ku(t)),mh(e,n)}let lc;function mh(e,t,n){const r=e.type;if(!e.render){if(!t&&lc&&!r.render){const s=r.template||Sa(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ot(Ot({isCustomElement:i,delimiters:a},o),l);r.render=lc(s,c)}}e.render=r.render||te}{Fn(e),Wn();try{dm(e)}finally{Gn(),an()}}}function qm(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return qt(e,"get","$attrs"),t[n]}}))}function zm(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return qm(e)},slots:e.slots,emit:e.emit,expose:t}}function Ei(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ku(ju(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _r)return _r[n](e)},has(t,n){return n in t||n in _r}}))}function Hm(e){return q(e)&&"__vccOpts"in e}const Km=(e,t)=>kp(e,t,Dr),Wm=Symbol.for("v-scx"),Gm=()=>Ns(Wm),Qm="3.3.8",Ym="http://www.w3.org/2000/svg",tn=typeof document<"u"?document:null,cc=tn&&tn.createElement("template"),Xm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?tn.createElementNS(Ym,e):tn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cc.innerHTML=r?`<svg>${e}</svg>`:e;const a=cc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Jm=Symbol("_vtc");function Zm(e,t,n){const r=e[Jm];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const tg=Symbol("_vod");function eg(e,t,n){const r=e.style,s=_t(n);if(n&&!s){if(t&&!_t(t))for(const i in t)n[i]==null&&Mo(r,i,"");for(const i in n)Mo(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),tg in e&&(r.display=i)}}const uc=/\s*!important$/;function Mo(e,t,n){if(U(n))n.forEach(r=>Mo(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ng(e,t);uc.test(n)?e.setProperty(Kn(r),n.replace(uc,""),"important"):e[r]=n}}const hc=["Webkit","Moz","ms"],ro={};function ng(e,t){const n=ro[t];if(n)return n;let r=On(t);if(r!=="filter"&&r in e)return ro[t]=r;r=Cu(r);for(let s=0;s<hc.length;s++){const i=hc[s]+r;if(i in e)return ro[t]=i}return t}const fc="http://www.w3.org/1999/xlink";function rg(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fc,t.slice(6,t.length)):e.setAttributeNS(fc,t,n);else{const i=op(t);n==null||i&&!Su(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function sg(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Su(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function vn(e,t,n,r){e.addEventListener(t,n,r)}function ig(e,t,n,r){e.removeEventListener(t,n,r)}const dc=Symbol("_vei");function og(e,t,n,r,s=null){const i=e[dc]||(e[dc]={}),o=i[t];if(r&&o)o.value=r;else{const[a,l]=ag(t);if(r){const c=i[t]=ug(r,s);vn(e,a,c,l)}else o&&(ig(e,a,o,l),i[t]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function ag(e){let t;if(pc.test(e)){t={};let r;for(;r=e.match(pc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Kn(e.slice(2)),t]}let so=0;const lg=Promise.resolve(),cg=()=>so||(lg.then(()=>so=0),so=Date.now());function ug(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ee(hg(r,n.value),t,5,[r])};return n.value=e,n.attached=cg(),n}function hg(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const mc=/^on[a-z]/,fg=(e,t,n,r,s=!1,i,o,a,l)=>{t==="class"?Zm(e,r,s):t==="style"?eg(e,n,r):li(t)?ma(t)||og(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):dg(e,t,r,s))?sg(e,t,r,i,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),rg(e,t,r,s))};function dg(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&mc.test(t)&&q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||mc.test(t)&&_t(n)?!1:t in e}const gc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>Ds(t,n):t};function pg(e){e.target.composing=!0}function _c(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const io=Symbol("_assign"),mg={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[io]=gc(s);const i=r||s.props&&s.props.type==="number";vn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=wo(a)),e[io](a)}),n&&vn(e,"change",()=>{e.value=e.value.trim()}),t||(vn(e,"compositionstart",pg),vn(e,"compositionend",_c),vn(e,"change",_c))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[io]=gc(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&wo(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},gg=Ot({patchProp:fg},Xm);let yc;function _g(){return yc||(yc=Pm(gg))}const yg=(...e)=>{const t=_g().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Eg(r);if(!s)return;const i=t._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Eg(e){return _t(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Tg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},_h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Tg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new vg;const p=i<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),f!==64){const b=c<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ig=function(e){const t=gh(e);return _h.encodeByteArray(t,!0)},Hs=function(e){return Ig(e).replace(/\./g,"")},wg=function(e){try{return _h.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=()=>Ag().__FIREBASE_DEFAULTS__,Pg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Cg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wg(e[1]);return t&&JSON.parse(t)},yh=()=>{try{return Rg()||Pg()||Cg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Sg=e=>{var t,n;return(n=(t=yh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},bg=e=>{const t=Sg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Eh=()=>{var e;return(e=yh())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Hs(JSON.stringify(n)),Hs(JSON.stringify(o)),a].join(".")}function xg(){try{return typeof indexedDB=="object"}catch{return!1}}function Ng(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="FirebaseError";class Qn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Og,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Th.prototype.create)}}class Th{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Mg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,a,r)}}function Mg(e,t){return e.replace(kg,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const kg=/\{\$([^}]+)}/g;function ko(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ec(i)&&Ec(o)){if(!ko(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ec(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){return e&&e._delegate?e._delegate:e}class xr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Vg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ug(t))try{this.getOrInitializeService({instanceIdentifier:Je})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Je){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Je){return this.instances.has(t)}getOptions(t=Je){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Je){return this.component?this.component.multipleInstances?t:Je:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lg(e){return e===Je?void 0:e}function Ug(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const $g={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},jg=Q.INFO,qg={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},zg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=qg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vh{constructor(t){this.name=t,this._logLevel=jg,this._logHandler=zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$g[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const Hg=(e,t)=>t.some(n=>e instanceof n);let Tc,vc;function Kg(){return Tc||(Tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wg(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,Fo=new WeakMap,wh=new WeakMap,oo=new WeakMap,xa=new WeakMap;function Gg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Fe(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ih.set(n,e)}).catch(()=>{}),xa.set(t,e),t}function Qg(e){if(Fo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Fo.set(e,t)}let Lo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yg(e){Lo=e(Lo)}function Xg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ao(this),t,...n);return wh.set(r,t.sort?t.sort():[t]),Fe(r)}:Wg().includes(e)?function(...t){return e.apply(ao(this),t),Fe(Ih.get(this))}:function(...t){return Fe(e.apply(ao(this),t))}}function Jg(e){return typeof e=="function"?Xg(e):(e instanceof IDBTransaction&&Qg(e),Hg(e,Kg())?new Proxy(e,Lo):e)}function Fe(e){if(e instanceof IDBRequest)return Gg(e);if(oo.has(e))return oo.get(e);const t=Jg(e);return t!==e&&(oo.set(e,t),xa.set(t,e)),t}const ao=e=>xa.get(e);function Zg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Fe(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fe(o.result),l.oldVersion,l.newVersion,Fe(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const t_=["get","getKey","getAll","getAllKeys","count"],e_=["put","add","delete","clear"],lo=new Map;function Ic(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(lo.get(t))return lo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=e_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||t_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return lo.set(t,i),i}Yg(e=>({...e,get:(t,n,r)=>Ic(t,n)||e.get(t,n,r),has:(t,n)=>!!Ic(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(r_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function r_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Uo="@firebase/app",wc="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new vh("@firebase/app"),s_="@firebase/app-compat",i_="@firebase/analytics-compat",o_="@firebase/analytics",a_="@firebase/app-check-compat",l_="@firebase/app-check",c_="@firebase/auth",u_="@firebase/auth-compat",h_="@firebase/database",f_="@firebase/database-compat",d_="@firebase/functions",p_="@firebase/functions-compat",m_="@firebase/installations",g_="@firebase/installations-compat",__="@firebase/messaging",y_="@firebase/messaging-compat",E_="@firebase/performance",T_="@firebase/performance-compat",v_="@firebase/remote-config",I_="@firebase/remote-config-compat",w_="@firebase/storage",A_="@firebase/storage-compat",R_="@firebase/firestore",P_="@firebase/firestore-compat",C_="firebase",S_="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="[DEFAULT]",b_={[Uo]:"fire-core",[s_]:"fire-core-compat",[o_]:"fire-analytics",[i_]:"fire-analytics-compat",[l_]:"fire-app-check",[a_]:"fire-app-check-compat",[c_]:"fire-auth",[u_]:"fire-auth-compat",[h_]:"fire-rtdb",[f_]:"fire-rtdb-compat",[d_]:"fire-fn",[p_]:"fire-fn-compat",[m_]:"fire-iid",[g_]:"fire-iid-compat",[__]:"fire-fcm",[y_]:"fire-fcm-compat",[E_]:"fire-perf",[T_]:"fire-perf-compat",[v_]:"fire-rc",[I_]:"fire-rc-compat",[w_]:"fire-gcs",[A_]:"fire-gcs-compat",[R_]:"fire-fst",[P_]:"fire-fst-compat","fire-js":"fire-js",[C_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Map,$o=new Map;function V_(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ws(e){const t=e.name;if($o.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;$o.set(t,e);for(const n of Ks.values())V_(n,e);return!0}function D_(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Le=new Th("app","Firebase",x_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=S_;function Ah(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Bo,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Le.create("bad-app-name",{appName:String(s)});if(n||(n=Eh()),!n)throw Le.create("no-options");const i=Ks.get(s);if(i){if(ko(n,i.options)&&ko(r,i.config))return i;throw Le.create("duplicate-app",{appName:s})}const o=new Bg(s);for(const l of $o.values())o.addComponent(l);const a=new N_(n,r,o);return Ks.set(s,a),a}function M_(e=Bo){const t=Ks.get(e);if(!t&&e===Bo&&Eh())return Ah();if(!t)throw Le.create("no-app",{appName:e});return t}function Vn(e,t,n){var r;let s=(r=b_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}Ws(new xr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firebase-heartbeat-database",F_=1,Nr="firebase-heartbeat-store";let co=null;function Rh(){return co||(co=Zg(k_,F_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Nr)}}}).catch(e=>{throw Le.create("idb-open",{originalErrorMessage:e.message})})),co}async function L_(e){try{return await(await Rh()).transaction(Nr).objectStore(Nr).get(Ph(e))}catch(t){if(t instanceof Qn)un.warn(t.message);else{const n=Le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(n.message)}}}async function Ac(e,t){try{const r=(await Rh()).transaction(Nr,"readwrite");await r.objectStore(Nr).put(t,Ph(e)),await r.done}catch(n){if(n instanceof Qn)un.warn(n.message);else{const r=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function Ph(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=1024,B_=30*24*60*60*1e3;class $_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=B_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rc(),{heartbeatsToSend:n,unsentEntries:r}=j_(this._heartbeatsCache.heartbeats),s=Hs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Rc(){return new Date().toISOString().substring(0,10)}function j_(e,t=U_){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class q_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xg()?Ng().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await L_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Pc(e){return Hs(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(e){Ws(new xr("platform-logger",t=>new n_(t),"PRIVATE")),Ws(new xr("heartbeat",t=>new $_(t),"PRIVATE")),Vn(Uo,wc,e),Vn(Uo,wc,"esm2017"),Vn("fire-js","")}z_("");var H_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Na=Na||{},L=H_||self;function Ti(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function K_(e){return Object.prototype.hasOwnProperty.call(e,uo)&&e[uo]||(e[uo]=++W_)}var uo="closure_uid_"+(1e9*Math.random()>>>0),W_=0;function G_(e,t,n){return e.call.apply(e.bind,arguments)}function Q_(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function xt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=G_:xt=Q_,xt.apply(null,arguments)}function Is(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Tt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function ze(){this.s=this.s,this.o=this.o}var Y_=0;ze.prototype.s=!1;ze.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Y_!=0)&&K_(this)};ze.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ch=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Oa(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Cc(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ti(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var X_=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",()=>{},t),L.removeEventListener("test",()=>{},t)}catch{}return e}();function Or(e){return/^[\s\xa0]*$/.test(e)}function vi(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function fe(e){return vi().indexOf(e)!=-1}function Ma(e){return Ma[" "](e),e}Ma[" "]=function(){};function J_(e,t){var n=zy;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Z_=fe("Opera"),Ln=fe("Trident")||fe("MSIE"),Sh=fe("Edge"),jo=Sh||Ln,bh=fe("Gecko")&&!(vi().toLowerCase().indexOf("webkit")!=-1&&!fe("Edge"))&&!(fe("Trident")||fe("MSIE"))&&!fe("Edge"),ty=vi().toLowerCase().indexOf("webkit")!=-1&&!fe("Edge");function Vh(){var e=L.document;return e?e.documentMode:void 0}var qo;t:{var ho="",fo=function(){var e=vi();if(bh)return/rv:([^\);]+)(\)|;)/.exec(e);if(Sh)return/Edge\/([\d\.]+)/.exec(e);if(Ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ty)return/WebKit\/(\S+)/.exec(e);if(Z_)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(fo&&(ho=fo?fo[1]:""),Ln){var po=Vh();if(po!=null&&po>parseFloat(ho)){qo=String(po);break t}}qo=ho}var zo;if(L.document&&Ln){var Sc=Vh();zo=Sc||parseInt(qo,10)||void 0}else zo=void 0;var ey=zo;function Mr(e,t){if(Nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(bh){t:{try{Ma(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ny[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Mr.$.h.call(this)}}Tt(Mr,Nt);var ny={2:"touch",3:"pen",4:"mouse"};Mr.prototype.h=function(){Mr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),ry=0;function sy(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++ry,this.fa=this.ia=!1}function Ii(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ka(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function iy(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Dh(e){const t={};for(const n in e)t[n]=e[n];return t}const bc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xh(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<bc.length;i++)n=bc[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function wi(e){this.src=e,this.g={},this.h=0}wi.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ko(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new sy(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Ho(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Ch(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ii(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ko(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Fa="closure_lm_"+(1e6*Math.random()|0),mo={};function Nh(e,t,n,r,s){if(r&&r.once)return Mh(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Nh(e,t[i],n,r,s);return null}return n=Ba(n),e&&e[Yr]?e.O(t,n,Qr(r)?!!r.capture:!!r,s):Oh(e,t,n,!1,r,s)}function Oh(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Qr(s)?!!s.capture:!!s,a=Ua(e);if(a||(e[Fa]=a=new wi(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=oy(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)X_||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Fh(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oy(){function e(n){return t.call(e.src,e.listener,n)}const t=ay;return e}function Mh(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Mh(e,t[i],n,r,s);return null}return n=Ba(n),e&&e[Yr]?e.P(t,n,Qr(r)?!!r.capture:!!r,s):Oh(e,t,n,!0,r,s)}function kh(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)kh(e,t[i],n,r,s);else r=Qr(r)?!!r.capture:!!r,n=Ba(n),e&&e[Yr]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ko(i,n,r,s),-1<n&&(Ii(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ua(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ko(t,n,r,s)),(n=-1<e?t[e]:null)&&La(n))}function La(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Yr])Ho(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Fh(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ua(t))?(Ho(n,e),n.h==0&&(n.src=null,t[Fa]=null)):Ii(e)}}}function Fh(e){return e in mo?mo[e]:mo[e]="on"+e}function ay(e,t){if(e.fa)e=!0;else{t=new Mr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&La(e),e=n.call(r,t)}return e}function Ua(e){return e=e[Fa],e instanceof wi?e:null}var go="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ba(e){return typeof e=="function"?e:(e[go]||(e[go]=function(t){return e.handleEvent(t)}),e[go])}function Et(){ze.call(this),this.i=new wi(this),this.S=this,this.J=null}Tt(Et,ze);Et.prototype[Yr]=!0;Et.prototype.removeEventListener=function(e,t,n,r){kh(this,e,t,n,r)};function At(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Nt(t,e);else if(t instanceof Nt)t.target=t.target||e;else{var s=t;t=new Nt(r,e),xh(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ws(o,r,!0,t)&&s}if(o=t.g=e,s=ws(o,r,!0,t)&&s,s=ws(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=ws(o,r,!1,t)&&s}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ii(n[r]);delete e.g[t],e.h--}}this.J=null};Et.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Et.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ws(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ho(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var $a=L.JSON.stringify;class ly{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function cy(){var e=ja;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class uy{constructor(){this.h=this.g=null}add(t,n){const r=Lh.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Lh=new ly(()=>new hy,e=>e.reset());class hy{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fy(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function dy(e){L.setTimeout(()=>{throw e},0)}let kr,Fr=!1,ja=new uy,Uh=()=>{const e=L.Promise.resolve(void 0);kr=()=>{e.then(py)}};var py=()=>{for(var e;e=cy();){try{e.h.call(e.g)}catch(n){dy(n)}var t=Lh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fr=!1};function Ai(e,t){Et.call(this),this.h=e||1,this.g=t||L,this.j=xt(this.qb,this),this.l=Date.now()}Tt(Ai,Et);R=Ai.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(qa(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qa(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}R.N=function(){Ai.$.N.call(this),qa(this),delete this.g};function za(e,t,n){if(typeof e=="function")n&&(e=xt(e,n));else if(e&&typeof e.handleEvent=="function")e=xt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function Bh(e){e.g=za(()=>{e.g=null,e.i&&(e.i=!1,Bh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class my extends ze{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Bh(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(e){ze.call(this),this.h=e,this.g={}}Tt(Lr,ze);var Vc=[];function $h(e,t,n,r){Array.isArray(n)||(n&&(Vc[0]=n.toString()),n=Vc);for(var s=0;s<n.length;s++){var i=Nh(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function jh(e){ka(e.g,function(t,n){this.g.hasOwnProperty(n)&&La(t)},e),e.g={}}Lr.prototype.N=function(){Lr.$.N.call(this),jh(this)};Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ri(){this.g=!0}Ri.prototype.Ea=function(){this.g=!1};function gy(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function _y(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Rn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ey(e,n)+(r?" "+r:"")})}function yy(e,t){e.info(function(){return"TIMEOUT: "+t})}Ri.prototype.info=function(){};function Ey(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $a(n)}catch{return t}}var pn={},Dc=null;function Pi(){return Dc=Dc||new Et}pn.Ta="serverreachability";function qh(e){Nt.call(this,pn.Ta,e)}Tt(qh,Nt);function Ur(e){const t=Pi();At(t,new qh(t))}pn.STAT_EVENT="statevent";function zh(e,t){Nt.call(this,pn.STAT_EVENT,e),this.stat=t}Tt(zh,Nt);function Lt(e){const t=Pi();At(t,new zh(t,e))}pn.Ua="timingevent";function Hh(e,t){Nt.call(this,pn.Ua,e),this.size=t}Tt(Hh,Nt);function Xr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var Ci={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Kh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ha(){}Ha.prototype.h=null;function xc(e){return e.h||(e.h=e.i())}function Wh(){}var Jr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ka(){Nt.call(this,"d")}Tt(Ka,Nt);function Wa(){Nt.call(this,"c")}Tt(Wa,Nt);var Wo;function Si(){}Tt(Si,Ha);Si.prototype.g=function(){return new XMLHttpRequest};Si.prototype.i=function(){return{}};Wo=new Si;function Zr(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Lr(this),this.P=Ty,e=jo?125:void 0,this.V=new Ai(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Gh}function Gh(){this.i=null,this.g="",this.h=!1}var Ty=45e3,Go={},Gs={};R=Zr.prototype;R.setTimeout=function(e){this.P=e};function Qo(e,t,n){e.L=1,e.v=Vi(Pe(t)),e.s=n,e.S=!0,Qh(e,null)}function Qh(e,t){e.G=Date.now(),ts(e),e.A=Pe(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),rf(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Gh,e.g=Rf(e.l,n?t:null,!e.s),0<e.O&&(e.M=new my(xt(e.Pa,e,e.g),e.O)),$h(e.U,e.g,"readystatechange",e.nb),t=e.I?Dh(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ur(),gy(e.j,e.u,e.A,e.m,e.W,e.s)}R.nb=function(e){e=e.target;const t=this.M;t&&de(e)==3?t.l():this.Pa(e)};R.Pa=function(e){try{if(e==this.g)t:{const u=de(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||jo||this.g&&(this.h.h||this.g.ja()||kc(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?Ur(3):Ur(2)),bi(this);var n=this.g.da();this.ca=n;e:if(Yh(this)){var r=kc(this.g);e="";var s=r.length,i=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),vr(this);var o="";break e}this.h.i=new L.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_y(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Or(a)){var c=a;break e}}c=null}if(n=c)Rn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,n);else{this.i=!1,this.o=3,Lt(12),nn(this),vr(this);break t}}this.S?(Xh(this,u,o),jo&&this.i&&u==3&&($h(this.U,this.V,"tick",this.mb),this.V.start())):(Rn(this.j,this.m,o,null),Yo(this,o)),u==4&&nn(this),this.i&&!this.J&&(u==4?vf(this.l,this):(this.i=!1,ts(this)))}else $y(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Lt(12)):(this.o=0,Lt(13)),nn(this),vr(this)}}}catch{}finally{}};function Yh(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Xh(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=vy(e,n),s==Gs){t==4&&(e.o=4,Lt(14),r=!1),Rn(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Go){e.o=4,Lt(15),Rn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Rn(e.j,e.m,s,null),Yo(e,s);Yh(e)&&s!=Gs&&s!=Go&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Lt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Za(t),t.M=!0,Lt(11))):(Rn(e.j,e.m,n,"[Invalid Chunked Response]"),nn(e),vr(e))}R.mb=function(){if(this.g){var e=de(this.g),t=this.g.ja();this.C<t.length&&(bi(this),Xh(this,e,t),this.i&&e!=4&&ts(this))}};function vy(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Gs:(n=Number(t.substring(n,r)),isNaN(n)?Go:(r+=1,r+n>t.length?Gs:(t=t.slice(r,r+n),e.C=r+n,t)))}R.cancel=function(){this.J=!0,nn(this)};function ts(e){e.Y=Date.now()+e.P,Jh(e,e.P)}function Jh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Xr(xt(e.lb,e),t)}function bi(e){e.B&&(L.clearTimeout(e.B),e.B=null)}R.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(yy(this.j,this.A),this.L!=2&&(Ur(),Lt(17)),nn(this),this.o=2,vr(this)):Jh(this,this.Y-e)};function vr(e){e.l.H==0||e.J||vf(e.l,e)}function nn(e){bi(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,qa(e.V),jh(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Yo(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Xo(n.i,e))){if(!e.K&&Xo(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Xs(n),Ni(n);else break t;Ja(n),Lt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xr(xt(n.ib,n),6e3));if(1>=af(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else rn(n,11)}else if((e.K||n.g==e)&&Xs(n),!Or(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const b=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var i=r.i;i.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ga(i,i.h),i.h=null))}if(r.F){const P=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(r.Da=P,it(r.I,r.F,P))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Af(r,r.J?r.pa:null,r.Y),o.K){lf(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(bi(a),ts(a)),r.g=o}else Ef(r);0<n.j.length&&Oi(n)}else c[0]!="stop"&&c[0]!="close"||rn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?rn(n,7):Xa(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ur(4)}catch{}}function Iy(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ti(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function wy(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ti(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Zh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ti(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=wy(e),r=Iy(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var tf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ay(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ln(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ln){this.h=e.h,Qs(this,e.j),this.s=e.s,this.g=e.g,Ys(this,e.m),this.l=e.l;var t=e.i,n=new Br;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Nc(this,n),this.o=e.o}else e&&(t=String(e).match(tf))?(this.h=!1,Qs(this,t[1]||"",!0),this.s=fr(t[2]||""),this.g=fr(t[3]||"",!0),Ys(this,t[4]),this.l=fr(t[5]||"",!0),Nc(this,t[6]||"",!0),this.o=fr(t[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}ln.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dr(t,Oc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(dr(t,Oc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(dr(n,n.charAt(0)=="/"?Cy:Py,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",dr(n,by)),e.join("")};function Pe(e){return new ln(e)}function Qs(e,t,n){e.j=n?fr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ys(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Nc(e,t,n){t instanceof Br?(e.i=t,Vy(e.i,e.h)):(n||(t=dr(t,Sy)),e.i=new Br(t,e.h))}function it(e,t,n){e.i.set(t,n)}function Vi(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function fr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ry),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ry(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oc=/[#\/\?@]/g,Py=/[#\?:]/g,Cy=/[#\?]/g,Sy=/[#\?@]/g,by=/#/g;function Br(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function He(e){e.g||(e.g=new Map,e.h=0,e.i&&Ay(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}R=Br.prototype;R.add=function(e,t){He(this),this.i=null,e=Yn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ef(e,t){He(e),t=Yn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nf(e,t){return He(e),t=Yn(e,t),e.g.has(t)}R.forEach=function(e,t){He(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};R.ta=function(){He(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};R.Z=function(e){He(this);let t=[];if(typeof e=="string")nf(this,e)&&(t=t.concat(this.g.get(Yn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};R.set=function(e,t){return He(this),this.i=null,e=Yn(this,e),nf(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};R.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function rf(e,t,n){ef(e,t),0<n.length&&(e.i=null,e.g.set(Yn(e,t),Oa(n)),e.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Yn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Vy(e,t){t&&!e.j&&(He(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ef(this,r),rf(this,s,n))},e)),e.j=t}var Dy=class{constructor(e,t){this.g=e,this.map=t}};function sf(e){this.l=e||xy,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xy=10;function of(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function af(e){return e.h?1:e.g?e.g.size:0}function Xo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ga(e,t){e.g?e.g.add(t):e.h=t}function lf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}sf.prototype.cancel=function(){if(this.i=cf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function cf(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Oa(e.i)}var Ny=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function Oy(){this.g=new Ny}function My(e,t,n){const r=n||"";try{Zh(e,function(s,i){let o=s;Qr(s)&&(o=$a(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function ky(e,t){const n=new Ri;if(L.Image){const r=new Image;r.onload=Is(As,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Is(As,n,r,"TestLoadImage: error",!1,t),r.onabort=Is(As,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Is(As,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function As(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function es(e){this.l=e.ec||null,this.j=e.ob||!1}Tt(es,Ha);es.prototype.g=function(){return new Di(this.l,this.j)};es.prototype.i=function(e){return function(){return e}}({});function Di(e,t){Et.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tt(Di,Et);var Qa=0;R=Di.prototype;R.open=function(e,t){if(this.readyState!=Qa)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$r(this)};R.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=Qa};R.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uf(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function uf(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}R.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ns(this):$r(this),this.readyState==3&&uf(this)}};R.Za=function(e){this.g&&(this.response=this.responseText=e,ns(this))};R.Ya=function(e){this.g&&(this.response=e,ns(this))};R.ka=function(){this.g&&ns(this)};function ns(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$r(e)}R.setRequestHeader=function(e,t){this.v.append(e,t)};R.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $r(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Fy=L.JSON.parse;function ht(e){Et.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=hf,this.L=this.M=!1}Tt(ht,Et);var hf="",Ly=/^https?$/i,Uy=["POST","PUT"];R=ht.prototype;R.Oa=function(e){this.M=e};R.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wo.g(),this.C=this.u?xc(this.u):xc(Wo),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Mc(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=L.FormData&&e instanceof L.FormData,!(0<=Ch(Uy,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{pf(this),0<this.B&&((this.L=By(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=za(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Mc(this,i)}};function By(e){return Ln&&typeof e.timeout=="number"&&e.ontimeout!==void 0}R.ua=function(){typeof Na<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function Mc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ff(e),xi(e)}function ff(e){e.F||(e.F=!0,At(e,"complete"),At(e,"error"))}R.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,At(this,"complete"),At(this,"abort"),xi(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),ht.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?df(this):this.kb())};R.kb=function(){df(this)};function df(e){if(e.h&&typeof Na<"u"&&(!e.C[1]||de(e)!=4||e.da()!=2)){if(e.v&&de(e)==4)za(e.La,0,e);else if(At(e,"readystatechange"),de(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(tf)[1]||null;!s&&L.self&&L.self.location&&(s=L.self.location.protocol.slice(0,-1)),r=!Ly.test(s?s.toLowerCase():"")}n=r}if(n)At(e,"complete"),At(e,"success");else{e.m=6;try{var i=2<de(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",ff(e)}}finally{xi(e)}}}}function xi(e,t){if(e.g){pf(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||At(e,"ready");try{n.onreadystatechange=r}catch{}}}function pf(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}R.isActive=function(){return!!this.g};function de(e){return e.g?e.g.readyState:0}R.da=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Fy(t)}};function kc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case hf:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function $y(e){const t={};e=(e.g&&2<=de(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Or(e[r]))continue;var n=fy(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}iy(t,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mf(e){let t="";return ka(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ya(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=mf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):it(e,t,n))}function ar(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function gf(e){this.Ga=0,this.j=[],this.l=new Ri,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ar("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ar("baseRetryDelayMs",5e3,e),this.hb=ar("retryDelaySeedMs",1e4,e),this.eb=ar("forwardChannelMaxRetries",2,e),this.xa=ar("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new sf(e&&e.concurrentRequestLimit),this.Ja=new Oy,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=gf.prototype;R.ra=8;R.H=1;function Xa(e){if(_f(e),e.H==3){var t=e.W++,n=Pe(e.I);if(it(n,"SID",e.K),it(n,"RID",t),it(n,"TYPE","terminate"),rs(e,n),t=new Zr(e,e.l,t),t.L=2,t.v=Vi(Pe(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=Rf(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ts(t)}wf(e)}function Ni(e){e.g&&(Za(e),e.g.cancel(),e.g=null)}function _f(e){Ni(e),e.u&&(L.clearTimeout(e.u),e.u=null),Xs(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function Oi(e){if(!of(e.i)&&!e.m){e.m=!0;var t=e.Na;kr||Uh(),Fr||(kr(),Fr=!0),ja.add(t,e),e.C=0}}function jy(e,t){return af(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Xr(xt(e.Na,e,t),If(e,e.C)),e.C++,!0)}R.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Zr(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Dh(i),xh(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=yf(this,s,t),n=Pe(this.I),it(n,"RID",e),it(n,"CVER",22),this.F&&it(n,"X-HTTP-Session-Id",this.F),rs(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(mf(i)))+"&"+t:this.o&&Ya(n,this.o,i)),Ga(this.i,s),this.bb&&it(n,"TYPE","init"),this.P?(it(n,"$req",t),it(n,"SID","null"),s.aa=!0,Qo(s,n,null)):Qo(s,n,t),this.H=2}}else this.H==3&&(e?Fc(this,e):this.j.length==0||of(this.i)||Fc(this))};function Fc(e,t){var n;t?n=t.m:n=e.W++;const r=Pe(e.I);it(r,"SID",e.K),it(r,"RID",n),it(r,"AID",e.V),rs(e,r),e.o&&e.s&&Ya(r,e.o,e.s),n=new Zr(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=yf(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ga(e.i,n),Qo(n,r,t)}function rs(e,t){e.na&&ka(e.na,function(n,r){it(t,r,n)}),e.h&&Zh({},function(n,r){it(t,r,n)})}function yf(e,t,n){n=Math.min(e.j.length,n);var r=e.h?xt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{My(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ef(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;kr||Uh(),Fr||(kr(),Fr=!0),ja.add(t,e),e.A=0}}function Ja(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Xr(xt(e.Ma,e),If(e,e.A)),e.A++,!0)}R.Ma=function(){if(this.u=null,Tf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Xr(xt(this.jb,this),e)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Lt(10),Ni(this),Tf(this))};function Za(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function Tf(e){e.g=new Zr(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Pe(e.wa);it(t,"RID","rpc"),it(t,"SID",e.K),it(t,"AID",e.V),it(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&it(t,"TO",e.qa),it(t,"TYPE","xmlhttp"),rs(e,t),e.o&&e.s&&Ya(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Vi(Pe(t)),n.s=null,n.S=!0,Qh(n,e)}R.ib=function(){this.v!=null&&(this.v=null,Ni(this),Ja(this),Lt(19))};function Xs(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function vf(e,t){var n=null;if(e.g==t){Xs(e),Za(e),e.g=null;var r=2}else if(Xo(e.i,t))n=t.F,lf(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=Pi(),At(r,new Hh(r,n)),Oi(e)}else Ef(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&jy(e,t)||r==2&&Ja(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:rn(e,5);break;case 4:rn(e,10);break;case 3:rn(e,6);break;default:rn(e,2)}}}function If(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function rn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=xt(e.pb,e);n||(n=new ln("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Qs(n,"https"),Vi(n)),ky(n.toString(),r)}else Lt(2);e.H=0,e.h&&e.h.za(t),wf(e),_f(e)}R.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Lt(2)):(this.l.info("Failed to ping google.com"),Lt(1))};function wf(e){if(e.H=0,e.ma=[],e.h){const t=cf(e.i);(t.length!=0||e.j.length!=0)&&(Cc(e.ma,t),Cc(e.ma,e.j),e.i.i.length=0,Oa(e.j),e.j.length=0),e.h.ya()}}function Af(e,t,n){var r=n instanceof ln?Pe(n):new ln(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ys(r,r.m);else{var s=L.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new ln(null);r&&Qs(i,r),t&&(i.g=t),s&&Ys(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&it(r,n,t),it(r,"VER",e.ra),rs(e,r),r}function Rf(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ht(new es({ob:!0})):new ht(e.va),t.Oa(e.J),t}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pf(){}R=Pf.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Js(){if(Ln&&!(10<=Number(ey)))throw Error("Environmental error: no available transport.")}Js.prototype.g=function(e,t){return new Kt(e,t)};function Kt(e,t){Et.call(this),this.g=new gf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Or(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Or(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xn(this)}Tt(Kt,Et);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Lt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Af(e,null,e.Y),Oi(e)};Kt.prototype.close=function(){Xa(this.g)};Kt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=$a(e),e=n);t.j.push(new Dy(t.fb++,e)),t.H==3&&Oi(t)};Kt.prototype.N=function(){this.g.h=null,delete this.j,Xa(this.g),delete this.g,Kt.$.N.call(this)};function Cf(e){Ka.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Tt(Cf,Ka);function Sf(){Wa.call(this),this.status=1}Tt(Sf,Wa);function Xn(e){this.g=e}Tt(Xn,Pf);Xn.prototype.Ba=function(){At(this.g,"a")};Xn.prototype.Aa=function(e){At(this.g,new Cf(e))};Xn.prototype.za=function(e){At(this.g,new Sf)};Xn.prototype.ya=function(){At(this.g,"b")};function qy(){this.blockSize=-1}function re(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Tt(re,qy);re.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _o(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}re.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)_o(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){_o(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){_o(this,r),s=0;break}}this.h=s,this.i+=t};re.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function tt(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var zy={};function tl(e){return-128<=e&&128>e?J_(e,function(t){return new tt([t|0],0>t?-1:0)}):new tt([e|0],0>e?-1:0)}function pe(e){if(isNaN(e)||!isFinite(e))return Dn;if(0>e)return It(pe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Jo;return new tt(t,0)}function bf(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return It(bf(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pe(Math.pow(t,8)),r=Dn,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=pe(Math.pow(t,i)),r=r.R(i).add(pe(o))):(r=r.R(n),r=r.add(pe(o)))}return r}var Jo=4294967296,Dn=tl(0),Zo=tl(1),Lc=tl(16777216);R=tt.prototype;R.ea=function(){if(Wt(this))return-It(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Jo+r)*t,t*=Jo}return e};R.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Te(this))return"0";if(Wt(this))return"-"+It(this).toString(e);for(var t=pe(Math.pow(e,6)),n=this,r="";;){var s=ti(n,t).g;n=Zs(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Te(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};R.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Te(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Wt(e){return e.h==-1}R.X=function(e){return e=Zs(this,e),Wt(e)?-1:Te(e)?0:1};function It(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new tt(n,~e.h).add(Zo)}R.abs=function(){return Wt(this)?It(this):this};R.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new tt(n,n[n.length-1]&-2147483648?-1:0)};function Zs(e,t){return e.add(It(t))}R.R=function(e){if(Te(this)||Te(e))return Dn;if(Wt(this))return Wt(e)?It(this).R(It(e)):It(It(this).R(e));if(Wt(e))return It(this.R(It(e)));if(0>this.X(Lc)&&0>e.X(Lc))return pe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,Rs(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Rs(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Rs(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Rs(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new tt(n,0)};function Rs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function lr(e,t){this.g=e,this.h=t}function ti(e,t){if(Te(t))throw Error("division by zero");if(Te(e))return new lr(Dn,Dn);if(Wt(e))return t=ti(It(e),t),new lr(It(t.g),It(t.h));if(Wt(t))return t=ti(e,It(t)),new lr(It(t.g),t.h);if(30<e.g.length){if(Wt(e)||Wt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Zo,r=t;0>=r.X(e);)n=Uc(n),r=Uc(r);var s=Tn(n,1),i=Tn(r,1);for(r=Tn(r,2),n=Tn(n,2);!Te(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Tn(r,1),n=Tn(n,1)}return t=Zs(e,s.R(t)),new lr(s,t)}for(s=Dn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=pe(n),o=i.R(t);Wt(o)||0<o.X(e);)n-=r,i=pe(n),o=i.R(t);Te(i)&&(i=Zo),s=s.add(i),e=Zs(e,o)}return new lr(s,e)}R.gb=function(e){return ti(this,e).h};R.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new tt(n,this.h&e.h)};R.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new tt(n,this.h|e.h)};R.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new tt(n,this.h^e.h)};function Uc(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new tt(n,e.h)}function Tn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new tt(s,e.h)}Js.prototype.createWebChannel=Js.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;Ci.NO_ERROR=0;Ci.TIMEOUT=8;Ci.HTTP_ERROR=6;Kh.COMPLETE="complete";Wh.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";Et.prototype.listen=Et.prototype.O;ht.prototype.listenOnce=ht.prototype.P;ht.prototype.getLastError=ht.prototype.Sa;ht.prototype.getLastErrorCode=ht.prototype.Ia;ht.prototype.getStatus=ht.prototype.da;ht.prototype.getResponseJson=ht.prototype.Wa;ht.prototype.getResponseText=ht.prototype.ja;ht.prototype.send=ht.prototype.ha;ht.prototype.setWithCredentials=ht.prototype.Oa;re.prototype.digest=re.prototype.l;re.prototype.reset=re.prototype.reset;re.prototype.update=re.prototype.j;tt.prototype.add=tt.prototype.add;tt.prototype.multiply=tt.prototype.R;tt.prototype.modulo=tt.prototype.gb;tt.prototype.compare=tt.prototype.X;tt.prototype.toNumber=tt.prototype.ea;tt.prototype.toString=tt.prototype.toString;tt.prototype.getBits=tt.prototype.D;tt.fromNumber=pe;tt.fromString=bf;var Hy=function(){return new Js},Ky=function(){return Pi()},yo=Ci,Wy=Kh,Gy=pn,Bc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qy=es,Ps=Wh,Yy=ht,Xy=re,xn=tt;const $c="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new vh("@firebase/firestore");function cr(){return hn.logLevel}function D(e,...t){if(hn.logLevel<=Q.DEBUG){const n=t.map(el);hn.debug(`Firestore (${Jn}): ${e}`,...n)}}function Ce(e,...t){if(hn.logLevel<=Q.ERROR){const n=t.map(el);hn.error(`Firestore (${Jn}): ${e}`,...n)}}function Un(e,...t){if(hn.logLevel<=Q.WARN){const n=t.map(el);hn.warn(`Firestore (${Jn}): ${e}`,...n)}}function el(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e="Unexpected state"){const t=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+e;throw Ce(t),new Error(t)}function at(e,t){e||F()}function j(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Qn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class Zy{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tE{constructor(t){this.t=t,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string"),new Vf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new Ct(t)}}class eE{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nE{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new eE(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sE{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(at(typeof n.token=="string"),this.R=n.token,new rE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=iE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function X(e,t){return e<t?-1:e>t?1:0}function Bn(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new S(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new S(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new S(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return gt.fromMillis(Date.now())}static fromDate(t){return gt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new gt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new gt(0,0))}static max(){return new B(new gt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,n,r){n===void 0?n=0:n>t.length&&F(),r===void 0?r=t.length-n:r>t.length-n&&F(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return jr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof jr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ot extends jr{construct(t,n,r){return new ot(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new S(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const oE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends jr{construct(t,n,r){return new wt(t,n,r)}static isValidIdentifier(t){return oE.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new S(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new S(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new S(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new S(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(ot.fromString(t))}static fromName(t){return new N(ot.fromString(t).popFirst(5))}static empty(){return new N(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ot.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new ot(t.slice()))}}function aE(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new gt(n+1,0):new gt(n,r));return new $e(s,N.empty(),t)}function lE(e){return new $e(e.readTime,e.key,-1)}class $e{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new $e(B.min(),N.empty(),-1)}static max(){return new $e(B.max(),N.empty(),-1)}}function cE(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=N.comparator(e.documentKey,t.documentKey),n!==0?n:X(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==uE)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new T((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):T.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):T.reject(n)}static resolve(t){return new T((n,r)=>{n(t)})}static reject(t){return new T((n,r)=>{r(t)})}static waitFor(t){return new T((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=T.resolve(!1);for(const r of t)n=n.next(s=>s?T.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new T((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new T((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function is(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}nl._e=-1;function Mi(e){return e==null}function ei(e){return e===0&&1/e==-1/0}function fE(e){return typeof e=="number"&&Number.isInteger(e)&&!ei(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function mn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n){this.comparator=t,this.root=n||vt.EMPTY}insert(t,n){return new ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cs(this.root,t,this.comparator,!0)}}class Cs{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new vt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,n,r,s,i){return this}insert(t,n,r){return new vt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new qc(this.data.getIterator())}getIteratorFrom(t){return new qc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Rt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Rt(this.comparator);return n.data=t,n}}class qc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.fields=t,t.sort(wt.comparator)}static empty(){return new Ht([])}unionWith(t){let n=new Rt(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ht(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Bn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nf("Invalid base64 string: "+i):i}}(t);return new Mt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const dE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function je(e){if(at(!!e),typeof e=="string"){let t=0;const n=dE.exec(e);if(at(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:pt(e.seconds),nanos:pt(e.nanos)}}function pt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function fn(e){return typeof e=="string"?Mt.fromBase64String(e):Mt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sl(e){const t=e.mapValue.fields.__previous_value__;return rl(t)?sl(t):t}function qr(e){const t=je(e.mapValue.fields.__local_write_time__.timestampValue);return new gt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(t,n,r,s,i,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class zr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof zr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rl(e)?4:mE(e)?9007199254740991:10:F()}function _e(e,t){if(e===t)return!0;const n=dn(e);if(n!==dn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qr(e).isEqual(qr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=je(s.timestampValue),a=je(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return fn(s.bytesValue).isEqual(fn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return pt(s.geoPointValue.latitude)===pt(i.geoPointValue.latitude)&&pt(s.geoPointValue.longitude)===pt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return pt(s.integerValue)===pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=pt(s.doubleValue),a=pt(i.doubleValue);return o===a?ei(o)===ei(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Bn(e.arrayValue.values||[],t.arrayValue.values||[],_e);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(jc(o)!==jc(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!_e(o[l],a[l])))return!1;return!0}(e,t);default:return F()}}function Hr(e,t){return(e.values||[]).find(n=>_e(n,t))!==void 0}function $n(e,t){if(e===t)return 0;const n=dn(e),r=dn(t);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=pt(i.integerValue||i.doubleValue),l=pt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return zc(e.timestampValue,t.timestampValue);case 4:return zc(qr(e),qr(t));case 5:return X(e.stringValue,t.stringValue);case 6:return function(i,o){const a=fn(i),l=fn(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=X(a[c],l[c]);if(u!==0)return u}return X(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=X(pt(i.latitude),pt(o.latitude));return a!==0?a:X(pt(i.longitude),pt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=$n(a[c],l[c]);if(u)return u}return X(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Ss.mapValue&&o===Ss.mapValue)return 0;if(i===Ss.mapValue)return 1;if(o===Ss.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let f=0;f<l.length&&f<u.length;++f){const p=X(l[f],u[f]);if(p!==0)return p;const m=$n(a[l[f]],c[u[f]]);if(m!==0)return m}return X(l.length,u.length)}(e.mapValue,t.mapValue);default:throw F()}}function zc(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return X(e,t);const n=je(e),r=je(t),s=X(n.seconds,r.seconds);return s!==0?s:X(n.nanos,r.nanos)}function jn(e){return ta(e)}function ta(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=je(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return fn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return N.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ta(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ta(n.fields[o])}`;return s+"}"}(e.mapValue):F()}function Hc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ea(e){return!!e&&"integerValue"in e}function il(e){return!!e&&"arrayValue"in e}function Kc(e){return!!e&&"nullValue"in e}function Wc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ms(e){return!!e&&"mapValue"in e}function Ir(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return mn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ir(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ir(e.arrayValue.values[n]);return t}return Object.assign({},e)}function mE(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.value=t}static empty(){return new $t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ms(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ir(n)}setAll(t){let n=wt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ir(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ms(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _e(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ms(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){mn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new $t(Ir(this.value))}}function Of(e){const t=[];return mn(e.fields,(n,r)=>{const s=new wt([n]);if(Ms(r)){const i=Of(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Ht(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new St(t,0,B.min(),B.min(),B.min(),$t.empty(),0)}static newFoundDocument(t,n,r,s){return new St(t,1,n,B.min(),r,s,0)}static newNoDocument(t,n){return new St(t,2,n,B.min(),B.min(),$t.empty(),0)}static newUnknownDocument(t,n){return new St(t,3,n,B.min(),B.min(),$t.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n){this.position=t,this.inclusive=n}}function Gc(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=$n(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!_e(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n="asc"){this.field=t,this.dir=n}}function gE(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{}class mt extends Mf{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new yE(t,n,r):n==="array-contains"?new vE(t,r):n==="in"?new IE(t,r):n==="not-in"?new wE(t,r):n==="array-contains-any"?new AE(t,r):new mt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new EE(t,r):new TE(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($n(n,this.value)):n!==null&&dn(this.value)===dn(n)&&this.matchesComparison($n(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends Mf{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new se(t,n)}matches(t){return kf(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function kf(e){return e.op==="and"}function Ff(e){return _E(e)&&kf(e)}function _E(e){for(const t of e.filters)if(t instanceof se)return!1;return!0}function na(e){if(e instanceof mt)return e.field.canonicalString()+e.op.toString()+jn(e.value);if(Ff(e))return e.filters.map(t=>na(t)).join(",");{const t=e.filters.map(n=>na(n)).join(",");return`${e.op}(${t})`}}function Lf(e,t){return e instanceof mt?function(r,s){return s instanceof mt&&r.op===s.op&&r.field.isEqual(s.field)&&_e(r.value,s.value)}(e,t):e instanceof se?function(r,s){return s instanceof se&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Lf(o,s.filters[a]),!0):!1}(e,t):void F()}function Uf(e){return e instanceof mt?function(n){return`${n.field.canonicalString()} ${n.op} ${jn(n.value)}`}(e):e instanceof se?function(n){return n.op.toString()+" {"+n.getFilters().map(Uf).join(" ,")+"}"}(e):"Filter"}class yE extends mt{constructor(t,n,r){super(t,n,r),this.key=N.fromName(r.referenceValue)}matches(t){const n=N.comparator(t.key,this.key);return this.matchesComparison(n)}}class EE extends mt{constructor(t,n){super(t,"in",n),this.keys=Bf("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class TE extends mt{constructor(t,n){super(t,"not-in",n),this.keys=Bf("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Bf(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class vE extends mt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return il(n)&&Hr(n.arrayValue,this.value)}}class IE extends mt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Hr(this.value.arrayValue,n)}}class wE extends mt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Hr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Hr(this.value.arrayValue,n)}}class AE extends mt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!il(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Yc(e,t=null,n=[],r=[],s=null,i=null,o=null){return new RE(e,t,n,r,s,i,o)}function ol(e){const t=j(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>na(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>jn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>jn(r)).join(",")),t.ce=n}return t.ce}function al(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gE(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Lf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qc(e.startAt,t.startAt)&&Qc(e.endAt,t.endAt)}function ra(e){return N.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function PE(e,t,n,r,s,i,o,a){return new os(e,t,n,r,s,i,o,a)}function ll(e){return new os(e)}function Xc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function $f(e){return e.collectionGroup!==null}function wr(e){const t=j(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Rt(wt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new ri(i,r))}),n.has(wt.keyField().canonicalString())||t.le.push(new ri(wt.keyField(),r))}return t.le}function me(e){const t=j(e);return t.he||(t.he=CE(t,wr(e))),t.he}function CE(e,t){if(e.limitType==="F")return Yc(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ri(s.field,i)});const n=e.endAt?new ni(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ni(e.startAt.position,e.startAt.inclusive):null;return Yc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function sa(e,t){const n=e.filters.concat([t]);return new os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ia(e,t,n){return new os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ki(e,t){return al(me(e),me(t))&&e.limitType===t.limitType}function jf(e){return`${ol(me(e))}|lt:${e.limitType}`}function In(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Uf(s)).join(", ")}]`),Mi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>jn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>jn(s)).join(",")),`Target(${r})`}(me(e))}; limitType=${e.limitType})`}function Fi(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):N.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of wr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Gc(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,wr(r),s)||r.endAt&&!function(o,a,l){const c=Gc(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,wr(r),s))}(e,t)}function SE(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qf(e){return(t,n)=>{let r=!1;for(const s of wr(e)){const i=bE(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bE(e,t,n){const r=e.field.isKeyField()?N.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?$n(l,c):F()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){mn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return xf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new ct(N.comparator);function Se(){return VE}const zf=new ct(N.comparator);function pr(...e){let t=zf;for(const n of e)t=t.insert(n.key,n);return t}function Hf(e){let t=zf;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function sn(){return Ar()}function Kf(){return Ar()}function Ar(){return new Zn(e=>e.toString(),(e,t)=>e.isEqual(t))}const DE=new ct(N.comparator),xE=new Rt(N.comparator);function K(...e){let t=xE;for(const n of e)t=t.add(n);return t}const NE=new Rt(X);function OE(){return NE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ei(t)?"-0":t}}function Gf(e){return{integerValue:""+e}}function ME(e,t){return fE(t)?Gf(t):Wf(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this._=void 0}}function kE(e,t,n){return e instanceof Kr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rl(i)&&(i=sl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Wr?Yf(e,t):e instanceof Gr?Xf(e,t):function(s,i){const o=Qf(s,i),a=Jc(o)+Jc(s.Ie);return ea(o)&&ea(s.Ie)?Gf(a):Wf(s.serializer,a)}(e,t)}function FE(e,t,n){return e instanceof Wr?Yf(e,t):e instanceof Gr?Xf(e,t):n}function Qf(e,t){return e instanceof si?function(r){return ea(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Kr extends Li{}class Wr extends Li{constructor(t){super(),this.elements=t}}function Yf(e,t){const n=Jf(t);for(const r of e.elements)n.some(s=>_e(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gr extends Li{constructor(t){super(),this.elements=t}}function Xf(e,t){let n=Jf(t);for(const r of e.elements)n=n.filter(s=>!_e(s,r));return{arrayValue:{values:n}}}class si extends Li{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Jc(e){return pt(e.integerValue||e.doubleValue)}function Jf(e){return il(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(t,n){this.field=t,this.transform=n}}function UE(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Wr&&s instanceof Wr||r instanceof Gr&&s instanceof Gr?Bn(r.elements,s.elements,_e):r instanceof si&&s instanceof si?_e(r.Ie,s.Ie):r instanceof Kr&&s instanceof Kr}(e.transform,t.transform)}class BE{constructor(t,n){this.version=t,this.transformResults=n}}class ne{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ne}static exists(t){return new ne(void 0,t)}static updateTime(t){return new ne(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ks(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ui{}function Zf(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new cl(e.key,ne.none()):new as(e.key,e.data,ne.none());{const n=e.data,r=$t.empty();let s=new Rt(wt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ke(e.key,r,new Ht(s.toArray()),ne.none())}}function $E(e,t,n){e instanceof as?function(s,i,o){const a=s.value.clone(),l=tu(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ke?function(s,i,o){if(!ks(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=tu(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(td(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Rr(e,t,n,r){return e instanceof as?function(i,o,a,l){if(!ks(i.precondition,o))return a;const c=i.value.clone(),u=eu(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ke?function(i,o,a,l){if(!ks(i.precondition,o))return a;const c=eu(i.fieldTransforms,l,o),u=o.data;return u.setAll(td(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(i,o,a){return ks(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function jE(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Qf(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function Zc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bn(r,s,(i,o)=>UE(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class as extends Ui{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ke extends Ui{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function td(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function tu(e,t,n){const r=new Map;at(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,FE(o,a,n[s]))}return r}function eu(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kE(i,o,t))}return r}class cl extends Ui{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qE extends Ui{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&$E(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Rr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Rr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Kf();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Zf(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),K())}isEqual(t){return this.batchId===t.batchId&&Bn(this.mutations,t.mutations,(n,r)=>Zc(n,r))&&Bn(this.baseMutations,t.baseMutations,(n,r)=>Zc(n,r))}}class ul{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){at(t.mutations.length===r.length);let s=function(){return DE}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ul(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,W;function WE(e){switch(e){default:return F();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function ed(e){if(e===void 0)return Ce("GRPC error has no .code"),_.UNKNOWN;switch(e){case dt.OK:return _.OK;case dt.CANCELLED:return _.CANCELLED;case dt.UNKNOWN:return _.UNKNOWN;case dt.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case dt.INTERNAL:return _.INTERNAL;case dt.UNAVAILABLE:return _.UNAVAILABLE;case dt.UNAUTHENTICATED:return _.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case dt.NOT_FOUND:return _.NOT_FOUND;case dt.ALREADY_EXISTS:return _.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return _.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case dt.ABORTED:return _.ABORTED;case dt.OUT_OF_RANGE:return _.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return _.UNIMPLEMENTED;case dt.DATA_LOSS:return _.DATA_LOSS;default:return F()}}(W=dt||(dt={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=new xn([4294967295,4294967295],0);function nu(e){const t=GE().encode(e),n=new Xy;return n.update(t),new Uint8Array(n.digest())}function ru(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new xn([n,r],0),new xn([s,i],0)]}class hl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mr(`Invalid padding: ${n}`);if(r<0)throw new mr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new mr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=xn.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(xn.fromNumber(r)));return s.compare(QE)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=nu(t),[r,s]=ru(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new hl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=nu(t),[r,s]=ru(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,ls.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Bi(B.min(),s,new ct(X),Se(),K())}}class ls{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new ls(r,n,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class nd{constructor(t,n){this.targetId=t,this.fe=n}}class rd{constructor(t,n,r=Mt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class su{constructor(){this.ge=0,this.pe=ou(),this.ye=Mt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=K(),n=K(),r=K();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:F()}}),new ls(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=ou()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class YE{constructor(t){this.Le=t,this.ke=new Map,this.qe=Se(),this.Qe=iu(),this.Ke=new ct(X)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:F()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ra(i))if(r===0){const o=new N(i.path);this.We(n,o,St.newNoDocument(o,B.min()))}else at(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=fn(r).toUint8Array()}catch(l){if(l instanceof Nf)return Un("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new hl(o,s,i)}catch(l){return Un(l instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ra(a.target)){const l=new N(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,St.newNoDocument(l,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=K();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Bi(t,n,this.Ke,this.qe,r);return this.qe=Se(),this.Qe=iu(),this.Ke=new ct(X),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new su,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Rt(X),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||D("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new su),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function iu(){return new ct(N.comparator)}function ou(){return new ct(N.comparator)}const XE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZE=(()=>({and:"AND",or:"OR"}))();class tT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function oa(e,t){return e.useProto3Json||Mi(t)?t:{value:t}}function ii(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function eT(e,t){return ii(e,t.toTimestamp())}function ge(e){return at(!!e),B.fromTimestamp(function(n){const r=je(n);return new gt(r.seconds,r.nanos)}(e))}function fl(e,t){return function(r){return new ot(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function id(e){const t=ot.fromString(e);return at(cd(t)),t}function aa(e,t){return fl(e.databaseId,t.path)}function Eo(e,t){const n=id(t);if(n.get(1)!==e.databaseId.projectId)throw new S(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new N(od(n))}function la(e,t){return fl(e.databaseId,t)}function nT(e){const t=id(e);return t.length===4?ot.emptyPath():od(t)}function ca(e){return new ot(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function od(e){return at(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function au(e,t,n){return{name:aa(e,t),fields:n.value.mapValue.fields}}function rT(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(at(u===void 0||typeof u=="string"),Mt.fromBase64String(u||"")):(at(u===void 0||u instanceof Uint8Array),Mt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:ed(c.code);return new S(u,c.message||"")}(o);n=new rd(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Eo(e,r.document.name),i=ge(r.document.updateTime),o=r.document.createTime?ge(r.document.createTime):B.min(),a=new $t({mapValue:{fields:r.document.fields}}),l=St.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Fs(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Eo(e,r.document),i=r.readTime?ge(r.readTime):B.min(),o=St.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Fs([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Eo(e,r.document),i=r.removedTargetIds||[];n=new Fs([],i,s,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KE(s,i),a=r.targetId;n=new nd(a,o)}}return n}function sT(e,t){let n;if(t instanceof as)n={update:au(e,t.key,t.value)};else if(t instanceof cl)n={delete:aa(e,t.key)};else if(t instanceof Ke)n={update:au(e,t.key,t.data),updateMask:dT(t.fieldMask)};else{if(!(t instanceof qE))return F();n={verify:aa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Kr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof si)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw F()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:eT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(e,t.precondition)),n}function iT(e,t){return e&&e.length>0?(at(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?ge(s.updateTime):ge(i);return o.isEqual(B.min())&&(o=ge(i)),new BE(o,s.transformResults||[])}(n,t))):[]}function oT(e,t){return{documents:[la(e,t.path)]}}function aT(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=la(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=la(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return ld(se.create(l,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(f){return{field:wn(f.field),direction:uT(f.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=oa(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function lT(e){let t=nT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){at(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(f){const p=ad(f);return p instanceof se&&Ff(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(b){return new ri(An(b.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Mi(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,m=f.values||[];return new ni(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,m=f.values||[];return new ni(m,p)}(n.endAt)),PE(t,s,o,i,a,"F",l,c)}function cT(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ad(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=An(n.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=An(n.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=An(n.unaryFilter.field);return mt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=An(n.unaryFilter.field);return mt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(e):e.fieldFilter!==void 0?function(n){return mt.create(An(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return se.create(n.compositeFilter.filters.map(r=>ad(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(e):F()}function uT(e){return XE[e]}function hT(e){return JE[e]}function fT(e){return ZE[e]}function wn(e){return{fieldPath:e.canonicalString()}}function An(e){return wt.fromServerFormat(e.fieldPath)}function ld(e){return e instanceof mt?function(n){if(n.op==="=="){if(Wc(n.value))return{unaryFilter:{field:wn(n.field),op:"IS_NAN"}};if(Kc(n.value))return{unaryFilter:{field:wn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wc(n.value))return{unaryFilter:{field:wn(n.field),op:"IS_NOT_NAN"}};if(Kc(n.value))return{unaryFilter:{field:wn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wn(n.field),op:hT(n.op),value:n.value}}}(e):e instanceof se?function(n){const r=n.getFilters().map(s=>ld(s));return r.length===1?r[0]:{compositeFilter:{op:fT(n.op),filters:r}}}(e):F()}function dT(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function cd(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,n,r,s,i=B.min(),o=B.min(),a=Mt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(t){this.ut=t}}function mT(e){const t=lT({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ia(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this.on=new _T}addToCollectionParentIndex(t,n){return this.on.add(n),T.resolve()}getCollectionParents(t,n){return T.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return T.resolve()}deleteFieldIndex(t,n){return T.resolve()}deleteAllFieldIndexes(t){return T.resolve()}createTargetIndexes(t,n){return T.resolve()}getDocumentsMatchingTarget(t,n){return T.resolve(null)}getIndexType(t,n){return T.resolve(0)}getFieldIndexes(t,n){return T.resolve([])}getNextCollectionGroupToUpdate(t){return T.resolve(null)}getMinOffset(t,n){return T.resolve($e.min())}getMinOffsetFromCollectionGroup(t,n){return T.resolve($e.min())}updateCollectionGroup(t,n,r){return T.resolve()}updateIndexEntries(t,n){return T.resolve()}}class _T{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Rt(ot.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Rt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new qn(0)}static Nn(){return new qn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.changes=new Zn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Rr(r.mutation,s,Ht.empty(),gt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,K()).next(()=>r))}getLocalViewOfDocuments(t,n,r=K()){const s=sn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=pr();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=sn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,K()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Se();const o=Ar(),a=function(){return Ar()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Ke)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Rr(u.mutation,c,u.mutation.getFieldMask(),gt.now())):o.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new ET(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ar();let s=new ct((o,a)=>o-a),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ht.empty();u=a.applyToLocalView(c,u),r.set(l,u);const f=(s.get(a.batchId)||K()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=Kf();u.forEach(p=>{if(!i.has(p)){const m=Zf(n.get(p),r.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,f))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):$f(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):T.resolve(sn());let a=-1,l=i;return o.next(c=>T.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,K())).next(u=>({batchId:a,changes:Hf(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new N(n)).next(r=>{let s=pr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=pr();return this.indexManager.getCollectionParents(t,i).next(a=>T.forEach(a,l=>{const c=function(f,p){return new os(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,St.newInvalidDocument(u)))});let a=pr();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Rr(u.mutation,c,Ht.empty(),gt.now()),Fi(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return T.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ge(s.createTime)}}(n)),T.resolve()}getNamedQuery(t,n){return T.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:mT(s.bundledQuery),readTime:ge(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.overlays=new ct(N.comparator),this.lr=new Map}getOverlay(t,n){return T.resolve(this.overlays.get(n))}getOverlays(t,n){const r=sn();return T.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),T.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),T.resolve()}getOverlaysForCollection(t,n,r){const s=sn(),i=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return T.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=sn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=sn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return T.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HE(n,r));let i=this.lr.get(n);i===void 0&&(i=K(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.hr=new Rt(yt.Pr),this.Ir=new Rt(yt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new yt(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new yt(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new N(new ot([])),r=new yt(n,t),s=new yt(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new N(new ot([])),r=new yt(n,t),s=new yt(n,t+1);let i=K();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new yt(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class yt{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return N.comparator(t.key,n.key)||X(t.gr,n.gr)}static Tr(t,n){return X(t.gr,n.gr)||N.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Rt(yt.Pr)}checkEmpty(t){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zE(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new yt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(t,n){return T.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new yt(n,0),s=new yt(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Rt(X);return n.forEach(s=>{const i=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),T.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;N.isDocumentKey(i)||(i=i.child(""));const o=new yt(new N(i),0);let a=new Rt(X);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),T.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){at(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return T.forEach(n.mutations,s=>{const i=new yt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new yt(n,0),s=this.yr.firstAfterOrEqual(r);return T.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,T.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(t){this.Cr=t,this.docs=function(){return new ct(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(t,n){let r=Se();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),T.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Se();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||cE(lE(u),r)<=0||(s.has(u.key)||Fi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(t,n,r,s){F()}vr(t,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new RT(this)}getSize(t){return T.resolve(this.size)}}class RT extends yT{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),T.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(t){this.persistence=t,this.Fr=new Zn(n=>ol(n),al),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Mr=0,this.Or=new dl,this.targetCount=0,this.Nr=qn.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),T.resolve()}getLastRemoteSnapshotVersion(t){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return T.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),T.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new qn(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,T.resolve()}updateTargetData(t,n){return this.kn(n),T.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(t){return T.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return T.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),T.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),T.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return T.resolve(r)}containsKey(t,n){return T.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(t,n){this.Br={},this.overlays={},this.Lr=new nl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new PT(this),this.indexManager=new gT,this.remoteDocumentCache=function(s){return new AT(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new pT(n),this.Kr=new vT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new IT,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new wT(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){D("MemoryPersistence","Starting transaction:",t);const s=new ST(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return T.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class ST extends hE{constructor(t){super(),this.currentSequenceNumber=t}}class pl{constructor(t){this.persistence=t,this.Gr=new dl,this.zr=null}static jr(t){return new pl(t)}get Hr(){if(this.zr)return this.zr;throw F()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),T.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),T.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Hr,r=>{const s=N.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,B.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return T.or([()=>T.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=K(),s=K();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ml(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new bT;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(cr()<=Q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",In(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),T.resolve()):(cr()<=Q.DEBUG&&D("QueryEngine","Query:",In(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(cr()<=Q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",In(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,me(n))):T.resolve())}zi(t,n){if(Xc(n))return T.resolve(null);let r=me(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ia(n,null,"F"),r=me(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=K(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(t,ia(n,null,"F")):this.Xi(t,c,n,l)}))})))}ji(t,n,r,s){return Xc(n)||s.isEqual(B.min())?T.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?T.resolve(null):(cr()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),In(n)),this.Xi(t,o,n,aE(s,-1)).next(a=>a))})}Yi(t,n){let r=new Rt(qf(t));return n.forEach((s,i)=>{Fi(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return cr()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",In(n)),this.Gi.getDocumentsMatchingQuery(t,n,$e.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new ct(X),this.ns=new Zn(i=>ol(i),al),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new TT(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function xT(e,t,n,r){return new DT(e,t,n,r)}async function ud(e,t){const n=j(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=K();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function NT(e,t){const n=j(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const f=c.batch,p=f.keys();let m=T.resolve();return p.forEach(b=>{m=m.next(()=>u.getEntry(l,b)).next(P=>{const V=c.docVersions.get(b);at(V!==null),P.version.compareTo(V)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),u.addEntry(P)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=K();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function hd(e){const t=j(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function OT(e,t){const n=j(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((u,f)=>{const p=s.get(f);if(!p)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(Mt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(f,m),function(P,V,z){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(p,m,u)&&a.push(n.qr.updateTargetData(i,m))});let l=Se(),c=K();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(MT(i,o,t.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(B.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(f=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function MT(e,t,n){let r=K(),s=K();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Se();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function kT(e,t){const n=j(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function FT(e,t){const n=j(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,T.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Oe(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function ua(e,t,n){const r=j(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!is(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function lu(e,t,n){const r=j(e);let s=B.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const f=j(l),p=f.ns.get(u);return p!==void 0?T.resolve(f.ts.get(p)):f.qr.getTargetData(c,u)}(r,o,me(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:B.min(),n?i:K())).next(a=>(LT(r,SE(t),a),{documents:a,ls:i})))}function LT(e,t,n){let r=e.rs.get(t)||B.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class cu{constructor(){this.activeTargetIds=OE()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class UT{constructor(){this.eo=new cu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new cu,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs=null;function To(){return bs===null?bs=function(){return 268435456+Math.round(2147483648*Math.random())}():bs++,"0x"+bs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class qT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=To(),l=this.So(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>(D("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Un("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=$T[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,s){const i=To();return new Promise((o,a)=>{const l=new Yy;l.setWithCredentials(!0),l.listenOnce(Wy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yo.NO_ERROR:const u=l.getResponseJson();D(Pt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case yo.TIMEOUT:D(Pt,`RPC '${t}' ${i} timed out`),a(new S(_.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const f=l.getStatus();if(D(Pt,`RPC '${t}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const b=function(V){const z=V.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(z)>=0?z:_.UNKNOWN}(m.status);a(new S(b,m.message))}else a(new S(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new S(_.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{D(Pt,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);D(Pt,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(t,n,r){const s=To(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Hy(),a=Ky(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Qy({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");D(Pt,`Creating RPC '${t}' stream ${s}: ${u}`,l);const f=o.createWebChannel(u,l);let p=!1,m=!1;const b=new jT({co:V=>{m?D(Pt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(p||(D(Pt,`Opening RPC '${t}' stream ${s} transport.`),f.open(),p=!0),D(Pt,`RPC '${t}' stream ${s} sending:`,V),f.send(V))},lo:()=>f.close()}),P=(V,z,Y)=>{V.listen(z,Z=>{try{Y(Z)}catch(k){setTimeout(()=>{throw k},0)}})};return P(f,Ps.EventType.OPEN,()=>{m||D(Pt,`RPC '${t}' stream ${s} transport opened.`)}),P(f,Ps.EventType.CLOSE,()=>{m||(m=!0,D(Pt,`RPC '${t}' stream ${s} transport closed`),b.Ro())}),P(f,Ps.EventType.ERROR,V=>{m||(m=!0,Un(Pt,`RPC '${t}' stream ${s} transport errored:`,V),b.Ro(new S(_.UNAVAILABLE,"The operation could not be completed")))}),P(f,Ps.EventType.MESSAGE,V=>{var z;if(!m){const Y=V.data[0];at(!!Y);const Z=Y,k=Z.error||((z=Z[0])===null||z===void 0?void 0:z.error);if(k){D(Pt,`RPC '${t}' stream ${s} received error:`,k);const Ut=k.status;let Gt=function(rr){const ie=dt[rr];if(ie!==void 0)return ed(ie)}(Ut),We=k.message;Gt===void 0&&(Gt=_.INTERNAL,We="Unknown error status: "+Ut+" with message "+k.message),m=!0,b.Ro(new S(Gt,We)),f.close()}else D(Pt,`RPC '${t}' stream ${s} received:`,Y),b.Vo(Y)}}),P(a,Gy.STAT_EVENT,V=>{V.stat===Bc.PROXY?D(Pt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Bc.NOPROXY&&D(Pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.Ao()},0),b}}function vo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){return new tT(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n,r,s,i,o,a,l){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new fd(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ce(n.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{t(()=>{const s=new S(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zT extends dd{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=rT(this.serializer,t),r=function(i){if(!("targetChange"in i))return B.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?ge(o.readTime):B.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=ca(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=ra(l)?{documents:oT(i,l)}:{query:aT(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sd(i,o.resumeToken);const c=oa(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=ii(i,o.snapshotVersion.toTimestamp());const c=oa(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=cT(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=ca(this.serializer),n.removeTarget=t,this.e_(n)}}class HT extends dd{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=iT(t.writeResults,t.commitTime),r=ge(t.commitTime);return this.listener.I_(r,n)}return at(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=ca(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>sT(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new S(_.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(_.UNKNOWN,s.toString())})}Co(t,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(_.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class WT{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ce(n),this.f_=!1):D("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{gn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=j(l);c.C_.add(4),await cs(c),c.M_.set("Unknown"),c.C_.delete(4),await ji(c)}(this))})}),this.M_=new WT(r,s)}}async function ji(e){if(gn(e))for(const t of e.v_)await t(!0)}async function cs(e){for(const t of e.v_)await t(!1)}function pd(e,t){const n=j(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),yl(n)?_l(n):tr(n).Ho()&&gl(n,t))}function md(e,t){const n=j(e),r=tr(n);n.D_.delete(t),r.Ho()&&gd(n,t),n.D_.size===0&&(r.Ho()?r.Zo():gn(n)&&n.M_.set("Unknown"))}function gl(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}tr(e).u_(t)}function gd(e,t){e.x_.Oe(t),tr(e).c_(t)}function _l(e){e.x_=new YE({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),tr(e).start(),e.M_.g_()}function yl(e){return gn(e)&&!tr(e).jo()&&e.D_.size>0}function gn(e){return j(e).C_.size===0}function _d(e){e.x_=void 0}async function QT(e){e.D_.forEach((t,n)=>{gl(e,t)})}async function YT(e,t){_d(e),yl(e)?(e.M_.w_(t),_l(e)):e.M_.set("Unknown")}async function XT(e,t,n){if(e.M_.set("Online"),t instanceof rd&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(e,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await oi(e,r)}else if(t instanceof Fs?e.x_.$e(t):t instanceof nd?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(B.min()))try{const r=await hd(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(Mt.EMPTY_BYTE_STRING,u.snapshotVersion)),gd(i,l);const f=new Oe(u.target,l,c,u.sequenceNumber);gl(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await oi(e,r)}}async function oi(e,t,n){if(!is(t))throw t;e.C_.add(1),await cs(e),e.M_.set("Offline"),n||(n=()=>hd(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await ji(e)})}function yd(e,t){return t().catch(n=>oi(e,n,t))}async function qi(e){const t=j(e),n=qe(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;JT(t);)try{const s=await kT(t.localStore,r);if(s===null){t.b_.length===0&&n.Zo();break}r=s.batchId,ZT(t,s)}catch(s){await oi(t,s)}Ed(t)&&Td(t)}function JT(e){return gn(e)&&e.b_.length<10}function ZT(e,t){e.b_.push(t);const n=qe(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function Ed(e){return gn(e)&&!qe(e).jo()&&e.b_.length>0}function Td(e){qe(e).start()}async function tv(e){qe(e).E_()}async function ev(e){const t=qe(e);for(const n of e.b_)t.P_(n.mutations)}async function nv(e,t,n){const r=e.b_.shift(),s=ul.from(r,t,n);await yd(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await qi(e)}async function rv(e,t){t&&qe(e).h_&&await async function(r,s){if(function(o){return WE(o)&&o!==_.ABORTED}(s.code)){const i=r.b_.shift();qe(r).Yo(),await yd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qi(r)}}(e,t),Ed(e)&&Td(e)}async function hu(e,t){const n=j(e);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=gn(n);n.C_.add(3),await cs(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await ji(n)}async function sv(e,t){const n=j(e);t?(n.C_.delete(2),await ji(n)):t||(n.C_.add(2),await cs(n),n.M_.set("Unknown"))}function tr(e){return e.O_||(e.O_=function(n,r,s){const i=j(n);return i.A_(),new zT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:QT.bind(null,e),Io:YT.bind(null,e),a_:XT.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),yl(e)?_l(e):e.M_.set("Unknown")):(await e.O_.stop(),_d(e))})),e.O_}function qe(e){return e.N_||(e.N_=function(n,r,s){const i=j(n);return i.A_(),new HT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:tv.bind(null,e),Io:rv.bind(null,e),T_:ev.bind(null,e),I_:nv.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await qi(e)):(await e.N_.stop(),e.b_.length>0&&(D("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new El(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tl(e,t){if(Ce("AsyncQueue",`${t}: ${e}`),is(e))return new S(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.comparator=t?(n,r)=>t(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=pr(),this.sortedSet=new ct(this.comparator)}static emptySet(t){return new Nn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Nn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Nn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.B_=new ct(N.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):F():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class zn{constructor(t,n,r,s,i,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zn(t,n,Nn.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ki(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.k_=void 0,this.listeners=[]}}class ov{constructor(){this.queries=new Zn(t=>jf(t),ki),this.onlineState="Unknown",this.q_=new Set}}async function vd(e,t){const n=j(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new iv),s)try{i.k_=await n.onListen(r)}catch(o){const a=Tl(o,`Initialization of query '${In(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Q_(n.onlineState),i.k_&&t.K_(i.k_)&&vl(n)}async function Id(e,t){const n=j(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function av(e,t){const n=j(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&vl(n)}function lv(e,t,n){const r=j(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function vl(e){e.q_.forEach(t=>{t.next()})}class wd{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new zn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=zn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t){this.key=t}}class Rd{constructor(t){this.key=t}}class cv{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=K(),this.mutatedKeys=K(),this._a=qf(t),this.aa=new Nn(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new fu,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,f)=>{const p=s.get(u),m=Fi(this.query,f)?f:null,b=!!p&&this.mutatedKeys.has(p.key),P=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let V=!1;p&&m?p.data.isEqual(m.data)?b!==P&&(r.track({type:3,doc:m}),V=!0):this.ha(p,m)||(r.track({type:2,doc:m}),V=!0,(l&&this._a(m,l)>0||c&&this._a(m,c)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),V=!0):p&&!m&&(r.track({type:1,doc:p}),V=!0,(l||c)&&(a=!0)),V&&(m?(o=o.add(m),i=P?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const i=t.la.L_();i.sort((c,u)=>function(p,m){const b=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return b(p)-b(m)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,i.length!==0||l?{snapshot:new zn(this.query,t.aa,s,i,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new fu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=K(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new Rd(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new Ad(r))}),n}da(t){this.ia=t.ls,this.oa=K();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return zn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class uv{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class hv{constructor(t){this.key=t,this.Ra=!1}}class fv{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Zn(a=>jf(a),ki),this.fa=new Map,this.ga=new Set,this.pa=new ct(N.comparator),this.ya=new Map,this.wa=new dl,this.Sa={},this.ba=new Map,this.Da=qn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function dv(e,t){const n=wv(e);let r,s;const i=n.ma.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await FT(n.localStore,me(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await pv(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&pd(n.remoteStore,o)}return s}async function pv(e,t,n,r,s){e.va=(f,p,m)=>async function(P,V,z,Y){let Z=V.view.ca(z);Z.Zi&&(Z=await lu(P.localStore,V.query,!1).then(({documents:Gt})=>V.view.ca(Gt,Z)));const k=Y&&Y.targetChanges.get(V.targetId),Ut=V.view.applyChanges(Z,P.isPrimaryClient,k);return pu(P,V.targetId,Ut.Ta),Ut.snapshot}(e,f,p,m);const i=await lu(e.localStore,t,!0),o=new cv(t,i.ls),a=o.ca(i.documents),l=ls.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);pu(e,n,c.Ta);const u=new uv(t,n,o);return e.ma.set(t,u),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),c.snapshot}async function mv(e,t){const n=j(e),r=n.ma.get(t),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!ki(i,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ua(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),md(n.remoteStore,r.targetId),ha(n,r.targetId)}).catch(ss)):(ha(n,r.targetId),await ua(n.localStore,r.targetId,!0))}async function gv(e,t,n){const r=Av(e);try{const s=await function(o,a){const l=j(o),c=gt.now(),u=a.reduce((m,b)=>m.add(b.key),K());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let b=Se(),P=K();return l.ss.getEntries(m,u).next(V=>{b=V,b.forEach((z,Y)=>{Y.isValidDocument()||(P=P.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,b)).next(V=>{f=V;const z=[];for(const Y of a){const Z=jE(Y,f.get(Y.key).overlayedDocument);Z!=null&&z.push(new Ke(Y.key,Z,Of(Z.value.mapValue),ne.exists(!0)))}return l.mutationQueue.addMutationBatch(m,c,z,a)}).next(V=>{p=V;const z=V.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(m,V.batchId,z)})}).then(()=>({batchId:p.batchId,changes:Hf(f)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new ct(X)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await us(r,s.changes),await qi(r.remoteStore)}catch(s){const i=Tl(s,"Failed to persist write");n.reject(i)}}async function Pd(e,t){const n=j(e);try{const r=await OT(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?at(o.Ra):s.removedDocuments.size>0&&(at(o.Ra),o.Ra=!1))}),await us(n,r,t)}catch(r){await ss(r)}}function du(e,t,n){const r=j(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let c=!1;l.queries.forEach((u,f)=>{for(const p of f.listeners)p.Q_(a)&&(c=!0)}),c&&vl(l)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _v(e,t,n){const r=j(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new ct(N.comparator);o=o.insert(i,St.newNoDocument(i,B.min()));const a=K().add(i),l=new Bi(B.min(),new Map,new ct(X),o,a);await Pd(r,l),r.pa=r.pa.remove(i),r.ya.delete(t),Il(r)}else await ua(r.localStore,t,!1).then(()=>ha(r,t,n)).catch(ss)}async function yv(e,t){const n=j(e),r=t.batch.batchId;try{const s=await NT(n.localStore,t);Sd(n,r,null),Cd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await us(n,s)}catch(s){await ss(s)}}async function Ev(e,t,n){const r=j(e);try{const s=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(at(f!==null),u=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Sd(r,t,n),Cd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await us(r,s)}catch(s){await ss(s)}}function Cd(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function Sd(e,t,n){const r=j(e);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Sa[r.currentUser.toKey()]=s}}function ha(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||bd(e,r)})}function bd(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(md(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Il(e))}function pu(e,t,n){for(const r of n)r instanceof Ad?(e.wa.addReference(r.key,t),Tv(e,r)):r instanceof Rd?(D("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||bd(e,r.key)):F()}function Tv(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(D("SyncEngine","New document in limbo: "+n),e.ga.add(r),Il(e))}function Il(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new N(ot.fromString(t)),r=e.Da.next();e.ya.set(r,new hv(n)),e.pa=e.pa.insert(n,r),pd(e.remoteStore,new Oe(me(ll(n.path)),r,"TargetPurposeLimboResolution",nl._e))}}async function us(e,t,n){const r=j(e),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=ml.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=j(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>T.forEach(c,p=>T.forEach(p.ki,m=>u.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>T.forEach(p.qi,m=>u.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!is(f))throw f;D("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const m=u.ts.get(p),b=m.snapshotVersion,P=m.withLastLimboFreeSnapshotVersion(b);u.ts=u.ts.insert(p,P)}}}(r.localStore,i))}async function vv(e,t){const n=j(e);if(!n.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await ud(n.localStore,t);n.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new S(_.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await us(n,r._s)}}function Iv(e,t){const n=j(e),r=n.ya.get(t);if(r&&r.Ra)return K().add(r.key);{let s=K();const i=n.fa.get(t);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function wv(e){const t=j(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Iv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_v.bind(null,t),t.Va.a_=av.bind(null,t.eventManager),t.Va.Fa=lv.bind(null,t.eventManager),t}function Av(e){const t=j(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ev.bind(null,t),t}class mu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$i(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return xT(this.persistence,new VT,t.initialUser,this.serializer)}createPersistence(t){return new CT(pl.jr,this.serializer)}createSharedClientState(t){return new UT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rv{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>du(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vv.bind(null,this.syncEngine),await sv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ov}()}createDatastore(t){const n=$i(t.databaseInfo.databaseId),r=function(i){return new qT(i)}(t.databaseInfo);return function(i,o,a,l){return new KT(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new GT(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>du(this.syncEngine,n,0),function(){return uu.D()?new uu:new BT}())}createSyncEngine(t,n){return function(s,i,o,a,l,c,u){const f=new fv(s,i,o,a,l,c);return u&&(f.Ca=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=j(n);D("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await cs(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Ce("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=Df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{D("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(D("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Tl(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Io(e,t){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ud(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function gu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Sv(e);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>hu(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>hu(t.remoteStore,i)),e._onlineComponents=t}function Cv(e){return e.name==="FirebaseError"?e.code===_.FAILED_PRECONDITION||e.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Sv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Io(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Cv(n))throw n;Un("Error using user provided cache. Falling back to memory cache: "+n),await Io(e,new mu)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Io(e,new mu);return e._offlineComponents}async function Dd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await gu(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await gu(e,new Rv))),e._onlineComponents}function bv(e){return Dd(e).then(t=>t.syncEngine)}async function xd(e){const t=await Dd(e),n=t.eventManager;return n.onListen=dv.bind(null,t.syncEngine),n.onUnlisten=mv.bind(null,t.syncEngine),n}function Vv(e,t,n={}){const r=new Ae;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Vd({next:p=>{o.enqueueAndForget(()=>Id(i,f));const m=p.docs.has(a);!m&&p.fromCache?c.reject(new S(_.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?c.reject(new S(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new wd(ll(a.path),u,{includeMetadataChanges:!0,J_:!0});return vd(i,f)}(await xd(e),e.asyncQueue,t,n,r)),r.promise}function Dv(e,t,n={}){const r=new Ae;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Vd({next:p=>{o.enqueueAndForget(()=>Id(i,f)),p.fromCache&&l.source==="server"?c.reject(new S(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new wd(a,u,{includeMetadataChanges:!0,J_:!0});return vd(i,f)}(await xd(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(e,t,n){if(!n)throw new S(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xv(e,t,n,r){if(t===!0&&r===!0)throw new S(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yu(e){if(!N.isDocumentKey(e))throw new S(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Eu(e){if(N.isDocumentKey(e))throw new S(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":F()}function be(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zi(e);throw new S(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new S(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nd((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new S(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new S(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new S(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hi{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jy;switch(r.type){case"firstParty":return new nE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_u.get(n);r&&(D("ComponentProvider","Removing Datastore"),_u.delete(n),r.terminate())}(this),Promise.resolve()}}function Nv(e,t,n,r={}){var s;const i=(e=be(e,Hi))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ct.MOCK_USER;else{a=Dg(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new S(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ct(c)}e._authCredentials=new Zy(new Vf(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new er(this.firestore,t,this._query)}}class jt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jt(this.firestore,t,this._key)}}class Ue extends er{constructor(t,n,r){super(t,n,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jt(this.firestore,null,new N(t))}withConverter(t){return new Ue(this.firestore,t,this._path)}}function Md(e,t,...n){if(e=Re(e),Od("collection","path",t),e instanceof Hi){const r=ot.fromString(t,...n);return Eu(r),new Ue(e,null,r)}{if(!(e instanceof jt||e instanceof Ue))throw new S(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ot.fromString(t,...n));return Eu(r),new Ue(e.firestore,null,r)}}function fa(e,t,...n){if(e=Re(e),arguments.length===1&&(t=Df.newId()),Od("doc","path",t),e instanceof Hi){const r=ot.fromString(t,...n);return yu(r),new jt(e,null,new N(r))}{if(!(e instanceof jt||e instanceof Ue))throw new S(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ot.fromString(t,...n));return yu(r),new jt(e.firestore,e instanceof Ue?e.converter:null,new N(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new fd(this,"async_queue_retry"),this.iu=()=>{const n=vo();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=vo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ae;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!is(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ce("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const s=El.createAndSchedule(this,t,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&F()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class nr extends Hi{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Ov}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kd(this),this._firestoreClient.terminate()}}function Mv(e,t){const n=typeof e=="object"?e:M_(),r=typeof e=="string"?e:t||"(default)",s=D_(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bg("firestore");i&&Nv(s,...i)}return s}function wl(e){return e._firestoreClient||kd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function kd(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,c,u){return new pE(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Nd(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Pv(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(Mt.fromBase64String(t))}catch(n){throw new S(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Hn(Mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new S(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new S(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new S(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=/^__.*__$/;class Fv{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ke(t,this.data,this.fieldMask,n,this.fieldTransforms):new as(t,this.data,n,this.fieldTransforms)}}class Fd{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Ke(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ld(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Rl{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Rl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Au(t),s}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return ai(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Ld(this.Iu)&&kv.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Lv{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||$i(t)}pu(t,n,r,s=!1){return new Rl({Iu:t,methodName:n,gu:r,path:wt.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pl(e){const t=e._freezeSettings(),n=$i(e._databaseId);return new Lv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Uv(e,t,n,r,s,i={}){const o=e.pu(i.merge||i.mergeFields?2:0,t,n,s);Sl("Data must be an object, but it was:",o,r);const a=Ud(r,o);let l,c;if(i.merge)l=new Ht(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=da(t,f,n);if(!o.contains(p))throw new S(_.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);$d(u,p)||u.push(p)}l=new Ht(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Fv(new $t(a),l,c)}class Gi extends Wi{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Gi}}class Cl extends Wi{_toFieldTransform(t){return new LE(t.path,new Kr)}isEqual(t){return t instanceof Cl}}function Bv(e,t,n,r){const s=e.pu(1,t,n);Sl("Data must be an object, but it was:",s,r);const i=[],o=$t.empty();mn(r,(l,c)=>{const u=bl(t,l,n);c=Re(c);const f=s.Ru(u);if(c instanceof Gi)i.push(u);else{const p=hs(c,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new Ht(i);return new Fd(o,a,s.fieldTransforms)}function $v(e,t,n,r,s,i){const o=e.pu(1,t,n),a=[da(t,r,n)],l=[s];if(i.length%2!=0)throw new S(_.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(da(t,i[p])),l.push(i[p+1]);const c=[],u=$t.empty();for(let p=a.length-1;p>=0;--p)if(!$d(c,a[p])){const m=a[p];let b=l[p];b=Re(b);const P=o.Ru(m);if(b instanceof Gi)c.push(m);else{const V=hs(b,P);V!=null&&(c.push(m),u.set(m,V))}}const f=new Ht(c);return new Fd(u,f,o.fieldTransforms)}function jv(e,t,n,r=!1){return hs(n,e.pu(r?4:3,t))}function hs(e,t){if(Bd(e=Re(e)))return Sl("Unsupported field value:",t,e),Ud(e,t);if(e instanceof Wi)return function(r,s){if(!Ld(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=hs(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ME(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=gt.fromDate(r);return{timestampValue:ii(s.serializer,i)}}if(r instanceof gt){const i=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ii(s.serializer,i)}}if(r instanceof Al)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:sd(s.serializer,r._byteString)};if(r instanceof jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${zi(r)}`)}(e,t)}function Ud(e,t){const n={};return xf(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):mn(e,(r,s)=>{const i=hs(s,t.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Bd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof gt||e instanceof Al||e instanceof Hn||e instanceof jt||e instanceof Wi)}function Sl(e,t,n){if(!Bd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=zi(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function da(e,t,n){if((t=Re(t))instanceof Ki)return t._internalPath;if(typeof t=="string")return bl(e,t);throw ai("Field path arguments must be of type string or ",e,!1,void 0,n)}const qv=new RegExp("[~\\*/\\[\\]]");function bl(e,t,n){if(t.search(qv)>=0)throw ai(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ki(...t.split("."))._internalPath}catch{throw ai(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ai(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new S(_.INVALID_ARGUMENT,a+e+l)}function $d(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(qd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zv extends jd{data(){return super.data()}}function qd(e,t){return typeof t=="string"?bl(e,t):t instanceof Ki?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new S(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vl{}class Kv extends Vl{}function Wv(e,t,...n){let r=[];t instanceof Vl&&r.push(t),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof xl).length,a=i.filter(l=>l instanceof Dl).length;if(o>1||o>0&&a>0)throw new S(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Dl extends Kv{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Dl(t,n,r)}_apply(t){const n=this._parse(t);return zd(t._query,n),new er(t.firestore,t.converter,sa(t._query,n))}_parse(t){const n=Pl(t.firestore);return function(i,o,a,l,c,u,f){let p;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new S(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Iu(f,u);const m=[];for(const b of f)m.push(vu(l,i,b));p={arrayValue:{values:m}}}else p=vu(l,i,f)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Iu(f,u),p=jv(a,o,f,u==="in"||u==="not-in");return mt.create(c,u,p)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class xl extends Vl{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new xl(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:se.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)zd(o,l),o=sa(o,l)}(t._query,n),new er(t.firestore,t.converter,sa(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vu(e,t,n){if(typeof(n=Re(n))=="string"){if(n==="")throw new S(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$f(t)&&n.indexOf("/")!==-1)throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ot.fromString(n));if(!N.isDocumentKey(r))throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hc(e,new N(r))}if(n instanceof jt)return Hc(e,n._key);throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zi(n)}.`)}function Iu(e,t){if(!Array.isArray(e)||e.length===0)throw new S(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function zd(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new S(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Gv{convertValue(t,n="none"){switch(dn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(fn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw F()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return mn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Al(pt(t.latitude),pt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=sl(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qr(t));default:return null}}convertTimestamp(t){const n=je(t);return new gt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ot.fromString(t);at(cd(r));const s=new zr(r.get(1),r.get(3)),i=new N(r.popFirst(5));return s.isEqual(n)||Ce(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hd extends jd{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(qd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ls extends Hd{data(t={}){return super.data(t)}}class Yv{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new gr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ls(this._firestore,this._userDataWriter,r.key,r,new gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ls(s._firestore,s._userDataWriter,a.doc.key,a.doc,new gr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ls(s._firestore,s._userDataWriter,a.doc.key,a.doc,new gr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Xv(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Xv(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(e){e=be(e,jt);const t=be(e.firestore,nr);return Vv(wl(t),e._key).then(n=>rI(t,e,n))}class Kd extends Gv{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function Zv(e){e=be(e,er);const t=be(e.firestore,nr),n=wl(t),r=new Kd(t);return Hv(e._query),Dv(n,e._query).then(s=>new Yv(t,r,e,s))}function tI(e,t,n,...r){e=be(e,jt);const s=be(e.firestore,nr),i=Pl(s);let o;return o=typeof(t=Re(t))=="string"||t instanceof Ki?$v(i,"updateDoc",e._key,t,n,r):Bv(i,"updateDoc",e._key,t),Nl(s,[o.toMutation(e._key,ne.exists(!0))])}function eI(e){return Nl(be(e.firestore,nr),[new cl(e._key,ne.none())])}function nI(e,t){const n=be(e.firestore,nr),r=fa(e),s=Qv(e.converter,t);return Nl(n,[Uv(Pl(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,ne.exists(!1))]).then(()=>r)}function Nl(e,t){return function(r,s){const i=new Ae;return r.asyncQueue.enqueueAndForget(async()=>gv(await bv(r),s,i)),i.promise}(wl(e),t)}function rI(e,t,n){const r=n.docs.get(t._key),s=new Kd(e);return new Hd(e,s,t._key,r,new gr(n.hasPendingWrites,n.fromCache),t.converter)}function sI(){return new Cl("serverTimestamp")}(function(t,n=!0){(function(s){Jn=s})(O_),Ws(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new nr(new tE(r.getProvider("auth-internal")),new sE(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new S(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Vn($c,"4.3.2",t),Vn($c,"4.3.2","esm2017")})();var iI="firebase",oI="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(iI,oI,"app");const aI={apiKey:"AIzaSyCvEW0vLSsZci4y-ZGZbiqG133NXLP8SoU",authDomain:"int305fb004-app.firebaseapp.com",projectId:"int305fb004-app",storageBucket:"int305fb004-app.appspot.com",messagingSenderId:"535643364215",appId:"1:535643364215:web:9f59908c5b86d7214bdf72"};Ah(aI);const Us=Mv(),lI={class:"space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400"},cI=["onClick"],uI=["onClick"],hI={__name:"TodoList",props:["todos"],emits:["togle-completed","delete-todo"],setup(e){return(t,n)=>(Er(),Tr("ol",lI,[(Er(!0),Tr(ce,null,hm(e.todos,r=>(Er(),Tr("li",{key:r.title,class:"flex"},[Ie("div",{class:fi(["mr-5 w-80",r.completed?"text-gray-400 line-through":"text-gray-800"])},$l(r.title),3),Ie("button",{type:"button",onClick:s=>t.$emit("togle-completed",r.id),class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2"},$l(r.completed?"Not Complete":"Complete"),9,cI),Ie("button",{type:"button",onClick:s=>t.$emit("delete-todo",r.id),class:"text-gray-100 bg-red-600 border border-gray-300 focus:outline-none hover:bg-red-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2"},"Delete",8,uI)]))),128))]))}},fI={class:"w-full"},dI={class:"mb-6 flex"},pI={__name:"TodoInput",emits:["update-todos"],setup(e,{emit:t}){const n=t,r=Hu(""),s=async()=>{await nI(Md(Us,"todos"),{createdAt:sI(),completed:!1,title:r.value}),n("update-todos")};return(i,o)=>(Er(),Tr("div",fI,[Ie("div",dI,[Zp(Ie("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),placeholder:"Enter a new task",class:"w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[mg,r.value]]),Ie("button",{type:"button",onClick:s,class:"ml-5 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Add")])]))}},mI={class:"m-5"},gI=Ie("h1",{class:"mb-2 text-2xl font-extrabold text-gray-900 dark:text-white"},"Todo List:",-1),_I={__name:"App",setup(e){const t=Hu([]),n=async()=>{const o=Md(Us,"todos"),a=await Zv(Wv(o));t.value=[],a.forEach(l=>{let c=l.data();c.id=l.id,t.value.push(c)})},r=async o=>{const a=fa(Us,"todos",o),c=(await Jv(a)).data();await tI(a,{completed:!c.completed}),await n()},s=async o=>{await eI(fa(Us,"todos",o)),await n()};rh(()=>{n()});const i=()=>{n()};return(o,a)=>(Er(),Tr("main",mI,[gI,we(pI,{onUpdateTodos:i}),we(hI,{todos:t.value,onDeleteTodo:s,onTogleCompleted:r},null,8,["todos"])]))}};yg(_I).mount("#app");
