const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook)

router.get("/Booklist", BookController.booklist)

router.get("/getBooksInYear", BookController.getBooksInYear)

router.get("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;