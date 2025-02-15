const Place = require('../models/placeModel');

// Get all places with pagination
exports.getAllPlaces = async (req, res, next) => {
  try {
    const start = parseInt(req.query.start) || 0;
    const limit = parseInt(req.query.limit) || 20;
    const places = await Place.find().skip(start).limit(limit);
    res.json(places);
  } catch (error) {
    next(error);
  }
};

// Get place by ID
exports.getPlaceById = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.json(place);
  } catch (error) {
    next(error);
  }
};

// Create a new place
exports.createPlace = async (req, res, next) => {
  try {
    const { name, image, description, activities, views } = req.body;
    const newPlace = new Place({ name, image, description, activities, views });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    next(error);
  }
};

// Update a place
exports.updatePlace = async (req, res, next) => {
  try {
    const { name, image, description, activities, views } = req.body;
    const place = await Place.findByIdAndUpdate(
      req.params.id,
      { name, image, description, activities, views },
      { new: true }
    );
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.json(place);
  } catch (error) {
    next(error);
  }
};

// Delete a place
exports.deletePlace = async (req, res, next) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.json({ message: 'Place deleted' });
  } catch (error) {
    next(error);
  }
};