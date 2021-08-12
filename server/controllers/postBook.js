const db = require('../models/index');

async function postBook(req, res) {
  // console.log(req.body)

  try {
    const book = await db.Book.create({
      google_id: req.body.id,
      title: req.body.volumeInfo.title,
      description: req.body.volumeInfo.description,
      publishedDate: req.body.volumeInfo.publishedDate,
      image: req.body.volumeInfo.imageLinks.thumbnail,
      author: req.body.volumeInfo.author
    });

    // console.log(book);
    res.status(200);
    res.send(book);
  } catch (err) {
    console.log(err);

    res.status(501);
    res.send(err);
  }
}

module.exports = postBook;
