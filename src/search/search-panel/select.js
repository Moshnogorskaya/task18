import React, { Component } from "react";
import "./select.css";

class Select extends Component {
  render() {
    return (
      <div className="select__group">
        <select
          className="criteria__type select-group__select"
          defaultValue={this.props.placeholder}>
          <option disabled value={this.props.placeholder}>
            {this.props.placeholder}
          </option>
          {this.props.options.map(type => (
            <option key={Math.random()} value={type}>
              {type}
            </option>
          ))}
        </select>
        <div className="select-group__arrow">▼</div>
      </div>
    );
  }
}

export default Select;
