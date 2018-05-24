var express = require('express')
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var mongoose = require("mongoose");

var app = express()

mongodb.connect("mongodb://localhost:27017/?");
mongoose.connect("mongodb://localhost:27017/patricia-db");

var router = express.Router()
app.use(express.static(__dirname + '/public'));
app.use(express.static('/index.html'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 

var form1 = new mongoose.Schema({
    firstName: String,
    email: String,
    password: String
  });

var User = mongoose.model("User", form1);

User.create({
    firstName: 'Patricia',
    email: 'shirazipatricia@gmail.com',
    password: '1234'
})

app.post('/', function(req, res) {
  var myData = new User(req.body);
    myData.save()
      .then(item => {
         res.send("item saved to database");
    })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
});

app.listen(3000, () => console.log('listening to 3000'))