const express = require('express');
const app = express();
const errorMiddlewares  =  require('./middlewares/errors')
app.use(express.json());


// import all routes
const products = require('./routes/product');


app.use('/api/v1', products)

//Middleware to handle errors
app.use(errorMiddlewares);


module.exports = app