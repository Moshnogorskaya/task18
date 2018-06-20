import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";

import Header from "./header";
import Search from "./../search/search";
import MyList from "./../my-list/my-list";
import Footer from "./footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  handleChangeRepos = repos => {
    this.setState({
      repos: repos
    });
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="wrapper">
            <Header />

            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Search
                    {...props}
                    repos={this.state.repos}
                    onChangeRepos={this.handleChangeRepos}
                  />
                )}
              />
              <Route
                path="/search"
                render={props => (
                  <Search
                    {...props}
                    repos={this.state.repos}
                    onChangeRepos={this.handleChangeRepos}
                  />
                )}
              />
              <Route path="/my-list" render={props => <MyList {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
