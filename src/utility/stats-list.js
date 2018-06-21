import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import './../styles/stats-list.css';

function StatsList(props) {
  return (
    <div className="repo__stats">
      <div className="repo__stars stars-group">
        <span className="stars-group__icon">
          <FontAwesomeIcon icon={faStar} />
        </span>
        {props.repo.stargazers_count}
      </div>
      <div className="repo__language">{props.repo.language}</div>
    </div>
  );
}

StatsList.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    html_url: PropTypes.string,
    stargazers_count: PropTypes.number,
    archived: PropTypes.bool,
    topics: PropTypes.arrayOf(PropTypes.string),
  }),
};

StatsList.defaultProps = {
  repo: {},
};

export default StatsList;
