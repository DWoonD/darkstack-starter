# SCAFFOLDING

## Objetivo

Este documento define a estrutura oficial aprovada do projeto e serve como fonte da verdade para organização de arquivos, responsabilidades por camada e evolução do scaffold.

## Estrutura oficial do projeto

```txt
src/
  app/
    api/
      health/
        route.ts
    (public)/
    (auth)/
    (dashboard)/
      dashboard/
        page.tsx
  components/
    ui/
    forms/
    layout/
  modules/
    .gitkeep
  server/
    db/
      prisma.ts
  lib/
    env/
    validations/
    utils/
  test/
    setup/
    factories/
    helpers/
  types/
    api/
    common/
    domain/
    dto/

prisma/
docs/
.github/
  workflows/
cypress/
  e2e/
  fixtures/
  support/
```

## Regras de organização

### app/

- contém páginas, layouts e rotas HTTP do Next.js
- `api/` é apenas para route handlers
- grupos entre parênteses são usados para organização sem afetar a URL

### modules/

- contém código por módulo de domínio quando o projeto derivado evoluir
- o template base não inclui módulo de negócio pré-criado
- cada módulo deve agrupar `schemas`, `services`, `repositories` e `dto` quando fizer sentido

### server/

- contém infraestrutura de backend compartilhada
- `db/` centraliza acesso base ao Prisma

### lib/

- utilidades, validação, env, helpers técnicos
- não deve concentrar regra de negócio de domínio

### types/

- tipos compartilhados entre módulos
- preferir tipos próximos ao domínio quando forem específicos

## Regras obrigatórias

- não criar regra de negócio dentro de `app/api`
- não usar Prisma diretamente em `route.ts`
- não criar pastas paralelas de `services` fora do padrão de módulo
- não duplicar schemas e DTOs sem necessidade
- sempre manter nomes consistentes com o módulo

## Convenções de nome

- arquivos utilitários: `kebab-case.ts`
- componentes React: `PascalCase.tsx`
- DTOs: `nome-recurso.dto.ts`
- schemas: `nome-recurso.schema.ts`
- repositories: `nome-recurso.repository.ts`
- services: `nome-recurso.service.ts`

## Convenção de tipos

- preferir `type` para composições e unions
- usar `interface` apenas quando houver motivo claro
- tipos de domínio devem evitar depender diretamente do retorno cru do Prisma

## Regras de evolução

Qualquer mudança estrutural relevante deve atualizar:

- este arquivo
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`, se for decisão arquitetural importante
