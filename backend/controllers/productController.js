const { findByIdAndUpdate } = require('../models/product');
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

// Update Product => /api/v1/product/id
exports.updateProduct = async(req,res,next) =>{

  let product = await Product.findById(req.params.id);
  console.log(product,"hiii");
  if(!product){
    return res.status(404).json({
      sucess: false,
      message: 'Product not found'
    })
  }
   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
     new: true,
     runvalidators: true,
     useFindAndModify: false
   })
   res.status(200).json({
    sucess: true,
    product
  })

}

// Get Single product => /api/v1/product/:id

exports.getsingleProduct = async(req,res,next) =>{
  const product = await Product.findById(req.params.id)
  if(!product){
    return res.status(404).json({
      sucess: false,
      message: 'Product not found'
    })
  }
    res.status(200).json({
      sucess: true,
      product
    })
}


exports.deleteProduct = async(req,res,next)=> {
  const product = await Product.findById(req.params.id);
  if(!product){
    return res.status(404).json({
      sucess: false,
      message: 'Product not found'
    })
  }
  await product.remove();
  res.status(200).json({
    sucess: true,
    product
  })
}