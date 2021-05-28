const express = require('express');

const { listVets, listVetProfiles } = require('../controllers/VetController');

const router = express.Router();

router.route('/list').get(listVets);

router.route('/listProfiles/:id').get(listVetProfiles);

module.exports = router;
