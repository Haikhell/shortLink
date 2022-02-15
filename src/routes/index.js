const express = require('express');

const api = require('./api');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs');
});
router.use('/api', api);

module.exports = router;
