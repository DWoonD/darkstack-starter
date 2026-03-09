# API CONTRACTS

## Objetivo

Padronizar como endpoints HTTP são desenhados, validados, tipados e respondidos em projetos derivados deste template.

## Estilo adotado

- Next.js Route Handlers em `src/app/api/**/route.ts`
- padrão REST como base inicial
- validação com Zod
- tipagem explícita
- respostas consistentes

## Princípios

1. Dados externos são `unknown` até serem validados.
2. Toda entrada deve ser validada (body, params, query).
3. Rotas não contêm regra de negócio.
4. Rotas não acessam banco diretamente.
5. Contratos públicos não devem expor retorno cru do banco.

## Estrutura recomendada por rota

1. extrair input (body, params, query)
2. validar input com schema Zod
3. chamar service (regra de negócio)
4. retornar response com DTO de saída
5. tratar erros de forma previsível e segura

## Validação

- body: validar via schema Zod
- query params: validar via schema Zod quando usados para lógica
- path params: validar via schema Zod quando usados para lógica
- dados não validados: manter como `unknown`

## Padrão de response

- respostas devem ser JSON
- incluir apenas dados necessários para o cliente
- campos internos não devem ser expostos por padrão

### Sucesso

- 200 (OK): leitura bem sucedida
- 201 (Created): criação bem sucedida
- 204 (No Content): ação bem sucedida sem payload

### Erros

- 400 (Bad Request): erro de validação
- 401 (Unauthorized): não autenticado
- 403 (Forbidden): sem permissão
- 404 (Not Found): recurso inexistente
- 409 (Conflict): conflito (ex.: constraint, estado inválido)
- 500 (Internal Server Error): erro inesperado

## Padrão de erro (recomendado)

Erros devem ser previsíveis e não vazar detalhes sensíveis.

Campos recomendados:

- `message`: string curta
- `code`: string interna (opcional)
- `issues`: detalhes estruturados (opcional, para validação)

## Paginação (quando aplicável)

Formato recomendado:

- `items`: array
- `page`: number
- `limit`: number
- `total`: number

## DTOs e contratos

- DTOs devem ser usados para contratos importantes (entrada/saída)
- não usar `any`
- preferir tipos inferidos a partir de schemas (quando fizer sentido)
- não acoplar contrato público ao retorno direto do Prisma

## Regras obrigatórias

- não acessar banco diretamente na rota
- não colocar regra de negócio na rota
- não aceitar payload sem validação
- não introduzir `any`
- manter consistência de status codes
