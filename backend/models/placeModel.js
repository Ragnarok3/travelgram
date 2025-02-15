const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  activities: { type: [String], required: true },
  views: { type: Number, default: 0 },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;