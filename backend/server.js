const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')

//setting up config file
 dotenv.config({path: 'backend/config/config.env'})

 // Handle uncaught exception
 process.on('uncaughtException', err =>{
     console.log(`ERROR ${err.message}`)
     console.log('Shutting down due to uncaught exception');
     process.exit(1);
 })
//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server Started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode` );
});

// Handle unhandled promise rejection
process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shuttting down due to unhandled Promise Rejection');
    server.close(()=>{
        process.exit(1)
    })
})
