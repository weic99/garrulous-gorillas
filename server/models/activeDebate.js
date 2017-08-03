const mongoose = require('mongoose');

const ActiveDebateSchema = mongoose.Schema({
  topic: String,
  debate: { type: mongoose.Schema.Types.ObjectId, ref: 'Debate' },
  for: { type: mongoose.Schema.Types.ObjectId, ref: 'For' },
  against: { type: mongoose.Schema.Types.ObjectId, ref: 'Against' },
  spectator: { type: mongoose.Schema.Types.ObjectId, ref: 'Spectator' },
  // have debatePoints foreign key which is type array of debatePoints [{}]
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
	// ActiveDebate.find().remove(callback); // run this to delete all debates off mongo db
};

module.exports.getArguments = (callback) => {

};