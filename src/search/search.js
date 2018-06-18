import React, { Component } from "react";
import './search.css';

import SearchPanel from './search-panel';
import NoResults from './../shared/no-results';

class Search extends Component {
  render() {
    return (
       <div className='search'>
         <SearchPanel />
         <NoResults />
       </div>
    );
  }
}

export default Search;