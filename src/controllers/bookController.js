const { count } = require("console")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const booklist = async function (req, res) {
    let books = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({ msg: books })
}

const getBooksInYear = async function (req, res) {
    let Data= req.query.year
    let bookInyear = await BookModel.find({ year: { $in: Data } })
    res.send({ msg: bookInyear })
}

const getParticularBooks = async function (req, res) {
    let tofind = req.query
    console.log(tofind)
    let allbooks = await BookModel.find(tofind)
    res.send({msg: allbooks})
}


const getXINRBooks = async function (req, res) {
    let searchINRtag = await BookModel.find({"prices.indianPrice": {$in:[100,200,500]}})
    res.send({ msg: searchINRtag })
}

const getRandomBooks = async function (req, res) {
    let bookList = await BookModel.find({ totalPages: { $gt: 500 } })
    res.send({ msg: bookList })
}

module.exports = {
    createBook,
    booklist,
    getBooksInYear,
    getParticularBooks,
    getXINRBooks,
    getRandomBooks
};
