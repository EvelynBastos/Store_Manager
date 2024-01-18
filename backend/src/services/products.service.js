const productsModel = require('../models/products.model');

const getAll = async () => {
  const products = await productsModel.getAll();
  return { status: 'SUCCESS', data: products };
};

const findById = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) return { status: 'NOT_FOUND', message: 'product not found' };
  return { status: 'SUCCESS', data: product };
};

module.exports = {
  getAll,
  findById,
};