import React, { Component } from "react";
import { TweenLite, TweenMax, ExpoScaleEase } from "gsap";
import "./Venus.css";

export class Venus extends Component {
  constructor() {
    super();
    this.myElement = null;
    this.myTween = null;
    this.state = {
      showVenus: false
    };
  }

  componentDidUpdate() {
    if (this.state.showVenus) {
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
    this.setState({ showVenus: !this.state.showVenus });
  };
  render() {
    return (
      <div className="venus" ref={div => (this.myElement = div)}>
        <img
          src="https://s3.us-east-2.amazonaws.com/solarsystem/venus.png"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Venus;
