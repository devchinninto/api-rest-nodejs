import { env } from './src/env/index'

export default {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL
  },
  useNullAsDefault: true,
  migrations: {
    extensions: 'ts',
    directory: './db/migrations'
  },
  seeds: {
    extensions: 'ts',
    directory: './db/seeds'
  }
}
