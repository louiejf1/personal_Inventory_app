const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    title: String,
    purchased: {
        type: Boolean,
        default: false
    }
})

module.exports = Wishlist = mongoose.model('wishlist', WishlistSchema);
