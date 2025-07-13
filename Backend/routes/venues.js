const express = require('express');
const router = express.Router();
const {
  getVenues,
  addVenue,
  updateAvailability
} = require('../controllers/venueController');

router.get('/', getVenues);
router.post('/', addVenue);
router.patch('/:id/availability', updateAvailability);

module.exports = router;
