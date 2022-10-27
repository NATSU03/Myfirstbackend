const mongoose = require('mongoose');

const Books = new mongoose.Schema({
    bookName: {
        type: "String",
        required: true
    },
    prices: {
        indianPrice: Number,
        europePrice: Number,
    },
    year : {type : Number, default : 2021},
    authorName : "String",
    totalPages : "Number",
    stockAvailable : Boolean,
    tags : [String]
}, { timestamps: true });


module.exports = mongoose.model('Books', Books) //users

