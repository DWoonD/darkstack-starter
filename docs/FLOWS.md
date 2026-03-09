# FLOWS

## Objetivo

Descrever fluxos operacionais/técnicos do template e como um projeto derivado deve evoluir com consistência.

> Este documento não descreve fluxos de domínio de negócio (ex.: cadastros, contratos, etc.).

---

## Fluxo 1 — Inicialização de um novo projeto

1. Criar novo repositório a partir do template (clone/template)
2. Instalar dependências
3. Configurar `.env` a partir do `.env.example`
4. Configurar conexão com banco (dev)
5. Rodar migrations e gerar Prisma Client
6. Rodar `lint`, `typecheck`, `test` e `build`
7. Subir para o repositório definitivo (GitHub)

---

## Fluxo 2 — Desenvolvimento local

1. Rodar banco em modo dev (local ou remoto de dev)
2. Rodar migrations necessárias
3. Executar aplicação (`dev`)
4. Implementar mudanças respeitando:
   - `docs/ARCHITECTURE.md`
   - `docs/SCAFFOLDING.md`
   - `docs/API_CONTRACTS.md`
5. Antes de concluir:
   - rodar lint
   - rodar typecheck
   - rodar testes
   - garantir cobertura mínima

---

## Fluxo 3 — Adição de um novo módulo (domínio/recurso)

1. Definir o módulo (nome e responsabilidade)
2. Criar `src/modules/<modulo>` com subpastas conforme necessidade:
   - `schemas/`
   - `services/`
   - `repositories/`
   - `dto/`
3. Implementar rotas em `src/app/api` se houver API
4. Implementar páginas em `src/app` se houver UI
5. Adicionar testes unitários da lógica do módulo
6. Adicionar E2E se o fluxo justificar
7. Atualizar documentação caso:
   - a estrutura oficial mude
   - decisões arquiteturais sejam tomadas

---

## Fluxo 4 — Mudança no schema do banco

1. Alterar `prisma/schema.prisma`
2. Revisar impacto nas regras/contratos
3. Gerar migration versionada
4. Rodar migration localmente
5. Atualizar `docs/DATABASE_SCHEMA.md` quando houver mudança estrutural relevante
6. Rodar testes e build para garantir que nada quebrou

---

## Fluxo 5 — Pull Request / revisão

1. Garantir que o escopo está claro
2. Validar que mudanças respeitam as regras do template
3. Rodar localmente:
   - lint
   - typecheck
   - testes com coverage
   - build
4. Abrir PR
5. Esperar CI verde
6. Realizar merge na branch principal

---

## Fluxo 6 — CI

1. CI roda em pushes e PRs
2. Executa:
   - install
   - lint
   - typecheck
   - unit tests + coverage
   - build
3. CI falha se qualquer etapa falhar

---

## Fluxo 7 — Deploy (VPS + EasyPanel)

1. Merge na branch principal com CI verde
2. EasyPanel detecta mudança e executa deploy
3. Build via Dockerfile
4. Injeção de env vars no ambiente de produção
5. Aplicação sobe
6. Healthcheck valida disponibilidade

---

## Fluxo 8 — Evolução do template

1. Toda mudança estrutural no template deve:
   - atualizar `docs/SCAFFOLDING.md`
   - atualizar `docs/ARCHITECTURE.md` se necessário
   - registrar em `docs/DECISIONS.md` se for decisão relevante
2. Não incluir domínio de negócio específico no template base
