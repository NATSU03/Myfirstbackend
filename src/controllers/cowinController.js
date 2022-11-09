let axios = require("axios")




let CreateMeme = async function (req, res) {

    try {

        let MemeFormatID = req.query.template_id
        let Text0 =req.query.text0
        let Text1 = req.query.text1 
        let UserName = req.query.username
        let pass = req.query.password

        const option =  {
            method :'post',
            url: `https://api.imgflip.com/caption_image? template_id=${MemeFormatID}&text0=${Text0}&text1=${Text1}&username=${UserName}&password=${pass}`
        }

        let MemeCreated = await axios(option)

        res.status(200).send({MemeByMemeLORD:MemeCreated.data})


    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.CreateMeme = CreateMeme


// var options = {
//     method: "post",
//     url: `https://api.imgflip.com/caption_image? template_id=${MemeFormatID}&text0=${Text0}&text1=${Text1}&username=${UserName}&password=${pass}`
// }
// let result = await axios(options)
// console.log(result.data)
// res.status(200).send({ msg: result.data })

