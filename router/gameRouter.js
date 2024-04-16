const express = require('express');
const router = express.Router();
const gameRouter = require('./gameRouter');


const scores = { win: 0, lose: 0, tie: 0 };

router.get('/score', (req, res) => {
  res.json(scores);
});

router.put('/score/:win/:lose/:tie', (req, res) => {
  scores.win = parseInt(req.params.win);
  scores.lose = parseInt(req.params.lose);
  scores.tie = parseInt(req.params.tie);
  res.json(scores);
});

router.post('/restart', (req, res) => {
  scores.win = 0;
  scores.lose = 0;
  scores.tie = 0;
  res.json(scores);
});

// Add the logic for /play/:action route

module.exports = router;

