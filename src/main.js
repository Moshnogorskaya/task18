import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Header from "./header";
import Search from "./search";
import MyList from "./my-list";

class Main extends Component {
  render() {
    return (
      <div>
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
