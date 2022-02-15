const client = require('./client');

async function connectDb() {
  const res = await client.connect();

  if (res) console.log('mongodb ~gl~connected');
}

module.exports = { connectDb, dbManager: client };
