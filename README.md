# Team Dev — Landing Page

HTML/CSS/JS puro, multi-página, pronta pro **GitHub Pages** ou **Vercel**.

## ✨ Destaques
- **Hero cinematográfico**: partículas em canvas + parallax (mouse/scroll) + floating shapes + entrada sequencial.
- **Páginas individuais dos fundadores** (`matheus.html`, `eduardo.html`), com transição app-like.
- **Micro-animações**: cursor personalizado, botões magnéticos + glow respirando, hover em tudo, contadores que sobem, barras animadas, scroll reveal/stagger, aurora e noise de fundo.
- **Timeline premium** no processo (conectores + ícones).
- **Menu off-canvas** no mobile: backdrop blur, trava o scroll, fecha clicando fora/Esc.
- **Cookies LGPD completo**: Aceitar / Rejeitar / Personalizar (Essenciais · Análise · Marketing) / Salvar preferências, persistido em localStorage.
- **SEO**: `robots.txt`, `sitemap.xml`, Open Graph, Twitter Card, JSON-LD (Organization, FAQ, LocalBusiness, Breadcrumb), keywords, canonical.
- **Dark/Light** e 6 idiomas (PT · EN · ES · FR · DE · IT) funcionais, persistidos.
- **Segurança**: CSP completo, headers fortes (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP, CORP), JS ofuscado, `security.txt`.
- **Showcase de projetos reais**: Cafeteria Aroma & Sabor e Ronaldo Refrigeração, com comparação antes/depois e link pro GitHub.

## 🚀 Deploy
Suba a pasta → GitHub Pages (branch `main`, `/root`) ou Vercel. Ou abra `index.html`.

## ✅ Antes de publicar
| Onde | O quê |
|---|---|
| `assets/js/app.js` (`WHATSAPP`) | Número real `55DDDNUMERO` + **reofuscar** |
| E-mail, domínio, telefone do schema | Trocar pelos reais |
| Modal de Privacidade | Revisar com apoio jurídico |

Reofuscar (após editar qualquer `.js`):
```bash
npx javascript-obfuscator app.js --output app.min.js --compact true \
  --control-flow-flattening true --string-array true \
  --string-array-encoding base64 --self-defending true --rename-globals false
# repita para enhance.js
```

## 📁 Estrutura
```
teamdev-landing/
├── index.html · matheus.html · eduardo.html
├── robots.txt · sitemap.xml · README.md
└── assets/
    ├── css/styles.css
    ├── js/  app.js · app.min.js · enhance.js · enhance.min.js
    └── img/ matheus.webp · eduardo.webp · og.png · hero-art.png
```

## 🔒 Segurança — o que é real
- **Ofuscação ≠ criptografia.** Segredos (chaves/API) só no back-end.
- **CSP completo** em todas as páginas, só permite recursos próprios + Google Fonts.
- O endereço `usuario.github.io/repo` expõe o GitHub por design — para mascarar, use domínio próprio.
- Para esconder o código-fonte: deploy pelo Vercel a partir de repo **privado** (GitHub Pages de repo público deixa o código visível).
- A proteção nº 1 das contas é **2FA no GitHub e no Vercel**.
