import React, { Component } from "react";
import './search-panel.css';

import Select from './search-panel/select';
import InputKeywords from './search-panel/input-keywords';
import Submit from './search-panel/submit';

const types = ['Repository'];
const languages = ["Javascript", 'css', 'html', 'php', 'ruby', 'c++', 'python','c#', 'java', 'go', 'haskell']

class SearchPanel extends Component {
  render() {
    return (
       <div className='search__search-panel'>
         <Select options={types} placeholder='Type' />
         <Select options={languages} placeholder='Language' />
         <InputKeywords />
         <Submit />
       </div>
    );
  }
}

export default SearchPanel;

