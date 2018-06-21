import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/results.css';

import RepoListView from './repo-list-view';
import RepoDashboardView from './repo-dashboard-view';

class Results extends Component {
  propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object),
    onChangeRepo: PropTypes.func,
    isList: PropTypes,
  };
  handleChangeRepo = id => this.props.onChangeRepo(id);

  render() {
    if (this.props.isList) {
      return (
        <ul className="results-list">
          {this.props.repos.map(repo => (
            <li key={repo.id} className="results-list__item">
              <RepoListView
                repo={repo}
                id={repo.id}
                onChangeRepo={this.handleChangeRepo}
              />
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className="results-dashboard">
        {this.props.repos.map(repo => (
          <li key={repo.id} className="results-dashboard__item">
            <RepoDashboardView
              repo={repo}
              id={repo.id}
              onChangeRepo={this.handleChangeRepo}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Results;
