exports.ids = [3];
exports.modules = {

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(209);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7fe8054a", content, true, context)
};

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f39588dc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f39588dc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f39588dc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f39588dc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f39588dc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "footer{font-family:\"Roboto\",sans-serif}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/Footer.vue?vue&type=template&id=f39588dc&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div id=\"apps\" class=\"bg-light clearfix\">","</div>",[_vm._ssrNode("<div class=\"text-center p-1 clearfix\">","</div>",[_c('NuxtImg',{staticClass:"tw-cursor-pointer",attrs:{"format":"webp","src":"/android.webp","width":"149","height":"47","alt":"Google play store"}}),_vm._ssrNode(" "),_c('NuxtImg',{staticClass:"tw-cursor-pointer",attrs:{"format":"webp","src":"/ios.webp","width":"149","height":"46","alt":"Apple store"}}),_vm._ssrNode(" "),_c('NuxtImg',{staticClass:"tw-cursor-pointer tw-rounded-lg",attrs:{"format":"webp","src":"/till.jpeg","width":"168","height":"48","alt":"Till Number"}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<footer class=\"tw-bg-black pt-2 border-top\">","</footer>",[_vm._ssrNode("<div class=\"container-fluid tw-py-4\">","</div>",[_vm._ssrNode("<div class=\"tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-grid-cols-4 tw-gap-4 tw-px-2 sm:tw-px-3 md:tw-px-2 lg:tw-px-2\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<span class=\"tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4\">Get In Touch</span> <ul class=\"list-unstyled tw-text-xs tw-text-white tw-tracking-wide tw-leading-relaxed\"><li>Phone : <span class=\"tw-italic\">0731722682</span></li> <li>\n              Email :\n              <span class=\"tw-italic\">hello@avimar.online</span></li> <li>\n              Store location: <span class=\"tw-italic\">Allsops,Ruaraka-Nairobi</span></li></ul> <span class=\"tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4\">Find us on\n          </span> "),_vm._ssrNode("<ul class=\"list-unstyled text-small\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.facebook.com/avimar/\" target=\"_blank\" rel=\"noopener\" class=\"tw-no-underline tw-text-white\">","</a>",[_c('fa',{staticClass:"text-danger",attrs:{"icon":['fab','facebook'],"title":"Facebook"}}),_vm._ssrNode("\n                Facebook")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.twitter.com/avimar/\" target=\"_blank\" rel=\"noopener\" class=\"tw-no-underline tw-text-white\">","</a>",[_c('fa',{staticClass:"text-danger",attrs:{"icon":['fab','twitter'],"title":"Twitter"}}),_vm._ssrNode("\n                Twitter")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://instagram.com/avimar/\" target=\"_blank\" rel=\"noopener\" class=\"tw-no-underline tw-text-white\">","</a>",[_c('fa',{staticClass:"text-danger",attrs:{"icon":['fab','instagram'],"title":"Instagram"}}),_vm._ssrNode("\n                Instagram")],2)])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col\">","</div>",[_vm._ssrNode("<div class=\"tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4\">\n            Payment Methods\n          </div> "),_vm._ssrNode("<div class=\"tw-flex tw-space-x-2 tw-mb-4\">","</div>",[_c('NuxtImg',{staticClass:"tw-w-10 tw-h-6",attrs:{"src":`/mpesa.png`,"alt":"MPESA"}}),_vm._ssrNode(" "),_c('NuxtImg',{staticClass:"tw-w-10 tw-h-6",attrs:{"src":`/mastercard.png`,"alt":"Mastercard"}}),_vm._ssrNode(" "),_c('NuxtImg',{staticClass:"tw-w-10 tw-h-6",attrs:{"src":`/visa.png`,"alt":"Visa"}})],2),_vm._ssrNode(" <div class=\"tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4\">\n            How to pay\n          </div> <div class=\"tw-text-xs tw-text-white tw-tracking-wide tw-leading-relaxed\">\n          We accept payments in Cryptocurrencies like Bitcoin, USDT and BUSD.\n          </div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<span class=\"tw-text-white tw-text-sm tw-font-medium tw-uppercase tw-mb-4\">Categories</span> "),[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6\">","</div>",[_vm._ssrNode("<ul class=\"list-unstyled\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"tw-text-xs tw-no-underline tw-text-white hover:tw-text-red-600 tw-capitalize",attrs:{"to":"#"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"tw-text-xs tw-no-underline tw-text-white hover:tw-text-red-600 tw-capitalize",attrs:{"to":"#"}},[_vm._v("Contact Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"tw-text-xs tw-no-underline tw-text-white hover:tw-text-red-600 tw-capitalize",attrs:{"to":"#"}},[_vm._v("Terms & Conditions")])],1)],2)])])]],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<span class=\"tw-text-sm tw-text-white tw-font-medium tw-uppercase tw-mb-4\">Quick Links</span> "),_vm._ssrNode("<div class=\"tw-grid tw-grid-cols-2 tw-gap-4\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<ul class=\"list-unstyled tw-text-xs tw-space-y-2\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-white hover:tw-text-red-600",attrs:{"to":"#"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-white hover:tw-text-red-600",attrs:{"to":"#"}},[_vm._v("Contact Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-white hover:tw-text-red-600",attrs:{"to":"#"}},[_vm._v("FAQs")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"tw-no-underline tw-text-white hover:tw-text-red-600",attrs:{"to":"#"}},[_vm._v("Terms & Conditions")])],1)],2)])])],2)],2),_vm._ssrNode(" <div class=\"tw-text-center\"><hr style=\"background: #616161\"> <small class=\"d-block tw-mb-3 tw-text-center tw-text-white\">Avimar©\n          <span class=\"tw-text-blue-500\">2022.</span> All Rights\n          Reserved</small></div>")],2)])],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/partials/Footer.vue?vue&type=template&id=f39588dc&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/Footer.vue?vue&type=script&lang=js&
/* harmony default export */ var Footervue_type_script_lang_js_ = ({name:"Footer",data(){return{itemsPerRow:9};},async fetch(){await this.$store.dispatch("menus/getCategories");},computed:{categories(){return this.$store.state.menus.categories;},groupedCategories(){return this.categories.reduce((accumulator,category,index)=>{if(index%this.itemsPerRow===0){accumulator.push([category]);}else{accumulator[accumulator.length-1].push(category);}return accumulator;},[]);}}});
// CONCATENATED MODULE: ./components/partials/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var partials_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/partials/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(208)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partials_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4f9adb08"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Footer.js.map