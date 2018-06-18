import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './app.css';
import Main from './main';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
