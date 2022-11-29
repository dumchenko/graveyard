// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            bodyAttrs: {
                "aria-label": "Content",
                class: ["page-content", "flex-shrink-0"],
            },
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                    integrity: "sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3",
                    crossorigin: "anonymous",
                },
                {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-GCRK2384VQ",
                    async: true,
                },
            ],
        },
    },
    buildModules: [
        '@nuxtjs/google-analytics',
        '@nuxtjs/google-fonts',
    ],
    modules: [
        '@nuxt/content',
        'nuxt-purgecss',
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
