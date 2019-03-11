import React, { Component } from "react";
import Sun from "./Sun";
import Earth from "./Earth";
import Venus from "./Venus";
import Mercury from "./Mercury";
import Mars from "./Mars";

export class SolarSystem extends Component {
	render() {
		return (
			<div className="outer-div">
				<div className="planet-div-container">
					<div className="earth-circle">
						<div id="expo" className="earth-div">
							<Earth />
						</div>
					</div>
					<div className="venus-circle">
						<div className="venus-div">
							<Venus />
						</div>
					</div>
					<div className="mercury-circle">
						<div className="mercury-div">
							<Mercury />
						</div>
					</div>
					<div className="mars-circle">
						<div className="mars-div">
							<Mars />
						</div>
					</div>
					<div className="sun-div-container">
						<div className="sun-div">
							<Sun />
						</div>
					</div>
				</div>
			</div>
		);
	}


}

export default SolarSystem;
