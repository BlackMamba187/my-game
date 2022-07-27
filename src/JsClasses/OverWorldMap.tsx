import React from "react";
import Town from "../images/maps/town1.png";
import herotwo from "../images/characters/Male16.png";
import herothree from "../images/characters/Female12.png";
import GameObject from "./GameObject";

class OverWorldMap {
	gameObjects: GameObject;
	lowerImage: HTMLImageElement;
	upperImage: HTMLImageElement;
	isLoaded: boolean | undefined;
	directionInput: any;

	constructor(config: any) {
		this.gameObjects = config.gameObjects;

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc || null;
	}
	draw(context: any) {
		//clear canvas
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);

		//Draw Lower layer
		context.drawImage(this.lowerImage, 0, 0);

		//Draw Game Objects
		Object.values(this.gameObjects).forEach((object) => {
			
			object.update({});
			object.sprite.draw(context);
		});

		//Draw Upper layer
		context.drawImage(this.upperImage, 0, 0);
	}
}

export default OverWorldMap;
