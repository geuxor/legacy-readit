const db = require('../models/index');

async function postBook(req, res) {
  console.log(req.body);
  
  try {
    const book = await db.Book.create({
      title: req.body.volumeInfo.title,
      description: req.body.volumeInfo.description,
      id: req.body.id,
      publishedDate: req.body.volumeInfo.publishedDate,
      image: req.body.volumeInfo.imageLinks.thumbnail,
      author: req.body.volumeInfo.author
    });
    console.log(book);
    
    res.status(201);
    res.send(book);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}

module.exports = postBook;
