const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Middlewares = require("../Middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",userController.createUser  )

router.post("/login",userController.loginUser)


router.get("/users/:userId",Middlewares.Auth,userController.getUserData)

router.put("/users/:userId",Middlewares.Auth, userController.updateUser)

router.delete("/users/:userId",Middlewares.Auth,userController.updateUser)

module.exports = router;