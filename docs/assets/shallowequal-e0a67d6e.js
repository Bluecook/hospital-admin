import{t as p,e as o}from"./default-ceed22dd.js";import{$ as v}from"./index-1bae46c1.js";var h=p("success","processing","error","default","warning"),O=p("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");function y(e,r,t,s){var a=t?t.call(s,e,r):void 0;if(a!==void 0)return!!a;if(e===r)return!0;if(o(e)!=="object"||!e||o(r)!=="object"||!r)return!1;var n=Object.keys(e),c=Object.keys(r);if(n.length!==c.length)return!1;for(var g=Object.prototype.hasOwnProperty.bind(r),u=0;u<n.length;u++){var l=n[u];if(!g(l))return!1;var f=e[l],i=r[l];if(a=t?t.call(s,f,i,l):void 0,a===!1||a===void 0&&f!==i)return!1}return!0}function P(e,r,t,s){return y(v(e),v(r),t,s)}export{O as P,h as a,P as s};