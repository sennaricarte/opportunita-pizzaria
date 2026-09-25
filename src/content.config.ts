import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const pizzas = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pizzas' }),
  schema: z.object({
    nome: z.string(),
    descricao: z.string(),
    categoria: z.enum(['tradicional', 'especial', 'doce']),
    destaque: z.boolean(),
  }),
});

const depoimentos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/depoimentos' }),
  schema: z.object({
    nome: z.string(),
    papel: z.string(),
    texto: z.string(),
  }),
});

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    ordem: z.number(),
  }),
});

const turmas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/turmas' }),
  schema: ({ image }) =>
    z.object({
      numero: z.number(),
      nome: z.string(),
      conclusao: z.coerce.date(),
      formados: z.number(),
      publicado: z.boolean().default(false),
      cidades: z.array(z.string()).optional(),
      fotos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          }),
        )
        .min(1),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descricao: z.string().max(155),
      dataPublicacao: z.coerce.date(),
      dataAtualizacao: z.coerce.date().optional(),
      autor: z.string().default('Equipe Opportunità'),
      categoria: z.enum([
        'escola-da-pizza',
        'receitas-e-tecnicas',
        'impacto-social',
        'alto-tiete',
      ]),
      capa: z.object({
        src: image(),
        alt: z.string(),
      }),
      cta: z.enum(['inscricao', 'pedido', 'patrocinio']).default('inscricao'),
      publicado: z.boolean().default(false),
    }),
});

const stats = defineCollection({
  loader: file('src/content/stats.json'),
  schema: z.object({
    pessoasCadastradas: z.number(),
    pessoasDesenvolvidas: z.number(),
    qualificacaoProfissional: z.number(),
    geracaoRenda: z.number(),
    lideresFormados: z.number(),
    reincidenciaPrograma: z.number(),
    reincidenciaMediaNacional: z.number(),
    fonteReincidencia: z.string(),
    caixasEntreguesPorMes: z.number().nullable().optional(),
  }),
});

export const collections = { pizzas, depoimentos, projetos, turmas, blog, stats };
