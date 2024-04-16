
const { getDb } = require('../config/mongoConfig');

let scores = { win: 0, lose: 0, tie: 0 };

const getServerAction = () => {
  const actions = ['pierre', 'feuille', 'ciseaux'];
  return actions[Math.floor(Math.random() * actions.length)];
};

const determineResult = (playerAction, serverAction) => {
  if (playerAction === serverAction) {
    return 'tie';
  }

  if (
    (playerAction === 'pierre' && serverAction === 'ciseaux') ||
    (playerAction === 'ciseaux' && serverAction === 'feuille') ||
    (playerAction === 'feuille' && serverAction === 'pierre')
  ) {
    scores.win++;
    return 'win';
  } else {
    scores.lose++;
    return 'lose';
  }
};

const gameController = {
  play: (req, res) => {
    const playerAction = req.params.action;
    const serverAction = getServerAction();
    const result = determineResult(playerAction, serverAction);

    res.json({
      playerAction,
      serverAction,
      result,
      updatedScores: scores
    });
  },

  score: (req, res) => {
    res.json(scores);
  },

  reset: (req, res) => {
    scores = { win: 0, lose: 0, tie: 0 };
    res.json(scores);
  },

  updateScore: (req, res) => {
    const { wins, loses, ties } = req.params;
    scores = {
      win: parseInt(wins),
      lose: parseInt(loses),
      tie: parseInt(ties)
    };
    res.json(scores);
  }
};

module.exports = gameController;
