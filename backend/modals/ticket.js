const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  query: String,
  repoter_id: String,
  repoter_name: String,
  assigne_name: String,
  assigne_id: String,
  category: String,
  status: String,
  createdAt: String,
  updatedAt: String,
  media: Array,
  messages: Array,
});

module.exports = mongoose.model('UserTemp', TicketSchema);