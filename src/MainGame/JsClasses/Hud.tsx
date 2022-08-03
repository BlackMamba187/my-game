import React, { Component } from "react";

let keyPresses: any = {};

let isShow: boolean ;

class Hud {
	keytoggle: any;
	hud: any;

	constructor(config: any) {
		this.keytoggle = document.addEventListener("keydown", (e) => {
			if (e.key === "Tab") {
				keyPresses[e.key] = true;
			}
		});
		
	}

	createElement() {}

	init(isAuthPlayer: any, isPlayerControlled: any) {

		this.hud = document.querySelector(".inventory");	
		if (isAuthPlayer && isPlayerControlled === true) {
			if (keyPresses.Tab) {
				if (isShow) {
					this.hud.style.display = "none"
					isShow = false;
					
				} else {
					isShow = true;
					this.hud.style.display = "block"
				}
				keyPresses.Tab = false;
			}
		}
	}
}

export default Hud;
