const mongoose = require('mongoose');

const comment = new mongoose.Schema({
  comment: String,
  like: Boolean,
  date: Date.now()
})

module.exports = mongoose.model('comment', comment);
