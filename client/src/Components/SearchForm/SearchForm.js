import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../Dashboard/Dashboard';
import Api from '../../Services/ApiBook';
import './SearchForm.css';

export default function SearchForm(props) {
  const { setSortOrder, setResults } = useContext(AppContext);
  const [book, setBook] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!book) return;
    props.setIsLoading(true);
    Api.getBooks(book).then((data) => {
      props.setResults(data.items);
      props.setIsLoading(false);
    });
  }

  function handleSort(e) {
    e.preventDefault();
    setSortOrder(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container-form">
        <input
          className="search-term"
          type="text"
          placeholder="Search for a book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <button type="submit" className="form-button">
          <i className="icon" className="fa fa-search" aria-hidden="true"></i>
        </button>
        <select className="select-search-bar" onChange={handleSort}>
          <option  defaultValue="Sort" disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}
