import React, { Component } from "react";
import './search.css';

import SearchPanel from './search-panel';
import NoResults from './../shared/no-results';
import Results from './results';
import ToggleView from './toggle-view';

const repo = {
  id: 1,
  name: "Repo",
  description: "Description",
  language: "Language",
  html_url: "url",
  stargazers_count: 100,
  archived: false,
  topics: "Topic"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleDashboardToggle = this.handleDashboardToggle.bind(this);
    this.handleListToggle = this.handleListToggle.bind(this);
    this.state = {
      isList: true,
      repos: [repo, repo, repo, repo, repo],
    }
  }
  handleDashboardToggle() {
    this.setState({
      isList: false,
    })
  }

  handleListToggle() {
    this.setState({
      isList: true,
    })
  }



  render() {
    return (
       <div className='search'>
         <SearchPanel />
         <ToggleView onDashboardToggle={this.handleDashboardToggle} onListToggle={this.handleListToggle} isList={this.state.isList}/>
         <Results isList={this.state.isList} repos={this.state.repos}/>
       </div>
    );
  }
}

export default Search;