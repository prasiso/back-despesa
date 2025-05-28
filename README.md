# Expense API - Backend

API simples para gerenciar despesas

## Tecnologias

- Node.js
- NestJs
- PostgreSQL
- Prisma

## Pré-requisitos

- Node.js instalado (versão 23.8.0)
- Banco de dados PostagreSQL
- pnpm
- npx

## Instale as dependências
```bash
  pnpm install
```

## Configure ambiente de variavel

- DATABASE_URL
- JWT_KEY

## Migration (opcional)
Caso seja primeira vez rodando um banco:
```bash
  pnpm run init:sgbd
```
Caso queira popular o banco, use:
```bash
  pnpm run seed
```

## Executando aplicação
Para rodar em modo desenvolvimento (com hot reload):
```bash
  pnpm run start:dev
```
Para rodar em modo produção:
```bash
  pnpm run build && pnpm run start
```
Acesse em:
 - `http://localhost:3000`
