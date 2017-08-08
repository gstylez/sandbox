
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));

// Pug Preview
app.set('view engine', 'pug');

// Render Index Route
app.get('/', (req, res) => {
	res.render('index');
});

// Render Cards Route
app.get('/cards', (req, res) => {
	res.render('card', { prompt: "Who is buried..", hint: "Think about who's tomb it is." });
});

// Render Hello Route
app.get('/hello', (req, res) => {
	console.dir(req.body);
	res.render('hello');
});






// /sandbox
// First Name | Last Name



// Route one
// app.get('/old-index', (req, res) => {
// 	res.send('<h1>I love design!</h1>');
// });

// Route two
// app.get('/hello', (req, res) => {
// 	res.send('<h1>Hello!! Welcome.</h1>');
// });

// Server
app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
});
