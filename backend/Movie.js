const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  location: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, required: true, default: 1 },
  status: {type: String, enum: ['available', 'checked out', 'reserved'], default: 'available'}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
