const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// setting up db repo


const inventorySchema = new Schema({
    closet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Closet"
    }],
    paperwork:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Paperwork"
    }],
    collectibles:[{
        types: mongoose.Schema.Types.ObjectId,
        ref:"Collectibles"
    }],
    donations:[{
        types: mongoose.Schema.Types.ObjectId,
        ref:"donations"
    }]
})

const closet = new Schema ({
        // key for Closet
        closet:{
            // url or string???
            id: id,
            image: url,
            title: {type: String, required: true},
            color: {type: String, required: true},
            description: String,
            date: {type: Date, default: Date.now},
            favorites: {type: Boolean, default: false}
        }
})

const paperwork = new Schema ({
    // key for Closet
    closet:{
        // url or string???
        id: id,
        image: url,
        title: {type: String, required: true},
        description: String,
        date: {type: Date, default: Date.now},
        expiration: String,
        expired: {type: Boolean, default: false}
    }
})

const collectibles = new Schema ({
    // key for Closet
    closet:{
        // url or string???
        id: id,
        image: url,
        title: {type: String, required: true},
        description: String,
        date: {type: Date, default: Date.now},
        favorites: {type: Boolean, default: false}
    }
})

const donations = new Schema ({
    // key for Closet
    closet:{
        // url or string???
        id: id,
        image: url,
        title: {type: String, required: true},
        description: String,
        date: {type: Date, default: Date.now},
        receipt: url
    }
})

const Inventory = mongoose.model("Inventory",inventorySchema);
const closet = mongoose.model("closet",closetSchema);
const paperwork = mongoose.model("paperwork",paperworkSchema);
const collectibles = mongoose.model("collectibles",collectiblesSchema);
const donations = mongoose.model("donations",donationsSchema);


module.exports = {
    Inventory: Inventory,
    closet: closet,
    paperwork: paperwork,
    collectibles: collectibles,
    donations: donations
}