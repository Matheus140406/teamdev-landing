# Dev Team Tech — Landing Page

Site institucional da **Dev Team Tech**, agência de desenvolvimento web. SPA em **React + TypeScript + Vite**, com **Tailwind CSS v4**, i18n (PT · ES · EN) e deploy contínuo na **Vercel**.

🔗 Produção: [devteamtech.com.br](https://www.devteamtech.com.br)

## Stack

- **React 19** + **TypeScript**
- **Vite** (build e dev server)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- Navegação própria por hash, sem dependência de router
- i18n próprio (PT / ES / EN) centralizado em `src/content.ts`
- Deploy automático na **Vercel** a cada push em `main`

## Rodando localmente

```bash
pnpm install
pnpm dev       # servidor de desenvolvimento
pnpm build     # build de produção em dist/
pnpm preview   # serve o build de produção localmente
```

## Estrutura

```
teamdev-landing/
├── src/
│   ├── App.tsx         # componentes e páginas da aplicação
│   ├── content.ts       # todo o conteúdo e textos (PT/ES/EN), dados do time e projetos
│   ├── index.css        # design system e estilos
│   ├── motion.ts         # animações e scroll-reveal
│   └── imports/          # imagens (fotos do time, capas de projetos)
├── public/               # favicon, manifest, assets estáticos
├── .figma/make/site.json # configuração de SEO/meta tags geradas no build
└── vite.config.ts
```

## Time

| | Papel |
|---|---|
| **Matheus** — Fundador & CEO | Conduz o relacionamento com o cliente (reuniões, diagnóstico, acompanhamento) e também desenvolve |
| **Eduardo** — CEO & Sócio | Participa das decisões de produto e desenvolve o front-end |
| **Daniel** — QA | Testa cada entrega antes de chegar ao cliente |
| **Gabriel** — Marketing | Cuida do conteúdo do Instagram da Dev Team Tech e de conteúdo próprio |

## Deploy

A Vercel builda automaticamente a partir da `main` (`pnpm build` → `dist/`). Não é necessária configuração adicional além da já existente no projeto.
