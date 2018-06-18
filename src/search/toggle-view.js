import React, { Component } from "react";
import './toggle-view.css';


class ToggleView extends Component {
  render() {
    return (
        <div className='results__view-toggle view'>
        <a className='view__dashboard'>
          <i className="fas fa-th-large"></i>
        </a>
        <a className='view__list'>
          <i className="fas fa-bars"></i>
        </a>
      </div>
    );
  }
}

export default ToggleView;