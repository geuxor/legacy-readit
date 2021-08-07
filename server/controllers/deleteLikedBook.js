const db = require('../models/index');

async function deleteLikedBook(req, res) {
  console.log(req.body)
  try {
    const deletedBook = await db.Book.destroy({
      where: {
        id: req.body,
      },
    }).then(function(deletedRow) {
      if (deletedRow === 1) {
        res.status(200).json({message:"Deleted successfully"});
      } else {
        res.status(404).json({message:"record not found"})
      }
    })
  } catch (error) {
    res.status(500)
    console.log(error)
  }
}

module.exports = deleteLikedBook;
