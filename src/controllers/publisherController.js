const PublisherModel = require("../models/publisherModel")


const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

module.exports={
    createpublisher
}
