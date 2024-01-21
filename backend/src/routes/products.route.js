const router = require('express').Router();
const { productController } = require('../controllers');

router.get('/', productController.getAll);
router.get('/:id', productController.findById);
router.post('/', productController.insertNewProduct);

module.exports = router;