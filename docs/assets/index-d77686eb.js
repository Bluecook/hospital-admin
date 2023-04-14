import{c as Ae,_ as T,b as H,f as D,P as Se,d as ht,o as Fe,A as Gt,p as At,q as Ut,i as Ue,u as Rt,e as Vt,r as qt,s as je,v as Yt}from"./default-ceed22dd.js";import{w as He,i as wt}from"./raf-9e916306.js";import{r as O,I as rt,d as fe,c as te,b as r,K as qe,a as Ye,w as Be,C as Xt,H as Zt,Q as Jt,J as Qt,R as ea,S as ta,T as gt}from"./index-1bae46c1.js";import{K as de,R as pt}from"./Overflow-09cb4452.js";import{E as aa,M as na,_ as ra}from"./index-59d07550.js";import{D as ia}from"./Dropdown-4fd4e918.js";import{a as X,i as la,u as St}from"./useState-e6d16677.js";import{c as Ot,t as oa,a as ua,b as ca,h as sa,f as va}from"./_flatRest-643c1aea.js";import{i as xt,a as da,c as fa,o as ba}from"./collapseMotion-7d39dd45.js";import{a as ze,_ as ve}from"./index-26e68601.js";import{i as ya}from"./_arrayIncludesWith-5d57d4a7.js";function ma(i){var e=O(),t=O(!1);function a(){for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];t.value||(He.cancel(e.value),e.value=He(function(){i.apply(void 0,l)}))}return rt(function(){t.value=!0,He.cancel(e.value)}),a}function ha(i){var e=O([]),t=O(typeof i=="function"?i():i),a=ma(function(){var l=t.value;e.value.forEach(function(c){l=c(l)}),e.value=[],t.value=l});function n(l){e.value.push(l),a()}return[t,n]}const ga=fe({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var a=t.expose,n=t.attrs,l=O();function c(v){var d;(d=e.tab)!==null&&d!==void 0&&d.disabled||e.onClick(v)}a({domRef:l});function s(v){var d;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(d=e.tab)===null||d===void 0?void 0:d.key,event:v})}var o=te(function(){var v;return e.editable&&e.closable!==!1&&!((v=e.tab)!==null&&v!==void 0&&v.disabled)});return function(){var v,d,b=e.prefixCls,f=e.id,S=e.active,m=e.tab,M=m.key,I=m.tab,P=m.disabled,x=m.closeIcon,y=e.renderWrapper,N=e.removeAriaLabel,U=e.editable,L=e.onFocus,B="".concat(b,"-tab"),$=r("div",{key:M,ref:l,class:Ae(B,(v={},T(v,"".concat(B,"-with-remove"),o.value),T(v,"".concat(B,"-active"),S),T(v,"".concat(B,"-disabled"),P),v)),style:n.style,onClick:c},[r("div",{role:"tab","aria-selected":S,id:f&&"".concat(f,"-tab-").concat(M),class:"".concat(B,"-btn"),"aria-controls":f&&"".concat(f,"-panel-").concat(M),"aria-disabled":P,tabindex:P?null:0,onClick:function(W){W.stopPropagation(),c(W)},onKeydown:function(W){[de.SPACE,de.ENTER].includes(W.which)&&(W.preventDefault(),c(W))},onFocus:L},[typeof I=="function"?I():I]),o.value&&r("button",{type:"button","aria-label":N||"remove",tabindex:0,class:"".concat(B,"-remove"),onClick:function(W){W.stopPropagation(),s(W)}},[(x==null?void 0:x())||((d=U.removeIcon)===null||d===void 0?void 0:d.call(U))||"×"])]);return y?y($):$}}});var Ct={width:0,height:0,left:0,top:0};function pa(i,e){var t=O(new Map);return qe(function(){for(var a,n=new Map,l=i.value,c=e.value.get((a=l[0])===null||a===void 0?void 0:a.key)||Ct,s=c.left+c.width,o=0;o<l.length;o+=1){var v=l[o].key,d=e.value.get(v);if(!d){var b;d=e.value.get((b=l[o-1])===null||b===void 0?void 0:b.key)||Ct}var f=n.get(v)||H({},d);f.right=s-f.left-f.width,n.set(v,f)}t.value=new Map(n)}),t}const Mt=fe({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var a=t.expose,n=t.attrs,l=O();return a({domRef:l}),function(){var c=e.prefixCls,s=e.editable,o=e.locale;return!s||s.showAdd===!1?null:r("button",{ref:l,type:"button",class:"".concat(c,"-nav-add"),style:n.style,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(d){s.onEdit("add",{event:d})}},[s.addIcon?s.addIcon():"+"])}}});var Sa={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Se.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const xa=fe({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:Sa,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var a=t.attrs,n=t.slots,l=X(!1),c=D(l,2),s=c[0],o=c[1],v=X(null),d=D(v,2),b=d[0],f=d[1],S=function(y){for(var N=e.tabs.filter(function(V){return!V.disabled}),U=N.findIndex(function(V){return V.key===b.value})||0,L=N.length,B=0;B<L;B+=1){U=(U+y+L)%L;var $=N[U];if(!$.disabled){f($.key);return}}},m=function(y){var N=y.which;if(!s.value){[de.DOWN,de.SPACE,de.ENTER].includes(N)&&(o(!0),y.preventDefault());return}switch(N){case de.UP:S(-1),y.preventDefault();break;case de.DOWN:S(1),y.preventDefault();break;case de.ESC:o(!1);break;case de.SPACE:case de.ENTER:b.value!==null&&e.onTabClick(b.value,y);break}},M=te(function(){return"".concat(e.id,"-more-popup")}),I=te(function(){return b.value!==null?"".concat(M.value,"-").concat(b.value):null}),P=function(y,N){y.preventDefault(),y.stopPropagation(),e.editable.onEdit("remove",{key:N,event:y})};return Ye(function(){Be(b,function(){var x=document.getElementById(I.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),Be(s,function(){s.value||f(null)}),function(){var x,y=e.prefixCls,N=e.id,U=e.tabs,L=e.locale,B=e.mobile,$=e.moreIcon,V=$===void 0?((x=n.moreIcon)===null||x===void 0?void 0:x.call(n))||r(aa,null,null):$,W=e.moreTransitionName,K=e.editable,ie=e.tabBarGutter,g=e.rtl,u=e.onTabClick,h="".concat(y,"-dropdown"),_=L==null?void 0:L.dropdownAriaLabel,F=T({},g?"marginRight":"marginLeft",ie);U.length||(F.visibility="hidden",F.order=1);var j=Ae(T({},"".concat(h,"-rtl"),g)),E=B?null:r(ia,{prefixCls:h,trigger:["hover"],visible:s.value,transitionName:W,onVisibleChange:o,overlayClassName:j,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return r(na,{onClick:function(R){var q=R.key,ne=R.domEvent;u(q,ne),o(!1)},id:M.value,tabindex:-1,role:"listbox","aria-activedescendant":I.value,selectedKeys:[b.value],"aria-label":_!==void 0?_:"expanded dropdown"},{default:function(){return[U.map(function(R){var q,ne,le=K&&R.closable!==!1&&!R.disabled;return r(ra,{key:R.key,id:"".concat(M.value,"-").concat(R.key),role:"option","aria-controls":N&&"".concat(N,"-panel-").concat(R.key),disabled:R.disabled},{default:function(){return[r("span",null,[typeof R.tab=="function"?R.tab():R.tab]),le&&r("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(h,"-menu-item-remove"),onClick:function(oe){oe.stopPropagation(),P(oe,R.key)}},[((q=R.closeIcon)===null||q===void 0?void 0:q.call(R))||((ne=K.removeIcon)===null||ne===void 0?void 0:ne.call(K))||"×"])]}})})]}})},default:function(){return r("button",{type:"button",class:"".concat(y,"-nav-more"),style:F,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M.value,id:"".concat(N,"-more"),"aria-expanded":s.value,onKeydown:m},[V])}});return r("div",{class:Ae("".concat(y,"-nav-operations"),a.class),style:a.style},[E,r(Mt,{prefixCls:y,locale:L,editable:K},null)])}}});var Nt=Symbol("tabsContextKey"),Lt=function(e){Xt(Nt,e)},Kt=function(){return Zt(Nt,{tabs:O([]),prefixCls:O()})};fe({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var a=t.slots;return Lt(Jt(e)),function(){var n;return(n=a.default)===null||n===void 0?void 0:n.call(a)}}});var Ca=.1,Tt=.01,Ve=20,_t=Math.pow(.995,Ve);function Ta(i,e){var t=X(),a=D(t,2),n=a[0],l=a[1],c=X(0),s=D(c,2),o=s[0],v=s[1],d=X(0),b=D(d,2),f=b[0],S=b[1],m=X(),M=D(m,2),I=M[0],P=M[1],x=O();function y(g){var u=g.touches[0],h=u.screenX,_=u.screenY;l({x:h,y:_}),clearInterval(x.value)}function N(g){if(n.value){g.preventDefault();var u=g.touches[0],h=u.screenX,_=u.screenY,F=h-n.value.x,j=_-n.value.y;e(F,j),l({x:h,y:_});var E=Date.now();S(E-o.value),v(E),P({x:F,y:j})}}function U(){if(n.value){var g=I.value;if(l(null),P(null),g){var u=g.x/f.value,h=g.y/f.value,_=Math.abs(u),F=Math.abs(h);if(Math.max(_,F)<Ca)return;var j=u,E=h;x.value=setInterval(function(){if(Math.abs(j)<Tt&&Math.abs(E)<Tt){clearInterval(x.value);return}j*=_t,E*=_t,e(j*Ve,E*Ve)},Ve)}}}var L=O();function B(g){var u=g.deltaX,h=g.deltaY,_=0,F=Math.abs(u),j=Math.abs(h);F===j?_=L.value==="x"?u:h:F>j?(_=u,L.value="x"):(_=h,L.value="y"),e(-_,-_)&&g.preventDefault()}var $=O({onTouchStart:y,onTouchMove:N,onTouchEnd:U,onWheel:B});function V(g){$.value.onTouchStart(g)}function W(g){$.value.onTouchMove(g)}function K(g){$.value.onTouchEnd(g)}function ie(g){$.value.onWheel(g)}Ye(function(){var g,u;document.addEventListener("touchmove",W,{passive:!1}),document.addEventListener("touchend",K,{passive:!1}),(g=i.value)===null||g===void 0||g.addEventListener("touchstart",V,{passive:!1}),(u=i.value)===null||u===void 0||u.addEventListener("wheel",ie,{passive:!1})}),rt(function(){document.removeEventListener("touchmove",W),document.removeEventListener("touchend",K)})}function Pt(i,e){var t=O(i);function a(n){var l=typeof n=="function"?n(t.value):n;l!==t.value&&e(l,t.value),t.value=l}return[t,a]}var _a=function(){var e=O(new Map),t=function(n){return function(l){e.value.set(n,l)}};return Qt(function(){e.value=new Map}),[t,e]};const Pa=_a;function Ea(i,e,t,a){if(!xt(i))return i;e=Ot(e,i);for(var n=-1,l=e.length,c=l-1,s=i;s!=null&&++n<l;){var o=oa(e[n]),v=t;if(o==="__proto__"||o==="constructor"||o==="prototype")return i;if(n!=c){var d=s[o];v=a?a(d,o,s):void 0,v===void 0&&(v=xt(d)?d:da(e[n+1])?[]:{})}ua(s,o,v),s=s[o]}return i}function Ia(i,e,t){for(var a=-1,n=e.length,l={};++a<n;){var c=e[a],s=ca(i,c);t(s,c)&&Ea(l,Ot(c,i),s)}return l}function ka(i,e){return Ia(i,e,function(t,a){return sa(i,a)})}var Ba=va(function(i,e){return i==null?{}:ka(i,e)});const Dt=Ba;var Et={width:0,height:0,left:0,top:0,right:0},Aa=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Se.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const It=fe({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:Aa(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var a=t.attrs,n=t.slots,l=Kt(),c=l.tabs,s=l.prefixCls,o=O(),v=O(),d=O(),b=O(),f=Pa(),S=D(f,2),m=S[0],M=S[1],I=te(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),P=Pt(0,function(C,k){I.value&&e.onTabScroll&&e.onTabScroll({direction:C>k?"left":"right"})}),x=D(P,2),y=x[0],N=x[1],U=Pt(0,function(C,k){!I.value&&e.onTabScroll&&e.onTabScroll({direction:C>k?"top":"bottom"})}),L=D(U,2),B=L[0],$=L[1],V=X(0),W=D(V,2),K=W[0],ie=W[1],g=X(0),u=D(g,2),h=u[0],_=u[1],F=X(null),j=D(F,2),E=j[0],be=j[1],ye=X(null),R=D(ye,2),q=R[0],ne=R[1],le=X(0),A=D(le,2),_e=A[0],oe=A[1],Z=X(0),J=D(Z,2),Re=J[0],we=J[1],Pe=ha(new Map),me=D(Pe,2),Ne=me[0],Le=me[1],Oe=pa(c,Ne),Ee=te(function(){return"".concat(s.value,"-nav-operations-hidden")}),z=O(0),xe=O(0);qe(function(){I.value?e.rtl?(z.value=0,xe.value=Math.max(0,K.value-E.value)):(z.value=Math.min(0,E.value-K.value),xe.value=0):(z.value=Math.min(0,q.value-h.value),xe.value=0)});var Ce=function(k){return k<z.value?z.value:k>xe.value?xe.value:k},Ke=O(),De=X(),lt=D(De,2),Xe=lt[0],ot=lt[1],Ze=function(){ot(Date.now())},Je=function(){clearTimeout(Ke.value)},ut=function(k,p){k(function(G){var w=Ce(G+p);return w})};Ta(o,function(C,k){if(I.value){if(E.value>=K.value)return!1;ut(N,C)}else{if(q.value>=h.value)return!1;ut($,k)}return Je(),Ze(),!0}),Be(Xe,function(){Je(),Xe.value&&(Ke.value=setTimeout(function(){ot(0)},100))});var ct=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,p=Oe.value.get(k)||{width:0,height:0,left:0,right:0,top:0};if(I.value){var G=y.value;e.rtl?p.right<y.value?G=p.right:p.right+p.width>y.value+E.value&&(G=p.right+p.width-E.value):p.left<-y.value?G=-p.left:p.left+p.width>-y.value+E.value&&(G=-(p.left+p.width-E.value)),$(0),N(Ce(G))}else{var w=B.value;p.top<-B.value?w=-p.top:p.top+p.height>-B.value+q.value&&(w=-(p.top+p.height-q.value)),N(0),$(Ce(w))}},Qe=O(0),et=O(0);qe(function(){var C,k,p,G,w,Q,ee,Ie=Oe.value;["top","bottom"].includes(e.tabPosition)?(k="width",w=E.value,Q=K.value,ee=_e.value,p=e.rtl?"right":"left",G=Math.abs(y.value)):(k="height",w=q.value,Q=K.value,ee=Re.value,p="top",G=-B.value);var re=w;Q+ee>w&&Q<w&&(re=w-ee);var he=c.value;if(!he.length){var ge;return ge=[0,0],Qe.value=ge[0],et.value=ge[1],ge}for(var ke=he.length,Y=ke,ue=0;ue<ke;ue+=1){var ce=Ie.get(he[ue].key)||Et;if(ce[p]+ce[k]>G+re){Y=ue-1;break}}for(var pe=0,ae=ke-1;ae>=0;ae-=1){var se=Ie.get(he[ae].key)||Et;if(se[p]<G){pe=ae+1;break}}return C=[pe,Y],Qe.value=C[0],et.value=C[1],C});var tt=function(){var k,p,G,w,Q,ee=((k=o.value)===null||k===void 0?void 0:k.offsetWidth)||0,Ie=((p=o.value)===null||p===void 0?void 0:p.offsetHeight)||0,re=((G=b.value)===null||G===void 0?void 0:G.$el)||{},he=re.offsetWidth||0,ge=re.offsetHeight||0;be(ee),ne(Ie),oe(he),we(ge);var ke=(((w=v.value)===null||w===void 0?void 0:w.offsetWidth)||0)-he,Y=(((Q=v.value)===null||Q===void 0?void 0:Q.offsetHeight)||0)-ge;ie(ke),_(Y),Le(function(){var ue=new Map;return c.value.forEach(function(ce){var pe=ce.key,ae=M.value.get(pe),se=(ae==null?void 0:ae.$el)||ae;se&&ue.set(pe,{width:se.offsetWidth,height:se.offsetHeight,left:se.offsetLeft,top:se.offsetTop})}),ue})},st=te(function(){return[].concat(ht(c.value.slice(0,Qe.value)),ht(c.value.slice(et.value+1)))}),Wt=X(),vt=D(Wt,2),Ft=vt[0],jt=vt[1],Te=te(function(){return Oe.value.get(e.activeKey)}),dt=O(),ft=function(){He.cancel(dt.value)};Be([Te,I,function(){return e.rtl}],function(){var C={};Te.value&&(I.value?(e.rtl?C.right=Fe(Te.value.right):C.left=Fe(Te.value.left),C.width=Fe(Te.value.width)):(C.top=Fe(Te.value.top),C.height=Fe(Te.value.height))),ft(),dt.value=He(function(){jt(C)})}),Be([function(){return e.activeKey},Te,Oe,I],function(){ct()},{flush:"post"}),Be([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return c.value}],function(){tt()},{flush:"post"});var at=function(k){var p=k.position,G=k.prefixCls,w=k.extra;if(!w)return null;var Q=w==null?void 0:w({position:p});return Q?r("div",{class:"".concat(G,"-extra-content")},[Q]):null};return rt(function(){Je(),ft()}),function(){var C,k=e.id,p=e.animated,G=e.activeKey,w=e.rtl,Q=e.editable,ee=e.locale,Ie=e.tabPosition,re=e.tabBarGutter,he=e.onTabClick,ge=a.class,ke=a.style,Y=s.value,ue=!!st.value.length,ce="".concat(Y,"-nav-wrap"),pe,ae,se,bt;I.value?w?(ae=y.value>0,pe=y.value+E.value<K.value):(pe=y.value<0,ae=-y.value+E.value<K.value):(se=B.value<0,bt=-B.value+q.value<h.value);var Ge={};Ie==="top"||Ie==="bottom"?Ge[w?"marginRight":"marginLeft"]=typeof re=="number"?"".concat(re,"px"):re:Ge.marginTop=typeof re=="number"?"".concat(re,"px"):re;var yt=c.value.map(function($e,mt){var We=$e.key;return r(ga,{id:k,prefixCls:Y,key:We,tab:$e,style:mt===0?void 0:Ge,closable:$e.closable,editable:Q,active:We===G,removeAriaLabel:ee==null?void 0:ee.removeAriaLabel,ref:m(We),onClick:function(Ht){he(We,Ht)},onFocus:function(){ct(We),Ze(),o.value&&(w||(o.value.scrollLeft=0),o.value.scrollTop=0)}},n)});return r("div",{role:"tablist",class:Ae("".concat(Y,"-nav"),ge),style:ke,onKeydown:function(){Ze()}},[r(at,{position:"left",prefixCls:Y,extra:n.leftExtra},null),r(pt,{onResize:tt},{default:function(){return[r("div",{class:Ae(ce,(C={},T(C,"".concat(ce,"-ping-left"),pe),T(C,"".concat(ce,"-ping-right"),ae),T(C,"".concat(ce,"-ping-top"),se),T(C,"".concat(ce,"-ping-bottom"),bt),C)),ref:o},[r(pt,{onResize:tt},{default:function(){return[r("div",{ref:v,class:"".concat(Y,"-nav-list"),style:{transform:"translate(".concat(y.value,"px, ").concat(B.value,"px)"),transition:Xe.value?"none":void 0}},[yt,r(Mt,{ref:b,prefixCls:Y,locale:ee,editable:Q,style:H(H({},yt.length===0?void 0:Ge),{},{visibility:ue?"hidden":null})},null),r("div",{class:Ae("".concat(Y,"-ink-bar"),T({},"".concat(Y,"-ink-bar-animated"),p.inkBar)),style:Ft.value},null)])]}})])]}}),r(xa,H(H({},e),{},{removeAriaLabel:ee==null?void 0:ee.removeAriaLabel,ref:d,prefixCls:Y,tabs:st.value,class:!ue&&Ee.value}),Dt(n,["moreIcon"])),r(at,{position:"right",prefixCls:Y,extra:n.rightExtra},null),r(at,{position:"right",prefixCls:Y,extra:n.tabBarExtraContent},null)])}}}),Ra=fe({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Kt(),a=t.tabs,n=t.prefixCls;return function(){var l=e.id,c=e.activeKey,s=e.animated,o=e.tabPosition,v=e.rtl,d=e.destroyInactiveTabPane,b=s.tabPane,f=n.value,S=a.value.findIndex(function(m){return m.key===c});return r("div",{class:"".concat(f,"-content-holder")},[r("div",{class:["".concat(f,"-content"),"".concat(f,"-content-").concat(o),T({},"".concat(f,"-content-animated"),b)],style:S&&b?T({},v?"marginRight":"marginLeft","-".concat(S,"00%")):null},[a.value.map(function(m){return fa(m.node,{key:m.key,prefixCls:f,tabKey:m.key,id:l,animated:b,active:m.key===c,destroyInactiveTabPane:d})})])])}}});var wa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const Oa=wa;function kt(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.forEach(function(n){Ma(i,n,t[n])})}return i}function Ma(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var it=function(e,t){var a=kt({},e,t.attrs);return r(Gt,kt({},a,{icon:Oa}),null)};it.displayName="PlusOutlined";it.inheritAttrs=!1;const Na=it;var Bt=0,$t=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Se.any}};function La(i){return i.map(function(e){if(Ut(e)){for(var t=H({},e.props||{}),a=0,n=Object.entries(t);a<n.length;a++){var l=D(n[a],2),c=l[0],s=l[1];delete t[c],t[ea(c)]=s}var o=e.children||{},v=e.key!==void 0?e.key:void 0,d=t.tab,b=d===void 0?o.tab:d,f=t.disabled,S=t.forceRender,m=t.closable,M=t.animated,I=t.active,P=t.destroyInactiveTabPane;return H(H({key:v},t),{},{node:e,closeIcon:o.closeIcon,tab:b,disabled:f===""||f,forceRender:S===""||S,closable:m===""||m,animated:M===""||M,active:I===""||I,destroyInactiveTabPane:P===""||P})}return null}).filter(function(e){return e})}var Ka=fe({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:H(H({},wt($t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var a=t.attrs,n=t.slots;Ue(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ue(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ue(n.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var l=Rt("tabs",e),c=l.prefixCls,s=l.direction,o=l.size,v=l.rootPrefixCls,d=te(function(){return s.value==="rtl"}),b=te(function(){var u=e.animated,h=e.tabPosition;return u===!1||["left","right"].includes(h)?{inkBar:!1,tabPane:!1}:u===!0?{inkBar:!0,tabPane:!0}:H({inkBar:!0,tabPane:!1},Vt(u)==="object"?u:{})}),f=X(!1),S=D(f,2),m=S[0],M=S[1];Ye(function(){M(la())});var I=St(function(){var u;return(u=e.tabs[0])===null||u===void 0?void 0:u.key},{value:te(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),P=D(I,2),x=P[0],y=P[1],N=X(function(){return e.tabs.findIndex(function(u){return u.key===x.value})}),U=D(N,2),L=U[0],B=U[1];qe(function(){var u=e.tabs.findIndex(function(_){return _.key===x.value});if(u===-1){var h;u=Math.max(0,Math.min(L.value,e.tabs.length-1)),y((h=e.tabs[u])===null||h===void 0?void 0:h.key)}B(u)});var $=St(null,{value:te(function(){return e.id})}),V=D($,2),W=V[0],K=V[1],ie=te(function(){return m.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});Ye(function(){e.id||(K("rc-tabs-".concat(Bt)),Bt+=1)});var g=function(h,_){var F;(F=e.onTabClick)===null||F===void 0||F.call(e,h,_);var j=h!==x.value;if(y(h),j){var E;(E=e.onChange)===null||E===void 0||E.call(e,h)}};return Lt({tabs:te(function(){return e.tabs}),prefixCls:c}),function(){var u,h=e.id,_=e.type,F=e.tabBarGutter,j=e.tabBarStyle,E=e.locale,be=e.destroyInactiveTabPane,ye=e.renderTabBar,R=ye===void 0?n.renderTabBar:ye,q=e.onTabScroll,ne=e.hideAdd,le=e.centered,A={id:W.value,activeKey:x.value,animated:b.value,tabPosition:ie.value,rtl:d.value,mobile:m.value},_e;_==="editable-card"&&(_e={onEdit:function(we,Pe){var me,Ne=Pe.key,Le=Pe.event;(me=e.onEdit)===null||me===void 0||me.call(e,we==="add"?Le:Ne,we)},removeIcon:function(){return r(qt,null,null)},addIcon:n.addIcon?n.addIcon:function(){return r(Na,null,null)},showAdd:ne!==!0});var oe,Z=H(H({},A),{},{moreTransitionName:"".concat(v.value,"-slide-up"),editable:_e,locale:E,tabBarGutter:F,onTabClick:g,onTabScroll:q,style:j});R?oe=R(H(H({},Z),{},{DefaultTabBar:It})):oe=r(It,Z,Dt(n,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var J=c.value;return r("div",H(H({},a),{},{id:h,class:Ae(J,"".concat(J,"-").concat(ie.value),(u={},T(u,"".concat(J,"-").concat(o.value),o.value),T(u,"".concat(J,"-card"),["card","editable-card"].includes(_)),T(u,"".concat(J,"-editable-card"),_==="editable-card"),T(u,"".concat(J,"-centered"),le),T(u,"".concat(J,"-mobile"),m.value),T(u,"".concat(J,"-editable"),_==="editable-card"),T(u,"".concat(J,"-rtl"),d.value),u),a.class)}),[oe,r(Ra,H(H({destroyInactiveTabPane:be},A),{},{animated:b.value}),null)])}}});const Me=fe({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:wt($t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var a=t.attrs,n=t.slots,l=t.emit,c=function(o){l("update:activeKey",o),l("change",o)};return function(){var s,o=La(At((s=n.default)===null||s===void 0?void 0:s.call(n)));return r(Ka,H(H(H({},ba(e,["onUpdate:activeKey"])),a),{},{onChange:c,tabs:o}),n)}}});var Da=function(){return{tab:Se.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const nt=fe({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:Da(),slots:["closeIcon","tab"],setup:function(e,t){var a=t.attrs,n=t.slots,l=O(e.forceRender);Be([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?l.value=!0:e.destroyInactiveTabPane&&(l.value=!1)},{immediate:!0});var c=te(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var s,o=e.prefixCls,v=e.forceRender,d=e.id,b=e.active,f=e.tabKey;return r("div",{id:d&&"".concat(d,"-panel-").concat(f),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":d&&"".concat(d,"-tab-").concat(f),"aria-hidden":!b,style:[c.value,a.style],class:["".concat(o,"-tabpane"),b&&"".concat(o,"-tabpane-active"),a.class]},[(b||l.value||v)&&((s=n.default)===null||s===void 0?void 0:s.call(n))])}}});Me.TabPane=nt;Me.install=function(i){return i.component(Me.name,Me),i.component(nt.name,nt),i};var $a=Me.TabPane,Wa=function(){return{prefixCls:String,title:Se.any,extra:Se.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:Se.any,tabList:{type:Array},tabBarExtraContent:Se.any,activeTabKey:String,defaultActiveTabKey:String,cover:Se.any,onTabChange:{type:Function}}},Fa=fe({compatConfig:{MODE:3},name:"ACard",props:Wa(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,t){var a=t.slots,n=Rt("card",e),l=n.prefixCls,c=n.direction,s=n.size,o=function(f){var S=f.map(function(m,M){return gt(m)&&!Yt(m)||!gt(m)?r("li",{style:{width:"".concat(100/f.length,"%")},key:"action-".concat(M)},[r("span",null,[m])]):null});return S},v=function(f){var S;(S=e.onTabChange)===null||S===void 0||S.call(e,f)},d=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S;return f.forEach(function(m){m&&ya(m.type)&&m.type.__ANT_CARD_GRID&&(S=!0)}),S};return function(){var b,f,S,m,M,I,P,x,y=e.headStyle,N=y===void 0?{}:y,U=e.bodyStyle,L=U===void 0?{}:U,B=e.loading,$=e.bordered,V=$===void 0?!0:$,W=e.type,K=e.tabList,ie=e.hoverable,g=e.activeTabKey,u=e.defaultActiveTabKey,h=e.tabBarExtraContent,_=h===void 0?je((b=a.tabBarExtraContent)===null||b===void 0?void 0:b.call(a)):h,F=e.title,j=F===void 0?je((f=a.title)===null||f===void 0?void 0:f.call(a)):F,E=e.extra,be=E===void 0?je((S=a.extra)===null||S===void 0?void 0:S.call(a)):E,ye=e.actions,R=ye===void 0?je((m=a.actions)===null||m===void 0?void 0:m.call(a)):ye,q=e.cover,ne=q===void 0?je((M=a.cover)===null||M===void 0?void 0:M.call(a)):q,le=At((I=a.default)===null||I===void 0?void 0:I.call(a)),A=l.value,_e=(P={},T(P,"".concat(A),!0),T(P,"".concat(A,"-loading"),B),T(P,"".concat(A,"-bordered"),V),T(P,"".concat(A,"-hoverable"),!!ie),T(P,"".concat(A,"-contain-grid"),d(le)),T(P,"".concat(A,"-contain-tabs"),K&&K.length),T(P,"".concat(A,"-").concat(s.value),s.value),T(P,"".concat(A,"-type-").concat(W),!!W),T(P,"".concat(A,"-rtl"),c.value==="rtl"),P),oe=L.padding===0||L.padding==="0px"?{padding:"24px"}:void 0,Z=r("div",{class:"".concat(A,"-loading-block")},null),J=r("div",{class:"".concat(A,"-loading-content"),style:oe},[r(ze,{gutter:8},{default:function(){return[r(ve,{span:22},{default:function(){return[Z]}})]}}),r(ze,{gutter:8},{default:function(){return[r(ve,{span:8},{default:function(){return[Z]}}),r(ve,{span:15},{default:function(){return[Z]}})]}}),r(ze,{gutter:8},{default:function(){return[r(ve,{span:6},{default:function(){return[Z]}}),r(ve,{span:18},{default:function(){return[Z]}})]}}),r(ze,{gutter:8},{default:function(){return[r(ve,{span:13},{default:function(){return[Z]}}),r(ve,{span:9},{default:function(){return[Z]}})]}}),r(ze,{gutter:8},{default:function(){return[r(ve,{span:4},{default:function(){return[Z]}}),r(ve,{span:3},{default:function(){return[Z]}}),r(ve,{span:16},{default:function(){return[Z]}})]}})]),Re=g!==void 0,we=(x={size:"large"},T(x,Re?"activeKey":"defaultActiveKey",Re?g:u),T(x,"onChange",v),T(x,"class","".concat(A,"-head-tabs")),x),Pe,me=K&&K.length?r(Me,we,{default:function(){return[K.map(function(z){var xe=z.tab,Ce=z.slots,Ke=Ce==null?void 0:Ce.tab;Ue(!Ce,"Card","tabList slots is deprecated, Please use `customTab` instead.");var De=xe!==void 0?xe:a[Ke]?a[Ke](z):null;return De=ta(a,"customTab",z,function(){return[De]}),r($a,{tab:De,key:z.key,disabled:z.disabled},null)})]},rightExtra:_?function(){return _}:null}):null;(j||be||me)&&(Pe=r("div",{class:"".concat(A,"-head"),style:N},[r("div",{class:"".concat(A,"-head-wrapper")},[j&&r("div",{class:"".concat(A,"-head-title")},[j]),be&&r("div",{class:"".concat(A,"-extra")},[be])]),me]));var Ne=ne?r("div",{class:"".concat(A,"-cover")},[ne]):null,Le=r("div",{class:"".concat(A,"-body"),style:L},[B?J:le]),Oe=R&&R.length?r("ul",{class:"".concat(A,"-actions")},[o(R)]):null;return r("div",{class:_e,ref:"cardContainerRef"},[Pe,Ne,le&&le.length?Le:null,Oe])}}});const Qa=Fa;export{Qa as C};