import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyListPage from '../MyListPage/MyListPage';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import DashboardPage from '../DashboardPage/DashboardPage';
import ApiDb from '../../Services/ApiDb';
import { AppContext } from '../../AppContext';




export default function Dashboard() {

  const { myList, setMyList, sortOrder, setSortOrder, unSortedResults, setResults } = React.useContext(AppContext);

  // const [unSortedResults, setResults] = useState<Result[]>([]);
  // const [sortOrder, setSortOrder] = useState<'Oldest' | 'Newest'>('Newest');
  // const [myList, setMyList] = useState<any>([]);

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
  }, [setMyList]);

  const results = [...unSortedResults].sort((a, b) => {
    if (sortOrder === 'Oldest') {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
  });

  return (
    <Router>
        <div className="main-container">
          <NavBar />
          <Switch>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/mylist" component={MyListPage} />
          </Switch>
        </div>
    </Router>
  );
}
