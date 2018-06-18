import React, { Component } from "react";
import './my-list.css';
import NoResults from '../shared/no-results';

class MyList extends Component {
  render() {
    return (
      <div className="my-list">
        <h1 className="my-list__heading">My List</h1>
        <NoResults />
      </div>
    );
  }
}

export default MyList;
