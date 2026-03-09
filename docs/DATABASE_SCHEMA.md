# DATABASE SCHEMA

## Objetivo

Definir a política de schema do banco para o template base sem acoplamento a domínio de negócio.

## Banco

- PostgreSQL
- acesso via Prisma
- conexão obrigatória por `DATABASE_URL`

## Estado do template base

- o template base não inclui models de domínio
- o `prisma/schema.prisma` contém apenas `generator` e `datasource`
- projetos derivados devem adicionar models conforme o domínio real

## Convenções obrigatórias para projetos derivados

- tabelas representadas por models Prisma
- timestamps obrigatórios nas entidades principais (`createdAt`, `updatedAt`)
- IDs string com `cuid()` por padrão inicial
- nomes de campos em inglês
- enums apenas para estados fechados

## Regras de evolução

Ao adicionar ou alterar models no projeto derivado:

1. alterar `prisma/schema.prisma`
2. gerar migration versionada
3. executar migration localmente
4. atualizar este documento quando houver mudança estrutural relevante no template

## Política de exclusão (guideline)

- preferir soft delete (status/flag) em entidades de negócio quando fizer sentido
- evitar delete físico em dados críticos sem requisito explícito
