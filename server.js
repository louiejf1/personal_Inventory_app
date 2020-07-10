const express = require("express");
const mongoose = require("mongoose"); // Added 7-10-2020
const path = require("path");
const routes = require("./routes"); // Aadded 7-10-2020
const PORT = process.env.PORT || 3001;
const app = express();


// Middleware - added 7-10-2020
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personalinventory"); // Aadded 7-10-2020


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
