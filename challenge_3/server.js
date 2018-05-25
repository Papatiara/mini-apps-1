var express = require('express')
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var mongoose = require("mongoose");

var app = express()

mongodb.connect("mongodb://localhost:27017/?");
mongoose.connect("mongodb://localhost:27017/patricia-db");

var router = express.Router()
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 

var form1 = new mongoose.Schema({
    FirstName: String,
    Email: String,
    Password: String,
    Address: String,
    State: String,
    City: String,
    ZipCode: String,
    CreditCard: String,
    ExpiryDate: String,
    CVV:String,
    BillingZipcode: String
})

var User = mongoose.model("User", form1);

User.create({
    FirstName: 'Patricia',
    Email: 'shirazipatricia@gmail.com',
    Password: '1234',
    Address: '1371 Minna St',
    State: 'California',
    City: 'San Francisco',
    ZipCode: '93121',
    CreditCard: '182121371318',
    ExpiryDate: '92/09/00',
    CVV: '988',
    BillingZipcode: '92832'

})

app.post('/', function(req, res, next) {
  var myData = new User(req.body);
    myData.save()
      .then(item => {
         res.send("item saved to database");
    })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
});

app.get('', function(req, res) {
  res.redirect('')
})

app.listen(3000, () => console.log('listening to 3000'))