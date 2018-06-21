import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/input-keywords.css';

class InputKeywords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: '',
    };
  }

  handleClick = () => {
    this.setState({
      active: true,
    });
  };

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
    this.props.onChangeValue(e.target.value);
  };

  handleBlur = () => {
    if (!this.state.value) {
      this.setState({
        active: false,
      });
    }
  };
  render() {
    return (
      <div className="input">
        <p
          className={`input__placeholder ${this.state.active ? 'active' : ''}`}
        >
          Type here for search
        </p>
        <input
          onFocus={this.handleClick}
          onInput={this.handleInput}
          onBlur={this.handleBlur}
          type="text"
          maxLength="50"
          className="input__field"
        />
      </div>
    );
  }
}

InputKeywords.propTypes = {
  onChangeValue: PropTypes.func,
};

InputKeywords.defaultProps = {
  onChangeValue() {},
};

export default InputKeywords;
