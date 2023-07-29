export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { name: 'description', content: 'E-graveyard for Dumchenko family' }
      ]
    }
  },
  build: {
    analyze: true
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  content: {
    documentDriven: true
  },
  css: [
    '@/assets/style/app.scss'
  ],
  plugins: [
    '~/plugins/google-analytics.ts'
  ],
  typescript: {
    strict: true
  },
  image: {
    dir: 'assets'
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
