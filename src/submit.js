import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/submit.css';

class Submit extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onButtonClick();
  };

  render() {
    return (
      <button
        className={`search__button ${this.props.disabled ? 'disabled' : ''}`}
        onClick={this.handleClick}
      >
        <span>SEARCH</span>
      </button>
    );
  }
}

Submit.propTypes = {
  onButtonClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Submit.defaultProps = {
  onButtonClick() {},
  disabled: false,
};

export default Submit;
