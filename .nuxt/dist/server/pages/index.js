exports.ids = [39,1,11];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4b20e979", content, true, context)
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5d08f02a", content, true, context)
};

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_2e40e4ca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_2e40e4ca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_2e40e4ca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_2e40e4ca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_2e40e4ca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (min-width:769px){#carousel-1{position:relative;top:80px;overflow:hidden}.carousel-indicators li{background-color:#ff1f1f}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}}@media (min-width:576px) and (max-width:768px){.carousel-indicators li{background-color:#ff1f1f}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}}@media screen and (min-width:481px) and (max-width:575px){.carousel-indicators li{background-color:#ff1f1f}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}}@media screen and (max-width:481px){#carousel-1{position:relative;top:110px;overflow:hidden}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProducts_vue_vue_type_style_index_0_id_2b43780e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProducts_vue_vue_type_style_index_0_id_2b43780e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProducts_vue_vue_type_style_index_0_id_2b43780e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProducts_vue_vue_type_style_index_0_id_2b43780e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProducts_vue_vue_type_style_index_0_id_2b43780e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-btn[data-v-2b43780e]:focus,.modal-open .modal[data-v-2b43780e]{outline:none}i.heart[data-v-2b43780e]{color:#ff4081}.cart-modal[data-v-2b43780e]{border-radius:0}.ribbon[data-v-2b43780e]{width:150px;height:24px;margin-left:-50px;margin-top:15px;transform:rotate(-45deg)}@media screen and (max-width:481px){.product-quantity[data-v-2b43780e]{font-size:.8em}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("274f5238", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=template&id=2e40e4ca&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm.carousels.length>1?_c('b-carousel',{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{"id":"carousel-1","interval":4000,"controls":"","indicators":""},on:{"sliding-start":_vm.onSlideStart,"sliding-end":_vm.onSlideEnd},model:{value:_vm.slide,callback:function($$v){_vm.slide=$$v;},expression:"slide"}},_vm._l(_vm.carousels,function(carousel){return _c('b-carousel-slide',{key:carousel._id,attrs:{"caption":carousel.caption,"text":carousel.details,"img-src":"https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg"},scopedSlots:_vm._u([{key:"img",fn:function(){return[_c('NuxtImg',{staticClass:"d-block img-fluid w-100",attrs:{"src":"https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg","alt":"Avimar"}})];},proxy:true}],null,true)});}),1):_c('b-carousel',{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{"id":"carousel-1","interval":4000},on:{"sliding-start":_vm.onSlideStart,"sliding-end":_vm.onSlideEnd},model:{value:_vm.slide,callback:function($$v){_vm.slide=$$v;},expression:"slide"}},_vm._l(_vm.carousels,function(carousel){return _c('b-carousel-slide',{key:carousel._id,attrs:{"caption":carousel.caption,"text":carousel.details,"img-src":"https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg"},scopedSlots:_vm._u([{key:"img",fn:function(){return[_c('NuxtImg',{staticClass:"d-block img-fluid w-100",attrs:{"src":"https://portiasoftwares.com/wp-content/uploads/2022/11/shopping-scaled.jpg","alt":"Avimar"}})];},proxy:true}],null,true)});}),1)],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=template&id=2e40e4ca&

// EXTERNAL MODULE: external "vue-window-size"
var external_vue_window_size_ = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=script&lang=js&
/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({mixins:[external_vue_window_size_["vueWindowSizeMixin"]],props:{carousels:{required:true}},data(){return{slide:0,sliding:null};},methods:{onSlideStart(){this.sliding=true;},onSlideEnd(){this.sliding=false;}}});
// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Carousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "60c0150c"
  
)

