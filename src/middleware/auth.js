const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel")

const Authenticate = async function(req, res, next) {
    
  let userId = req.params.userId

  let user = await userModel.findById(userId);

  if (user.isdeleted==true)
    return res.send ({status :true,msg: "user is deleted "})

  if (!user)
    return res.send({ status: false, msg: "No such user exists" });

  
  
    next()
}


const Authorise = function(req, res, next) {
    
    let user = req.params.userId

    let token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token is missing" });

    let decodedToken = jwt.verify(token, "Thousand-Years-Blood-war");

    if (!decodedToken)

    return res.send({ status: false, msg: "token is invalid" });
  
    let userLoggedIn = decodedToken.userId
  
    if(user != userLoggedIn) return res.send
    ({status: false, msg: 'you are not allowed to perform this action '})


    next()
}

module.exports.Authenticate = Authenticate
module.exports.Authorise = Authorise