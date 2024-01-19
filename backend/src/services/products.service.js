const { productModel } = require('../models');

const getAll = async () => {
  const products = await productModel.getAll();
  return { status: 'SUCCESS', data: products };
};

const findById = async (productId) => {
  const product = await productModel.findById(productId);

  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESS', data: product };
};

module.exports = {
  getAll,
  findById,
};