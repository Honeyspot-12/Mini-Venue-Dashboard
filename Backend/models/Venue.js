const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  price: Number,
  ownerId: String,
  blockedDates: [String],
});

module.exports = mongoose.model('Venue', venueSchema);
