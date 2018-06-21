import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './styles/app.css';

import Header from './header';
import Search from './search';
import MyList from './my-list';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  handleChangeRepos = (repos) => {
    this.setState({
      repos,
    });
  };

  handleChangeRepo = (id) => {
    const newRepos = [...this.state.repos];
    const changedRepo = newRepos.find(repo => repo.id === id);
    changedRepo.archived = !changedRepo.archived;
    this.setState({
      repos: newRepos,
    });
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="wrapper">
            <Header />

            <Switch>
              <Route exact path="/" render={() => <Redirect to="/search" />} />
              <Route
                path="/search"
                render={props => (
                  <Search
                    {...props}
                    repos={this.state.repos}
                    onChangeRepos={this.handleChangeRepos}
                    onChangeRepo={this.handleChangeRepo}
                  />
                )}
              />
              <Route
                path="/my-list"
                render={props => (
                  <MyList
                    {...props}
                    repos={this.state.repos}
                    onChangeRepo={this.handleChangeRepo}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
