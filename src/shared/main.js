import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './main.css';

import Header from "./header";
import Search from "./../search/search";
import MyList from "./../my-list/my-list";

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/my-list" component={MyList} />
        </Switch>
      </div>
    );
  }
}

export default Main;
