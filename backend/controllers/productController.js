const { findByIdAndUpdate } = require('../models/product');
const Product = require('../models/product')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../utils/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
//create new Product => /api/v1/product/new

exports.newProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product
  })
})

//Get All Products => /api/v1/products
exports.getProducts = catchAsyncError(async (req, res, next) => {
  console.log(req.query,'Query string')
  const apiFeatures = new APIFeatures(Product.find(), req.query).search();
  
  console.log(apiFeatures.query, "Inside Get Product");
  const products = await apiFeatures.query; 

  res.status(200).json({
    sucess: true,
    count: products.length,
    products
  })
})

// Update Product => /api/v1/product/id
exports.updateProduct = catchAsyncError(async (req, res, next) => {

  let product = await Product.findById(req.params.id);

  if (!product) {

    return next(new ErrorHandler('Product not found', 404))
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

})

// Get Single product => /api/v1/product/:id

exports.getsingleProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product) {

    return next(new ErrorHandler('Product not found', 404))

  }
  res.status(200).json({
    sucess: true,
    product
  })
})


exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {

    return next(new ErrorHandler('Product not found', 404))
  }
  await product.remove();
  res.status(200).json({
    sucess: true,
    product
  })
})