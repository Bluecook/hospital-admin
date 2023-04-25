import{d as G,a6 as mt,u as st,e as ut,n as ct,Z as dt,b0 as Q,P as gt,f as E,L as X,aq as Et,r as z,c as F,b as bt,a0 as yt,aG as pt,ag as ht,g as N,_ as g,aJ as Tt,a1 as St,a8 as Ct}from"./index-f7c534c0.js";import{w as Y,i as xt}from"./raf-fd42b6c0.js";var V={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},H={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},w=[],L=[];function kt(){var i=document.createElement("div"),t=i.style;"AnimationEvent"in window||(delete V.animationstart.animation,delete H.animationend.animation),"TransitionEvent"in window||(delete V.transitionstart.transition,delete H.transitionend.transition);function a(r,y){for(var b in r)if(r.hasOwnProperty(b)){var d=r[b];for(var f in d)if(f in t){y.push(d[f]);break}}}a(V,w),a(H,L)}typeof window<"u"&&typeof document<"u"&&kt();function tt(i,t,a){i.addEventListener(t,a,!1)}function nt(i,t,a){i.removeEventListener(t,a,!1)}var At={startEvents:w,addStartEventListener:function(t,a){if(w.length===0){setTimeout(a,0);return}w.forEach(function(r){tt(t,r,a)})},removeStartEventListener:function(t,a){w.length!==0&&w.forEach(function(r){nt(t,r,a)})},endEvents:L,addEndEventListener:function(t,a){if(L.length===0){setTimeout(a,0);return}L.forEach(function(r){tt(t,r,a)})},removeEndEventListener:function(t,a){L.length!==0&&L.forEach(function(r){nt(t,r,a)})}};const W=At;var S;function et(i){return!i||i.offsetParent===null}function Nt(i){var t=(i||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const wt=G({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,a){var r=a.slots,y=a.expose,b=mt(),d=st("",t),f=d.csp,p=d.prefixCls;y({csp:f});var B=null,M=null,x=null,h=!1,v=null,m=!1,T=function(n){if(!m){var e=Q(b);!n||n.target!==e||h||A(e)}},I=function(n){!n||n.animationName!=="fadeEffect"||A(n.target)},k=function(){var n=t.insertExtraNode;return n?"".concat(p.value,"-click-animating"):"".concat(p.value,"-click-animating-without-extra-node")},D=function(n,e){var l=t.insertExtraNode,o=t.disabled;if(!(o||!n||et(n)||n.className.indexOf("-leave")>=0)){v=document.createElement("div"),v.className="".concat(p.value,"-click-animating-node");var s=k();if(n.removeAttribute(s),n.setAttribute(s,"true"),S=S||document.createElement("style"),e&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&Nt(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&e!=="transparent"){var C;(C=f.value)!==null&&C!==void 0&&C.nonce&&(S.nonce=f.value.nonce),v.style.borderColor=e,S.innerHTML=`
        [`.concat(p.value,"-click-animating-without-extra-node='true']::after, .").concat(p.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(e,`;
        }`),document.body.contains(S)||document.body.appendChild(S)}l&&n.appendChild(v),W.addStartEventListener(n,T),W.addEndEventListener(n,I)}},A=function(n){if(!(!n||n===v||!(n instanceof Element))){var e=t.insertExtraNode,l=k();n.setAttribute(l,"false"),S&&(S.innerHTML=""),e&&v&&n.contains(v)&&n.removeChild(v),W.removeStartEventListener(n,T),W.removeEndEventListener(n,I)}},R=function(n){if(!(!n||!n.getAttribute||n.getAttribute("disabled")||n.className.indexOf("disabled")>=0)){var e=function(o){if(!(o.target.tagName==="INPUT"||et(o.target))){A(n);var s=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");M=setTimeout(function(){return D(n,s)},0),Y.cancel(x),h=!0,x=Y(function(){h=!1},10)}};return n.addEventListener("click",e,!0),{cancel:function(){n.removeEventListener("click",e,!0)}}}};return ut(function(){ct(function(){var u=Q(b);u.nodeType===1&&(B=R(u))})}),dt(function(){B&&B.cancel(),clearTimeout(M),m=!0}),function(){var u;return(u=r.default)===null||u===void 0?void 0:u.call(r)[0]}}});var Lt=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:gt.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Bt=Lt;var at=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},it=function(t){ct(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},rt=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const It=G({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var a=t.existIcon,r=t.prefixCls,y=t.loading;if(a)return E("span",{class:"".concat(r,"-loading-icon")},[E(X,null,null)]);var b=!!y;return E(Et,{name:"".concat(r,"-loading-icon-motion"),onBeforeEnter:at,onEnter:it,onAfterEnter:rt,onBeforeLeave:it,onLeave:function(f){setTimeout(function(){at(f)})},onAfterLeave:rt},{default:function(){return[b?E("span",{class:"".concat(r,"-loading-icon")},[E(X,null,null)]):null]}})}}});var ot=/^[\u4e00-\u9fa5]{2}$/,lt=ot.test.bind(ot);function j(i){return i==="text"||i==="link"}const Pt=G({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:xt(Bt(),{type:"default"}),slots:["icon"],setup:function(t,a){var r=a.slots,y=a.attrs,b=a.emit,d=st("btn",t),f=d.prefixCls,p=d.autoInsertSpaceInButton,B=d.direction,M=d.size,x=z(null),h=z(void 0),v=!1,m=z(!1),T=z(!1),I=F(function(){return p.value!==!1}),k=F(function(){return St(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});bt(k,function(n){clearTimeout(h.value),typeof k.value=="number"?h.value=setTimeout(function(){m.value=n},k.value):m.value=n},{immediate:!0});var D=F(function(){var n,e=t.type,l=t.shape,o=l===void 0?"default":l,s=t.ghost,C=t.block,U=t.danger,c=f.value,O={large:"lg",small:"sm",middle:void 0},P=M.value,_=P&&O[P]||"";return n={},g(n,"".concat(c),!0),g(n,"".concat(c,"-").concat(e),e),g(n,"".concat(c,"-").concat(o),o!=="default"&&o),g(n,"".concat(c,"-").concat(_),_),g(n,"".concat(c,"-loading"),m.value),g(n,"".concat(c,"-background-ghost"),s&&!j(e)),g(n,"".concat(c,"-two-chinese-chars"),T.value&&I.value),g(n,"".concat(c,"-block"),C),g(n,"".concat(c,"-dangerous"),!!U),g(n,"".concat(c,"-rtl"),B.value==="rtl"),n}),A=function(){var e=x.value;if(!(!e||p.value===!1)){var l=e.textContent;v&&lt(l)?T.value||(T.value=!0):T.value&&(T.value=!1)}},R=function(e){if(m.value||t.disabled){e.preventDefault();return}b("click",e)},u=function(e,l){var o=l?" ":"";if(e.type===Tt){var s=e.children.trim();return lt(s)&&(s=s.split("").join(o)),E("span",null,[s])}return e};return yt(function(){Ct(!(t.ghost&&j(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),ut(A),pt(A),dt(function(){h.value&&clearTimeout(h.value)}),function(){var n,e,l=t.icon,o=l===void 0?(n=r.icon)===null||n===void 0?void 0:n.call(r):l,s=ht((e=r.default)===null||e===void 0?void 0:e.call(r));v=s.length===1&&!o&&!j(t.type);var C=t.type,U=t.htmlType,c=t.disabled,O=t.href,P=t.title,_=t.target,ft=t.onMousedown,vt=m.value?"loading":o,$=N(N({},y),{},{title:P,disabled:c,class:[D.value,y.class,g({},"".concat(f.value,"-icon-only"),s.length===0&&!!vt)],onClick:R,onMousedown:ft});c||delete $.disabled;var q=o&&!m.value?o:E(It,{existIcon:!!o,prefixCls:f.value,loading:!!m.value},null),J=s.map(function(K){return u(K,v&&I.value)});if(O!==void 0)return E("a",N(N({},$),{},{href:O,target:_,ref:x}),[q,J]);var Z=E("button",N(N({},$),{},{ref:x,type:U}),[q,J]);return j(C)?Z:E(wt,{ref:"wave",disabled:!!m.value},{default:function(){return[Z]}})}}});export{Pt as B,wt as W,Bt as b};