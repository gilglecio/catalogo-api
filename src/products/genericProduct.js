const mongoose = require('mongoose');

module.exports = {
  productType: String,
  state: String, // novo, usado ou defeito
  value: Number,
  brand: String,
  weight: Number,
  qtdStock: Number,
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: true
  },
  address: {
    zipcode: Number,
  },
  details: String,
}