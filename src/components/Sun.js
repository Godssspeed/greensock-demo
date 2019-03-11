import React, { Component } from "react";
import "./Sun.css";

export class Sun extends Component {
  render() {
    return (
      <div className="sun">
        <img src="https://s3.us-east-2.amazonaws.com/solarsystem/sun.png" />
      </div>
    );
  }
}

export default Sun;
