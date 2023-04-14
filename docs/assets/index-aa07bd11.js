import{u as G,P as x,h as se,p as ie,b as M,c as ve,_ as S,y as de,v as fe,e as ee,d as te}from"./default-ceed22dd.js";import{u as me,e as ge,P as ye,S as pe}from"./index-18875d6c.js";import{C as _e,R as he}from"./index-a22a0e85.js";import{c as Ce}from"./collapseMotion-7d39dd45.js";import{d as J,b as a,H as Se,r as D,C as xe,L as ae,c as $,w as Ie}from"./index-1bae46c1.js";import{i as be}from"./raf-9e916306.js";import{r as ne}from"./styleChecker-0aff1a87.js";var $e=function(){return{avatar:x.any,description:x.any,prefixCls:String,title:x.any}};const Pe=J({compatConfig:{MODE:3},name:"AListItemMeta",props:$e(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,w){var n=w.slots,I=G("list",e),o=I.prefixCls;return function(){var b,y,i,j,L,c,d="".concat(o.value,"-item-meta"),r=(b=e.title)!==null&&b!==void 0?b:(y=n.title)===null||y===void 0?void 0:y.call(n),u=(i=e.description)!==null&&i!==void 0?i:(j=n.description)===null||j===void 0?void 0:j.call(n),s=(L=e.avatar)!==null&&L!==void 0?L:(c=n.avatar)===null||c===void 0?void 0:c.call(n),p=a("div",{class:"".concat(o.value,"-item-meta-content")},[r&&a("h4",{class:"".concat(o.value,"-item-meta-title")},[r]),u&&a("div",{class:"".concat(o.value,"-item-meta-description")},[u])]);return a("div",{class:d},[s&&a("div",{class:"".concat(o.value,"-item-meta-avatar")},[s]),(r||u)&&p])}}});var re=Symbol("ListContextKey"),Me=["class"],je=function(){return{prefixCls:String,extra:x.any,actions:x.array,grid:Object,colStyle:{type:Object,default:void 0}}};const Le=J({compatConfig:{MODE:3},name:"AListItem",inheritAttrs:!1,Meta:Pe,props:je(),slots:["actions","extra"],setup:function(e,w){var n=w.slots,I=w.attrs,o=Se(re,{grid:D(),itemLayout:D()}),b=o.itemLayout,y=o.grid,i=G("list",e),j=i.prefixCls,L=function(){var r,u=((r=n.default)===null||r===void 0?void 0:r.call(n))||[],s;return u.forEach(function(p){de(p)&&!fe(p)&&(s=!0)}),s&&u.length>1},c=function(){var r,u,s=(r=e.extra)!==null&&r!==void 0?r:(u=n.extra)===null||u===void 0?void 0:u.call(n);return b.value==="vertical"?!!s:!L()};return function(){var d,r,u,s,p,R=I.class,H=se(I,Me),f=j.value,E=(d=e.extra)!==null&&d!==void 0?d:(r=n.extra)===null||r===void 0?void 0:r.call(n),k=(u=n.default)===null||u===void 0?void 0:u.call(n),m=(s=e.actions)!==null&&s!==void 0?s:ie((p=n.actions)===null||p===void 0?void 0:p.call(n));m=m&&!Array.isArray(m)?[m]:m;var _=m&&m.length>0&&a("ul",{class:"".concat(f,"-item-action"),key:"actions"},[m.map(function(z,B){return a("li",{key:"".concat(f,"-item-action-").concat(B)},[z,B!==m.length-1&&a("em",{class:"".concat(f,"-item-action-split")},null)])})]),T=y.value?"div":"li",K=a(T,M(M({},H),{},{class:ve("".concat(f,"-item"),S({},"".concat(f,"-item-no-flex"),!c()),R)}),{default:function(){return[b.value==="vertical"&&E?[a("div",{class:"".concat(f,"-item-main"),key:"content"},[k,_]),a("div",{class:"".concat(f,"-item-extra"),key:"extra"},[E])]:[k,_,Ce(E,{key:"extra"})]]}});return y.value?a(_e,{flex:1,style:e.colStyle},{default:function(){return[K]}}):K}}});var Ee=function(){return{bordered:{type:Boolean,default:void 0},dataSource:x.array,extra:x.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:x.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:x.any,footer:x.any,locale:{type:Object}}},P=J({compatConfig:{MODE:3},name:"AList",Item:Le,props:be(Ee(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,w){var n,I,o=w.slots;xe(re,{grid:ae(e,"grid"),itemLayout:ae(e,"itemLayout")});var b={current:1,total:0},y=G("list",e),i=y.prefixCls,j=y.direction,L=y.renderEmpty,c=$(function(){return e.pagination&&ee(e.pagination)==="object"?e.pagination:{}}),d=D((n=c.value.defaultCurrent)!==null&&n!==void 0?n:1),r=D((I=c.value.defaultPageSize)!==null&&I!==void 0?I:10);Ie(c,function(){"current"in c.value&&(d.value=c.value.current),"pageSize"in c.value&&(r.value=c.value.pageSize)});var u=[],s=function(l){return function(v,h){d.value=v,r.value=h,c.value[l]&&c.value[l](v,h)}},p=s("onChange"),R=s("onShowSizeChange"),H=function(l){var v;return a("div",{class:"".concat(i.value,"-empty-text")},[((v=e.locale)===null||v===void 0?void 0:v.emptyText)||l("List")])},f=$(function(){return typeof e.loading=="boolean"?{spinning:e.loading}:e.loading}),E=$(function(){return f.value&&f.value.spinning}),k=$(function(){var t="";switch(e.size){case"large":t="lg";break;case"small":t="sm";break}return t}),m=$(function(){var t;return t={},S(t,"".concat(i.value),!0),S(t,"".concat(i.value,"-vertical"),e.itemLayout==="vertical"),S(t,"".concat(i.value,"-").concat(k.value),k.value),S(t,"".concat(i.value,"-split"),e.split),S(t,"".concat(i.value,"-bordered"),e.bordered),S(t,"".concat(i.value,"-loading"),E.value),S(t,"".concat(i.value,"-grid"),!!e.grid),S(t,"".concat(i.value,"-rtl"),j.value==="rtl"),t}),_=$(function(){var t=M(M({},b),{},{total:e.dataSource.length,current:d.value,pageSize:r.value},e.pagination||{}),l=Math.ceil(t.total/t.pageSize);return t.current>l&&(t.current=l),t}),T=$(function(){var t=te(e.dataSource);return e.pagination&&e.dataSource.length>(_.value.current-1)*_.value.pageSize&&(t=te(e.dataSource).splice((_.value.current-1)*_.value.pageSize,_.value.pageSize)),t}),K=me(),z=ge(function(){for(var t=0;t<ne.length;t+=1){var l=ne[t];if(K.value[l])return l}}),B=$(function(){if(e.grid){var t=z.value&&e.grid[z.value]?e.grid[z.value]:e.grid.column;if(t)return{width:"".concat(100/t,"%"),maxWidth:"".concat(100/t,"%")}}}),le=function(l,v){var h,O=(h=e.renderItem)!==null&&h!==void 0?h:o.renderItem;if(!O)return null;var C,A=ee(e.rowKey);return A==="function"?C=e.rowKey(l):A==="string"||A==="number"?C=l[e.rowKey]:C=l.key,C||(C="list-item-".concat(v)),u[v]=C,O({item:l,index:v})};return function(){var t,l,v,h,O,C,A,Q=(t=e.loadMore)!==null&&t!==void 0?t:(l=o.loadMore)===null||l===void 0?void 0:l.call(o),W=(v=e.footer)!==null&&v!==void 0?v:(h=o.footer)===null||h===void 0?void 0:h.call(o),U=(O=e.header)!==null&&O!==void 0?O:(C=o.header)===null||C===void 0?void 0:C.call(o),X=ie((A=o.default)===null||A===void 0?void 0:A.call(o)),oe=!!(Q||e.pagination||W),ue=M(M({},m.value),{},S({},"".concat(i.value,"-something-after-last-item"),oe)),Y=e.pagination?a("div",{class:"".concat(i.value,"-pagination")},[a(ye,M(M({},_.value),{},{onChange:p,onShowSizeChange:R}),null)]):null,V=E.value&&a("div",{style:{minHeight:"53px"}},null);if(T.value.length>0){u.length=0;var Z=T.value.map(function(N,q){return le(N,q)}),ce=Z.map(function(N,q){return a("div",{key:u[q],style:B.value},[N])});V=e.grid?a(he,{gutter:e.grid.gutter},{default:function(){return[ce]}}):a("ul",{class:"".concat(i.value,"-items")},[Z])}else!X.length&&!E.value&&(V=H(L.value));var F=_.value.position||"bottom";return a("div",{class:ue},[(F==="top"||F==="both")&&Y,U&&a("div",{class:"".concat(i.value,"-header")},[U]),a(pe,f.value,{default:function(){return[V,X]}}),W&&a("div",{class:"".concat(i.value,"-footer")},[W]),Q||(F==="bottom"||F==="both")&&Y])}}});P.install=function(g){return g.component(P.name,P),g.component(P.Item.name,P.Item),g.component(P.Item.Meta.name,P.Item.Meta),g};const Ke=P;export{Le as _,Ke as a};