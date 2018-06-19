import React, { Component } from "react";
import './submit.css';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onButtonClick();
  }

    render() {
      return (
        <button className='search__button' onClick={this.handleClick}>SEARCH</button>
      );
    }
  }
  
  export default Submit;