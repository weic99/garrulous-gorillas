const mongoose = require('mongoose');

const ActiveDebateSchema = mongoose.Schema({
	debate: { type: Schema.Types.ObjectId, ref: 'Debate' },
  for: { type: Schema.Types.ObjectId, ref: 'For' },
  against: { type: Schema.Types.ObjectId, ref: 'Against' },
  spectator: { type: Schema.Types.ObjectId, ref: 'Spectator' }
});

const ActiveDebate = module.exports = mongoose.model('ActiveDebate', ActiveDebateSchema);