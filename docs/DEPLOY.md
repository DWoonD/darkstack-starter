# DEPLOY

## Objetivo

Definir a estratégia de deploy do template.

## Estratégia adotada

- build com Dockerfile explícito
- deploy em VPS usando EasyPanel
- CI no GitHub Actions
- CD acionado a partir da branch principal aprovada

## Fluxo recomendado

1. desenvolvimento local
2. validação por CI
3. merge em branch principal
4. build da imagem
5. deploy no EasyPanel
6. validação por healthcheck

## Requisitos mínimos para deploy

- variáveis de ambiente configuradas
- banco acessível
- build passando
- healthcheck disponível

## Docker

O template deve fornecer:

- Dockerfile funcional
- `.dockerignore`
- processo de build previsível

## EasyPanel

O projeto deve estar preparado para:

- receber env vars no painel
- construir a partir do repositório
- subir a aplicação usando Dockerfile
- validar disponibilidade via healthcheck

## Healthcheck

A aplicação deve expor uma rota simples de healthcheck, por padrão:

- `/api/health`

## Regras obrigatórias

- não fazer deploy sem CI verde
- não depender de configuração manual escondida
- manter Dockerfile como parte da base oficial do projeto
