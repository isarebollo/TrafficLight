import React, { useState } from "react";
import ButtonSemaforo from "./ButtonSemaforo.jsx";

function TrafficLigth() {
	const [Color, setSelectedColor] = useState(" ");
	return (
		<div className="TraficLight">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"Ligth red" + (Color === "red" ? " glow" : " ")
				}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"Ligth yellow" + (Color === "yellow" ? " glow" : " ")
				}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"Ligth green" + (Color === "green" ? " glow" : " ")
				}></div>

			<ButtonSemaforo
				funCambiarColor={setSelectedColor}
				colorActual={Color}></ButtonSemaforo>
		</div>
	);
}
export default TrafficLigth;
