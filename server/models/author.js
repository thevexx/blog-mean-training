const mongoose = require('mongoose');

const author = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  address: String,
  city: String,
  country: String,
  postalCode: Number,
  about: String,
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'article' }]
})

module.exports = mongoose.model('author', author);
