import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faThLarge from '@fortawesome/fontawesome-free-solid/faThLarge';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import './styles/toggle-view.css';

class ToggleView extends Component {
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
          className={`view__dashboard ${!this.props.isList ? 'active' : ''}`}
        >
          <FontAwesomeIcon
            icon={faThLarge}
            onClick={this.handleDashboardClick}
          />
        </button>
        <button className={`view__list ${this.props.isList ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBars} onClick={this.handleListClick} />
        </button>
      </div>
    );
  }
}

ToggleView.propTypes = {
  onDashboardToggle: PropTypes.func,
  onListToggle: PropTypes.func,
  isList: PropTypes.bool,
};

ToggleView.defaultProps = {
  onDashboardToggle() {},
  onListToggle() {},
  isList: true,
};

export default ToggleView;
