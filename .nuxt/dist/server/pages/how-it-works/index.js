exports.ids = [38];
exports.modules = {

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("90c0fd32", content, true, context)
};

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16944384_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16944384_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16944384_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16944384_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16944384_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header_area{min-height:20px;text-align:center;background:#f5f5f5}@media screen and (min-width:769px){#breadcrumb{display:none}.heading_one{margin-top:-20px}}@media (min-width:576px) and (max-width:768px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (min-width:481px) and (max-width:575px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (max-width:481px){#breadcrumb{position:relative;top:37px;overflow:hidden}.heading_one{padding:10px;font-size:1.2em;margin-bottom:1px;font-family:\"Roboto\",sans-serif;font-weight:700}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/how-it-works/index.vue?vue&type=template&id=16944384&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('section',{staticClass:"tw-pt-16 lg:tw-pt-32 tw-px-2"},[_vm._ssrNode("<div class=\"tw-bg-white tw-container tw-mx-auto tw-py-5\"><nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\"><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\"><li class=\"tw-inline-flex tw-items-center\"><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\"><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"></path></svg>\n              Home\n            </a></li> <li aria-current=\"page\"><div class=\"tw-flex items-center\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\">How it works</span></div></li></ol></nav> <div class=\"tw-bg-gray-100 tw-mt-1\"><h1 class=\"tw-mt-2 border-top tw-capitalize tw-text-center tw-text-red-600 heading_one\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.meta.headerOne||'')+"\n      ")+"</h1></div> <div class=\"tw-p-2\"><p>\n        Liquorspring is an online platform that links Liquorspring Limited to its customers for satisfactory\n        delivery of alcoholic and nonalcoholic drinks.\n        Liquorspring mobile application is downloaded and installed from play store or app store.\n        Liquorspring website is reached through the web address <a href=\"https://liquorspring.co.ke\">www.liquorspring.co.ke</a>.\n        Both the website and mobile application work similarly and involves self selection of drinks, placing orders\n        and providing delivery information by the users.\n      </p> <h6>How it works :</h6> <ul><li>1. Users are allowed to call <b class=\"text-danger\">0714798820</b> and order drinks directly. or</li> <li>2. The user / customer enters the mobile app or the website.</li> <li>3. Inside the website/ app the user could do a couple of things including searching for drinks from the\n          search or filter out drinks using the dropdown on the left.</li> <li>4. On arrival to a desired product, the product could be ordered in various ways. This ways include via\n          call, SMS, whatsApp or by adding to the shopping cart.</li> <li>5. When using the shopping cart the user will add a product to the shopping cart and if they want to\n          continue shopping they will hit the continue shopping button and continue adding more products to the\n          shopping cart.</li> <li>6. At this point they might also remove products they had added to cart by hitting the remove button and\n          also check the totals of their billings according to the products in the cart.</li> <li>7. After the user is satisfied with the products in the shopping cart they shall use the checkout button\n          and get a prompt to fill in the check out form for crucial information such as name, location, street name\n          and house number.</li> <li>8. After the user has filled the checkout form they shall use the order button to place the order.</li> <li>9. Liquorspring Limited will then receive and process the order to reach the customer 20 minutes after\n          processing.</li> <li>10. Payments are to be made according to the customers will. The available options of payment are <b>MPESA,\n          Visa, Mastercard, PayPal and Cash</b>. Payment is allowable to be made on arrival of the products to the\n          customer.</li></ul> <p> Liquorspring is thus easy to use and customers are advised to use the online platform to reduce call\n        traffic for faster dispatches.\n        Liquorspring Limited is a law abiding entity and all the operations are legal and open.\n        The operations are subject to the terms and conditions of Liquorspring Limited.\n      </p></div></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/how-it-works/index.vue?vue&type=template&id=16944384&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/how-it-works/index.vue?vue&type=script&lang=js&
/* harmony default export */ var how_it_worksvue_type_script_lang_js_ = ({name:'HowItWorks',data(){return{};},async asyncData({$http}){try{const meta=await $http.$get('metas/get-by-category/how-it-works').then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){const meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/how-it-works/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_how_it_worksvue_type_script_lang_js_ = (how_it_worksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/how-it-works/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(180)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_how_it_worksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "68151d08"
  
)

/* harmony default export */ var how_it_works = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map