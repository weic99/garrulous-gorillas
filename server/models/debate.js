const mongoose = require('mongoose');

const DebateSchema = mongoose.Schema({
  updated: { type: Date, default: Date.now },
  topic: String,
  winner: String
});

const Debate = module.exports = mongoose.model('Debate', DebateSchema);

module.exports.addDebate = (debate, callback) => {
	debate.save(callback);
};

mode.exports.getAllActiveDebates = (callback) => {
	
};