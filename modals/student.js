const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: String,
  updatedAt: String,
  verfied: String,
  queries: Array,
  profileImg: Object,
  chats: Array,
  lastActiveAt: Date,
  isActive: Boolean,
});

module.exports = mongoose.model('UserTemp', StudentSchema);