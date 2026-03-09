# DECISIONS

## ADR-001 — Template repo antes de `npm create`

### Decisão

O primeiro passo será um template repo, não um scaffolder via `npm create`.

### Motivo

Validar a base real do projeto antes de transformar isso em ferramenta de geração.

---

## ADR-002 — Usar Next.js com App Router

### Decisão

O template usa Next.js com App Router.

### Motivo

Base moderna, full stack e alinhada ao ecossistema atual.

---

## ADR-003 — Usar PostgreSQL com Prisma

### Decisão

O banco padrão é PostgreSQL, acessado via Prisma.

### Motivo

Boa combinação entre produtividade, tipagem e previsibilidade.

### Observação

O template é agnóstico de provedor. Supabase é opcional, não obrigatório.

---

## ADR-004 — TypeScript estrito

### Decisão

O projeto deve usar TypeScript em modo estrito.

### Motivo

Reduzir bugs silenciosos e aumentar consistência do código.

---

## ADR-005 — Proibir `any`

### Decisão

O uso de `any` é proibido no template.

### Motivo

Forçar contratos explícitos e melhorar a qualidade da base.

---

## ADR-006 — Zod como biblioteca padrão de validação

### Decisão

Zod será usado para validação de entradas e env vars.

### Motivo

Validação explícita, integração forte com TypeScript e boa ergonomia.

---

## ADR-007 — Padrão route -> schema -> service -> repository -> dto

### Decisão

Esse será o padrão arquitetural principal para backend.

### Motivo

Separar responsabilidades e evitar acoplamento entre HTTP, regra de negócio e banco.

---

## ADR-008 — Vitest para unitários

### Decisão

Vitest será o runner padrão para testes unitários.

### Motivo

Boa DX e boa integração com setup moderno.

---

## ADR-009 — Cypress para E2E

### Decisão

Cypress será a ferramenta padrão de E2E.

### Motivo

Boa experiência visual e boa capacidade de depuração.

---

## ADR-010 — Coverage mínima de 76%

### Decisão

O projeto deve exigir coverage mínima global de 76% em unit tests.

### Motivo

Garantir um piso mínimo de qualidade.

---

## ADR-011 — Docker + EasyPanel

### Decisão

O template deve estar pronto para deploy com Docker em VPS via EasyPanel.

### Motivo

Fluxo de produção simples, previsível e alinhado ao objetivo do template.

---

## ADR-012 — GitHub Actions como CI mínima

### Decisão

A pipeline mínima do template será executada com GitHub Actions.

### Motivo

Padronizar validações antes do deploy.

---

## ADR-013 — Sem GraphQL na base inicial

### Decisão

GraphQL não entra no template base.

### Motivo

Adicionar complexidade cedo demais sem necessidade comprovada.

---

## ADR-014 — Sem domínio de negócio pré-definido

### Decisão

O template não deve embutir exemplos de domínio específicos.

### Motivo

Manter a base reutilizável para qualquer projeto.
