import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './utility/logo';
import './styles/header.css';

function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="nav-group">
        <NavLink to="/search" className="header__search-link">
          Search
        </NavLink>
        <NavLink to="/my-list" className="header__my-list-link">
          My List
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
