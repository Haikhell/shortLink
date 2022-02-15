const mongodb = require('mongodb');
const config = require('../config/index');

module.exports = new mongodb.MongoClient(config.MONGO_DB_URL, {
  useNewUrlParser: true,
  retryWrites: false,
  useUnifiedTopology: true,
  w: 'majority',
});
