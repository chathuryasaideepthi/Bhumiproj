const Feedback = require('../models/Feedback');

// POST /api/feedback - Submit feedback
exports.submitFeedback = async (req, res) => {
  const { name, email, role, comments, rating } = req.body;

  try {
    const feedback = await Feedback.create({ name, email, role, comments, rating });
    res.json({ message: 'Feedback submitted successfully', feedback });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};
