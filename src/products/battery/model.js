const mongoose = require('mongoose');

const genericProduct = require('../genericProduct');

const { Schema } = mongoose;

const BatterySchema = new Schema({
  ...genericProduct,
  cells: Number, // 3, 4, 6,...
  cellVol: Number, // 3.7v
  capacity: Number, // 3500mah
  maxDischargeRate: Number,
  maxChargeRate: Number,
  connectorType: String,
  type: String, // lipo, lítio,..
}, {
  timestamps: {},
});

module.exports = new mongoose.model('Battery', BatterySchema);
