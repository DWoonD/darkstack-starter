# Darkstack Starter

Template agnóstico para aplicações internas com Next.js full stack.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- ESLint (anti-`any` explícito)
- Zod (validação de env/inputs)
- Prisma + PostgreSQL (`DATABASE_URL`)
- Vitest (unit)
- Cypress (e2e)
- Docker
- GitHub Actions (CI mínima)

## Requisitos

- Node.js 22+
- npm 10+
- PostgreSQL acessível via `DATABASE_URL`

## Configuração local

1. Instalar dependências:

```bash
npm ci
```

2. Criar `.env` a partir de `.env.example`.

3. Gerar client Prisma:

```bash
npm run db:generate
```

4. (Quando houver models/migrations) rodar migration:

```bash
npm run db:migrate
```

5. Subir app:

```bash
npm run dev
```

## Scripts principais

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run test:coverage`
- `npm run build`
- `npm run e2e`
- `npm run e2e:open`
- `npm run db:generate`
- `npm run db:migrate`
- `npm run db:deploy`

## Healthcheck

- `GET /api/health`

## Arquitetura

Padrão de backend esperado por módulo:

`route -> schema -> service -> repository -> dto`

Sem domínio de negócio pré-definido no template base.

## E2E (Cypress)

`npm run e2e` assume app disponível em `http://localhost:3000`.

Execução local recomendada em dois terminais:

Terminal 1:

```bash
npm run dev
```

Terminal 2:

```bash
npm run e2e
```

## Deploy

- Dockerfile e `.dockerignore` incluídos
- alvo de deploy: VPS/EasyPanel
- validar `/api/health` no pós-deploy
