export default {
  /*
   ** Headers of the page
   */
  //  target: 'static',
  delayHydration: {
    mode: 'init',
  },

  server: {
    name: 'avimar',
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  loading: {
    color: '#FF5B5B',
    height: '5px',
  },
  head: {
    title: 'Avimar International',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    // link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [],
  },
  // serverMiddleware: ['~/server-middleware/seo.js'],
  env: {
    baseURL: 'https://api.liquorspring.co.ke/api',
    // imagesURL: 'https://ik.imagekit.io/cprvr2lhot',
  },
  /*
   ** Customize the progress-bar color
   */
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/fontawesome/css/all.min.css',
    '@/assets/remixicon/remixicon.css',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  /*
   ** Global Js
   */
   render: {
    static: {
      maxAge: 60 * 60 * 24 * 365 * 3000,
    },
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/http' },
    { src: '~/plugins/capitalize' },
    { src: '~/plugins/truncateText' },
    { src: '~/plugins/currency-filter' },
    { src: '~/plugins/persistedState.client' },
    { src: '~/plugins/vueToast', ssr: false },
    { src: '~/plugins/youtube.client.js' },
    { src: '~/plugins/vue-observe-visibility.client.js' },
{ src: '~/plugins/flowbite.client.js' },
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/http',
    'bootstrap-vue/nuxt',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  robots: [
    {
      UserAgent: '*',
      Disallow: '/account',
    },
    {
      UserAgent: '*',
      Disallow: '/cart',
    },
    {
      UserAgent: '*',
      Disallow: '/checkout',
    },
    {
      UserAgent: '*',
      Disallow: '/order',
    },
    {
      UserAgent: '*',
      Disallow: '/carson',
    },
    {
      UserAgent: '*',
      Disallow: '/404',
    },
  ],
  sitemap: {
    hostname: 'https://api.liquorspring.co.ke/api',
    gzip: true,
    exclude: ['/404'],
    routes: ['/:category', '/:category/:subcategory'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },
  pwa: {
    meta: {
      title: 'Avimar',
      author: 'Avimar',
    },
    manifest: {
      name: 'Avimar - Best Store',
      short_name: 'Avimar',
      lang: 'en',
    },
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: true,
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormInputPlugin',
      'FormTextareaPlugin',
      'ModalPlugin',
      'AlertPlugin',
      'CollapsePlugin',
      'CardPlugin',
      'NavbarPlugin',
      'SidebarPlugin',
      'PopoverPlugin',
      'ButtonPlugin',
      'CarouselPlugin',
      'TablePlugin',
    ],
    directivePlugins: [
      'VBPopoverPlugin',
      'VBTooltipPlugin',
      'VBTogglePlugin',
      'VBHoverPlugin',
      'VBScrollspyPlugin',
    ],
  },

  http: {
    baseURL: 'https://avimar.online',
  },
  axios: {
    baseURL: 'https://api.liquorspring.co.ke/api',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'result.accessToken',
          },
          user: { url: 'auth/profile', method: 'get', propertyName: 'result' },
          logout: false,
        },
      },
    },
  },

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    'nuxt-delay-hydration',
    '@nuxt/postcss8',
    // '@nuxt/image',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faCartPlus',
        'faShoppingCart',
        'faHeart',
        'faAngleDown',
        'faAngleRight',
        'faSignInAlt',
        'faSignOutAlt',
        'faPen',
        'faTimes',
        'faPhoneAlt',
        'faStar',
        'faShareAlt',
        'faFilter',
        'faPlus',
        'faMinus',
        'faArrowLeft',
        'faArrowRight',
        'faTachometerAlt',
        'faList',
      ],
      regular: ['faHeart', 'faUser', 'faStar'],
      brands: [
        'faFacebook',
        'faTwitter',
        'faInstagram',
        'faYoutube',
        'faWhatsapp',
        'faBlogger',
      ],
    },
  },

  // googleAnalytics: {
  //   id: 'UA-87949390-6',
  // },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    configureWebpack: {
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace('@', '')}`;
              },
            },
          },
        },
      },
    },
    analyze: false,
    // Add exception
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      compact: true,
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  router: {
    base: '/',
  },
};
