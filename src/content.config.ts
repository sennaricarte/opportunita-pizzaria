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
  }),
});

export const collections = { pizzas, depoimentos, projetos, stats };
