const mongoose = require('mongoose');
const userModel = require('./userModel');
const Product = require('./productModel')

const orderSchema = new mongoose.Schema( {
    userId: {type:Object,
            ref:userModel},

	productId:{type:Object,
             ref:Product},

	amount: Number,
	isFreeAppUser:Boolean, 
	date: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
