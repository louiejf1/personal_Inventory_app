const express = require('express');
const Wishlist = require('../../models/Wishlist');
const router = express.Router();

router.get('/wishlist', (req, res) => {
    Wishlist.find().then(wishlist => res.json(wishlist))

});

router.post('/wishlist', (req, res) => {
    const newItem = new ItemInfo({
        title: req.body.title
    })
    newItem.save().then(wishlist => res.json(wishlist))
})
module.exports = router;