import React from "react";

import GameObject from "./GameObject";
import heroone from "../../Assets/characters/Male3.png";
import { utils } from "../Utils/Utils";
import Person from "./Person";
import Player from "./Player";

const MainPlayer = new Person({
	isPlayerControlled: true,
	isAuthPlayer: 1, //UserID
	src: heroone,
	playerSpeed: 2,
	x: utils.withGrid(112),
	y: utils.withGrid(50),
});

const Player2 = new Person({
	isPlayerControlled: true,
	isAuthPlayer: 2, //UserID
	src: heroone,
	playerSpeed: 2,
	x: utils.withGrid(117),
	y: utils.withGrid(50),
});

class OverWorldMap {
	gameObjects: GameObject;
	lowerImage: HTMLImageElement;
	upperImage: HTMLImageElement;
	walls: any;
	scale: number;

	constructor(config: any) {
		this.gameObjects = config.gameObjects;

		this.lowerImage = new Image();
		this.upperImage = new Image();

		this.lowerImage.src = config.lowerSrc;
		this.upperImage.src = config.upperSrc;

		this.scale = 2;
		this.walls = config.walls || {};
	}

	addWall(x: any, y: any) {
		this.walls[`${x},${y}`] = true;
	}
	removeWall(x: any, y: any) {
		delete this.walls[`${x},${y}`];
	}

	runOverworldMap(context: any) {
		//clear canvas
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		//who to follow
		const CameraPerson = MainPlayer;

		//Draw Lower layer
		context.drawImage(
			this.lowerImage,
			context.canvas.width / 2 - CameraPerson.x,
			context.canvas.height / 2 - CameraPerson.y,
			this.lowerImage.width * this.scale,
			this.lowerImage.height * this.scale
		);

		//Human Players
		MainPlayer.sprite.draw(context, CameraPerson);
		MainPlayer.update(context, this.walls);

		Player2.sprite.draw(context, CameraPerson);
		Player2.update(context,  this.walls);

		//Draw Game Objects
		Object.values(this.gameObjects).forEach((object) => {
			object.update(context);
			object.sprite.draw(context, CameraPerson);
		});

		//Draw Upper layer
		context.drawImage(
			this.upperImage,
			context.canvas.width / 2 - CameraPerson.x,
			context.canvas.height / 2 - CameraPerson.y,
			this.lowerImage.width * this.scale,
			this.lowerImage.height * this.scale
		);

		//menu above game
		MainPlayer.CreateMenu(context);
		Player2.CreateMenu(context);
	}

	draw(context: any) {
		this.lowerImage.onload = () => {
			this.upperImage.onload = () => {
				this.runOverworldMap(context);
			};
		};
	}
}

export default OverWorldMap;
