exports.ids = [43];
exports.modules = {

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("21bd3a80", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c8ac8aa_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c8ac8aa_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c8ac8aa_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c8ac8aa_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c8ac8aa_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header_area{min-height:20px;text-align:center;background:#f5f5f5}@media only screen and (min-width:769px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media (min-width:576px) and (max-width:768px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (min-width:481px) and (max-width:575px){#breadcrumb{position:relative;top:-15px;overflow:hidden}.heading_one{margin-top:-20px}}@media screen and (max-width:481px){#breadcrumb{display:none}.heading_one{padding:10px;font-size:1.2em;margin-bottom:1px;font-family:\"Roboto\",sans-serif;font-weight:700}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/our-terms/index.vue?vue&type=template&id=4c8ac8aa&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('section',{staticClass:"tw-pt-32 lg:tw-pt-32 tw-px-2"},[_vm._ssrNode("<div class=\"tw-bg-white tw-container tw-mx-auto\"><nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\"><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\"><li class=\"tw-inline-flex tw-items-center\"><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\"><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"></path></svg>\n              Home\n            </a></li> <li aria-current=\"page\"><div class=\"tw-flex items-center\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\">Our Terms</span></div></li></ol></nav> <div class=\"header_area tw-mt-1\"><h1 class=\"tw-mt-2 border-top tw-text-center tw-text-red-600 heading_one\">\n        Terms and Conditions\n      </h1></div> <div class=\"tw-p-2\"><p>\n        Nairobi Drinks Limited is the leading drinks delivery company in\n        Kenya. It offers delivery services for orders of alcoholic and\n        non-alcoholic drinks as placed by customers over the various ordering\n        platforms. The ordering platform options are:\n      </p> <ul><li>\n          1. The shopping cart on Nairobi Drinks website and mobile\n          application\n        </li> <li>\n          2. WhatsApp/ SMS/ call on the Nairobi Drinks Limited official number\n          <b>0714798820.</b></li></ul> <p>\n        Deliveries of drinks within Nairobi CBD and Nairobi environs are to be\n        done within 20 minutes while deliveries outside Nairobi are expected\n        to reach the customer within 24 hours after dispatch from Nairobi\n        Drinks Limited. Nairobi Drinks Limited is a legal enterprise and is\n        recognized by the government of Kenya. Nairobi Drinks Limited is only\n        involved in legal activities as dictated by the Kenyan law and shall\n        not accept any illegal dealings.\n      </p> <p>A breakdown of Nairobi Drinks Limited is as below :</p> <ul><li>\n          Nairobi Drinks Limited does not sell alcoholic drinks to persons\n          under the age of 18.\n        </li> <li>\n          Nairobi Drinks Limited only deals with legit products from licensed\n          importers, wholesalers and retailers.\n        </li> <li>\n          Nairobi Drinks Limited is not involved in manufacturing or\n          modification of products and only focuses quality delivery services\n          and great packaging for our clients.\n        </li> <li>\n          Orders can only be canceled before delivery. That is before 15\n          minutes after the order is placed.\n        </li> <li>\n          Payments must only be made through the official payment methods of\n          Nairobi Drinks Limited.\n        </li> <li>Only legal monies shall be accepted as mode of payment.</li> <li>\n          Nairobi Drinks Limited advocates for responsible drinking and shall\n          not be held liable for irresponsible drinking\n        </li> <li>\n          In case of delivery delays and issues, Nairobi Drinks Limited shall\n          notify the client on the developments and arrangements to sort out\n          the delivery.\n        </li> <li>\n          Customers information is confidential and shall not be allowed to\n          any unauthorized personnel.\n        </li></ul> <h5 class=\"tw-font-medium\">AGE</h5> <p>\n        As dictated by the law of Kenya, 18 years and above is the legal\n        drinking age in Kenya. Nairobi Drinks confers with the law of Kenya\n        and shall not knowingly sell alcohol to persons under the age of 18\n        years.\n      </p> <h5 class=\"tw-font-medium\">RESPONSIBLE DRINKING</h5> <p>\n        Nairobi Drinks Limited advocates for responsible drinking and shall\n        not be held liable for irresponsible drinking or damages/ incidences\n        that could occur.\n      </p> <p>\n        Note that excessive drinking of alcohol is harmful to your health.\n        Consumption of alcoholic beverages impairs your ability to drive a car\n        or operate machinery and may cause accidents. Nairobi Drinks Limited\n        largely advocates for sober driving and shall not be held liable for\n        drunk driving. It is Nairobi Drinks Limited mission to reduce road\n        accidents by encouraging only drinking at home by simply ordering for\n        drinks online.\n      </p> <h5 class=\"tw-font-medium\">ORDERS CANCELLATION and DELAYS</h5> <p>\n        Orders are allowed to be canceled only within the first 10 minutes\n        from the time it was placed and a call or message to notify Nairobi\n        Drinks Limited sent to Nairobi Drinks Limited official number,\n        <b>0714798820.</b> In a situation where the order delivery shall\n        delay, Nairobi Drinks will notify the customer on the developments and\n        make arrangements for settlement of the delivery.\n      </p> <h5 class=\"tw-font-medium\">PAYMENT</h5> <p>\n        Payment shall only be made via Nairobi Drinks Limited official payment\n        methods. These are MPESA, Visa, MasterCard, PayPal, Cash (Kenyan\n        Shillings, Dollars or Euros). No faux monies shall be allowed.\n      </p> <h5 class=\"tw-font-medium\">DELIVERY CHARGES</h5> <p>\n        Nairobi Drinks Limited offers free delivery within Nairobi CBD and 6\n        kilometers square from Nairobi CBD. Customers ordering for deliveries\n        to areas above 6 kilometers from Nairobi CBD shall have to incur\n        delivery cost as negotiated before dispatch of the product from\n        Nairobi Drinks Limited.\n      </p> <h5 class=\"tw-font-medium\">BUYING ON CREDIT</h5> <p>\n        Nairobi Drinks Limited does not offer credit services unless there is\n        a written legal agreement.\n      </p> <p>HEALTH CONCERNS</p> <p>\n        Alcohol and its health benefits or hazards is entirely the\n        responsibility of the customers. Nairobi Drinks Limited will only\n        offer information on the quality of drinks in terms of age of the\n        drink and the tasting qualities of the drink and not on the health\n        effects that might be resultant from drinking. Nairobi Drinks Limited\n        is however concerned for their customers well being and calls for\n        responsible drinking and advises that customers should look for\n        medical attention in case of abnormal reactions. It should be noted\n        that Nairobi Drinks Limited deals with legal drinks and is only\n        involved with licensed alcohol distributors for legal brands alone.\n      </p> <h5 class=\"tw-font-medium\">PRIVACY OF CUSTOMER INFORMATION</h5> <p>\n        Nairobi Drinks Limited works best and promises to keep the information\n        of its customers confidential. Any information thereby provided by the\n        customer shall not be released to any unauthorized personnel. In\n        addition to this, receipts can only be collected or recollected by the\n        exact persons that placed the order.\n      </p> <h5 class=\"tw-font-medium\">CUSTOMER FEEDBACK</h5> <p>\n        Customers are highly regarded at Nairobi Drinks Limited and are\n        advised to give their service feedback to Nairobi Drinks Limited\n        through our social networks or call/ text/ WhatsApp\n        <b>0714798820.</b> Nairobi Drinks Limited will always work on\n        bettering the customers experience and feedback is of great\n        importance.\n      </p></div></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/our-terms/index.vue?vue&type=template&id=4c8ac8aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/our-terms/index.vue?vue&type=script&lang=js&
/* harmony default export */ var our_termsvue_type_script_lang_js_ = ({name:'Terms',data(){return{};},async asyncData({$http}){try{const meta=await $http.$get('metas/get-by-category/our-terms').then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){const meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/our-terms/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_our_termsvue_type_script_lang_js_ = (our_termsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/our-terms/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_our_termsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3090671e"
  
)

/* harmony default export */ var our_terms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map