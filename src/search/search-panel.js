import React, { Component } from "react";
import "./search-panel.css";

import Select from "./search-panel/select";
import InputKeywords from "./search-panel/input-keywords";
import Submit from "./search-panel/submit";

const types = ["Repository"];
const languages = [
  "Javascript",
  "css",
  "html",
  "php",
  "ruby",
  "c++",
  "python",
  "c#",
  "java",
  "go",
  "haskell"
];

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.state = {
      type: "",
      language: "",
      keyword: "",
    };
  }

  handleTypeChange(type) {
    this.setState({
      type: type,
    });
  }

  handleLanguageChange(language) {
    this.setState({
      language: language,
    });
  }

  handleKeywordChange(keyword) {
    this.setState({
      keyword: keyword,
    });
  }


  render() {
    console.log(this.state.type, this.state.language, this.state.keyword);
    return (
      <div className="search__search-panel">
        <Select
          options={types}
          placeholder="Type"
          onChangeValue={this.handleTypeChange}
        />
        <Select
          options={languages}
          placeholder="Language"
          onChangeValue={this.handleLanguageChange}
        />
        <InputKeywords onChangeValue={this.handleKeywordChange}/>
        <Submit />
      </div>
    );
  }
}

export default SearchPanel;
