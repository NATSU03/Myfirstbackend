

let Headervalidation =  function(req, res, next){

    let present = req.headers["isfreeappuser"]


    if(present) {
        Headervalidation = present ==="true"?true:false
        req.IsFreeAppuser = Headervalidation
        return next()
    }else
    res.send("request is missing a mandatory header")

    
}

module.exports.Headervalidation = Headervalidation
