import { Book, Result } from '../type.d';

export const getBooksFromDb = async (): Promise<Book[]>  => {
  const data = await fetch('http://localhost:4000/books');
  return await data.json();
};

export const postBooksToDb = async (book: Result): Promise<Book> => {
  const data = await fetch('http://localhost:4000/books', {
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

interface BookId {
  message: string;
}

export const deleteBookFromDb = async (bookID: number ): Promise<BookId> => {
  const data = await fetch(`http://localhost:4000/books/${bookID}`, {
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
