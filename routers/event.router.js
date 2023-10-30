const express = require('express');
const eventRouter = express.Router();
const Event = require('../models/event.model');

eventRouter.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events)
  } catch (error) {
    res.status(500).json(error)
  }
})

eventRouter.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save()
    res.status(201).json(event)
  } catch (error) {
    res.status(500).json(error)
  }
})

eventRouter.put('/:id', async (req, res) => {
  const eventId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedData, { new: true });
    if (!updatedEvent) {
      return res.status(404).json('event not fount!')
    }
    res.status(200).json(updatedEvent)
  } catch (error) {
    res.status(500).json(error)
  }
})

eventRouter.delete('/:id', async (req, res) => {
  const eventId = req.params.id;
  try {
    const deletedEvent = await Event.findByIdAndRemove(eventId);
    if (!deletedEvent) {
      return res.status(404).json('patient not found!')
    }
    res.status(200).json(deletedEvent)
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = eventRouter