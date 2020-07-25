const router = require("express").Router();
const inventoryItemRoutes = require("./inventoryItems");
const usersRoute = require("./users");
const authRoute = require("./auth");
const wishlistRoutes = require("./wishlists");


// routes
router.use("/inventoryItems", inventoryItemRoutes);
router.use("/api/users", usersRoute);
router.use("/api/auth", authRoute);
router.use("/api/wishlists", wishlistRoutes);


module.exports = router;
