const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  skills: [String],
  contact: Number,
  availability: Boolean,
  areaOfInterest: [String]
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema)

module.exports = Volunteer