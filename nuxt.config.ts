// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/font.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    dir: "assets/images",
  },

  plugins: ["~/plugins/sweetalert2.js", "~/plugins/flowbite.js",],

  modules: ["@nuxtjs/i18n", "@nuxt/image"],

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "id",
        name: "Indonesia",
        file: "id.json",
      },
    ],
    lazy: true,
    langDir: "locales",
  },
});