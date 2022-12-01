exports.ids = [33];
exports.modules = {

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4f772813", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33bfd0f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33bfd0f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33bfd0f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33bfd0f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33bfd0f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header_area{min-height:20px;text-align:center;background:#f5f5f5}@media screen and (min-width:769px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media (min-width:576px) and (max-width:768px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (min-width:481px) and (max-width:575px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (max-width:481px){#breadcrumb{position:relative;top:37px;overflow:hidden}.heading_one{padding:10px;font-size:1.2em;margin-bottom:1px;font-family:\"Roboto\",sans-serif;font-weight:700}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/corporate-purchase/index.vue?vue&type=template&id=33bfd0f1&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<section class=\"tw-pt-32 lg:tw-pt-32\"><div class=\"tw-bg-white tw-container tw-mx-auto tw-py-5\"><nav aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\"><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\"><li class=\"tw-inline-flex tw-items-center\"><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\"><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"></path></svg>\n              Home\n            </a></li> <li><div class=\"tw-flex tw-items-center\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg> <a"+_vm._ssrAttr("href",`/${_vm.$route.params.category}`)+" class=\"tw-no-underline tw-text-gray-700 hover:tw-text-gray-900 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-400 dark:hover:tw-text-white\">"+_vm._ssrEscape(_vm._s(_vm._f("capitalize")(_vm.$route.params.category)))+"</a></div></li> <li aria-current=\"page\"><div class=\"tw-flex items-center\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\">Corporate Purchase</span></div></li></ol></nav> <div class=\"header_area tw-mt-1\"><h1 class=\"tw-mt-2 border-top tw-text-center tw-capitalize tw-text-red-600 heading_one\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.meta.headerOne||'')+"\n        ")+"</h1></div> <div class=\"tw-p-2\"><p>Corporate purchase of alcoholic and non alcoholic drinks is of high regard at <b>Liquorspring Limited.</b> Quality\n        service from timely supply of drinks and other complimentary products and clear billing is assurance to our\n        esteemed buyers. Liquorspring Limited being a drinks expert shall offer without charge the consultancy on\n        matters such as what drinks are best and the price list for clear budgeting of the corporate or whatever\n        advice\n        the corporate might require. It is our desire to make your corporate occasions comparable to none and for your\n        office experience to be the best by stocking the best of drinks for you.</p> <p><b>Liquorspring Limited</b> is in a position and is best suited to supply corporate purchases of however minimal\n        or\n        extensive the corporate would want to go. Check for a background research on the vast drinks we stock on our\n        website or mobile app or simply reach us on <b>0714798820</b>.</p> <p>Arrangements for payments are easy as Liquorspring Limited offers a variety of payment methods from cards\n        ,mpesa to cash.</p> <p>For record keeping and matters around filing, Liquorspring Limited offers receipts of sale and ETRs or any\n        other reference or support documentation the corporate might deem important.\n\n        Choose the best. Keep it Liquorspring.</p></div></div></section>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/corporate-purchase/index.vue?vue&type=template&id=33bfd0f1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/corporate-purchase/index.vue?vue&type=script&lang=js&
/* harmony default export */ var corporate_purchasevue_type_script_lang_js_ = ({name:'CorporatePurchase',data(){return{};},async asyncData({$http}){try{const meta=await $http.$get('metas/get-by-category/corporate-purchase').then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){const meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/corporate-purchase/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_corporate_purchasevue_type_script_lang_js_ = (corporate_purchasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/corporate-purchase/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_corporate_purchasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b94f6b98"
  
)

/* harmony default export */ var corporate_purchase = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map