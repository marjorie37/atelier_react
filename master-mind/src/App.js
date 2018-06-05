import React, { Component } from "react";
import logo from "./logo.svg";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import "./App.css";
import Guess from "./Guess";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <VideogameAsset
              style={{
                fontSize: 60,
                position: "absolute",
                left: "600px",
                top: "105px"
              }}
            />
            <h1 className="App-title">React Mastermind</h1>
          </div>
        </header>
        <Guess />
      </div>
    );
  }
}

export default App;
