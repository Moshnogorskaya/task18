import React, { Component } from "react";
import './search.css';

import SearchPanel from './search-panel';
import NoResults from './../shared/no-results';
import Results from './results';
import ToggleView from './toggle-view';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
    }
  }
  render() {
    return (
       <div className='search'>
         <SearchPanel />
         <ToggleView />
         <Results />
       </div>
    );
  }
}

export default Search;