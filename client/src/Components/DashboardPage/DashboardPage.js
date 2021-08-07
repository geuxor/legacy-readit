import React, { useContext, useState } from 'react';
import { AppContext } from '../Dashboard/Dashboard';
import SearchForm from '../SearchForm/SearchForm';
import BooksList from '../BooksList/BooksList';
import Spinner from '../Spinner/Spinner';

export default function DashboardPage() {
  const { unSortedResults, setResults } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <SearchForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        list={unSortedResults}
        setResults={setResults}
      />
      {isLoading ? <Spinner /> : <BooksList list={unSortedResults} />}
    </div>
  );
}
