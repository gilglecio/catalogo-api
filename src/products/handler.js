const boom = require('boom');
const productRepository = require('./repository');
const Token = require('../auth/token.auth');

const create = async (req, h) => {
  try {
    const productData = req.payload;

    productData.seller = Token.decode(req.auth.token).sub;

    const product = await productRepository.create(productData);

    return h.response(product).code(201);
  } catch (e) {
    throw boom.badImplementation(e);
  }
};

const getAll = async (req, h) => {
  const products = await productRepository.getAll();
  return h.response(products);
};

module.exports = {
  create,
  getAll,
};
