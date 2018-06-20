import React, { Component } from "react";
import "./repo-list-view.css";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

class RepoListView extends Component {
  render() {
    const repo = this.props.repo;
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
          {repo.topics.map(topic => <li key={Math.random()} className="topics__item">{topic}</li>)}
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

export default RepoListView;
