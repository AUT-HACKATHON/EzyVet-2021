const fs = require('fs');

// Load json files as object
const profiles = JSON.parse(fs.readFileSync('backend/data/profiles.json', 'utf8'));
const vets = JSON.parse(fs.readFileSync('backend/data/vets.json', 'utf8'));

module.exports = { profiles, vets };
