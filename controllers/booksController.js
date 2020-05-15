const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  searchBooks: function (req, res) {
    console.log(req.query);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: `title:${req.query.query}`,
          key: process.env.API_KEY,
        },
      })
      .then((result) =>
        res.json(
          result.data.items.map((item) => ({
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description || "No description",
            image: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.previewLink || "#",
          }))
        )
      )
      .catch((err) => res.status(422).json(err));
  },
};
