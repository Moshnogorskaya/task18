import React, { Component } from "react";
import axios from "axios";
import "./search.css";

import SearchPanel from "./search-panel";
import NoResults from "./../shared/no-results";
import Results from "./results";
import ToggleView from "./toggle-view";

function cutString(string, desiredLength) {
  if (!string || string.length < desiredLength) {
    return string;
  }
  return `${string.slice(0, desiredLength)}...`;
}

function prepareDataToDisplay(repo, savedRepos) {
  repo.topics = repo.topics.slice(0, 3);
  repo.description = cutString(repo.description, 90);
  const ids = findSavedIDs(savedRepos);
  repo.archived = ids.includes(repo.id);
  return repo;
}

function findSavedIDs(repos) {
  let savedRepos = repos.filter(repo => repo.archived);
  return savedRepos.map(repo => repo.id);
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
      waiting: false
    };
  }
  handleDashboardToggle = () => {
    this.setState({
      isList: false
    });
  };

  handleListToggle = () => {
    this.setState({
      isList: true
    });
  };

  getRepos = url => {
    axios
      .get(url, {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json"
        }
      })
      .then(response => {
        const repos = response.data.items;
        repos.map(repo => prepareDataToDisplay(repo, this.props.repos));
        this.props.onChangeRepos(repos);
        this.timer = setTimeout(() => this.setState({ waiting: false }), 2000);
      });
  };

  handleSearchSubmit = url => {
    if (!this.state.waiting) {
      this.setState({
        waiting: true
      });
      this.getRepos(url);
    }
  };

  handleChangeRepo = id => {
    this.props.onChangeRepo(id);
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

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
