exports.ids = [37];
exports.modules = {

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9ee583f8", content, true, context)
};

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_71fe4698_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_71fe4698_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_71fe4698_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_71fe4698_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_id_71fe4698_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (max-width:481px){#breadcrumb[data-v-71fe4698]{display:none}.heading_one[data-v-71fe4698]{top:20px;padding:10px;font-size:1.2em;margin-bottom:1px;font-family:\"Roboto\",sans-serif;font-weight:700}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/favorite.vue?vue&type=template&id=71fe4698&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<section class=\"tw-pt-20 lg:tw-pt-32\" data-v-71fe4698>","</section>",[_vm._ssrNode("<div class=\"tw-container tw-mx-auto tw-py-5 tw-px-4\" data-v-71fe4698>","</div>",[_vm._ssrNode("<nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\" data-v-71fe4698><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\" data-v-71fe4698><li class=\"tw-inline-flex tw-items-center\" data-v-71fe4698><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\" data-v-71fe4698><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\" data-v-71fe4698><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" data-v-71fe4698></path></svg>\n              Home\n            </a></li> <li aria-current=\"page\" data-v-71fe4698><div class=\"tw-flex items-center\" data-v-71fe4698><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\" data-v-71fe4698><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\" data-v-71fe4698></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\" data-v-71fe4698>Favourites</span></div></li></ol></nav> <h1 class=\"tw-capitalize heading_one tw-text-center tw-text-red-600\" data-v-71fe4698>"+_vm._ssrEscape(_vm._s(_vm.meta.headerOne))+"</h1> "),_vm._ssrNode("<div class=\"clearfix tw-py-4\" data-v-71fe4698>","</div>",[_c('Products',{attrs:{"products":_vm.favorites}})],1)],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/favorite.vue?vue&type=template&id=71fe4698&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/favorite.vue?vue&type=script&lang=js&
const Products=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39));/* harmony default export */ var favoritevue_type_script_lang_js_ = ({components:{Products},computed:{...Object(external_vuex_["mapState"])({favorites:state=>state.favorite.favorite})},async asyncData({$http}){try{const meta=await $http.$get('metas/get-by-category/favorite').then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){const meta=this.meta||{};return{title:this.meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}],link:[{rel:'canonical',href:'https://liquorspring.co.ke'+this.$route.path}]};}});
// CONCATENATED MODULE: ./pages/favorite.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_favoritevue_type_script_lang_js_ = (favoritevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/favorite.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_favoritevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "71fe4698",
  "949341b8"
  
)

/* harmony default export */ var favorite = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Products: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=favorite.js.map