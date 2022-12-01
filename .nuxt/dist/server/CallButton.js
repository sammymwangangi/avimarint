exports.ids = [2];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("616d512f", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_call_vue_vue_type_style_index_0_id_0eeb13b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_call_vue_vue_type_style_index_0_id_0eeb13b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_call_vue_vue_type_style_index_0_id_0eeb13b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_call_vue_vue_type_style_index_0_id_0eeb13b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_call_vue_vue_type_style_index_0_id_0eeb13b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".floating_action[data-v-0eeb13b2]{z-index:2000;position:fixed;top:80%;right:0;background-color:transparent;color:#fff;border-radius:100px;min-width:95px;margin-right:-30px;min-height:36px}.relative[data-v-0eeb13b2]{position:relative}.call-action[data-v-0eeb13b2]{text-align:center;border-radius:100%;background-color:#e64a19;position:absolute;width:40px;height:40px;padding:10px 4px 4px;margin-top:-3px;font-size:22px}.floating_action a[data-v-0eeb13b2]{color:#fff;text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/call.vue?vue&type=template&id=0eeb13b2&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"floating_action"},[_vm._ssrNode("<span class=\"call\" data-v-0eeb13b2><span class=\"relative\" data-v-0eeb13b2><a"+_vm._ssrAttr("href",`tel:${_vm.phone}`)+" data-v-0eeb13b2><i aria-hidden=\"true\" class=\"fas fa-phone call-action\" data-v-0eeb13b2></i></a></span></span>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/shared/call.vue?vue&type=template&id=0eeb13b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/call.vue?vue&type=script&lang=js&
/* harmony default export */ var callvue_type_script_lang_js_ = ({name:'FloatingActionBtn',data(){return{position:0,phone:'+254705646186'};},methods:{handleScroll(){const position=window.scrollY;this.position=position;console.log('position',position);},created(){this.has_background=this.position>70;},beforeMount(){window.addEventListener('scroll',this.handleScroll);},beforeDestroy(){window.removeEventListener('scroll',this.handleScroll);}}});
// CONCATENATED MODULE: ./components/shared/call.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_callvue_type_script_lang_js_ = (callvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/shared/call.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(210)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_callvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0eeb13b2",
  "23abb2ec"
  
)

/* harmony default export */ var call = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=CallButton.js.map