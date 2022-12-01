exports.ids = [14];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5a0d6152", content, true, context)
};

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6c9cca7a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6c9cca7a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6c9cca7a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6c9cca7a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6c9cca7a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (max-width:768px){.ico-nav{position:relative;top:2px}.nav-link{text-transform:capitalize;font-weight:700;font-size:.9em;z-index:9999}.dropdown-toggle:after{display:none}.dropdown-menu{padding-top:0;border-radius:0;width:50px;text-transform:capitalize}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/Sidebar.vue?vue&type=template&id=6c9cca7a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<hr> "),_vm._ssrNode("<div class=\"container\">","</div>",[[_vm._ssrNode("<div class=\"row\"><div class=\"col-6\"><ul class=\"list-unstyled\"><li><a href=\"/\" class=\"pb-4 text-dark text-decoration-none mx-3\" style=\"font-size:1.2em; font-weight:500; line-height:46px;\">All</a></li></ul></div></div> "),_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"tw-capitalize tw-no-underline tw-text-xl tw-font-medium tw-text-gray-700 hover:tw-text-red-600 mx-3",attrs:{"to":"#"}},[_vm._v("Blog")])],1)]],2),_vm._ssrNode(" "),[_vm._ssrNode("<div class=\"text-center\" style=\"position:fixed;bottom: 16%;left: 22%;\">","</div>",[_c('NuxtImg',{staticStyle:{"cursor":"pointer","border-radius":"5px","width":"168px","height":"48px"},attrs:{"src":"#","alt":"Till Number"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center pl-4\" style=\"position:fixed;bottom: 8%;\">","</div>",[_vm._ssrNode("<a>","</a>",[_c('NuxtImg',{staticStyle:{"cursor":"pointer","width":"120px","height":"50px"},attrs:{"src":"#","alt":"Google play store"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<a>","</a>",[_c('NuxtImg',{staticStyle:{"cursor":"pointer","width":"120px","height":"50px"},attrs:{"src":"#","alt":"Apple store"}})],1)],2)]],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/partials/Sidebar.vue?vue&type=template&id=6c9cca7a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/Sidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({props:{categories:{required:true}},data(){return{itemsPerRow:7};},computed:{groupedCategories(){return this.categories.reduce((accumulator,category,index)=>{if(index%this.itemsPerRow===0){accumulator.push([category]);}else{accumulator[accumulator.length-1].push(category);}return accumulator;},[]);}}});
// CONCATENATED MODULE: ./components/partials/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var partials_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/partials/Sidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(120)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partials_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "526b8d6a"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=partials-sidebar.js.map