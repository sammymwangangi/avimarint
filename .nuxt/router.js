import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ea9d019 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _acb81466 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _34678fd4 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1219cfbe = () => interopDefault(import('../pages/brands/index.vue' /* webpackChunkName: "pages/brands/index" */))
const _108dc0b0 = () => interopDefault(import('../pages/carson/index.vue' /* webpackChunkName: "pages/carson/index" */))
const _7d5615d2 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _3b340235 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _59627fcc = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _ee6abeca = () => interopDefault(import('../pages/corporate-purchase/index.vue' /* webpackChunkName: "pages/corporate-purchase/index" */))
const _fe4788d0 = () => interopDefault(import('../pages/countries/index.vue' /* webpackChunkName: "pages/countries/index" */))
const _f34dcae2 = () => interopDefault(import('../pages/faqs/index.vue' /* webpackChunkName: "pages/faqs/index" */))
const _0358638b = () => interopDefault(import('../pages/favorite.vue' /* webpackChunkName: "pages/favorite" */))
const _0e060caf = () => interopDefault(import('../pages/how-it-works/index.vue' /* webpackChunkName: "pages/how-it-works/index" */))
const _0451fff4 = () => interopDefault(import('../pages/most-expensive-alcohol/index.vue' /* webpackChunkName: "pages/most-expensive-alcohol/index" */))
const _2716bfc6 = () => interopDefault(import('../pages/offers.vue' /* webpackChunkName: "pages/offers" */))
const _9012b622 = () => interopDefault(import('../pages/order.vue' /* webpackChunkName: "pages/order" */))
const _9fbb53ac = () => interopDefault(import('../pages/our-terms/index.vue' /* webpackChunkName: "pages/our-terms/index" */))
const _388bb28b = () => interopDefault(import('../pages/pricelist/index.vue' /* webpackChunkName: "pages/pricelist/index" */))
const _a321835a = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _91bb30d4 = () => interopDefault(import('../pages/account/dashboard/index.vue' /* webpackChunkName: "pages/account/dashboard/index" */))
const _791ab1ab = () => interopDefault(import('../pages/account/login/index.vue' /* webpackChunkName: "pages/account/login/index" */))
const _310e7e2b = () => interopDefault(import('../pages/account/profile/index.vue' /* webpackChunkName: "pages/account/profile/index" */))
const _35a4ca90 = () => interopDefault(import('../pages/account/ratings/index.vue' /* webpackChunkName: "pages/account/ratings/index" */))
const _2056ae37 = () => interopDefault(import('../pages/account/register/index.vue' /* webpackChunkName: "pages/account/register/index" */))
const _8131e6c4 = () => interopDefault(import('../pages/blog/_url.vue' /* webpackChunkName: "pages/blog/_url" */))
const _41e677cf = () => interopDefault(import('../pages/brands/_brand/index.vue' /* webpackChunkName: "pages/brands/_brand/index" */))
const _88db0178 = () => interopDefault(import('../pages/countries/_country/index.vue' /* webpackChunkName: "pages/countries/_country/index" */))
const _51a72e54 = () => interopDefault(import('../pages/search/_term/index.vue' /* webpackChunkName: "pages/search/_term/index" */))
const _c1a8371a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _e0da5ffe = () => interopDefault(import('../pages/_category/index.vue' /* webpackChunkName: "pages/_category/index" */))
const _0fee4da3 = () => interopDefault(import('../pages/_category/_subcategory/index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _7ea9d019,
    name: "404"
  }, {
    path: "/about-us",
    component: _acb81466,
    name: "about-us"
  }, {
    path: "/blog",
    component: _34678fd4,
    name: "blog"
  }, {
    path: "/brands",
    component: _1219cfbe,
    name: "brands"
  }, {
    path: "/carson",
    component: _108dc0b0,
    name: "carson"
  }, {
    path: "/cart",
    component: _7d5615d2,
    name: "cart"
  }, {
    path: "/checkout",
    component: _3b340235,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _59627fcc,
    name: "contact-us"
  }, {
    path: "/corporate-purchase",
    component: _ee6abeca,
    name: "corporate-purchase"
  }, {
    path: "/countries",
    component: _fe4788d0,
    name: "countries"
  }, {
    path: "/faqs",
    component: _f34dcae2,
    name: "faqs"
  }, {
    path: "/favorite",
    component: _0358638b,
    name: "favorite"
  }, {
    path: "/how-it-works",
    component: _0e060caf,
    name: "how-it-works"
  }, {
    path: "/most-expensive-alcohol",
    component: _0451fff4,
    name: "most-expensive-alcohol"
  }, {
    path: "/offers",
    component: _2716bfc6,
    name: "offers"
  }, {
    path: "/order",
    component: _9012b622,
    name: "order"
  }, {
    path: "/our-terms",
    component: _9fbb53ac,
    name: "our-terms"
  }, {
    path: "/pricelist",
    component: _388bb28b,
    name: "pricelist"
  }, {
    path: "/product",
    component: _a321835a,
    name: "product"
  }, {
    path: "/account/dashboard",
    component: _91bb30d4,
    name: "account-dashboard"
  }, {
    path: "/account/login",
    component: _791ab1ab,
    name: "account-login"
  }, {
    path: "/account/profile",
    component: _310e7e2b,
    name: "account-profile"
  }, {
    path: "/account/ratings",
    component: _35a4ca90,
    name: "account-ratings"
  }, {
    path: "/account/register",
    component: _2056ae37,
    name: "account-register"
  }, {
    path: "/blog/:url",
    component: _8131e6c4,
    name: "blog-url"
  }, {
    path: "/brands/:brand",
    component: _41e677cf,
    name: "brands-brand"
  }, {
    path: "/countries/:country",
    component: _88db0178,
    name: "countries-country"
  }, {
    path: "/search/:term",
    component: _51a72e54,
    name: "search-term"
  }, {
    path: "/",
    component: _c1a8371a,
    name: "index"
  }, {
    path: "/:category",
    component: _e0da5ffe,
    name: "category"
  }, {
    path: "/:category/:subcategory",
    component: _0fee4da3,
    name: "category-subcategory"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
