
const express = require('express');
const router = express.Router();

const ta05Controller = require('../controllers/ta05');

router.get('/', ta05Controller.getIndex);

router.post('/change-style',ta05Controller.postChangeStyle);

router.post('/counter',ta05Controller.postCounter);

router.post('/reset', ta05Controller.postReset);

module.exports = router;