/* harmony default export */ var Carousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeProducts.vue?vue&type=template&id=2b43780e&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"tw-grid tw-grid-cols-2 md:tw-grid-cols-4 lg:tw-grid-cols-6 tw-gap-2\" data-v-2b43780e>","</div>",[_vm._ssrNode("<div class=\"tw-flex tw-flex-col tw-min-h-[360px] tw-bg-white tw-relative tw-p-1 tw-rounded-md tw-transition tw-duration-700 tw-ease-in-out tw-transform hover:-tw-translate-y-1 hover:tw-scale-100 tw-overflow-hidden tw-border tw-border-gray-600\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-flex-1 tw-no-underline",attrs:{"to":"/product"}},[_c('div',{staticClass:"ribbon tw-absolute tw-top-0 tw-left-0 tw-bg-gray-900 tw-text-white tw-font-medium tw-text-xs tw-text-center tw-uppercase tw-p-1 tw-shadow-md tw-shadow-gray-600/30 tw-whitespace-no-wrap"},[_vm._v("\n          Offer\n        ")]),_vm._v(" "),_c('NuxtImg',{staticClass:"img-fluid",attrs:{"src":"/payroll.jpg","loading":"lazy","width":"320","height":"362","alt":"product-image"}})],1),_vm._ssrNode(" <div class=\"tw-text-gray-500 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto\" data-v-2b43780e>\n        Men\n      </div> "),_vm._ssrNode("<div class=\"tw-text-left\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-left",attrs:{"to":"/"}},[_c('div',{staticClass:"hover:tw-z-50 tw-text-gray-600 tw-font-semibold tw-text-sm tw-capitalize tw-line-clamp-2"},[_vm._v("\n            Fashion Men's Suit\n          ")]),_vm._v(" "),_c('ul',{staticClass:"list-unstyled tw-space-y-1 tw-text-xs"},[_c('li',{staticClass:"tw-flex tw-justify-start",staticStyle:{"font-family":"'Roboto', sans-serif","margin-bottom":"-1rem"}},[_c('div',{staticClass:"tw-text-gray-800"},[_vm._v("XL")]),_vm._v(" "),_c('span',{staticClass:"tw-font-semibold tw-text-gray-900 tw-ml-2"},[_vm._v("Ksh 10,000")])])])])],1),_vm._ssrNode(" <div class=\"tw-flex tw-justify-around tw-px-2 tw-py-2\" style=\"font-family: 'Roboto', sans-serif; margin-top: 5px\" data-v-2b43780e><div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-shopping-cart-fill ri-lg\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-whatsapp-fill ri-lg text-success\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" style=\"cursor: pointer\" data-v-2b43780e><i class=\"ri-heart-3-fill ri-lg heart\" data-v-2b43780e></i></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-flex tw-flex-col tw-min-h-[360px] tw-bg-white tw-relative tw-p-1 tw-rounded-md tw-transition tw-duration-700 tw-ease-in-out tw-transform hover:-tw-translate-y-1 hover:tw-scale-100 tw-overflow-hidden tw-border tw-border-gray-600\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-flex-1 tw-no-underline",attrs:{"to":"/product"}},[_c('div',{staticClass:"ribbon tw-absolute tw-top-0 tw-left-0 tw-bg-gray-900 tw-text-white tw-font-medium tw-text-xs tw-text-center tw-uppercase tw-p-1 tw-shadow-md tw-shadow-gray-600/30 tw-whitespace-no-wrap"},[_vm._v("\n          Offer\n        ")]),_vm._v(" "),_c('NuxtImg',{staticClass:"img-fluid",attrs:{"src":"/laptop.jpg","loading":"lazy","width":"320","height":"362","alt":"product-image"}})],1),_vm._ssrNode(" <div class=\"tw-text-gray-500 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto\" data-v-2b43780e>\n        Laptops\n      </div> "),_vm._ssrNode("<div class=\"tw-text-left\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-left",attrs:{"to":"/"}},[_c('div',{staticClass:"hover:tw-z-50 tw-text-gray-600 tw-font-semibold tw-text-sm tw-capitalize tw-line-clamp-2"},[_vm._v("\n          MacBook Pro 16\"\n          ")]),_vm._v(" "),_c('ul',{staticClass:"list-unstyled tw-space-y-1 tw-text-xs"},[_c('li',{staticClass:"tw-flex tw-justify-start",staticStyle:{"font-family":"'Roboto', sans-serif","margin-bottom":"-1rem"}},[_c('div',{staticClass:"tw-text-gray-800"},[_vm._v("1TB 2021 32GB")]),_vm._v(" "),_c('span',{staticClass:"tw-font-semibold tw-text-gray-900 tw-ml-2"},[_vm._v("Ksh 480,000")])])])])],1),_vm._ssrNode(" <div class=\"tw-flex tw-justify-around tw-px-2 tw-py-2\" style=\"font-family: 'Roboto', sans-serif; margin-top: 5px\" data-v-2b43780e><div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-shopping-cart-fill ri-lg\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-whatsapp-fill ri-lg text-success\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" style=\"cursor: pointer\" data-v-2b43780e><i class=\"ri-heart-3-fill ri-lg heart\" data-v-2b43780e></i></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-flex tw-flex-col tw-min-h-[360px] tw-bg-white tw-relative tw-p-1 tw-rounded-md tw-transition tw-duration-700 tw-ease-in-out tw-transform hover:-tw-translate-y-1 hover:tw-scale-100 tw-overflow-hidden tw-border tw-border-gray-600\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-flex-1 tw-no-underline",attrs:{"to":"/product"}},[_c('NuxtImg',{staticClass:"img-fluid",attrs:{"src":"/phone.jpg","loading":"lazy","width":"320","height":"362","alt":"product-image"}})],1),_vm._ssrNode(" <div class=\"tw-text-gray-500 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto\" data-v-2b43780e>\n        Mobile phones\n      </div> "),_vm._ssrNode("<div class=\"tw-text-left\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-left",attrs:{"to":"/"}},[_c('div',{staticClass:"hover:tw-z-50 tw-text-gray-600 tw-font-semibold tw-text-sm tw-capitalize tw-line-clamp-2"},[_vm._v("\n          One Plus Oneplus 10 Pro\n          ")]),_vm._v(" "),_c('ul',{staticClass:"list-unstyled tw-space-y-1 tw-text-xs"},[_c('li',{staticClass:"tw-flex tw-justify-start",staticStyle:{"font-family":"'Roboto', sans-serif","margin-bottom":"-1rem"}},[_c('div',{staticClass:"tw-text-gray-800"},[_vm._v("256gb 12gb Ram")]),_vm._v(" "),_c('span',{staticClass:"tw-font-semibold tw-text-gray-900 tw-ml-2"},[_vm._v("Ksh 110,000")])])])])],1),_vm._ssrNode(" <div class=\"tw-flex tw-justify-around tw-px-2 tw-py-2\" style=\"font-family: 'Roboto', sans-serif; margin-top: 5px\" data-v-2b43780e><div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-shopping-cart-fill ri-lg\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-whatsapp-fill ri-lg text-success\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" style=\"cursor: pointer\" data-v-2b43780e><i class=\"ri-heart-3-fill ri-lg heart\" data-v-2b43780e></i></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-flex tw-flex-col tw-min-h-[360px] tw-bg-white tw-relative tw-p-1 tw-rounded-md tw-transition tw-duration-700 tw-ease-in-out tw-transform hover:-tw-translate-y-1 hover:tw-scale-100 tw-overflow-hidden tw-border tw-border-gray-600\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-flex-1 tw-no-underline",attrs:{"to":"/product"}},[_c('NuxtImg',{staticClass:"img-fluid",attrs:{"src":"/placeholder.jpg","loading":"lazy","width":"320","height":"362","alt":"product-image"}})],1),_vm._ssrNode(" <div class=\"tw-text-gray-500 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto\" data-v-2b43780e>\n        Men\n      </div> "),_vm._ssrNode("<div class=\"tw-text-left\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-left",attrs:{"to":"/"}},[_c('div',{staticClass:"hover:tw-z-50 tw-text-gray-600 tw-font-semibold tw-text-sm tw-capitalize tw-line-clamp-2"},[_vm._v("\n            Fashion Men's Suit\n          ")]),_vm._v(" "),_c('ul',{staticClass:"list-unstyled tw-space-y-1 tw-text-xs"},[_c('li',{staticClass:"tw-flex tw-justify-start",staticStyle:{"font-family":"'Roboto', sans-serif","margin-bottom":"-1rem"}},[_c('div',{staticClass:"tw-text-gray-800"},[_vm._v("XL")]),_vm._v(" "),_c('span',{staticClass:"tw-font-semibold tw-text-gray-900 tw-ml-2"},[_vm._v("Ksh 10,000")])])])])],1),_vm._ssrNode(" <div class=\"tw-flex tw-justify-around tw-px-2 tw-py-2\" style=\"font-family: 'Roboto', sans-serif; margin-top: 5px\" data-v-2b43780e><div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-shopping-cart-fill ri-lg\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-whatsapp-fill ri-lg text-success\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" style=\"cursor: pointer\" data-v-2b43780e><i class=\"ri-heart-3-fill ri-lg heart\" data-v-2b43780e></i></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-flex tw-flex-col tw-min-h-[360px] tw-bg-white tw-relative tw-p-1 tw-rounded-md tw-transition tw-duration-700 tw-ease-in-out tw-transform hover:-tw-translate-y-1 hover:tw-scale-100 tw-overflow-hidden tw-border tw-border-gray-600\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-flex-1 tw-no-underline",attrs:{"to":"/product"}},[_c('NuxtImg',{staticClass:"img-fluid",attrs:{"src":"/placeholder.jpg","loading":"lazy","width":"320","height":"362","alt":"product-image"}})],1),_vm._ssrNode(" <div class=\"tw-text-gray-500 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto\" data-v-2b43780e>\n        Men\n      </div> "),_vm._ssrNode("<div class=\"tw-text-left\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-left",attrs:{"to":"/"}},[_c('div',{staticClass:"hover:tw-z-50 tw-text-gray-600 tw-font-semibold tw-text-sm tw-capitalize tw-line-clamp-2"},[_vm._v("\n            Fashion Men's Suit\n          ")]),_vm._v(" "),_c('ul',{staticClass:"list-unstyled tw-space-y-1 tw-text-xs"},[_c('li',{staticClass:"tw-flex tw-justify-start",staticStyle:{"font-family":"'Roboto', sans-serif","margin-bottom":"-1rem"}},[_c('div',{staticClass:"tw-text-gray-800"},[_vm._v("XL")]),_vm._v(" "),_c('span',{staticClass:"tw-font-semibold tw-text-gray-900 tw-ml-2"},[_vm._v("Ksh 10,000")])])])])],1),_vm._ssrNode(" <div class=\"tw-flex tw-justify-around tw-px-2 tw-py-2\" style=\"font-family: 'Roboto', sans-serif; margin-top: 5px\" data-v-2b43780e><div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-shopping-cart-fill ri-lg\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-whatsapp-fill ri-lg text-success\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" style=\"cursor: pointer\" data-v-2b43780e><i class=\"ri-heart-3-fill ri-lg heart\" data-v-2b43780e></i></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-flex tw-flex-col tw-min-h-[360px] tw-bg-white tw-relative tw-p-1 tw-rounded-md tw-transition tw-duration-700 tw-ease-in-out tw-transform hover:-tw-translate-y-1 hover:tw-scale-100 tw-overflow-hidden tw-border tw-border-gray-600\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-flex-1 tw-no-underline",attrs:{"to":"/product"}},[_c('NuxtImg',{staticClass:"img-fluid",attrs:{"src":"/placeholder.jpg","loading":"lazy","width":"320","height":"362","alt":"product-image"}})],1),_vm._ssrNode(" <div class=\"tw-text-gray-500 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto\" data-v-2b43780e>\n        Men\n      </div> "),_vm._ssrNode("<div class=\"tw-text-left\" data-v-2b43780e>","</div>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-left",attrs:{"to":"/"}},[_c('div',{staticClass:"hover:tw-z-50 tw-text-gray-600 tw-font-semibold tw-text-sm tw-capitalize tw-line-clamp-2"},[_vm._v("\n            Fashion Men's Suit\n          ")]),_vm._v(" "),_c('ul',{staticClass:"list-unstyled tw-space-y-1 tw-text-xs"},[_c('li',{staticClass:"tw-flex tw-justify-start",staticStyle:{"font-family":"'Roboto', sans-serif","margin-bottom":"-1rem"}},[_c('div',{staticClass:"tw-text-gray-800"},[_vm._v("XL")]),_vm._v(" "),_c('span',{staticClass:"tw-font-semibold tw-text-gray-900 tw-ml-2"},[_vm._v("Ksh 10,000")])])])])],1),_vm._ssrNode(" <div class=\"tw-flex tw-justify-around tw-px-2 tw-py-2\" style=\"font-family: 'Roboto', sans-serif; margin-top: 5px\" data-v-2b43780e><div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-shopping-cart-fill ri-lg\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" data-v-2b43780e><i class=\"ri-whatsapp-fill ri-lg text-success\" data-v-2b43780e></i></div> <div class=\"tw-self-end\" style=\"cursor: pointer\" data-v-2b43780e><i class=\"ri-heart-3-fill ri-lg heart\" data-v-2b43780e></i></div></div>")],2)],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HomeProducts.vue?vue&type=template&id=2b43780e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeProducts.vue?vue&type=script&lang=js&
const AddToCart=()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 257));const WhatsAppOrder=()=>__webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 258));/* harmony default export */ var HomeProductsvue_type_script_lang_js_ = ({components:{AddToCart,WhatsAppOrder},props:{products:{type:Array,required:true},displayId:{required:true,type:String}},data(){return{activeProduct:"",price:{},selectedQuantity:null};},computed:{...Object(external_vuex_["mapState"])({favorite:state=>state.favorite.favorite})},methods:{productInfo(product){let kivy=product.quantities[0];this.activeProduct=product;this.price=kivy;},whatsAppInfo(product){let kivy=product.quantities[0];this.activeProduct=product;this.price=kivy;},wishList(product){let found=this.favorite.find(record=>record._id===product._id);if(found){this.$store.commit("favorite/removeFromFavorite",product);}else{this.$store.commit("favorite/addToFavorite",product);this.$toast.success("Added to favorites");}}}});
// CONCATENATED MODULE: ./components/HomeProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeProductsvue_type_script_lang_js_ = (HomeProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/HomeProducts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(118)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2b43780e",
  "4d2ba8e2"
  
)

