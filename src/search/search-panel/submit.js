import React, { Component } from "react";
import "./submit.css";

class Submit extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.onButtonClick();
  }

  render() {
    return (
      <button
        className={this.props.disabled ? "search__button disabled" : "search__button"}
        onClick={this.handleClick}
      >
        <span>SEARCH</span>
      </button>
    );
  }
}

export default Submit;
