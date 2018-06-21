import React, { Component } from "react";
import "./my-list.css";

import NoResults from "../shared/no-results";
import Results from "./../search/results";
import ToggleView from "./../search/toggle-view";

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
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

  handleChangeRepo = id => {
    this.props.onChangeRepo(id);
  };


  render() {
    let savedRepos = this.props.repos.filter(repo => repo.archived);
    return (
      <div className="my-list">
        <h1 className="my-list__heading">My List</h1>{" "}
        {savedRepos && savedRepos.length ? (
          <div className="wrapper-results">
            <ToggleView
              onDashboardToggle={this.handleDashboardToggle}
              onListToggle={this.handleListToggle}
              isList={this.state.isList}
            />
            <Results
              isList={this.state.isList}
              repos={savedRepos}
              onChangeRepo={this.handleChangeRepo}
            />
          </div>
        ) : (
          <NoResults heading="NOTHING THERE" text="save a few items first" />
        )}
      </div>
    );
  }
}

export default MyList;
