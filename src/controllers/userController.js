const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {

  try {

    let data = req.body;

    if (Object.keys(data).length == 0){

    return res.status(400).send({msg: "no data"})}

    let savedData = await userModel.create(data);
    
    return res.status(201).send({ msg: savedData });
    
  } catch (error) {

    console.log(error);

    return res.status(500).send({msg:error.message})

  }
  
};



//*********************************************************************************************************************************************/

const loginUser = async function (req, res) {

  try {

  let userName  = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
    
    if (!user)
    return res.status(400).send({status: false,msg: "username or the password is not valid or user does not exit "});

  let token = jwt.sign({userId: user._id.toString(),batch: "Lithium",organisation: "FunctionUp"},"Thousand-Years-Blood-war");

  res.setHeader("x-auth-token", token);

  res.status(200).send({ status: true, token: token });
    
  } catch (error) {

     res.status(500).send(error.message)
  }
 
};

//******************************************************************************************************************************************* */


const getUserData = async function (req, res) {

try {
  
  let userDetails = await userModel.findById(req.params.userId);

  res.status(200).send({ status: true, data: userDetails });  
  
} catch (error) {

      res.status(500).send(error.message || "user is not valid")
    
    }
   
};


//********************************************************************************************************************************* */


const updateUser = async function (req, res) {

try {
  
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId }, userData,{new:true});
  res.status(200).send({ status: true, data: updatedUser });
  
} catch (error) {

      res.status(500).send(error.message)

}

};

//********************************************************************************************************************************* */

const deleteUser = async function (req, res) {

try { 
  
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId}, userData,{new:true});
  return res.status(200).send({ status: true, data: updatedUser });
  
} catch (error) {

  res.status(500).send(error.message)
  
}
};
//*********************************************************************************************************************************** */

const postMessage = async function (req, res) {

  try {
    
  let blog = req.body.blog

  let user = await userModel.findById(req.params.userId);

  let bolgs = user.posts

  bolgs.push(blog)

  let updatedUser = await userModel.findOneAndUpdate({_id: req.params.userId},{posts:bolgs},{new: true})
  return res.status(200).send({status: true, data: updatedUser})


  } catch (error) {

      res.status(500).send(error.message)
    
  }
  
}

//********************************************************************************************************************************************** */

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage


