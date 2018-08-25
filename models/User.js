// Import Dependencies
const mongoose = require("mongoose");

// Creating a Schema
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  }
});

// Export Model
module.exports = mongoose.model("User", userSchema);
