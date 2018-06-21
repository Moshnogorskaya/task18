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

Submit.propTypes = {
  onButtonClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Submit.defaultProps = {
  onButtonClick() {},
  disabled: false,
};

export default Submit;
