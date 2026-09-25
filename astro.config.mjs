// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://opportunitapizzaria.com.br',
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()],
});
