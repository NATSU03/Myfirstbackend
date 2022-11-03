const express = require('express');
const router = express.Router();
const OrderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createproduct",ProductController.createproduct)

router.post("/createUser",commonMW.Headervalidation, UserController.createUser)

router.post("/createOrder",commonMW.Headervalidation,OrderController.createorder)



module.exports = router;