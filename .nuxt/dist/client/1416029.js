(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{584:function(t,e,r){"use strict";r.r(e);var n=r(23),l=(r(55),{components:{Products:function(){return Promise.resolve().then(r.bind(null,288))}},data:function(){return{products:[]}},methods:{getProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.$get("products/search?query=".concat(t.$route.params.term)).then((function(e){t.products=e.result.products}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},created:function(){this.getProducts()}}),c=r(57),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-pt-16 lg:tw-pt-32"},[e("section",[e("div",{staticClass:"tw-container tw-mx-auto"},[e("nav",{staticClass:"tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5",attrs:{id:"breadcrumb","aria-label":"breadcrumb"}},[e("ol",{staticClass:"tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3"},[e("li",{staticClass:"tw-inline-flex tw-items-center"},[e("a",{staticClass:"tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white",attrs:{href:"/"}},[e("svg",{staticClass:"tw-w-4 tw-h-4 tw-mr-2",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),t._v("\n              Home\n            ")])]),t._v(" "),e("li",{attrs:{"aria-current":"page"}},[e("div",{staticClass:"tw-flex items-center"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500"},[t._v(t._s(t._f("capitalize")(t.$route.params.term)))])])])])]),t._v(" "),e("div",{staticClass:"header_area tw-mt-1"},[e("h1",{staticClass:"tw-mt-2 tw-text-center tw-text-red-600 heading_one"},[t._v("\n          Search results for "+t._s(t.$route.params.term)+"\n        ")])]),t._v(" "),t.products.length>0?e("div",[e("div",{staticClass:"tw-bg-gray-100 tw-p-2"},[e("products",{attrs:{products:t.products}})],1)]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Products:r(288).default})}}]);