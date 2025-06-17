// eventController.js
const Event = require('../models/Event');

// GET /api/events - Fetch all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

// ✅ POST /api/events - Create new event
exports.createEvent = async (req, res) => {
  try {
    const { title, date, description, ticketsAvailable, ticketPrice } = req.body;
    const event = new Event({ title, date, description, ticketsAvailable, ticketPrice });
    await event.save();
    res.status(201).json({ message: 'Event created', event });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};
