const baseUrl = 'https://just-click-game.vercel.app'

export default defineNuxtConfig({
  css: [
    'modern-css-reset'
  ],
  app: {
    head: {
      title: 'Game',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { hid: 'og:title', property: 'og:title', content: 'Game' },
        {
          hid: 'description',
          name: 'description',
          content: 'is Game',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'is Game',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: baseUrl,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${baseUrl}/ogp.png`,
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Game',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        // { hid: 'twitter:site', name: 'twitter:site', content: '@...' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/icon.png',
        },
      ],
    }
  }
})
