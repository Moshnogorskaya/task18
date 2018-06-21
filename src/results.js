import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/results.css';

import RepoListView from './repo-list-view';
import RepoDashboardView from './repo-dashboard-view';

function View(MyComponent, classNameItem, repos, handler) {
  return repos.map(repo => (
    <li key={repo.id} className={classNameItem}>
      <MyComponent repo={repo} id={repo.id} onChangeRepo={handler} />
    </li>
  ));
}

class Results extends Component {
  handleChangeRepo = id => this.props.onChangeRepo(id);

  render() {
    if (this.props.isList) {
      return (
        <ul className="results-list">
          {View(
            RepoListView,
            'results-list__item',
            this.props.repos,
            this.handleChangeRepo,
          )}
        </ul>
      );
    }
    return (
      <ul className="results-dashboard">
        {View(
          RepoDashboardView,
          'results-dashboard__item',
          this.props.repos,
          this.handleChangeRepo,
        )}
      </ul>
    );
  }
}

Results.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
  onChangeRepo: PropTypes.func,
  isList: PropTypes.bool,
};

Results.defaultProps = {
  repos: [],
  onChangeRepo() {},
  isList: true,
};

export default Results;
