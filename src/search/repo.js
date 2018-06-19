import React, { Component } from "react";
import './repo.css';

const item = {
  id: 1,
  name: 'repo',
  description: 'description',
  language: 'language',
  html_url: 'url',
  stargazers_count: 100,
  archived: false,
  topics: ['topic', 'topic', 'topic'],
};

class Repo extends Component {
  render() {
    return (
       <div>repo</div>
    );
  }
}

export default Repo;