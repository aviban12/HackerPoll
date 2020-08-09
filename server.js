var express = require('express');
const bodyParser = require('body-parser');
var app = express()
var http = require('http').Server(app)
var mongoose = require('mongoose');


const uri = "mongodb+srv://avishbansal2:xgyVem4mfbV37yDd@cluster0-lstro.mongodb.net/User?retryWrites=true&w=majority"

app.use(bodyParser.json());
var Hackerdata = mongoose.model('Data', {
    name: String,
    challanges: String,
    expertise: String,
    DS: String,
    Algo: String,
    Cpp: String,
    python: String,
    vote: Number
})


app.get('/retrievedata', (req, res) => {
    console.log("function called");
    Hackerdata.find({}, (err, data) => {
        res.send(data)
    });
})

app.post('/adddata', (req, res) => {
    var data = new Hackerdata(req.body);
    data.save();
    res.json({
        success: true
    });
})

app.post('/updatevote', (req, res) => {
    const filter = { _id: req.body.id };
    const update = {
        $set: { vote: req.body.vote }
    };
    Hackerdata.findByIdAndUpdate(req.body.id, update, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log("Updated user", docs);
        }
    });
    res.json({
        success: true
    })
});

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (err === null) {
            console.log("Database connection successfull");
        } else {
            console.log("Connection failed")
        }
    })

var server = http.listen(process.env.PORT || 3000, () => {
    console.log("Server connection successfull", server.address().port)
})