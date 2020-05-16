const axios = require("axios");

// Defining methods for the booksController
module.exports = {
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
