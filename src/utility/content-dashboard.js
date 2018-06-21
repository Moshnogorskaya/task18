import React from 'react';
import PropTypes from 'prop-types';
import './../styles/content-dashboard.css';

function ContentDashboard(props) {
  return (
    <div className="content-dashboard-wrapper">
      <a href={props.repo.html_url} className="repo-dashboard__name">
        {props.repo.name}
      </a>
      <p className="repo-dashboard__description">{props.repo.description}</p>
      <ul className="repo-dashboard__topics topics">
        {props.repo.topics
      ? props.repo.topics.map(topic => (
        <li key={Math.random()} className="topics__item">
          {topic}
        </li>
        ))
      : null}
      </ul>
    </div>);
}

ContentDashboard.propTypes = {
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

ContentDashboard.defaultProps = {
  repo: {},
};

export default ContentDashboard;
