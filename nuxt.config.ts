// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  build: {
    analyze: true
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    documentDriven: true
  },
  css: [
    '@/assets/style/app.scss'
  ],
  plugins: [
    '~/plugins/google-analytics.js'
  ],
  typescript: {
    strict: true
  },
  image: {
    provider: 'static'
  }
})
