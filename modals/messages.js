const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
  messages: Array
});

module.exports = mongoose.model('Messages', MessagesSchema);