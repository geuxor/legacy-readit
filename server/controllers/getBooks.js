const db = require('../models/index');

async function getBooks(req, res) {
  try {
    const books = await db.Book.findAll({});

    // const newBooks = books.map((book) => {
    //   return {
    //     volumeInfo: book,
    //   };
    // });

    res.status(200);
    res.send(books);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = getBooks;
