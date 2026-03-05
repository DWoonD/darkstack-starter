# CLAUDE.md

Use os arquivos em /docs como fonte da verdade do projeto.

## Regras obrigatórias

- Não introduzir `any`
- Preferir `unknown` quando o dado ainda não foi validado
- Validar entradas com Zod
- Seguir o padrão route -> schema -> service -> repository -> dto
- Não acessar banco diretamente em componentes React
- Não alterar scaffold sem atualizar docs/SCAFFOLDING.md
- Não alterar schema sem atualizar docs/DATABASE_SCHEMA.md
- Não ler arquivos .env
- Antes de concluir tarefas, rodar lint, typecheck e testes relevantes
