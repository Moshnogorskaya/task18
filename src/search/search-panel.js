import React, { Component } from "react";
import "./search-panel.css";

import Select from "./search-panel/select";
import InputKeywords from "./search-panel/input-keywords";
import Submit from "./search-panel/submit";

const types = [
  { value: "type", label: "Type" },
  { value: "repositories", label: "Repositories" }
];

const languages = [
  { value: "language", label: "Language" },
  { value: "javascript", label: "Javascript" },
  { value: "css", label: "CSS" },
  { value: "html", label: "HTML" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "c++", label: "C++" },
  { value: "python", label: "Python" },
  { value: "c#", label: "C#" },
  { value: "java", label: "Java" },
  { value: "go", label: "Go" },
  { value: "haskell", label: "Haskell" }
];

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      language: "",
      keyword: "",
      isValid: true,
    };
  }
  handleTypeChange = type => {
    this.setState({
      type: type.toLowerCase(),
      isValid: true
    });
  };

  handleLanguageChange = language => {
    this.setState({
      language: language.toLowerCase()
    });
  };

  handleKeywordChange = keyword => {
    this.setState({
      keyword: keyword.toLowerCase()
    });
  };
  handleButtonClick = () => {
    if (this.state.type.length) {
      this.setState({
        isValid: true
      });
      const url = `https://api.github.com/search/${this.state.type}?q=${
        this.state.keyword
      }+language:${this.state.language}&sort=stars&order=desc`;
      this.props.onSearchSubmit(url);
    } else {
      this.setState({
        isValid: false
      });
    }
  };

  render() {
    return (
      <div className="search__search-panel">
        <Select
          options={types}
          required={true}
          isValid={this.state.isValid}
          onChangeValue={this.handleTypeChange}
        />
        <Select
          options={languages}
          placeholder="Language"
          onChangeValue={this.handleLanguageChange}
        />
        <InputKeywords onChangeValue={this.handleKeywordChange} />
        <Submit onButtonClick={this.handleButtonClick} disabled={this.props.waiting}/>
      </div>
    );
  }
}

export default SearchPanel;
