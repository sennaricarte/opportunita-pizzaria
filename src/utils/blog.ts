import { getCollection, type CollectionEntry } from 'astro:content';

type CategoriaSlug = CollectionEntry<'blog'>['data']['categoria'];

const PALAVRAS_POR_MINUTO = 200;

export const categorias: Record<
  CategoriaSlug,
  { slug: CategoriaSlug; nome: string; descricao: string }
> = {
  'escola-da-pizza': {
    slug: 'escola-da-pizza',
    nome: 'Escola da Pizza',
    descricao:
      'Formação gratuita em pizzaria e panificação, com prática na Opportunità em Poá.',
  },
  'receitas-e-tecnicas': {
    slug: 'receitas-e-tecnicas',
    nome: 'Receitas e Técnicas',
    descricao: 'Massa, fermentação, montagem e o passo a passo do ofício de pizzaiolo.',
  },
  'impacto-social': {
    slug: 'impacto-social',
    nome: 'Impacto Social',
    descricao: 'Como o lucro da pizzaria financia os projetos do Instituto Recomeçar.',
  },
  'alto-tiete': {
    slug: 'alto-tiete',
    nome: 'Alto Tietê',
    descricao: 'A região, a comunidade e os parceiros em torno da Opportunità.',
  },
};

/** Em produção, só posts com publicado === true. No dev, inclui rascunhos. */
export async function getPostsPublicados(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? data.publicado === true : true,
  );

  return posts.sort(
    (a, b) => b.data.dataPublicacao.getTime() - a.data.dataPublicacao.getTime(),
  );
}

/** Minutos de leitura a 200 palavras por minuto. Mínimo de 1. */
export function tempoLeitura(texto: string): number {
  const palavras = texto.match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  return Math.max(1, Math.ceil(palavras / PALAVRAS_POR_MINUTO));
}

/** Data por extenso em pt-BR, no fuso UTC das datas do frontmatter. */
export function formatarData(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
