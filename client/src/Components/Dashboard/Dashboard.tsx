import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyListPage from '../MyListPage/MyListPage';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import DashboardPage from '../DashboardPage/DashboardPage';
import { getBooksFromDb } from '../../Services/ApiDb';
import { AppContext } from '../../AppContext';




export default function Dashboard() {

  const { setMyList, sortOrder, unSortedResults, setResults } = React.useContext(AppContext);


  useEffect(() => {
    setResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder])

  useEffect(() => {
    async function dataFromDb() {
      const res = await getBooksFromDb();
      setMyList(res);
    }
    dataFromDb()}, [setMyList]);

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
