const mongoose = require('mongoose');
const { Schema } = mongoose;

const BusinessSchema = new Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    address:{
        streetAddress : String,  
        apartmentNumber : String,
        required:true   
    },
    state:{
        type:String, 
        uppercase:true, 
        required:true
    },
    city:{
        type:String,  
        capitalize:true,  
        required:true
    },
    zipcode:{
        type:String, 
        match:/^\d{5}$/ , 
        required:true
    },
    phoneNumber:{
        type:String,
        match:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        required:true
    },
})

const BusinessModel = mongoose.model( 'Business', BusinessSchema );
BusinessModel.createIndexes();

module.exports = BusinessModel;