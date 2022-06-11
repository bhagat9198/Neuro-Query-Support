const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: String,
  updatedAt: String,
  verfied: String,
  queries: Array,
  profileImg: Object,
  chats: Array,
  specialties: String,
  lastActiveAt: Date,
  isActive: Boolean,
});

module.exports = mongoose.model('Mentor', MentorSchema);