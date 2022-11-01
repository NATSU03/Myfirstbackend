const moment = require("moment/moment");

const mid1= function ( req, res, next) {
   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'),req.path,req.ip)
   next()
}

module.exports.middl1= mid1

