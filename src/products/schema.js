const Joi = require('@hapi/joi');

module.exports = {
  productType: Joi.string().required(),
  brand: Joi.string().required(),
  value: Joi.number().required(),
  weight: Joi.number().required(),
  state: Joi.string().required(),
  brand: Joi.string().required(),
  qtdStock: Joi.number().required(),
  zipcode: Joi.string().min(8).required(),
  details: Joi.string(),

  seller: Joi.any().forbidden(),
  timestamps: Joi.any().forbidden(),
};
