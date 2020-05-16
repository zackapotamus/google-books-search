const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/search"
router
  .route("/")
  .get(searchController.searchBooks);

module.exports = router;
