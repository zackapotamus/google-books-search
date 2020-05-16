const router = require("express").Router();
const bookRoutes = require("./books");
const searchRoutes = require("./search");

// Search route(s)
router.use("/search", searchRoutes);
// Book routes
router.use("/books", bookRoutes);

module.exports = router;
