import React, { useContext, useState, MouseEvent } from 'react';
import './SingleBook.css';
import Modal from '../Modal/Modal';
import StarRating from '../StarRating/StarRating';
import { postBooksToDb, deleteBookFromDb  } from '../../Services/ApiDb';
import { Book, Result } from '../../type.d';
import { AppContext } from '../../AppContext';

type Props = {
  book: Book | Result;
  fav: Boolean;
};


export default function SingleBook({book, fav}: Props): JSX.Element {
  const { myList, setMyList } = useContext(AppContext);
  const [showModal, setShowModal] = useState<boolean>(false);

  function openModal() {
    setShowModal((prevValue:boolean) => !prevValue);
  }
  async function handleClick(e: MouseEvent)  {
    if (!fav) {
      setMyList((prevValue: Book[]) => {
        return [...prevValue, book];
      });
      ('volumeInfo' in book) && await postBooksToDb(book);
    } else {
      const newList: Book[] = myList.filter((listBook: Book): Boolean => {
        // if it's a book? title matches
        if ('title' in book) {
          return listBook.title !== book.title;
          // else if it's a result -- title matches
        } else if ('volumeInfo' in book) {
          return listBook.title !== book.volumeInfo.title;
        } else {
          return true;
        }
      });
      setMyList(newList);
      ('title' in book) && await deleteBookFromDb(book.id);
    }
  }

  //conditional rendering
  return ('volumeInfo' in book) ? (
    <div className="single-book-container">
      <img alt='thumbnail'
        className="book-cover"
        src={book.volumeInfo.imageLinks?.thumbnail}
        />
      <div className="book-info">
        <h2 className='book-title'>{book.volumeInfo.title.substring(0, 50)}</h2>
        <h3>{book.volumeInfo.authors}</h3>
        <p className='book-date'>{book.volumeInfo.publishedDate}</p>
      </div>
      <StarRating />
      <div className="button-container">
        <button data-testid='add-to-list' className="button-single-book" onClick={handleClick}>
          {(fav) ? 'Delete book' : 'Add to List'}
        </button>
        <button data-testid='read-more' className="button-single-book" onClick={openModal}>
          Read more
        </button>
      </div>
      {showModal ? (
        <Modal
          openModal={openModal}
          book={book}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
      </div>
    ) : (
    <div className="single-book-container">
      <img alt='cover'
        className="book-cover"
        src={book.image}
      />
      <div className="book-info">
        <h2>{book.title.substring(0, 80) + '...'}</h2>
        <h3>{book.author}</h3>
        <p className='book-date'>{book.publishedDate}</p>
      </div>

      <StarRating />
      <div className="button-container">
        <button data-testid='add-to-list' className="button-single-book" onClick={handleClick}>
          {(fav) ? 'Delete book' : 'Add to List'}
        </button>
        <button data-testid='read-more' className="button-single-book" onClick={openModal}>
          Read more
        </button>
      </div>
      {showModal ? (
        <Modal
          openModal={openModal}
          book={book}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  );
}
