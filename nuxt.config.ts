// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        "@nuxtjs/google-analytics",
        "@nuxtjs/google-fonts",
        "nuxt-purgecss",
    ],
    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
    ],
    content: {
        documentDriven: true,
    },
    css: [
        "@/assets/style/app.scss",
    ],
    googleAnalytics: {
        id: "G-GCRK2384VQ",
    },
    target: "static",
})
