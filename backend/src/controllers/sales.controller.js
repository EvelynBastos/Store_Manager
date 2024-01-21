const salesService = require('../services/sales.service');
const mapStatusHTT = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
  const { status, data } = await salesService.getAll();
  return res.status(mapStatusHTT(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.findById(id);
  return res.status(mapStatusHTT(status)).json(data);
};

const createSale = async (req, res) => {
  const products = req.body;
  const { status, data } = await salesService.createSale(products);
  return res.status(mapStatusHTT(status)).json(data);
};

module.exports = {
  getAll,
  findById,
  createSale,
};