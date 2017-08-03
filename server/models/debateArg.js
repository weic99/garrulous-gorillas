const mongoose = require('mongoose');

const DebateArgSchema = mongoose.Schema({
  updated: { type: Date, default: Date.now },
  side: String,
  body: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  votes: Number,
  activeDebate: { type: mongoose.Schema.Types.ObjectId, ref: 'Debate' },
});

const DebateArg = module.exports = mongoose.model('DebateArg', DebateArgSchema);

//search by side && debate topic/id

//search for total pts and reduce