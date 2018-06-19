import React, { Component } from "react";
import "./input-keywords.css";

class InputKeywords extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      active: false,
      value: ""
    };
  }

  handleClick() {
    this.setState({
      active: true
    });
  }

  handleInput(e) {
    this.setState({
      value: e.target.value
    });
    this.props.onChangeValue(e.target.value);
  }

  handleBlur() {
    if (!this.state.value) {
      this.setState({
        active: false
      });
    }
  }
  render() {
    return (
      <div className="input">
        <p
          className={
            this.state.active
              ? "input__placeholder active"
              : "input__placeholder"
          }
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

export default InputKeywords;
