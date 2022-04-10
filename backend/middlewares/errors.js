const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    console.log(process.env.NODE_ENV )
    if(process.env.NODE_ENV === 'DEVELOPMENT')
    {
        res.status(err.statusCode).json({
            sucess :false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if(process.env.NODE_ENV === 'PRODUCTION')
    {
        let error = {...err}
        error.message = err.message;

          //Wrong mongoose ID Error

      if(err.name === 'castError'){
          const message = `Resource not found. Invalid: ${err.path}`
          error = new ErrorHandler(message, 400)
      } 
       
      //Handling mongoose Validation Error

      if(err.name === 'Validation Error') {
          const message = Object.values(err.errors).map(value=>value.message);
          error =new ErrorHandler(message,400);
      }

    res.status(err.statusCode).json({
        success : false,
        error: err.message || 'Internal Server Error',
     })  
    }
}