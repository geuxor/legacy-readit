import React, {useContext, useState, useEffect} from 'react'
import BooksList from '../BooksList/BooksList'
import SingleBook from '../SingleBook/SingleBook'
import { AppContext } from '../Dashboard/Dashboard'
import FilterBar from '../FilterBar/FilterBar'

export default function MyListPage() {
  const {myList, setMyList} = useContext(AppContext)
  const [filteredResults, setFilteredResults] = useState ([])

  console.log(myList)

  return (
    <div>
      <FilterBar myList={myList} setFilteredResults={setFilteredResults}/>
      {filteredResults.length ? <BooksList list={filteredResults} /> : <BooksList list={myList}/>}
    </div>
  )
}
