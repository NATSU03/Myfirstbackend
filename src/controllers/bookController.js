const mongoose= require("mongoose")
const { reset } = require("nodemon")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let authorID =req.body.author_id
    let publisherID =req.body.publisher

    // let isauthorIDvalid = mongoose.Types.ObjectId.isValid(authorID)
    // let ispublishervalid = mongoose.Types.ObjectId.isValid(publisherID)

    let bookCreated = await bookModel.create(book)

    return (!authorID) ? res.send({msg:"required author id"})
        : (!publisherID) ? res.send({msg:"required publisher id"})
        : (!mongoose.Types.ObjectId.isValid(authorID)) ? res.send({msg:"author not avalable"})
        : (!mongoose.Types.ObjectId.isValid(publisherID))? res.send({msg:"Publisher not avalable"})
        : res.send({msg:bookCreated})
}
 


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher')
    res.send({data: books})
}



const updatebook= async function (req, res) {

    let k = await publisherModel.find({name:['Penguin','HarperCollins']}).select({_id:1});
    
    let key=await bookModel.find({publisher:k}).select({_id:1});
    
    for (let i= 0; i< key.length; i++) {
        const element = key[i];
        var updated=await bookModel.findByIdAndUpdate(element,{$set:{isHardCover:true}})
        console.log(updated);
     }
     res.send({msg:"Done"})
}


const updatPrice=async function(req, res){

        let key = await authorModel.find({ rating:{$gte:2}}).select({_id:1});

        let books=await bookModel.find({author:key}).select({_id:1})

        for (let i=0; i < books.length; i++) {
            const element = books[i];
            let updated= await bookModel.findByIdAndUpdate(element,{$inc:{price:10}})
            console.log(updated)
        }
        res.send({msg:"done"})

}

module.exports={createBook,
                getBooksData,
                updatebook,
                updatPrice}

