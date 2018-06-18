import React, { Component } from "react";
import './search-panel.css';

import Select from './search-panel/select';
import InputKeywords from './search-panel/input-keywords';
import Submit from './search-panel/submit';


class SearchPanel extends Component {
  render() {
    return (
       <div className='search__search-panel'>
         <Select />
         <Select />
         <InputKeywords />
         <Submit />
       </div>
    );
  }
}

export default SearchPanel;

