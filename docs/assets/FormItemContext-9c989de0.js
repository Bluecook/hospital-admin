import{d as C,c as F,r as g,w as x,H as c,I as y,C as r,O as E}from"./index-1bae46c1.js";function h(e){e.target.composing=!0}function v(e){e.target.composing&&(e.target.composing=!1,w(e.target,"input"))}function w(e,o){var t=document.createEvent("HTMLEvents");t.initEvent(o,!0,!0),e.dispatchEvent(t)}function u(e,o,t,n){e.addEventListener(o,t,n)}var M={created:function(o,t){(!t.modifiers||!t.modifiers.lazy)&&(u(o,"compositionstart",h),u(o,"compositionend",v),u(o,"change",v))}};const P=M;var i=Symbol("ContextProps"),m=Symbol("InternalContextProps"),S=function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F(function(){return!0}),n=g(new Map),a=function(d,p){n.value.set(d,p),n.value=new Map(n.value)},f=function(d){n.value.delete(d),n.value=new Map(n.value)};x([t,n],function(){}),r(i,o),r(m,{addFormItemField:a,removeFormItemField:f})},s={id:F(function(){}),onFieldBlur:function(){},onFieldChange:function(){},clearValidate:function(){}},l={addFormItemField:function(){},removeFormItemField:function(){}},b=function(){var o=c(m,l),t=Symbol("FormItemFieldKey"),n=E();return o.addFormItemField(t,n.type),y(function(){o.removeFormItemField(t)}),r(m,l),r(i,s),c(i,s)};const j=C({compatConfig:{MODE:3},name:"AFormItemRest",setup:function(o,t){var n=t.slots;return r(m,l),r(i,s),function(){var a;return(a=n.default)===null||a===void 0?void 0:a.call(n)}}});export{j as F,S as a,P as b,b as u};
