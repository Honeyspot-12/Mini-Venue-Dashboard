const Booking = require('../models/Booking');
const Venue = require('../models/Venue');

// POST new booking
exports.bookVenue = async (req, res) => {
  const { venueId, userId, date } = req.body;
  try {
    const venue = await Venue.findById(venueId);
    if (venue.blockedDates.includes(date)) {
      return res.status(400).json({ error: 'Date not available' });
    }

    // Save booking
    const booking = new Booking({ venueId, userId, date });
    await booking.save();

    // Block date
    venue.blockedDates.push(date);
    await venue.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
