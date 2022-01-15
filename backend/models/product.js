const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name:{
      type: String,
      required:[true,'Please enter product name'],
      trim: true,
      maxlength: [100,'Product name cannot exceed 100 characters']
  },
  price:{
    type: Number,
    required:[true,'Please enter product name'],
    maxlength: [50,'Product num cannot exceed 5 characters'],
    default : '0.00'
},
description:{
    type: String,
    required:[true,'Please enter product Description'],
    maxlength: [50,'Product num cannot exceed 5 characters']
},
ratings:{
    type: Number,
     default: 0
    },
    
    // we use cloudinary here
    // we are using array to store multiple images
    // we store two things here image id, image_url
images :[
    {
        public_id: {
            type: String,
            required: true
        }, 
        url : {
            type: String,
            required: true
        }
    }
],

category :{
    type: String,
    required: [true,'Please enter catagory for product'],
    // to avoid trash catagories we ad dour own catagory through enums
    enum: {
        values :[
            'Electronics',
            'Cameras',
            'Acessories',
            'Headphones',
            'Foods',
            'Books',
            'Clothes/Shoes',
            'Beauty/Health',
            'Sports',
            'Outdoor',
            'Home',
        ],
        message: 'Please select the correct catagory for this product '
    }
},

seller :{
    type: String,
    required: [true,'Please enter product seller']
},

stock :{
    type: Number,
    required: [true,'Please enter product stock'],
    maxlength: [50,'Product name cannot exceed 5 characters']
},

numofReviews :{
    type: Number,
    default: 0,
},

reviews :[
    {
        name : {
            type: String,
            required: true
        },
        rating : {
            type: Number,
            required: true
        },
        comment : {
            type: String,
            required: true
        }
    }
],

    createdAt : {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('product', productSchema)