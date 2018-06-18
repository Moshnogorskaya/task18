import React, { Component } from "react";
import './search.css';

import SearchPanel from './search-panel';
import Results from './results';

class Search extends Component {
  render() {
    return (
       <div className='search'>
         <SearchPanel />
         <Results />
       </div>
    );
  }
}

export default Search;