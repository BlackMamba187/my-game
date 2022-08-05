import React from "react";

import GameObject from "./GameObject";
import heroone from "../../Assets/characters/Male9.png";
import { utils } from "../Utils/Utils";
import Person from "./Person";
import Player from "./Player";

const MainPlayer = new Player({
	isPlayerControlled: true,
	isAuthPlayer: 1, //UserID
	src: heroone,
	playerSpeed: 3,

	x: utils.withGrid(10),
	y: utils.withGrid(45),
});

class OverWorldMap {
	gameObjects: GameObject;
	lowerImage: HTMLImageElement;
	//upperImage: HTMLImageElement;

	constructor(config: any) {
		this.gameObjects = config.gameObjects;

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		//this.upperImage = new Image();
		//this.upperImage.src = config.upperSrc ;
	}
	draw(context: any) {
		//clear canvas
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);

		//Draw Lower layer
		context.drawImage(
			this.lowerImage,
			0,
			0,
			context.canvas.width,
			context.canvas.height
		);

		//Human Players
		MainPlayer.update();
		MainPlayer.init();
		MainPlayer.sprite.draw(context);

		//Draw Game Objects
		Object.values(this.gameObjects).forEach((object) => {
			object.update();
			object.sprite.draw(context);
		});

		//Draw Upper layer
		//this.upperLoaded && context.drawImage(this.upperImage, 0, 0);
	}
}

export default OverWorldMap;
