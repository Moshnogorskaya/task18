import React from 'react';
import PropTypes from 'prop-types';
import './../styles/no-results.css';

function NoResults(props) {
  return (
    <div className="no-results-group">
      <h1 className="no-results-group__heading">{props.heading}</h1>
      <p className="no-results-group__text">{props.text}</p>
      <div className="no-results-group__image" />
    </div>
  );
}

NoResults.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};

NoResults.defaultProps = {
  heading: '',
  text: '',
};

export default NoResults;
