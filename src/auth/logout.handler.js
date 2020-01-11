const boom = require('boom');
const auth = require('./authenticate.auth');
const userRepository = require('../users/repository');

const logout = async (req, h) => {
  const { credentials, token } = req.auth;
  try {
    await Promise.all([
      auth.logout(token),
      userRepository.removeCache(credentials.data.user_id),
    ]);

    return h.response().code(200);
  } catch (e) {
    throw boom.badImplementation();
  }
};

module.exports = {
  logout,
};
