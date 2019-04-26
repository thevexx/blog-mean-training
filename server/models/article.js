const mongoose = require('mongoose');

const article = new mongoose.Schema({
  author: { type: mongoose.Types.ObjectId, ref: 'author' },
  title: String,
  topic: String,
  content: String,
  date: Date.now()
})

module.exports = mongoose.model('article', article);
