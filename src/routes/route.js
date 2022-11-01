const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController");
const publisherModel = require('../models/publisherModel');
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createpublisher", publisherController.createpublisher)

router.post("/createbook", bookController.createBook)

router.put("/updatebook", bookController.updatebook)

router.put("/updateprice", bookController.updatPrice)

router.get("/getBooksData", bookController.getBooksData)


module.exports = router;