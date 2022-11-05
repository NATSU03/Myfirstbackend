const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel")

const Auth = async function (req, res,next) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (user.$isDeleted)
    return res.send ({status :true,msg: "user is deleted "})

  if (!user)
    return res.send({ status: false, msg: "No such user exists" });

  
  let token = req.headers["x-auth-token"];
  
  if (!token) return res.send({ status: false, msg: "token is missing" });

  let decodedToken = jwt.verify(token, "Thousand-Years-Blood-war");

  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  
    next()

  };

module.exports.Auth = Auth;