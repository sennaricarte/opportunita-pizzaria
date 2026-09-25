// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { temPostsPublicados } from './src/utils/blog-published.mjs';

// getCollection não roda no config: lemos o frontmatter dos .md
// com a mesma regra de produção (publicado: true).
const blogComPosts = temPostsPublicados();

// https://astro.build/config
export default defineConfig({
  site: 'https://opportunitapizzaria.com.br',
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => {
        if (blogComPosts) return true;
        const { pathname } = new URL(page);
        return pathname !== '/blog' && pathname !== '/blog/' && !pathname.startsWith('/blog/');
      },
    }),
  ],
});
