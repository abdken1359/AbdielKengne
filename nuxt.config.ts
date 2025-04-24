// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite:{
    plugins:[
      tailwindcss()
    ]
  },
  css:["~/assets/app.css"],
  app:{
    pageTransition:{
      name:'page',mode:'out-in'
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    'reka-ui/nuxt'
  ]
})