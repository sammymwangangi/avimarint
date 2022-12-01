exports.ids = [1];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=home-products.js.map