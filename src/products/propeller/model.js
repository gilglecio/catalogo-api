const mongoose = require('mongoose');

const genericProduct = require('../genericProduct');

const { Schema } = mongoose;

const PropellerSchema = new Schema({
  ...genericProduct,
  maxRpm: Number,
  diameter: Number,
  blades: Number,
  foldable: Boolean,
  pitch: Number,
  hubSize: Number,
}, {
  timestamps: {},
});

module.exports = new mongoose.model('Propeller', PropellerSchema);
