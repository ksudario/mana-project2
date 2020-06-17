const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarURL: String,
  events: [eventSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Client', clientSchema);