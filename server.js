const express = require("express");
const mongoose = require("mongoose"); // Added 7-10-2020
const path = require("path");
const config = require('config');
// const routes = require("./routes"); // Aadded 7-10-2020
const PORT = process.env.PORT || 3001;
const app = express();

//for Postman testing - added 7-14-20
app.get('/', (req, res) => res.send('API Running'));


// Middleware - added 7-10-2020
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personalinventory"); // Aadded 7-10-2020

// Add routes, both API and view
app.use(require('./routes/api'));

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
