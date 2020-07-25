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
    invItemDescription:
      "track shoes",
    invItemImgUrl: "https://images-na.ssl-images-amazon.com/images/I/615V7krmNQL._AC_UY500_.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "closet",
    invItemName: "ripped jeans",
    invItemDescription:
      "blue ripped jeans that i love",
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
  },
  {
    invCategory: "closet",
    invItemName: "3 pairs of White Socks",
    invItemDescription:
      "only ones I can find",
    invItemImgUrl: "https://cdn5.vectorstock.com/i/thumb-large/97/24/socks-eps-vector-25179724.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "donations",
    invItemName: "Blue Dress",
    invItemDescription:
      "last worn 5 years ago",
    invItemImgUrl: "https://cdn2.vectorstock.com/i/thumb-large/81/56/woman-in-a-blue-dress-vector-7498156.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "paperwork",
    invItemName: "Medical Bill",
    invItemDescription:
      "from 06/25/2020",
    invItemImgUrl: "https://images.sampletemplates.com/wp-content/uploads/2018/12/Sample-Medical-Doctor-Bill-Receipt-Template.jpg?width=320",
    date: new Date(Date.now())
  },
  {
    invCategory: "paperwork",
    invItemName: "TV warrenty",
    invItemDescription:
      "5 year warrenty",
    invItemImgUrl: "https://www.buydig.com/shop/product-image.aspx?size=500&picId=60513",
    date: new Date(Date.now())
  },
  {
    invCategory: "collectables",
    invItemName: "Figurine",
    invItemDescription:
      "PG 1/60 RX-0 UNICORN GUNDAM",
    invItemImgUrl: "https://p-bandai.com/img/us/p/m/N2266770001001_003.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "collectables",
    invItemName: "Batman Funko",
    invItemDescription:
      "Vinyl Figure Batman",
    invItemImgUrl: "https://d9nvuahg4xykp.cloudfront.net/-4928325332038320662/-9090710125196421257.jpg",
    date: new Date(Date.now())
  },
  {
    invCategory: "paperwork",
    invItemName: "Home warranty",
    invItemDescription:
      "home warranty",
    invItemImgUrl: "https://image.slidesharecdn.com/kwhomebuyingpacket-131014212700-phpapp01/95/kw-home-buyingpacket-30-638.jpg?cb=1381786127",
    date: new Date(Date.now())
  },
  {
    invCategory: "collectables",
    invItemName: "Playstation 4 PRO",
    invItemDescription:
      "PS4",
    invItemImgUrl: "https://media.wired.com/photos/5a99f809b4bf6c3e4d405abc/master/w_2560%2Cc_limit/PS4-Pro-SOURCE-Sony.jpg",
    date: new Date(Date.now())
  },
]


db.inventoryItems
  .deleteMany({})
  .then(() => db.inventoryItems.collection.insertMany(inventoryItemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
