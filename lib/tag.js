!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tag=t():e.tag=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=99)}({0:function(e,t){e.exports=function(e,t,n,o,r,a){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var u,l="function"==typeof s?s.options:s;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=o),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:s,options:l}}},11:function(e,t,n){"use strict";t.a={name:"xinIcon",components:{},props:{type:{type:String,default:"unicode"},name:{type:String,default:""}},data:function(){return{}},watch:{},mounted:function(){},methods:{}}},138:function(e,t,n){"use strict";var o=n(76),r=n(139),a=n(0)(o.a,r.a,!1,null,null,null);t.a=a.exports},139:function(e,t,n){"use strict";var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["xin-tag",{"xin-tag-default":"default"===e.color,"xin-tag-success":"success"===e.color,"xin-tag-warning":"warning"===e.color,"xin-tag-info":"info"===e.color,"xin-tag-error":"error"===e.color,fill:e.fill,small:e.small}]},[n("span",{staticClass:"xin-tag-content"},[e._v(e._s(e.message))]),e._v(" "),e.closable?n("xin-icon",{attrs:{name:"reeor"},nativeOn:{click:function(t){return e.close(t)}}}):e._e()],1)},staticRenderFns:[]};t.a=o},26:function(e,t,n){"use strict";var o=n(11),r=n(27),a=n(0)(o.a,r.a,!1,null,null,null);t.a=a.exports},27:function(e,t,n){"use strict";var o={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{class:["xin-iconfont",this.name]})},staticRenderFns:[]};t.a=o},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(26);o.a.install=function(e){e.component(o.a.name,o.a)},t.default=o.a},76:function(e,t,n){"use strict";var o=n(6);t.a={name:"xinTag",components:{"xin-icon":o.default},props:{message:{type:String,default:""},small:{type:Boolean,default:!1},color:{type:String,default:"default"},fill:{type:Boolean,default:!1},closable:{type:Boolean,default:!1}},data:function(){return{}},watch:{},mounted:function(){},methods:{close:function(e){e.stopPropagation(),this.$emit("close",this.message)}}}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(138);o.a.install=function(e){e.component(o.a.name,o.a)},t.default=o.a}})});