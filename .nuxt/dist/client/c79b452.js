(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{442:function(t,e,r){"use strict";(function(t){r(13),r(12),r(11),r(15),r(16);var n=r(23),c=r(2),o=(r(55),r(84));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={computed:d(d({},Object(o.c)({publishedBy:function(t){return t.publishedBy}})),{},{env:function(){return t.env.imagesURL}}),data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$http,c=r.url,e.prev=2,e.next=5,n.$get("articles/slug/"+c).then((function(t){return t.result}));case 5:return article=e.sent,e.abrupt("return",{article:article});case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",{article:{}});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},head:function(){var article=this.article||{};return{title:article.title,meta:[{hid:"description",name:"description",content:article.meta},{hid:"og:title",name:"og:title",content:article.title},{hid:"og:description",name:"og:description",content:article.meta},{hid:"og:type",name:"og:type",content:"website"},{hid:"og:url",name:"og:url",content:"https://liquorspring.co.ke/blog/".concat(article.url)}]}}}}).call(this,r(185))},469:function(t,e,r){var content=r(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("0937b39e",content,!0,{sourceMap:!1})},523:function(t,e,r){"use strict";r(469)},524:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,".article_container[data-v-0006a77b]{margin:14px 14px 80px;padding-bottom:30px}.article>div[data-v-0006a77b]{min-height:80px;margin-top:12px;margin-bottom:10px}.article_title h1[data-v-0006a77b]{font-size:28px;font-weight:600;text-align:center}.article_image[data-v-0006a77b]{text-align:center}",""]),n.locals={},t.exports=n},595:function(t,e,r){"use strict";r.r(e);var n=r(442).a,c=(r(523),r(57)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"tw-container mx-auto tw-pt-24 lg:tw-pt-32"},[t.article?e("div",{staticClass:"tw-bg-white sm:tw-py-1 md:py-5 lg:py-5"},[e("div",{staticClass:"article_title tw-py-3"},[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("hr")]),t._v(" "),e("div",{staticClass:"article_image"},[e("NuxtImg",{staticClass:"tw-object-contain",attrs:{src:t.article.image_url,alt:t.article.title,width:"485",height:"208"}})],1),t._v(" "),e("div",{staticClass:"tw-p-3"},[e("div",{staticClass:"article_body",domProps:{innerHTML:t._s(t.article.body)}}),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("hr")]),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("strong",[t._v("Published on: "+t._s(t.article.created_at)+" ")]),t._v("\n           | \n          "),e("em",[t._v("\n            Author: "),e("a",{attrs:{href:"#"}},[t._v(t._s(t.publishedBy))])])])],1)],1)]):t._e()])}),[],!1,null,"0006a77b",null);e.default=component.exports}}]);