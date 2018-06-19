import React, { Component } from "react";
import './results.css';

import Repo from './repo';

// const items = [{
//   id: 1,
//   name: repo,
//   description: description,
//   language: language,
//   html_url: url,
//   stargazers_count: 100,
//   archived: false,
//   topics: [topic, topic, topic],
// }]

const repos = ['repo1', 'repo2', 'repo3', 'repo4', 'repo5'];

class Results extends Component {
  render() {
    return (
       <ul className='results'>
         {repos.map(repo => <li key={Math.random()} className='results__item'><Repo /></li>)}
       </ul>
    );
  }
}

export default Results;