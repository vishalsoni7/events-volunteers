const express = require('express');
const app = express();
const cors = require('cors');

const initializeDatabase = require('./db');
const volunteerRouter = require('./routers/volunteer.router');
const eventRouter = require('./routers/event.router');

initializeDatabase();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Assignment 22');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.use('/volunteers', volunteerRouter);

app.use('/events', eventRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// git push —set-upstream origin main