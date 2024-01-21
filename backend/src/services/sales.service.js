const salesModel = require('../models/sales.model');
const schema = require('../validations/validadetionsInputValues');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return { status: 'SUCCESS', data: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale === undefined || sale.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESS', data: sale };
};

const createSale = async (products) => {
  const error = schema.validateNewSale(products);
  if (error) {
    return { status: error.status, data: { message: error.message } };
  }
  const arraySale = products.map(async (product) => {
    const id = product.productId;

    const productFromModel = await findById(id);

    if (productFromModel.status === 'NOT_FOUND') {
      throw new Error('Product not found');
    }
  });
  try {
    await Promise.all(arraySale);
  } catch (err) {
    return { status: 'NOT_FOUND', data: { message: err.message } };
  }
  const sale = await salesModel.createSale(products);
  return { status: 'CREATED', data: sale };
};

module.exports = {
  getAll,
  findById,
  createSale,
};