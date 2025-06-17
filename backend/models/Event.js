const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ticketsAvailable: {
    type: Number,
    required: true,
    min: 0
  },
  ticketPrice: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt
});

module.exports = mongoose.model('Event', eventSchema);
