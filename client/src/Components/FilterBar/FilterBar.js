import React, { useState } from 'react';
import './FilterBar.css';
export default function FilterBar(props) {
  const [searchedTerm, setSearchedTerm] = useState('');

  function handleChange(e) {
    setSearchedTerm(e.target.value);
    const filteredList = props.myList.filter((book) => {
      if (searchedTerm === '') {
        return book;
      } else if (
        book.volumeInfo.title.toLowerCase().includes(searchedTerm.toLowerCase())
      ) {
        return book;
      }
    });

    props.setFilteredResults((prevValue) => {
      return [...filteredList];
    });
  }

  return (
    <div className="filtered-bar-container">
      <input
        type="text"
        className="filtered-term"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button className="button-icon-filter">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
}
