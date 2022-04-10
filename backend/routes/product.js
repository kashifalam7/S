const express = require('express')
const router = express.Router();

const { getProducts,
        newProduct, 
        getsingleProduct, 
        updateProduct, 
        deleteProduct } = require('../controllers/productController')

//get
 router.route('/products').get(getProducts);
 router.route('/products/:id').get(getsingleProduct);

 //post
 router.route('/admin/products/new').post(newProduct);
 router.route('/admin/products/:id').post(updateProduct);
 router.route('/admin/products/:id').delete(deleteProduct);
 
 module.exports = router;