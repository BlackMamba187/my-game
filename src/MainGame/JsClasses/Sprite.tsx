import React from "react";

class Sprite {
	animations: any;
	currentAnimation: any;
	image: any;
	isLoaded!: boolean;
	gameObject: any;
	animationFrameLimit: any;
	animationFrameProgress: any;
	currentDirection: number;
	animationframes: any;

	constructor(config: any) {
		this.image = new Image();
		this.image.src = config.src;

		this.gameObject = config.gameObject;

		this.currentDirection = 0;
		this.animationframes = 1;
	}

	drawFrame(context: any, frameX: number, frameY: number) {
		let x = this.gameObject.x;

		let y = this.gameObject.y;

		const WIDTH = 32;
		const HEIGHT = 32;

		context.drawImage(
			this.image,

			frameX * WIDTH,
			frameY * HEIGHT,
			WIDTH,
			HEIGHT,
			x,
			y,
			32,
			32
		);
	}

	draw(context: any) {
		this.drawFrame(context, this.animationframes, this.currentDirection);
	}
}

export default Sprite;
