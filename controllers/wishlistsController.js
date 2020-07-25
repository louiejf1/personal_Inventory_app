const wishdb = require("../models");

module.exports = {
    findAll: function (req, res) {
        wishdb.Wishlist
            .find(req.query)
            .then(wishdbModel => res.json(wishdbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        wishdb.Wishlist
            .findById(req.params.id)
            .then(wishdbModel => res.json(wishdbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        wishdb.Wishlist
            .create(req.body)
            .then(wishdbModel => res.json(wishdbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        wishdb.Wishlist
            .findById({ _id: req.params.id })
            .then(wishdbModel => wishdbModel.remove())
            .then(wishdbModel => res.json(wishdbModel))
            .catch(err => res.status(422).json(err));
    }

}