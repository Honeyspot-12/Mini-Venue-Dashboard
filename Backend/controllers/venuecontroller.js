const Venue = require('../models/Venue');

// GET all venues
exports.getVenues = async (req, res) => {
  const venues = await Venue.find();
  res.json(venues);
};

// POST new venue
exports.addVenue = async (req, res) => {
  try {
    const venue = new Venue(req.body);
    await venue.save();
    res.status(201).json(venue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PATCH block/unblock dates
exports.updateAvailability = async (req, res) => {
  try {
    const { dates } = req.body; // array of dates to block
    const venue = await Venue.findById(req.params.id);
    venue.blockedDates = [...new Set([...venue.blockedDates, ...dates])];
    await venue.save();
    res.json(venue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
