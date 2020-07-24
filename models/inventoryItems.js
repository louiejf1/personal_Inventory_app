const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const inventoryItemsSchema = new Schema({

  item:{
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },

    color: { type: String, required: true },
    invItemDescription: String,
    invItemImgUrl: String,

    invItemDescription: String,
    important: { type: Boolean, default: false },

    date: { type: Date, default: Date.now }
  }

});



const inventoryItems = mongoose.model("inventoryItems", inventoryItemsSchema);



module.exports = {
    inventoryItems: inventoryItems,
};