const express = require('express');
const app = express()
app.use(express.static(__dirname + '/client'))

app.listen(3000, () => console.log('Listening on port 3000!'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/index.html")
    console.log('Hello!')
});

app.post('/', (req, res) => {
    var arr = []
    console.log('recebi um post')
   var data = '';
    req.on('data', function(chunk) {
      data += chunk;
      var obj = JSON.parse(data)
      
   var arr = ['firstName','lastName','county','city','role','sales'];
   var parsing = function(obj) {
       for (key in obj) {
        if (key !== 'children') {
          arr.push(obj[key])
           } else if (key === 'children') {
              if (obj.children.length > 0) {
                 for (var i =  0; i < obj.children.length; i ++) {
                parsing(obj.children[i]);  
           }
          }
        }
       }
       return arr;
      }
parsing(obj)

var str = arr.join()
      res.send(str)
    });
});
// "firstName": "Joshie",
// "lastName": "Wyattson",
// "county": "San Mateo",
// "city": "San Mateo",
// "role": "Broker",
// "sales": 1000000,
// "children