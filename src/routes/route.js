const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


const movies = ["Naruto the last ", "Senister", "Dajango Unchanged", "Batman begins"]

router.get('/movies', function (req, res) {

    console.log("it's working");

    res.send(movies)
})


router.get('/movies/:indexNumber', function (req, res) {

    const movies = ["Naruto", "Senister", "Dajango Unchanged", "Batman begins"]

    const i = req.params.indexNumber

    if (i <= movies.length) {

        res.send(movies[i])

    } else res.send("plzz use a valid index")

})

Obj =

[ {
    "id": 1,
    "name": "The Shining"
   }, 
   {
    "id": 2,
    "name" : "Incendies"
   },
     {
    "id" : 3,
    "name" : "Rang de Basanti"
   }, 
   {
    "id": 4,
    "name" : "Finding Nemo"
   }
]
   

router.get('/films', function (req, res) {

    res.send(Obj)
})

router.get('/films/:ID', function (req, res) {

    const i = req.params.ID

    res.send(Obj.find(x => x.id == i))

})

module.exports = router;