const router = require("express").Router();
const inventoryItemsRoutes = require("./inventoryItems");

// routes
router.use("/inventoryItems", inventoryItemsRoutes);

module.exports = router;
