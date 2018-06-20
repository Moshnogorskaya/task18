import React, { Component } from "react";
import axios from 'axios';
import "./search.css";

import SearchPanel from "./search-panel";
import NoResults from "./../shared/no-results";
import Results from "./results";
import ToggleView from "./toggle-view";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
      repos: [],
    };
  }
  handleDashboardToggle = () => {
    this.setState({
      isList: false
    });
  }

  handleListToggle = () => {
    this.setState({
      isList: true
    });
  }

  handleSearchSubmit = (url) => {
    console.log(this.state.repos);
    axios.get(url, {
      headers: {
        'Accept': 'application/vnd.github.mercy-preview+json'
      }}).then(response => this.setState({
      repos: response.data.items,
    }));
  }

  render() {
    return (
      <div className="search">
        <SearchPanel onSearchSubmit={this.handleSearchSubmit}/>
        {this.state.repos && this.state.repos.length ? (
          <div className='wrapper-results'>
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
