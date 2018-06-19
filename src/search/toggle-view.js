import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faThLarge from "@fortawesome/fontawesome-free-solid/faThLarge";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import "./toggle-view.css";

class ToggleView extends Component {
  constructor(props) {
    super(props);
    this.handleDashboardClick = this.handleDashboardClick.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.state = {
      isList: true
    };
  }

  handleDashboardClick() {
    this.setState({
      isList: false
    });
  }

  handleListClick() {
    this.setState({
      isList: true
    });
  }
  render() {
    return (
      <div className="view">
        <a
          className={
            !this.state.isList ? "view__dashboard active" : "view__dashboard"
          }
        >
          <FontAwesomeIcon
            icon={faThLarge}
            onClick={this.handleDashboardClick}
          />
        </a>
        <a className={this.state.isList ? "view__list active" : "view__list"}>
          <FontAwesomeIcon icon={faBars} onClick={this.handleListClick} />
        </a>
      </div>
    );
  }
}

export default ToggleView;
