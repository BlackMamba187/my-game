import React, { useState } from "react";
import Canvas from "./Canvas/Canvas";
import OverWorld from "./JsClasses/OverWorld";
import OverWorldMap from "./JsClasses/OverWorldMap";
import Town1 from "./Maps/Town1";
const UI_SCALE_FACTOR = 0.95;

const MainGame = () => {
	let width = window.innerWidth * UI_SCALE_FACTOR;
	let height = window.innerHeight * UI_SCALE_FACTOR;

	const draw = (context: any) => {
		//OverworldMap
		const OverworldGame = new OverWorld();
		OverworldGame.init(context);

		window.onresize = () => {
			context.canvas.width = window.innerWidth * UI_SCALE_FACTOR;
			context.canvas.height = window.innerHeight * UI_SCALE_FACTOR;
		};
	};

	return (
		<div className="game-container">
			<Canvas draw={draw} height={height} width={width} />
		</div>
	);
};

export default MainGame;
