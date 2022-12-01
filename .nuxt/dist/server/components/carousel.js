exports.ids = [11];
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

/***/ })

};;
//# sourceMappingURL=carousel.js.map