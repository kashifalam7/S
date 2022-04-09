const express = require('express')
const router = express.Router();

const { getProducts, newProduct, getsingleProduct, updateProduct } = require('../controllers/productController')



 router.route('/products').get(getProducts);
 router.route('/products/:id').get(getsingleProduct);

 router.route('/products/new').post(newProduct);
 router.route('/admin/products/:id').post(updateProduct);
 
 module.exports = router;