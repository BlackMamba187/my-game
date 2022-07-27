import React from "react";


class Sprite {
	animations: any;
	currentAnimation: any;

	image: any;
	isLoaded: boolean | undefined;
	gameObject: any;
	animationFrameLimit: any;
	animationFrameProgress: any;
	currentDirection: number;
	animationframes: any;
	
	constructor(config: any) {
		//Set up the image
		this.image = new Image();
		this.image.src = config.src;

		//Reference the game object
		this.gameObject = config.gameObject;

		this.currentDirection = 0
		this.animationframes = 1
		//Configure Animation & Initial State
		this.animations = config.animations || {
			"idle-down": [[1, 0]],
			"idle-left": [[1, 1]],
			"idle-right": [[1, 2]],
			"idle-up": [[1, 3]],

			"walk-down": [
				[0, 0],
				[1, 0],
				[2, 0],
			],
			"walk-left": [
				[0, 1],
				[1, 1],
				[2, 1],
			],
			"walk-right": [
				[0, 2],
				[1, 2],
				[2, 2],
			],
			"walk-up": [
				[0, 3],
				[1, 3],
				[2, 3],
			],
		};
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
