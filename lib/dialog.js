!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dialog=t():e.dialog=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=178)}({0:function(e,t){e.exports=function(e,t,n,i,o,a){var r,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(r=e,s=e.default);var l,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):i&&(l=i),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(e,t){return l.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:s,options:u}}},11:function(e,t,n){"use strict";t.a={name:"xinIcon",components:{},props:{type:{type:String,default:"unicode"},name:{type:String,default:""}},data:function(){return{}},watch:{},mounted:function(){},methods:{}}},114:function(e,t,n){"use strict";var i=n(6);t.a={name:"xinDialog",components:{"xin-icon":i.default},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"提示"},width:{type:String,default:""},noPadding:{type:Boolean,default:!1},confirmVisible:{type:Boolean,default:!0},cancelVisible:{type:Boolean,default:!0},confirmLabel:{type:String,default:"确 认"},cancelLabel:{type:String,default:"取 消"},closable:{type:Boolean,default:!0}},data:function(){return{}},created:function(){},watch:{},mounted:function(){},methods:{show:function(){this.$emit("update:visible",!0)},hide:function(){this.$emit("update:visible",!1)},confirm:function(){this.$emit("confirm")},cancel:function(){this.hide(),this.$emit("cancel")},close:function(){this.hide(),this.$emit("close")}}}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(179);i.a.install=function(e){e.component(i.a.name,i.a)},t.default=i.a},179:function(e,t,n){"use strict";var i=n(114),o=n(180),a=n(0)(i.a,o.a,!1,null,null,null);t.a=a.exports},180:function(e,t,n){"use strict";var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"xin-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:["xin-dialog"]},[n("transition",{attrs:{name:"xin-down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:["xin-dialog-box"],style:{width:e.width.indexOf("px")>-1?e.width:e.width+"px"}},[n("div",{staticClass:"xin-dialog-header"},[e.$slots.header?e._t("header"):n("div",{staticClass:"xin-dialog-header-default"},[n("span",[e._v(e._s(e.title))]),e._v(" "),n("xin-icon",{attrs:{name:"close"},nativeOn:{click:function(t){return e.close()}}})],1)],2),e._v(" "),n("div",{class:["xin-dialog-body",{padding:!e.noPadding}]},[e._t("default")],2),e._v(" "),n("div",{staticClass:"xin-dialog-footer"},[e.$slots.footer?e._t("footer"):n("div",{staticClass:"xin-dialog-footer-default"},[e.confirmVisible?n("xin-button",{attrs:{color:"info",fill:""},on:{click:function(t){return e.confirm()}}},[e._v(e._s(e.confirmLabel))]):e._e(),e._v(" "),e.cancelVisible?n("xin-button",{attrs:{color:"warning",fill:""},on:{click:function(t){return e.cancel()}}},[e._v(e._s(e.cancelLabel))]):e._e()],1)],2)])])],1)])},staticRenderFns:[]};t.a=i},26:function(e,t,n){"use strict";var i=n(11),o=n(27),a=n(0)(i.a,o.a,!1,null,null,null);t.a=a.exports},27:function(e,t,n){"use strict";var i={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{class:["xin-iconfont",this.name]})},staticRenderFns:[]};t.a=i},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26);i.a.install=function(e){e.component(i.a.name,i.a)},t.default=i.a}})});