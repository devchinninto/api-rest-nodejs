# Transactions API

REST API for managing financial transactions, built during the [Rocketseat](https://rocketseat.com.br) Node.js course.

## Tech Stack

- **Fastify** - Web framework
- **Knex** - SQL query builder
- **Zod** - Schema validation
- **Vitest** - Testing
- **TypeScript**

## Features

- Create transactions (credit/debit)
- List all transactions
- Get transaction by ID
- Get account summary
- Session-based isolation via cookies

## Setup

```bash
pnpm install
cp .env.example .env
pnpm run knex migrate:latest
pnpm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests |
| `pnpm lint` | Lint and fix |

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/transactions` | Create transaction |
| GET | `/transactions` | List all transactions |
| GET | `/transactions/:id` | Get single transaction |
| GET | `/transactions/summary` | Get balance summary |
