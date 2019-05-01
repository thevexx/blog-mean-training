const mongoose = require('mongoose');

const comment = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  comment: String,
  date: {type:String, default: Date.now()}
})

module.exports = mongoose.model('comment', comment);
