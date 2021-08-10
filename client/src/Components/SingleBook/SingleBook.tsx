import React, { useContext, useState } from 'react';
import './SingleBook.css';
import { AppContext } from '../Dashboard/Dashboard';
import Modal from '../Modal/Modal';
import StarRating from '../StarRating/StarRating';
import ApiDb from '../../Services/ApiDb';
import Book from '../../book.model'

type Props = {
  book: Book;
};

export default function SingleBook(props: Props): JSX.Element {
  const { myList, setMyList } = useContext(AppContext);
  const [showModal, setShowModal] = useState<boolean>(false);

  function openModal() {
    setShowModal((prevValue:boolean) => !prevValue);
  }
  async function handleClick(e: any)  {
    if (!myList.includes(props.book)) {
      console.log('test', setMyList)
      setMyList((prevValue: Book[]) => {
        return [...prevValue, props.book];
      });
      await ApiDb.postBooksToDb(props.book);
    } else {
      console.log('else')
      const newList = myList.filter((book: Book) => {
        return props.book.whatever !== book.title;
      });
      setMyList(newList);
      await ApiDb.deleteBookFromDb(props.book.id);
    }
  }
  //conditional rendering
  return props.book.volumeInfo ? (
    <div className="single-book-container">
      <img alt='thumbnail'
        className="book-cover"
        src={props.book.volumeInfo.imageLinks?.thumbnail}
      />
      <div className="book-info">
        <h2 className='book-title'>{props.book.volumeInfo.title.substring(0, 50)}</h2>
        <h3>{props.book.volumeInfo.author}</h3>
        <p className='book-date'>{props.book.volumeInfo.publishedDate}</p>
      </div>
      <StarRating />
      <div className="button-container">
        <button data-testid='add-to-list' className="button-single-book" onClick={handleClick}>
          {myList.includes(props.book) ? 'Delete book' : 'Add to List'}
        </button>
        <button data-testid='read-more' className="button-single-book" onClick={openModal}>
          Read more
        </button>
      </div>
      {showModal ? (
        <Modal
          openModal={openModal}
          book={props.book}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  ) : (
    <div className="single-book-container">
      <img alt='cover'
        className="book-cover"
        src={props.book.image}
      />
      <div className="book-info">
        <h2>{props.book.title.substring(0, 80) + '...'}</h2>
        <h3>{props.book.author}</h3>
        <p className='book-date'>{props.book.publishedDate}</p>
      </div>

      <StarRating />
      <div className="button-container">
        <button data-testid='add-to-list' className="button-single-book" onClick={handleClick}>
          {myList.includes(props.book) ? 'Delete book' : 'Add to List'}
        </button>
        <button data-testid='read-more' className="button-single-book" onClick={openModal}>
          Read more
        </button>
      </div>
      {showModal ? (
        <Modal
          openModal={openModal}
          book={props.book}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  );
}
