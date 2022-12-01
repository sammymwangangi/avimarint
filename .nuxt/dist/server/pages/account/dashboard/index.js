exports.ids = [20];
exports.modules = {

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/dashboard/index.vue?vue&type=template&id=1620fb0c&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<section class=\"py-5\">","</section>",[_vm._ssrNode("<div class=\"container py-5\">","</div>",[_vm._ssrNode("<nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb\"><li aria-current=\"page\" class=\"breadcrumb-item active\">Dashboard</li></ol></nav> <h5 class=\"text-success\"><strong>"+_vm._ssrEscape("Welcome "+_vm._s(_vm.loggedInUser.name||'auth user not found')+" ")+"</strong></h5> "),_vm._ssrNode("<div class=\"card justify-content-center my-3 rounded-0 p-4 shadow\" style=\"border-left:3px solid #EC2326\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-4\"><a href=\"#\" class=\"text-decoration-none\"><div class=\"card text-white text-center mb-3\" style=\"max-width: 18rem;\"><div class=\"card-header bg-primary\"><i class=\"fas fa-list fa-fw\"></i>Total Orders</div> <div class=\"card-body\"><h2 class=\"card-title text-dark font-weight-bold\">"+_vm._ssrEscape(_vm._s(_vm.orders.length||0))+"</h2></div></div></a></div> "),_vm._ssrNode("<div class=\"col-sm-4\">","</div>",[_c('nuxt-link',{staticClass:"text-decoration-none",attrs:{"to":"/account/ratings/"}},[_c('div',{staticClass:"card text-white text-center mb-3 clearfix",staticStyle:{"max-width":"18rem"}},[_c('div',{staticClass:"card-header bg-success"},[_c('i',{staticClass:"fas fa-star fa-fw"}),_vm._v(" Total reviews")]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h2',{staticClass:"card-title text-dark font-weight-bold"},[_vm._v(_vm._s(_vm.ratings.length||0))])])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-sm-4\">","</div>",[_c('nuxt-link',{staticClass:"text-decoration-none",attrs:{"to":"/favorite"}},[_c('div',{staticClass:"card text-white text-center mb-3 clearfix",staticStyle:{"max-width":"18rem"}},[_c('div',{staticClass:"card-header bg-warning"},[_c('i',{staticClass:"fas fa-heart fa-fw"}),_vm._v(" Total Wishlist items")]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h2',{staticClass:"card-title text-dark font-weight-bold"},[_vm._v(_vm._s(_vm.favorites.length||0))])])])])],1)],2),_vm._ssrNode(" <hr> <h5>My recent Orders</h5> "),_vm._ssrNode("<div class=\"card-body table-responsive\">","</div>",[_vm._ssrNode("<table id=\"basic-datatable\" class=\"text-center table table-bordered table-hover\">","</table>",[_vm._ssrNode("<thead class=\"thead-light\"><tr><th>Order No.</th> <th>My Location</th> <th>Placed On</th> <th>Total Amount</th> <th>Products</th> <th>Action</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l(_vm.orders,function(order){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td><strong class=\"text-danger\">"+_vm._ssrEscape("#"+_vm._s(order.orderNo||''))+"</strong></td> <td>"+_vm._ssrEscape(_vm._s(order.location||''))+"</td> <td>"+_vm._ssrEscape(_vm._s(order.placedOn||''))+"</td> <td>"+_vm._ssrEscape(_vm._s(_vm._f("currency")(order.total)))+"</td> <td>"+_vm._ssrList(order.products,function(product,key){return"<span class=\"badge badge-light p-2 d-inline-block\"><b class=\"text-primary\">"+_vm._ssrEscape(_vm._s(product.productQuantity))+"</b>"+_vm._ssrEscape("-"+_vm._s(_vm._f("capitalize")(product.productName))+","+_vm._s(product.productUnit)+"\n                                     ")+"</span>";})+"</td> "),_vm._ssrNode("<td>","</td>",[_c('button',{directives:[{name:"b-modal",rawName:"v-b-modal",value:`wp-${order._id}`,expression:"`wp-${order._id}`"}],staticClass:"btn btn-primary btn-sm m-1"},[_vm._ssrNode("<i class=\"fa fa-pencil-alt\"></i> Re-Order\n                ")])]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('b-modal',{ref:`${order._id}`,refInFor:true,attrs:{"id":`wp-${order._id}`,"hide-footer":""},scopedSlots:_vm._u([{key:"modal-title",fn:function(){return[_vm._v("\n                    Order No. "),_c('code',[_vm._v(_vm._s(order.orderNo))])];},proxy:true}],null,true)},[_vm._v(" "),_c('div',{staticClass:"d-block"},[_c('p',[_vm._v("Are you sure you want to re-order this drink?")])]),_vm._v(" "),_c('b-button',{staticClass:"mt-3 ml-3",attrs:{"variant":"success","small":""},on:{"click":function($event){return _vm.reOrder(order);}}},[_vm._v("Ok")]),_vm._v(" "),_c('b-button',{staticClass:"mt-3 ml-3",attrs:{"variant":"danger","small":""},on:{"click":function($event){return _vm.$bvModal.hide(`wp-${order._id}`);}}},[_vm._v("\n                    Cancel\n                  ")])],1)],1)],2);}),0)],2)])],2)],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/account/dashboard/index.vue?vue&type=template&id=1620fb0c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/dashboard/index.vue?vue&type=script&lang=js&
/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({middleware:'auth',data(){return{orders:[],ratings:[]};},computed:{...Object(external_vuex_["mapGetters"])(['isAuthenticated','loggedInUser']),...Object(external_vuex_["mapState"])({favorites:state=>state.favorite.favorite})},mounted(){this.fetchOrders();this.fetchRatings();},methods:{async reOrder(order){const formData={name:order.name,phone:order.phone,email:order.email,location:order.location,instructions:order.instructions,total:order.total,products:order.products,paymentOption:order.paymentOption,pending:true,rejected:false,handled:false,approved:false,confirmed:false,amountPaid:0,paid:false,scheduled:false,shipped:false,discountApplied:0,orderCategory:"Home delivery",medium:"site",deliveryDate:""};await this.$http.$post('place-order',JSON.stringify(formData),{headers:{'Content-Type':'application/json','Accept':'application/json'}}).then(response=>{console.log(response);this.$bvModal.hide(`wp-${order._id}`);this.$toast.success('Order successful!');}).catch(error=>{console.log(error);});},async fetchOrders(){await this.$http.$get('my-orders',{headers:{'Authorization':this.$auth.getToken('local'),'Content-Type':'application/json'}}).then(response=>this.orders=response.result);},async fetchRatings(){await this.$http.$get('ratings/my-reviews',{headers:{'Authorization':this.$auth.getToken('local'),'Content-Type':'application/json'}}).then(response=>this.ratings=response.result);}},head(){const meta={metadescription:'Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices',title:'Liquor Spring – Free alcohol delivery services at best prices'};return{title:meta.title,meta:[{hid:'description',name:'description',content:meta.metadescription},{hid:'og:title',name:'og:title',content:meta.title},{hid:'og:description',name:'og:description',content:meta.metadescription},{hid:'og:type',name:'og:type',content:'website'}]};}});
// CONCATENATED MODULE: ./pages/account/dashboard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/account/dashboard/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "33dca6dd"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map