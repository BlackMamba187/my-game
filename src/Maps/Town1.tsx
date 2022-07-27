import React from "react";
import GameObject from "../JsClasses/GameObject";
import imageT from "../images/maps/town1.png";
import heroone from "../images/characters/Male1.png";
import herotwo from "../images/characters/Male16.png";
import herothree from "../images/characters/Female12.png";
import herofour from "../images/characters/Female24.png";
import herofive from "../images/characters/Male2.png";
import { utils } from "../Utils/Utils";
import Person from "../JsClasses/Person";

const isAuthPlayer = (id: any) => {
	return id === 1;
};

const hero1 = new Person({
	isPlayerControlled: true,
	isAuthPlayer: isAuthPlayer(1),
	x: utils.withGrid(5),
	y: utils.withGrid(16),
	src: heroone,
});

const hero2 = new Person({
	x: utils.withGrid(20),
	y: utils.withGrid(10),
	src: herotwo,
});

const hero3 = new Person({
	x: utils.withGrid(50),
	y: utils.withGrid(15),
	src: herothree,
});

const hero4 = new Person({
	x: utils.withGrid(48),
	y: utils.withGrid(15),
	src: herofour,
});

const hero5 = new Person({
	isPlayerControlled: true,
	isAuthPlayer: isAuthPlayer(2),
	x: utils.withGrid(55),
	y: utils.withGrid(14),
	src: herofive,
});

const Town1 = {
	lowerSrc: imageT,
	upperSrc: null,
	gameObjects: {
		hero: hero1,
		hero2: hero2,
		hero3: hero3,
		hero4: hero4,
		hero5: hero5,
	},
};

export default Town1;
