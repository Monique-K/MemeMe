import React, { Component } from "react";
import { Uploader } from "./uploader/uploader";
import { Meme } from "./meme/meme";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <br />
        <h1 className="title">MEME Me</h1>
        <div className="app-sections">
          <Uploader />
          <Meme />
        </div>
      </div>
    );
  }
}

export default App;
