import React from "react";
import Sprite from "./Sprite";

class GameObject {
	x: any;
	y: any;
	sprite: Sprite;
	direction: any;

	constructor(config: any) {
		this.x = config.x;
		this.y = config.y;
		this.sprite = new Sprite({
			gameObject: this,
			src: config.src,
		});
	}
	update(state: any) {}
}

export default GameObject;
