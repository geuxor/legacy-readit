import React, { useState, useContext} from 'react';
import { AppContext } from '../Dashboard/Dashboard';
import Api from '../../Services/ApiBook';
import './SearchForm.css';

export default function SearchForm(props) {
  // const setSortOrder = useContext(AppContext);
  const [book, setBook] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
    if (!book) return;
    props.setIsLoading(true);
    Api.getBooks(book).then((data) => {
      props.setResults(data.items);
      props.setIsLoading(false);
    }) } catch(e) {
      console.log(e)
    }
  }

  // function handleSort(e) {
  //   e.preventDefault();
  //   setSortOrder(e.target.value);
  // }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container-form">
        <input
          className="search-term"
          type="text"
          placeholder="Search for a book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          autoFocus
        />
        <button data-testid='search-button' type="submit" className="form-button">
          <i className="icon fa fa-search" aria-hidden="true"></i>
        </button>
        {/* <select className="select-search-bar" onChange={handleSort}>
          <option  defaultValue="Sort" disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select> */}
      </form>
    </div>
  );
}
