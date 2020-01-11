const userHandler = require('./handler');
const userSchema = require('./schema.js');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: userHandler.create,
    options: {
      validate: {
        payload: userSchema,
      },
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/users',
    handler: userHandler.getAll,
  },
];
