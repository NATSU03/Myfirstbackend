const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Middlewares = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/GetUsers/:userId",Middlewares.Authenticate,Middlewares.Authorise,userController.getUserData)

router.put("/UpdateUsers/:userId",Middlewares.Authenticate,Middlewares.Authorise,userController.updateUser)

router.delete('/DeteleUsers/:userId',Middlewares.Authenticate,Middlewares.Authorise,userController.deleteUser)

router.post('/PostVlog/:userId',Middlewares.Authenticate,Middlewares.Authorise,userController.postMessage)


module.exports = router;