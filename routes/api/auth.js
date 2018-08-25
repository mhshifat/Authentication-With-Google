// Import Dependencies
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Import Models
const User = require("../../models/User");

// Import Environment Variables
require("dotenv").config();

// Google Authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLECIENTID,
      clientSecret: process.env.GOOGLESECRETKEY,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const foundUser = await User.findOne({ googleId: profile.id });
      if (foundUser) return done(null, foundUser);
      const newUser = await User.create({ googleId: profile.id });
      done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const foundUser = await User.findById(id);
  done(null, foundUser);
});

// Setup router
const router = express.Router();

// All /auth/google Routes
// GET => /auth/google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// GET => /auth/google/callback
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/dashboard");
});

// GET => /auth/current
router.get("/current", (req, res) => {
  res.status(200).json(req.user);
});

// GET => /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json(req.user);
});

// Export Router
module.exports = router;
