import React from "react";

class Sprite {
	image: any;
	gameObject: any;
	currentDirection: number;
	animationframes: any;
	imageWidth: any;
	imageHeight: any;

	constructor(config: any) {
		this.image = new Image();
		this.image.src = config.src;

		this.gameObject = config.gameObject;

		this.currentDirection = 0;
		this.animationframes = 1;

		this.imageWidth = config.imageWidth || 32;
		this.imageHeight = config.imageHeight || 32;
	}

	drawFrame(context: any, frameX: number, frameY: number) {
		let x = this.gameObject.x;

		let y = this.gameObject.y;

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
			WIDTH * 2.5,
			HEIGHT * 2.5
		);
	}

	draw(context: any) {
		this.drawFrame(context, this.animationframes, this.currentDirection);
	}
}

export default Sprite;
