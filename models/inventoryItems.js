const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventoryItemsSchema = new Schema({
    
    // grabs data from other schemas based on ID

});

const closetSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },
    color:{type: String, required: true},
    invItemDescription: String,
    date: { type: Date, default: Date.now }
});

const collectiblesSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },
    invItemDescription: String,
    date: { type: Date, default: Date.now }
});

const paperworkSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },
    important: {type: Boolean, default: false},
    date: { type: Date, default: Date.now }
});

const donationsSchema = new Schema({
    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },
    invItemDescription: String,
    date: { type: Date, default: Date.now }
});

const inventoryItems = mongoose.model("inventoryItems", inventoryItemsSchema);
const closet = mongoose.model("closet", closetSchema);
const collectibles = mongoose.model("collectibles", collectiblesSchema);
const paperwork = mongoose.model("paperwork", paperworkSchema);
const donations = mongoose.model("donations", donationsSchema);


module.exports = {
    inventoryItems: inventoryItems,
    closet: closet,
    collectibles: collectibles,
    paperwork: paperwork,
    donations: donations
};