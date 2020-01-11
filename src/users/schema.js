const Joi = require('@hapi/joi');

module.exports = {
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  status: Joi.string(),
  password: Joi.string().min(6).required(),
  address: {
    zipcode: Joi.string().min(8).required(),
    number: Joi.string().min(1).required(),
    complement: Joi.string(),
  },
  timestamps: Joi.any().forbidden(),
};
