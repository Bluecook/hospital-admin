import{t as P,u as F,e as y,c as I,_ as c,b as O}from"./default-ceed22dd.js";import{d as K,R as A,r as G}from"./styleChecker-0aff1a87.js";import{r as $,a as B,H as L,c as l,C as T,d as E,I as V,b as M}from"./index-1bae46c1.js";const W=function(){var o=$(!1);return B(function(){o.value=K()}),o};var D=Symbol("rowContextKey"),H=function(r){T(D,r)},U=function(){return L(D,{gutter:l(function(){}),wrap:l(function(){}),supportFlexGap:l(function(){})})};const k=H;P("top","middle","bottom","stretch");P("start","end","center","space-around","space-between");var q=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},J=E({compatConfig:{MODE:3},name:"ARow",props:q(),setup:function(r,N){var g=N.slots,v=F("row",r),d=v.prefixCls,h=v.direction,j,x=$({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=W();B(function(){j=A.subscribe(function(e){var t=r.gutter||0;(!Array.isArray(t)&&y(t)==="object"||Array.isArray(t)&&(y(t[0])==="object"||y(t[1])==="object"))&&(x.value=e)})}),V(function(){A.unsubscribe(j)});var S=l(function(){var e=[0,0],t=r.gutter,n=t===void 0?0:t,s=Array.isArray(n)?n:[n,0];return s.forEach(function(i,b){if(y(i)==="object")for(var a=0;a<G.length;a++){var p=G[a];if(x.value[p]&&i[p]!==void 0){e[b]=i[p];break}}else e[b]=i||0}),e});k({gutter:S,supportFlexGap:w,wrap:l(function(){return r.wrap})});var R=l(function(){var e;return I(d.value,(e={},c(e,"".concat(d.value,"-no-wrap"),r.wrap===!1),c(e,"".concat(d.value,"-").concat(r.justify),r.justify),c(e,"".concat(d.value,"-").concat(r.align),r.align),c(e,"".concat(d.value,"-rtl"),h.value==="rtl"),e))}),_=l(function(){var e=S.value,t={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(t.marginLeft=n,t.marginRight=n),w.value?t.rowGap="".concat(e[1],"px"):s&&(t.marginTop=s,t.marginBottom=s),t});return function(){var e;return M("div",{class:R.value,style:_.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});const ee=J;function Q(o){return typeof o=="number"?"".concat(o," ").concat(o," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(o)?"0 0 ".concat(o):o}var X=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const te=E({compatConfig:{MODE:3},name:"ACol",props:X(),setup:function(r,N){var g=N.slots,v=U(),d=v.gutter,h=v.supportFlexGap,j=v.wrap,x=F("col",r),w=x.prefixCls,S=x.direction,R=l(function(){var e,t=r.span,n=r.order,s=r.offset,i=r.push,b=r.pull,a=w.value,p={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(m){var f,u={},C=r[m];typeof C=="number"?u.span=C:y(C)==="object"&&(u=C||{}),p=O(O({},p),{},(f={},c(f,"".concat(a,"-").concat(m,"-").concat(u.span),u.span!==void 0),c(f,"".concat(a,"-").concat(m,"-order-").concat(u.order),u.order||u.order===0),c(f,"".concat(a,"-").concat(m,"-offset-").concat(u.offset),u.offset||u.offset===0),c(f,"".concat(a,"-").concat(m,"-push-").concat(u.push),u.push||u.push===0),c(f,"".concat(a,"-").concat(m,"-pull-").concat(u.pull),u.pull||u.pull===0),c(f,"".concat(a,"-rtl"),S.value==="rtl"),f))}),I(a,(e={},c(e,"".concat(a,"-").concat(t),t!==void 0),c(e,"".concat(a,"-order-").concat(n),n),c(e,"".concat(a,"-offset-").concat(s),s),c(e,"".concat(a,"-push-").concat(i),i),c(e,"".concat(a,"-pull-").concat(b),b),e),p)}),_=l(function(){var e=r.flex,t=d.value,n={};if(t&&t[0]>0){var s="".concat(t[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(t&&t[1]>0&&!h.value){var i="".concat(t[1]/2,"px");n.paddingTop=i,n.paddingBottom=i}return e&&(n.flex=Q(e),j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return M("div",{class:R.value,style:_.value},[(e=g.default)===null||e===void 0?void 0:e.call(g)])}}});export{te as C,ee as R,W as u};
