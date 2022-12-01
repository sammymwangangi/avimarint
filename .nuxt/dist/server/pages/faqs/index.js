exports.ids = [36];
exports.modules = {

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("727d5ab4", content, true, context)
};

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fd52eb7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fd52eb7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fd52eb7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fd52eb7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7fd52eb7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header_area{min-height:20px;text-align:center;background:#f5f5f5}@media screen and (min-width:769px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media (min-width:576px) and (max-width:768px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (min-width:481px) and (max-width:575px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (max-width:481px){#breadcrumb{display:none}.heading_one{padding:10px;font-size:1.2em;margin-bottom:1px;font-family:\"Roboto\",sans-serif;font-weight:700}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/faqs/index.vue?vue&type=template&id=7fd52eb7&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<section class=\"tw-pt-32 lg:tw-pt-32\"><div class=\"tw-bg-white tw-container tw-mx-auto tw-px-2\"><nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\"><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\"><li class=\"tw-inline-flex tw-items-center\"><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\"><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"></path></svg>\n              Home\n            </a></li> <li aria-current=\"page\"><div class=\"tw-flex items-center\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\">Faqs</span></div></li></ol></nav> <span class=\"header_area tw-mt-1\"><h1 class=\"tw-mt-2 border-top tw-capitalize tw-text-center tw-text-red-600 heading_one\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.meta.headerOne||'')+"\n        ")+"</h1></span> <div class=\"tw-p-2\"><ul class=\"list-group\"><li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">1. Are you open 24/7.</h5> <p>\n              yes we are open 24/7 and we supply drinks at all times anywhere\n              within Nairobi for free and other places at discounted prices.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              2. Do you have a physical outlet and where are you located ?\n            </h5> <p>\n              Liquorspring is an online shop and we do not currently have a\n              physical outlet\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              3. Which is the most expensive whiskey?\n            </h5> <p>\n              Liquorspring stocks some of the most expensive whiskeys that\n              one can find.\n            </p> <p>This are :</p> <ul><li>1. The macallan no. 6 @ ksh 600000</li> <li>2. Remy martin louis xiii @ ksh 450,000</li> <li>3. Hennessy paradis @ ksh 250,000</li> <li>4. Johnnie walker odyssey @ ksh 150,000</li></ul></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              4. Which is the most expensive wine?\n            </h5> <p>\n              Some of the most expensive wines stocked by Liquorspring\n              include:\n            </p> <ul><li>1. Simonsig rose @ kshs5999.</li> <li>2. Simonsig sparkling brut @ ksh5999</li></ul></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">5. Which is the sweetest wine?</h5> <p>\n              Some of the sweet wines stocked in Liquorspring are inclusive\n              of : red sweet wines (mara nyekundu, martini rosso, robertson\n              winery sweet red) white sweet wines (robertson winery sweet\n              white, 4th street white sweet, bird and bees white sweet malbec)\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">6. Which is the best champagne?</h5> <p>Veuve clicquot la grande dame</p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              7. What is the best wine for ladies?\n            </h5> <p>\n              Most ladies will go for red sweet wines. Other great wines for\n              ladies are inclusive of shiraz and pinotage. Call Liquorspring\n              to explain your taste preferences and get recommendations.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              8. Which drink can a pregnant woman have?\n            </h5> <p>\n              Pregnant women should have nonalcoholic drinks such as chamdor\n              or other prescriptions as per their doctors.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">9. Is there delivery fee?</h5> <p>\n              Liquorspring delivers drinks and products for free within\n              Nairobi. Deliveries outside of Nairobi will inccur some delivery\n              fee as discussed before the delivery is dispatched from Liquorspring.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              10. How do I place my order online?\n            </h5> <p>\n              It is simple. Simply visit our website\n              <b>www.liquorspring.co.ke</b> or download our mobile\n              application (liquorspring) on play store or app store.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              11. Can you deliver for someone else on my behalf?\n            </h5> <p>\n              Yes . All we shall require is delivery details.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">12. Which is the best gift pack?</h5> <p>\n              According to the occasion Liquorspring has a wide variety of\n              gift pack and advice on this will be done for free.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              13. Can you deliver alcohol in Embakasi?\n            </h5> <p>YES we can.</p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">\n              14. Do you have wholesale prices?\n            </h5> <p>\n              Yes we have discounted wholesale prices for all our products.\n            </p></li> <li class=\"list-group-item\"><h5 class=\"tw-text-blue-800\">15. Can I have your pricelist?</h5> <p>\n              Yes you can as per the drinks you desire or comprehensively.\n            </p></li></ul></div></div></section>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/faqs/index.vue?vue&type=template&id=7fd52eb7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/faqs/index.vue?vue&type=script&lang=js&
/* harmony default export */ var faqsvue_type_script_lang_js_ = ({name:'Faqs',data(){return{};},async asyncData({$http}){try{const meta=await $http.$get('metas/get-by-category/faqs').then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){const meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/faqs/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_faqsvue_type_script_lang_js_ = (faqsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/faqs/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_faqsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "192693e8"
  
)

/* harmony default export */ var faqs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map