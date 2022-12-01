exports.ids = [18];
exports.modules = {

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4184a5ac", content, true, context)
};

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1054464a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1054464a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1054464a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1054464a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1054464a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".readLess[data-v-1054464a]{overflow:hidden;max-height:25ch}.read-less[data-v-1054464a],.read-more[data-v-1054464a]{display:inline-block;margin-top:.5rem;margin-bottom:.5rem}.btn[data-v-1054464a]:active,.btn[data-v-1054464a]:focus{outline:none;box-shadow:none;border:none}.heading_one[data-v-1054464a]{color:#ed1b24}@media screen and (min-width:769px){#breadcrumb[data-v-1054464a]{position:relative;top:-15px;overflow:hidden}.heading_one[data-v-1054464a]{margin-top:-20px;margin-bottom:-10px}}@media screen and (max-width:481px){#breadcrumb[data-v-1054464a]{position:relative;top:5px;overflow:hidden}#jumbo[data-v-1054464a]{position:relative;bottom:10px}.heading_one[data-v-1054464a]{margin-top:-10px;font-size:1.2em;margin-bottom:1px;font-family:\"Roboto\",sans-serif;font-weight:400}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_category/index.vue?vue&type=template&id=1054464a&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tw-pt-16 lg:tw-pt-32"},[_vm._ssrNode("<div id=\"jumbo\" class=\"clearfix\" data-v-1054464a>","</div>",[_c('NuxtImg',{directives:[{name:"show",rawName:"v-show",value:_vm.windowWidth>481,expression:"windowWidth > 481"}],staticClass:"mb-0 img-fluid",attrs:{"src":`${_vm.image_banner}`,"alt":`${_vm.category.category.name}`}}),_vm._ssrNode(" "),_c('NuxtImg',{directives:[{name:"show",rawName:"v-show",value:_vm.windowWidth<=481,expression:"windowWidth <= 481"}],staticClass:"mb-0",staticStyle:{"height":"auto","max-width":"100%"},attrs:{"src":`${_vm.category.category.mobile_banner_url||'/banner.webp'}`,"alt":`${_vm.category.category.name}`}})],2),_vm._ssrNode(" <nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\" data-v-1054464a><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\" data-v-1054464a><li class=\"tw-inline-flex tw-items-center\" data-v-1054464a><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\" data-v-1054464a><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\" data-v-1054464a><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" data-v-1054464a></path></svg>\n          Home\n        </a></li> <li aria-current=\"page\" data-v-1054464a><div class=\"tw-flex items-center\" data-v-1054464a><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\" data-v-1054464a><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\" data-v-1054464a></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\" data-v-1054464a>"+_vm._ssrEscape(_vm._s(_vm._f("capitalize")(_vm.$route.params.category.replace(/-/g," "))))+"</span></div></li></ol></nav> <div class=\"heading\" data-v-1054464a><h1 class=\"heading_one tw-text-center tw-capitalize tw-text-red-600\" data-v-1054464a>"+_vm._ssrEscape("\n      "+_vm._s(_vm.meta.headerOne||"Liquor Spring – Free alcohol delivery services at best prices")+"\n    ")+"</h1></div> "),_vm._ssrNode("<div class=\"tw-mt-5 clearfix tw-flex sm:tw-hidden md:tw-hidden lg:tw-hidden tw-justify-center\" data-v-1054464a>","</div>",[_vm._ssrNode("<div data-v-1054464a>","</div>",[_c('button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-2",modifiers:{"sidebar-2":true}}],staticClass:"btn btn-sm btn-dark tw-ml-2 tw-mr-2 tw-inline sm:tw-hidden md:tw-hidden lg:tw-hidden",attrs:{"type":"button"}},[_c('fa',{attrs:{"icon":"filter"}}),_vm._ssrNode(" Filters\n      ")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-1054464a>","</div>",[_vm._ssrNode("<label for=\"sort\" class=\"sr-only\" data-v-1054464a></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.sort_by,expression:"sort_by"}],staticClass:"form-control form-control-sm tw-inline modal-btn tw-bg-transparent focus:tw-ring-0",staticStyle:{"width":"220px"},attrs:{"id":"sort"},on:{"change":[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.sort_by=$event.target.multiple?$$selectedVal:$$selectedVal[0];},_vm.filterProducts]}},[_c('option',{attrs:{"value":"price","selected":""}},[_vm._v("Sort By Price / ABV")]),_vm._v(" "),_c('option',{attrs:{"value":"price_low"}},[_vm._v("Price Low - High")]),_vm._v(" "),_c('option',{attrs:{"value":"price_high"}},[_vm._v("Price High - Low")]),_vm._v(" "),_c('option',{attrs:{"value":"alcohol_low"}},[_vm._v("Alcohol % Low-High")]),_vm._v(" "),_c('option',{attrs:{"value":"alcohol_high"}},[_vm._v("Alcohol % High-Low")])])],2)],2),_vm._ssrNode(" "),_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('category-filter',{attrs:{"category":_vm.category.category,"sub-categories":_vm.category.category.subcategories}})],1),_vm._ssrNode(" "),_vm._ssrNode("<section data-v-1054464a>","</section>",[_vm._ssrNode("<div class=\"tw-container tw-px-4 tw-py-4 tw-mx-auto\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"col-sm-2\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"tw-text-left tw-px-2 tw-py-2 tw-my-2 tw-rounded tw-bg-white\""+_vm._ssrStyle(null,null,{display:_vm.windowWidth>576?'':'none'})+" data-v-1054464a><span class=\"tw-text-red-600 tw-uppercase\" data-v-1054464a>Sort by price</span> <div class=\"text-justify d-inline pl-3\" data-v-1054464a><div class=\"form-check\" data-v-1054464a><input type=\"radio\" name=\"sort_by\" id=\"sortPrice1\" value=\"price_high\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"price_high"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-1054464a> <label for=\"sortPrice1\" class=\"form-check-label\" data-v-1054464a>\n                  High-low\n                </label></div> <div class=\"form-check\" data-v-1054464a><input type=\"radio\" name=\"sort_by\" id=\"sortPrice2\" value=\"price_low\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"price_low"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-1054464a> <label for=\"sortPrice2\" class=\"form-check-label\" data-v-1054464a>\n                  Low-High\n                </label></div></div></div> "),_vm._ssrNode("<div class=\"tw-text-left tw-px-2 tw-py-2 tw-my-2 tw-rounded tw-bg-white\""+_vm._ssrStyle(null,null,{display:_vm.windowWidth>576?'':'none'})+" data-v-1054464a>","</div>",[_vm._ssrNode("<span class=\"tw-text-red-600 tw-my-2 tw-uppercase\" data-v-1054464a>Sort by Alcohol %</span> "),_vm._ssrNode("<div class=\"text-justify d-inline pl-3\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"form-check\" data-v-1054464a><input type=\"radio\" name=\"sort_by\" id=\"alcoholPercentage1\" value=\"alcohol_high\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"alcohol_high"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-1054464a> <label for=\"alcoholPercentage1\" class=\"form-check-label\" data-v-1054464a>\n                  High-low\n                </label></div> <div class=\"form-check\" data-v-1054464a><input type=\"radio\" name=\"sort_by\" id=\"alcoholPercentage2\" value=\"alcohol_low\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"alcohol_low"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-1054464a> <label for=\"alcoholPercentage2\" class=\"form-check-label\" data-v-1054464a>\n                  Low-High\n                </label></div> <hr data-v-1054464a> "),_c('nuxt-link',{staticClass:"text-decoration-none text-dark",attrs:{"to":"/countries"}},[_vm._v("Shop By Country\n              ")])],2)],2),_vm._ssrNode(" <div class=\"tw-py-2 tw-rounded-0 tw-border-0 tw-bg-white\""+_vm._ssrStyle(null,null,{display:_vm.windowWidth>576?'':'none'})+" data-v-1054464a><span class=\"tw-text-red-600 lg:tw-pl-3 tw-uppercase\" data-v-1054464a>\n              Filter Selection\n            </span> <ul class=\"list-unstyled text-justify pl-lg-3\" data-v-1054464a>"+_vm._ssrList(_vm.category.category.subcategories,function(cat,index){return"<li class=\"tw-block hover:tw-bg-gray-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm\" data-v-1054464a><a"+_vm._ssrAttr("href",`/${_vm.category.category.url}/${cat.name}`)+" class=\"tw-no-underline tw-text-gray-900\" data-v-1054464a>"+_vm._ssrEscape("\n                  "+_vm._s(_vm._f("capitalize")(cat.name.replace(/-/g," "))))+"</a></li>";})+"</ul></div> <div class=\"tw-py-2 tw-my-2 tw-rounded-0 tw-border-0 tw-bg-white\""+_vm._ssrStyle(null,null,{display:_vm.windowWidth>576&&_vm.category.brands.length?'':'none'})+" data-v-1054464a><span class=\"tw-text-red-600 pl-lg-3 tw-uppercase\" data-v-1054464a>Brands</span> <ul class=\"list-unstyled pl-lg-3\" data-v-1054464a>"+_vm._ssrList(_vm.category.brands,function(brand,index){return"<li class=\"tw-block hover:tw-bg-gray-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm\" data-v-1054464a><a"+_vm._ssrAttr("href",`/brands/${brand.url}`)+" class=\"tw-no-underline tw-text-gray-900\" data-v-1054464a>"+_vm._ssrEscape("\n                  "+_vm._s(_vm._f("capitalize")(brand.brand)))+"</a></li>";})+"</ul></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-sm-10 products\" data-v-1054464a>","</div>",[_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('Products',{attrs:{"products":_vm.products}})],1),_vm._ssrNode(" "),_c('client-only',[_c('infinite-loading',{attrs:{"spinner":"spinner","identifier":_vm.infiniteId},on:{"infinite":_vm.infiniteHandler}},[_c('div',{staticClass:"text-red",attrs:{"slot":"no-more"},slot:"no-more"},[_vm._v(" ")]),_vm._v(" "),_c('div',{staticClass:"text-red",attrs:{"slot":"no-results"},slot:"no-results"},[_vm._v(" ")])])],1),_vm._ssrNode(" "),_vm.category.brands.length?_vm._ssrNode("<div class=\"my-2\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"tw-container tw-mx-auto\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"tw-flex tw-flex-col\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"-tw-my-2 tw-overflow-x-auto\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"tw-py-2 tw-align-middle tw-inline-block tw-min-w-full\" data-v-1054464a>","</div>",[_vm._ssrNode("<div class=\"tw-shadow tw-overflow-hidden\" data-v-1054464a>","</div>",[_vm._ssrNode("<table class=\"tw-min-w-full\" data-v-1054464a>","</table>",[_vm._ssrNode("<thead class=\"tw-bg-gray-800\" data-v-1054464a><tr data-v-1054464a><th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-1054464a>\n                              #\n                            </th> <th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-1054464a>\n                              Brand\n                            </th> <th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-1054464a>\n                              Country of Origin\n                            </th></tr></thead> "),_vm._ssrNode("<tbody class=\"tw-bg-white\" data-v-1054464a>","</tbody>",_vm._l(_vm.category.brands,function(brand,index){return _vm._ssrNode("<tr class=\"even:tw-bg-gray-100\" data-v-1054464a>","</tr>",[_vm._ssrNode("<td class=\"tw-px-6 tw-py-4 tw-whitespace-nowrap\" data-v-1054464a><div class=\"tw-text-sm tw-text-gray-600\" data-v-1054464a>"+_vm._ssrEscape("\n                                 "+_vm._s(index+1)+"\n                              ")+"</div></td> "),_vm._ssrNode("<td class=\"tw-px-6 tw-py-4 tw-whitespace-nowrap\" data-v-1054464a>","</td>",[_vm._ssrNode("\n                               \n                              "),_c('nuxt-link',{staticClass:"tw-no-underline tw-text-sm tw-text-blue-500",attrs:{"to":`/brands/${brand.url}`}},[_vm._v("\n                                "+_vm._s(_vm._f("capitalize")(brand.brand))+"\n                              ")])],2),_vm._ssrNode(" <td class=\"tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-500\" data-v-1054464a>"+_vm._ssrEscape("\n                              "+_vm._s(brand.country||"--")+"\n                            ")+"</td>")],2);}),0)],2)])])])])])]):_vm._e()],2)],2)])]),_vm._ssrNode(" <section class=\"my-2\""+_vm._ssrStyle(null,null,{display:_vm.meta.footercontent?'':'none'})+" data-v-1054464a><div class=\"tw-container tw-mx-auto tw-px-4\" data-v-1054464a><div class=\"tw-border-0 tw-my-2 tw-px-2 tw-py-2 tw-bg-white tw-shadow-lg tw-rounded\" data-v-1054464a><div"+_vm._ssrClass("p-4",{readLess:_vm.readMore==true})+" data-v-1054464a><span data-v-1054464a>"+_vm._s(_vm.meta.footercontent)+"</span></div> "+(_vm.readMore==true?"<div class=\"read-more tw-mx-4\" data-v-1054464a><a class=\"tw-cursor-pointer tw-my-6 tw-text-gray-900 hover:tw-text-red-600 tw-text-left tw-px-4 tw-py-1 tw-rounded-full tw-ring-1 tw-ring-red-600 tw-no-underline\" data-v-1054464a>Show More</a></div>":"<div class=\"read-less tw-mx-4\" data-v-1054464a><a class=\"tw-cursor-pointer tw-my-2 tw-text-gray-900 hover:tw-text-red-600 tw-text-left tw-px-4 tw-py-1 tw-rounded-full tw-ring-1 tw-ring-red-600 tw-no-underline\" data-v-1054464a>Show Less</a></div>")+"</div></div></section>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/_category/index.vue?vue&type=template&id=1054464a&scoped=true&

// EXTERNAL MODULE: external "vue-window-size"
var external_vue_window_size_ = __webpack_require__(95);

// EXTERNAL MODULE: external "vue-infinite-loading"
var external_vue_infinite_loading_ = __webpack_require__(98);
var external_vue_infinite_loading_default = /*#__PURE__*/__webpack_require__.n(external_vue_infinite_loading_);

// EXTERNAL MODULE: external "vue-lazy-hydration"
var external_vue_lazy_hydration_ = __webpack_require__(96);
var external_vue_lazy_hydration_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazy_hydration_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_category/index.vue?vue&type=script&lang=js&
const Products=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39));const CategoryFilter=()=>__webpack_require__.e(/* import() | CategoryFilter */ 0).then(__webpack_require__.bind(null, 260));/* harmony default export */ var _categoryvue_type_script_lang_js_ = ({mixins:[external_vue_window_size_["vueWindowSizeMixin"]],components:{Products,CategoryFilter,InfiniteLoading: external_vue_infinite_loading_default.a,LazyHydrate: external_vue_lazy_hydration_default.a},data(){return{sort_by:"price",page:1,lastPage:0,isInit:true,brands:[],products:[],infiniteId:+new Date(),meta:{},readMore:true};},computed:{image_banner(){if(this.category.category.image_url==="undefined"||this.category.category.image_url===""){return"/banner.webp";}else{return this.category.category.image_url;}}},async asyncData({$http,params}){try{const meta=await $http.$get(`metas/get-by-category/${params.category}`).then(response=>response.result);const category=await $http.$get(`categories/get-by-slug/${params.category}`).then(response=>response.result);return{meta,category};}catch(err){return{meta:{},category:{}};}},// created(){
//   this.fetchProducts()
// },
methods:{infiniteHandler($state){this.$http.$get(`products?category=${this.category.category.name}&page=${this.page}&sort_by=${this.sort_by}`).then(response=>{if(response.result.data.length){this.lastPage=response.result.last_page;response.result.data.forEach(message=>{this.products.push(message);});if(this.page-1===this.lastPage){this.page=1;$state.complete();}else{this.page+=1;}$state.loaded();}else{$state.complete();}}).catch(e=>console.log(e));},filterProducts(){this.page=1;this.products=[];this.infiniteId+=1;}},head(){const meta=this.meta||{};return{title:meta.title,meta:[{hid:"description",name:"description",content:meta.metadescription},{hid:"og:title",name:"og:title",content:meta.title},{hid:"og:description",name:"og:description",content:meta.metadescription},{hid:"og:type",name:"og:type",content:"website"}]};}});
// CONCATENATED MODULE: ./pages/_category/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_categoryvue_type_script_lang_js_ = (_categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/_category/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(202)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1054464a",
  "71af7370"
  
)

/* harmony default export */ var _category = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Products: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=index.js.map