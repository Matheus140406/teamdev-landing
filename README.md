# Team Dev — Landing Page (V4)

HTML/CSS/JS puro, multi-página, pronta pro **GitHub Pages**.

## ⚠️ Decisões importantes (conflitos do briefing V4)
- O V4 pedia **roxo neon**, mas sua última instrução foi **preto + azul escuro** — mantive **preto/azul**. Voltar pro roxo é só trocar os tokens no topo do `styles.css`.
- O V4 dizia "manter a animação inicial do hero" (a do PC) — essa foi removida a seu pedido; o hero agora é **parallax + partículas**.
- **Portfólio, logos e estatísticas** entram como **placeholder claramente editável** — não inventamos cliente nem número. Procure os comentários `//` e os `[ ... ]`.

## ✨ Novidades V4
- **Fotos reprocessadas com cor natural** (sem tom roxo): balanço de branco, contraste e nitidez.
- **Páginas individuais dos fundadores** (`matheus.html`, `eduardo.html`) — clique no card em "Quem somos". História, experiência, especialidades, tecnologias, curiosidades, valores, redes e contato, com transição app-like.
- **Hero cinematográfico**: partículas em canvas + parallax (mouse/scroll) + floating shapes + entrada sequencial.
- **Micro-animações**: cursor personalizado, botões magnéticos + glow respirando, hover em tudo, contadores que sobem, barras animadas, scroll reveal/stagger, aurora e noise de fundo.
- **Timeline premium** no processo (conectores + ícones).
- **Seções novas**: estatísticas, projetos (placeholder), antes & depois (slider), logos (placeholder) — além de comparação, tecnologias, FAQ.
- **Menu off-canvas** no mobile: backdrop blur, trava o scroll, fecha clicando fora/Esc.
- **Cookies LGPD completo**: Aceitar / Rejeitar / **Personalizar** (Essenciais · Análise · Marketing) / **Salvar preferências**, persistido em localStorage.
- **SEO**: `robots.txt`, `sitemap.xml`, Open Graph, Twitter Card, JSON-LD (Organization, FAQ, **LocalBusiness**, **Breadcrumb**), keywords, canonical.
- **Dark/Light** e **PT/EN** funcionais (172 chaves traduzidas), ambos persistidos.

## 🚀 Deploy
Suba a pasta → GitHub Pages (branch `main`, `/root`). Ou abra `index.html`.

## ✅ Antes de publicar
| Onde | O quê |
|---|---|
| `assets/js/app.js` (`WHATSAPP`) | Número real `55DDDNUMERO` + **reofuscar** |
| Estatísticas / Projetos / Logos / Depoimentos | Trocar placeholders por dados reais. **Nunca inventar.** |
| `matheus.html` / `eduardo.html` | Preencher história/experiência/curiosidades (marcados com `//`) |
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

## 🖼️ Imagens / Canva
- Fotos dos fundadores tratadas (cor natural).
- `hero-art.png` e `og.png` (preto/azul) prontas pra abrir no **Canva** e refinar.
- O V4 pede fotos de escritório/programadores: não incluí banco de imagens (evitar stock genérico/direitos). Produza no **Canva** ou use Unsplash/Pexels e jogue em `assets/img/`.

## ⚠️ Notas honestas
- **Ofuscação ≠ criptografia.** Segredos (chaves/API) só no back-end.
- **i18n por JS** funciona e persiste; pra SEO ideal são páginas `/pt/` e `/en/` com `hreflang` (posso montar).
- **Páginas faltando do V4** (`sobre.html`, `equipe.html`, `contato.html`): hoje são seções no `index.html`. Posso separá-las em páginas próprias se quiser.

## 🆕 Atualização (favicon + fotos + portfólio)
- **Favicon** completo: `favicon.svg`, `.ico`, 16/32, apple-touch (180), PWA 192/512 + `site.webmanifest`. Plugado em todas as páginas.
- **Fotos mais profissionais**: melhor exposição/contraste, vinheta sutil e **profundidade** (fundo levemente desfocado tipo lente retrato). Cor natural mantida.
- **Portfólio conceitual** (8 projetos: clínica, advocacia, restaurante, imobiliária, dashboard, academia, arquitetura, startup) com categoria, objetivo, tecnologias e resultado — apresentados como demonstração, não clientes reais.
- **Carrossel de depoimentos**: hover não pausa mais; clicar destaca + pausa, clicar fora volta; no toque (mobile) aumenta enquanto pressiona.

