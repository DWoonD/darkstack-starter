# PRODUCT

## Nome provisório

Template Repo — Next.js Full Stack Starter

## O que é

Um repositório modelo para iniciar projetos web full stack (microsaas e sistemas internos) com uma base consistente e pronta para produção.

## Problema que resolve

Ao iniciar um projeto do zero, é comum perder tempo e consistência com:

- setup de Next + TS + lint
- banco + migrations
- validação de inputs
- testes e coverage
- CI
- Docker e deploy
- organização de pastas e arquitetura

Este template entrega um padrão único para reduzir retrabalho e evitar deriva arquitetural.

## Objetivo

Ser a “base oficial” de novos projetos, garantindo:

- velocidade de início
- previsibilidade
- qualidade mínima
- tipagem forte
- deploy confiável

## Público-alvo

- projetos solo
- equipes pequenas
- produtos internos
- microsaas em estágio inicial

## Entregas do template

- Next.js App Router + TypeScript estrito
- Prisma + PostgreSQL (agnóstico de provedor)
- validação padrão com Zod
- Vitest (unit) + Cypress (e2e)
- coverage gate configurado
- CI mínima com GitHub Actions
- Dockerfile para deploy em EasyPanel
- documentação base e guardrails

## Não objetivos (não entra na base)

- domínio de negócio
- auth completa pronta
- multi-tenancy pronta
- billing pronto
- GraphQL
- Supabase obrigatório
- gerador `npm create` (fase 2)

## Princípios

- base simples e sólida
- crescer por módulos
- contratos claros entre camadas
- regras explícitas para humans + IA
