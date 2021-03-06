const UserModel = require('./model');
const Cache = require('../repositories/cache.repository');
const { ERR_DUPLICATE_EMAIL } = require('../utils/errorTypes');
const { LOGIN_EXPIRATION_TIME } = require('../auth/confs');

const PREFIX_CACHE = 'userId:';

const create = async (userData) => {
  const userExists = await UserModel.exists({ email: userData.email });

  if (userExists) {
    throw new Error(ERR_DUPLICATE_EMAIL);
  }

  const userModel = new UserModel(userData);
  return userModel.save();
};

const getAll = async () => UserModel.find();

const findByEmail = email => (
  UserModel.findOne({ email })
);

const setCache = user => (
  Cache.set(`${PREFIX_CACHE}${user.id}`, JSON.stringify(user), LOGIN_EXPIRATION_TIME)
);

const removeCache = userId => (
  Cache.del(`${PREFIX_CACHE}${userId}`)
);

module.exports = {
  create,
  findByEmail,
  getAll,
  setCache,
  removeCache,
};
