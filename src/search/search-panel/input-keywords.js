import React, { Component } from "react";
import "./input-keywords.css";

class InputKeywords extends Component {
  render() {
    return (
      <div className="input">
        <p className="input__placeholder">Type here for search</p>
        <input
          type="text"
          maxLength="50"
          className="input__field"
        />
      </div>
    );
  }
}

export default InputKeywords;
