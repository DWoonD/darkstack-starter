# MVP SCOPE

## Objetivo do MVP do template

Entregar a base mínima reutilizável para iniciar projetos com:

- estrutura organizada
- tipagem rígida
- testes
- CI
- deploy previsível

## Entregáveis obrigatórios

### Base

- Next.js com App Router
- TypeScript em modo estrito
- Tailwind e ESLint configurados
- Estrutura oficial de pastas (scaffold) criada
- Documentação base em `/docs`

### Banco e validação

- Prisma configurado para PostgreSQL
- validação com Zod (incluindo env vars)

### Testes

- Vitest configurado
- Cypress configurado
- cobertura mínima global configurada (76% / branches 70%)

### CI

- GitHub Actions com pipeline mínima:
  - lint
  - typecheck
  - unit tests + coverage
  - build

### Deploy

- Dockerfile funcional
- `.dockerignore`
- healthcheck HTTP básico
- prontidão para deploy em EasyPanel

## Critérios de aceitação

O MVP do template é considerado pronto quando:

- `lint` passa
- `typecheck` passa
- `test` passa
- `test:coverage` respeita threshold
- `build` passa
- o projeto sobe localmente
- o container Docker builda
- a base está documentada e coerente

## Fora do escopo do MVP

- domínio de negócio
- autenticação/autorizações completas
- billing/assinaturas
- multi-tenancy
- storage/realtime como dependência obrigatória
- GraphQL
- automações avançadas de deploy via Actions (CD no GitHub)
- scaffolder via `npm create` (fica para fase 2)
