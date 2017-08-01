const mongoose = require('mongoose');

const SpectatorSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Spectator = module.exports = mongoose.model('Spectator', SpectatorSchema);