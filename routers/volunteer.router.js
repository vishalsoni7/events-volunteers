const express = require('express');
const volunteerRouter = express.Router();
const Volunteer = require('../models/volunteer.model');

volunteerRouter.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers)
  } catch (error) {
    res.status(500).json(error)
  }
})

volunteerRouter.post('/', async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save()
    res.status(201).json(volunteer)
  } catch (error) {
    res.status(500).json(error)
  }
})

volunteerRouter.put('/:id', async (req, res) => {
  const volunteerId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(volunteerId, updatedData, { new: true });
    if (!updatedVolunteer) {
      return res.status(404).json('volunteer not fount!')
    }
    res.status(200).json(updatedVolunteer)
  } catch (error) {
    res.status(500).json(error)
  }
})

volunteerRouter.delete('/:id', async (req, res) => {
  const volunteerId = req.params.id;
  try {
    const deletedVolunteer = await Volunteer.findByIdAndRemove(eventId);
    if (!deletedVolunteer) {
      return res.status(404).json('volunteer not found!')
    }
    res.status(200).json(deletedVolunteer)
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = volunteerRouter