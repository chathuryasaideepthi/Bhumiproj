const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
    },
    method: {
      type: String,
      enum: ['Razorpay', 'PayPal', 'UPI'],
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Donation', donationSchema);
