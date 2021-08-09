import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import SearchForm from '../Components/SearchForm/SearchForm';

jest.mock('../Services/ApiBook.js', () => {
  return {getBooks: () => {
    return {then: (cb) => cb({items: []})}
  }}
})

it('renders correctly', () => {
  const {queryByTestId, queryByPlaceholderText} = render(<SearchForm/>)

  expect(queryByTestId('search-button')).toBeTruthy();
  expect(queryByPlaceholderText('Search for a book')).toBeTruthy();
})

describe('input value', () => {
  it('updates on change', () => {
    const {queryByPlaceholderText} = render(<SearchForm/>)
    const searchInput = queryByPlaceholderText('Search for a book')

    fireEvent.change(searchInput, {target: {value: 'test'}})

    expect(searchInput.value).toBe('test')
  })
})

describe('search button', () => {
    it('does not trigger search function', () => {
      const setIsLoading = jest.fn()
      const setResults = jest.fn()

      const {queryByTestId} = render(<SearchForm setResults={setResults} setIsLoading={setIsLoading} />)
      fireEvent.click(queryByTestId('search-button'))
      expect(setIsLoading).not.toHaveBeenCalled();
      expect(setResults).not.toHaveBeenCalled();
    })
    it('triggers search function', () => {
      const setIsLoading = jest.fn()
      const setResults = jest.fn()

      const {queryByTestId, queryByPlaceholderText} = render(<SearchForm setResults={setResults} setIsLoading={setIsLoading}/>)
      const searchInput = queryByPlaceholderText('Search for a book')
      fireEvent.change(searchInput, {target: {value: 'test'}})
      fireEvent.click(queryByTestId('search-button'))
      expect(setIsLoading).toHaveBeenCalledTimes(2);
      expect(setResults).toHaveBeenCalled();
    })
})