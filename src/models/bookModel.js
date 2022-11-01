const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author",
        require:true
    },
    isHardCover : {
        type:Boolean,
        default:false
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "Publisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
