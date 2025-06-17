const Donation = require('../models/Donation');
// const Razorpay = require('razorpay'); // Include this if you integrate Razorpay later

// POST /api/donations - Save donation
exports.createDonation = async (req, res) => {
  const { donorName, email, amount, method, transactionId } = req.body;

  try {
    const donation = await Donation.create({ donorName, email, amount, method, transactionId });
    res.json({ message: 'Donation saved successfully', donation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save donation' });
  }
};
exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch donations' });
  }
};