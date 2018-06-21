import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/results.css';

import RepoListView from './repo-list-view';
import RepoDashboardView from './repo-dashboard-view';

function View(props) {
  const { self } = props;
  const { repos } = self.props;
  const MyComponent = props.component;
  return (
    <ul className={props.classNameArray}>
      {repos.map(repo => (
        <li key={repo.id} className={props.classNameItem}>
          <MyComponent
            repo={repo}
            id={repo.id}
            onChangeRepo={self.handleChangeRepo}
          />
        </li>
      ))}
    </ul>
  );
}

class Results extends Component {
  handleChangeRepo = id => this.props.onChangeRepo(id);

  render() {
    if (this.props.isList) {
      return (
        <View
          component={RepoListView}
          classNameArray="results-list"
          classNameItem="results-list__item"
          self={this}
        />
      );
    }
    return (
      <View
        component={RepoDashboardView}
        classNameArray="results-dashboard"
        classNameItem="results-dashboard__item"
        self={this}
      />
    );
  }
}

View.propTypes = {
  self: PropTypes.shape({}),
  component: PropTypes.func,
  classNameArray: PropTypes.string,
  classNameItem: PropTypes.string,
};

View.defaultProps = {
  self: {},
  component: RepoListView,
  classNameArray: '',
  classNameItem: '',
};

Results.propTypes = {
  onChangeRepo: PropTypes.func,
  isList: PropTypes.bool,
};

Results.defaultProps = {
  onChangeRepo() {},
  isList: true,
};

export default Results;
