import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/select.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      active: 'placeholder',
    };
  }

  handleChange(e) {
    this.props.onChangeValue(e.target.value);
    this.setState({
      active: e.target.value,
    });
  }

  render() {
    const placeholder = this.props.options[0];
    const options = this.props.options.slice(1);
    return (
      <div
        className={
          this.props.required && !this.props.isValid
            ? 'select__group warning'
            : 'select__group'
        }
      >
        <select
          onChange={this.handleChange}
          value={this.state.active}
          className="select-group__select"
        >
          <option disabled value="placeholder">
            {placeholder.label}
          </option>
          {options.map(option => (
            <option key={Math.random()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="select-group__arrow">▼</div>
      </div>
    );
  }
}

Select.propTypes = {
  onChangeValue: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  required: PropTypes.bool,
  isValid: PropTypes.bool,
};

Select.defaultProps = {
  onChangeValue() {},
  options: [],
  required: false,
  isValid: true,
};

export default Select;
