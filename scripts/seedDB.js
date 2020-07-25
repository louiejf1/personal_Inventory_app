// Added file on 7-10-2020
const mongoose = require("mongoose");
const db = require("../models/inventoryItems");

// This file empties the collection and inserts the collection below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/personalinventory",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);


const inventoryItemsSeed = [
  {
    invCategory: "closet",
    invItemName: "shoes",
    color: "black and gold",
    invItemDescription:
      "track shoes",
    invItemImgUrl: "https://images-na.ssl-images-amazon.com/images/I/615V7krmNQL._AC_UY500_.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "closet",
    invItemName: "ripped jeans",
    color: "blue",
    invItemDescription:
      "ripped jeans that i love",
    invItemImgUrl: "https://img.ltwebstatic.com/images3_pi/2019/12/03/157537312103abcf00018c78fb89518c6757bf9260_thumbnail_900x.webp",
    date: new Date(Date.now())
  },
  {
    invCategory: "collectables",
    invItemName: "baseball card",
    invItemDescription:
      "Babe Ruth",
    invItemImgUrl: "https://i.ebayimg.com/thumbs/images/g/JCgAAOSwYOxeD4rU/s-l225.webp",
    date: new Date(Date.now())
  },
  {
    invCategory: "collectables",
    invItemName: "Funko Dwight",
    invItemDescription:
      "Dwight Funko from The Office Collection",
    invItemImgUrl: "https://media.gamestop.com/i/gamestop/11098542/POP-TV-The-Office-Dwight-Schrute-with-Gelatin-Stapler?$pdp$",
    date: new Date(Date.now())
  },
  {
    invCategory: "paperwork",
    invItemName: "ID",
    invItemDescription:
      "California DL",
    invItemImgUrl: "https://s.driving-tests.org/img/license/california-drivers-license.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "paperwork",
    invItemName: "Phone Warranty",
    invItemDescription:
      "1 year Warranty",
    invItemImgUrl: "https://www.disclaimkit.com/blog/wp-content/uploads/2016/01/warranty-template-screenshot.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "donations",
    invItemName: "blue shirt",
    invItemDescription:
      "not worn in over 3 years",
    invItemImgUrl: "https://ragstock.com/wp-content/uploads/tie-dye-shirts-royal-front.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "donations",
    invItemName: "Red Dress",
    invItemDescription:
      "too small and can't return",
    invItemImgUrl: "https://cdn3.vectorstock.com/i/1000x1000/22/87/red-dress-on-hanger-vector-12892287.jpg",
    date: new Date(Date.now())
  }
]





