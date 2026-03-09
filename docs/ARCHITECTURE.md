# ARCHITECTURE

## Objetivo

Este repositório é um template opinado para criação de sistemas internos com foco em:

- baixo custo inicial
- arquitetura organizada
- tipagem rígida
- testes desde o início
- deploy previsível
- compatibilidade com uso de IA como pair programming

## Stack principal

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Zod
- Vitest
- Cypress
- Docker
- GitHub Actions

## Princípios arquiteturais

1. O projeto deve priorizar clareza e consistência.
2. O projeto deve evitar acoplamento desnecessário entre camada HTTP, regra de negócio e banco.
3. Toda fronteira de entrada de dados deve ser validada.
4. Toda camada crítica deve ser tipada explicitamente.
5. O scaffold não deve mudar sem atualização da documentação.

## Padrão de backend

A aplicação segue o padrão:

route -> schema -> service -> repository -> dto

### route

Responsável por:

- receber request
- chamar schema de validação
- chamar service
- retornar response HTTP

### schema

Responsável por:

- validar entrada com Zod
- inferir tipos de entrada quando aplicável

### service

Responsável por:

- aplicar regra de negócio
- orquestrar chamadas a repositories
- retornar DTOs de saída

### repository

Responsável por:

- acessar banco de dados
- encapsular queries do Prisma

### dto

Responsável por:

- definir contratos de entrada e saída entre camadas
- evitar exposição acidental de campos internos

## Padrão de frontend

- páginas em `src/app`
- componentes reutilizáveis em `src/components`
- módulos de domínio em `src/modules`
- utilidades em `src/lib`
- tipos compartilhados em `src/types`

## Validação e tipagem

- TypeScript em modo estrito
- uso de `any` proibido
- preferir `unknown` em dados externos antes da validação
- Zod como fonte de verdade para entradas
- DTOs explícitos para contratos importantes

## Testes

### Unitários

- Vitest

### E2E

- Cypress

### Meta de coverage

- lines: 76
- functions: 76
- statements: 76
- branches: 70

## CI

A pipeline mínima deve executar:

- lint
- typecheck
- testes unitários com coverage
- build

## Deploy

- aplicação containerizada com Docker
- deploy em VPS usando EasyPanel
- healthcheck via rota `/api/health`

## Regras imutáveis

- não usar `any`
- não acessar banco diretamente em rota ou componente
- não alterar scaffold sem atualizar `docs/SCAFFOLDING.md`
- não alterar estrutura de dados sem atualizar `docs/DATABASE_SCHEMA.md`
