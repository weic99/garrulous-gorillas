const mongoose = require('mongoose');

const DebatePointSchema = mongoose.Schema({
  updated: { type: Date, default: Date.now },
  side: String,
  body: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const DebatePoint = module.exports = mongoose.model('DebatePoint', DebatePointSchema);