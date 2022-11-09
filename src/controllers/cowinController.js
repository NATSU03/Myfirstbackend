let axios = require("axios")





let getweather = async function (req, res) {

    let cityName = req.query.q
    let key = req.query.appid

    try {

        let cities = ["Bengaluru","Pune","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let citytemp = []

        for (let i = 0; i< cities.length;i++){

        const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`)

        citytemp.push({city: cities[i],temp:result.data.main.temp})

        }
        
        return res.status(200).send({ data:citytemp })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getgetweather =getweather
