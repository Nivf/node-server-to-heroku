/* Mongoose ORM */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema
({
    email: { type: String, unique: true},
    password: String,
    tasks: [String]
});

module.exports = mongoose.model('users',userSchema);