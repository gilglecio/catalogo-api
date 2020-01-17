const Joi = require('@hapi/joi');
const schema = require('../schema');

module.exports = {
  ...schema,
  statorDiameter: Joi.number().required(),
  statorHeight: Joi.number().required(),
  minVolt: Joi.number().required(),
  maxVolt: Joi.number().required(),
  kv: Joi.number().required(),
  progressiveTable: Joi.array().items({
    propellerDescription: Joi.string().required(),
    volts: Joi.number().required(),
    amps: Joi.number().required(),
    watts: Joi.number().required(),
    rpm: Joi.number().required(),
    trust: Joi.number().required(),
    efficiency: Joi.number().required()
  })
};
