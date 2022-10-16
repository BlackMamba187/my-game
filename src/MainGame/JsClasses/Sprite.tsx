import React from "react";
import { utils } from "../Utils/Utils";

class Sprite {
	image: any;
	gameObject: any;
	currentDirection: number;
	animationframes: any;
	imageWidth: any;
	imageHeight: any;
	scale: number;

	constructor(config: any) {
		this.image = new Image();
		this.image.src = config.src;

		this.gameObject = config.gameObject;

		this.currentDirection = config.currentDirection || 0;
		this.animationframes = 1;

		this.scale = config.scale || 2;
		this.imageWidth = config.imageWidth || 32;
		this.imageHeight = config.imageHeight || 32;
	}

	drawFrame(context: any, frameX: number, frameY: number, CameraPerson: any) {
		let x = this.gameObject.x + context.canvas.width / 2 - CameraPerson.x;

		let y = this.gameObject.y + context.canvas.height / 2 - CameraPerson.y;

		const WIDTH = this.imageWidth;
		const HEIGHT = this.imageHeight;

		context.drawImage(
			this.image,
			frameX * WIDTH,
			frameY * HEIGHT,
			WIDTH,
			HEIGHT,
			x,
			y,
			WIDTH * this.scale,
			HEIGHT * this.scale
		);
	}

	draw(context: any, CameraPerson: any) {
		this.drawFrame(
			context,
			this.animationframes,
			this.currentDirection,
			CameraPerson
		);
	}
}

export default Sprite;
