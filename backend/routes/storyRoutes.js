// routes/storyRoutes.js
const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');

// GET all stories
router.get('/', storyController.getStories);

// ✅ POST new story
router.post('/', storyController.createStory);

module.exports = router;
