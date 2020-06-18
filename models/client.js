const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarURL: String,
  activity: [activitySchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Client', clientSchema);