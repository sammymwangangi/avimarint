(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{467:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("7d89bb5c",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";n(467)},520:function(t,e,n){var r=n(62)((function(i){return i[1]}));r.push([t.i,'.table th[data-v-0b9a801f]{font-family:"Roboto",sans-serif;font-weight:900}#download-btn[data-v-0b9a801f]{position:sticky;top:15%;z-index:10}@media screen and (max-width:481px){#breadcrumb[data-v-0b9a801f]{display:none}#download-btn[data-v-0b9a801f]{position:sticky;top:18%;z-index:10}}',""]),r.locals={},t.exports=r},576:function(t,e,n){"use strict";n.r(e);n(40);var r=n(23),o=(n(55),{data:function(){return{loading:!1,products:[],meta:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$http.$get("products/price-list").then((function(data){t.loading=!1,t.products=data.result})).catch((function(e){t.loading=!1,console.log(e.message)}));case 3:case"end":return e.stop()}}),e)})))()},methods:{print:function(){var t=document.getElementById("printList").innerHTML,a=window.open("","","height=500, width=500");a.document.write('<html lang="en">'),a.document.write(t),a.document.write("</body></html>"),a.document.close(),a.print()}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,meta;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$http,e.prev=1,e.next=4,n.$get("metas/get-by-category/pricelist").then((function(t){return t.result}));case 4:return meta=e.sent,e.abrupt("return",{meta:meta});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{meta:{}});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return this.meta={metadescription:"Liquor Spring – the swiftest way to order alcohol online in Nairobi. Call 0705646186. Enjoy free drinks delivery in 20 mins at affordable prices",title:"Liquor Spring – Free alcohol delivery services at best prices"},{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.metadescription},{hid:"og:title",name:"og:title",content:this.meta.title},{hid:"og:description",name:"og:description",content:this.meta.metadescription},{hid:"og:type",name:"og:type",content:"website"}]}}}),c=(n(519),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"tw-pt-32 lg:tw-pt-32 tw-px-2"},[e("div",{staticClass:"tw-container mx-auto"},[e("nav",{staticClass:"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5",attrs:{id:"breadcrumb","aria-label":"breadcrumb"}},[e("ol",{staticClass:"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3"},[e("li",{staticClass:"tw-inline-flex tw-items-center"},[e("a",{staticClass:"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white",attrs:{href:"/"}},[e("svg",{staticClass:"tw-w-4 tw-h-4 tw-mr-2",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),t._v("\n              Home\n            ")])]),t._v(" "),e("li",{attrs:{"aria-current":"page"}},[e("div",{staticClass:"tw-flex items-center"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500"},[t._v(t._s(t._f("capitalize")("Pricelist")))])])])])])]),t._v(" "),e("div",{staticClass:"tw-container mx-auto"},[e("h1",{staticClass:"tw-text-red-600 tw-text-center tw-font-semibold"},[t._v("\n        "+t._s(t.meta.headerOne||"")+"\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-primary clearfix d-print-none float-right",attrs:{id:"download-btn"},on:{click:t.print}},[e("i",{staticClass:"fas fa-download fa-fw"}),t._v(" Download\n      ")]),t._v(" "),e("div",{staticClass:"clearfix"},[t._v(" ")]),t._v(" "),t.loading?e("div",[e("span",{staticClass:"spinner-border justify-content-center tw-text-red-600 spinner-border-md",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n        ..loading pricelist\n      ")]):e("div",{attrs:{id:"printList"}},[e("div",{staticStyle:{"text-align":"center","border-bottom":"2px solid #D45052"}},[e("NuxtImg",{staticStyle:{width:"150px",height:"50px"},attrs:{src:"logo.png",alt:"logo"}}),t._v(" "),e("h5",[t._v("Liquorspring Wine and Spirits Pricelist")]),t._v(" "),t._m(0)],1),t._v(" "),t._l(t.products,(function(n,r){return e("div",{key:r,staticClass:"card tw-shadow tw-bg-white tw-p-4 tw-mb-2 tw-rounded-0"},[e("h3",{staticClass:"tw-capitalize tw-text-red-600"},[t._v("\n            "+t._s(t._f("capitalize")(r))+" Prices\n          ")]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered text-wrap"},[t._m(1,!0),t._v(" "),e("tbody",t._l(n,(function(n,i){return e("tr",{key:"".concat(i,"-").concat(n._id)},[e("td",[t._v("\n                      \n                    "),e("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/product/".concat(n.url)}},[t._v(t._s(t._f("capitalize")(n.name))+"\n                      "+t._s(n.quantity)+"\n                    ")])],1),t._v(" "),e("td",[t._v("  "+t._s(t._f("currency")(n.discount)))]),t._v(" "),e("td",[t._v("\n                      \n                    "),!0===n.available?[t._v("\n                      In Stock\n                    ")]:[t._v("\n                      Out of stock\n                    ")]],2)])})),0)])])])}))],2)])])])}),[function(){var t=this,e=t._self._c;return e("p",[e("span",{staticStyle:{color:"#D45052"}},[t._v("+254705646186")]),e("br"),t._v("\n            info@liquorspring.co.ke"),e("br"),t._v("\n            Website: https://liquorspring.co.ke\n            ")])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",{staticClass:"text-left"},[e("th",{staticStyle:{"text-align":"left"}},[t._v("Product Name")]),t._v(" "),e("th",[t._v("Price")]),t._v(" "),e("th",[t._v("Availability")])])])}],!1,null,"0b9a801f",null);e.default=component.exports}}]);