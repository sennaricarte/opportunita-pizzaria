import { getCollection } from 'astro:content';

export const INSCRICAO_URL = 'https://wkf.ms/4ec71GV';
export const WHATSAPP_PEDIDOS_URL = 'https://wa.me/5511962448909';
export const WHATSAPP_INSTITUCIONAL = '5511953054694';
// Google Analytics 4 (propriedade do cliente). Vazio desativa a tag.
export const GA_MEASUREMENT_ID = 'G-0BV1S76KC5';
export const CARDAPIO_URL = 'https://menu.brendi.com.br/opportunita-pizzaria-social-vila-acoreana';

export async function getAncoraResultados() {
  const turmas = await getCollection('turmas');
  const temPublicada = turmas.some((turma) => turma.data.publicado === true);
  return temPublicada ? '#resultados' : '#na-pratica';
}
