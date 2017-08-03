const mongoose = require('mongoose');

const DebateArgSchema = mongoose.Schema({
  updated: { type: Date, default: Date.now },
  body: String,
  votes: Number,
  debateTopic: String,
  debateSide: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  activeDebate: { type: mongoose.Schema.Types.ObjectId, ref: 'Debate' },
});

const DebateArg = module.exports = mongoose.model('DebateArg', DebateArgSchema);

// Add an argument for a debate side
module.exports.addArgument = (newArg, callback) => {
	newArg.save(callback);
};

// Get arguments by side & debate topic
module.exports.getArgsByTopicAndSide = (topic, side, callback) => {
  DebateArg.find({debateTopic: topic, debateSide: side});
};