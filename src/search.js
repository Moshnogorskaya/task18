import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/search.css';

import SearchPanel from './search-panel';
import NoResults from './no-results';
import Results from './results';
import ToggleView from './toggle-view';
import prepareDataToDisplay from './utility/prepare-data-to-display';
import getGithubData from './utility/get-girhub-data';

class Search extends Component {
  propTypes = {
    onChangeRepo: PropTypes.func,
    onChangeRepos: PropTypes.func,
    repos: PropTypes.arrayOf(PropTypes.object),
  };
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
      waiting: false,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  getRepos = (url) => {
    getGithubData(url)
      .then((response) => {
        const repos = response.data.items;
        repos.map(repo => prepareDataToDisplay(repo, this.props.repos));
        this.props.onChangeRepos(repos);
        this.timer = setTimeout(() => this.setState({ waiting: false }), 2000);
      });
  };

  handleListToggle = () => {
    this.setState({
      isList: true,
    });
  };

  handleDashboardToggle = () => {
    this.setState({
      isList: false,
    });
  };

  handleSearchSubmit = (url) => {
    if (!this.state.waiting) {
      this.setState({
        waiting: true,
      });
      this.getRepos(url);
    }
  };

  handleChangeRepo = (id) => {
    this.props.onChangeRepo(id);
  };

  render() {
    return (
      <div className="search">
        <SearchPanel
          onSearchSubmit={this.handleSearchSubmit}
          waiting={this.state.waiting}
        />
        {this.props.repos && this.props.repos.length ? (
          <div className="wrapper-results">
            <ToggleView
              onDashboardToggle={this.handleDashboardToggle}
              onListToggle={this.handleListToggle}
              isList={this.state.isList}
            />
            <Results
              isList={this.state.isList}
              repos={this.props.repos}
              onChangeRepo={this.handleChangeRepo}
            />
          </div>
        ) : (
          <NoResults
            heading="NO RESULTS FOUND"
            text="select other parameters and try again"
          />
        )}
      </div>
    );
  }
}

export default Search;
