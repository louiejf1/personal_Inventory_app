// Added file on 7-10-2020
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/personalinventory"
  );


  const inventoryItemsSeed = [
    {
      invCategory: "closet",
      invItemName: "shoes",
      invItemDescription:
        "track shoes",
      date: new Date(Date.now())
    },
    {
        invCategory: "collectable",
        invItemName: "baseball card",
        invItemDescription:
          "Babe Ruth",
        date: new Date(Date.now())
      },
      {
        invCategory: "document",
        invItemName: "ID",
        invItemDescription:
          "California DL",
        date: new Date(Date.now())
      }
]

db.inventoryItems
  .remove({})
  .then(() => db.inventoryItems.collection.insertMany(inventoryItemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  