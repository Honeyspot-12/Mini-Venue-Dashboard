const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venue',
  },
  userId: String,
  date: String,
  status: {
    type: String,
    default: 'confirmed',
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
