const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number,
  image: String
})

module.exports = mongoose.model('Game', GameSchema)
