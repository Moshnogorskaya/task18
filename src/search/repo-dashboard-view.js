import React, { Component } from "react";
import "./repo-dashboard-view.css";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

class RepoDashboardView extends Component {
  render() {
    const repo = this.props.repo;
    return (
      <div className='repo-dashboard'>
        <div className="repo-dashboard__stats">
          <div className="repo-dashboard__language">{repo.language}</div>
          <div className="repo-dashboard__stars stars">
            <span className="stars__icon">
            <FontAwesomeIcon icon={faStar} />
            </span>
            {repo.stargazers_count}
          </div>
        </div>

        <a href={repo.html_url} className="repo-dashboard__name">
          {repo.name}
        </a>
        <p className="repo-dashboard__description">{repo.description}</p>
        <ul className="repo-dashboard__topics topics">
          <li className="topics__item">{repo.topics}</li>
        </ul>
        <div className="button-wrapper">
          <button className="repo-dashboard__add">ADD TO LIST</button>
        </div>
      </div>
    );
  }
}

export default RepoDashboardView;
