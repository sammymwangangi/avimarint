(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{579:function(t,e,r){"use strict";r.r(e);r(40),r(13),r(12),r(11),r(15),r(16);var o=r(23),n=r(2),l=(r(55),r(64),r(431)),c=r(432),d=r(84);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={middleware:"auth",components:{ValidationProvider:l.a,ValidationObserver:c.a},data:function(){return{userData:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["isAuthenticated","loggedInUser"])),created:function(){this.defaultFormValues()},methods:{defaultFormValues:function(){this.userData={email:this.loggedInUser.email,phone:this.loggedInUser.phone,location:this.loggedInUser.location,address:this.loggedInUser.address,firstName:this.loggedInUser.name.split(/\s+/)[0]||"",lastName:this.loggedInUser.name.split(/\s+/)[1]||""}},onSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:t.userData.firstName+" "+t.userData.lastName,phone:t.userData.phone,email:t.userData.email,location:t.userData.location,address:t.userData.address,role:"user"},e.next=3,t.$http.$put("users/update/".concat(t.loggedInUser._id),JSON.stringify(r),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){t.$auth.setUser(r),window.location.reload(!0),t.$toast.success("Profile updated successfully!")})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()}},head:function(){var t="Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices",e="Liquor Spring – Free alcohol delivery services at best prices";return{title:e,meta:[{hid:"description",name:"description",content:t},{hid:"og:title",name:"og:title",content:e},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"website"}]}}},f=v,h=r(57),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"py-5"},[e("div",{staticClass:"container py-5"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/account/dashboard"}},[t._v("Dashboard")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Profile")])])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12"},[t._m(0),t._v(" "),e("div",{staticClass:"card justify-content-center my-3 rounded-0 p-4 shadow",staticStyle:{"border-left":"3px solid #EC2326"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("h6",[t._v("Info")]),t._v(" "),e("ul",{staticClass:"list-group clearfix"},[e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fas fa-user"}),t._v(" Name : "+t._s(t.loggedInUser.name||""))]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fas fa-envelope"}),t._v(" Email : "+t._s(t.loggedInUser.email||"")+"\n                  ")]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fas fa-phone-alt"}),t._v(" Phone Number :\n                    "+t._s(t.loggedInUser.phone||"")+"\n                  ")]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fas fa-map-marker"}),t._v(" Address\n                    :"+t._s(t.loggedInUser.location||"")+"\n                  ")])])]),t._v(" "),e("div",{staticClass:"col-sm-6 mt-sm-2"},[e("h6",{staticClass:"text-danger border-bottom pb-2 font-weight-bolder"},[t._v("Update info")]),t._v(" "),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.handleSubmit;return[e("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),o(t.onSubmit)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("ValidationProvider",{attrs:{name:"firstName",rules:"required|alpha_spaces"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{attrs:{for:"firstName"}},[t._v("First Name"),e("small",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.firstName,expression:"userData.firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter First Name",id:"firstName"},domProps:{value:t.userData.firstName},on:{input:function(e){e.target.composing||t.$set(t.userData,"firstName",e.target.value)}}}),t._v(" "),e("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"lastName"}},[t._v("LastName"),e("small",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.lastName,expression:"userData.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName",placeholder:"Enter Last Name"},domProps:{value:t.userData.lastName},on:{input:function(e){e.target.composing||t.$set(t.userData,"lastName",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.address,expression:"userData.address"}],staticClass:"form-control",attrs:{type:"text",id:"address",placeholder:"1234 Main St"},domProps:{value:t.userData.address},on:{input:function(e){e.target.composing||t.$set(t.userData,"address",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"town"}},[t._v("Town of residence")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.location,expression:"userData.location"}],staticClass:"form-control",attrs:{type:"text",id:"town",placeholder:"Nairobi"},domProps:{value:t.userData.location},on:{input:function(e){e.target.composing||t.$set(t.userData,"location",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{attrs:{for:"email"}},[t._v("Email"),e("small",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.email,expression:"userData.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter valid email"},domProps:{value:t.userData.email},on:{input:function(e){e.target.composing||t.$set(t.userData,"email",e.target.value)}}}),t._v(" "),e("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("ValidationProvider",{attrs:{name:"phone",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("label",{attrs:{for:"phone"}},[t._v("Phone Number"),e("small",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.phone,expression:"userData.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"Enter Phone number"},domProps:{value:t.userData.phone},on:{input:function(e){e.target.composing||t.$set(t.userData,"phone",e.target.value)}}}),t._v(" "),e("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)]),t._v(" "),e("button",{staticClass:"btn btn-success mb-2",attrs:{type:"submit"}},[t._v("Update Info")])])]}}])})],1)])])])])])])])}),[function(){var t=this._self._c;return t("h5",{staticClass:"text-success"},[t("strong",[this._v("Profile")])])}],!1,null,null,null);e.default=component.exports}}]);