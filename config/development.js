module.exports={



  dbProperties: {
    database: process.env.POSTGRES_DATABASE || 'postgres',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: process.env.DATABASE_DIALECT || 'postgres',
    port: process.env.DATABASE_PORT || 5432,
    dialectOptions: {
      statement_timeout: 5000
    }
  },
  aios: {
    host: process.env.SERVICE_HOST || 'http://localhost',
    port: process.env.SERVICE_PORT || 4001
  },
}