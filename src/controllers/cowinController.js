let axios = require("axios")


let getbyDistrictid = async function (req, res) {

    try {

        let Id = req.query.Id
        let date = req.query.Date

        console.log(Id,date);

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Id}&date=${date}`
        }

        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getbyDistrictid = getbyDistrictid














// let getStates = async function (req, res) {

//     try {
//         let options = {
//             method: 'get',
//             url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }




// let getByPin = async function (req, res) {
//     try {
//         let pin = req.query.pincode
//         let date = req.query.date
//         console.log(`query params are: ${pin} ${date}`)
//         var options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
//         }
//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let getOtp = async function (req, res) {
//     try {
//         let blahhh = req.body
        
//         console.log(`body is : ${blahhh} `)
//         var options = {
//             method: "post",
//             url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
//             data: blahhh
//         }

//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }


// module.exports.getStates = getStates

// module.exports.getByPin = getByPin
// module.exports.getOtp = getOtp