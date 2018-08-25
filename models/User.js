// Import Dependencies
const mongoose = require("mongoose");

// Creating a Schema
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    default: 0
  }
});

// Export Model
module.exports = mongoose.model("User", userSchema);
