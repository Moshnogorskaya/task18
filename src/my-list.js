import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/my-list.css';

import NoResults from './utility/no-results';
import Results from './results';
import ToggleView from './toggle-view';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
    };
  }

  handleDashboardToggle = () => {
    this.setState({
      isList: false,
    });
  };

  handleListToggle = () => {
    this.setState({
      isList: true,
    });
  };

  handleChangeRepo = (id) => {
    this.props.onChangeRepo(id);
  };

  render() {
    const savedRepos = this.props.repos.filter(repo => repo.archived);
    return (
      <div className="my-list">
        <h1 className="my-list__heading">My List</h1>{' '}
        {savedRepos && savedRepos.length ? (
          <div className="wrapper-results">
            <ToggleView
              onDashboardToggle={this.handleDashboardToggle}
              onListToggle={this.handleListToggle}
              isList={this.state.isList}
            />
            <Results
              isList={this.state.isList}
              repos={savedRepos}
              onChangeRepo={this.handleChangeRepo}
            />
          </div>
        ) : (
          <NoResults heading="NOTHING THERE" text="save a few items first" />
        )}
      </div>
    );
  }
}

MyList.propTypes = {
  onChangeRepo: PropTypes.func,
  repos: PropTypes.arrayOf(PropTypes.object),
};

MyList.defaultProps = {
  onChangeRepo() {},
  repos: [],
};

export default MyList;
