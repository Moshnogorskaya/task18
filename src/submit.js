import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/submit.css';

class Submit extends Component {
  propTypes = {
    onButtonClick: PropTypes.func,
    disabled: PropTypes.bool,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.onButtonClick();
  };

  render() {
    return (
      <button
        className={
          this.props.disabled ? 'search__button disabled' : 'search__button'
        }
        onClick={this.handleClick}
      >
        <span>SEARCH</span>
      </button>
    );
  }
}

export default Submit;
