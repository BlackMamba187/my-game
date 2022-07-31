import React from "react";
import Sprite from "./Sprite";

class GameObject {
	x: any;
	y: any;
	sprite: Sprite;
	isGameObject: Boolean;
	loop: any;
	frameCount: number;
	currentLoopIndex: number;
	frameLimit: number;

	constructor(config: any) {
		this.x = config.x;
		this.y = config.y;
		this.isGameObject = config.isGameObject || false;

		this.loop = config.loop;

		this.frameCount = 0;
		this.currentLoopIndex = 0;
		this.frameLimit = 20;
		this.sprite = new Sprite({
			gameObject: this,
			src: config.src,
			imageWidth: config.imageWidth || 32,
			imageHeight: config.imageHeight || 32,
			animationframes: config.animationframes,
		});
	}
	update(state: any) {
		if (this.isGameObject === true) {
			this.frameCount++;
			if (this.frameCount >= this.frameLimit) {
				this.frameCount = 0;
				this.currentLoopIndex++;
				if (this.currentLoopIndex >= this.loop.length) {
					this.currentLoopIndex = 0;
				}
			}
			this.sprite.animationframes = this.loop[this.currentLoopIndex];
		}
	}
}

export default GameObject;
