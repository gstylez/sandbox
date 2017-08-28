// Require Express
var express = require('express');
var mysql = require('mysql');

var app = express();
// Require Middleware
const bodyParser = require('body-parser');



// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Pug Preview
app.set('view engine', 'pug');




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'devpicker'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()






// Server
app.listen(3000, () => {
	console.log('Local Server is running on port 3000 ===> http://localhost:3000')
});
