const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Freshr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400|Material+Icons'
      }
    ]
  },
  workbox: {
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: 'http://images.ctfassets.net/.*',
        handler: 'staleWhileRevalidate',
        method: 'GET',
        strategyOptions: {
          cacheName: 'Images',
          cacheableResponse: { statuses: [0, 200] }
        }
      },
      {
        urlPattern: 'https://cdn.contentful.com/spaces/.*',
        handler: 'staleWhileRevalidate',
        method: 'GET',
        strategyOptions: {
          cacheName: 'Content Management',
          cacheableResponse: { statuses: [0, 200] }
        }
      }
    ]
  },
  meta: {
    name: 'Freshr',
    theme_color: '#76a6ff'
  },
  manifest: {
    name: 'Freshr',
    short_name: 'Freshr',
    lang: 'en',
    display: 'standalone',
    background_color: '#f7faff',
    theme_color: '#76a6ff'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#76a6ff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '@/plugins/vueProgressiveImage', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1:3000',
    HOST: process.env.HOST || 'http://127.0.0.1',
    PORT: process.env.PORT || 3000,
    CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY || '',
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || ''
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      /** 
       * Uncomment this to use webpack code spitting
      if (isClient) {
        config.optimization.splitChunks = Object.assign(
          {},
          config.optimization.splitChunks,
          {
            maxSize: 100000,
            cacheGroups: {
              vuetify: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vuetify',
                chunks: 'all'
              }
            }
          }
          )
        }
         */

      //SendGrid fails without setting these parameters because they are node server-side modules
      config.node = {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }
  }
}
