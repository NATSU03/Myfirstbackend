const express = require('express');
const router = express.Router();


//---------------------------------------------------------------Post Api-----------------------------------------------------------------------------------//
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },



   ]


router.post('/players', function(req, res) {
        // console.log(req.body);
        const newplayer = req.body
        const newplayername = req.body.name


        const player  = players.find(x => x.name == newplayername)

        if (player == undefined){

            players.push(newplayer)
        }
        res.send( { data: players , status: true })
})

//-------------------------------------------------------------Method 1--------------------------------------------------------------------------------

const array = [31,32,33,34,36,37]

router.get('/Missing_no',(req,res) => {

let N 

for (let i = 0; i < array.length; i++) {

    if (array[i]+1 !== array[i+1] ){

        N = array[i]+1

        break;
    }
 }

 res.send('Missing number is '+ N)

});

//-------------------------------------------------------------Method 2-------------------------------------------------------------------------------

const array1 =[1,2,3,4,6,7,8,9]

router.get('/Missing_no2',(req,res) => {

let N = ((array1.length + 1) * (array1.length + 2) / 2);
 
    for (let i = 0; i < array1.length; i++)

      N -= array1[i];
        
     res.send('Missing number is '+ N)

});


module.exports = router;