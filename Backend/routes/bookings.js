const express = require('express');
const router = express.Router();
const { bookVenue } = require('../controllers/bookingController');

router.post('/', bookVenue);

module.exports = router;
