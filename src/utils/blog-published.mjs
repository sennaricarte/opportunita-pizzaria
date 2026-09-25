import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Lê o frontmatter dos .md em src/content/blog e verifica se há
 * pelo menos um com `publicado: true`. Usado no astro.config porque
 * getCollection / getPostsPublicados não estão disponíveis no config.
 */
export function temPostsPublicados(blogDir = 'src/content/blog') {
  if (!existsSync(blogDir)) return false;

  for (const file of readdirSync(blogDir)) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(join(blogDir, file), 'utf8');
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) continue;
    if (/^publicado:\s*true\s*$/m.test(match[1])) return true;
  }

  return false;
}
