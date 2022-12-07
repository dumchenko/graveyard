// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        analyze: true,
    },
    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        "nuxt-purgecss",
    ],
    content: {
        documentDriven: true,
    },
    css: [
        "@/assets/style/app.scss",
    ],
    plugins: [
        "~/plugins/google-analytics.js",
    ],
    typescript: {
        strict: true,
    },
})
