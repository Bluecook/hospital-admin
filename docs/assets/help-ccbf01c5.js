import{i as Y}from"./default-3f3c6e8c.js";import{a as X,_ as ee}from"./index-76e791a2.js";import"./index-71d46612.js";import{R as ae}from"./index-b0cb159f.js";import"./index-19c590c1.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-1f4164b7.js";import{h as te}from"./http-0f285a0d.js";import{a5 as A,ah as oe,d as q,l as S,B as ie,Z,A as le,K as T,L as c,g as r,I as $,ai as re,Q as se,a7 as ce,ae as de,a8 as ue,G as fe,P as ve,Y as pe,w as me,aj as _e,ak as he,z as ye,c as Ce,h as V,q as xe,o as L,a3 as be,s as Ae,t as ge}from"./index-aacfeba5.js";import{b as Ie,c as Q}from"./collapseMotion-37ab7c7d.js";import{f as Pe}from"./firstNotUndefined-76ad81d5.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";import"./styleChecker-1a28dd30.js";import"./debounce-c0a48cd9.js";import"./Overflow-1b3ca2ec.js";import"./KeyCode-9dc5d2f0.js";import"./FormItemContext-928bc429.js";import"./pickAttrs-322fce77.js";import"./useState-3c97a85d.js";var Ke=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:A.object,expandIconPosition:A.oneOf(oe("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},H=function(){return{openAnimation:A.object,prefixCls:String,header:A.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:A.any,panelKey:A.oneOfType([A.string,A.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function W(f){var e=f;if(!Array.isArray(e)){var s=se(e);e=s==="number"||s==="string"?[e]:[]}return e.map(function(t){return String(t)})}const N=q({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:Y(Ke(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:Ie("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,s){var t=s.attrs,m=s.slots,u=s.emit,v=S(W(Pe([e.activeKey,e.defaultActiveKey])));ie(function(){return e.activeKey},function(){v.value=W(e.activeKey)},{deep:!0});var _=Z("collapse",e),i=_.prefixCls,h=_.direction,y=le(function(){var o=e.expandIconPosition;return o!==void 0?o:h.value==="rtl"?"right":"left"}),C=function(a){var n=e.expandIcon,d=n===void 0?m.expandIcon:n,l=d?d(a):r(ae,{rotate:a.isActive?90:void 0},null);return r("div",null,[ue(Array.isArray(d)?l[0]:l)?Q(l,{class:"".concat(i.value,"-arrow")},!1):l])},I=function(a){e.activeKey===void 0&&(v.value=a);var n=e.accordion?a[0]:a;u("update:activeKey",n),u("change",n)},x=function(a){var n=v.value;if(e.accordion)n=n[0]===a?[]:[a];else{n=fe(n);var d=n.indexOf(a),l=d>-1;l?n.splice(d,1):n.push(a)}I(n)},E=function(a,n){var d,l,w;if(!de(a)){var R=v.value,K=e.accordion,j=e.destroyInactivePanel,D=e.collapsible,F=e.openAnimation,b=String((d=a.key)!==null&&d!==void 0?d:n),g=a.props||{},p=g.header,z=p===void 0?(l=a.children)===null||l===void 0||(w=l.header)===null||w===void 0?void 0:w.call(l):p,G=g.headerClass,P=g.collapsible,M=g.disabled,k=!1;K?k=R[0]===b:k=R.indexOf(b)>-1;var B=P??D;(M||M==="")&&(B="disabled");var J={key:b,panelKey:b,header:z,headerClass:G,isActive:k,prefixCls:i.value,destroyInactivePanel:j,openAnimation:F,accordion:K,onItemClick:B==="disabled"?null:x,expandIcon:C,collapsible:B};return Q(a,J)}},O=function(){var a;return ce((a=m.default)===null||a===void 0?void 0:a.call(m)).map(E)};return function(){var o,a=e.accordion,n=e.bordered,d=e.ghost,l=T((o={},c(o,i.value,!0),c(o,"".concat(i.value,"-borderless"),!n),c(o,"".concat(i.value,"-icon-position-").concat(y.value),!0),c(o,"".concat(i.value,"-rtl"),h.value==="rtl"),c(o,"".concat(i.value,"-ghost"),!!d),c(o,t.class,!!t.class),o));return r("div",$($({class:l},re(t)),{},{style:t.style,role:a?"tablist":null}),[O()])}}}),ke=q({compatConfig:{MODE:3},name:"PanelContent",props:H(),setup:function(e,s){var t=s.slots,m=S(!1);return ve(function(){(e.isActive||e.forceRender)&&(m.value=!0)}),function(){var u,v;if(!m.value)return null;var _=e.prefixCls,i=e.isActive,h=e.role;return r("div",{ref:S,class:T("".concat(_,"-content"),(u={},c(u,"".concat(_,"-content-active"),i),c(u,"".concat(_,"-content-inactive"),!i),u)),role:h},[r("div",{class:"".concat(_,"-content-box")},[(v=t.default)===null||v===void 0?void 0:v.call(t)])])}}}),U=q({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:Y(H(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,s){var t=s.slots,m=s.emit,u=s.attrs;pe(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var v=Z("collapse",e),_=v.prefixCls,i=function(){m("itemClick",e.panelKey)},h=function(C){(C.key==="Enter"||C.keyCode===13||C.which===13)&&i()};return function(){var y,C,I,x,E=e.header,O=E===void 0?(y=t.header)===null||y===void 0?void 0:y.call(t):E,o=e.headerClass,a=e.isActive,n=e.showArrow,d=e.destroyInactivePanel,l=e.accordion,w=e.forceRender,R=e.openAnimation,K=e.expandIcon,j=K===void 0?t.expandIcon:K,D=e.extra,F=D===void 0?(C=t.extra)===null||C===void 0?void 0:C.call(t):D,b=e.collapsible,g=b==="disabled",p=_.value,z=T("".concat(p,"-header"),(I={},c(I,o,o),c(I,"".concat(p,"-header-collapsible-only"),b==="header"),I)),G=T((x={},c(x,"".concat(p,"-item"),!0),c(x,"".concat(p,"-item-active"),a),c(x,"".concat(p,"-item-disabled"),g),c(x,"".concat(p,"-no-arrow"),!n),c(x,"".concat(u.class),!!u.class),x)),P=r("i",{class:"arrow"},null);n&&typeof j=="function"&&(P=j(e));var M=me(r(ke,{prefixCls:p,isActive:a,forceRender:w,role:l?"tabpanel":null},{default:t.default}),[[_e,a]]),k=$({appear:!1,css:!1},R);return r("div",$($({},u),{},{class:G}),[r("div",{class:z,onClick:function(){return b!=="header"&&i()},role:l?"tab":"button",tabindex:g?-1:0,"aria-expanded":a,onKeypress:h},[n&&P,b==="header"?r("span",{onClick:i,class:"".concat(p,"-header-text")},[O]):O,F&&r("div",{class:"".concat(p,"-extra")},[F])]),r(he,k,{default:function(){return[!d||a?M:null]}})])}}});N.Panel=U;N.install=function(f){return f.component(N.name,N),f.component(U.name,U),f};const Be={class:"m-5 bg-skin-main-color"},$e=q({__name:"help",setup(f){xe("title","");const e=S([]),s=S([]);return ye(()=>{te.get("/help").then(t=>{s.value=t.data.data})}),(t,m)=>{const u=ee,v=U,_=N,i=X;return L(),Ce("div",Be,[r(ne,{title:"还有问题",show:!0}),r(i,{bordered:!1,"data-source":s.value},{renderItem:V(({item:h})=>[r(_,{activeKey:e.value,"onUpdate:activeKey":m[0]||(m[0]=y=>e.value=y),accordion:"",bordered:!1,ghost:""},{default:V(()=>[(L(),be(v,{key:h.index,header:h.title,"show-arrow":!1},{default:V(()=>[r(u,null,{default:V(()=>[Ae(ge(h.content),1)]),_:2},1024)]),_:2},1032,["header"]))]),_:2},1032,["activeKey"])]),_:1},8,["data-source"])])}}});const Ye=we($e,[["__scopeId","data-v-d8394fe4"]]);export{Ye as default};