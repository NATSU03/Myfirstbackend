const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { middl1 } = require('./middlewares/commonMiddlewares.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middl1)

mongoose.connect("mongodb+srv://vishwasw75:9595335675@firstcluster.jde07cq.mongodb.net/Alien", {
    useNewUrlParser: true
}).then( () => console.log("MongoDb is connected")).catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
