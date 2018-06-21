import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatsList from './utility/stats-list';
import InfoList from './utility/info-list';
import './styles/repo-list-view.css';

class RepoListView extends Component {
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
        <InfoList repo={repo} />
        <StatsList repo={repo} />
      </div>
    );
  }
}

RepoListView.propTypes = {
  onChangeRepo: PropTypes.func,
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

RepoListView.defaultProps = {
  onChangeRepo() {},
  repo: {},
};

export default RepoListView;
