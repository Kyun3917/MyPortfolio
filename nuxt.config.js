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
      { hid: 'og:site_name', property: 'og:site_name', content: 'きゅんのポートフォリオ' },
      {hid:'og:url',property:'og:url',content:'https://nuxt-kyunportfolio.pages.dev/'},
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      {hid:'og:title',property:'og;title',content:'きゅんのポートフォリオ'},
      {hid: 'og:image',property:'og:image',content:'/image/OGPmain.jpg'},
      { hid: 'description', name: 'description', content: 'きゅんのポートフォリオサイトです' },
      { name: 'format-detection', content: 'telephone=no' },

      {name:'mobile-web-app-capable',content:'yes'},
      {name:'apple-mobile-web-app-status-bar-style',content:'black'},
      {name:'apple-mobile-web-app-title',content:'APP_TITLE'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_1.ico' },
      { rel:'apple-touch-startup-image',href:'/image/iphone6_splash.png',media:'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'}
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
      source:'/image/icon_pwa.png',
      filename:'icon_pwa.png',
    },
    manifest:{
      lang:'ja',
      name:'MyPortfolio',
      short_name:"ポートフォリオ",
      discription:'キュンのポートフォリオサイトです',
      display:'standalone',
      theme_color:'#000',
      background_color:'#D0FFD1',
      orientation:'portrait',
      scope:'/',
      start_url:'/',
      icons:[
        {
          src:'/image/icon_pwa.png',
          sizes: '512x512',
          type:'image/png',
        }
      ]
    },

  }
}
