const Product = require('../models/product')

//create new Product => /api/v1/product/new

exports.newProduct = async(req,res,next)=>{
    
  const product = await Product.create(req.body);
  res.status(201).json({ 
    success: true,
    product 
  })
}

exports.getProducts = (req,res, next)=>{
  res.status(200).json({
      sucess: true,
      message: 'This route will show products in database.'
  })
}