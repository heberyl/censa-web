// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: { enabled: false },
  }),
  site: 'https://censa.com.mx',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/aviso-de-privacidad'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
