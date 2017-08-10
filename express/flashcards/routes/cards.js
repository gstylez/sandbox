const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// Render Cards Route

// router.get('/', (req, res) => {
// 	res.render('card', { prompt: "Who is buried..", hint: "Think about who's tomb it is." });
// });

router.get('/', (req, res) => {
	res.render('card', {
    prompt: cards[0].question,
    hint: cards[0].hint
  });
});

module.exports = router;
