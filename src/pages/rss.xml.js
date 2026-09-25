import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((post) => post.data.publicado === true)
    .sort(
      (a, b) => b.data.dataPublicacao.getTime() - a.data.dataPublicacao.getTime(),
    );

  return rss({
    title: 'Blog da Opportunità',
    description:
      'Pizzaria social em Poá, no Alto Tietê, com delivery artesanal na Vila Açoreana. 100% do lucro financia a Escola da Pizza e os projetos do Instituto Recomeçar.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.titulo,
      description: post.data.descricao,
      pubDate: post.data.dataPublicacao,
      link: `/blog/${post.id}/`,
    })),
  });
}
