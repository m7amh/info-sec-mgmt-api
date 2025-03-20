const express = require('express');
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, addProduct);
router.get('/', getProducts);
router.get('/:pid', getProduct);
router.put('/:pid', authMiddleware, updateProduct);
router.delete('/:pid', authMiddleware, deleteProduct);

module.exports = router;
