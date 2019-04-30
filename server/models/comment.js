const mongoose = require('mongoose');

const comment = new mongoose.Schema({
  comment: String,
  like: Boolean,
  date:  { type: String, default: Date.now() }
})

module.exports = mongoose.model('comment', comment);
