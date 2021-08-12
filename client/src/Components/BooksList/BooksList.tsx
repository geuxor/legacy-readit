import React, {useContext, useEffect, useState} from 'react';
import './BooksList.css';
import SingleBook from '../SingleBook/SingleBook';
import {AppContext} from '../../AppContext';
import { Result } from '../../type';
import { Book } from '../../type';
import {getBooksFromDb} from '../../Services/ApiDb'

interface Props {
  list: Result[];
}

export default function BooksList(props: Props) {

  const {unSortedResults, myList} = useContext(AppContext)

  return (
    <div className="container-list">
      {unSortedResults.map((book: Result) => {
        const isFav = myList.find((listBook: Book) => listBook.google_id === book.id   )
          if (isFav) {
            return <SingleBook book={book} key={book.id} fav={true}/>;
          } else {
            return <SingleBook book={book} key={book.id} fav={false}/>;
          }
      })}
    </div>
  );
}
