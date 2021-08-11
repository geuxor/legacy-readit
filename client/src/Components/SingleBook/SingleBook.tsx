import React, { useContext, useState } from 'react';
import './SingleBook.css';
import Modal from '../Modal/Modal';
import StarRating from '../StarRating/StarRating';
import ApiDb from '../../Services/ApiDb';
import { Book, Result } from '../../type.d';
import { AppContext } from '../../AppContext';

type Props = {
  book: Result;
};



export default function SingleBook({book}: Props): JSX.Element {
  const { myList, setMyList } = useContext(AppContext);
  const [showModal, setShowModal] = useState<boolean>(false);

  function openModal() {
    setShowModal((prevValue:boolean) => !prevValue);
  }
  async function handleClick(e: any)  {
    if (!myList.includes(book)) {
      console.log('test', setMyList)
      setMyList((prevValue) => {
        return [...prevValue, book];
      });
      await ApiDb.postBooksToDb(book);
    } else {
      console.log('else')
      const newList = myList.filter((book) => {
        return book.title !== book.title;
      });
      setMyList(newList);
      await ApiDb.deleteBookFromDb(book.id);
    }
  }

  //conditional rendering
  return book.volumeInfo ? (
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
          {myList.includes(book) ? 'Delete book' : 'Add to List'}
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
          {myList.includes(book) ? 'Delete book' : 'Add to List'}
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
