// mongoConfig.js

const { MongoClient } = require('mongodb');

const uri = "Vmongodb+srv://elkoura:<password>@atlascluster.efbhovl.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbConnection;

const connectToServer = (callback) => {
  client.connect((err, db) => {
    if (err || !db) {
      return callback(err);
    }

    dbConnection = db.db("PIERRE-FEUILLE-CISEAUX"); // Remplacez avec le nom de votre base de données
    console.log("Successfully connected to MongoDB.");

    return callback();
  });
};

const getDb = () => {
  return dbConnection;
};

module.exports = { connectToServer, getDb };
