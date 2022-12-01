exports.ids = [6];
exports.modules = {

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/article-list.vue?vue&type=template&id=3209ffc7&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('nuxt-link',{staticClass:"tw-group tw-no-underline",attrs:{"to":`/blog/${_vm.url}`}},[_c('div',{staticClass:"tw-flex tw-flex-col tw-overflow-hidden tw-min-h-[360px] tw-max-h-[360px] tw-pb-4 tw-bg-white tw-shadow-md tw-border tw-border-gray-200 tw-rounded-lg tw-max-w-sm hover:tw-shadow-lg hover:tw-border-transparent tw-transition tw-duration-500 tw-ease-in-out"},[_c('NuxtImg',{staticClass:"tw-flex-1 tw-object-contain tw-rounded-t-lg",attrs:{"src":_vm.image_url,"alt":_vm.url,"height":"219","width":"384"}}),_vm._v(" "),_c('div',{staticClass:"tw-px-4 tw-py-4 tw-mb-4"},[_c('div',{staticClass:"tw-font-medium tw-font-serif tw-text-gray-500 tw-mb-3"},[_vm._v("\n          "+_vm._s(_vm.publishedOn)+" by "+_vm._s(_vm.publishedBy)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"tw-clear-both tw-text-gray-900 tw-font-semibold tw-text-xl tw-tracking-tight tw-mb-2 tw-capitalize"},[_vm._v("\n          "+_vm._s(_vm.title)+"\n        ")])])],1)])],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/blog/article-list.vue?vue&type=template&id=3209ffc7&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/article-list.vue?vue&type=script&lang=js&
/* harmony default export */ var article_listvue_type_script_lang_js_ = ({name:'articleList',props:{title:String,preview:String,url:String,image:String,image_url:String,publishedOn:String},computed:{...Object(external_vuex_["mapState"])({publishedBy:state=>state.publishedBy}),env(){return process.env.imagesURL;},_preview(){return this.preview.slice(0,255)||'';}},data(){return{};}});
// CONCATENATED MODULE: ./components/blog/article-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_article_listvue_type_script_lang_js_ = (article_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/blog/article-list.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_article_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1c674f86"
  
)

/* harmony default export */ var article_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-article-list.js.map