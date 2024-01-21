const router = require('express').Router();
const { productController } = require('../controllers');

router.get('/', productController.getAll);
router.post('/', productController.insertNewProduct);
router.get('/:id', productController.findById);

module.exports = router;