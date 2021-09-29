//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const controller3 = require('../controllers/ta03');

router.get('/', controller3.getAllProds);

router.get('/search', controller3.getSearch);

module.exports = router;
