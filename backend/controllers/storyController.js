// controllers/storyController.js
const Story = require('../models/Story');

// GET all stories
exports.getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stories' });
  }
};

// ✅ POST /api/stories - Create a new story
exports.createStory = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;
    const newStory = new Story({ title, content, imageUrl });
    await newStory.save();
    res.status(201).json({ message: 'Story created', story: newStory });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create story' });
  }
};
