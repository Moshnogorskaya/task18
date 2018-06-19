import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faThLarge from '@fortawesome/fontawesome-free-solid/faThLarge';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import './toggle-view.css';


class ToggleView extends Component {
  render() {
    return (
        <div className='view'>
        <a className='view__dashboard'>
        <FontAwesomeIcon icon={faThLarge} />
        </a>
        <a className='view__list'>
        <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    );
  }
}

export default ToggleView;