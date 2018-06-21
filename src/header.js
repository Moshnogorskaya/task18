import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo-group">
        <div className="header__icon" />
        <div className="header__logo logo">
          <div className="logo__heading">GitHub</div>
          <div className="logo__text">search</div>
        </div>
      </div>

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
