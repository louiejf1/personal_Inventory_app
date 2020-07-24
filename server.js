const express = require("express");
const mongoose = require("mongoose"); // Added 7-10-2020
const routes = require("./routes");
const path = require("path");
const config = require('config');
const fileUpload = require('express-fileupload');
const inventoryItems = require("./routes/api/inventoryItems");

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
app.use(routes)
app.use("/inventory",inventoryItems)

app.use(fileUpload());

//Upload Endpoint from React
app.post('/upload', (req, res) => {
  if (req.files === null) {

    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  })
})

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
