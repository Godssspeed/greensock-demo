import React, { Component } from "react";
import "./Earth.css";

export class Earth extends Component {
  render() {
    return (
      <div className="earth">
        <img src="https://s3.us-east-2.amazonaws.com/solarsystem/earth.png" />
      </div>
    );
  }
}

export default Earth;
