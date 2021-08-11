import * as React from 'react';
import { Result } from './type.d';
import { ContextProps } from './type.d';

export const AppContext = React.createContext<ContextProps>({unSortedResults: [], setResults: () => {} , sortOrder: 'Oldest', setSortOrder: () => {}, myList: [], setMyList: () => {}});


const AppContextProvider: React.FC = ({ children }) => {

  const [unSortedResults, setResults] = React.useState<Result[]>([]);
  const [sortOrder, setSortOrder] = React.useState<'Newest' | 'Oldest'>('Oldest');
  const [myList, setMyList] = React.useState<Result[]>([]);


  return (

    <AppContext.Provider value={{ unSortedResults, setResults, sortOrder, setSortOrder, myList, setMyList }}>
      {children}
    </AppContext.Provider>

  )
}


export default AppContextProvider;