## 🆕 V5 — blend roxo+azul + refinamento
- **Paleta roxo + azul** (blend sofisticado, gradientes roxo→azul→ciano, mesh no fundo). Tokens no topo do `styles.css`.
- **Espaçamentos refinados** (containers e títulos menores — "nada exageradamente grande"), melhor leitura em todas as telas.
- **Elementos flutuantes/mesh**: grid tecnológico global, orbs desfocados por seção (movimento quase imperceptível), linhas luminosas animadas como separadores, + partículas no hero.
- **Seção institucional Segurança & LGPD** (LGPD, privacidade, segurança de dados, criptografia/HTTPS, transparência, consentimento de cookies, boas práticas).
- Favicon, OG e arte do hero atualizados pro novo blend.

## 🆕 V6 — fotos de estúdio, serviços, idiomas e antes/depois real
- **Fotos novas dos fundadores** (estúdio): fundo unificado roxo/azul limpo (o do Eduardo foi refeito), brilho/contraste e respiro. Mesmos arquivos `matheus.webp` / `eduardo.webp`.
- **Hospedagem** e **Tráfego Pago** adicionados como **serviços à parte** (badge "Serviço à parte") na seção de serviços.
- **Antes & Depois com projeto real**: usa o seu **Cafeteria Aroma & Sabor** (GitHub) como o "depois", com chrome de navegador e link pro repositório.
- **Idiomas PT / EN / ES** num dropdown (antes era só PT/EN). Espanhol 100% traduzido; qualquer idioma novo é só adicionar um dicionário em `I18N`.
- **Mais fluidez**: tilt 3D nos cards ao mover o mouse, brilho percorrendo os botões, shimmer no texto em gradiente.

> ⚠️ Sobre "traduzir para todos os países": traduzir à mão para 100+ idiomas com qualidade de agência não é viável (viraria tradução automática ruim). Adicionei o **espanhol** (o de maior alcance além do inglês) e o sistema aceita qualquer idioma novo trocando um dicionário. Me diga quais idiomas priorizar (francês, italiano, alemão...) que adiciono.

## 🆕 V8 — rebrand, idiomas, showcase real e páginas legais
- **Marca: Dev Team Tech** (renomeado em todo o site) + **logo nova "órbita"** (favicon, OG e selo do menu).
- **6 idiomas** no seletor: PT · EN · ES · FR · DE · IT (todos traduzidos à mão).
- **Showcase de projetos reais** (substitui o slider bugado): abas **Cafeteria Aroma & Sabor** e **Ronaldo Refrigeração**, com botão **Antes/Depois** e **link pro GitHub** (nova aba).
- **Fotos**: Eduardo subido no enquadramento.
- **Avaliações** com nomes; **Firebase/Supabase/PostgreSQL** removidos dos projetos e do stack.
- **Comparação** reescrita ("site de prateleira vs. sob medida").
- **Logos de confiança removidas** (sem clientela ainda).
- **E-mail**: devteam2026tech@gmail.com.
- **Política de Privacidade** e **Cookies** agora são páginas próprias (`privacidade.html`, `cookies.html`) que abrem em **nova aba**.
- Bios: curiosidades do Matheus (artes marciais, mangás, animes + GitHub) e do Eduardo (carros/Corsa, Palmeiras + GitHub), história do Eduardo reescrita.

> Idiomas: cobri os 6 principais à mão (qualidade de agência). "Todos os países" literalmente não é viável sem tradução automática ruim — qualquer idioma novo entra só com um dicionário no `I18N`. Me diga quais priorizar.

## 🆕 V9 — +2 projetos reais, CTA premium e menu lateral
- **Showcase com 4 projetos** (ordem: Café Aroma → Cafeteria Aroma & Sabor → Ronaldo Refrigeração → ClimaCerto). **Café Aroma** e **ClimaCerto** são sites reais incluídos em `projetos/` — o botão "Acessar o site" abre cada um em nova aba. Cafeteria e Ronaldo apontam pro GitHub.
- **CTA final repaginado**: borda em gradiente, glow no topo, inputs mais definidos e texto em branco — bem mais premium e com contraste marcante.
- **Menu lateral (off-canvas)** revisado, agora com **seletor de idioma** dentro dele (sincronizado com o do topo).
- **GitHub do Eduardo** atualizado para o perfil (github.com/Eduardovilanova).

### Estrutura nova
```
projetos/
├── cafe-aroma/   (index.html · style.css · script.js)
└── climacerto/   (index.html · style.css · script.js)
```

