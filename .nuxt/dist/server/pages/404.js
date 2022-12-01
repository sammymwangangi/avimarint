exports.ids = [16];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("181905fa", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8876f620_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8876f620_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8876f620_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8876f620_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8876f620_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "main{background:#fff;justify-content:center;align-items:center;font-family:\"Merriweather Sans\",sans-serif}main #g6219{transform-origin:85px 4px;animation:an1 12s ease-out .5s infinite}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/404.vue?vue&type=template&id=8876f620&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('section',{staticClass:"tw-pt-16 lg:tw-pt-32 tw-px-2"},[_vm._ssrNode("<div class=\"tw-container tw-mx-auto tw-py-5\">","</div>",[_vm._ssrNode("<main class=\"tw-container tw-mx-auto\">","</main>",[_vm._ssrNode("<div class=\"tw-py-5\">","</div>",[_vm._ssrNode("<div class=\"tw-text-center tw-font-normal\" style=\"font-size:1.0em;\"><div style=\"border-right:2px solid #CE2F32;padding-right:5px;\">\n            404\n          </div>\n          Page or Product could not be found\n        </div> <hr> "),_vm._ssrNode("<h6 class=\"tw-py-3 tw-text-center tw-text-gray-400\">","</h6>",[_vm._ssrNode("\n          You can browse some of our products below or go\n          "),_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("back to home ")])],2),_vm._ssrNode(" "),_vm.loading?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<span role=\"status\" aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\"></span> <span>Loading...</span>")],2):_vm._ssrNode("<div>","</div>",[_c('Products',{attrs:{"products":_vm.products}})],1)],2)])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/404.vue?vue&type=template&id=8876f620&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/404.vue?vue&type=script&lang=js&
const Products=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39));/* harmony default export */ var _404vue_type_script_lang_js_ = ({components:{Products},data(){return{products:[],loading:false};},mounted(){this.getProducts();},methods:{async getProducts(){this.loading=true;await this.$http.$get('/random-products').then(res=>{this.loading=false;this.products=res.result;}).catch(err=>{this.loading=false;});}},async asyncData({$http}){try{const meta=await $http.$get(`/metas/get-by-category/404`).then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){const meta=this.meta;return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/404.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_404vue_type_script_lang_js_ = (_404vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/404.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_404vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "837d8e40"
  
)

/* harmony default export */ var _404 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Products: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=404.js.map