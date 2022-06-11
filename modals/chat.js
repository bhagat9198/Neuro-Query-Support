const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  student_id: {
    type: String,
  },
  student_name: String,
  tutor_id: String,
  tutor_name: String,
  tutor_name: String,
  status: Boolean,
  messages: String
});

module.exports = mongoose.model('Chat', ChatSchema);