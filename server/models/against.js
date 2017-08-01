const mongoose = require('mongoose');

const AgainstSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Against = module.exports = mongoose.model('Against', AgainstSchema);