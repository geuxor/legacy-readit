import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyListPage from '../MyListPage/MyListPage';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import DashboardPage from '../DashboardPage/DashboardPage';
import ApiDb from '../../Services/ApiDb';
import Book from '../../book.model'

type ContextProps = {
  myList: Result[];
  setMyList: (list) => {};
}
export const AppContext = React.createContext<Partial<ContextProps>>({});

interface Result {
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: [];
    publisher: string;
    publishedDate: string;
    imageLinks: {
    thumbnail: string;
    }
  }
  anotherOne: number;
  selfLink: string;
  etag: string;
  id: string;
  kind: string;
  accessInfo: { country: string; viewability: string; embeddable: boolean; publicDomain: boolean; textToSpeechPermission: string }
}

export default function Dashboard() {
  const [unSortedResults, setResults] = useState<Result[]>([]);
  const [sortOrder, setSortOrder] = useState<any>('');
  const [myList, setMyList] = useState<any>([]);

 console.log(myList)
  useEffect(() => {
    setResults(results);
  }, [sortOrder])

  useEffect(() => {
    async function dataFromDb() {
      const res = await ApiDb.getBooksFromDb();
      const data = await res.json()
      return data
    }
    dataFromDb().then(data => setMyList(data))
  }, []);

  const results = [...unSortedResults].sort((a, b) => {
    if (sortOrder === 'Oldest') {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sortOrder === 'Newest') {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
  });

  return (
    <Router>
      <AppContext.Provider
        value={{
          unSortedResults,
          setResults,
          myList,
          setMyList,
          sortOrder,
          setSortOrder,
          results,
        }}
      >
        <div className="main-container">
          <NavBar />
          <Switch>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/mylist" component={MyListPage} />
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}
