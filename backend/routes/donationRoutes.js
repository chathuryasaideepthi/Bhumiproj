// backend/routes/donationRoutes.js
const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

// POST: Add a new donation
router.post('/', donationController.createDonation);

// ✅ GET: Fetch all donations
router.get('/', donationController.getDonations);

module.exports = router;
