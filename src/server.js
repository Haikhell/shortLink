const http = require('http');
const app = require('./app');
const { connectDb } = require('./db');
const config = require('./config');

(async () => {
  await connectDb();

  const httpServer = http.createServer(app);

  httpServer.on('listening', () => console.log(`http://${config.HOST}:${config.PORT}/`));

  httpServer.listen(config.PORT, config.HOST);
})();
