exports.ids = [25];
exports.modules = {

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0937b39e", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_url_vue_vue_type_style_index_0_id_0006a77b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_url_vue_vue_type_style_index_0_id_0006a77b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_url_vue_vue_type_style_index_0_id_0006a77b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_url_vue_vue_type_style_index_0_id_0006a77b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_url_vue_vue_type_style_index_0_id_0006a77b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article_container[data-v-0006a77b]{margin:14px 14px 80px;padding-bottom:30px}.article>div[data-v-0006a77b]{min-height:80px;margin-top:12px;margin-bottom:10px}.article_title h1[data-v-0006a77b]{font-size:28px;font-weight:600;text-align:center}.article_image[data-v-0006a77b]{text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_url.vue?vue&type=template&id=0006a77b&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('section',{staticClass:"tw-container mx-auto tw-pt-24 lg:tw-pt-32"},[_vm.article?_vm._ssrNode("<div class=\"tw-bg-white sm:tw-py-1 md:py-5 lg:py-5\" data-v-0006a77b>","</div>",[_vm._ssrNode("<div class=\"article_title tw-py-3\" data-v-0006a77b><h1 data-v-0006a77b>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> <hr data-v-0006a77b></div> "),_vm._ssrNode("<div class=\"article_image\" data-v-0006a77b>","</div>",[_c('NuxtImg',{staticClass:"tw-object-contain",attrs:{"src":_vm.article.image_url,"alt":_vm.article.title,"width":"485","height":"208"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-p-3\" data-v-0006a77b>","</div>",[_vm._ssrNode("<div class=\"article_body\" data-v-0006a77b>"+_vm._s(_vm.article.body)+"</div> "),_c('b-row',[_c('b-col',{attrs:{"cols":"12"}},[_c('hr')]),_vm._v(" "),_c('b-col',{attrs:{"cols":"12"}},[_c('strong',[_vm._v("Published on: "+_vm._s(_vm.article.created_at)+" ")]),_vm._v("\n           | \n          "),_c('em',[_vm._v("\n            Author: "),_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.publishedBy))])])])],1)],2)],2):_vm._e()]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/blog/_url.vue?vue&type=template&id=0006a77b&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_url.vue?vue&type=script&lang=js&
/* harmony default export */ var _urlvue_type_script_lang_js_ = ({computed:{...Object(external_vuex_["mapState"])({publishedBy:state=>state.publishedBy}),env(){return process.env.imagesURL;}},data(){return{};},async asyncData({params,$http}){const url=params.url;try{const article=await $http.$get('articles/slug/'+url).then(response=>response.result);return{article};}catch(err){return{article:{}};}},head(){const article=this.article||{};return{title:article.title,meta:[{hid:'description',name:'description',content:article.meta},{hid:'og:title',name:'og:title',content:article.title},{hid:'og:description',name:'og:description',content:article.meta},{hid:'og:type',name:'og:type',content:'website'},{hid:'og:url',name:'og:url',content:`https://liquorspring.co.ke/blog/${article.url}`}]};}});
// CONCATENATED MODULE: ./pages/blog/_url.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_urlvue_type_script_lang_js_ = (_urlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/blog/_url.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_urlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0006a77b",
  "58c88425"
  
)

/* harmony default export */ var _url = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_url.js.map