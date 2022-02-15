const axios = require('axios');
const http = require('http');
const app = require('../../src/app');
const { connectDb } = require('../../src/db');
const config = require('../../src/config');

test('route link', async () => {
  await connectDb();

  const httpServer = http.createServer(app);

  httpServer.on('listening', () => console.log(`http://${config.HOST}:${config.PORT}/`));

  httpServer.listen(config.PORT, config.HOST);

  const linkPost = await axios.post('http://127.0.0.1:4040/api/link', {
    link: 'https://www.google.com.ua/?hl=ru',
  });

  expect(linkPost.data.newLink).toBeTruthy();

  const linkGet = await axios.get(linkPost.data.newLink);

  expect(linkGet).toBeTruthy();
});
