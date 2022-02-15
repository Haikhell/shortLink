const express = require('express');

const controller = require('../../controller/link');

const router = express.Router();

router.post('/', controller.create);
router.get('/:link', controller.get);

module.exports = router;
