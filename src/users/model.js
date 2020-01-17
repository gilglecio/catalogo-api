const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  status: String,
  password: String,
  address: {
    zipcode: String,
    number: String,
    complement: String,
  },
}, {
  timestamps: {},
});

module.exports = new mongoose.model('User', UserSchema);
