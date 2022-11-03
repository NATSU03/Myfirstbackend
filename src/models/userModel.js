const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance:{type:Number,default:100},
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    age: Number,
    isFreeAppUser:Boolean
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) 

