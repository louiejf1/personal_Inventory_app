const router = require("express").Router();
const inventoryItemsController = require("../../controllers/inventoryItemsController");

// Matches with "/api/inventoryItems"
router.route("/")
  .get(inventoryItemsController.findAll)
//.post(inventoryItemsController.create);

// Matches with "/api/inventoryItems/:id"
// router
//   .route("/:id")
//   .get(inventoryItemsController.findById)
//   .put(inventoryItemsController.update)
//   .delete(inventoryItemsController.remove);

module.exports = router;
