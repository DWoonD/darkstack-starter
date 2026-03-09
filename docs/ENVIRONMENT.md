# ENVIRONMENT

## Objetivo

Definir a política de variáveis de ambiente do template.

## Ambientes previstos

- local
- test
- production

## Regras gerais

- nunca commitar `.env`
- sempre manter `.env.example` atualizado
- segredos devem existir apenas em variáveis de ambiente
- valores obrigatórios devem ser validados na inicialização

## Arquivos esperados

- `.env` para desenvolvimento local
- `.env.example` como referência versionada

## Validação

- env vars devem ser validadas com Zod
- ausência de variável obrigatória deve falhar cedo

## Convenções

- nomes em uppercase
- nomes claros e consistentes
- separar URLs, secrets e flags de ambiente

## Variáveis mínimas esperadas

- `NODE_ENV`
- `DATABASE_URL`

## Regra de segurança

- nunca expor segredos em logs
- nunca hardcodar segredo no código
