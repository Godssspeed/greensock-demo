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
				<Sun />
				<Earth />
				<Venus />
				<Mercury />
				<Mars />
			</div>
		);
	}
}

export default SolarSystem;
