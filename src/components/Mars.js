import React, { Component } from "react";
import "./Mars.css";

export class Mars extends Component {
  render() {
    return (
      <div className="mars">
        <img src="https://s3.us-east-2.amazonaws.com/solarsystem/mars.png" />
      </div>
    );
  }
}

export default Mars;
