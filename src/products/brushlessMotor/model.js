const mongoose = require('mongoose');

const genericProduct = require('../genericProduct');

const { Schema } = mongoose;

const BrushlessMotorSchema = new Schema({
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
    thrust: Number,
    efficiency: Number
  }]
}, {
  timestamps: {},
});

module.exports = new mongoose.model('BrushlessMotor', BrushlessMotorSchema);
