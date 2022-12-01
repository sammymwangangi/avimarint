exports.ids = [8];
exports.modules = {

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7b843621", content, true, context)
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WpOrder_vue_vue_type_style_index_0_id_2589e000_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WpOrder_vue_vue_type_style_index_0_id_2589e000_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WpOrder_vue_vue_type_style_index_0_id_2589e000_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WpOrder_vue_vue_type_style_index_0_id_2589e000_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WpOrder_vue_vue_type_style_index_0_id_2589e000_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header-bg{background:#075e54}.modal-backdrop{opacity:.3!important}.modal{border-radius:0;border:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/WpOrder.vue?vue&type=template&id=2589e000&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('b-modal',{ref:`wp-${_vm.product.url}-${_vm.displayId}`,staticStyle:{"background-color":"#075E54"},attrs:{"id":`wp-${_vm.product.url}-${_vm.displayId}`,"title-class":"text-capitalize text-white","modal-class":"rounded-0","centered":"","hide-footer":"","header-class":"header-bg"},on:{"hidden":_vm.resetWhatsApp},scopedSlots:_vm._u([{key:"modal-header",fn:function({close}){return[_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){return close();}}},[_c('i',{staticClass:"fas fa-times text-white"})]),_vm._v(" "),_c('h5',{staticClass:"text-white"},[_vm._v("Order Via WhatsApp")])];}}])},[_vm._v(" "),_c('h6',{staticClass:"text-success"},[_vm._v(_vm._s(_vm._f("capitalize")(_vm.product.name)))]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"location"}},[_vm._v("Delivery Location"),_c('small',{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.location,expression:"location"}],staticClass:"form-control",attrs:{"type":"text","id":"location"},domProps:{"value":_vm.location},on:{"input":function($event){if($event.target.composing)return;_vm.location=$event.target.value;}}})]),_vm._v(" "),_c('div',{staticClass:"row pb-2"},[_c('div',{staticClass:"form-group col-6 col-md"},[_c('label',{attrs:{"for":"quantity"}},[_vm._v("Quantity:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{"type":"number","min":"1","id":"quantity","value":"1"},domProps:{"value":_vm.quantity},on:{"input":function($event){if($event.target.composing)return;_vm.quantity=$event.target.value;}}})]),_vm._v(" "),_c('div',{staticClass:"form-group col-6 col-md"},[_c('label',{attrs:{"for":"productQuantity"}},[_vm._v("Select Size")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.price,expression:"price"}],staticClass:"form-control",attrs:{"id":"productQuantity"},on:{"change":[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.price=$event.target.multiple?$$selectedVal:$$selectedVal[0];},function($event){return _vm.onChange($event);}]}},_vm._l(_vm.product.quantities,function(quantity,index){return _c('option',{key:index,domProps:{"value":quantity}},[_vm._v("\n          "+_vm._s(quantity.quantity)+" @ "+_vm._s(quantity.discount)+"\n        ")]);}),0)])]),_vm._v(" "),_c('small',{staticStyle:{"font-weight":"bold"}},[_vm._v("Subtotal :"),_c('em',{staticClass:"text-danger border-bottom"},[_vm._v(_vm._s(_vm._f("currency")(_vm.price.discount*_vm.quantity)))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-dark float-right",attrs:{"type":"button"},on:{"click":_vm.makeOrder}},[_c('i',{staticClass:"fas fa-send"}),_vm._v("Send\n  ")]),_vm._v(" "),_c('div',{staticClass:"border-bottom clearfix"},[_vm._v(" ")]),_vm._v(" "),_c('div',{staticClass:"mt-2 clearfix"},[_c('button',{staticClass:"btn btn-danger btn-sm float-right",attrs:{"type":"button"},on:{"click":function($event){return _vm.$bvModal.hide(`wp-${_vm.product.url}-${_vm.displayId}`);}}},[_c('i',{staticClass:"ri-close-fill",staticStyle:{"position":"relative","top":"2px"}}),_vm._v("close\n    ")])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Home/WpOrder.vue?vue&type=template&id=2589e000&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/WpOrder.vue?vue&type=script&lang=js&
/* harmony default export */ var WpOrdervue_type_script_lang_js_ = ({props:{product:{required:true},activeProduct:{required:true},price:{required:true},selectedQuantity:{required:true},displayId:{required:true}},data(){return{quantity:1,item:{},location:'',phoneNumber:'+254720675337'};},computed:{...Object(external_vuex_["mapState"])({cart:state=>state.cart.cart})},methods:{onChange(event){console.log(event.target.value);},// Make Order
makeOrder(){if(this.location===''){this.$toast.warning('Location cannot be empty');this.$bvModal.hide(`wp-${this.activeProduct.url}-${this.displayId}`);}else if(this.quantity<1||this.quantity===''){this.$toast.warning('Quantity cannot be less than 1');this.$bvModal.hide(`wp-${this.activeProduct.url}-${this.displayId}`);}else{let msg=`Hello *Liquorspring*, I would like `;let url;if(this.quantity>1){let total=this.quantity*this.price.discount;let more=`to order ${this.quantity} piece(s) of ${this.activeProduct.name} ${this.price.quantity} at Ksh ${total} to be delivered to ${this.location}.`;msg+=more;}else{msg+=`to order  ${this.quantity} piece(s) of ${this.activeProduct.name} ${this.price.quantity} at Ksh ${this.price.discount} to be delivered to ${this.location}.`;}url=`https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${msg}`;let win=window.open(url,'_blank');win.focus();}},resetWhatsApp(){this.quantity=1;this.location='';}}});
// CONCATENATED MODULE: ./components/Home/WpOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_WpOrdervue_type_script_lang_js_ = (WpOrdervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Home/WpOrder.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_WpOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "54a57c5e"
  
)

/* harmony default export */ var WpOrder = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-wp-order.js.map