import React, { Component } from "react";
import { TweenLite, TweenMax, ExpoScaleEase } from "gsap";
import "./Mercury.css";

export class Mercury extends Component {
  constructor() {
    super();
    this.myElement = null;
    this.myTween = null;
    this.state = {
      showMercury: false
    };
  }

  componentDidUpdate() {
    if (this.state.showMercury) {
      this.myTween = TweenMax.fromTo(
        this.myElement,
        3,
        { scale: 1 },
        { scale: 3, ease: ExpoScaleEase.config(20, 10), repeat: 0 }
      );
    } else {
      this.myTween = TweenMax.fromTo(
        this.myElement,
        3,
        { scale: 3 },
        { scale: 1, ease: ExpoScaleEase.config(20, 10), repeat: 0 }
      );
    }
  }

  handleClick = () => {
    this.setState({ showMercury: !this.state.showMercury });
  };
  render() {
    return (
      <div className="mercury" ref={div => (this.myElement = div)}>
        <img
          src="https://s3.us-east-2.amazonaws.com/solarsystem/mercury.png"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Mercury;
