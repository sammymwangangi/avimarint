(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{429:function(e,t,n){"use strict";n.r(t),n.d(t,"hydrateNever",(function(){return l})),n.d(t,"hydrateOnInteraction",(function(){return f})),n.d(t,"hydrateWhenIdle",(function(){return h})),n.d(t,"hydrateWhenVisible",(function(){return c}));var r=new Map;var o="undefined"==typeof window;function d(component,e){return Object.assign({mixins:[{beforeCreate:function(){this.cleanupHandlers=[];var e=function(){var e=function(){},t=new Promise((function(t){e=t}));return{hydrate:e,hydrationPromise:t}}(),t=e.hydrate,n=e.hydrationPromise;this.Nonce=function(e){var component=e.component,t=e.hydrationPromise;return o?component:function(){return t.then((function(){return function(e){return"function"==typeof e}(e=component)?e().then((function(e){return e.default})):e;var e}))}}({component:component,hydrationPromise:n}),this.hydrate=t,this.hydrationPromise=n},beforeDestroy:function(){this.cleanup()},mounted:function(){var e=this;if(this.$el.nodeType!==Node.COMMENT_NODE){if(!this.never){if(this.whenVisible){var t=function(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(r.has(t))return r.get(t);var n=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return r.set(t,n),n}(!0!==this.whenVisible?this.whenVisible:void 0);if(!t)return void this.hydrate();this.$el.hydrate=this.hydrate;var n=function(){return t.unobserve(e.$el)};return this.cleanupHandlers.push(n),this.hydrationPromise.then(n),void t.observe(this.$el)}if(this.whenIdle){if(!("requestIdleCallback"in window)||!("requestAnimationFrame"in window))return void this.hydrate();var o=requestIdleCallback((function(){requestAnimationFrame(e.hydrate)}),{timeout:this.idleTimeout}),d=function(){return cancelIdleCallback(o)};this.cleanupHandlers.push(d),this.hydrationPromise.then(d)}if(this.interactionEvents&&this.interactionEvents.length){var h={capture:!0,once:!0,passive:!0};this.interactionEvents.forEach((function(t){e.$el.addEventListener(t,e.hydrate,h);e.cleanupHandlers.push((function(){e.$el.removeEventListener(t,e.hydrate,h)}))}))}}}else this.hydrate()},methods:{cleanup:function(){this.cleanupHandlers.forEach((function(e){return e()}))}},render:function(e){return e(this.Nonce,{attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}}]},e)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timeout,r=void 0===n?2e3:n;return d(e,{beforeCreate:function(){this.whenIdle=!0,this.idleTimeout=r}})}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.observerOptions,r=void 0===n?void 0:n;return d(e,{beforeCreate:function(){this.whenVisible=r||!0}})}function l(e){return d(e,{beforeCreate:function(){this.never=!0}})}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.event,r=void 0===n?"focus":n,o=Array.isArray(r)?r:[r];return d(e,{beforeCreate:function(){this.interactionEvents=o}})}var y=d({render:function(){return this.$slots.default}},{props:{idleTimeout:{default:2e3,type:Number},never:{type:Boolean},onInteraction:{type:[Array,Boolean,String]},triggerHydration:{default:!1,type:Boolean},whenIdle:{type:Boolean},whenVisible:{type:[Boolean,Object]}},computed:{interactionEvents:function(){return this.onInteraction?!0===this.onInteraction?["focus"]:Array.isArray(this.onInteraction)?this.onInteraction:[this.onInteraction]:[]}},watch:{triggerHydration:{immediate:!0,handler:function(e){e&&this.hydrate()}}}});t.default=y},555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.exports=void 0;var r,o=(r=n(429))&&r.__esModule?r:{default:r};var d={data:()=>({triggerHydration:!1}),props:{debug:{type:Boolean,default:!1},forever:{type:Boolean,default:!1},replayClick:{type:Boolean,default:!1}},async mounted(){if(this.triggerHydration||!this.$delayHydration)return;if("undefined"==typeof window||!("requestIdleCallback"in window))return void(this.triggerHydration=!0);const style="background: #e2f8e5; color: #2e9127;";if(this.forever||this.$delayHydration.config.forever)return void console.info('%c[NuxtDelayHydration] Running with the "forever" enabled, will never hydrate.',style);const e=this.debug||this.$delayHydration.config.debug;try{e&&(console.time("[NuxtDelayHydration] Hydration time"),console.info("%c[NuxtDelayHydration] Started delaying hydration via DelayHydration component.",style));const t=await this.$delayHydration.hydrationRace();e&&(console.log(`%c[NuxtDelayHydration] Finished delaying hydration with trigger: "${t}"`,style),console.timeEnd("[NuxtDelayHydration] Hydration time")),this.$delayHydration.config.replayClick&&this.replayClick&&this.$delayHydration.replayPointerEvent(t,!0)}catch(e){console.error(e)}finally{this.triggerHydration=!0}},render(e){return e(o.default,{props:{never:!0,triggerHydration:this.triggerHydration}},this.$slots.default)}};e.exports=d}}]);