import{P as H,e as me,h as Ot,b as c,g as Ie,u as Le,a as St,B as wt,q as Be,c as ye,_ as D,R as xt,w as At,A as _t,d as ve,i as _e,p as lt,S as Et,T as qe}from"./default-ceed22dd.js";import{P as Dt,s as he}from"./shallowequal-e0a67d6e.js";import{d as X,b as y,r as w,K as Ae,a as it,w as J,c as v,C as Se,H as ge,L as Re,I as Ee,O as rt,V as Tt,i as Nt,U as Rt,F as ke,u as we,a4 as jt}from"./index-1bae46c1.js";import{c as Ke,E as je,F as ut,x as Ft,y as kt,b as Vt}from"./collapseMotion-7d39dd45.js";import{c as $t,a as Lt}from"./_arrayIncludesWith-5d57d4a7.js";import{T as st,O as Me,K as Bt}from"./Overflow-09cb4452.js";import{f as zt}from"./firstNotUndefined-76ad81d5.js";import{i as Ht,w as Pe}from"./raf-9e916306.js";var Y={adjustX:1,adjustY:1},q=[0,0],ct={left:{points:["cr","cl"],overflow:Y,offset:[-4,0],targetOffset:q},right:{points:["cl","cr"],overflow:Y,offset:[4,0],targetOffset:q},top:{points:["bc","tc"],overflow:Y,offset:[0,-4],targetOffset:q},bottom:{points:["tc","bc"],overflow:Y,offset:[0,4],targetOffset:q},topLeft:{points:["bl","tl"],overflow:Y,offset:[0,-4],targetOffset:q},leftTop:{points:["tr","tl"],overflow:Y,offset:[-4,0],targetOffset:q},topRight:{points:["br","tr"],overflow:Y,offset:[0,-4],targetOffset:q},rightTop:{points:["tl","tr"],overflow:Y,offset:[4,0],targetOffset:q},bottomRight:{points:["tr","br"],overflow:Y,offset:[0,4],targetOffset:q},rightBottom:{points:["bl","br"],overflow:Y,offset:[4,0],targetOffset:q},bottomLeft:{points:["tl","bl"],overflow:Y,offset:[0,4],targetOffset:q},leftBottom:{points:["br","bl"],overflow:Y,offset:[-4,0],targetOffset:q}},Ut={prefixCls:String,id:String,overlayInnerStyle:H.any};const Wt=X({compatConfig:{MODE:3},name:"Content",props:Ut,slots:["overlay"],setup:function(e,o){var t=o.slots;return function(){var a;return y("div",{class:"".concat(e.prefixCls,"-inner"),id:e.id,role:"tooltip",style:e.overlayInnerStyle},[(a=t.overlay)===null||a===void 0?void 0:a.call(t)])}}});var Gt=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"];function Xe(){}const Yt=X({compatConfig:{MODE:3},name:"Tooltip",inheritAttrs:!1,props:{trigger:H.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:H.string.def("right"),transitionName:String,animation:H.any,afterVisibleChange:H.func.def(function(){}),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:H.string.def("rc-tooltip"),mouseEnterDelay:H.number.def(.1),mouseLeaveDelay:H.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:H.object.def(function(){return{}}),arrowContent:H.any.def(null),tipId:String,builtinPlacements:H.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function},slots:["arrowContent","overlay"],setup:function(e,o){var t=o.slots,a=o.attrs,r=o.expose,u=w(),g=function(){var h=e.prefixCls,P=e.tipId,A=e.overlayInnerStyle;return[y("div",{class:"".concat(h,"-arrow"),key:"arrow"},[Ie(t,e,"arrowContent")]),y(Wt,{key:"content",prefixCls:h,id:P,overlayInnerStyle:A},{overlay:t.overlay})]},m=function(){return u.value.getPopupDomNode()};r({getPopupDomNode:m,triggerDOM:u,forcePopupAlign:function(){var h;return(h=u.value)===null||h===void 0?void 0:h.forcePopupAlign()}});var M=w(!1),s=w(!1);return Ae(function(){var d=e.destroyTooltipOnHide;if(typeof d=="boolean")M.value=d;else if(d&&me(d)==="object"){var h=d.keepParent;M.value=h===!0,s.value=h===!1}}),function(){var d=e.overlayClassName,h=e.trigger,P=e.mouseEnterDelay,A=e.mouseLeaveDelay,S=e.overlayStyle,R=e.prefixCls,j=e.afterVisibleChange,Z=e.transitionName,E=e.animation,x=e.placement,K=e.align;e.destroyTooltipOnHide;var f=e.defaultVisible,p=Ot(e,Gt),I=c({},p);e.visible!==void 0&&(I.popupVisible=e.visible);var b=c(c(c({popupClassName:d,prefixCls:R,action:h,builtinPlacements:ct,popupPlacement:x,popupAlign:K,afterPopupVisibleChange:j,popupTransitionName:Z,popupAnimation:E,defaultPopupVisible:f,destroyPopupOnHide:M.value,autoDestroy:s.value,mouseLeaveDelay:A,popupStyle:S,mouseEnterDelay:P},I),a),{},{onPopupVisibleChange:e.onVisibleChange||Xe,onPopupAlign:e.onPopupAlign||Xe,ref:u,popup:g()});return y(st,b,{default:t.default})}}}),qt=function(){return{trigger:[String,Array],visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:{type:Object,default:void 0},overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:{type:Object,default:void 0},builtinPlacements:{type:Object,default:void 0},children:Array,onVisibleChange:Function,"onUpdate:visible":Function}};var Xt={adjustX:1,adjustY:1},Ze={adjustX:0,adjustY:0},Zt=[0,0];function Je(l){return typeof l=="boolean"?l?Xt:Ze:c(c({},Ze),l)}function Jt(l){var e=l.arrowWidth,o=e===void 0?4:e,t=l.horizontalArrowShift,a=t===void 0?16:t,r=l.verticalArrowShift,u=r===void 0?8:r,g=l.autoAdjustOverflow,m=l.arrowPointAtCenter,M={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(a+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(u+o)]},topRight:{points:["br","tc"],offset:[a+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(u+o)]},bottomRight:{points:["tr","bc"],offset:[a+o,4]},rightBottom:{points:["bl","cr"],offset:[4,u+o]},bottomLeft:{points:["tl","bc"],offset:[-(a+o),4]},leftBottom:{points:["br","cl"],offset:[-4,u+o]}};return Object.keys(M).forEach(function(s){M[s]=m?c(c({},M[s]),{},{overflow:Je(g),targetOffset:Zt}):c(c({},ct[s]),{},{overflow:Je(g)}),M[s].ignoreShake=!0}),M}var Qt=function(e,o){var t={},a=c({},e);return o.forEach(function(r){e&&r in e&&(t[r]=e[r],delete a[r])}),{picked:t,omitted:a}},Qe=new RegExp("^(".concat(Dt.join("|"),")(-inverse)?$")),en=function(){return c(c({},qt()),{},{title:H.any})};const tn=X({compatConfig:{MODE:3},name:"ATooltip",inheritAttrs:!1,props:Ht(en(),{trigger:"hover",transitionName:"zoom-big-fast",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:["title"],setup:function(e,o){var t=o.slots,a=o.emit,r=o.attrs,u=o.expose,g=Le("tooltip",e),m=g.prefixCls,M=g.getPopupContainer,s=w(zt([e.visible,e.defaultVisible])),d=w();it(function(){St(e.defaultVisible===void 0,"Tooltip","'defaultVisible' is deprecated, please use 'v-model:visible'")});var h;J(function(){return e.visible},function(K){Pe.cancel(h),h=Pe(function(){s.value=!!K})});var P=function(){var f,p=(f=e.title)!==null&&f!==void 0?f:t.title;return!p&&p!==0},A=function(f){var p=P();e.visible===void 0&&(s.value=p?!1:f),p||(a("update:visible",f),a("visibleChange",f))},S=function(){return d.value.getPopupDomNode()};u({getPopupDomNode:S,visible:s,forcePopupAlign:function(){var f;return(f=d.value)===null||f===void 0?void 0:f.forcePopupAlign()}});var R=v(function(){var K=e.builtinPlacements,f=e.arrowPointAtCenter,p=e.autoAdjustOverflow;return K||Jt({arrowPointAtCenter:f,autoAdjustOverflow:p})}),j=function(f){return f||f===""},Z=function(f){var p=f.type;if(me(p)==="object"&&f.props&&((p.__ANT_BUTTON===!0||p==="button")&&j(f.props.disabled)||p.__ANT_SWITCH===!0&&(j(f.props.disabled)||j(f.props.loading)))){var I=Qt(xt(f),["position","left","right","top","bottom","float","display","zIndex"]),b=I.picked,F=I.omitted,O=c(c({display:"inline-block"},b),{},{cursor:"not-allowed",lineHeight:1,width:f.props&&f.props.block?"100%":null}),z=c(c({},F),{},{pointerEvents:"none"}),k=Ke(f,{style:z},!0);return y("span",{style:O,class:"".concat(m.value,"-disabled-compatible-wrapper")},[k])}return f},E=function(){var f,p;return(f=e.title)!==null&&f!==void 0?f:(p=t.title)===null||p===void 0?void 0:p.call(t)},x=function(f,p){var I=R.value,b=Object.keys(I).filter(function(z){return I[z].points[0]===p.points[0]&&I[z].points[1]===p.points[1]})[0];if(b){var F=f.getBoundingClientRect(),O={top:"50%",left:"50%"};b.indexOf("top")>=0||b.indexOf("Bottom")>=0?O.top="".concat(F.height-p.offset[1],"px"):(b.indexOf("Top")>=0||b.indexOf("bottom")>=0)&&(O.top="".concat(-p.offset[1],"px")),b.indexOf("left")>=0||b.indexOf("Right")>=0?O.left="".concat(F.width-p.offset[0],"px"):(b.indexOf("right")>=0||b.indexOf("Left")>=0)&&(O.left="".concat(-p.offset[0],"px")),f.style.transformOrigin="".concat(O.left," ").concat(O.top)}};return function(){var K,f,p,I=e.openClassName,b=e.color,F=e.overlayClassName,O=(K=wt((f=t.default)===null||f===void 0?void 0:f.call(t)))!==null&&K!==void 0?K:null;O=O.length===1?O[0]:O;var z=s.value;if(e.visible===void 0&&P()&&(z=!1),!O)return null;var k=Z(Be(O)?O:y("span",null,[O])),ee=ye((p={},D(p,I||"".concat(m.value,"-open"),!0),D(p,k.props&&k.props.class,k.props&&k.props.class),p)),ne=ye(F,D({},"".concat(m.value,"-").concat(b),b&&Qe.test(b))),te,ae;b&&!Qe.test(b)&&(te={backgroundColor:b},ae={backgroundColor:b});var re=c(c(c({},r),e),{},{prefixCls:m.value,getPopupContainer:M.value,builtinPlacements:R.value,visible:z,ref:d,overlayClassName:ne,overlayInnerStyle:te,onVisibleChange:A,onPopupAlign:x});return y(Yt,re,{default:function(){return[s.value?Ke(k,{class:ee}):k]},arrowContent:function(){return y("span",{class:"".concat(m.value,"-arrow-content"),style:ae},null)},overlay:E})}}}),nn=At(tn);var an={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const on=an;function et(l){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable}))),t.forEach(function(a){ln(l,a,o[a])})}return l}function ln(l,e,o){return e in l?Object.defineProperty(l,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[e]=o,l}var ze=function(e,o){var t=et({},e,o.attrs);return y(_t,et({},t,{icon:on}),null)};ze.displayName="EllipsisOutlined";ze.inheritAttrs=!1;const rn=ze;var ft=Symbol("menuContextKey"),vt=function(e){Se(ft,e)},ie=function(){return ge(ft)},dt=Symbol("ForceRenderKey"),un=function(e){Se(dt,e)},pt=function(){return ge(dt,!1)},mt=Symbol("menuFirstLevelContextKey"),yt=function(e){Se(mt,e)},sn=function(){return ge(mt,!0)},De=X({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,o){var t=o.slots,a=ie(),r=c({},a);return e.mode!==void 0&&(r.mode=Re(e,"mode")),e.isRootMenu!==void 0&&(r.isRootMenu=Re(e,"isRootMenu")),e.overflowDisabled!==void 0&&(r.overflowDisabled=Re(e,"overflowDisabled")),vt(r),function(){var u;return(u=t.default)===null||u===void 0?void 0:u.call(t)}}});const cn=vt;function fn(){}var vn=1/0,dn=je&&1/ut(new je([,-0]))[1]==vn?function(l){return new je(l)}:fn;const pn=dn;var mn=200;function yn(l,e,o){var t=-1,a=$t,r=l.length,u=!0,g=[],m=g;if(o)u=!1,a=Lt;else if(r>=mn){var M=e?null:pn(l);if(M)return ut(M);u=!1,a=kt,m=new Ft}else m=e?[]:g;e:for(;++t<r;){var s=l[t],d=e?e(s):s;if(s=o||s!==0?s:0,u&&d===d){for(var h=m.length;h--;)if(m[h]===d)continue e;e&&m.push(d),g.push(s)}else a(m,d,o)||(m!==g&&m.push(d),g.push(s))}return g}function Fe(l){return l&&l.length?yn(l):[]}var gn=Symbol("siderCollapsed"),xe="$$__vc-menu-more__key",gt=Symbol("KeyPathContext"),He=function(){return ge(gt,{parentEventKeys:v(function(){return[]}),parentKeys:v(function(){return[]}),parentInfo:{}})},bn=function(e,o,t){var a=He(),r=a.parentEventKeys,u=a.parentKeys,g=v(function(){return[].concat(ve(r.value),[e])}),m=v(function(){return[].concat(ve(u.value),[o])});return Se(gt,{parentEventKeys:g,parentKeys:m,parentInfo:t}),m},bt=Symbol("measure"),tt=X({compatConfig:{MODE:3},setup:function(e,o){var t=o.slots;return Se(bt,!0),function(){var a;return(a=t.default)===null||a===void 0?void 0:a.call(t)}}}),Ue=function(){return ge(bt,!1)};const Cn=bn;function Ct(l){var e=ie(),o=e.mode,t=e.rtl,a=e.inlineIndent;return v(function(){return o.value!=="inline"?null:t.value?{paddingRight:"".concat(l.value*a.value,"px")}:{paddingLeft:"".concat(l.value*a.value,"px")}})}var hn=0,Mn=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:H.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const Te=X({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:Mn(),slots:["icon","title"],setup:function(e,o){var t=o.slots,a=o.emit,r=o.attrs,u=rt(),g=Ue(),m=me(u.vnode.key)==="symbol"?String(u.vnode.key):u.vnode.key;_e(me(u.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(m),'"` not support Symbol type'));var M="menu_item_".concat(++hn,"_$$_").concat(m),s=He(),d=s.parentEventKeys,h=s.parentKeys,P=ie(),A=P.prefixCls,S=P.activeKeys,R=P.disabled,j=P.changeActiveKeys,Z=P.rtl,E=P.inlineCollapsed,x=P.siderCollapsed,K=P.onItemClick,f=P.selectedKeys,p=P.registerMenuInfo,I=P.unRegisterMenuInfo,b=sn(),F=w(!1),O=v(function(){return[].concat(ve(h.value),[m])}),z={eventKey:M,key:m,parentEventKeys:d,parentKeys:h,isLeaf:!0};p(M,z),Ee(function(){I(M)}),J(S,function(){F.value=!!S.value.find(function(i){return i===m})},{immediate:!0});var k=v(function(){return R.value||e.disabled}),ee=v(function(){return f.value.includes(m)}),ne=v(function(){var i,n="".concat(A.value,"-item");return i={},D(i,"".concat(n),!0),D(i,"".concat(n,"-danger"),e.danger),D(i,"".concat(n,"-active"),F.value),D(i,"".concat(n,"-selected"),ee.value),D(i,"".concat(n,"-disabled"),k.value),i}),te=function(n){return{key:m,eventKey:M,keyPath:O.value,eventKeyPath:[].concat(ve(d.value),[M]),domEvent:n,item:c(c({},e),r)}},ae=function(n){if(!k.value){var C=te(n);a("click",n),K(C)}},re=function(n){k.value||(j(O.value),a("mouseenter",n))},Q=function(n){k.value||(j([]),a("mouseleave",n))},de=function(n){if(a("keydown",n),n.which===Bt.ENTER){var C=te(n);a("click",n),K(C)}},pe=function(n){j(O.value),a("focus",n)},U=function(n,C){var T=y("span",{class:"".concat(A.value,"-title-content")},[C]);return(!n||Be(C)&&C.type==="span")&&C&&E.value&&b&&typeof C=="string"?y("div",{class:"".concat(A.value,"-inline-collapsed-noicon")},[C.charAt(0)]):T},be=Ct(v(function(){return O.value.length}));return function(){var i,n,C,T;if(g)return null;var N=(i=e.title)!==null&&i!==void 0?i:(n=t.title)===null||n===void 0?void 0:n.call(t),V=lt((C=t.default)===null||C===void 0?void 0:C.call(t)),B=V.length,$=N;typeof N>"u"?$=b&&B?V:"":N===!1&&($="");var W={title:$};!x.value&&!E.value&&(W.title=null,W.visible=!1);var ue={};e.role==="option"&&(ue["aria-selected"]=ee.value);var se=Ie(t,e,"icon");return y(nn,c(c({},W),{},{placement:Z.value?"left":"right",overlayClassName:"".concat(A.value,"-inline-collapsed-tooltip")}),{default:function(){return[y(Me.Item,c(c(c({component:"li"},r),{},{id:e.id,style:c(c({},r.style||{}),be.value),class:[ne.value,(T={},D(T,"".concat(r.class),!!r.class),D(T,"".concat(A.value,"-item-only-child"),(se?B+1:B)===1),T)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":m,"aria-disabled":e.disabled},ue),{},{onMouseenter:re,onMouseleave:Q,onClick:ae,onKeydown:de,onFocus:pe,title:typeof N=="string"?N:void 0}),{default:function(){return[Ke(se,{class:"".concat(A.value,"-item-icon")},!1),U(se,V)]}})]}})}}});var le={adjustX:1,adjustY:1},Pn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},In={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},Kn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const nt=X({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,o){var t=o.slots,a=o.emit,r=w(!1),u=ie(),g=u.getPopupContainer,m=u.rtl,M=u.subMenuOpenDelay,s=u.subMenuCloseDelay,d=u.builtinPlacements,h=u.triggerSubMenuAction,P=u.isRootMenu,A=u.forceSubMenuRender,S=u.motion,R=u.defaultMotions,j=pt(),Z=v(function(){return m.value?c(c({},In),d.value):c(c({},Pn),d.value)}),E=v(function(){return Kn[e.mode]}),x=w();J(function(){return e.visible},function(p){Pe.cancel(x.value),x.value=Pe(function(){r.value=p})},{immediate:!0}),Ee(function(){Pe.cancel(x.value)});var K=function(I){a("visibleChange",I)},f=v(function(){var p,I,b=S.value||((p=R.value)===null||p===void 0?void 0:p[e.mode])||((I=R.value)===null||I===void 0?void 0:I.other),F=typeof b=="function"?b():b;return F?Et(F.name,{css:!0}):void 0});return function(){var p=e.prefixCls,I=e.popupClassName,b=e.mode,F=e.popupOffset,O=e.disabled;return y(st,{prefixCls:p,popupClassName:ye("".concat(p,"-popup"),D({},"".concat(p,"-rtl"),m.value),I),stretch:b==="horizontal"?"minWidth":null,getPopupContainer:P.value?g.value:function(z){return z.parentNode},builtinPlacements:Z.value,popupPlacement:E.value,popupVisible:r.value,popupAlign:F&&{offset:F},action:O?[]:[h.value],mouseEnterDelay:M.value,mouseLeaveDelay:s.value,onPopupVisibleChange:K,forceRender:j||A.value,popupAnimation:f.value},{popup:t.popup,default:t.default})}}});var ht=function(e,o){var t,a=o.slots,r=o.attrs,u=ie(),g=u.prefixCls,m=u.mode;return y("ul",c(c({},r),{},{class:ye(g.value,"".concat(g.value,"-sub"),"".concat(g.value,"-").concat(m.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(t=a.default)===null||t===void 0?void 0:t.call(a)])};ht.displayName="SubMenuList";const Mt=ht,On=X({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,o){var t=o.slots,a=v(function(){return"inline"}),r=ie(),u=r.motion,g=r.mode,m=r.defaultMotions,M=v(function(){return g.value===a.value}),s=w(!M.value),d=v(function(){return M.value?e.open:!1});J(g,function(){M.value&&(s.value=!1)},{flush:"post"});var h=v(function(){var P,A,S=u.value||((P=m.value)===null||P===void 0?void 0:P[a.value])||((A=m.value)===null||A===void 0?void 0:A.other),R=typeof S=="function"?S():S;return c(c({},R),{},{appear:e.keyPath.length<=1})});return function(){var P;return s.value?null:y(De,{mode:a.value},{default:function(){return[y(Tt,h.value,{default:function(){return[Nt(y(Mt,{id:e.id},{default:function(){return[(P=t.default)===null||P===void 0?void 0:P.call(t)]}}),[[Rt,d.value]])]}})]}})}}});var at=0,Sn=function(){return{icon:H.any,title:H.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const Oe=X({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:Sn(),slots:["icon","title","expandIcon"],setup:function(e,o){var t,a,r=o.slots,u=o.attrs,g=o.emit;yt(!1);var m=Ue(),M=rt(),s=me(M.vnode.key)==="symbol"?String(M.vnode.key):M.vnode.key;_e(me(M.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(s),'"` not support Symbol type'));var d=qe(s)?s:"sub_menu_".concat(++at,"_$$_not_set_key"),h=(t=e.eventKey)!==null&&t!==void 0?t:qe(s)?"sub_menu_".concat(++at,"_$$_").concat(s):d,P=He(),A=P.parentEventKeys,S=P.parentInfo,R=P.parentKeys,j=v(function(){return[].concat(ve(R.value),[d])}),Z=w([]),E={eventKey:h,key:d,parentEventKeys:A,childrenEventKeys:Z,parentKeys:R};(a=S.childrenEventKeys)===null||a===void 0||a.value.push(h),Ee(function(){if(S.childrenEventKeys){var L;S.childrenEventKeys.value=(L=S.childrenEventKeys)===null||L===void 0?void 0:L.value.filter(function(_){return _!=h})}}),Cn(h,d,E);var x=ie(),K=x.prefixCls,f=x.activeKeys,p=x.disabled,I=x.changeActiveKeys,b=x.mode,F=x.inlineCollapsed,O=x.antdMenuTheme,z=x.openKeys,k=x.overflowDisabled,ee=x.onOpenChange,ne=x.registerMenuInfo,te=x.unRegisterMenuInfo,ae=x.selectedSubMenuKeys,re=x.expandIcon,Q=s!=null,de=!m&&(pt()||!Q);un(de),(m&&Q||!m&&!Q||de)&&(ne(h,E),Ee(function(){te(h)}));var pe=v(function(){return"".concat(K.value,"-submenu")}),U=v(function(){return p.value||e.disabled}),be=w(),i=w(),n=v(function(){return z.value.includes(d)}),C=v(function(){return!k.value&&n.value}),T=v(function(){return ae.value.includes(d)}),N=w(!1);J(f,function(){N.value=!!f.value.find(function(L){return L===d})},{immediate:!0});var V=function(_){U.value||(g("titleClick",_,d),b.value==="inline"&&ee(d,!n.value))},B=function(_){U.value||(I(j.value),g("mouseenter",_))},$=function(_){U.value||(I([]),g("mouseleave",_))},W=Ct(v(function(){return j.value.length})),ue=function(_){b.value!=="inline"&&ee(d,_)},se=function(){I(j.value)},Ce=h&&"".concat(h,"-popup"),We=v(function(){return ye(K.value,"".concat(K.value,"-").concat(O.value),e.popupClassName)}),Pt=function(_,G){if(!G)return F.value&&!R.value.length&&_&&typeof _=="string"?y("div",{class:"".concat(K.value,"-inline-collapsed-noicon")},[_.charAt(0)]):y("span",{class:"".concat(K.value,"-title-content")},[_]);var oe=Be(_)&&_.type==="span";return y(ke,null,[Ke(G,{class:"".concat(K.value,"-item-icon")},!1),oe?_:y("span",{class:"".concat(K.value,"-title-content")},[_])])},Ne=v(function(){return b.value!=="inline"&&j.value.length>1?"vertical":b.value}),It=v(function(){return b.value==="horizontal"?"vertical":b.value}),Kt=v(function(){return Ne.value==="horizontal"?"vertical":Ne.value}),Ge=function(){var _=pe.value,G=Ie(r,e,"icon"),oe=e.expandIcon||r.expandIcon||re.value,ce=Pt(Ie(r,e,"title"),G);return y("div",{style:W.value,class:"".concat(_,"-title"),tabindex:U.value?null:-1,ref:be,title:typeof ce=="string"?ce:null,"data-menu-id":d,"aria-expanded":C.value,"aria-haspopup":!0,"aria-controls":Ce,"aria-disabled":U.value,onClick:V,onFocus:se},[ce,b.value!=="horizontal"&&oe?oe(c(c({},e),{},{isOpen:C.value})):y("i",{class:"".concat(_,"-arrow")},null)])};return function(){var L;if(m){var _;return Q?(_=r.default)===null||_===void 0?void 0:_.call(r):null}var G=pe.value,oe=function(){return null};return!k.value&&b.value!=="inline"?oe=function(){return y(nt,{mode:Ne.value,prefixCls:G,visible:!e.internalPopupClose&&C.value,popupClassName:We.value,popupOffset:e.popupOffset,disabled:U.value,onVisibleChange:ue},{default:function(){return[Ge()]},popup:function(){return y(De,{mode:Kt.value,isRootMenu:!1},{default:function(){return[y(Mt,{id:Ce,ref:i},{default:r.default})]}})}})}:oe=function(){return y(nt,null,{default:Ge})},y(De,{mode:It.value},{default:function(){return[y(Me.Item,c(c({component:"li"},u),{},{role:"none",class:ye(G,"".concat(G,"-").concat(b.value),u.class,(L={},D(L,"".concat(G,"-open"),C.value),D(L,"".concat(G,"-active"),N.value),D(L,"".concat(G,"-selected"),T.value),D(L,"".concat(G,"-disabled"),U.value),L)),onMouseenter:B,onMouseleave:$,"data-submenu-id":d}),{default:function(){return y(ke,null,[oe(),!k.value&&y(On,{id:Ce,open:C.value,keyPath:j.value},{default:r.default})])}})]}})}}});var wn=function(){return{id:String,prefixCls:String,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},ot=[];const fe=X({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:wn(),slots:["expandIcon","overflowedIndicator"],setup:function(e,o){var t=o.slots,a=o.emit,r=o.attrs,u=Le("menu",e),g=u.prefixCls,m=u.direction,M=u.getPrefixCls,s=w({}),d=ge(gn,w(void 0)),h=v(function(){return d.value!==void 0?d.value:e.inlineCollapsed}),P=w(!1);it(function(){P.value=!0}),Ae(function(){_e(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),_e(!(d.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var A=w([]),S=w([]),R=w({});J(s,function(){for(var i={},n=0,C=Object.values(s.value);n<C.length;n++){var T=C[n];i[T.key]=T}R.value=i},{flush:"post"}),Ae(function(){if(e.activeKey!==void 0){var i=[],n=e.activeKey?R.value[e.activeKey]:void 0;n&&e.activeKey!==void 0?i=Fe([].concat(we(n.parentKeys),e.activeKey)):i=[],he(A.value,i)||(A.value=i)}}),J(function(){return e.selectedKeys},function(i){i&&(S.value=i.slice())},{immediate:!0,deep:!0});var j=w([]);J([R,S],function(){var i=[];S.value.forEach(function(n){var C=R.value[n];C&&(i=i.concat(we(C.parentKeys)))}),i=Fe(i),he(j.value,i)||(j.value=i)},{immediate:!0});var Z=function(n){if(e.selectable){var C=n.key,T=S.value.includes(C),N;e.multiple?T?N=S.value.filter(function(B){return B!==C}):N=[].concat(ve(S.value),[C]):N=[C];var V=c(c({},n),{},{selectedKeys:N});he(N,S.value)||(e.selectedKeys===void 0&&(S.value=N),a("update:selectedKeys",N),T&&e.multiple?a("deselect",V):a("select",V)),I.value!=="inline"&&!e.multiple&&E.value.length&&O(ot)}},E=w([]);J(function(){return e.openKeys},function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:E.value;he(E.value,i)||(E.value=i.slice())},{immediate:!0,deep:!0});var x,K=function(n){clearTimeout(x),x=setTimeout(function(){e.activeKey===void 0&&(A.value=n),a("update:activeKey",n[n.length-1])})},f=v(function(){return!!e.disabled}),p=v(function(){return m.value==="rtl"}),I=w("vertical"),b=w(!1);Ae(function(){(e.mode==="inline"||e.mode==="vertical")&&h.value?(I.value="vertical",b.value=h.value):(I.value=e.mode,b.value=!1)});var F=v(function(){return I.value==="inline"}),O=function(n){E.value=n,a("update:openKeys",n),a("openChange",n)},z=w(E.value),k=w(!1);J(E,function(){F.value&&(z.value=E.value)},{immediate:!0}),J(F,function(){if(!k.value){k.value=!0;return}F.value?E.value=z.value:O(ot)},{immediate:!0});var ee=v(function(){var i;return i={},D(i,"".concat(g.value),!0),D(i,"".concat(g.value,"-root"),!0),D(i,"".concat(g.value,"-").concat(I.value),!0),D(i,"".concat(g.value,"-inline-collapsed"),b.value),D(i,"".concat(g.value,"-rtl"),p.value),D(i,"".concat(g.value,"-").concat(e.theme),!0),i}),ne=v(function(){return M()}),te=v(function(){return{horizontal:{name:"".concat(ne.value,"-slide-up")},inline:Vt,other:{name:"".concat(ne.value,"-zoom-big")}}});yt(!0);var ae=function i(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],C=[],T=s.value;return n.forEach(function(N){var V=T[N],B=V.key,$=V.childrenEventKeys;C.push.apply(C,[B].concat(ve(i(we($)))))}),C},re=function(n){a("click",n),Z(n)},Q=function(n,C){var T,N=((T=R.value[n])===null||T===void 0?void 0:T.childrenEventKeys)||[],V=E.value.filter(function($){return $!==n});if(C)V.push(n);else if(I.value!=="inline"){var B=ae(we(N));V=Fe(V.filter(function($){return!B.includes($)}))}he(E,V)||O(V)},de=function(n,C){s.value=c(c({},s.value),{},D({},n,C))},pe=function(n){delete s.value[n],s.value=c({},s.value)},U=w(0),be=v(function(){return e.expandIcon||t.expandIcon?function(i){var n=e.expandIcon||t.expandIcon;return n=typeof n=="function"?n(i):n,Ke(n,{class:"".concat(g.value,"-submenu-expand-icon")},!1)}:null});return cn({store:s,prefixCls:g,activeKeys:A,openKeys:E,selectedKeys:S,changeActiveKeys:K,disabled:f,rtl:p,mode:I,inlineIndent:v(function(){return e.inlineIndent}),subMenuCloseDelay:v(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:v(function(){return e.subMenuOpenDelay}),builtinPlacements:v(function(){return e.builtinPlacements}),triggerSubMenuAction:v(function(){return e.triggerSubMenuAction}),getPopupContainer:v(function(){return e.getPopupContainer}),inlineCollapsed:b,antdMenuTheme:v(function(){return e.theme}),siderCollapsed:d,defaultMotions:v(function(){return P.value?te.value:null}),motion:v(function(){return P.value?e.motion:null}),overflowDisabled:w(void 0),onOpenChange:Q,onItemClick:re,registerMenuInfo:de,unRegisterMenuInfo:pe,selectedSubMenuKeys:j,isRootMenu:w(!0),expandIcon:be,forceSubMenuRender:v(function(){return e.forceSubMenuRender})}),function(){var i,n,C=lt((i=t.default)===null||i===void 0?void 0:i.call(t)),T=U.value>=C.length-1||I.value!=="horizontal"||e.disabledOverflow,N=I.value!=="horizontal"||e.disabledOverflow?C:C.map(function(B,$){return y(De,{key:B.key,overflowDisabled:$>U.value},{default:function(){return B}})}),V=((n=t.overflowedIndicator)===null||n===void 0?void 0:n.call(t))||y(rn,null,null);return y(Me,c(c({},r),{},{onMousedown:e.onMousedown,prefixCls:"".concat(g.value,"-overflow"),component:"ul",itemComponent:Te,class:[ee.value,r.class],role:"menu",id:e.id,data:N,renderRawItem:function($){return $},renderRawRest:function($){var W=$.length,ue=W?C.slice(-W):null;return y(ke,null,[y(Oe,{eventKey:xe,key:xe,title:V,disabled:T,internalPopupClose:W===0},{default:function(){return ue}}),y(tt,null,{default:function(){return[y(Oe,{eventKey:xe,key:xe,title:V,disabled:T,internalPopupClose:W===0},{default:function(){return ue}})]}})])},maxCount:I.value!=="horizontal"||e.disabledOverflow?Me.INVALIDATE:Me.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function($){U.value=$}}),{default:function(){return[y(jt,{to:"body"},{default:function(){return[y("div",{style:{display:"none"},"aria-hidden":!0},[y(tt,null,{default:function(){return[N]}})])]}})]}})}}});var xn=function(){return{title:H.any}};const Ve=X({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:xn(),slots:["title"],setup:function(e,o){var t=o.slots,a=o.attrs,r=ie(),u=r.prefixCls,g=v(function(){return"".concat(u.value,"-item-group")}),m=Ue();return function(){var M,s;return m?(M=t.default)===null||M===void 0?void 0:M.call(t):y("li",c(c({},a),{},{onClick:function(h){return h.stopPropagation()},class:g.value}),[y("div",{title:typeof e.title=="string"?e.title:void 0,class:"".concat(g.value,"-title")},[Ie(t,e,"title")]),y("ul",{class:"".concat(g.value,"-list")},[(s=t.default)===null||s===void 0?void 0:s.call(t)])])}}});var An=function(){return{prefixCls:String,dashed:Boolean}};const $e=X({compatConfig:{MODE:3},name:"AMenuDivider",props:An(),setup:function(e){var o=Le("menu",e),t=o.prefixCls,a=v(function(){var r;return r={},D(r,"".concat(t.value,"-item-divider"),!0),D(r,"".concat(t.value,"-item-divider-dashed"),!!e.dashed),r});return function(){return y("li",{class:a.value},null)}}});fe.install=function(l){return l.component(fe.name,fe),l.component(Te.name,Te),l.component(Oe.name,Oe),l.component($e.name,$e),l.component(Ve.name,Ve),l};fe.Item=Te;fe.Divider=$e;fe.SubMenu=Oe;fe.ItemGroup=Ve;export{rn as E,fe as M,nn as T,Te as _,Jt as g};
