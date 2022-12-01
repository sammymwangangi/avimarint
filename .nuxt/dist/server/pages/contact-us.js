exports.ids = [32];
exports.modules = {

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("754f975d", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_da4decc6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_da4decc6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_da4decc6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_da4decc6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_us_vue_vue_type_style_index_0_id_da4decc6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
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

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=template&id=da4decc6&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tw-pt-16 lg:tw-pt-32 tw-pb-6"},[_vm._ssrNode("<div class=\"tw-container tw-mx-auto tw-bg-white tw-py-10 contact_us slide_right\">","</div>",[_vm._ssrNode("<div class=\"tw-flex tw-flex-col tw-text-center\"><div class=\"tw-text-2xl tw-font-semibold tw-py-4\">Get In Touch</div> <div class=\"tw-text-sm tw-font-medium tw-py-2\">\n        Do you want to get in touch? We'd be delighted to hear from you.\n        Here's how to get in touch with us.\n      </div></div> <hr class=\"tw-text-gray-600 tw-py-2\"> <div class=\"tw-flex tw-flex-wrap tw-items-center tw-space-x-4 tw-px-4 tw-mb-4 tw-text-center\"><div class=\"tw-flex tw-items-center\"><span class=\"tw-pr-2\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-red-600\"><path d=\"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\"></path></svg></span>"+_vm._ssrEscape("\n        "+_vm._s(_vm.phone)+"\n      ")+"</div> <div class=\"tw-flex tw-items-center\"><span class=\"tw-pr-2\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-red-600\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path> <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg></span>"+_vm._ssrEscape("\n        "+_vm._s(_vm.email)+"\n      ")+"</div> <div class=\"tw-flex tw-items-center\"><span class=\"tw-pr-2\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-red-600\"><path fill-rule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clip-rule=\"evenodd\"></path></svg></span>\n        Nairobi CBD\n      </div></div> "),_vm._ssrNode("<div class=\"tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-4\">","</div>",[_vm._ssrNode("<div class=\"tw-px-2 tw-py-2\"><form><div class=\"tw-shadow sm:tw-rounded-md sm:tw-overflow-hidden\"><div class=\"tw-px-4 tw-py-5 tw-bg-white tw-space-y-6 sm:tw-p-6\"><div class=\"tw-grid tw-grid-cols-2 tw-gap-6\"><div><label for=\"name\" class=\"tw-block tw-text-sm tw-font-medium tw-text-gray-700\">Name</label> <input type=\"text\" placeholder=\"John Doe\""+_vm._ssrAttr("value",_vm.contact.name)+" class=\"tw-mt-1 focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-block tw-w-full tw-shadow-sm sm:tw-text-sm tw-border-gray-300 tw-rounded-md tw-placeholder-gray-500 tw-placeholder-opacity-50\"></div> <div><label for=\"email\" class=\"tw-block tw-text-sm tw-font-medium tw-text-gray-700\">Your Email</label> <input type=\"email\" placeholder=\"you@example.com\""+_vm._ssrAttr("value",_vm.contact.email)+" class=\"tw-mt-1 focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-block tw-w-full tw-shadow-sm sm:tw-text-sm tw-border-gray-300 tw-rounded-md tw-placeholder-gray-500 tw-placeholder-opacity-50\"></div></div> <div><label for=\"subject\" class=\"tw-block tw-text-sm tw-font-medium tw-text-gray-700\">Subject</label> <input type=\"text\""+_vm._ssrAttr("value",_vm.contact.subject)+" class=\"tw-mt-1 focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-block tw-w-full tw-shadow-sm sm:tw-text-sm tw-border-gray-300 tw-rounded-md\"></div> <div><label for=\"message\" class=\"tw-block tw-text-sm tw-font-medium tw-text-gray-700\">Message</label> <textarea rows=\"3\" placeholder=\"Hello...\" class=\"tw-shadow-sm focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-mt-1 tw-block tw-w-full sm:tw-text-sm tw-border tw-border-gray-300 tw-rounded-md tw-placeholder-gray-500 tw-placeholder-opacity-75\">"+_vm._ssrEscape(_vm._s(_vm.contact.message))+"</textarea> <p class=\"tw-mt-2 tw-text-sm tw-text-gray-500\">\n                  Tell us more about your issue/concern/appreciation.\n                </p></div></div> <div class=\"tw-px-4 tw-py-3 tw-bg-gray-50 tw-text-right sm:tw-px-6\"><button type=\"submit\" class=\"tw-inline-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-shadow-sm tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-red-600 hover:tw-bg-red-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500\">\n                Submit\n              </button></div></div></form></div> "),_vm._ssrNode("<div class=\"map_area tw-overflow-hidden\">","</div>",[_vm._ssrNode("<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8182862860544!2d36.81951371475389!3d-1.2828548990643256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3467e7802e4812cc!2sNAIROBI+DRINKS!5e0!3m2!1sen!2ske!4v1525864637139\" width=\"600\" height=\"220\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" style=\"border:0\"></iframe> "),_vm._ssrNode("<div class=\"tw-px-4 tw-py-4\">","</div>",[_vm._ssrNode("<div class=\"tw-text-lg tw-font-semibold\">Find Us On:</div> "),_vm._ssrNode("<div class=\"tw-flex tw-space-x-2 tw-my-4\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"https://www.facebook.com/nairobidrinks/\" target=\"_blank\" class=\"text-decoration-none\">","</a>",[_c('fa',{staticClass:"text-primary fa-2x",attrs:{"icon":['fab','facebook'],"title":"Facebook"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"https://www.twitter.com/nairobidrinks/\" target=\"_blank\" class=\"text-decoration-none\">","</a>",[_c('fa',{staticClass:"text-info fa-2x",attrs:{"icon":['fab','twitter'],"title":"Twitter"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"https://instagram.com/nairobidrinks/\" target=\"_blank\" class=\"text-decoration-none\">","</a>",[_c('fa',{staticClass:"tw-text-red-600 fa-2x",attrs:{"icon":['fab','instagram'],"title":"Instagram"}})],1)])],2)],2)],2)],2)],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=template&id=da4decc6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=script&lang=js&
/* harmony default export */ var contact_usvue_type_script_lang_js_ = ({name:'ContactPage',transition:'slide-right',computed:{...Object(external_vuex_["mapGetters"])(['phone','email'])},data(){return{truthy:true,contact:{}};},methods:{async contactUs(){await this.$http.$post('/contact-us',JSON.stringify(this.contact),{headers:{'Content-Type':'application/json',Accept:'application/json'}}).then(res=>{this.$toast.success(res.message);this.contact={};}).catch(err=>{console.log(err);this.$toast.error(err.message);});}},async asyncData({$http}){try{const meta=await $http.$get(`/metas/get-by-category/contact`).then(response=>response.result);return{meta};}catch(err){const defaultMeta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{meta:{}};}},head(){return{title:this.meta.title,meta:[{hid:'description',name:'description',content:this.meta.metadescription},{hid:'og:title',name:'og:title',content:this.meta.title},{hid:'og:description',name:'og:description',content:this.meta.metadescription},{hid:'og:type',name:'og:type',content:'website'},{hid:'og:url',name:'og:url',content:`https://liquorspring.co.ke/contact-us`}]};}});
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js_ = (contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/contact-us.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "661c3973"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-us.js.map