import React, { Component } from "react";
import './select.css';

class Select extends Component {
  render() {
    return (
      <div className='select__group'>
      <select className='criteria__type select-group__select'>
        <option disabled>Type</option>
      </select>
      <div className='select-group__arrow'>▼</div>
    </div>
    );
  }
}

export default Select;