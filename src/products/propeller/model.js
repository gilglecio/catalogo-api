const mongoose = require('mongoose');
// const uuidv4 = require('uuid/v4');

const genericProduct = require('../genericProduct');

const { Schema } = mongoose;

const PropellerSchema = new Schema({
  // _id: {
  //   type: String,
  //   default: uuidv4(),
  // },
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
