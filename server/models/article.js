const mongoose = require('mongoose');

const article = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'author' },
  title: String,
  topic: String,
  content: String,
  date: { type: String, default: Date.now() },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
  image: '',
})

module.exports = mongoose.model('article', article);
