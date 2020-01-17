const Joi = require('@hapi/joi');
const schema = require('../schema');

module.exports = {
  ...schema,
  maxRpm: Joi.number().required(),
  diameter: Joi.number().required(),
  blades: Joi.number().required(),
  foldable: Joi.bool().required(),
  pitch: Joi.number().required(),
  hubSize: Joi.number().required(),
};
