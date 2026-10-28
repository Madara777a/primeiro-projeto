# PROJECT_SPEC.md — Matriz Página de Vendas

> Especificação do projeto O Poder do Toque. Configurações atuais em `src/config/`.

## Identificação
- Nome do projeto: O Poder do Toque
- Nome do produto: O Poder do Toque
- Slug: o-poder-do-toque
- Nicho: conteúdo digital de massagem a dois
- Objetivo: apresentar o e-book, seus módulos, bônus e ofertas
- Domínio/subdomínio: não configurado; definir antes da indexação

## Stack
- Framework: React + Vite + TypeScript + Tailwind
- Build: `pnpm build`
- Output: `dist/`
- GitHub: repositório do produto a criar/conectar
- Cloudflare Pages: `o-poder-do-toque`
- Domínio: não configurado

## Identidade variável
- brand-primary: `#7D1026`
- brand-primary-dark: `#4A0918`
- brand-primary-light: `#E5BD68`
- cta-color: `#D4A84F`
- cta-dark: `#B88A32`
- cta-light: `#E5BD68`
- Logo: não informado
- Favicon: não informado

## Barra de urgência
- Ativa: não
- Texto: vazio

## Hero
- Imagem de demonstração: /images/hero-mockup.webp
- Alt: Mockup do produto
- H1: Descubra Como Transformar o Toque em uma Experiência de Prazer e Desejo a Dois Desde a Primeira Aula
- Parágrafo: Aprenda uma sequência organizada de movimentos com o método O Poder do Toque e descubra novas formas de surpreender seu parceiro(a), sair da rotina e criar momentos especiais de intimidade, mesmo sem experiência com massagens.
- CTA: QUERO DESCOBRIR O PODER DO TOQUE
- Link/ação: rolagem para a seção de ofertas
- Selo/prova social: `/images/selos-seguranca-compra.svg`, na mesma largura do CTA

## Resultados
- Título: Pequenos Gestos Podem Transformar os Momentos a Dois
- Mídias: sete imagens de conversas fornecidas para a página, em `public/images/depoimento-01.webp` a `depoimento-07.webp`.

## Módulos
### Módulo 01
- Imagem: `public/images/modulo-1.webp`
- Identificação: Módulo 01
- Título: Preparação e Ambiente
- Descrição: Aprenda a preparar o espaço para tornar o momento mais confortável, acolhedor e propício ao relaxamento e à conexão.
### Módulo 02
- Imagem: `public/images/modulo-2.webp`
- Identificação: Módulo 02
- Título: Técnicas de Toque
- Descrição: Conheça técnicas introdutórias de toque e entenda como aplicá-las com atenção, cuidado e respeito ao conforto do seu parceiro(a).
### Módulo 03
- Imagem: `public/images/modulo-3.webp`
- Identificação: Módulo 03
- Título: Sequência Prática a Dois
- Descrição: Tenha uma sequência organizada de movimentos para orientar a prática e ajudar você a transformar o aprendizado em um momento especial.

## Bônus
### Bônus 01
- Imagem: `public/images/bonus-1.webp`
- Título: Guia do Ambiente Perfeito
- Descrição: Orientação prática para preparar o espaço, o conforto e os detalhes do momento a dois.
- Valor: não informado
### Bônus 02
- Imagem: `public/images/bonus-2.webp`
- Título: Manual dos Toques Iniciais
- Descrição: Material complementar com orientações introdutórias sobre os primeiros movimentos de toque.
- Valor: não informado
### Bônus 03
- Imagem: `public/images/bonus-3.webp`
- Título: Roteiro da Massagem a Dois
- Descrição: Roteiro de apoio para estruturar o momento e seguir uma sequência organizada.
- Valor: não informado

## Oferta simples
- Itens: e-book digital O Poder do Toque; três módulos; acesso vitalício
- Preço anterior: R$ 29,90
- Valor à vista: R$ 9,90
- CTA: Massagem simples
- Checkout: configurado em `src/config/links.ts`

## Oferta completa
- Itens: e-book, três módulos, três bônus e acesso vitalício; a lista também alimenta o modal
- Preço anterior: R$ 49,90
- Valor à vista: R$ 19,90
- CTA: Massagem completa
- Checkout: configurado em `src/config/links.ts`

## Modal de upgrade
- Conteúdo definido em `src/config/content.ts`; itens vêm da oferta completa
- Upgrade do e-book simples: total de R$ 14,90 (acréscimo de R$ 5,00)
- CTA: Massagem especial
- Checkout: configurado em `src/config/links.ts`
- Itens vêm da mesma fonte da Oferta Completa.

