const router = require("express").Router();
const inventoryItemRoutes = require("./inventoryItems");
const usersRoute = require("./users");
const authRoute = require("./auth");
const wishlistRoute = require("./wishlist");


// routes
router.use("/inventoryItems", inventoryItemRoutes);
router.use("/api/users", usersRoute);
router.use("/api/auth", authRoute);
router.use("/api/wishlist", wishlistRoute);


module.exports = router;
