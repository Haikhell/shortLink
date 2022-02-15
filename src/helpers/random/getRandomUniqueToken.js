const { dbManager } = require('../../db');
const getRandomToken = require('./getRandomToken');
const config = require('../../config');
const dbNames = require('../../db/dbNames');

const count = 5;

async function getRandomUniqueToken() {
  const token = getRandomToken(count);

  const connect = dbManager.db(config.MONGO_DB_NAME).collection(dbNames.links);

  const res = await connect.findOne({ newUrl: token });

  if (res) {
    return this.getRandomUniqueToken();
  }

  return token;
}

module.exports = getRandomUniqueToken;
