const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventoryItemsSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },
    invItemDescription: String,
    date: { type: Date, default: Date.now }
});

const inventoryItems = mongoose.model("inventoryItems", inventoryItemsSchema);

module.exports = inventoryItems;