## 🆕 V10 — antes/depois real + Tailwind
- **Antes & Depois reestruturado**: agora são **2 projetos**, cada um com a versão real **antes → depois**:
  - **Cafeteria Aroma & Sabor**: antes = *Café Aroma* · depois = *Cafeteria Aroma & Sabor* (GitHub)
  - **Ronaldo Refrigeração**: antes = *ClimaCerto* · depois = *Ronaldo Refrigeração* (GitHub)
  O botão "Ver o antes/depois" troca a tela de verdade (imagem, nome, stack e link), e "Acessar o site" sempre abre o que está em tela (nova aba).
- **Tailwind** aplicado: os mini-sites *Café Aroma* e *ClimaCerto* (em `projetos/`) foram reconstruídos com **Tailwind CSS (CDN)**, mantendo o visual. Stack deles aparece como HTML · Tailwind · JS.

## 🆕 V11 — previews reais, sem pasta projetos, touch
- **Pasta `projetos/` removida** (estava atrapalhando deploy/rotas). O showcase não depende mais de páginas locais.
- **Previews fiéis ao código real** dos dois sites "depois": Cafeteria Aroma & Sabor (tema café escuro, hero "Aroma & Sabor", cards) e Ronaldo Refrigeração (slate/azul, serviços, depoimentos, neve, FAB do WhatsApp).
- **Antes & Depois** agora é comparação visual (Café Aroma → Cafeteria; ClimaCerto → Ronaldo); o botão "Acessar o site" abre sempre a **versão no ar (GitHub)**.
- **Stack por projeto**: Cafeteria = HTML·CSS·JS · Ronaldo = HTML·Tailwind·JS.
- **Touch**: `touch-action: manipulation` (sem atraso de 300ms), alvos de toque ≥44px, feedback de toque em telas sem hover, sem scroll horizontal acidental.

## 🆕 V12 — efeitos no Antes & Depois + ícones sociais no rodapé
- **"Acessar o site" removido** do showcase (por enquanto). Ficou só o toggle Antes/Depois.
- **Efeitos do início** aplicados na seção: orbs roxo/ciano com blur, glow radial atrás do preview, grade tech sutil com máscara e 3 partículas flutuantes. O preview ganhou **moldura em gradiente + brilho** (igual herói/CTA).
- **Rodapé com ícones** (mais profissional): Instagram, WhatsApp, E-mail, GitHub (Matheus) e GitHub (Eduardo). Cada um acende na cor da marca no hover.
  - ⚠️ O **Instagram está com placeholder** `instagram.com/devteamtech` — me manda o @ certo que eu troco.

## 🆕 V13 — ícones redondos, comparação repaginada e prazo realista
- **Ícones sociais do rodapé agora redondos** (mais elegantes que o quadrado).
- **Comparação "prateleira vs. sob medida" mais profissional**: selo **Recomendado** no card da Dev Team Tech (com moldura em gradiente e brilho), divisor **VS** no centro, rótulos ("Comum no mercado" / "Nosso padrão") e ícones em chips circulares (✗ vermelho / ✓ verde). Tudo traduzido nas 6 línguas.
- **Prazo ajustado para a realidade**: em vez de "em semanas, não meses", agora o texto diz **prazo definido e transparente**, e a FAQ informa **até 90 dias, conforme a complexidade do projeto** (atualizado em PT/EN/ES/FR/DE/IT, inclusive no JSON-LD de SEO).

## 🆕 V14 — ícones preenchidos, segurança e página 404
- **Ícones sociais preenchendo o círculo**: glifo maior (25px) e, no hover, o círculo inteiro acende na cor da rede (Instagram em gradiente, WhatsApp verde, e-mail ciano, GitHub branco).
- **Medidas de segurança (sem atrapalhar o Google)**:
  - JS continua **ofuscado** (string-array base64, control-flow, self-defending) — esconde lógica e o número do WhatsApp.
  - Todo o conteúdo que importa pro SEO está no **HTML + JSON-LD**, então o Google lê tudo mesmo sem rodar o JS.
  - Metas de segurança no `<head>`: `referrer-policy`, `X-Content-Type-Options: nosniff`, CSP `upgrade-insecure-requests`, `format-detection`. Arquivo **`_headers`** incluído (HSTS, X-Frame-Options, Permissions-Policy) para hosts que suportam (Netlify/Cloudflare/Vercel; o GitHub Pages ignora, mas não atrapalha).
- **Página 404 própria** (`404.html`): o GitHub Pages serve ela automaticamente em links quebrados — com a identidade do site, "404" em gradiente, orbs e botões de voltar/WhatsApp.

