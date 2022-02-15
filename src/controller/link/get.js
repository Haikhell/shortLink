const { dbManager } = require('../../db');
const dbNames = require('../../db/dbNames');
const config = require('../../config');

module.exports = async (req, res) => {
  const { link } = req.params;

  const connect = dbManager.db(config.MONGO_DB_NAME).collection(dbNames.links);

  const model = await connect.findOne({
    newUrl: link,
  });

  res.redirect(model.oldUrl);
};
