exports.ids = [44];
exports.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7d89bb5c", content, true, context)
};

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b9a801f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b9a801f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b9a801f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b9a801f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b9a801f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table th[data-v-0b9a801f]{font-family:\"Roboto\",sans-serif;font-weight:900}#download-btn[data-v-0b9a801f]{position:sticky;top:15%;z-index:10}@media screen and (max-width:481px){#breadcrumb[data-v-0b9a801f]{display:none}#download-btn[data-v-0b9a801f]{position:sticky;top:18%;z-index:10}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pricelist/index.vue?vue&type=template&id=0b9a801f&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<section class=\"tw-pt-32 lg:tw-pt-32 tw-px-2\" data-v-0b9a801f>","</section>",[_vm._ssrNode("<div class=\"tw-container mx-auto\" data-v-0b9a801f><nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\" data-v-0b9a801f><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\" data-v-0b9a801f><li class=\"tw-inline-flex tw-items-center\" data-v-0b9a801f><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\" data-v-0b9a801f><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\" data-v-0b9a801f><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" data-v-0b9a801f></path></svg>\n              Home\n            </a></li> <li aria-current=\"page\" data-v-0b9a801f><div class=\"tw-flex items-center\" data-v-0b9a801f><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\" data-v-0b9a801f><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\" data-v-0b9a801f></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\" data-v-0b9a801f>"+_vm._ssrEscape(_vm._s(_vm._f("capitalize")('Pricelist')))+"</span></div></li></ol></nav></div> "),_vm._ssrNode("<div class=\"tw-container mx-auto\" data-v-0b9a801f>","</div>",[_vm._ssrNode("<h1 class=\"tw-text-red-600 tw-text-center tw-font-semibold\" data-v-0b9a801f>"+_vm._ssrEscape("\n        "+_vm._s(_vm.meta.headerOne||'')+"\n      ")+"</h1> <button id=\"download-btn\" class=\"btn btn-primary clearfix d-print-none float-right\" data-v-0b9a801f><i class=\"fas fa-download fa-fw\" data-v-0b9a801f></i> Download\n      </button> <div class=\"clearfix\" data-v-0b9a801f> </div> "),_vm.loading?_vm._ssrNode("<div data-v-0b9a801f>","</div>",[_vm._ssrNode("<span role=\"status\" aria-hidden=\"true\" class=\"spinner-border justify-content-center tw-text-red-600 spinner-border-md\" data-v-0b9a801f></span>\n        ..loading pricelist\n      ")],2):_vm._ssrNode("<div id=\"printList\" data-v-0b9a801f>","</div>",[_vm._ssrNode("<div style=\"text-align:center;border-bottom:2px solid #D45052 \" data-v-0b9a801f>","</div>",[_c('NuxtImg',{staticStyle:{"width":"150px","height":"50px"},attrs:{"src":"logo.png","alt":"logo"}}),_vm._ssrNode(" <h5 data-v-0b9a801f>Liquorspring Wine and Spirits Pricelist</h5> <p data-v-0b9a801f><span style=\"color:#D45052;\" data-v-0b9a801f>+254705646186</span><br data-v-0b9a801f>\n            info@liquorspring.co.ke<br data-v-0b9a801f>\n            Website: https://liquorspring.co.ke\n            </p>")],2),_vm._ssrNode(" "),_vm._l(_vm.products,function(product,index){return _vm._ssrNode("<div class=\"card tw-shadow tw-bg-white tw-p-4 tw-mb-2 tw-rounded-0\" data-v-0b9a801f>","</div>",[_vm._ssrNode("<h3 class=\"tw-capitalize tw-text-red-600\" data-v-0b9a801f>"+_vm._ssrEscape("\n            "+_vm._s(_vm._f("capitalize")(index))+" Prices\n          ")+"</h3> "),_vm._ssrNode("<div class=\"table-responsive\" data-v-0b9a801f>","</div>",[_vm._ssrNode("<table class=\"table table-bordered text-wrap\" data-v-0b9a801f>","</table>",[_vm._ssrNode("<thead data-v-0b9a801f><tr class=\"text-left\" data-v-0b9a801f><th style=\"text-align:left\" data-v-0b9a801f>Product Name</th> <th data-v-0b9a801f>Price</th> <th data-v-0b9a801f>Availability</th></tr></thead> "),_vm._ssrNode("<tbody data-v-0b9a801f>","</tbody>",_vm._l(product,function(item,i){return _vm._ssrNode("<tr data-v-0b9a801f>","</tr>",[_vm._ssrNode("<td data-v-0b9a801f>","</td>",[_vm._ssrNode("\n                      \n                    "),_c('nuxt-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":`/product/${item.url}`}},[_vm._v(_vm._s(_vm._f("capitalize")(item.name))+"\n                      "+_vm._s(item.quantity)+"\n                    ")])],2),_vm._ssrNode(" <td data-v-0b9a801f>"+_vm._ssrEscape("  "+_vm._s(_vm._f("currency")(item.discount)))+"</td> <td data-v-0b9a801f>\n                      \n                    "+(item.available===true?"\n                      In Stock\n                    ":"\n                      Out of stock\n                    ")+"</td>")],2);}),0)],2)])],2);})],2)],2)],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/pricelist/index.vue?vue&type=template&id=0b9a801f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pricelist/index.vue?vue&type=script&lang=js&
/* harmony default export */ var pricelistvue_type_script_lang_js_ = ({data(){return{loading:false,products:[],meta:{}};},async fetch(){this.loading=true;await this.$http.$get('products/price-list').then(data=>{this.loading=false;this.products=data.result;}).catch(err=>{this.loading=false;console.log(err.message);});},methods:{print(){let divContents=document.getElementById('printList').innerHTML;let a=window.open('','','height=500, width=500');a.document.write('<html lang="en">');a.document.write(divContents);a.document.write('</body></html>');a.document.close();a.print();}},async asyncData({$http}){try{const meta=await $http.$get('metas/get-by-category/pricelist').then(response=>response.result);return{meta};}catch(err){return{meta:{}};}},head(){this.meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:this.meta.title,meta:[{hid:'description',name:'description',content:this.meta.metadescription},{hid:'og:title',name:'og:title',content:this.meta.title},{hid:'og:description',name:'og:description',content:this.meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/pricelist/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pricelistvue_type_script_lang_js_ = (pricelistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/pricelist/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(190)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pricelistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b9a801f",
  "702128d2"
  
)

/* harmony default export */ var pricelist = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map