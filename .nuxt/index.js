import Vue from 'vue'
import delayHydration from './hydration/hydrationRace.js'

import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_07ff3235 from 'nuxt_plugin_plugin_07ff3235' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_fa97b00c from 'nuxt_plugin_bootstrapvue_fa97b00c' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_image_116241c6 from 'nuxt_plugin_image_116241c6' // Source: ./image.js (mode: 'all')
import nuxt_plugin_httpserver_43231510 from 'nuxt_plugin_httpserver_43231510' // Source: ./http.server.js (mode: 'server')
import nuxt_plugin_http_75918825 from 'nuxt_plugin_http_75918825' // Source: ./http.js (mode: 'all')
import nuxt_plugin_axios_265b44cb from 'nuxt_plugin_axios_265b44cb' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_fontawesome_86c1d866 from 'nuxt_plugin_fontawesome_86c1d866' // Source: ./fontawesome.js (mode: 'all')
import nuxt_plugin_googleanalytics_ff50930a from 'nuxt_plugin_googleanalytics_ff50930a' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_workbox_7e6db327 from 'nuxt_plugin_workbox_7e6db327' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_1a5e398c from 'nuxt_plugin_metaplugin_1a5e398c' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_110eeea4 from 'nuxt_plugin_iconplugin_110eeea4' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_http_6a8178fe from 'nuxt_plugin_http_6a8178fe' // Source: ../plugins/http (mode: 'all')
import nuxt_plugin_capitalize_211e3ee2 from 'nuxt_plugin_capitalize_211e3ee2' // Source: ../plugins/capitalize (mode: 'all')
import nuxt_plugin_truncateText_ea9703ae from 'nuxt_plugin_truncateText_ea9703ae' // Source: ../plugins/truncateText (mode: 'all')
import nuxt_plugin_currencyfilter_0bc70a7e from 'nuxt_plugin_currencyfilter_0bc70a7e' // Source: ../plugins/currency-filter (mode: 'all')
import nuxt_plugin_persistedState_01aeeb25 from 'nuxt_plugin_persistedState_01aeeb25' // Source: ../plugins/persistedState.client (mode: 'client')
import nuxt_plugin_vueToast_996fb492 from 'nuxt_plugin_vueToast_996fb492' // Source: ../plugins/vueToast (mode: 'client')
import nuxt_plugin_youtubeclient_7a41dc8b from 'nuxt_plugin_youtubeclient_7a41dc8b' // Source: ../plugins/youtube.client.js (mode: 'client')
import nuxt_plugin_vueobservevisibilityclient_42d89e44 from 'nuxt_plugin_vueobservevisibilityclient_42d89e44' // Source: ../plugins/vue-observe-visibility.client.js (mode: 'client')
import nuxt_plugin_flowbiteclient_6e08937a from 'nuxt_plugin_flowbiteclient_6e08937a' // Source: ../plugins/flowbite.client.js (mode: 'client')
import nuxt_plugin_plugin_e69f6472 from 'nuxt_plugin_plugin_e69f6472' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    await delayHydration()
}

  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Avimar International","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"script":[],"link":[],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_07ff3235 === 'function') {
    await nuxt_plugin_plugin_07ff3235(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_fa97b00c === 'function') {
    await nuxt_plugin_bootstrapvue_fa97b00c(app.context, inject)
  }

  if (typeof nuxt_plugin_image_116241c6 === 'function') {
    await nuxt_plugin_image_116241c6(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_httpserver_43231510 === 'function') {
    await nuxt_plugin_httpserver_43231510(app.context, inject)
  }

  if (typeof nuxt_plugin_http_75918825 === 'function') {
    await nuxt_plugin_http_75918825(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_265b44cb === 'function') {
    await nuxt_plugin_axios_265b44cb(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_86c1d866 === 'function') {
    await nuxt_plugin_fontawesome_86c1d866(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_ff50930a === 'function') {
    await nuxt_plugin_googleanalytics_ff50930a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_7e6db327 === 'function') {
    await nuxt_plugin_workbox_7e6db327(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_1a5e398c === 'function') {
    await nuxt_plugin_metaplugin_1a5e398c(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_110eeea4 === 'function') {
    await nuxt_plugin_iconplugin_110eeea4(app.context, inject)
  }

  if (typeof nuxt_plugin_http_6a8178fe === 'function') {
    await nuxt_plugin_http_6a8178fe(app.context, inject)
  }

  if (typeof nuxt_plugin_capitalize_211e3ee2 === 'function') {
    await nuxt_plugin_capitalize_211e3ee2(app.context, inject)
  }

  if (typeof nuxt_plugin_truncateText_ea9703ae === 'function') {
    await nuxt_plugin_truncateText_ea9703ae(app.context, inject)
  }

  if (typeof nuxt_plugin_currencyfilter_0bc70a7e === 'function') {
    await nuxt_plugin_currencyfilter_0bc70a7e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_persistedState_01aeeb25 === 'function') {
    await nuxt_plugin_persistedState_01aeeb25(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueToast_996fb492 === 'function') {
    await nuxt_plugin_vueToast_996fb492(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_youtubeclient_7a41dc8b === 'function') {
    await nuxt_plugin_youtubeclient_7a41dc8b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueobservevisibilityclient_42d89e44 === 'function') {
    await nuxt_plugin_vueobservevisibilityclient_42d89e44(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_flowbiteclient_6e08937a === 'function') {
    await nuxt_plugin_flowbiteclient_6e08937a(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_e69f6472 === 'function') {
    await nuxt_plugin_plugin_e69f6472(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