/* harmony default export */ var HomeProducts = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44826d3b_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44826d3b_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44826d3b_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44826d3b_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44826d3b_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".readLess{overflow:hidden;max-height:20ch}.read-less,.read-more{display:inline-block;margin-top:.5rem;margin-bottom:.5rem}#headingOne,#headingTwo{font-size:1.7em;font-weight:600}h2{font-size:1.3em;font-weight:500;color:#ed1b24}@media screen and (min-width:769px){#headingOne,#headingTwo{position:relative;top:30px;overflow:hidden}#container-2{margin-top:-40px}#top-section{margin-top:40px}}@media (min-width:576px) and (max-width:768px){#headingOne,#headingTwo{position:relative;top:20px;overflow:hidden}#container-2{margin-top:-40px}#top-section{margin-top:20px}}@media screen and (min-width:481px) and (max-width:575px){#headingOne{position:relative;top:20px;overflow:hidden}#container-2{margin-top:-40px}#headingTwo{position:relative;top:20px;bottom:20px;overflow:hidden}}@media screen and (max-width:481px){#headingOne,#headingTwo{position:relative;top:40px;overflow:hidden}#headingTwo{bottom:40px}#container-2{margin-top:-25px}#top-section{margin-top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=44826d3b&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{attrs:{"id":"top-section"}},[_vm._ssrNode("<div class=\"tw-my-5 tw-py-5 tw-container tw-mx-auto\"><h1 id=\"headingOne\" class=\"tw-text-center tw-text-3xl tw-text-red-600 tw-capitalize\">\n      Avimar International\n    </h1></div> "),_vm._ssrNode("<div class=\"tw-container tw-mx-auto\">","</div>",[_vm._ssrNode("<div class=\"tw-p-2\">","</div>",[_vm._ssrNode("<h2 class=\"tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-red-600\">\n        Featured Products\n      </h2> "),_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('Products',{attrs:{"products":_vm.homeData.best_beers,"display-id":_vm.display['best-beers']}})],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-my-5 tw-container tw-mx-auto\">","</div>",[_c('nuxt-img',{attrs:{"src":"/new_arrivals.jpg"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-my-5 tw-container tw-mx-auto\">","</div>",[_vm._ssrNode("<div class=\"tw-p-2\">","</div>",[_vm._ssrNode("<h2 class=\"tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-red-600\">\n        Products on offer\n      </h2> "),_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('Products',{attrs:{"products":_vm.homeData.on_offer,"display-id":_vm.display['on-offer']}})],1)],2)]),_vm._ssrNode(" <div class=\"tw-container mx-auto clearfix tw-my-2\"><h2 id=\"headingTwo\" class=\"tw-bg-white clearfix tw-text-center twp-2 border-bottom tw-mb-4\">\n      Shop by Brand\n    </h2></div> <div class=\"tw-container mx-auto tw-px-4 tw-py-4 tw-my-2\"><div class=\"tw-bg-white tw-rounded tw-shadow-sm tw-mb-3 tw-pt-4 tw-pl-3 tw-pb-2\"><div class=\"flex flex-col\"><div class=\"tw-text-xl tw-font-medium tw-pb-2 tw-text-red-600\">\n          Electronics\n        </div> <a href=\"/\" class=\"clearfix d-inline-block text-nowrap text-dark tw-p-1 tw-mb-2 tw-no-underline\"><span class=\"hover:tw-bg-gray-900 hover:tw-text-white tw-py-2 tw-px-3 tw-border tw-border-gray-600 tw-rounded-md tw-shadow-sm tw-text-sm tw-leading-4 tw-font-medium tw-text-gray-700\">Smart TVs</span></a></div> <a href=\"javascript:void(0)\" class=\"tw-mt-1 tw-text-gray-900 hover:tw-text-red-900 tw-text-left tw-px-4 tw-py-1 tw-rounded tw-ring-1 tw-ring-gray-900 tw-no-underline tw-shadow\">Show more</a></div></div> <div class=\"tw-container mx-auto tw-px-4\"><div class=\"tw-border-0 tw-my-2 tw-px-2 tw-py-2 tw-bg-white tw-shadow-lg tw-rounded\"><div"+_vm._ssrClass("tw-px-4 tw-py-4",{readLess:_vm.readMore==true})+"><span>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n          aliquip ex ea commodo consequat. Duis aute irure dolor in\n          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n          culpa qui officia deserunt mollit anim id est laborum.\n        </span></div> "+(_vm.readMore==true?"<div class=\"read-more\"><a class=\"tw-cursor-pointer tw-my-6 tw-text-gray-900 hover:tw-text-red-600 tw-text-left tw-px-4 tw-py-1 tw-rounded-full tw-ring-1 tw-ring-red-600 tw-no-underline\">Show More</a></div>":"<div class=\"read-less\"><a class=\"tw-cursor-pointer tw-my-2 tw-text-gray-900 hover:tw-text-red-600 tw-text-left tw-px-4 tw-py-1 tw-rounded-full tw-ring-1 tw-ring-red-600 tw-no-underline\">Show Less</a></div>")+"</div></div>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=44826d3b&

// EXTERNAL MODULE: external "vue-lazy-hydration"
var external_vue_lazy_hydration_ = __webpack_require__(96);
var external_vue_lazy_hydration_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazy_hydration_);

// EXTERNAL MODULE: ./components/Carousel.vue + 4 modules
var Carousel = __webpack_require__(155);

// EXTERNAL MODULE: ./components/HomeProducts.vue + 4 modules
var HomeProducts = __webpack_require__(156);

// EXTERNAL MODULE: external "vue-window-size"
var external_vue_window_size_ = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({mixins:[external_vue_window_size_["vueWindowSizeMixin"]],components:{Carousel: Carousel["default"],Products: HomeProducts["default"],LazyHydrate: external_vue_lazy_hydration_default.a},data(){return{display:{"on-offer":"on-offer",featured:"featured","new-arrivals":"new-arrivals","best-spirits":"best-spirits","best-beers":"best-beers"},default_limit:13,limit_by:13,readMore:true};},async asyncData({$http}){try{const meta=await $http.$get("metas/get-by-category/home").then(response=>response.result);const homeData=await $http.$get("homepage-data").then(response=>response.result);return{meta,homeData};}catch(err){const defaultMeta={metadescription:"Click it, Own it",title:"Avimar International"};return{meta:{...defaultMeta},homeData:[]};}},methods:{simple_toggle(default_limit,brand_length){this.limit_by=this.limit_by===default_limit?brand_length:default_limit;}},head:{title:"Avimar International",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Click it, Own it"}]// link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
}});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "568c377a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Products: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=index.js.map