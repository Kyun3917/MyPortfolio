export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'en',
      prefix:process.env.npm_package_name || '',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type',property:'og:type',content:'article'},
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:site_name', property: 'og:site_name', content: '(きゅんのポートフォリオ)' },
      {hid:'og:url',property:'og:url',content:'https://nuxt-kyunportfolio.pages.dev/'},
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_1.ico' },
  ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  pwa:{
    icon:{
      source:'SRC_DIR/static/icon_pwa.png',
      filename:'icon_pwa.png'
    },
    manifest:{
      lang:'ja',
      name:'MyPortfolio',
      short_name:"ポートフォリオ"
    },
  }
}
