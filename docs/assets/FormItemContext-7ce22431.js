import{d as g,c as F,r as x,a6 as f,b as y,W as c,Z as E,R as r}from"./index-f7c534c0.js";function h(e){e.target.composing=!0}function v(e){e.target.composing&&(e.target.composing=!1,M(e.target,"input"))}function M(e,o){var t=document.createEvent("HTMLEvents");t.initEvent(o,!0,!0),e.dispatchEvent(t)}function u(e,o,t,n){e.addEventListener(o,t,n)}var b={created:function(o,t){(!t.modifiers||!t.modifiers.lazy)&&(u(o,"compositionstart",h),u(o,"compositionend",v),u(o,"change",v))}};const K=b;var i=Symbol("ContextProps"),m=Symbol("InternalContextProps"),P=function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F(function(){return!0}),n=x(new Map),a=function(d,C){n.value.set(d,C),n.value=new Map(n.value)},I=function(d){n.value.delete(d),n.value=new Map(n.value)};f(),y([t,n],function(){}),r(i,o),r(m,{addFormItemField:a,removeFormItemField:I})},s={id:F(function(){}),onFieldBlur:function(){},onFieldChange:function(){},clearValidate:function(){}},l={addFormItemField:function(){},removeFormItemField:function(){}},S=function(){var o=c(m,l),t=Symbol("FormItemFieldKey"),n=f();return o.addFormItemField(t,n.type),E(function(){o.removeFormItemField(t)}),r(m,l),r(i,s),c(i,s)};const j=g({compatConfig:{MODE:3},name:"AFormItemRest",setup:function(o,t){var n=t.slots;return r(m,l),r(i,s),function(){var a;return(a=n.default)===null||a===void 0?void 0:a.call(n)}}});export{j as F,P as a,K as b,S as u};