import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/app.css';

import Header from './header';
import Search from './search';
import MyList from './my-list';
import Footer from './footer';

function CustomRoute(props) {
  const MyComponent = props.component;
  const { self } = props;
  return (
    <Route
      path={props.path}
      render={ownProps => (
        <MyComponent
          {...ownProps}
          repos={self.state.repos}
          onChangeRepos={self.handleChangeRepos}
          onChangeRepo={self.handleChangeRepo}
        />
      )}
    />
  );
}

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
            <Route exact path="/" render={() => <Redirect to="/search" />} />
            <CustomRoute path="/search" component={Search} self={this} />
            <CustomRoute path="/my-list" component={MyList} self={this} />
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

CustomRoute.propTypes = {
  component: PropTypes.func,
  self: PropTypes.shape({}),
  path: PropTypes.string,
};

CustomRoute.defaultProps = {
  component: Search,
  self: App,
  path: '',
};

export default App;
