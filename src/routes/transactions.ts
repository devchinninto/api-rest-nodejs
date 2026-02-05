import { FastifyInstance } from 'fastify'
import { knex } from '../knex'
import crypto from 'node:crypto'

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transação de teste',
        amount: 1000
      })
      .returning('*')

    return transactions
  })
}
