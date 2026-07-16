# ServeTogether — W01 Assignment: Initial Site Creation

Site Express + EJS para o projeto de serviço comunitário (CSE 340).

## Rodando localmente

```bash
npm install
cp .env.example .env
npm start
```

Depois abra: http://localhost:3000

Para desenvolvimento com reinício automático (precisa do nodemon instalado):

```bash
npm run dev
```

## Estrutura

```
server.js
views/
  index.ejs
  organizations.ejs
  projects.ejs
  categories.ejs
  404.ejs
  partials/
    header.ejs
    footer.ejs
public/
  css/style.css
  js/main.js
  images/org1.svg, org2.svg, org3.svg
```

## Rotas

| Rota            | Página          |
|------------------|-----------------|
| `/`              | Home            |
| `/organizations` | Organizations   |
| `/projects`      | Service Projects|
| `/categories`    | Categories      |

## Publicando no GitHub

```bash
git init
git add .
git commit -m "Initial site creation"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

O `.gitignore` já garante que `node_modules/` e `.env` **não** vão para o repositório.

## Deploy no Render.com

1. Crie um novo **Web Service** no Render e conecte seu repositório do GitHub.
2. Build Command: `npm install`
3. Start Command: `npm start`
4. Em **Environment Variables**, adicione `PORT` (o Render define isso automaticamente, mas pode deixar como está — o código já usa `process.env.PORT`).
5. Deploy e teste a URL pública gerada.
