// Import Dependencies
const express = require("express");
const session = require("cookie-session");
const mongoose = require("mongoose");
const passport = require("passport");
const color = require("colors");

// Import Environment Variables
require("dotenv").config();

// Database Connection
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
  () => {
    console.log(
      color.magenta(`==> A database Connection has been established`)
    );
  }
);

// Import App Routes
const authRoutes = require("./routes/api/auth");
const stripeRoutes = require("./routes/api/stripe");

// PORT Variable
const port = process.env.PORT || 5000;

// Initialize Express App
const app = express();

// Use Middlewares
app.use(
  session({
    name: "emaily",
    maxAge: 30 * 24 * 3600000,
    keys: [process.env.SESSION_KEYS]
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Setup App Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/auth", authRoutes);
app.use("/api", stripeRoutes);

// Listening To Port
app.listen(port, () => {
  console.log(
    color.magenta(`==> The server is running on http://localhost:${port}`)
  );
});
