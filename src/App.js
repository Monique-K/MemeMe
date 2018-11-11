import React, { Component } from 'react';
import { SearchBar } from "./search/search"
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
      <br />
      <h1 className="title">MEME Me</h1>
      <br />
      <h3>Enter a keyword to  create a new meme</h3>
      <SearchBar />
      </div>
    );
  }
}

export default App;
