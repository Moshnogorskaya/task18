import React, { Component } from "react";
import './no-results.css';

class NoResults extends Component {
  render() {
    return (
      <div className="no-results-group">
        <h1 className="no-results-group__heading">NO RESULTS FOUND</h1>
        <p className="no-results-group__text">
          select other parameters and try again
        </p>
        <div className="no-results-group__image" />
      </div>
    );
  }
}

export default NoResults;
