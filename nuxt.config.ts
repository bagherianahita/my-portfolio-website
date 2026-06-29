import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2026-06-29',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/styles.css'],
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Anahita Bagheri Kalhor - Full Stack & AI/Data Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Anahita Bagheri Kalhor - Full Stack & AI/Data Engineer. Portfolio of production-ready web, data, and machine-learning projects.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap',
        },
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
