import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ButtonSemaforo from "./ButtonSemaforo.jsx";
import TrafficLigth from "./TrafficLight.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="palo"> </div>
			<TrafficLigth></TrafficLigth>
		</div>
	);
};

export default Home;
