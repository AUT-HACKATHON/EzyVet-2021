const fs = require('fs');
const Profile = require('../models/Profile.js');
const Vet = require('../models/Vets.js');

const profiles = JSON.parse(fs.readFileSync('profiles.json', 'utf8'));
const vets = JSON.parse(fs.readFileSync('vets.json', 'utf8'));

console.log(profiles);
console.log(vets);
