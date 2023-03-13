export default defineNuxtConfig({

  routeRules: {
    '/posts/**': { ssr: false },
  },

  
  modules: ['@nuxtjs/tailwindcss'],

  css: ['/assets/css/style.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/animal.jpg' }],
    },
  },
  pages: true
});