## 🆕 V15 — responsividade mobile, bolinha do WhatsApp e número real
- **Header enxuto no celular**: a marca não quebra mais em duas linhas, e o seletor de idioma + botão grande do WhatsApp saíram do topo (continuam no menu lateral). Sobra marca + tema + menu — limpo.
- **WhatsApp flutuante virou bolinha** (ícone redondo com leve pulso), em vez da pílula com texto.
- **Menos espaço vazio** entre seções no mobile (padding reduzido).
- **Tema claro mais limpo**: fundo menos azulado e efeitos de fundo (malha/ruído/grade) bem mais suaves — no claro e no celular.
- **Número do WhatsApp aplicado**: `+55 61 9416-6404` → todos os botões agora abrem `wa.me/556194166404`.

## 🆕 V16 — auditoria de responsividade + segurança máxima
**Responsividade:** grids colapsam em 980/860/640/560/380px, mídia fluida (sem overflow horizontal), `.card.tall` e `cred/stats` ajustados nos telefones menores. Header enxuto e espaçamento corrigido (V15).

**Segurança (o que é real):**
- **CSP completo** (Content-Security-Policy) em todas as páginas — só permite recursos próprios + Google Fonts. Bloqueia injeção de script externo. `script-src 'self'` (movi o "ano" do rodapé pro JS pra não precisar de inline).
- **Headers fortes** no `vercel.json` e `_headers`: HSTS (preload), X-Frame-Options DENY (anti-clickjacking), nosniff, Referrer-Policy, Permissions-Policy, COOP, CORP.
- **JS ofuscado** (obscurece a lógica) + **sem segredos no client** (nada de senha/API key; o número do WhatsApp é público mesmo).
- **`security.txt`** em `/.well-known/` (canal de contato de segurança).
- **Google continua lendo tudo** — CSP não bloqueia crawler; conteúdo está em HTML + JSON-LD.

**Verdades importantes (no README pra não te iludir):**
- O endereço `usuario.github.io/repo` EXPÕE seu GitHub por design. Pra mascarar: **domínio próprio**.
- Pra esconder o código-fonte: **deploy pelo Vercel a partir de repo PRIVADO** (GitHub Pages de repo público deixa o código visível).
- Nenhum site público esconde 100% a hospedagem de quem é técnico (DNS/IP entregam). Domínio próprio + Vercel resolve pro público geral.
- A proteção nº 1 das suas contas é **2FA no GitHub e no Vercel** — sem isso, nada do resto importa.

## 🆕 V17 — contato do Eduardo, footer, tema mobile, comparação, cursor e scroll
- **WhatsApp do Eduardo**: na página dele, o botão "Falar comigo" abre o número **+55 61 9585-1679** com mensagem já pronta pra enviar. O seu (Matheus) segue como principal em todo o resto do site.
- **Footer centralizado**: tirei a frase e deixei só a marca + os ícones, tudo centralizado (bem mais limpo no PC e no celular).
- **Tema claro/escuro no celular**: agora tem botão de tema **no menu lateral** também, funciona do header e do menu, e troca o ícone (lua/sol) em todos os lugares. Tema claro mais limpo.
- **Comparação "prateleira vs sob medida"**: troquei a borda em gradiente por uma técnica robusta (background-clip) — some aquele "oval" roxo/azul que aparecia no Samsung. Apliquei a mesma proteção no showcase e no CTA final.
- **Cursor**: reduzi o atraso (segue o mouse bem mais colado).
- **Scroll mais suave**: desliguei o parallax no celular (touch), que era o que pesava na rolagem.

## 🆕 V18 — espaço do hero, ícones de marca animados, sem placeholders
- **Espaço enorme no hero (mobile) corrigido**: era o `gap` grande entre o mock e o texto. Reduzi pra todos os tamanhos de tela.
- **Ícones de marca reais no footer**: Instagram (gradiente), WhatsApp (verde), Gmail (colorido) e GitHub. Maiores, com hover que levanta/brilha na cor da marca e **animação "pop" ao clicar** (eles se mexem).
- **Removidas TODAS as observações com `//`** — inclusive umas que apareciam no site (notas de "números ilustrativos", "depoimentos de exemplo", "revise com jurídico") e os `// edite...` / `// adicione...` das páginas dos fundadores.
- **Responsividade reforçada**: `viewport-fit=cover` + safe-area (notch e barra inferior do iPhone), trava de zoom de texto no iOS. Continua respondendo por largura em iPhone/Android/Mac/Win/Linux.
- **Mais vida**: hover e clique animados nos ícones; respeita quem prefere menos movimento.
