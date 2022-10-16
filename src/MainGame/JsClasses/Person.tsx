import { resolveTxt } from "dns/promises";
import React, { useRef, useState } from "react";
import { utils } from "../Utils/Utils";
import GameObject from "./GameObject";
import GameHud from "../../Assets/menu/Hud.png";
import GameMenu from "../../Assets/menu/Menu.png";
import Tab from "../../Assets/menu/Tab.png";

const isAuthPlayer = (id: any) => {
	return id === 1;
};
let startingPointX = 0;
let startingPointY = 0;
let walkingX = false;
let walkingY = false;
let walkY = false;
class Person extends GameObject {
	keys: any;
	playerSpeed: number;
	isPlayerControlled: boolean;
	isAuthPlayer: boolean;
	moving!: boolean;
	keydown: any;
	keyup: any;
	keyPresses: any;
	cycleLoop: number[];
	clickMovement: any;
	moveToX: number;
	moveToY: number;
	canvasclick: any;
	isMenushowing: boolean;
	imagehud: HTMLImageElement;
	image: HTMLImageElement;
	imageTab: HTMLImageElement;

	constructor(config: any) {
		super(config);

		this.keyPresses = {};
		this.frameCount = 0;
		this.frameLimit = 20;
		this.currentLoopIndex = 0;
		this.cycleLoop = [0, 1, 2];
		this.playerSpeed = config.playerSpeed || 1;
		this.isPlayerControlled = config.isPlayerControlled || false;
		this.sprite.scale = 1.5;
		this.isMenushowing = false;
		this.isAuthPlayer = isAuthPlayer(config.isAuthPlayer) || false;

		this.keydown = document.addEventListener("keydown", (e) => {
			this.keyPresses[e.key] = true;
		});

		this.keyup = document.addEventListener("keyup", (e) => {
			this.keyPresses[e.key] = false;
		});

		this.moveToX = 0;
		this.moveToY = 0;

		this.canvasclick = document.addEventListener("click", (e) => {
			startingPointX = 0;
			startingPointY = 0;
			walkingX = false;
			walkingY = false;
			this.moveToX = e.clientX;
			this.moveToY = e.clientY;
		});

		this.imagehud = new Image();
		this.imagehud.src = GameHud;

		this.image = new Image();
		this.image.src = GameMenu;

		this.imageTab = new Image();
		this.imageTab.src = Tab;
	}

