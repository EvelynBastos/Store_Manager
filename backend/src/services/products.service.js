const { productModel } = require('../models');
const schema = require('../validations/validadetionsInputValues');

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

const insertNewProduct = async (name) => {
  const error = schema.validateNewProduct({ name });
  if (error) return { status: error.status, data: { message: error.message } };
  const newProduct = await productModel.insertNewProduct(name);
  return { status: 'CREATED', data: newProduct };
};

const updateProduct = async (productId, name) => {
  const error = schema.validateNewProduct({ name });
  if (error) return { status: error.status, data: { message: error.message } };

  const existsProduct = await productModel.findById(productId);
  if (!existsProduct) { return { status: 'NOT_FOUND', data: { message: 'Product not found' } }; }
  
  const newProduct = await productModel.updateProduct(productId, name);
  return { status: 'SUCCESS', data: newProduct };
};

module.exports = {
  getAll,
  findById,
  insertNewProduct,
  updateProduct,
};