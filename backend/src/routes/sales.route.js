const route = require('express').Router();
const salesController = require('../controllers/sales.controller');

route.get('/', salesController.getAll);
route.post('/', salesController.createSale);
route.get('/:id', salesController.findById);

module.exports = route;