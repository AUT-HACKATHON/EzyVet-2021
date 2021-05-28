const express = require('express');

const { listVets, listVetProfiles } = require('../controllers/vetController');

const router = express.Router();

router.route('/list').get(listVets);

router.route('/listProfiles/:id').get(listVetProfiles);

module.exports = router;
