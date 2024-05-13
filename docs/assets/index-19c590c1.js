import{l as F,z as P,J as L,A as i,q as D,ah as I,d as $,Z as B,Q as y,M as T,K as E,L as c,g as M,I as R}from"./index-aacfeba5.js";import{d as V,a as _,r as G}from"./styleChecker-1a28dd30.js";const W=function(){var o=F(!1);return P(function(){o.value=V()}),o};var K=Symbol("rowContextKey"),q=function(r){D(K,r)},J=function(){return L(K,{gutter:i(function(){}),wrap:i(function(){}),supportFlexGap:i(function(){})})};I("top","middle","bottom","stretch");I("start","end","center","space-around","space-between");var Q=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},U=$({compatConfig:{MODE:3},name:"ARow",props:Q(),setup:function(r,N){var g=N.slots,v=B("row",r),d=v.prefixCls,h=v.direction,j,x=F({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),S=W();P(function(){j=_.subscribe(function(e){var t=r.gutter||0;(!Array.isArray(t)&&y(t)==="object"||Array.isArray(t)&&(y(t[0])==="object"||y(t[1])==="object"))&&(x.value=e)})}),T(function(){_.unsubscribe(j)});var w=i(function(){var e=[0,0],t=r.gutter,n=t===void 0?0:t,s=Array.isArray(n)?n:[n,0];return s.forEach(function(l,b){if(y(l)==="object")for(var a=0;a<G.length;a++){var p=G[a];if(x.value[p]&&l[p]!==void 0){e[b]=l[p];break}}else e[b]=l||0}),e});q({gutter:w,supportFlexGap:S,wrap:i(function(){return r.wrap})});var A=i(function(){var e;return E(d.value,(e={},c(e,"".concat(d.value,"-no-wrap"),r.wrap===!1),c(e,"".concat(d.value,"-").concat(r.justify),r.justify),c(e,"".concat(d.value,"-").concat(r.align),r.align),c(e,"".concat(d.value,"-rtl"),h.value==="rtl"),e))}),O=i(function(){var e=w.value,t={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(t.marginLeft=n,t.marginRight=n),S.value?t.rowGap="".concat(e[1],"px"):s&&(t.marginTop=s,t.marginBottom=s),t});return function(){var e;return M("div",{class:A.value,style:O.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});const X=U;function Z(o){return typeof o=="number"?"".concat(o," ").concat(o," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(o)?"0 0 ".concat(o):o}var k=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const Y=$({compatConfig:{MODE:3},name:"ACol",props:k(),setup:function(r,N){var g=N.slots,v=J(),d=v.gutter,h=v.supportFlexGap,j=v.wrap,x=B("col",r),S=x.prefixCls,w=x.direction,A=i(function(){var e,t=r.span,n=r.order,s=r.offset,l=r.push,b=r.pull,a=S.value,p={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(m){var f,u={},C=r[m];typeof C=="number"?u.span=C:y(C)==="object"&&(u=C||{}),p=R(R({},p),{},(f={},c(f,"".concat(a,"-").concat(m,"-").concat(u.span),u.span!==void 0),c(f,"".concat(a,"-").concat(m,"-order-").concat(u.order),u.order||u.order===0),c(f,"".concat(a,"-").concat(m,"-offset-").concat(u.offset),u.offset||u.offset===0),c(f,"".concat(a,"-").concat(m,"-push-").concat(u.push),u.push||u.push===0),c(f,"".concat(a,"-").concat(m,"-pull-").concat(u.pull),u.pull||u.pull===0),c(f,"".concat(a,"-rtl"),w.value==="rtl"),f))}),E(a,(e={},c(e,"".concat(a,"-").concat(t),t!==void 0),c(e,"".concat(a,"-order-").concat(n),n),c(e,"".concat(a,"-offset-").concat(s),s),c(e,"".concat(a,"-push-").concat(l),l),c(e,"".concat(a,"-pull-").concat(b),b),e),p)}),O=i(function(){var e=r.flex,t=d.value,n={};if(t&&t[0]>0){var s="".concat(t[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(t&&t[1]>0&&!h.value){var l="".concat(t[1]/2,"px");n.paddingTop=l,n.paddingBottom=l}return e&&(n.flex=Z(e),j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return M("div",{class:A.value,style:O.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});export{Y as C,X as R};