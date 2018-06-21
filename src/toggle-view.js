import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faThLarge from '@fortawesome/fontawesome-free-solid/faThLarge';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import './styles/toggle-view.css';

class ToggleView extends Component {
  propTypes = {
    onDashboardToggle: PropTypes.func,
    onListToggle: PropTypes.func,
    isList: PropTypes.bool,
  };

  handleDashboardClick = () => {
    this.props.onDashboardToggle();
  };

  handleListClick = () => {
    this.props.onListToggle();
  };
  render() {
    return (
      <div className="view">
        <button
          className={
            !this.props.isList ? 'view__dashboard active' : 'view__dashboard'
          }
        >
          <FontAwesomeIcon
            icon={faThLarge}
            onClick={this.handleDashboardClick}
          />
        </button>
        <button className={this.props.isList ? 'view__list active' : 'view__list'}>
          <FontAwesomeIcon icon={faBars} onClick={this.handleListClick} />
        </button>
      </div>
    );
  }
}

export default ToggleView;
