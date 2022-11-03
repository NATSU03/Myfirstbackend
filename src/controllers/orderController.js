
const { default: mongoose, set } = require("mongoose")
const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const Usermodel = require("../models/userModel")


const createorder = async function (req, res) {
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    // let IsFreeAppUser = req.IsFreeAppUser
    if (userId && productId) {
        if ((mongoose.Types.ObjectId.isValid(userId)) && (mongoose.Types.ObjectId.isValid(productId))) {
            if (req.IsFreeAppuser) {
                 await OrderModel.create(data) 
                 let newcreatedOrder =await OrderModel.find(data).populate("userId").populate("productId").update(
                 { $set: { amount: 0},$set:{IsFreeAppUser: true }}, {new:true})
                return res.send({ msg: newcreatedOrder })

            } else {
                let Price = await ProductModel.findOne({ _id: productId }).select({ price: 1, _id: 0 });
                let Balance = await Usermodel.findOne({ _id: userId }).select({ balance: 1, _id: 0 })

                    if (Price.price < Balance.balance) {  
                    await Usermodel.updateOne(
                        { _id: userId },
                        { $set: { balance: Balance.balance - Price.price } }, { new: true })

                    await OrderModel.create(data)
                    await OrderModel.updateOne({ data },
                        { $set: { amount: Price.price }, $set: { IsFreeAppUser: false } }, { new: true })

                    let createdOrder = await OrderModel.findOne(data).populate("userId").populate("productId")
                    return res.send({ msg: createdOrder })

                    }return res.send ({msg: "balance is insufficient"})
            }

        } else res.send(" userID or Product is not valid");

    } else res.send("userID or Product missing")

}

module.exports.createorder = createorder

