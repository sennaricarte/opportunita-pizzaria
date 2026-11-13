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

// Horário de funcionamento confirmado pelo cliente (19/10/2026).
// Manter em sincronia com openingHoursSpecification em SeoSchema.astro e com o Google Business Profile.
export const HORARIO_FUNCIONAMENTO = [
  { dias: 'Quarta a sexta', horas: '15h às 23h50' },
  { dias: 'Sábado e domingo', horas: '17h às 23h50' },
  { dias: 'Segunda e terça', horas: 'Fechado' },
] as const;

// Áreas de entrega confirmadas pelo cliente (19/10/2026).
export const AREAS_ENTREGA = [
  'Poá',
  'Suzano',
  'Itaquaquecetuba',
  'Ferraz de Vasconcelos',
  'Cidade Kemel',
] as const;

// Dados cadastrais (cartão CNPJ emitido em 13/11/2026). A pizzaria opera sob o Instituto Recomeçar,
// estabelecimento filial no mesmo endereço. Não publicar telefone/e-mail do cartão CNPJ.
export const EMPRESA_RAZAO_SOCIAL = 'Instituto Recomeçar';
export const EMPRESA_CNPJ = '37.129.166/0002-01';
