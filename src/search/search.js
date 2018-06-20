import React, { Component } from "react";
import axios from "axios";
import "./search.css";

import SearchPanel from "./search-panel";
import NoResults from "./../shared/no-results";
import Results from "./results";
import ToggleView from "./toggle-view";

function cutString(string, desiredLength) {
  if (string.length < desiredLength) {
    return string;
  }
  return `${string.slice(0, desiredLength)}...`;
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
      repos: []
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

  handleSearchSubmit = url => {
    console.log(this.state.repos);
    axios
      .get(url, {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json"
        }
      })
      .then(response => {
        const repos = response.data.items;
        repos.map(repo => {
          repo.archived = false;
          repo.topics = repo.topics.slice(0, 3);
          repo.description = cutString(repo.description, 90);
          return repo;
        });
        this.setState({
          repos: repos
        });
      });
  };

  render() {
    return (
      <div className="search">
        <SearchPanel onSearchSubmit={this.handleSearchSubmit} />
        {this.state.repos && this.state.repos.length ? (
          <div className="wrapper-results">
            <ToggleView
              onDashboardToggle={this.handleDashboardToggle}
              onListToggle={this.handleListToggle}
              isList={this.state.isList}
            />
            <Results isList={this.state.isList} repos={this.state.repos} />
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    );
  }
}

export default Search;
