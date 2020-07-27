const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes

router.use("/api", apiRoutes);
router.use("/", apiRoutes);

// If no API routes then send to React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;