import React, { useState } from "react";
import { utils } from "../Utils/Utils";
import GameObject from "./GameObject";

const CYCLE_LOOP = [0, 1, 2];
let currentLoopIndex = 0;

const FRAME_LIMIT = 12;
let frameCount = 0;

let keyPresses: any = {};

class Person extends GameObject {
	keys: any;

	playerSpeed: number;
	isPlayerControlled: boolean;
	isAuthPlayer: boolean;
	moving!: boolean;

	constructor(config: any) {
		super(config);
		this.isPlayerControlled = config.isPlayerControlled || false;
		this.isAuthPlayer = config.isAuthPlayer || false;
		this.playerSpeed = config.playerSpeed || 1;
	}

	update() {
		window.addEventListener("keydown", keyDownListener, false);
		function keyDownListener(event: any) {
			keyPresses[event.key] = true;
		}
		window.addEventListener("keyup", keyUpListener, false);
		function keyUpListener(event: any) {
			keyPresses[event.key] = false;
		}

		if (this.isAuthPlayer && this.isPlayerControlled === true) {
			const MainPlayerMovement = () => {
				if (keyPresses.w) {
					this.y -= this.playerSpeed;
					this.sprite.currentDirection = 3;
					this.moving = true;
				}
				if (keyPresses.a) {
					this.x -= this.playerSpeed;
					this.sprite.currentDirection = 1;
					this.moving = true;
				}
				if (keyPresses.s) {
					this.y += this.playerSpeed;
					this.sprite.currentDirection = 0;
					this.moving = true;
				}

				if (keyPresses.d) {
					this.x += this.playerSpeed;
					this.sprite.currentDirection = 2;
					this.moving = true;
				}
			};

			if (this.moving) {
				frameCount++;
				if (frameCount >= FRAME_LIMIT) {
					frameCount = 0;
					currentLoopIndex++;
					if (currentLoopIndex >= CYCLE_LOOP.length) {
						currentLoopIndex = 0;
					}
				}
			}
			this.moving = false;
			this.sprite.animationframes = CYCLE_LOOP[currentLoopIndex];
			MainPlayerMovement();
		}
	}
}

export default Person;
