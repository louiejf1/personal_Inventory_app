const router = require("express").Router();
const inventoryItemsRoutes = require("./inventoryItems");
const usersRoute = require("./users");
const authRoute = require("./auth");

// routes
router.use("/inventoryItems", inventoryItemsRoutes);
router.use("/api/users", usersRoute);
router.use("/api/auth", authRoute);



module.exports = router;
