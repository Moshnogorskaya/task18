import React, { Component } from "react";
import "./repo.css";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

const repo = {
  id: 1,
  name: "Repo",
  description: "Description",
  language: "Language",
  html_url: "url",
  stargazers_count: 100,
  archived: false,
  topics: "Topic"
};

class Repo extends Component {
  render() {
    return (
      <div className='repo'>
        <div className="wrapper-repo-action">
          <div className="repo__add" />
        </div>
        <div className="repo__info">
          <a href={repo.html_url} className="repo__name">
            {repo.name}
          </a>
          <p className="repo__description">{repo.description}</p>
          <ul className="repo__topics topics">
            <li className="topics__item">{repo.topics}</li>
          </ul>
        </div>

        <div className="repo__stats">
          <div className="repo__stars stars-group">
            <span className="stars-group__icon">
            <FontAwesomeIcon icon={faStar} />
            </span>
            {repo.stargazers_count}
          </div>
          <div className="repo__language">{repo.language}</div>
        </div>
      </div>
    );
  }
}

export default Repo;
