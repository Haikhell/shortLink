require('dotenv').config({ path: `${__dirname}/.env` });

const ENV = process.env;

module.exports = Object.freeze({
  HOST: ENV.HOST || '127.0.0.1',
  PORT: ENV.PORT ? +ENV.PORT : 4040,

  DOMEN: ENV.DOMEN || 'http://localhost',

  MONGO_DB_URL: ENV.MONGO_DB_URL || 'mongodb://localhost:27017',
  MONGO_DB_NAME: ENV.MONGO_DB_NAME || 'testovoe',
});
