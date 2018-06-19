import React, { Component } from "react";
import "./results.css";

import RepoListView from "./repo-list-view";
import RepoDashboardView from "./repo-dashboard-view";

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

const repos = [repo, repo, repo, repo, repo];

class Results extends Component {
  render() {
    let isList = this.props.isList;

    if (isList) {
      return (
        <ul className="results-list">
          {repos.map(repo => (
            <li key={Math.random()} className="results-list__item">
              <RepoListView repo={repo} />
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className="results-dashboard">
        {repos.map(repo => (
          <li key={Math.random()} className="results-dashboard__item">
            <RepoDashboardView repo={repo} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Results;
