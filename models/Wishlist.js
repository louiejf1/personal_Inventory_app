const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    title: String,
    purchased: {
        type: Boolean,
        default: false
    }
})

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
