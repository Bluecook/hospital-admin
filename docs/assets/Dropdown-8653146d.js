import{d as B,a5 as a,l as m,B as D,A as p,W as E,g,I as y,K as M,L,F as _}from"./index-aacfeba5.js";import{T as R}from"./Overflow-1b3ca2ec.js";import{c as C}from"./collapseMotion-37ab7c7d.js";var o={adjustX:1,adjustY:1},r=[0,0],$={topLeft:{points:["bl","tl"],overflow:o,offset:[0,-4],targetOffset:r},topCenter:{points:["bc","tc"],overflow:o,offset:[0,-4],targetOffset:r},topRight:{points:["br","tr"],overflow:o,offset:[0,-4],targetOffset:r},bottomLeft:{points:["tl","bl"],overflow:o,offset:[0,4],targetOffset:r},bottomCenter:{points:["tc","bc"],overflow:o,offset:[0,4],targetOffset:r},bottomRight:{points:["tr","br"],overflow:o,offset:[0,4],targetOffset:r}};const F=$;var H=["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"];const q=B({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:a.string.def("rc-dropdown"),transitionName:String,overlayClassName:a.string.def(""),openClassName:String,animation:a.any,align:a.object,overlayStyle:{type:Object,default:void 0},placement:a.string.def("bottomLeft"),overlay:a.any,trigger:a.oneOfType([a.string,a.arrayOf(a.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:a.array,hideAction:a.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:a.number.def(.15),mouseLeaveDelay:a.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,f){var s=f.slots,v=f.emit,h=f.expose,l=m(!!e.visible);D(function(){return e.visible},function(n){n!==void 0&&(l.value=n)});var u=m();h({triggerRef:u});var b=function(t){e.visible===void 0&&(l.value=!1),v("overlayClick",t)},w=function(t){e.visible===void 0&&(l.value=t),v("visibleChange",t)},O=function(){var t,i=(t=s.overlay)===null||t===void 0?void 0:t.call(s),c={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:b,getPopupContainer:function(){return u.value.getPopupDomNode()}};return g(_,null,[e.arrow&&g("div",{class:"".concat(e.prefixCls,"-arrow")},null),C(i,c,!1)])},P=p(function(){var n=e.minOverlayWidthMatchTrigger,t=n===void 0?!e.alignPoint:n;return t}),x=function(){var t,i=(t=s.default)===null||t===void 0?void 0:t.call(s);return l.value&&i?C(i[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):i},N=p(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var n=e.prefixCls,t=e.arrow,i=e.showAction,c=e.overlayStyle,d=e.trigger,A=e.placement,T=e.align,S=e.getPopupContainer,j=e.transitionName,V=e.animation,W=e.overlayClassName,k=E(e,H);return g(R,y(y({},k),{},{prefixCls:n,ref:u,popupClassName:M(W,L({},"".concat(n,"-show-arrow"),t)),popupStyle:c,builtinPlacements:F,action:d,showAction:i,hideAction:N.value||[],popupPlacement:A,popupAlign:T,popupTransitionName:j,popupAnimation:V,popupVisible:l.value,stretch:P.value?"minWidth":"",onPopupVisibleChange:w,getPopupContainer:S}),{popup:O,default:x})}}});export{q as D};