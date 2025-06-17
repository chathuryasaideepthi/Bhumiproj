// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// GET all events
router.get('/', eventController.getEvents);

// ✅ Add POST route to create event
router.post('/', eventController.createEvent);

module.exports = router;
