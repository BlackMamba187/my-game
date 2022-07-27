import React from "react";
import GameObject from "../JsClasses/GameObject";
import shipTown from "../images/maps/ShipTown.png";
import heroone from "../images/characters/Male1.png";
import { utils } from "../Utils/Utils";

const hero1 = new GameObject({
	x: utils.withGrid(5),
	y: utils.withGrid(16),
	src: heroone,
});

const ShipTown = {
	lowerSrc: shipTown,
	upperSrc: null,
	gameObjects: { hero: hero1 },
};

export default ShipTown;
