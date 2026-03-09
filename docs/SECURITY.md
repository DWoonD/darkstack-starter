# SECURITY

## Objetivo

Definir os princípios mínimos de segurança da base do projeto.

## Regras mínimas

- validar toda entrada externa
- usar Zod para validação
- não usar `any`
- não expor segredos no código
- não logar senhas, tokens ou dados sensíveis
- não acessar banco diretamente na camada HTTP
- não devolver erros sensíveis ao cliente

## Variáveis de ambiente

- segredos devem existir apenas em env vars
- `.env` nunca deve ser versionado
- `.env.example` deve conter apenas placeholders

## Banco

- acesso ao banco deve passar por camada apropriada
- queries devem ficar encapsuladas em repositories ou camada equivalente
- mudanças estruturais devem passar por migration

## Rotas

- devem validar entrada
- devem evitar lógica de negócio excessiva
- devem retornar respostas seguras e previsíveis

## Auth

Autenticação e autorização não fazem parte da base pronta do template, mas qualquer projeto derivado deve:

- proteger rotas privadas
- validar sessão/token
- definir estratégia explícita de autorização

## Logs

- logs devem ser úteis, mas seguros
- evitar dados pessoais ou segredos em logs
- falhas inesperadas devem ser registradas sem vazar detalhes ao cliente

## Regras futuras recomendadas

- auditoria de ações críticas
- rate limit em endpoints sensíveis
- proteção contra abuso
- trilha de alterações
- headers de segurança
