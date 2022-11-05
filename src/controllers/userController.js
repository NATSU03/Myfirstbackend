const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};


//*************************************************************************************************************************** */
const loginUser = async function (req, res) {

  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });

  if (!user)
    return res.send({status: false,msg: "username or the password is not valid",});

  let token = jwt.sign({userId: user._id.toString(),batch: "Lithium",organisation: "FunctionUp"},"Thousand-Years-Blood-war");

  res.setHeader("x-auth-token", token);

  res.send({ status: true, token: token });
};

//******************************************************************************************************************************************* */


const getUserData = async function (req, res) {

  let userDetails = await userModel.findById(req.params.userId);

  res.send({ status: true, data: userDetails });   

};


//********************************************************************************************************************* */


const updateUser = async function (req, res) {

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId }, userData,{new:true});
  res.send({ status: true, data: updatedUser });

};

//************************************************************************************************************************ */

const deleteUser = async function (req, res) {

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId}, userData,{new:true});
  res.send({ status: true, data: updatedUser });

};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
