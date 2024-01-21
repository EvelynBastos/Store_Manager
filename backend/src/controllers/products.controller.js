const productsService = require('../services/products.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (req, res) => {
  const { status, data } = await productsService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.findById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const insertNewProduct = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productsService.insertNewProduct(name);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { status, data } = await productsService.updateProduct(id, name);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAll,
  findById,
  insertNewProduct,
  updateProduct,
};