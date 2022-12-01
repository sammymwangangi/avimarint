exports.ids = [26,10];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c26c7e0c", content, true, context)
};

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_carousel_vue_vue_type_style_index_0_id_4bc47332_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_carousel_vue_vue_type_style_index_0_id_4bc47332_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_carousel_vue_vue_type_style_index_0_id_4bc47332_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_carousel_vue_vue_type_style_index_0_id_4bc47332_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_carousel_vue_vue_type_style_index_0_id_4bc47332_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog_carousel[data-v-4bc47332]{color:#2c3e50;min-height:270px;background-image:url(/images/blog-banner.jpg)}.headers[data-v-4bc47332]{margin-top:7%;font-family:roboto,serif}.headers h1[data-v-4bc47332]{color:#3498db}.small_h[data-v-4bc47332]{font-size:24px}@media (min-width:576px) and (max-width:768px){.blog_carousel[data-v-4bc47332]{position:relative;top:80px;overflow:hidden}}@media screen and (min-width:481px) and (max-width:575px){.blog_carousel[data-v-4bc47332]{position:relative;top:80px;overflow:hidden}}@media screen and (max-width:481px){.blog_carousel[data-v-4bc47332]{position:relative;top:100px;overflow:hidden}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2ca29d34", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/blog-carousel.vue?vue&type=template&id=4bc47332&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container-fluid blog_carousel"},[_c('b-row',[_c('b-col',{staticClass:"crousel"},[_c('div',{staticClass:"headers"},[_c('h1',[_vm._v("Liquorspring Blog")]),_vm._v(" "),_c('h2',{staticClass:"blog small_h"},[_vm._v("\n          Everything you need to know about alcohol\n        ")])])])],1)],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/blog/blog-carousel.vue?vue&type=template&id=4bc47332&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/blog-carousel.vue?vue&type=script&lang=js&
/* harmony default export */ var blog_carouselvue_type_script_lang_js_ = ({name:'blogCarousel'});
// CONCATENATED MODULE: ./components/blog/blog-carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_blog_carouselvue_type_script_lang_js_ = (blog_carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blog/blog-carousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(111)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blog_carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bc47332",
  "671edb0a"
  
)

/* harmony default export */ var blog_carousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441b0862_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441b0862_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441b0862_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441b0862_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441b0862_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=441b0862&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tw-container mx-auto tw-px-4 tw-pt-16 lg:tw-pt-32"},[_c('b-row',[_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('blog-carousel')],1)],1),_vm._ssrNode(" "),_vm.loading?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<span role=\"status\" aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\"></span>\n    ..loading blogs\n  ")],2):_vm._ssrNode("<div class=\"lg:tw-grid lg:tw-grid-cols-3 tw-gap-4 tw-py-3\">","</div>",_vm._l(_vm.articles,function(article,index){return _vm._ssrNode("<div class=\"tw-mb-2\">","</div>",[_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('article-list',{attrs:{"title":article.title,"url":article.url,"preview":article.body,"image_url":article.image_url,"published-on":article.created_at}})],1),_vm._ssrNode(" "),_vm.articles.length?_c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:_vm.handleScrolledToBottom,expression:"handleScrolledToBottom"}]},[]):_vm._e()],2);}),0),_vm._ssrNode(" "),_c('client-only',[_c('infinite-loading',{attrs:{"spinner":"spinner","identifier":_vm.infiniteId},on:{"infinite":_vm.infiniteHandler}},[_c('div',{staticClass:"text-red",attrs:{"slot":"no-more"},slot:"no-more"},[_vm._v("No more blogs")]),_vm._v(" "),_c('div',{staticClass:"text-red",attrs:{"slot":"no-results"},slot:"no-results"},[_vm._v(" ")])])],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=441b0862&

// EXTERNAL MODULE: external "vue-lazy-hydration"
var external_vue_lazy_hydration_ = __webpack_require__(96);
var external_vue_lazy_hydration_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazy_hydration_);

// EXTERNAL MODULE: external "vue-infinite-loading"
var external_vue_infinite_loading_ = __webpack_require__(98);
var external_vue_infinite_loading_default = /*#__PURE__*/__webpack_require__.n(external_vue_infinite_loading_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
const ArticleList=()=>__webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 259));const BlogCarousel=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 153));/* harmony default export */ var blogvue_type_script_lang_js_ = ({name:'blog',transition:'slide-right',components:{BlogCarousel,ArticleList,LazyHydrate: external_vue_lazy_hydration_default.a,InfiniteLoading: external_vue_infinite_loading_default.a},data(){return{loading:false,articles:[],page:1,lastPage:0,isInit:true,infiniteId:+new Date()};},async asyncData({$http,params}){try{const meta=await $http.$get(`metas/get-by-category/blog`).then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},async fetch(){let articles=await this.$http.$get(`articles/all?page=${this.page}`);this.articles.push(...articles.result.data);this.lastPage=articles.result.last_page;},methods:{infiniteHandler($state){setTimeout(function(){this.fetchArticles().then(response=>{if(response.result.data.length>0){this.lastPage=response.result.last_page;response.result.data.forEach(message=>{this.articles.push(message);});if(this.page-1===this.lastPage){this.page=1;$state.complete();}else{this.page+=1;}$state.loaded();}else{this.page=1;$state.complete();}}).catch(e=>console.log(e));}.bind(this),50);},handleScrolledToBottom(isVisible){if(!isVisible){return;}if(this.page>=this.lastPage){return;}this.page++;this.$fetch();}},head(){return{title:this.meta.title,meta:[{hid:'description',name:'description',content:this.meta.metadescription},{hid:'og:title',name:'og:title',content:this.meta.title},{hid:'og:description',name:'og:description',content:this.meta.metadescription},{hid:'og:type',name:'og:type',content:'website'},{hid:'og:url',name:'og:url',content:`https://liquorspring.co.ke/blog`}]};}});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/blog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7195eda6"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogCarousel: __webpack_require__(153).default})


/***/ })

};;
//# sourceMappingURL=index.js.map