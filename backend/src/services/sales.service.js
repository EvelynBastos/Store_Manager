const salesModel = require('../models/sales.model');

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

module.exports = {
  getAll,
  findById,
};