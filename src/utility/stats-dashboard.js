import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import './../styles/stats-dashboard.css';

function StatsDashboard(props) {
  return (
    <div className="repo-dashboard__stats">
      <div className="repo-dashboard__language">{props.repo.language}</div>
      <div className="repo-dashboard__stars stars">
        <span className="stars__icon">
          <FontAwesomeIcon icon={faStar} />
        </span>
        {props.repo.stargazers_count}
      </div>
    </div>
  );
}

StatsDashboard.propTypes = {
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

StatsDashboard.defaultProps = {
  repo: {},
};

export default StatsDashboard;
