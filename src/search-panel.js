import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/search-panel.css';

import Select from './select';
import InputKeywords from './input-keywords';
import Submit from './submit';
import composeUrl from './utility/compose-url';
import types from './utility/types';
import languages from './utility/languages';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      language: '',
      keyword: '',
      isValid: true,
    };
  }
  handleTypeChange = (type) => {
    this.setState({
      type: type.toLowerCase(),
      isValid: true,
    });
  };

  handleLanguageChange = (language) => {
    this.setState({
      language: language.toLowerCase(),
    });
  };

  handleKeywordChange = (keyword) => {
    this.setState({
      keyword: keyword.toLowerCase(),
    });
  };
  handleButtonClick = () => {
    if (this.state.type.length) {
      this.setState({
        isValid: true,
      });
      this.props.onSearchSubmit(composeUrl(
        this.state.type,
        this.state.language,
        this.state.keyword,
      ));
    } else {
      this.setState({
        isValid: false,
      });
    }
  };

  render() {
    return (
      <div className="search__search-panel">
        <Select
          options={types}
          required
          isValid={this.state.isValid}
          onChangeValue={this.handleTypeChange}
        />
        <Select
          options={languages}
          placeholder="Language"
          onChangeValue={this.handleLanguageChange}
        />
        <InputKeywords onChangeValue={this.handleKeywordChange} />
        <Submit
          onButtonClick={this.handleButtonClick}
          disabled={this.props.waiting}
        />
      </div>
    );
  }
}

SearchPanel.propTypes = {
  onSearchSubmit: PropTypes.func,
  waiting: PropTypes.bool,
};

SearchPanel.defaultProps = {
  onSearchSubmit() {},
  waiting: false,
};

export default SearchPanel;
