import{G as u,l as s,H as l}from"./collapseMotion-7d39dd45.js";var f=u(Object.getPrototypeOf,Object);const a=f;var g="[object Object]",b=Function.prototype,h=Object.prototype,i=b.toString,p=h.hasOwnProperty,O=i.call(Object);function w(t){if(!s(t)||l(t)!=g)return!1;var n=a(t);if(n===null)return!0;var e=p.call(n,"constructor")&&n.constructor;return typeof e=="function"&&e instanceof e&&i.call(e)==O}function j(t,n,e,r){for(var o=t.length,c=e+(r?1:-1);r?c--:++c<o;)if(n(t[c],c,t))return c;return-1}function d(t){return t!==t}function v(t,n,e){for(var r=e-1,o=t.length;++r<o;)if(t[r]===n)return r;return-1}function P(t,n,e){return n===n?v(t,n,e):j(t,d,e)}function I(t,n){var e=t==null?0:t.length;return!!e&&P(t,n,0)>-1}function S(t,n,e){for(var r=-1,o=t==null?0:t.length;++r<o;)if(e(n,t[r]))return!0;return!1}export{S as a,j as b,I as c,a as g,w as i};
