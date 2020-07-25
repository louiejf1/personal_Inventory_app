const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const inventoryItemSchema = new Schema({

    invCategory: { type: String, required: true },
    invItemName: { type: String, required: true },

    //color: { type: String, required: true },

    invItemDescription: String,
    invItemImgUrl: String,
    important: { type: Boolean, default: false },

    date: { type: Date, default: Date.now }


});
// const inventoryItemsSchema = new Schema({

//     closet: { type: mongoose.Schema.Types.ObjectId, ref: "closet" },
//     collectibles: { type: mongoose.Schema.Types.ObjectId, ref: "collectibles" },
//     paperwork: { type: mongoose.Schema.Types.ObjectId, ref: "paperwork" },
//     donations: { type: mongoose.Schema.Types.ObjectId, ref: "donations" }

// });
// const closetSchema = new Schema({
//     invCategory: { type: String, required: true },
//     invItemName: { type: String, required: true },

//     color: { type: String, required: true },
//     invItemDescription: String,
//     invItemImgUrl: String,

//     invItemDescription: String,
//     important: { type: Boolean, default: false },

//     date: { type: Date, default: Date.now }
// });

// const collectiblesSchema = new Schema({
//     invCategory: { type: String, required: true },
//     invItemName: { type: String, required: true },
//     invItemDescription: String,

//     invItemImgUrl: String,

//     important: { type: Boolean, default: false },

//     date: { type: Date, default: Date.now }
// });

// const paperworkSchema = new Schema({
//     invCategory: { type: String, required: true },
//     invItemName: { type: String, required: true },

//     important: { type: Boolean, default: false },
//     invItemImgUrl: String,

//     invItemDescription: String,
//     important: { type: Boolean, default: false },

//     date: { type: Date, default: Date.now }
// });

// const donationsSchema = new Schema({
//     invCategory: { type: String, required: true },
//     invItemName: { type: String, required: true },
//     invItemDescription: String,

//     invItemImgUrl: String,

//     important: { type: Boolean, default: false },

//     date: { type: Date, default: Date.now }
// });

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema);
//const closets = mongoose.model("closet", closetSchema);
// const collectibles = mongoose.model("collectibles", collectiblesSchema);
// const paperwork = mongoose.model("paperwork", paperworkSchema);
// const donations = mongoose.model("donations", donationsSchema);


module.exports =
    //     inventoryItems: inventoryItems,
    InventoryItem;
//     collectibles: collectibles,
//     paperwork: paperwork,
//     donations: donations
// };

