import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";

import Header from "./header";
import Search from "./../search/search";
import MyList from "./../my-list/my-list";
import Footer from "./footer";


let repo = {
  id: 1,
  name: 'Repo',
  description: 'description',
  language: 'Language',
  html_url: 'url',
  stargazers_count: 100,
  archived: false,
  topics: ['topic', 'topic'],
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [repo, repo, repo, repo],
    }
  }
  render() {
    
    return (
      <div className="app">

        <BrowserRouter>
          <div className="wrapper">

            <Header />

            <Switch>
              <Route exact path="/" component={Search} repos={this.state.repos}/>
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
