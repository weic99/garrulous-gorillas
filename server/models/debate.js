const mongoose = require('mongoose');

const DebateSchema = mongoose.Schema({
  updated: { type: Date, default: Date.now },
  topic: String,
  winner: String
});

const Debate = module.exports = mongoose.model('Debate', DebateSchema);