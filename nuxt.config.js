const pkg = require('./package')

module.exports = {
  mode: 'universal',

  router: {
    base: '/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.meta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.meta.description
      },
      {
        name: 'google-site-verification',
        content: 'nQDr0TrWBpxgCkAYXAjW-W-jrPjmtYe7HN3o8iO8I8E'
      }
    ],
    link: [
      {
        hid: 'favicon',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        hid: 'custom-font',
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/fontawesome.js', { src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
