import React, { Component } from "react";
import "./Mars.css";
import { TweenLite, TweenMax, ExpoScaleEase } from "gsap";

export class Mars extends Component {
  constructor() {
    super();
    this.myElement = null;
    this.myTween = null;
    this.state = {
      showMars: false
    };
  }

  componentDidUpdate() {
    if (this.state.showMars) {
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
    this.setState({ showMars: !this.state.showMars });
  };
  render() {
    console.log(this.state);
    return (
      <div className="mars" ref={div => (this.myElement = div)}>
        <img
          src="https://s3.us-east-2.amazonaws.com/solarsystem/mars.png"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Mars;
