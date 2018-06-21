import React from 'react';
import PropTypes from 'prop-types';
import './../styles/info-list.css';

function InfoList(props) {
  return (
    <div className="repo__info">
      <a href={props.repo.html_url} className="repo__name">
        {props.repo.name}
      </a>
      <p className="repo__description">{props.repo.description}</p>
      <ul className="repo__topics topics">
        {props.repo.topics
              ? props.repo.topics.map(topic => (
                <li key={Math.random()} className="topics__item">
                  {topic}
                </li>
                ))
              : null}
      </ul>
    </div>
  );
}

InfoList.propTypes = {
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

InfoList.defaultProps = {
  repo: {},
};

export default InfoList;
