const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  date: Date,
  location: String,
  description: String,
  requiredVolunteers: [
    {
      role: String,
      number: Number,
    },
  ],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;