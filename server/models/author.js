const mongoose = require('mongoose');

const author = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  age: String,
  address: String,
  city: String,
  country: String,
  postalCode: String,
  about: String,
  profileImg: String,
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'article' }]
})

module.exports = mongoose.model('author', author);
