const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB;

const initializeDatabase = () => {
  if (!mongoURI) {
    console.error('environment variable not defined!');
  } else {
    mongoose
      .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('connected to mongoDB'))
      .catch(error => console.error('error connecting to mongoDB:', error));
  }
};

module.exports = initializeDatabase;