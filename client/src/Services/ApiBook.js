const ApiBook = {};

// ApiBook.getBooks = (book) => {
//   return fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=${book}&orderBy=relevance&key=${process.env.REACT_APP_API_KEY}&maxResults=40`
//   ).then((response) => {
//     return response.json();
//   });
// };

ApiBook.getBooks = async (book) => {
  const data = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${book}&orderBy=relevance&key=${process.env.REACT_APP_API_KEY}&maxResults=40`)
  return await data.json()
}

export default ApiBook;
