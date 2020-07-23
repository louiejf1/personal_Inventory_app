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
<<<<<<< HEAD
  }

});

=======
});

const collectiblesSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },
    invItemDescription: String,

    invItemImgUrl: String,

    important: { type: Boolean, default: false },

    date: { type: Date, default: Date.now }
});

const paperworkSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },

    important: { type: Boolean, default: false },
    invItemImgUrl: String,

    invItemDescription: String,
    important: { type: Boolean, default: false },

    date: { type: Date, default: Date.now }
});

const donationsSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },
    invItemDescription: String,

    invItemImgUrl: String,

    important: { type: Boolean, default: false },
>>>>>>> 47b2db553310320352d94a073a22f4967ad4a1fa


const inventoryItems = mongoose.model("inventoryItems", inventoryItemsSchema);



module.exports = {
    inventoryItems: inventoryItems,
};