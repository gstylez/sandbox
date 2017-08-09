const express = require('express');
// middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// application
const app = express();


// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Pug Preview
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

// 404
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error Handler
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

// Server
app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
});



/*
			Notes:
				Middleware	(req, res, next) => {}
				Error Middleware (err, req, res, next) => {}
*/

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
