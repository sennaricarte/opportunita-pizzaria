// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.opportunitapizzaria.com.br',
  output: 'static',
  compressHTML: true,
  image: {
    service: passthroughImageService(),
  },
  integrations: [sitemap()],
});
