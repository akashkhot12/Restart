const express = require('express');
const router = express.Router();
const registrations = require('./controller')


router.post('/',registrations)

module.exports= router;