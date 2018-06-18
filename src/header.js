import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Redirect to="/search" />
        <div class="logo-group">
          <div class="header__icon" />
          <div class="header__logo logo">
            <div class="logo__heading">GitHub</div>
            <div class="logo__text">search</div>
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
}

export default Header;
