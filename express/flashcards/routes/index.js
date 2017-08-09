const express = require('express');
const router = express.Router();

// Render Index Route
router.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render('index', { name });
	} else {
		res.redirect('/hello');
	}
});

// Render Hello Route
router.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

// Render Hello Route 'Post'
router.post('/hello', (req, res) => {
	// res.json(req.body);
	res.cookie('username', req.body.username);
	res.redirect('/');
});

// Render Goodbye Route 'Post'
router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('hello');
});

module.exports = router;
