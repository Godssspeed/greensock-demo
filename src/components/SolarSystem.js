import React, { Component } from 'react';
import Sun from './Sun';
import Earth from './Earth';
import Venus from './Venus';
import Mercury from './Mercury';
import Mars from './Mars';

export class SolarSystem extends Component {
	render() {
		return (
			<div>
				<div className="sun-div">
					<Sun />
				</div>
				<div className="earth-div">
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
		);
	}
}

export default SolarSystem;
