const ApiDb = {};

ApiDb.getBooksFromDb = async () => {
  const data = await fetch('http://localhost:3000/books');
  return data
};

ApiDb.postBooksToDb = async (book) => {
  const data = await fetch('http://localhost:3000/books', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book), // body data type must match "Content-Type" header
  });
  return await data.json();
};

ApiDb.deleteBookFromDb = async (bookID) => {
  const data = await fetch('http://localhost:3000/books', {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookID), // body data type must match "Content-Type" header
  });
  return await data.json();
}

module.exports = ApiDb
