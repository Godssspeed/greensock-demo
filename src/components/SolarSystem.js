import React, { Component } from 'react';
import Sun from './Sun';
import Earth from './Earth';
import Venus from './Venus';
// import Mercury from './Mercury';
// import Mars from './Mars';
import { TweenMax, ExpoScaleEase, TweenLite } from 'gsap';

export class SolarSystem extends Component {
	constructor(props) {
		super(props);
		this.myElement = null;
		this.myElement2 = null;
		this.myTween = null;
		this.myTween2 = null;
	}

	componentDidMount() {
		this.myTween = TweenMax.to(this.myElement, 5000, {
			transformOrigin: '50% 50% 0', // try changing value
			rotation: 360 * 250,
			repeat: 0
		});
		this.myTween2 = TweenMax.to(this.myElement2, 4000, {
			transformOrigin: '50% 50% 0', // try changing value
			rotation: 360 * 250,
			repeat: 0
		});
	}

	render() {
		return (
			<div className="wrapper">
			
				<h1 className="title">EXPLORE WITH US!</h1>
			
				<div className="circle" ref={div => (this.myElement = div)}>
					<div className="earth-div">
						{' '}<Earth />
					</div>
				</div>
				<div className="circle2" ref={div => (this.myElement2 = div)}>
					<div className="venus-div">
						<Venus />
					</div>
					<div className="sun2" />
				</div>
				<div className="sun-div">
					<Sun />
				</div>
			</div>
		);
	}
}

export default SolarSystem;
