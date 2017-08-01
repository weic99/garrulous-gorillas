const mongoose = require('mongoose');

const ForSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const For = module.exports = mongoose.model('For', ForSchema);