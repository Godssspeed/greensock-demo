import React, { Component } from 'react';
import Sun from './Sun';
import Earth from './Earth';
import Venus from './Venus';
import Mercury from './Mercury';
import Mars from './Mars';

export class SolarSystem extends Component {
	render() {
		return (
			<div className="outer-div">
				<div className="sun-div-container">
					<div className="sun-div">
						<Sun />
					</div>
				</div>
				<div className="planet-div-container">
					<div id="expo" className="earth-div">
						<Earth />
					</div>
					<div className="venus-div">
						<Venus />
					</div>
					<div className="mercury-div">
						<Mercury />
					</div>
					<div className="mars-div">
						<Mars />
					</div>
				</div>
			</div>
		);
	}
}

export default SolarSystem;
