const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
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

module.exports = new mongoose.Model('User', UserSchema);
