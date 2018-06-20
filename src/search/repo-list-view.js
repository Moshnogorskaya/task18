import React, { Component } from "react";
import "./repo-list-view.css";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faStar from "@fortawesome/fontawesome-free-solid/faStar";

class RepoListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: this.props.repo,
    };
  }


handleClick = () => {
  let newRepo = Object.assign({}, this.state.repo);
  newRepo.archived = !newRepo.archived;
  this.setState({
    repo: newRepo,
  })
}

  render() {
    const repo = this.state.repo;
    return (
      <div className="repo">
        <div className="wrapper-repo-action">
          <div
          onClick={this.handleClick}
            className={
              repo.archived ? "repo__action delete" : "repo__action add"
            }
          />
        </div>
        <div className="repo__info">
          <a href={repo.html_url} className="repo__name">
            {repo.name}
          </a>
          <p className="repo__description">{repo.description}</p>
          <ul className="repo__topics topics">
            {repo.topics
              ? repo.topics.map(topic => (
                  <li key={Math.random()} className="topics__item">
                    {topic}
                  </li>
                ))
              : null}
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
