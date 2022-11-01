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

// const authorModel = require("../models/authorModel")
// const publishermodel=require("../models/publisherModel")
// const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let {author,publisher}=req.body
//     if(!author){
//         res.send("requir author id")
//     }
//     if(!publisher){
//         res.send("requir publisher id")
//     }
//     let authorData=await authorModel.findById({_id:author})
//     if(!authorData){
//         res.send("author not avalable")
//     }
//     let publisherData=await publishermodel.findById({_id:publisher})
//     if(!publisherData){
//         res.send("Publisher not avalable")
//     }
//     console.log(authorName)
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author')
//     res.send({data: specificBook})

// }
// const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
//     let specificBookFulldata = await bookModel.find().populate('author').populate('publisher');
//     res.send({data: specificBookFulldata})

// }
// const BookWriteBy= async function(req, res){
//     let key=await publishermodel.find({name:["Penguin","HarperCollins"]}).select({_id:1});
//     let key1=await bookModel.find({publisher:key}).select({_id:1});
//     for (let index = 0; index < key1.length; index++) {
//         const element = key1[index];
//         let key001=await bookModel.findByIdAndUpdate(element,{$set:{isHardCover:true}})

//         console.log(key001)
//     }

// }
// const updatPrice=async function(req, res){

//     let key = await authorModel.find({ rating:{$gte:2}}).select({_id:1});
//     let books=await bookModel.find({author:key}).select({_id:1})
//     for (let index = 0; index < books.length; index++) {
//         const element = books[index];
//         let update= await bookModel.findByIdAndUpdate(element,{$inc:{price:10}})
//         console.log(update)
        
//     }

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.getBooksWithAuthorAndPublisherDetails=getBooksWithAuthorAndPublisherDetails
// module.exports.BookWriteBy=BookWriteBy
// module.exports.updatPrice=updatPrice
