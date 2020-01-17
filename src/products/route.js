const productHandler = require('./handler');
const brushlessMotorSchema = require('./brushlessMotor/schema.js');
const batterySchema = require('./battery/schema.js');
const propellerSchema = require('./propeller/schema.js');

module.exports = [
  {
    method: 'POST',
    path: '/products/brushless_motor',
    handler: productHandler.create,
    options: {
      validate: {
        payload: brushlessMotorSchema,
      }
    },
  },
  {
    method: 'POST',
    path: '/products/battery',
    handler: productHandler.create,
    options: {
      validate: {
        payload: batterySchema,
      }
    },
  },
  {
    method: 'POST',
    path: '/products/propeller',
    handler: productHandler.create,
    options: {
      validate: {
        payload: propellerSchema,
      }
    },
  },
  {
    method: 'GET',
    path: '/products',
    handler: productHandler.getAll,
  },
];
