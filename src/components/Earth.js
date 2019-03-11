import React, { Component } from 'react';
import './Earth.css';
import { TweenMax, ExpoScaleEase, TweenLite } from 'gsap';

export class Earth extends Component {
	constructor(props) {
		super(props);
		this.myElement = null;
		this.myTween = null;
		this.state = {
			showEarth: false
		};
	}

    componentDidUpdate() {
        if (this.state.showEarth) {
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
		this.setState({ showEarth: !this.state.showEarth });
	};

	render() {
		return (
			<div ref={div => (this.myElement = div)} className="earth">
				<img
					onClick={this.handleClick}
					src="https://s3.us-east-2.amazonaws.com/solarsystem/earth.png"
				/>
			</div>
		);
	}
}

export default Earth;
