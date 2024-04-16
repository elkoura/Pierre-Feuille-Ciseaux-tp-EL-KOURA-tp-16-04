// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'C:/Users/fouad/Desktop/Pierre-Feuille-Ciseaux-tp-EL-KOURA/config/database.js' // Spécifiez le chemin vers votre fichier de base de données SQLite
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection reussit.');
  })
  .catch(err => {
    console.error('pas connet:', err);
  });

module.exports = sequelize;
