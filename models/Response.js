// models/Response.js

const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  responses: {
    type: [String],
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
