const mongoose = require('mongoose');

const author = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'user' },
  age: String,
  address: String,
  city: String,
  country: String,
  postalCode: String,
  about: String,
  articles: [{ type: mongoose.Types.ObjectId, ref: 'article' }]
})

module.exports = mongoose.model('author', author);
