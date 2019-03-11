import React, { Component } from "react";

import "./App.css";
import SolarSystem from "./components/SolarSystem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="space-div">
          <SolarSystem />
        </div>
      </div>
    );
  }
}

export default App;
