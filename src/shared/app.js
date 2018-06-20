import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";

import Header from "./header";
import Search from "./../search/search";
import MyList from "./../my-list/my-list";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <div className="app">

        <BrowserRouter>
          <div className="wrapper">

            <Header />

            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/search" component={Search} />
              <Route path="/my-list" component={MyList} />
            </Switch>
            
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
