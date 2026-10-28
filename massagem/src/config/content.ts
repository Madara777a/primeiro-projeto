export type MediaItem = { src: string; alt: string; label: string; ratio: '1:1' | '2:3' | '3:2' | '3:4' }
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

export const pageContent = {
  urgencyBar: {
    enabled: false,
    text: '',
  },
  hero: {
    image: '/images/mockup-o-poder-do-toque-branco.webp',
    imageAlt: 'Mockup do produto O Poder do Toque',
    headline: 'Descubra Como Transformar o Toque em uma Experiência de Prazer e Desejo a Dois Desde a Primeira Aula',
    body: 'Aprenda uma sequência organizada de movimentos com o método O Poder do Toque e descubra novas formas de surpreender seu parceiro(a), sair da rotina e criar momentos especiais de intimidade, mesmo sem experiência com massagens.',
    ctaLabel: 'QUERO DESCOBRIR O PODER DO TOQUE',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  results: {
    title: 'Pequenos Gestos Podem Transformar os Momentos a Dois',
    items: Array.from({ length: 7 }, (_, index) => ({
      src: `/images/depoimento-${String(index + 1).padStart(2, '0')}.webp`,
      alt: `Captura de depoimento ${index + 1} sobre O Poder do Toque`,
      label: `Depoimento ${String(index + 1).padStart(2, '0')}`,
      ratio: '2:3' as const,
    })),
  },
  modulesSection: { title: 'Um conteúdo organizado em três módulos para ajudar você a preparar o ambiente, conhecer técnicas de toque e seguir uma sequência prática a dois.' },
  modules: [
    { src: '/images/modulo-1.webp', alt: 'Capa do módulo 1, Preparação e Ambiente', label: 'Módulo 01', ratio: '1:1' as const, eyebrow: 'Módulo 01', title: 'Preparação e Ambiente', description: 'Aprenda a preparar o espaço para tornar o momento mais confortável, acolhedor e propício ao relaxamento e à conexão.' },
    { src: '/images/modulo-2.webp', alt: 'Capa do módulo 2, Técnicas de Toque', label: 'Módulo 02', ratio: '1:1' as const, eyebrow: 'Módulo 02', title: 'Técnicas de Toque', description: 'Conheça técnicas introdutórias de toque e entenda como aplicá-las com atenção, cuidado e respeito ao conforto do seu parceiro(a).' },
    { src: '/images/modulo-3.webp', alt: 'Capa do módulo 3, Sequência Prática a Dois', label: 'Módulo 03', ratio: '1:1' as const, eyebrow: 'Módulo 03', title: 'Sequência Prática a Dois', description: 'Tenha uma sequência organizada de movimentos para orientar a prática e ajudar você a transformar o aprendizado em um momento especial.' },
  ],
  bonusesSection: { title: 'Bônus' },
  bonuses: [
    { src: '/images/bonus-1.webp', alt: 'Capa do bônus 1, Guia do Ambiente Perfeito', label: 'Bônus 01', ratio: '1:1' as const, eyebrow: 'Bônus 01', title: 'Guia do Ambiente Perfeito', description: 'Benefício principal: preparar um espaço mais acolhedor para o momento a dois. Uma orientação prática para ajudar você a pensar no ambiente, no conforto e nos detalhes que contribuem para uma experiência agradável.', value: '' },
    { src: '/images/bonus-2.webp', alt: 'Capa do bônus 2, Manual dos Toques Iniciais', label: 'Bônus 02', ratio: '1:1' as const, eyebrow: 'Bônus 02', title: 'Manual dos Toques Iniciais', description: 'Benefício principal: começar a praticar com mais clareza e confiança. Um material complementar com orientações introdutórias para ajudar você a compreender e explorar os primeiros movimentos de toque.', value: '' },
    { src: '/images/bonus-3.webp', alt: 'Capa do bônus 3, Roteiro da Massagem a Dois', label: 'Bônus 03', ratio: '1:1' as const, eyebrow: 'Bônus 03', title: 'Roteiro da Massagem a Dois', description: 'Benefício principal: seguir uma sequência organizada durante a prática. Um roteiro de apoio para ajudar você a estruturar o momento, sem precisar improvisar cada etapa.', value: '' },
  ],
  offersSection: {
    title: 'Oferta',
    paymentSecurityImage: '/images/metodos-pagamento-seguranca.svg',
    paymentSecurityAlt: 'Métodos de pagamento e selos de compra segura, satisfação garantida e privacidade protegida',
  },
  offers: {
    simple: {
      title: 'Oferta Simples: O Poder do Toque',
      items: ['E-book digital O Poder do Toque.', 'Três módulos de conteúdo.', 'Acesso vitalício.'],
      previousPrice: 'R$ 29,90', installmentCount: 0, installmentValue: '', cashValue: 'R$ 9,90', ctaLabel: 'Massagem simples',
    },
    complete: {
      badge: 'MAIS VENDIDO', title: 'Oferta Completa: O Poder do Toque + 3 Bônus',
      items: [
        { label: 'E-book digital O Poder do Toque.' },
        { label: 'Três módulos de conteúdo.' },
        { label: 'Bônus 1: Guia do Ambiente Perfeito.' },
        { label: 'Bônus 2: Manual dos Toques Iniciais.' },
        { label: 'Bônus 3: Roteiro da Massagem a Dois.' },
        { label: 'Acesso vitalício aos materiais adquiridos.' },
      ],
      previousPrice: 'R$ 49,90', installmentCount: 0, installmentValue: '', cashValue: 'R$ 19,90', ctaLabel: 'Massagem completa',
    },
    popup: {
      eyebrow: '',
      message: 'Você escolheu o e-book O Poder do Toque. Acrescente os três bônus para preparar o ambiente, conhecer os primeiros toques e seguir uma sequência prática a dois. Adicione os bônus por R$ 5,00 a mais e pague R$ 14,90 no total.',
      title: 'Espere! Quer Levar a Experiência Completa?', previousPrice: '', installmentCount: 0, installmentValue: '', cashValue: 'R$ 14,90',
      ctaLabel: 'Massagem especial', secondaryLabel: 'Não, prefiro continuar apenas com o e-book.',
    },
  },
  guarantee: {
    image: '/images/selo-garantia-30-dias.webp',
    imageAlt: 'Selo de garantia de 30 dias',
    days: 30,
    title: 'Você Tem 30 Dias Para Avaliar Sua Compra',
    body: 'Você tem 30 dias para conhecer o material e avaliar sua compra. Se desejar, poderá solicitar o reembolso nesse prazo, conforme as condições informadas no momento da compra.',
  },
  faqSection: { title: 'Perguntas frequentes' },
  faq: [
    { question: 'Preciso ter experiência com massagens?', answer: 'Não. O conteúdo foi organizado para ajudar iniciantes a conhecer orientações introdutórias e uma sequência prática de movimentos. Leia as instruções e respeite sempre o conforto e os limites do seu parceiro(a).' },
    { question: 'Como vou receber o e-book?', answer: 'O produto é digital. Após a confirmação da compra, o acesso será disponibilizado conforme as instruções enviadas pelo sistema de pagamento.' },
    { question: 'O acesso é vitalício?', answer: 'Sim. A oferta prevê acesso vitalício ao material adquirido, de acordo com as condições de acesso da plataforma utilizada.' },
    { question: 'O conteúdo realmente vale a pena?', answer: 'O material foi organizado para apresentar orientações introdutórias sobre preparação do ambiente, técnicas de toque e uma sequência prática a dois. Analise a descrição da oferta e o conteúdo apresentado para decidir se ele corresponde ao que você procura.' },
    { question: 'E se eu não gostar do material?', answer: 'Você conta com uma garantia de 30 dias. Caso decida solicitar o reembolso, siga as instruções e condições informadas no momento da compra.' },
  ],
  footer: { brand: '', copyright: '' },
}
