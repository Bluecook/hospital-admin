import{l as $t,y as jt,q as Tt,O as St,G as m,H as It,U as ht,A as y,J as rt,d as F,a5 as wt,af as xt,g as z,I as N,ab as C,bH as A,a0 as U}from"./index-44f2dd9c.js";let nt=t=>setTimeout(t,16),ot=t=>clearTimeout(t);typeof window<"u"&&"requestAnimationFrame"in window&&(nt=t=>window.requestAnimationFrame(t),ot=t=>window.cancelAnimationFrame(t));let V=0;const D=new Map;function at(t){D.delete(t)}function Ot(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;V+=1;const r=V;function n(o){if(o===0)at(r),t();else{const i=nt(()=>{n(o-1)});D.set(r,i)}}return n(e),r}Ot.cancel=t=>{const e=D.get(t);return at(e),ot(e)};let L={};function Ct(t,e){}function At(t,e){}function ct(t,e,r){!e&&!L[r]&&(t(!1,r),L[r]=!0)}function Pt(t,e){ct(Ct,t,e)}function Pr(t,e){ct(At,t,e)}const Er=(t,e,r)=>{Pt(t,`[ant-design-vue: ${e}] ${r}`)},Br=t=>{if(!t)return!1;if(t.offsetParent)return!0;if(t.getBBox){const e=t.getBBox();if(e.width||e.height)return!0}if(t.getBoundingClientRect){const e=t.getBoundingClientRect();if(e.width||e.height)return!0}return!1};var Et=typeof global=="object"&&global&&global.Object===Object&&global;const it=Et;var Bt=typeof self=="object"&&self&&self.Object===Object&&self,kt=it||Bt||Function("return this")();const u=kt;var Mt=u.Symbol;const v=Mt;var st=Object.prototype,Ft=st.hasOwnProperty,Dt=st.toString,p=v?v.toStringTag:void 0;function Rt(t){var e=Ft.call(t,p),r=t[p];try{t[p]=void 0;var n=!0}catch{}var o=Dt.call(t);return n&&(e?t[p]=r:delete t[p]),o}var _t=Object.prototype,zt=_t.toString;function Nt(t){return zt.call(t)}var Ut="[object Null]",Vt="[object Undefined]",W=v?v.toStringTag:void 0;function g(t){return t==null?t===void 0?Vt:Ut:W&&W in Object(t)?Rt(t):Nt(t)}function ut(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Lt="[object AsyncFunction]",Wt="[object Function]",qt="[object GeneratorFunction]",Gt="[object Proxy]";function lt(t){if(!ut(t))return!1;var e=g(t);return e==Wt||e==qt||e==Lt||e==Gt}var Kt=u["__core-js_shared__"];const x=Kt;var q=function(){var t=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ht(t){return!!q&&q in t}var Jt=Function.prototype,Xt=Jt.toString;function f(t){if(t!=null){try{return Xt.call(t)}catch{}try{return t+""}catch{}}return""}var Qt=/[\\^$.*+?()[\]{}|]/g,Yt=/^\[object .+?Constructor\]$/,Zt=Function.prototype,te=Object.prototype,ee=Zt.toString,re=te.hasOwnProperty,ne=RegExp("^"+ee.call(re).replace(Qt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function oe(t){if(!ut(t)||Ht(t))return!1;var e=lt(t)?ne:Yt;return e.test(f(t))}function ae(t,e){return t==null?void 0:t[e]}function b(t,e){var r=ae(t,e);return oe(r)?r:void 0}var ce=b(u,"Map");const P=ce;var ie=Array.isArray;const se=ie;function R(t){return t!=null&&typeof t=="object"}var ue="[object Arguments]";function G(t){return R(t)&&g(t)==ue}var ft=Object.prototype,le=ft.hasOwnProperty,fe=ft.propertyIsEnumerable,pe=G(function(){return arguments}())?G:function(t){return R(t)&&le.call(t,"callee")&&!fe.call(t,"callee")};const de=pe;function me(){return!1}var pt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,K=pt&&typeof module=="object"&&module&&!module.nodeType&&module,ge=K&&K.exports===pt,H=ge?u.Buffer:void 0,be=H?H.isBuffer:void 0,ye=be||me;const ve=ye;var $e=9007199254740991;function dt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=$e}var je="[object Arguments]",Te="[object Array]",Se="[object Boolean]",Ie="[object Date]",he="[object Error]",we="[object Function]",xe="[object Map]",Oe="[object Number]",Ce="[object Object]",Ae="[object RegExp]",Pe="[object Set]",Ee="[object String]",Be="[object WeakMap]",ke="[object ArrayBuffer]",Me="[object DataView]",Fe="[object Float32Array]",De="[object Float64Array]",Re="[object Int8Array]",_e="[object Int16Array]",ze="[object Int32Array]",Ne="[object Uint8Array]",Ue="[object Uint8ClampedArray]",Ve="[object Uint16Array]",Le="[object Uint32Array]",a={};a[Fe]=a[De]=a[Re]=a[_e]=a[ze]=a[Ne]=a[Ue]=a[Ve]=a[Le]=!0;a[je]=a[Te]=a[ke]=a[Se]=a[Me]=a[Ie]=a[he]=a[we]=a[xe]=a[Oe]=a[Ce]=a[Ae]=a[Pe]=a[Ee]=a[Be]=!1;function We(t){return R(t)&&dt(t.length)&&!!a[g(t)]}function qe(t){return function(e){return t(e)}}var mt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,d=mt&&typeof module=="object"&&module&&!module.nodeType&&module,Ge=d&&d.exports===mt,O=Ge&&it.process,Ke=function(){try{var t=d&&d.require&&d.require("util").types;return t||O&&O.binding&&O.binding("util")}catch{}}();const J=Ke;var X=J&&J.isTypedArray,He=X?qe(X):We;const Je=He;var Xe=Object.prototype;function gt(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Xe;return t===r}function Qe(t,e){return function(r){return t(e(r))}}var Ye=Qe(Object.keys,Object);const Ze=Ye;var tr=Object.prototype,er=tr.hasOwnProperty;function rr(t){if(!gt(t))return Ze(t);var e=[];for(var r in Object(t))er.call(t,r)&&r!="constructor"&&e.push(r);return e}function nr(t){return t!=null&&dt(t.length)&&!lt(t)}var or=b(u,"DataView");const E=or;var ar=b(u,"Promise");const B=ar;var cr=b(u,"Set");const k=cr;var ir=b(u,"WeakMap");const M=ir;var Q="[object Map]",sr="[object Object]",Y="[object Promise]",Z="[object Set]",tt="[object WeakMap]",et="[object DataView]",ur=f(E),lr=f(P),fr=f(B),pr=f(k),dr=f(M),l=g;(E&&l(new E(new ArrayBuffer(1)))!=et||P&&l(new P)!=Q||B&&l(B.resolve())!=Y||k&&l(new k)!=Z||M&&l(new M)!=tt)&&(l=function(t){var e=g(t),r=e==sr?t.constructor:void 0,n=r?f(r):"";if(n)switch(n){case ur:return et;case lr:return Q;case fr:return Y;case pr:return Z;case dr:return tt}return e});const mr=l;function kr(t){const e=typeof t=="function"?t():t,r=$t(e);function n(o){r.value=o}return[r,n]}function gr(t){const e=Symbol("contextKey");return{useProvide:(o,i)=>{const c=jt({});return Tt(e,c),St(()=>{m(c,o,i||{})}),c},useInject:()=>It(e,t)||{}}}const br=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},yr=br,vr=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-space-item`]:{"&:empty":{display:"none"}}}}},$r=ht("Space",t=>[vr(t),yr(t)]);var jr="[object Map]",Tr="[object Set]",Sr=Object.prototype,Ir=Sr.hasOwnProperty;function bt(t){if(t==null)return!0;if(nr(t)&&(se(t)||typeof t=="string"||typeof t.splice=="function"||ve(t)||Je(t)||de(t)))return!t.length;var e=mr(t);if(e==jr||e==Tr)return!t.size;if(gt(t))return!rr(t).length;for(var r in t)if(Ir.call(t,r))return!1;return!0}const hr=()=>({compactSize:String,compactDirection:C.oneOf(A("horizontal","vertical")).def("horizontal"),isFirstItem:U(),isLastItem:U()}),$=gr(null),Mr=(t,e)=>{const r=$.useInject(),n=y(()=>{if(!r||bt(r))return"";const{compactDirection:o,isFirstItem:i,isLastItem:c}=r,s=o==="vertical"?"-vertical-":"-";return rt({[`${t.value}-compact${s}item`]:!0,[`${t.value}-compact${s}first-item`]:i,[`${t.value}-compact${s}last-item`]:c,[`${t.value}-compact${s}item-rtl`]:e.value==="rtl"})});return{compactSize:y(()=>r==null?void 0:r.compactSize),compactDirection:y(()=>r==null?void 0:r.compactDirection),compactItemClassnames:n}},Fr=F({name:"NoCompactStyle",setup(t,e){let{slots:r}=e;return $.useProvide(null),()=>{var n;return(n=r.default)===null||n===void 0?void 0:n.call(r)}}}),wr=()=>({prefixCls:String,size:{type:String},direction:C.oneOf(A("horizontal","vertical")).def("horizontal"),align:C.oneOf(A("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),xr=F({name:"CompactItem",props:hr(),setup(t,e){let{slots:r}=e;return $.useProvide(t),()=>{var n;return(n=r.default)===null||n===void 0?void 0:n.call(r)}}});F({name:"ASpaceCompact",inheritAttrs:!1,props:wr(),setup(t,e){let{attrs:r,slots:n}=e;const{prefixCls:o,direction:i}=wt("space-compact",t),c=$.useInject(),[s,j]=$r(o),yt=y(()=>rt(o.value,j.value,{[`${o.value}-rtl`]:i.value==="rtl",[`${o.value}-block`]:t.block,[`${o.value}-vertical`]:t.direction==="vertical"}));return()=>{var T;const S=xt(((T=n.default)===null||T===void 0?void 0:T.call(n))||[]);return S.length===0?null:s(z("div",N(N({},r),{},{class:[yt.value,r.class]}),[S.map((I,h)=>{var w;const vt=I&&I.key||`${o.value}-item-${h}`,_=!c||bt(c);return z(xr,{key:vt,compactSize:(w=t.size)!==null&&w!==void 0?w:"middle",compactDirection:t.direction,isFirstItem:h===0&&(_||(c==null?void 0:c.isFirstItem)),isLastItem:h===S.length-1&&(_||(c==null?void 0:c.isLastItem))},{default:()=>[I]})})]))}}});function Or(t,e,r){const{focusElCls:n,focus:o,borderElCls:i}=r,c=i?"> *":"",s=["hover",o?"focus":null,"active"].filter(Boolean).map(j=>`&:${j} ${c}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":m(m({[s]:{zIndex:2}},n?{[`&${n}`]:{zIndex:2}}:{}),{[`&[disabled] ${c}`]:{zIndex:0}})}}function Cr(t,e,r){const{borderElCls:n}=r,o=n?`> ${n}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${o}, &${t}-sm ${o}, &${t}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${o}, &${t}-sm ${o}, &${t}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function Dr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:r}=t,n=`${r}-compact`;return{[n]:m(m({},Or(t,n,e)),Cr(r,n,e))}}export{Je as A,rr as B,P as M,Fr as N,v as S,Pt as a,Mr as b,ut as c,Er as d,gt as e,nr as f,Dr as g,R as h,Br as i,mr as j,J as k,qe as l,se as m,Pr as n,ve as o,Ct as p,b as q,u as r,de as s,dt as t,kr as u,k as v,Ot as w,g as x,Qe as y,gr as z};
