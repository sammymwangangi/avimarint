exports.ids = [7];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c19fb406", content, true, context)
};

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCart_vue_vue_type_style_index_0_id_92062af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCart_vue_vue_type_style_index_0_id_92062af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCart_vue_vue_type_style_index_0_id_92062af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCart_vue_vue_type_style_index_0_id_92062af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCart_vue_vue_type_style_index_0_id_92062af8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cart-modal[data-v-92062af8]{border-radius:0}@media screen and (max-width:768px){#modal-image[data-v-92062af8]{height:137px;width:137px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/AddCart.vue?vue&type=template&id=92062af8&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('b-modal',{ref:`${_vm.product.url}-${_vm.displayId}`,staticClass:"cart-modal",attrs:{"id":`${_vm.product.url}-${_vm.displayId}`,"title":`${_vm.activeProduct.name}`,"title-class":"text-capitalize","centered":"","hide-footer":""},on:{"hidden":_vm.resetQuantity},scopedSlots:_vm._u([{key:"modal-header",fn:function({close}){return[_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return close();}}},[_c('i',{staticClass:"fas fa-times text-dark"})]),_vm._v(" "),_c('h5',{},[_vm._v(_vm._s(_vm.activeProduct.name))])];}}])},[_vm._v(" "),_c('div',{staticClass:"row pb-2"},[_c('div',{staticClass:"col-4 col-xs-6 col-sm-4 col-md-4 col-lg-4"},[_c('NuxtImg',{staticClass:"img-fluid",attrs:{"src":`${_vm.activeProduct.image_url}`,"id":"modal-image","alt":"product"}})],1),_vm._v(" "),_c('div',{staticClass:"col-8 col-xs-6 col-sm-8 col-md-8 col-lg-8"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"quantity"}},[_vm._v("Quantity:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{"type":"number","min":"1","id":"quantity","value":"1"},domProps:{"value":_vm.quantity},on:{"input":function($event){if($event.target.composing)return;_vm.quantity=$event.target.value;}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"sr-only",attrs:{"for":"productQuantity"}},[_vm._v("Product Quantity")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.price,expression:"price"}],staticClass:"form-control",attrs:{"id":"productQuantity"},on:{"change":[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.price=$event.target.multiple?$$selectedVal:$$selectedVal[0];},function($event){return _vm.onChange($event);}]}},_vm._l(_vm.product.quantities,function(quantity,index){return _c('option',{key:index,domProps:{"value":quantity}},[_vm._v("\n            "+_vm._s(quantity.quantity)+" @ "+_vm._s(quantity.discount)+"\n          ")]);}),0)]),_vm._v(" "),_c('small',{staticStyle:{"font-weight":"bold"}},[_vm._v("Subtotal :"),_c('em',{staticClass:"text-danger"},[_vm._v(_vm._s(_vm._f("currency")(_vm.price.discount*_vm.quantity)))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-sm btn-block btn-dark rounded-0",attrs:{"type":"button"},on:{"click":_vm.addToCart}},[_vm._v("\n        Add To Cart\n      ")]),_vm._v(" "),_c('div',{staticClass:"mt-2"},[_c('button',{staticClass:"btn btn-danger btn-sm rounded-0 float-right",attrs:{"type":"button"},on:{"click":function($event){return _vm.$bvModal.hide(`${_vm.product.url}-${_vm.displayId}`);}}},[_c('i',{staticClass:"ri-close-fill",staticStyle:{"position":"relative","top":"2px"}}),_vm._v("close\n      ")])])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Home/AddCart.vue?vue&type=template&id=92062af8&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/AddCart.vue?vue&type=script&lang=js&
/* harmony default export */ var AddCartvue_type_script_lang_js_ = ({props:{product:{required:true},price:{required:true},activeProduct:{required:true},selectedQuantity:{required:true},displayId:{required:true}},data(){return{quantity:1,item:{}};},computed:{...Object(external_vuex_["mapState"])({cart:state=>state.cart.cart})},methods:{onChange(event){console.log(event.target.value);},resetQuantity(){this.quantity=1;},// Add to cart
addToCart(){this.item={productName:this.activeProduct.name,productImage:this.activeProduct.image,productImageUrl:this.product.image_url,productId:this.activeProduct._id,productQuantity:this.quantity,productUnit:this.price.quantity,productType:this.activeProduct.category,price:this.price.discount,subTotal:this.price.discount*this.quantity};console.log('Cart Item: '+JSON.stringify(this.item));let found=this.cart.find(product=>product.productId===this.item.productId);if(found){this.$toast.info('Item already in cart');this.$bvModal.hide(`${this.activeProduct.url}-${this.displayId}`);}else if(this.item.productQuantity<1){this.$toast.warning('Quantity must be equal or greater than 1');this.$bvModal.hide(`${this.activeProduct.url}-${this.displayId}`);}else{this.$store.commit('cart/addToCart',this.item);this.$bvModal.hide(`${this.activeProduct.url}-${this.displayId}`);this.$toast.success('Added to cart');}}}});
// CONCATENATED MODULE: ./components/Home/AddCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_AddCartvue_type_script_lang_js_ = (AddCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Home/AddCart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(214)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_AddCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "92062af8",
  "2572f33d"
  
)

/* harmony default export */ var AddCart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-add-cart.js.map