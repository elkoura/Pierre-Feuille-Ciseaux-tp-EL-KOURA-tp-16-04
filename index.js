const express = require('express');
const app = express();
const { connectToServer } = require('./config/mongoConfig');

connectToServer((error) => {
  if (error) {
    console.error(error);
    process.exit();
  }

  const gameRouter = require('./router/gameRouter');
  app.use('/game', gameRouter);

  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
