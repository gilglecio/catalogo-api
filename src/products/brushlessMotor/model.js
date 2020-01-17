const mongoose = require('mongoose');
// const uuidv4 = require('uuid/v4');

const genericProduct = require('../genericProduct');

const { Schema } = mongoose;

const BrushlessMotorSchema = new Schema({
  // _id: {
  //   type: String,
  //   default: uuidv4(),
  // },
  ...genericProduct,
  statorDiameter: Number,
  statorHeight: Number,
  minVolt: Number,
  maxVolt: Number,
  kv: Number,
  progressiveTable: [{
    propeller: String,
    volts: Number,
    amps: Number,
    watts: Number,
    rpm: Number,
    trust: Number,
    efficiency: Number
  }]
}, {
  timestamps: {},
});

module.exports = new mongoose.model('BrushlessMotor', BrushlessMotorSchema);
