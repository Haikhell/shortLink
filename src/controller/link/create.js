const { getRandomUniqueToken } = require('../../helpers/random/index');
const { dbManager } = require('../../db');
const dbNames = require('../../db/dbNames');
const config = require('../../config');

module.exports = async (req, res) => {
  const { link } = req.body;

  const token = await getRandomUniqueToken();

  const connect = dbManager.db(config.MONGO_DB_NAME).collection(dbNames.links);

  await connect.insertOne({
    newUrl: token,
    oldUrl: link,
  });

  res.send({
    newLink: `${config.DOMEN}:${config.PORT}/api/link/${token}`,
  });
};
