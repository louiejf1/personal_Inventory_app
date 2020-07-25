const router = require("express").Router();
const wishlistsController = require('../../controllers/wishlistsController');

router.route("/")
    .get(wishlistsController.findAll)
    .post(wishlistsController.create);

router
    .route("/:id")
    .get(wishlistsController.findById)
    .delete(wishlistsController.remove);

module.exports = router;