const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  .delete(booksController.remove);

// Matches with "/api/books/search/:query"
router
  .route("/search/")
  .get(booksController.searchBooks);

module.exports = router;
