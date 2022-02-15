const express = require('express');

const router = express.Router();

const link = require('./link');

router.use('/link', link);

module.exports = router;
