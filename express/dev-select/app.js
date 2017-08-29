//** Const Variables

// Require Express
const express = require('express');

// Require Middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'devpicker'
});
connection.connect();

var picker = {
  branch: 'Preview 1',
  developer: 'Carlos',
  active: '1',
  expires: '2017-03-03'
}

var query = connection.query('insert into picker set ?', picker, function (err, result){
  if (err) {
    console.log(err);
    return;
  }
  console.error(result);
  // console.log(query.sql);
});

// connection.connect(function(err) {
//   if(!!err) {
//     console.log('Error');
//   } else {
//     console.log('Connected');
//   }
// });
//
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err
//
//   console.log('The solution is: ', rows[0].solution)
// })
//
// connection.end()

// App Variable
const app = express();

//** App Object

// Body Parser
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
//
// // Ref Static Assets
// app.use('/static', express.static('public'));
//
// // Pug Preview
// app.set('view engine', 'pug');
//
// // Render Index
// app.get('/', (req, res) => {
//   // res.render('index');
//   // connection.query('SELECT * FROM mySampleTable', function(err, rows, fields) {
//   //   if(!!err) {
//   //     console.log('Error in the query');
//   //   } else {
//   //     console.log('Successful');
//   //   }
//   // });
// });
//













// Server
app.listen(3000, () => {
	console.log('Local Server is running on port 3000 ===> http://localhost:3000')
});
