const express = require('express');

const { listVets } = require('../controllers/VetController');

const router = express.Router();

router.route('/list').get(listVets);

module.exports = router;
