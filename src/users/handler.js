const boom = require('boom');
const userRepository = require('./repository');
const hash = require('../utils/hash');
const { ERR_DUPLICATE_EMAIL } = require('../utils/errorTypes');

const create = async (req, h) => {
  try {
    const userData = req.payload;
    const passwordHashed = await hash.make(userData.password);

    userData.password = passwordHashed;

    const user = await userRepository.create(userData);
    return h.response(user).code(201);
  } catch (e) {
    switch (e.message) {
      case ERR_DUPLICATE_EMAIL:
        throw boom.badData('E-mail duplicado');
      default:
        throw boom.badImplementation(e);
    }
  }
};

const getAll = async () => userRepository.getAll();

module.exports = {
  create,
  getAll,
};
