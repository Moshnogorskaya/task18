import React, { Component } from "react";
import './no-results.css';

class NoResults extends Component {
  render() {
    return (
      <div className="no-results-group">
        <h1 className="no-results-group__heading">{this.props.heading}</h1>
        <p className="no-results-group__text">
          {this.props.text}
        </p>
        <div className="no-results-group__image" />
      </div>
    );
  }
}

export default NoResults;
