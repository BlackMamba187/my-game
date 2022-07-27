import React from "react";
import "./App.css";
import Canvas from "./Canvas";
import OverWorldMap from "./JsClasses/OverWorldMap";
import Town1 from "./Maps/Town1";


const App = () => {


	const draw = (context: any) => {
		//Characters

		//Map
		const map = new OverWorldMap({
			lowerSrc: Town1.lowerSrc,
			upperSrc: Town1.upperSrc,
			gameObjects: Town1.gameObjects,
		});
		map.draw(context);
	};

	return (
		<div className="game-container">
			<Canvas draw={draw} height={576} width={1050} />
		</div>
	);
};

export default App;
