exports.ids = [46];
exports.modules = {

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/_term/index.vue?vue&type=template&id=b1c188a2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"tw-pt-16 lg:tw-pt-32"},[_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div class=\"tw-container tw-mx-auto\">","</div>",[_vm._ssrNode("<nav id=\"breadcrumb\" aria-label=\"breadcrumb\" class=\"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5\"><ol class=\"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3\"><li class=\"tw-inline-flex tw-items-center\"><a href=\"/\" class=\"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-4 tw-h-4 tw-mr-2\"><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\"></path></svg>\n              Home\n            </a></li> <li aria-current=\"page\"><div class=\"tw-flex items-center\"><svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tw-w-6 tw-h-6 tw-text-gray-400\"><path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"></path></svg> <span class=\"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500\">"+_vm._ssrEscape(_vm._s(_vm._f("capitalize")(_vm.$route.params.term)))+"</span></div></li></ol></nav> <div class=\"header_area tw-mt-1\"><h1 class=\"tw-mt-2 tw-text-center tw-text-red-600 heading_one\">"+_vm._ssrEscape("\n          Search results for "+_vm._s(_vm.$route.params.term)+"\n        ")+"</h1></div> "),_vm.products.length>0?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"tw-bg-gray-100 tw-p-2\">","</div>",[_c('products',{attrs:{"products":_vm.products}})],1)]):_vm._e()],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/search/_term/index.vue?vue&type=template&id=b1c188a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/_term/index.vue?vue&type=script&lang=js&
const Products=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39));/* harmony default export */ var _termvue_type_script_lang_js_ = ({components:{Products},data(){return{products:[]};},methods:{async getProducts(){try{await this.$http.$get(`products/search?query=${this.$route.params.term}`).then(response=>{this.products=response.result.products;});}catch(error){console.log(error);}}},created(){this.getProducts();}});
// CONCATENATED MODULE: ./pages/search/_term/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_termvue_type_script_lang_js_ = (_termvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/search/_term/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_termvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "313b792f"
  
)

/* harmony default export */ var _term = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Products: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=index.js.map