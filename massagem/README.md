# O Poder do Toque

Página de vendas desenvolvida com React, TypeScript e Vite, preparada para Cloudflare Pages conectado a um repositório GitHub.

## Desenvolvimento local

Use Node.js 22.16.0 e pnpm 10.26.0. Na raiz do projeto:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Preparar e conferir a publicação

```sh
pnpm predeploy
pnpm cloudflare:check
```

A saída do build é `dist/`. A configuração de Pages está em `wrangler.jsonc` com o nome `o-poder-do-toque` e `pages_build_output_dir: ./dist`.

## Configuração do Cloudflare Pages

Crie um projeto **Pages** conectado ao repositório GitHub deste produto e configure:

| Campo | Valor |
|---|---|
| Branch de produção | `main` |
| Comando de build | `pnpm predeploy` |
| Diretório de saída | `dist` |
| Diretório raiz | raiz do repositório |
| `NODE_VERSION` | `22.16.0` |
| `PNPM_VERSION` | `10.26.0` |

O nome do projeto Pages deve corresponder a `o-poder-do-toque`. A integração com GitHub publica automaticamente novos envios para a branch configurada. Confira a branch e o projeto selecionados no painel antes de ativar a publicação automática.

## Configuração da API de Conversões da Meta

O Pixel do navegador usa o ID configurado em `src/config/tracking.ts`. A função em `functions/api/meta-event.js` encaminha `PageView` para a Conversions API usando o mesmo `event_id` para deduplicação. Configure `META_CAPI_ACCESS_TOKEN` como secret nos ambientes de produção e preview do Pages. O token não deve ser adicionado ao código nem enviado ao repositório. Localmente, use `.dev.vars`, que está no `.gitignore`.

## Arquivos de configuração

- Conteúdo e ofertas: `src/config/content.ts`
- Cores: `src/config/theme.ts`
- Checkouts: `src/config/links.ts`
- Pixel e tracking: `src/config/tracking.ts`
- SEO: `src/config/seo.ts`
- Imagens: `public/images/` (WebP e os SVGs protegidos da base)

O SEO permanece com `noindex,nofollow` e sem canonical enquanto o domínio final não for definido.
