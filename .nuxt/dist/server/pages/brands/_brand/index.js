exports.ids = [27];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("31bdda62", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23fa3cec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23fa3cec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23fa3cec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23fa3cec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_23fa3cec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-dark[data-v-23fa3cec]{outline:none}.btn-dark[data-v-23fa3cec]:active,.btn-dark[data-v-23fa3cec]:focus{outline:none;border:none}@media screen and (max-width:481px){#jumbo[data-v-23fa3cec]{position:relative;top:21px}hr[data-v-23fa3cec]{margin-top:-20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/brands/_brand/index.vue?vue&type=template&id=23fa3cec&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tw-pt-16 lg:tw-pt-32"},[_vm._ssrNode("<div class=\"clearfix\" data-v-23fa3cec>","</div>",[_c('NuxtImg',{directives:[{name:"show",rawName:"v-show",value:_vm.windowWidth>481,expression:"windowWidth > 481"}],staticClass:"mb-2 img-fluid",attrs:{"src":`/banner.webp`,"alt":`liquorspring`}}),_vm._ssrNode(" "),_c('NuxtImg',{directives:[{name:"show",rawName:"v-show",value:_vm.windowWidth<=481,expression:"windowWidth <= 481"}],staticClass:"mb-2",staticStyle:{"height":"auto","max-width":"100%"},attrs:{"src":"/banner.webp","alt":`liquorspring`}})],2),_vm._ssrNode(" <nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\" data-v-23fa3cec><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\" data-v-23fa3cec><li class=\"tw-inline-flex tw-items-center\" data-v-23fa3cec><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\" data-v-23fa3cec><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\" data-v-23fa3cec><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" data-v-23fa3cec></path></svg>\n          Home\n        </a></li> <li aria-current=\"page\" data-v-23fa3cec><div class=\"tw-flex items-center\" data-v-23fa3cec><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\" data-v-23fa3cec><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\" data-v-23fa3cec></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\" data-v-23fa3cec>"+_vm._ssrEscape(_vm._s(_vm._f("capitalize")(_vm.$route.params.brand.replace(/-/g," "))))+"</span></div></li></ol></nav> "),_vm._ssrNode("<div class=\"tw-mb-3 tw-mt-1\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"heading tw-mt-1\" data-v-23fa3cec><h1 class=\"heading_one tw-text-center tw-text-red-600\" data-v-23fa3cec>"+_vm._ssrEscape("\n        "+_vm._s(_vm.brand.headerOne||"Liquor Spring – Free alcohol delivery services at best prices")+"\n      ")+"</h1></div> "),_vm._ssrNode("<div class=\"tw-mt-5 clearfix tw-flex sm:tw-hidden md:tw-hidden lg:tw-hidden tw-justify-center\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div data-v-23fa3cec>","</div>",[_c('button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-2",modifiers:{"sidebar-2":true}}],staticClass:"btn btn-sm btn-dark tw-ml-2 tw-mr-2 tw-inline sm:tw-hidden md:tw-hidden lg:tw-hidden",attrs:{"type":"button"}},[_c('fa',{attrs:{"icon":"filter"}}),_vm._ssrNode(" Filters\n        ")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-23fa3cec>","</div>",[_vm._ssrNode("<label for=\"sort\" class=\"sr-only\" data-v-23fa3cec></label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.sort_by,expression:"sort_by"}],staticClass:"form-control form-control-sm tw-inline modal-btn tw-bg-transparent focus:tw-ring-0",staticStyle:{"width":"220px"},attrs:{"id":"sort"},on:{"change":[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.sort_by=$event.target.multiple?$$selectedVal:$$selectedVal[0];},_vm.filterProducts]}},[_c('option',{attrs:{"value":"price","selected":""}},[_vm._v("Sort By Price / ABV")]),_vm._v(" "),_c('option',{attrs:{"value":"price_low"}},[_vm._v("Price Low - High")]),_vm._v(" "),_c('option',{attrs:{"value":"price_high"}},[_vm._v("Price High - Low")]),_vm._v(" "),_c('option',{attrs:{"value":"alcohol_low"}},[_vm._v("Alcohol % Low-High")]),_vm._v(" "),_c('option',{attrs:{"value":"alcohol_high"}},[_vm._v("Alcohol % High-Low")])])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<section data-v-23fa3cec>","</section>",[_vm._ssrNode("<div class=\"tw-container tw-px-4 tw-py-4 tw-mx-auto\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"col-sm-2\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"tw-text-left tw-px-2 tw-py-2 tw-my-2 tw-rounded tw-bg-white\""+_vm._ssrStyle(null,null,{display:_vm.windowWidth>576?'':'none'})+" data-v-23fa3cec><span class=\"tw-text-red-600 tw-uppercase\" data-v-23fa3cec>Sort by price</span> <div class=\"text-justify d-inline pl-3\" data-v-23fa3cec><div class=\"form-check\" data-v-23fa3cec><input type=\"radio\" name=\"sort_by\" id=\"sortPrice1\" value=\"price_high\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"price_high"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-23fa3cec> <label for=\"sortPrice1\" class=\"form-check-label\" data-v-23fa3cec>\n                  High-low\n                </label></div> <div class=\"form-check\" data-v-23fa3cec><input type=\"radio\" name=\"sort_by\" id=\"sortPrice2\" value=\"price_low\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"price_low"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-23fa3cec> <label for=\"sortPrice2\" class=\"form-check-label\" data-v-23fa3cec>\n                  Low-High\n                </label></div></div></div> "),_vm._ssrNode("<div class=\"tw-text-left tw-px-2 tw-py-2 tw-my-2 tw-rounded tw-bg-white\""+_vm._ssrStyle(null,null,{display:_vm.windowWidth>576?'':'none'})+" data-v-23fa3cec>","</div>",[_vm._ssrNode("<span class=\"tw-text-red-600 tw-my-2 tw-uppercase\" data-v-23fa3cec>Sort by Alcohol %</span> "),_vm._ssrNode("<div class=\"tw-text-justify d-inline tw-pl-3\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"form-check\" data-v-23fa3cec><input type=\"radio\" name=\"sort_by\" id=\"alcoholPercentage1\" value=\"alcohol_high\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"alcohol_high"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-23fa3cec> <label for=\"alcoholPercentage1\" class=\"form-check-label\" data-v-23fa3cec>\n                  High-low\n                </label></div> <div class=\"form-check\" data-v-23fa3cec><input type=\"radio\" name=\"sort_by\" id=\"alcoholPercentage2\" value=\"alcohol_low\""+_vm._ssrAttr("checked",_vm._q(_vm.sort_by,"alcohol_low"))+" class=\"form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0\" data-v-23fa3cec> <label for=\"alcoholPercentage2\" class=\"form-check-label\" data-v-23fa3cec>\n                  Low-High\n                </label></div> <hr data-v-23fa3cec> "),_c('nuxt-link',{staticClass:"text-decoration-none text-dark",attrs:{"to":"/countries"}},[_vm._v("Shop By Country\n              ")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-sm-10 products\" data-v-23fa3cec>","</div>",[_c('Products',{attrs:{"products":_vm.products}}),_vm._ssrNode(" "),_vm.products.length?_c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:_vm.handleScrolledToBottom,expression:"handleScrolledToBottom"}]},[]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tw-container tw-mx-auto tw-py-4\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"tw-flex tw-flex-col\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"-tw-my-2 tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<div class=\"tw-py-2 tw-align-middle tw-inline-block tw-min-w-full sm:tw-px-6 lg:tw-px-8\" data-v-23fa3cec>","</div>",[_vm.products.length>0?_vm._ssrNode("<div class=\"tw-shadow overflow-hidden\" data-v-23fa3cec>","</div>",[_vm._ssrNode("<table class=\"tw-min-w-full\" data-v-23fa3cec>","</table>",[_vm._ssrNode("<thead class=\"tw-bg-gray-800\" data-v-23fa3cec><tr data-v-23fa3cec><th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-23fa3cec>\n                            Product Name\n                          </th> <th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-23fa3cec>\n                            Size\n                          </th> <th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-23fa3cec>\n                            Price\n                          </th> <th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-23fa3cec>\n                            Alcohol Content\n                          </th> <th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-23fa3cec>\n                            Country\n                          </th> <th scope=\"tw-col\" class=\"py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider\" data-v-23fa3cec>\n                            Category\n                          </th></tr></thead> "),_vm._l(_vm.products,function(item,key){return _vm._ssrNode("<tbody class=\"tw-bg-white\" data-v-23fa3cec>","</tbody>",_vm._l(item.quantities,function(quantity,i){return _vm._ssrNode("<tr class=\"tw-p-2 even:tw-bg-gray-100\" data-v-23fa3cec>","</tr>",[_vm._ssrNode("<td class=\"tw-px-6 tw-py-4 tw-whitespace-nowrap\" data-v-23fa3cec>","</td>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-blue-600",attrs:{"to":`/product/${item.url}`}},[_c('div',[_vm._v(" "+_vm._s(_vm._f("capitalize")(item.name)))])])],1),_vm._ssrNode(" <td class=\"tw-whitespace-nowrap tw-text-sm tw-text-gray-500\" data-v-23fa3cec><div data-v-23fa3cec>"+_vm._ssrEscape(" "+_vm._s(quantity.quantity))+"</div></td> <td class=\"tw-whitespace-nowrap tw-text-sm tw-text-gray-500\" data-v-23fa3cec><div data-v-23fa3cec>"+_vm._ssrEscape("\n                               "+_vm._s(_vm._f("currency")(quantity.discount))+"\n                            ")+"</div></td> <td class=\"tw-whitespace-nowrap tw-text-sm tw-text-gray-500\" data-v-23fa3cec><div data-v-23fa3cec>"+_vm._ssrEscape(" "+_vm._s(item.percentage)+"%")+"</div></td> <td class=\"tw-whitespace-nowrap tw-text-sm tw-text-gray-500\" data-v-23fa3cec><div data-v-23fa3cec>"+_vm._ssrEscape(" "+_vm._s(item.country))+"</div></td> <td class=\"tw-whitespace-nowrap tw-text-sm tw-text-gray-500\" data-v-23fa3cec><div data-v-23fa3cec>"+_vm._ssrEscape(" "+_vm._s(item.category))+"</div></td>")],2);}),0);})],2)]):_vm._e()])])])])],2)],2)])]),_vm._ssrNode(" <section"+_vm._ssrStyle(null,null,{display:_vm.brand.description?'':'none'})+" data-v-23fa3cec><div class=\"tw-container tw-px-4 tw-py-4 tw-mx-auto\" data-v-23fa3cec><div class=\"tw-bg-white tw-shadow tw-px-4 tw-py-4 tw-mb-3 tw-rounded tw-border-0\" data-v-23fa3cec><div class=\"tw-p-4\" data-v-23fa3cec><span data-v-23fa3cec>"+_vm._s(_vm.brand.description)+"</span></div></div></div></section>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/brands/_brand/index.vue?vue&type=template&id=23fa3cec&scoped=true&

// EXTERNAL MODULE: external "vue-window-size"
var external_vue_window_size_ = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/brands/_brand/index.vue?vue&type=script&lang=js&
const Products=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39));/* harmony default export */ var _brandvue_type_script_lang_js_ = ({mixins:[external_vue_window_size_["vueWindowSizeMixin"]],components:{Products},data(){return{sort_by:"price",page:1,lastPage:0,isInit:true,products:[],category:{},infiniteId:+new Date(),display:{"brand-picks":"brand-picks"}};},async asyncData({$http,params}){try{const brand=await $http.$get(`/brands/slug/${params.brand}`).then(response=>response.result);return{brand};}catch(err){return{brand:{}};}},async fetch(){let products=await this.$http.$get(`products?brand=${this.brand.brand}&page=${this.page}&sort_by=${this.sort_by}`);this.products=this.products.concat(products.result.data);this.lastPage=products.result.last_page;},methods:{handleScrolledToBottom(isVisible){if(!isVisible){return;}if(this.page>=this.lastPage){return;}this.page++;this.$fetch();},filterProducts(){this.products=[];this.page=1;this.$fetch();}},head(){const meta=this.meta||{};return{title:meta.title,meta:[{hid:"description",name:"description",content:meta.metadescription},{hid:"og:title",name:"og:title",content:meta.title},{hid:"og:description",name:"og:description",content:meta.metadescription},{hid:"og:type",name:"og:type",content:"website"}]};}});
// CONCATENATED MODULE: ./pages/brands/_brand/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var brands_brandvue_type_script_lang_js_ = (_brandvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/brands/_brand/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  brands_brandvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23fa3cec",
  "29b97296"
  
)

/* harmony default export */ var _brand = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Products: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=index.js.map