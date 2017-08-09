const express = require('express');
const router = express.Router();

// Render Cards Route
router.get('/', (req, res) => {
	res.render('card', { prompt: "Who is buried..", hint: "Think about who's tomb it is." });
});

module.exports = router;
