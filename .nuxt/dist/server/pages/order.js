exports.ids = [42];
exports.modules = {

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("195a5676", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_84342d10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_84342d10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_84342d10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_84342d10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_84342d10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (min-width:769px){#breadcrumb{position:relative;top:-15px;overflow:hidden}}@media (min-width:576px) and (max-width:768px){#breadcrumb{position:relative;top:-15px;overflow:hidden}}@media screen and (min-width:481px) and (max-width:575px){#breadcrumb{position:relative;top:-15px;overflow:hidden}}@media screen and (max-width:481px){#breadcrumb{position:relative;top:37px;overflow:hidden}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order.vue?vue&type=template&id=84342d10&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<section class=\"tw-pt-16 lg:tw-pt-32\">","</section>",[_vm._ssrNode("<div class=\"tw-container tw-mx-auto tw-py-5\">","</div>",[_vm._ssrNode("<nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\"><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\"></ol></nav> <h5 class=\"tw-text-green-600\"><strong>Order placed successfully</strong></h5> "),_vm._ssrNode("<div class=\"card tw-my-3 tw-rounded-0 tw-p-2 tw-shadow\" style=\"border-left:3px solid #EC2326\">","</div>",[_vm._ssrNode("<p>\n          Hello, we have received your order, we will call you in a few\n          minutes<br>\n          as we dispatch your products from our stores. Thank you.\n        </p> "),_vm._ssrNode("<div class=\"tw-text-right\">","</div>",[_vm._ssrNode("<a>","</a>",[_c('NuxtImg',{staticStyle:{"cursor":"pointer","width":"100px","height":"50px"},attrs:{"src":`/android.webp`,"alt":"Google play store"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<a>","</a>",[_c('NuxtImg',{staticStyle:{"cursor":"pointer","width":"100px","height":"50px"},attrs:{"src":`/ios.webp`,"alt":"Apple store"}})],1)],2)],2)],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/order.vue?vue&type=template&id=84342d10&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order.vue?vue&type=script&lang=js&
/* harmony default export */ var ordervue_type_script_lang_js_ = ({async asyncData({$http}){try{const meta=await $http.$get(`/metas/get-by-category/order`).then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){const meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/order.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ordervue_type_script_lang_js_ = (ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/order.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(186)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6f56f7f6"
  
)

/* harmony default export */ var order = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=order.js.map