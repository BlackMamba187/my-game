import React, { useState } from "react";
import Canvas from "./Canvas/Canvas";
import OverWorldMap from "./JsClasses/OverWorldMap";
import Town1 from "./Maps/Town1";

const width = 1600;
const height = 900;

const MainGame = () => {

	const draw = (context: any) => {
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
			<Canvas draw={draw} height={height} width={width} />

			<div id="inventory" className="inventory">
				
			</div>
		</div>
	);
};

export default MainGame;