	getClicked(context: any) {
		const rect = context.canvas.getBoundingClientRect();
		let x = this.moveToX - rect.left;
		let y = this.moveToY - rect.top;

		if (
			x < 0 ||
			y < 0 ||
			x > context.canvas.width ||
			y > context.canvas.height - this.imagehud.height
		) {
			return;
		} else {
			this.walkdirection(x, y, context);
		}
	}
	walkY(y: number, DistanceY: number, context: any) {
		if (y > context.canvas.height / 2 + this.sprite.imageHeight) {
			if (startingPointY < DistanceY && walkingY === false) {
				startingPointY += this.playerSpeed;
				this.y += this.playerSpeed;
				this.sprite.currentDirection = 0;
				this.moving = true;
			} else {
				y = 0;
				startingPointY = 0;
				walkingY = true;
				this.moving = false;
			}
		}

		if (y < context.canvas.height / 2 + this.sprite.imageHeight) {
			if (startingPointY > DistanceY && walkingY === false) {
				startingPointY -= this.playerSpeed;
				this.y -= this.playerSpeed;
				this.sprite.currentDirection = 3;
				this.moving = true;
			} else {
				y = 0;
				startingPointY = 0;
				walkingY = true;
				this.moving = false;
			}
		}
	}
	walkX(x: number, DistanceX: number, context: any) {
		if (x > context.canvas.width / 2 + this.sprite.imageWidth) {
			if (startingPointX < DistanceX && walkingX === false) {
				startingPointX += this.playerSpeed;
				this.x += this.playerSpeed;
				this.sprite.currentDirection = 2;
				this.moving = true;
			} else {
				x = 0;
				startingPointX = 0;
				walkingX = true;
				this.moving = false;
			}
		}
		if (x < context.canvas.width / 2 + this.sprite.imageWidth) {
			if (startingPointX > DistanceX && walkingX === false) {
				startingPointX -= this.playerSpeed;
				this.x -= this.playerSpeed;
				this.sprite.currentDirection = 1;
				this.moving = true;
			} else {
				x = 0;
				startingPointX = 0;
				walkingX = true;
				this.moving = false;
			}
		}
	}
	walkYX(
		x: number,
		y: number,
		DistanceX: number,
		DistanceY: number,
		context: any
	) {
		if (y > context.canvas.height / 2 + this.sprite.imageHeight) {
			if (startingPointY < DistanceY && walkingY === false) {
				startingPointY += this.playerSpeed;
				this.y += this.playerSpeed;
				this.sprite.currentDirection = 0;
				this.moving = true;
			} else {
				y = 0;
				startingPointY = 0;
				walkingY = true;
				this.moving = false;
			}
		}

		if (y < context.canvas.height / 2 + this.sprite.imageHeight) {
			if (startingPointY > DistanceY && walkingY === false) {
				startingPointY -= this.playerSpeed;
				this.y -= this.playerSpeed;
				this.sprite.currentDirection = 3;
				this.moving = true;
			} else {
				y = 0;
				startingPointY = 0;
				walkingY = true;
				this.moving = false;
				this.walkX(x, DistanceX, context);
			}
		}
	}
	walkXY(
		x: number,
		y: number,
		DistanceX: number,
		DistanceY: number,
		context: any
	) {
		if (x > context.canvas.width / 2 + this.sprite.imageWidth) {
			if (startingPointX < DistanceX && walkingX === false) {
				startingPointX += this.playerSpeed;
				this.x += this.playerSpeed;
				this.sprite.currentDirection = 2;
				this.moving = true;
			} else {
				x = 0;
				startingPointX = 0;
				walkingX = true;
			}
		}
		if (x < context.canvas.width / 2 + this.sprite.imageWidth) {
			if (startingPointX > DistanceX && walkingX === false) {
				startingPointX -= this.playerSpeed;
				this.x -= this.playerSpeed;
				this.sprite.currentDirection = 1;
				this.moving = true;
			} else {
				x = 0;
				startingPointX = 0;
				walkingX = true;
				this.walkY(y, DistanceY, context);
			}
		}
	}
	walkdirection(x: number, y: number, context: any) {
		let DistanceX = x - context.canvas.width / 2 - this.sprite.imageWidth;
		let DistanceY = y - context.canvas.height / 2 - this.sprite.imageHeight;
		if (DistanceX > DistanceY) {
			this.walkYX(x, y, DistanceX, DistanceY, context);
		}
		if (DistanceY > DistanceX) {
			this.walkXY(x, y, DistanceX, DistanceY, context);
		} else {
			return;
		}
	}

	CreateMenu(context: any) {
		if (this.isAuthPlayer && this.isPlayerControlled === true) {
			if (this.isMenushowing) {
				

				context.drawImage(
					this.image,
					context.canvas.width / 2 - this.image.width / 2,
					context.canvas.height / 2 - this.image.height / 2
				);
			}
			context.drawImage(
				this.imagehud,
				context.canvas.width / 2 - this.imagehud.width / 2,
				context.canvas.height - this.imagehud.height,
				this.imagehud.width,
				this.imagehud.height
			);
		}
	}

	update(context: any, walls: any) {
		if (this.isAuthPlayer && this.isPlayerControlled === true) {
			if (this.keyPresses.q) {
				console.log("q");
			}
			if (this.keyPresses.w) {
				console.log("w");
			}
			if (this.keyPresses.e) {
				console.log("e");
			}
			if (this.keyPresses.r) {
				console.log("r");
			}
			if (this.keyPresses.d) {
				console.log("d");
			}
			if (this.keyPresses.f) {
				console.log("f");
			}
			if (this.keyPresses.Tab) {
				if (!this.isMenushowing) {
					this.isMenushowing = true;
				} else {
					this.isMenushowing = false;
					this.moveToX = 0;
					this.moveToY = 0;
				}
				this.keyPresses.Tab = false;
			}

			if (this.isMenushowing === false) {
				this.getClicked(context);
			}

			if (this.moving) {
				this.frameCount++;
				if (this.frameCount >= this.frameLimit) {
					this.frameCount = 0;
					this.currentLoopIndex++;
					if (this.currentLoopIndex >= this.cycleLoop.length) {
						this.currentLoopIndex = 0;
					}
				}
			}
			this.moving = false;
			this.sprite.animationframes = this.cycleLoop[this.currentLoopIndex];
		}
		console.log(walls)
	}
	
}

export default Person;
