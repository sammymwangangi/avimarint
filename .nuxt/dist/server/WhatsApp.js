exports.ids = [5];
exports.modules = {

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("464ef4e2", content, true, context)
};

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_vue_vue_type_style_index_0_id_84a4bf26_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_vue_vue_type_style_index_0_id_84a4bf26_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_vue_vue_type_style_index_0_id_84a4bf26_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_vue_vue_type_style_index_0_id_84a4bf26_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_vue_vue_type_style_index_0_id_84a4bf26_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".floating_action[data-v-84a4bf26]{z-index:2000;position:fixed;top:91%;right:0;background-color:transparent;color:#fff;border-radius:100px;min-width:95px;margin-right:-30px;min-height:36px}.relative[data-v-84a4bf26]{position:relative}.call-action[data-v-84a4bf26]{text-align:center;border-radius:100%;background-color:#00e676;position:absolute;width:40px;height:40px;padding:9px 4px 4px;margin-top:-3px;font-size:22px}.floating_action a[data-v-84a4bf26]{color:#fff;text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/whatsapp.vue?vue&type=template&id=84a4bf26&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"floating_action"},[_vm._ssrNode("<span class=\"call\" data-v-84a4bf26><span class=\"relative\" data-v-84a4bf26><a"+_vm._ssrAttr("href",`https://wa.me/${_vm.phone}`)+" data-v-84a4bf26><i aria-hidden=\"true\" class=\"fab fa-whatsapp call-action\" data-v-84a4bf26></i></a></span></span>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/shared/whatsapp.vue?vue&type=template&id=84a4bf26&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/whatsapp.vue?vue&type=script&lang=js&
/* harmony default export */ var whatsappvue_type_script_lang_js_ = ({name:'FloatingActionBtn',data(){return{position:0,phone:'+254705646186'};},methods:{handleScroll(){const position=window.scrollY;this.position=position;console.log('position',position);},created(){this.has_background=this.position>70;},beforeMount(){window.addEventListener('scroll',this.handleScroll);},beforeDestroy(){window.removeEventListener('scroll',this.handleScroll);}}});
// CONCATENATED MODULE: ./components/shared/whatsapp.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_whatsappvue_type_script_lang_js_ = (whatsappvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/shared/whatsapp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(212)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_whatsappvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "84a4bf26",
  "c0d505c0"
  
)

/* harmony default export */ var whatsapp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=WhatsApp.js.map