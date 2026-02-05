import 'dotenv/config'

export default {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_URL
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
