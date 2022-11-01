const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook)
router.get("/getBooks", BookController.getBooksData)
router.get("/updateBooks", BookController.updateBooks)
router.get("/deleteBooks", BookController.deleteBooks)
router.get("/totalsalesperauthor", BookController.totalSalesPerAuthor)



module.exports = router;