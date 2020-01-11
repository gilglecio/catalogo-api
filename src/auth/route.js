const loginHandler = require('./login.handler');
const logoutHandler = require('./logout.handler');
const loginSchema = require('./login.schema');

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler.login,
    options: {
      auth: false,
      validate: {
        payload: loginSchema,
      },
    },
  },
  {
    method: 'POST',
    path: '/logout',
    handler: logoutHandler.logout,
  },
];
