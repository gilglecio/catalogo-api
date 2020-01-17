const Joi = require('@hapi/joi');
const schema = require('../schema');

module.exports = {
  ...schema,
  cells: Joi.number().required(),
  cellVol: Joi.number().required(),
  capacity: Joi.number().required(),
  maxDischargeRate: Joi.number().required(),
  maxChargeRate: Joi.number().required(),
  connectorType: Joi.string().required(),
  type: Joi.string().required()
};
