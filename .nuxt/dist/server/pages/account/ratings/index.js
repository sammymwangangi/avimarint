exports.ids = [23];
exports.modules = {

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/ratings/index.vue?vue&type=template&id=4ac56c8c&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<section class=\"py-5\">","</section>",[_vm._ssrNode("<div class=\"container py-5\">","</div>",[_vm._ssrNode("<nav aria-label=\"breadcrumb\">","</nav>",[_vm._ssrNode("<ol class=\"breadcrumb\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/account/dashboard"}},[_vm._v("Dashboard")])],1),_vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\">Reviews and Ratings</li>")],2)]),_vm._ssrNode(" <div class=\"card justify-content-center my-3 rounded-0 p-4 shadow\" style=\"border-left:3px solid #EC2326\"><h5>My ratings and reviews</h5> <div class=\"card-body table-responsive\"><table id=\"basic-datatable\" class=\"table table-bordered table-hover\"><thead class=\"thead-light\"><tr><th>Total Stars</th> <th>Review</th> <th>Product</th> <th>Reviewed On</th></tr></thead> <tbody>"+_vm._ssrList(_vm.ratings,function(rating){return"<tr><td><strong class=\"text-danger\">"+_vm._ssrEscape(_vm._s(rating.stars))+"</strong></td> <td>"+_vm._ssrEscape(_vm._s(rating.review))+"</td> <td>"+_vm._ssrEscape("\n                "+_vm._s(_vm._f("capitalize")(rating.product.name))+"\n              ")+"</td> <td>"+_vm._ssrEscape(_vm._s(rating.created_at||''))+"</td></tr>";})+"</tbody></table></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/account/ratings/index.vue?vue&type=template&id=4ac56c8c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/ratings/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ratingsvue_type_script_lang_js_ = ({middleware:'auth',data(){return{ratings:[]};},computed:{...Object(external_vuex_["mapGetters"])(['isAuthenticated','loggedInUser'])},mounted(){this.fetchRatings();},methods:{async fetchRatings(){await this.$http.$get('ratings/my-reviews',{headers:{'Authorization':this.$auth.getToken('local'),'Content-Type':'application/json'}}).then(response=>this.ratings=response.result);}},head(){const meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/account/ratings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_ratingsvue_type_script_lang_js_ = (ratingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/account/ratings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_ratingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "242cffbf"
  
)

/* harmony default export */ var ratings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map