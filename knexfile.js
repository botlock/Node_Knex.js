module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3' // Substitua pelo caminho onde você deseja armazenar o arquivo do banco de dados SQLite
    },
    useNullAsDefault: true, // Isso é necessário para evitar um aviso
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
