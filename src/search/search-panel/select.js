import React, { Component } from "react";
import "./select.css";

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeValue(e.target.value);
  }

  render() {
    return (
      <div className="select__group">
        <select
          onChange={this.handleChange}
          className="criteria__type select-group__select"
          defaultValue={this.props.placeholder}
        >
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
