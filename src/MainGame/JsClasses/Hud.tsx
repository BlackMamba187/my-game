import Inventory from "../../Assets/inventory/Inventory.png";
let keyPresses: any = {};

let isShow: boolean;

class Hud {
	keytoggle: any;
	hud: any;
	image: HTMLImageElement;

	constructor(config: any) {
		this.keytoggle = document.addEventListener("keydown", (e) => {
			if (e.key === "Tab") {
				keyPresses[e.key] = true;
			}
		});

		this.image = new Image();
		this.image.src = Inventory;
	}

	createElement() {
		var c: any = document.getElementById("Inventory");
		var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(this.image, ctx.canvas.width / 2, ctx.canvas.height / 2);
	}

	init(isAuthPlayer: any, isPlayerControlled: any) {
		this.hud = document.querySelector(".inventory");
		if (isAuthPlayer && isPlayerControlled === true) {
			if (keyPresses.Tab) {
				if (isShow) {
					this.hud.style.display = "none";
					isShow = false;
				} else {
					isShow = true;
					this.hud.style.display = "block";
				}
				keyPresses.Tab = false;
			}
		}

		this.createElement();
	}
}

export default Hud;
