import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import './styles/repo-list-view.css';

class RepoListView extends Component {
  propTypes = {
    onChangeRepo: PropTypes.func,
    repo: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      html_url: PropTypes.string,
      stargazers_count: PropTypes.string,
      archived: PropTypes.bool,
      topics: PropTypes.arrayOf(PropTypes.string),
    }),
  };
  handleClick = () => {
    this.props.onChangeRepo(this.props.repo.id);
  };

  render() {
    const { repo } = this.props;
    return (
      <div className="repo">
        <div className="wrapper-repo-action">
          <button
            onClick={this.handleClick}
            className={
              repo.archived ? 'repo__action delete' : 'repo__action add'
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
