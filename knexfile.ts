export default {
  client: 'sqlite3',
  connection: {
    filename: './db/app.db'
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
