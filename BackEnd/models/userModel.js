const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    username:{
        type:String,
        minLength:[4,'Minimum 4 characters username is required'],
        required:[true,'UserName is required']
    },
    email:{
        type:String,
        trim:true,
        required:[true,'Email is required']
    },
    password:{
        type:String,
        minLength:[6,'Minimum 6 characters are required'],
        maxLength:[10,'Maximum 10 characters are required'],
        required:[true,'Password is required']
    },
    customerid:{
        type:String,
        default:""
    },
    subscription:{
        type:String,
        default:""
    }
});

module.exports = mongoose.model('user',userModel);