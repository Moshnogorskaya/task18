import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from './main';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
