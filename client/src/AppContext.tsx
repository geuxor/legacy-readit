import React from 'react';
import { Result, Book } from './type.d';
import { ContextProps } from './type.d';

export const AppContext = React.createContext<ContextProps>({unSortedResults: [], setResults: () => {} , sortOrder: 'Oldest', setSortOrder: () => {}, myList: [], setMyList: () => {}, book: '', setBook: () => {}});


const AppContextProvider: React.FC = ({ children }) => {

  const [unSortedResults, setResults] = React.useState<Result[]>([]);
  const [sortOrder, setSortOrder] = React.useState<'Newest' | 'Oldest'>('Oldest');
  const [myList, setMyList] = React.useState<Book[]>([]);
  const [book, setBook] = React.useState<string>('');


  return (

    <AppContext.Provider value={{ book, setBook, unSortedResults, setResults, sortOrder, setSortOrder, myList, setMyList }}>
      {children}
    </AppContext.Provider>

  )
}


export default AppContextProvider;


