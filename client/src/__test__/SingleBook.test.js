import React from 'react';
import {screen, render, fireEvent, getByText} from '@testing-library/react';
import SingleBook from '../Components/SingleBook/SingleBook';
import { bookMock } from './singleBookMock';

// jest.mock('../Components/SingleBook/SingleBook', () => {
//   setMyList: () => ([bookMock])
// })

it('renders correctly', () => {
  const {getByTestId} = render(<SingleBook book={bookMock} />)

  getByTestId('read-more');
})

describe('read-more button', () => {
  it('should show description when clicked', () => {
    const showModal = jest.fn()
    const {getByTestId} = render(<SingleBook showModal={showModal} book={bookMock} />)

    const button = getByTestId('read-more')
    fireEvent.click(button)
    expect(showModal).toBeTruthy();
    const description = screen.getByText('Description')
    expect(description).toBeTruthy();
  })
})