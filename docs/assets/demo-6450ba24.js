import{w as R,u as H,p as U,_ as v,b as _,B as X,P as V,t as E,f as Y,c as Z,A as W,D as K}from"./default-ceed22dd.js";import{u as tt}from"./index-a22a0e85.js";import{D as et}from"./DownOutlined-cb9fa250.js";import{d as j,c as f,b as d,r as $,w as nt,F as at,W as T,D as rt,y as ot,j as x,f as lt,h as p}from"./index-1bae46c1.js";import{C as it}from"./ClockCircleOutlined-49e38864.js";import{_ as ct}from"./_plugin-vue_export-helper-c27b6911.js";import{a as st,_ as ut}from"./index-26e68601.js";import"./styleChecker-0aff1a87.js";var vt=function(){return{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}},ft=j({compatConfig:{MODE:3},name:"ADivider",props:vt(),setup:function(t,n){var r=n.slots,o=H("divider",t),s=o.prefixCls,g=o.direction,m=f(function(){return t.orientation==="left"&&t.orientationMargin!=null}),c=f(function(){return t.orientation==="right"&&t.orientationMargin!=null}),l=f(function(){var i,h=t.type,w=t.dashed,z=t.plain,a=s.value;return i={},v(i,a,!0),v(i,"".concat(a,"-").concat(h),!0),v(i,"".concat(a,"-dashed"),!!w),v(i,"".concat(a,"-plain"),!!z),v(i,"".concat(a,"-rtl"),g.value==="rtl"),v(i,"".concat(a,"-no-default-orientation-margin-left"),m.value),v(i,"".concat(a,"-no-default-orientation-margin-right"),c.value),i}),b=f(function(){var i=typeof t.orientationMargin=="number"?"".concat(t.orientationMargin,"px"):t.orientationMargin;return _(_({},m.value&&{marginLeft:i}),c.value&&{marginRight:i})}),C=f(function(){return t.orientation.length>0?"-"+t.orientation:t.orientation});return function(){var i,h=U((i=r.default)===null||i===void 0?void 0:i.call(r));return d("div",{class:[l.value,h.length?"".concat(s.value,"-with-text ").concat(s.value,"-with-text").concat(C.value):""],role:"separator"},[h.length?d("span",{class:"".concat(s.value,"-inner-text"),style:b.value},[h]):null])}}});const pt=R(ft);var dt={small:8,middle:16,large:24},gt=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:V.oneOf(E("horizontal","vertical")).def("horizontal"),align:V.oneOf(E("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function mt(e){return typeof e=="string"?dt[e]:e||0}var ht=j({compatConfig:{MODE:3},name:"ASpace",props:gt(),slots:["split"],setup:function(t,n){var r=n.slots,o=H("space",t),s=o.prefixCls,g=o.space,m=o.direction,c=tt(),l=f(function(){var a,u,y;return(a=(u=t.size)!==null&&u!==void 0?u:(y=g.value)===null||y===void 0?void 0:y.size)!==null&&a!==void 0?a:"small"}),b=$(),C=$();nt(l,function(){var a=(Array.isArray(l.value)?l.value:[l.value,l.value]).map(function(y){return mt(y)}),u=Y(a,2);b.value=u[0],C.value=u[1]},{immediate:!0});var i=f(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),h=f(function(){var a;return Z(s.value,"".concat(s.value,"-").concat(t.direction),(a={},v(a,"".concat(s.value,"-rtl"),m.value==="rtl"),v(a,"".concat(s.value,"-align-").concat(i.value),i.value),a))}),w=f(function(){return m.value==="rtl"?"marginLeft":"marginRight"}),z=f(function(){var a={};return c.value&&(a.columnGap="".concat(b.value,"px"),a.rowGap="".concat(C.value,"px")),_(_({},a),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-C.value,"px")})});return function(){var a,u,y=t.wrap,A=t.direction,J=A===void 0?"horizontal":A,D=X((a=r.default)===null||a===void 0?void 0:a.call(r)),I=D.length;if(I===0)return null;var S=(u=r.split)===null||u===void 0?void 0:u.call(r),N="".concat(s.value,"-item"),k=b.value,M=I-1;return d("div",{class:h.value,style:z.value},[D.map(function(Q,P){var O={};return c.value||(J==="vertical"?P<M&&(O={marginBottom:"".concat(k/(S?2:1),"px")}):O=_(_({},P<M&&v({},w.value,"".concat(k/(S?2:1),"px"))),y&&{paddingBottom:"".concat(C.value,"px")})),d(at,null,[d("div",{class:N,style:O},[Q]),P<M&&S&&d("span",{class:"".concat(N,"-split"),style:O},[S])])})])}}});const q=R(ht);var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};const Ct=yt;function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){_t(e,o,n[o])})}return e}function _t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(t,n){var r=F({},t,n.attrs);return d(W,F({},r,{icon:Ct}),null)};B.displayName="MailOutlined";B.inheritAttrs=!1;const bt=B;var St={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"};const Ot=St;function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){wt(e,o,n[o])})}return e}function wt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(t,n){var r=G({},t,n.attrs);return d(W,G({},r,{icon:Ot}),null)};L.displayName="SettingOutlined";L.inheritAttrs=!1;const zt=L;const Mt=j({components:{DownOutlined:et,MailOutlined:bt,SettingOutlined:zt,ClockCircleOutlined:it,SplitSpace:(e,{slots:t})=>T(q,{size:4,...e},{...t,split:()=>T(pt,{type:"vertical"})})},setup(){const e={style:{width:"128px"}},t={...e,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"little",label:"Little"}]},n=[{value:"little",key:"little",label:"Little",title:"Little",children:[{value:"light",key:"light",label:"Light",title:"Light"},{value:"bamboo",key:"bamboo",label:"Bamboo",title:"Bamboo"}]}],r={...e,treeCheckable:!0,maxTagCount:"responsive",treeData:n},o=[{key:"article",tab:"article"},{key:"app",tab:"app"},{key:"project",tab:"project"}],s=[];for(let c=0;c<20;c++)s.push({key:c.toString(),title:`content${c+1}`,description:`description of content${c+1}`});const g=rt({primaryColor:"#1890ff",errorColor:"#ff4d4f",warningColor:"#faad14",successColor:"#52c41a",infoColor:"#1890ff"});return{selectProps:t,carTabListNoTitle:o,onColorChange:(c,l)=>{Object.assign(g,{[c]:l.target.value}),K.config({theme:g})},treeData:n,treeSelectProps:r,transferData:s,colorState:g,inputProps:e,selectedKeys:$(["mail"])}}}),Pt=["value"],xt=p("span",{style:{color:"var(--ant-primary-color)"}},"var(`--ant-primary-color`)",-1),$t=["value"],jt=p("span",{style:{color:"var(--ant-error-color)"}},"var(`--ant-error-color`)",-1),Bt=["value"],Lt=p("span",{style:{color:"var(--ant-warning-color)"}},"var(`--ant-warning-color`)",-1),At=["value"],Dt=p("span",{style:{color:"var(--ant-success-color)"}},"var(`--ant-success-color`)",-1),It=["value"],Nt=p("span",{style:{color:"var(--ant-info-color)"}},"var(`--ant-info-color`)",-1);function kt(e,t,n,r,o,s){const g=q,m=ut,c=st;return lt(),ot(c,{gutter:16,wrap:!1},{default:x(()=>[d(m,{flex:"none"},{default:x(()=>[d(g,{direction:"vertical",align:"center"},{default:x(()=>[p("input",{type:"color",value:e.colorState.primaryColor,onInput:t[0]||(t[0]=l=>e.onColorChange("primaryColor",l))},null,40,Pt),xt,p("input",{type:"color",value:e.colorState.errorColor,onInput:t[1]||(t[1]=l=>e.onColorChange("errorColor",l))},null,40,$t),jt,p("input",{type:"color",value:e.colorState.warningColor,onInput:t[2]||(t[2]=l=>e.onColorChange("warningColor",l))},null,40,Bt),Lt,p("input",{type:"color",value:e.colorState.successColor,onInput:t[3]||(t[3]=l=>e.onColorChange("successColor",l))},null,40,At),Dt,p("input",{type:"color",value:e.colorState.infoColor,onInput:t[4]||(t[4]=l=>e.onColorChange("infoColor",l))},null,40,It),Nt]),_:1})]),_:1})]),_:1})}const qt=ct(Mt,[["render",kt]]);export{qt as default};
