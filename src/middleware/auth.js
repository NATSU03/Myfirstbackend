const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel")

const Authenticate = async function(req, res, next) {

try {

  let user = req.params.userId

  user = await userModel.findById(user);

  if ( user.isdeleted == true)

    return res.status(404).send ({status :true, msg: "user is deleted "})

  if (!user)

    return res.status(404).send({status: false, msg: "No such user exists" });

  next()

  } catch (error) {

     return res.status(500).send(error.message)

  }

}


const Authorise = function(req, res, next) {
    
try {

   let user = req.params.userId

    let token = req.headers["x-auth-token"];
  
    if (!token) return res.status(401).send({ status: false, msg: "token is missing" });

    let decodedToken = jwt.verify(token,"Thousand-Years-Blood-war");

    if (!decodedToken)

    return res.status(401).send({ status: false, msg: "token is invalid" });
  
    let userLoggedIn = decodedToken.userId
  
    if(user != userLoggedIn) 

    return res.status(401).send({ status: false, msg: 'you are not allowed to perform this action'})

    next()
  
} catch (error) {

  res.status(500).send(error.message)
  
}
}

module.exports.Authenticate = Authenticate
module.exports.Authorise = Authorise