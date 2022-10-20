const express = require('express');
const router = express.Router();

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false

    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }

]


router.post("/vote/", function (req, res) {

    const voting_age = req.query.VotingAge

    const F = []

    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age >= voting_age) {

            F.push(persons[i])

            persons[i].votingStatus = true

        }
    }
    res.send( {data: F , status: true})
})


    //     const legalage = req.query.VotingAge

    //    const F = map(x => {if (x.age >= legalage) return x} )


    //     res.send( {data: F , status: true})
    // })


module.exports = router;