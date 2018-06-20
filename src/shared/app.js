import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";

import Header from "./header";
import Search from "./../search/search";
import MyList from "./../my-list/my-list";
import Footer from "./footer";

let repo = {
  id: 1,
  name: "Repo",
  description: "description",
  language: "Language",
  html_url: "url",
  stargazers_count: 100,
  archived: false,
  topics: ["topic", "topic"]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  handleSearchComplete = repos => {
    this.setState({
      repos: repos
    });
  };

  render() {
    let repos = this.state.repos;
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
                    onSearchComplete={this.handleSearchComplete}
                  />
                )}
              />
              <Route
                path="/search"
                render={props => (
                  <Search
                    {...props}
                    repos={this.state.repos}
                    onSearchComplete={this.handleSearchComplete}
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
