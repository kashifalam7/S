const Product = require('../models/product')

//create new Product => /api/v1/product/new

exports.newProduct = async(req,res,next)=>{
    
  const product = await Product.create(req.body);
  res.status(201).json({ 
    success: true,
    product 
  })
}
 
//Get All Products => /api/v1/products
exports.getProducts = async (req,res, next)=>{
  const products = await Product.find();
  res.status(200).json({
      sucess: true,
      count: products.length,
      products
  })
}

