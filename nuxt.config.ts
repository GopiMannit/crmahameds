// nuxt.config.ts

import { defineNuxtConfig } from 'nuxt/config'

require('dotenv').config();

export default defineNuxtConfig({

  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest:{
      name: "Ahameds_Apple",
      short_name: "Ahameds_Apple",
      start_url: "/login",
      display: "standalone",
      background_color: "#fff",
      description: "Ahameds_Apple",
      icons: [
        {
          src: "icons/inner-logo_64x64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "icons/inner-logo_144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "icons/inner-logo_192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "icons/inner-logo_512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ], 
    },
    workbox:{
      navigateFallback:"/",

    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  }
})