## Garantia
- Prazo informado na oferta: 30 dias
- Título: Você Tem 30 Dias Para Avaliar Sua Compra
- Texto: Você tem 30 dias para conhecer o material e avaliar sua compra. Se desejar, poderá solicitar o reembolso nesse prazo, conforme as condições informadas no momento da compra.

## FAQ
1. Pergunta: Sua pergunta 01
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
2. Pergunta: Sua pergunta 02
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
3. Pergunta: Sua pergunta 03
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
4. Pergunta: Sua pergunta 04
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.
5. Pergunta: Sua pergunta 05
   Resposta: Escreva aqui uma resposta objetiva para uma objeção real do comprador.

## Rodapé
- Marca/nome: Marcelo Black
- Ano: 2026
- Copyright: © 2026 Marcelo Black
- Privacidade: não informado
- Termos: não informado
- Suporte: não informado

## Assets
Imagens do produto e depoimentos em WebP sob `public/images/`. Os três SVGs protegidos da base estão incluídos.

| Uso | Arquivo | Proporção | Alt |
|---|---|---|---|
| Hero | `mockup-o-poder-do-toque-branco.webp` | 3:2 | Mockup do produto O Poder do Toque |
| Módulos 01 a 03 | `modulo-1.webp` a `modulo-3.webp` | 1:1 | Capas dos módulos |
| Bônus 01 a 03 | `bonus-1.webp` a `bonus-3.webp` | 1:1 | Capas dos bônus |
| Depoimentos 01 a 07 | `depoimento-01.webp` a `depoimento-07.webp` | 9:16 | Capturas de depoimento fornecidas |

## Tracking
- Meta Pixel ID: configurado em `src/config/tracking.ts`
- PageView: navegador e Conversions API, deduplicado por `event_id`
- ViewContent: não informado
- InitiateCheckout: não informado
- Google Analytics: não informado
- GTM: não informado
- TikTok Pixel: não informado
- Preservar UTMs nos checkouts: implementado; validar com os checkouts do novo produto

> A matriz captura e encaminha automaticamente UTMs, `fbclid`, `gclid` e `ttclid` para os três checkouts quando as URLs forem configuradas.

> Nenhum ID foi inventado ou herdado.

## SEO
- Title: O Poder do Toque | Massagem a Dois
- Description: configurada em `src/config/seo.ts`
- Canonical: não informado
- OG title: não informado
- OG description: não informada
- OG image: não informada
- Robots: `noindex,nofollow` até definir o domínio final.
- Favicon: não informado

## Regras específicas
- A referência fornece copy de template, não dados finais de um produto.
- Manter placeholders textuais até o produto real ser definido.
- A data da urgência deve ser calculada dinamicamente e atualizada na virada do dia.
- Não tratar os placeholders de depoimentos como provas reais.
- O Hero padrão usa proporção horizontal 3:2, `object-fit: contain` e, somente no desktop, 50% da largura anterior com máximo de 520px.
- Somente no desktop, os dois cards de oferta ficam alinhados pelo topo.
- O carrossel padrão exibe 5 itens em notebook/desktop, cards com 75% da largura no mobile, velocidade de 75px/s, fade lateral e não pausa no hover/foco.
- Somente WebP pode ser publicado; outros formatos devem passar por `pnpm prepare:images`.
- O predeploy executa o build sem validar o preenchimento de conteúdo, checkouts ou SEO.

## Status
- [x] Spec preenchido com dados determináveis
- [x] Copy conferida com a referência
- [x] Assets
- [x] Links de checkout
- [x] Pixel configurado
- [ ] SEO completo
- [ ] Preview aprovado pelo usuário
- [ ] Checklist aprovado
- [x] Build aprovado
- [ ] Repositório GitHub criado e vinculado
- [x] Configuração local de Cloudflare Pages preparada
- [ ] Deploy autorizado para o projeto derivado

## Estado de publicação no Pages
- Este projeto é a página de vendas do produto O Poder do Toque.
- Os três checkouts estão configurados em `src/config/links.ts`.
- Pixel configurado em `src/config/tracking.ts`; o token da Conversions API deve ser configurado como secret no Cloudflare Pages.
- SEO usa `noindex,nofollow` e não tem domínio/canonical definidos para evitar indexação antes da configuração final.
- Build local: pnpm build. Build para publicação: pnpm predeploy.
- Destino: Cloudflare Pages via GitHub, saída dist e versões do README.
- GA, GTM e TikTok são campos reservados sem carregador; preenchê-los não ativa a integração e não bloqueia a publicação.
- Nenhuma autorização histórica nesta ficha deve ser herdada por um produto novo.
