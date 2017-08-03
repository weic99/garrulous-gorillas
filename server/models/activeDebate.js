const mongoose = require('mongoose');

const ActiveDebateSchema = mongoose.Schema({
  topic: String,
  debate: { type: mongoose.Schema.Types.ObjectId, ref: 'Debate' },
  for: { type: mongoose.Schema.Types.ObjectId, ref: 'For' },
  against: { type: mongoose.Schema.Types.ObjectId, ref: 'Against' },
  spectator: { type: mongoose.Schema.Types.ObjectId, ref: 'Spectator' },
  debateArgs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DebateArg'}],
  votesPro: Number,
  votesCon: Number,
});

const ActiveDebate = module.exports = mongoose.model('ActiveDebate', ActiveDebateSchema);

module.exports.add = (debate, callback) => {
  debate.save(callback);
};

module.exports.getAll = (callback) => {
  ActiveDebate.find(callback);
	// ActiveDebate.find().remove(callback); // run this to delete all debates off
};

// Get number of votes for an argument
module.exports.getVotesByTopic = (topic, callback) => {
  ActiveDebate.findOne({topic: topic}, callback);
};