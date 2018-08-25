// Import Environment Variables
require("dotenv").config();

// Import Dependencies
const express = require("express");
const stripe = require("stripe")(process.env.SRTIPE_SECRET_KEY);

// Initialize Router
const router = express.Router();

// Import Models
const User = require("../../models/User");

// All Stripe Routes
// POST => /api/stripe
router.post("/stripe", async (req, res) => {
  const charges = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "$5 for 5 credits",
    source: req.body.id
  });
  const updateCredits = await User.findByIdAndUpdate(req.user.id, {
    credits: req.user.credits + 5
  });
  const user = await User.findById(req.user.id);
  res.status(200).json(user);
});

// Export Router
module.exports = router;
