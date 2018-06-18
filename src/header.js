import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Redirect to="/search" />
        <NavLink to="/search" activeClassName="hurray">
          Search
        </NavLink>
        <NavLink to="/my-list" activeClassName="hurray">
          My List
        </NavLink>
      </div>
    );
  }
}

export default Header;
