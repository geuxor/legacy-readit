import React from 'react';
import { Link } from 'react-router-dom';
import { BsBookHalf } from 'react-icons/bs';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>Read it</h1>
        </Link>
      </div>
      <BsBookHalf size={40} color={'white'}/>
      <ul className="nav-links">
        <Link to="/mylist">
          My List
        </Link>
        <a href='/contact'>Contact</a>
        <a href='/about'>About</a>
      </ul>
      <div className="burger"></div>
    </nav>
  );
}
