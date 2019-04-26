const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name : String,
    lastname : String,
    email: {type: String, required: true, unique: true},
    password: String,
    author: {type: mongoose.Types.ObjectId, ref:'author'},
    role: {type: String, enum:['admin','author','reader']}
})

module.exports = mongoose.model('user', user);
