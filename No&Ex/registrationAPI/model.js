const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

module.exports = userModel;