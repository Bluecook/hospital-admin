import{y as ft,h as ut,x as mt,w as U}from"./compact-item-acfb9678.js";import{G as s,ax as x,d as Z,g as I,ab as _,K,O as dt,an as gt,$ as R,J as X,U as bt,V as ot,W as vt,ae as yt,a5 as ht,A as D,l as Y,B as wt,bR as Ot,ag as Ct,cf as $t,aC as Pt,cg as _t,ap as xt}from"./index-44f2dd9c.js";import{d as St,T as Tt,f as At,c as q}from"./collapseMotion-00cd34c7.js";const V=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],It=(t,o,e,n,a)=>{const i=t/2,l=0,p=i,m=e*1/Math.sqrt(2),y=i-e*(1-1/Math.sqrt(2)),f=i-o*(1/Math.sqrt(2)),u=e*(Math.sqrt(2)-1)+o*(1/Math.sqrt(2)),g=2*i-f,w=u,h=2*i-m,O=y,N=2*i-l,j=p,S=i*Math.sqrt(2)+e*(Math.sqrt(2)-2),A=e*(Math.sqrt(2)-1);return{pointerEvents:"none",width:t,height:t,overflow:"hidden","&::after":{content:'""',position:"absolute",width:S,height:S,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${o}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:a,zIndex:0,background:"transparent"},"&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:t,height:t/2,background:n,clipPath:{_multi_value_:!0,value:[`polygon(${A}px 100%, 50% ${A}px, ${2*i-A}px 100%, ${A}px 100%)`,`path('M ${l} ${p} A ${e} ${e} 0 0 0 ${m} ${y} L ${f} ${u} A ${o} ${o} 0 0 1 ${g} ${w} L ${h} ${O} A ${e} ${e} 0 0 0 ${N} ${j} Z')`]},content:'""'}}};function jt(t,o){return V.reduce((e,n)=>{const a=t[`${n}-1`],i=t[`${n}-3`],l=t[`${n}-6`],p=t[`${n}-7`];return s(s({},e),o(n,{lightColor:a,lightBorderColor:i,darkColor:l,textColor:p}))},{})}function Bt(t,o,e,n){for(var a=t.length,i=e+(n?1:-1);n?i--:++i<a;)if(o(t[i],i,t))return i;return-1}function kt(t){return t!==t}function Dt(t,o,e){for(var n=e-1,a=t.length;++n<a;)if(t[n]===o)return n;return-1}function Nt(t,o,e){return o===o?Dt(t,o,e):Bt(t,kt,e)}function $e(t,o){var e=t==null?0:t.length;return!!e&&Nt(t,o,0)>-1}var zt=ft(Object.getPrototypeOf,Object);const Rt=zt;var Lt="[object Object]",Vt=Function.prototype,Mt=Object.prototype,nt=Vt.toString,Et=Mt.hasOwnProperty,Ft=nt.call(Object);function Pe(t){if(!ut(t)||mt(t)!=Lt)return!1;var o=Rt(t);if(o===null)return!0;var e=Et.call(o,"constructor")&&o.constructor;return typeof e=="function"&&e instanceof e&&nt.call(e)==Ft}function _e(t,o,e){for(var n=-1,a=t==null?0:t.length;++n<a;)if(e(o,t[n]))return!0;return!1}const Kt=new x("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Xt=new x("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),G=new x("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),J=new x("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Zt=new x("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),Ht=new x("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),Wt=new x("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),Ut=new x("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),Yt=new x("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),qt=new x("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),Gt=new x("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),Jt=new x("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),Qt={zoom:{inKeyframes:Kt,outKeyframes:Xt},"zoom-big":{inKeyframes:G,outKeyframes:J},"zoom-big-fast":{inKeyframes:G,outKeyframes:J},"zoom-left":{inKeyframes:Wt,outKeyframes:Ut},"zoom-right":{inKeyframes:Yt,outKeyframes:qt},"zoom-up":{inKeyframes:Zt,outKeyframes:Ht},"zoom-down":{inKeyframes:Gt,outKeyframes:Jt}},te=(t,o)=>{const{antCls:e}=t,n=`${e}-${o}`,{inKeyframes:a,outKeyframes:i}=Qt[o];return[St(n,a,i,o==="zoom-big-fast"?t.motionDurationFast:t.motionDurationMid),{[`
        ${n}-enter,
        ${n}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${n}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]},$={adjustX:1,adjustY:1},P=[0,0],rt={left:{points:["cr","cl"],overflow:$,offset:[-4,0],targetOffset:P},right:{points:["cl","cr"],overflow:$,offset:[4,0],targetOffset:P},top:{points:["bc","tc"],overflow:$,offset:[0,-4],targetOffset:P},bottom:{points:["tc","bc"],overflow:$,offset:[0,4],targetOffset:P},topLeft:{points:["bl","tl"],overflow:$,offset:[0,-4],targetOffset:P},leftTop:{points:["tr","tl"],overflow:$,offset:[-4,0],targetOffset:P},topRight:{points:["br","tr"],overflow:$,offset:[0,-4],targetOffset:P},rightTop:{points:["tl","tr"],overflow:$,offset:[4,0],targetOffset:P},bottomRight:{points:["tr","br"],overflow:$,offset:[0,4],targetOffset:P},rightBottom:{points:["bl","br"],overflow:$,offset:[4,0],targetOffset:P},bottomLeft:{points:["tl","bl"],overflow:$,offset:[0,4],targetOffset:P},leftBottom:{points:["br","bl"],overflow:$,offset:[-4,0],targetOffset:P}},ee={prefixCls:String,id:String,overlayInnerStyle:_.any},oe=Z({compatConfig:{MODE:3},name:"TooltipContent",props:ee,setup(t,o){let{slots:e}=o;return()=>{var n;return I("div",{class:`${t.prefixCls}-inner`,id:t.id,role:"tooltip",style:t.overlayInnerStyle},[(n=e.overlay)===null||n===void 0?void 0:n.call(e)])}}});var ne=globalThis&&globalThis.__rest||function(t,o){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(e[n[a]]=t[n[a]]);return e};function Q(){}const re=Z({compatConfig:{MODE:3},name:"Tooltip",inheritAttrs:!1,props:{trigger:_.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:_.string.def("right"),transitionName:String,animation:_.any,afterVisibleChange:_.func.def(()=>{}),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:_.string.def("rc-tooltip"),mouseEnterDelay:_.number.def(.1),mouseLeaveDelay:_.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:_.object.def(()=>({})),arrowContent:_.any.def(null),tipId:String,builtinPlacements:_.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function,arrow:{type:Boolean,default:!0}},setup(t,o){let{slots:e,attrs:n,expose:a}=o;const i=K(),l=()=>{const{prefixCls:f,tipId:u,overlayInnerStyle:g}=t;return[t.arrow?I("div",{class:`${f}-arrow`,key:"arrow"},[gt(e,t,"arrowContent")]):null,I(oe,{key:"content",prefixCls:f,id:u,overlayInnerStyle:g},{overlay:e.overlay})]};a({getPopupDomNode:()=>i.value.getPopupDomNode(),triggerDOM:i,forcePopupAlign:()=>{var f;return(f=i.value)===null||f===void 0?void 0:f.forcePopupAlign()}});const m=K(!1),y=K(!1);return dt(()=>{const{destroyTooltipOnHide:f}=t;if(typeof f=="boolean")m.value=f;else if(f&&typeof f=="object"){const{keepParent:u}=f;m.value=u===!0,y.value=u===!1}}),()=>{const{overlayClassName:f,trigger:u,mouseEnterDelay:g,mouseLeaveDelay:w,overlayStyle:h,prefixCls:O,afterVisibleChange:N,transitionName:j,animation:S,placement:A,align:M,destroyTooltipOnHide:H,defaultVisible:k}=t,E=ne(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"]),z=s({},E);t.visible!==void 0&&(z.popupVisible=t.visible);const F=s(s(s({popupClassName:f,prefixCls:O,action:u,builtinPlacements:rt,popupPlacement:A,popupAlign:M,afterPopupVisibleChange:N,popupTransitionName:j,popupAnimation:S,defaultPopupVisible:k,destroyPopupOnHide:m.value,autoDestroy:y.value,mouseLeaveDelay:w,popupStyle:h,mouseEnterDelay:g},z),n),{onPopupVisibleChange:t.onVisibleChange||Q,onPopupAlign:t.onPopupAlign||Q,ref:i,arrow:!!t.arrow,popup:l()});return I(Tt,F,{default:e.default})}}}),ae=()=>({trigger:[String,Array],open:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:R(),overlayInnerStyle:R(),overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},arrow:{type:[Boolean,Object],default:!0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:R(),builtinPlacements:R(),children:Array,onVisibleChange:Function,"onUpdate:visible":Function,onOpenChange:Function,"onUpdate:open":Function}),ie={adjustX:1,adjustY:1},tt={adjustX:0,adjustY:0},se=[0,0];function et(t){return typeof t=="boolean"?t?ie:tt:s(s({},tt),t)}function le(t){const{arrowWidth:o=4,horizontalArrowShift:e=16,verticalArrowShift:n=8,autoAdjustOverflow:a,arrowPointAtCenter:i}=t,l={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(e+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(n+o)]},topRight:{points:["br","tc"],offset:[e+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(n+o)]},bottomRight:{points:["tr","bc"],offset:[e+o,4]},rightBottom:{points:["bl","cr"],offset:[4,n+o]},bottomLeft:{points:["tl","bc"],offset:[-(e+o),4]},leftBottom:{points:["br","cl"],offset:[-4,n+o]}};return Object.keys(l).forEach(p=>{l[p]=i?s(s({},l[p]),{overflow:et(a),targetOffset:se}):s(s({},rt[p]),{overflow:et(a)}),l[p].ignoreShake=!0}),l}const ce=V.map(t=>`${t}-inverse`),pe=["success","processing","error","default","warning"];function fe(t){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[...ce,...V].includes(t):V.includes(t)}function xe(t){return pe.includes(t)}function ue(t,o){const e=fe(o),n=X({[`${t}-${o}`]:o&&e}),a={},i={};return o&&!e&&(a.background=o,i["--antd-arrow-background-color"]=o),{className:n,overlayStyle:a,arrowStyle:i}}function L(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t.map(e=>`${o}${e}`).join(",")}const at=8;function me(t){const o=at,{sizePopupArrow:e,contentRadius:n,borderRadiusOuter:a,limitVerticalRadius:i}=t,l=e/2-Math.ceil(a*(Math.sqrt(2)-1)),p=(n>12?n+2:12)-l,m=i?o-l:p;return{dropdownArrowOffset:p,dropdownArrowOffsetVertical:m}}function de(t,o){const{componentCls:e,sizePopupArrow:n,marginXXS:a,borderRadiusXS:i,borderRadiusOuter:l,boxShadowPopoverArrow:p}=t,{colorBg:m,showArrowCls:y,contentRadius:f=t.borderRadiusLG,limitVerticalRadius:u}=o,{dropdownArrowOffsetVertical:g,dropdownArrowOffset:w}=me({sizePopupArrow:n,contentRadius:f,borderRadiusOuter:l,limitVerticalRadius:u}),h=n/2+a;return{[e]:{[`${e}-arrow`]:[s(s({position:"absolute",zIndex:1,display:"block"},It(n,i,l,m,p)),{"&:before":{background:m}})],[[`&-placement-top ${e}-arrow`,`&-placement-topLeft ${e}-arrow`,`&-placement-topRight ${e}-arrow`].join(",")]:{bottom:0,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${e}-arrow`]:{left:{_skip_check_:!0,value:w}},[`&-placement-topRight ${e}-arrow`]:{right:{_skip_check_:!0,value:w}},[[`&-placement-bottom ${e}-arrow`,`&-placement-bottomLeft ${e}-arrow`,`&-placement-bottomRight ${e}-arrow`].join(",")]:{top:0,transform:"translateY(-100%)"},[`&-placement-bottom ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${e}-arrow`]:{left:{_skip_check_:!0,value:w}},[`&-placement-bottomRight ${e}-arrow`]:{right:{_skip_check_:!0,value:w}},[[`&-placement-left ${e}-arrow`,`&-placement-leftTop ${e}-arrow`,`&-placement-leftBottom ${e}-arrow`].join(",")]:{right:{_skip_check_:!0,value:0},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${e}-arrow`]:{top:g},[`&-placement-leftBottom ${e}-arrow`]:{bottom:g},[[`&-placement-right ${e}-arrow`,`&-placement-rightTop ${e}-arrow`,`&-placement-rightBottom ${e}-arrow`].join(",")]:{left:{_skip_check_:!0,value:0},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${e}-arrow`]:{top:g},[`&-placement-rightBottom ${e}-arrow`]:{bottom:g},[L(["&-placement-topLeft","&-placement-top","&-placement-topRight"].map(O=>O+=":not(&-arrow-hidden)"),y)]:{paddingBottom:h},[L(["&-placement-bottomLeft","&-placement-bottom","&-placement-bottomRight"].map(O=>O+=":not(&-arrow-hidden)"),y)]:{paddingTop:h},[L(["&-placement-leftTop","&-placement-left","&-placement-leftBottom"].map(O=>O+=":not(&-arrow-hidden)"),y)]:{paddingRight:{_skip_check_:!0,value:h}},[L(["&-placement-rightTop","&-placement-right","&-placement-rightBottom"].map(O=>O+=":not(&-arrow-hidden)"),y)]:{paddingLeft:{_skip_check_:!0,value:h}}}}}const ge=t=>{const{componentCls:o,tooltipMaxWidth:e,tooltipColor:n,tooltipBg:a,tooltipBorderRadius:i,zIndexPopup:l,controlHeight:p,boxShadowSecondary:m,paddingSM:y,paddingXS:f,tooltipRadiusOuter:u}=t;return[{[o]:s(s(s(s({},vt(t)),{position:"absolute",zIndex:l,display:"block","&":[{width:"max-content"},{width:"intrinsic"}],maxWidth:e,visibility:"visible","&-hidden":{display:"none"},"--antd-arrow-background-color":a,[`${o}-inner`]:{minWidth:p,minHeight:p,padding:`${y/2}px ${f}px`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:i,boxShadow:m},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${o}-inner`]:{borderRadius:Math.min(i,at)}},[`${o}-content`]:{position:"relative"}}),jt(t,(g,w)=>{let{darkColor:h}=w;return{[`&${o}-${g}`]:{[`${o}-inner`]:{backgroundColor:h},[`${o}-arrow`]:{"--antd-arrow-background-color":h}}}})),{"&-rtl":{direction:"rtl"}})},de(ot(t,{borderRadiusOuter:u}),{colorBg:"var(--antd-arrow-background-color)",showArrowCls:"",contentRadius:i,limitVerticalRadius:!0}),{[`${o}-pure`]:{position:"relative",maxWidth:"none"}}]},be=(t,o)=>bt("Tooltip",n=>{if((o==null?void 0:o.value)===!1)return[];const{borderRadius:a,colorTextLightSolid:i,colorBgDefault:l,borderRadiusOuter:p}=n,m=ot(n,{tooltipMaxWidth:250,tooltipColor:i,tooltipBorderRadius:a,tooltipBg:l,tooltipRadiusOuter:p>4?4:p});return[ge(m),te(n,"zoom-big-fast")]},n=>{let{zIndexPopupBase:a,colorBgSpotlight:i}=n;return{zIndexPopup:a+70,colorBgDefault:i}})(t),ve=(t,o)=>{const e={},n=s({},t);return o.forEach(a=>{t&&a in t&&(e[a]=t[a],delete n[a])}),{picked:e,omitted:n}},ye=()=>s(s({},ae()),{title:_.any}),he=Z({compatConfig:{MODE:3},name:"ATooltip",inheritAttrs:!1,props:yt(ye(),{trigger:"hover",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:Object,setup(t,o){let{slots:e,emit:n,attrs:a,expose:i}=o;const{prefixCls:l,getPopupContainer:p,direction:m,rootPrefixCls:y}=ht("tooltip",t),f=D(()=>{var r;return(r=t.open)!==null&&r!==void 0?r:t.visible}),u=Y(At([t.open,t.visible])),g=Y();let w;wt(f,r=>{U.cancel(w),w=U(()=>{u.value=!!r})});const h=()=>{var r;const c=(r=t.title)!==null&&r!==void 0?r:e.title;return!c&&c!==0},O=r=>{const c=h();f.value===void 0&&(u.value=c?!1:r),c||(n("update:visible",r),n("visibleChange",r),n("update:open",r),n("openChange",r))};i({getPopupDomNode:()=>g.value.getPopupDomNode(),open:u,forcePopupAlign:()=>{var r;return(r=g.value)===null||r===void 0?void 0:r.forcePopupAlign()}});const j=D(()=>{var r;const{builtinPlacements:c,autoAdjustOverflow:T,arrow:b,arrowPointAtCenter:C}=t;let d=C;return typeof b=="object"&&(d=(r=b.pointAtCenter)!==null&&r!==void 0?r:C),c||le({arrowPointAtCenter:d,autoAdjustOverflow:T})}),S=r=>r||r==="",A=r=>{const c=r.type;if(typeof c=="object"&&r.props&&((c.__ANT_BUTTON===!0||c==="button")&&S(r.props.disabled)||c.__ANT_SWITCH===!0&&(S(r.props.disabled)||S(r.props.loading))||c.__ANT_RADIO===!0&&S(r.props.disabled))){const{picked:T,omitted:b}=ve(_t(r),["position","left","right","top","bottom","float","display","zIndex"]),C=s(s({display:"inline-block"},T),{cursor:"not-allowed",lineHeight:1,width:r.props&&r.props.block?"100%":void 0}),d=s(s({},b),{pointerEvents:"none"}),v=q(r,{style:d},!0);return I("span",{style:C,class:`${l.value}-disabled-compatible-wrapper`},[v])}return r},M=()=>{var r,c;return(r=t.title)!==null&&r!==void 0?r:(c=e.title)===null||c===void 0?void 0:c.call(e)},H=(r,c)=>{const T=j.value,b=Object.keys(T).find(C=>{var d,v;return T[C].points[0]===((d=c.points)===null||d===void 0?void 0:d[0])&&T[C].points[1]===((v=c.points)===null||v===void 0?void 0:v[1])});if(b){const C=r.getBoundingClientRect(),d={top:"50%",left:"50%"};b.indexOf("top")>=0||b.indexOf("Bottom")>=0?d.top=`${C.height-c.offset[1]}px`:(b.indexOf("Top")>=0||b.indexOf("bottom")>=0)&&(d.top=`${-c.offset[1]}px`),b.indexOf("left")>=0||b.indexOf("Right")>=0?d.left=`${C.width-c.offset[0]}px`:(b.indexOf("right")>=0||b.indexOf("Left")>=0)&&(d.left=`${-c.offset[0]}px`),r.style.transformOrigin=`${d.left} ${d.top}`}},k=D(()=>ue(l.value,t.color)),E=D(()=>a["data-popover-inject"]),[z,F]=be(l,D(()=>!E.value));return()=>{var r,c;const{openClassName:T,overlayClassName:b,overlayStyle:C,overlayInnerStyle:d}=t;let v=(c=Ot((r=e.default)===null||r===void 0?void 0:r.call(e)))!==null&&c!==void 0?c:null;v=v.length===1?v[0]:v;let W=u.value;if(f.value===void 0&&h()&&(W=!1),!v)return null;const B=A(Ct(v)&&!$t(v)?v:I("span",null,[v])),it=X({[T||`${l.value}-open`]:!0,[B.props&&B.props.class]:B.props&&B.props.class}),st=X(b,{[`${l.value}-rtl`]:m.value==="rtl"},k.value.className,F.value),lt=s(s({},k.value.overlayStyle),d),ct=k.value.arrowStyle,pt=s(s(s({},a),t),{prefixCls:l.value,arrow:!!t.arrow,getPopupContainer:p==null?void 0:p.value,builtinPlacements:j.value,visible:W,ref:g,overlayClassName:st,overlayStyle:s(s({},ct),C),overlayInnerStyle:lt,onVisibleChange:O,onPopupAlign:H,transitionName:Pt(y.value,"zoom-big-fast",t.transitionName)});return z(I(re,pt,{default:()=>[u.value?q(B,{class:it}):B],arrowContent:()=>I("span",{class:`${l.value}-arrow-content`},null),overlay:M}))}}}),Se=xt(he);export{Se as T,te as a,Bt as b,_e as c,$e as d,me as e,le as f,Rt as g,jt as h,Pe as i,fe as j,xe as k,It as r,Kt as z};
