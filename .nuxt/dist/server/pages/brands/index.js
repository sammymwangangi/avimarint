exports.ids = [28];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("036802e6", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e9535f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e9535f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e9535f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e9535f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e9535f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (max-width:481px){.heading_one[data-v-3e9535f6]{margin-top:-10px;font-size:1.2em;margin-bottom:1px;font-family:\"Roboto\",sans-serif;font-weight:400}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/brands/index.vue?vue&type=template&id=3e9535f6&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tw-pt-32 lg:tw-pt-32"},[_vm._ssrNode("<div id=\"jumbo\" class=\"clearfix\" data-v-3e9535f6>","</div>",[_c('NuxtImg',{directives:[{name:"show",rawName:"v-show",value:_vm.windowWidth>481,expression:"windowWidth > 481"}],staticClass:"tw-mb-2 img-fluid",attrs:{"src":`/banner.webp`,"alt":`liquorspring`}}),_vm._ssrNode(" "),_c('NuxtImg',{directives:[{name:"show",rawName:"v-show",value:_vm.windowWidth<=481,expression:"windowWidth <= 481"}],staticClass:"tw-mb-2",staticStyle:{"height":"auto","max-width":"100%"},attrs:{"src":"/banner.webp","alt":`liquorspring`}})],2),_vm._ssrNode(" <nav aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\" data-v-3e9535f6><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\" data-v-3e9535f6><li class=\"tw-inline-flex tw-items-center\" data-v-3e9535f6><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\" data-v-3e9535f6><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\" data-v-3e9535f6><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" data-v-3e9535f6></path></svg>\n          Home\n        </a></li> <li aria-current=\"page\" data-v-3e9535f6><div class=\"tw-flex items-center\" data-v-3e9535f6><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\" data-v-3e9535f6><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\" data-v-3e9535f6></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\" data-v-3e9535f6>Brands</span></div></li></ol></nav> "),_vm._ssrNode("<div class=\"tw-container tw-mx-auto tw-py-2\" data-v-3e9535f6>","</div>",[_vm._ssrNode("<div data-v-3e9535f6><h1 class=\"tw-text-center tw-text-red-600 tw-pb-3\" data-v-3e9535f6>"+_vm._ssrEscape("\n        "+_vm._s(_vm.meta.headerOne||'')+"\n      ")+"</h1></div> "),_vm._l(_vm.brands,function(item,key){return _vm._ssrNode("<div class=\"tw-shadow tw-px-4 tw-py-4 tw-mb-3 tw-rounded tw-border-0 tw-bg-white\" data-v-3e9535f6>","</div>",[_vm._ssrNode("<span class=\"tw-text-red-600 tw-font-medium tw-uppercase tw-tracking-wider tw-pb-2\" data-v-3e9535f6>"+_vm._ssrEscape("\n        "+_vm._s(_vm._f("capitalize")(key))+" brands\n      ")+"</span> "),_vm._ssrNode("<div data-v-3e9535f6>","</div>",[_vm._ssrNode("<table class=\"tw-table-auto tw-min-w-full\" data-v-3e9535f6>","</table>",[_vm._ssrNode("<thead data-v-3e9535f6><tr data-v-3e9535f6><th class=\"tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider\" data-v-3e9535f6>\n                Brand\n              </th> <th class=\"tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider\" data-v-3e9535f6>\n                Country of Origin\n              </th></tr></thead> "),_vm._ssrNode("<tbody data-v-3e9535f6>","</tbody>",_vm._l(item,function(brand,index){return _vm._ssrNode("<tr class=\"even:tw-bg-gray-100\" data-v-3e9535f6>","</tr>",[_vm._ssrNode("<td class=\"tw-px-6 tw-py-4 tw-whitespace-nowrap\" data-v-3e9535f6>","</td>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-blue-600",attrs:{"to":`/brands/${brand.url}`}},[_vm._v("\n                  "+_vm._s(_vm._f("capitalize")(brand.brand))+"\n                ")])],1),_vm._ssrNode(" <td class=\"tw-whitespace-nowrap tw-text-sm tw-text-gray-500\" data-v-3e9535f6>"+_vm._ssrEscape("\n                "+_vm._s(brand.country||'--')+"\n              ")+"</td>")],2);}),0)],2)])],2);})],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/brands/index.vue?vue&type=template&id=3e9535f6&scoped=true&

// EXTERNAL MODULE: external "vue-window-size"
var external_vue_window_size_ = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/brands/index.vue?vue&type=script&lang=js&
/* harmony default export */ var brandsvue_type_script_lang_js_ = ({mixins:[external_vue_window_size_["vueWindowSizeMixin"]],name:'Brands',data(){return{};},async asyncData({$http}){try{const brands=await $http.$get('brands/grouped').then(response=>response.result);const meta=await $http.$get('metas/get-by-category/brands').then(response=>response.result);return{meta,brands};}catch(err){return{meta:{},brands:[]};}},head(){const meta=this.meta||{};return{title:this.meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};},methods:{init(){}}});
// CONCATENATED MODULE: ./pages/brands/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_brandsvue_type_script_lang_js_ = (brandsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/brands/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_brandsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e9535f6",
  "276e56d7"
  
)

/* harmony default export */ var brands = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map