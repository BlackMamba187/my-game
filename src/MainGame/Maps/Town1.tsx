import React from "react";
import GameObject from "../JsClasses/GameObject";
import { utils } from "../Utils/Utils";
import Person from "../JsClasses/Person";

import imageT from "../../images/maps/town1.png";
import heroone from "../../images/characters/Male9.png";
import herotwo from "../../images/characters/Male16.png";
import herothree from "../../images/characters/Female12.png";
import herofour from "../../images/characters/Female24.png";
import herofive from "../../images/characters/Male2.png";

import Tree from "../../images/objects/tree1.png";
import Fire from "../../images/objects/fire3.png";
import campFire from "../../images/objects/campFire.png";
//NPC'S
const hero2 = new Person({
	x: utils.withGrid(30),
	y: utils.withGrid(15),
	src: herotwo,
});

const hero3 = new Person({
	x: utils.withGrid(75),
	y: utils.withGrid(20),
	src: herothree,
});

const hero4 = new Person({
	x: utils.withGrid(72),
	y: utils.withGrid(20),
	src: herofour,
});

const hero5 = new Person({
	isPlayerControlled: true,
	isAuthPlayer: 6,
	playerSpeed: 2,
	x: utils.withGrid(80),
	y: utils.withGrid(14),
	src: herofive,
});

//objects

const tree = new GameObject({
	isGameObject: true,
	loop: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	x: utils.withGrid(60),
	y: utils.withGrid(40),
	src: Tree,
	imageWidth: 160,
	imageHeight: 160,
});

const tree3 = new GameObject({
	isGameObject: true,
	loop: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	x: utils.withGrid(68),
	y: utils.withGrid(42),
	src: Tree,
	imageWidth: 160,
	imageHeight: 160,
});

const tree2 = new GameObject({
	isGameObject: true,
	loop: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	x: utils.withGrid(75),
	y: utils.withGrid(40),
	src: Tree,
	imageWidth: 160,
	imageHeight: 160,
});

const fire= new GameObject({
	isGameObject: true,
	loop: [0, 1, 2, 3, 4, 5],
	x: utils.withGrid(65),
	y: utils.withGrid(20),
	src: Fire,
	imageWidth: 32,
	imageHeight: 64,
});

const fire2= new GameObject({
	isGameObject: true,
	loop: [0, 1, 2, 3, 4, 5],
	x: utils.withGrid(60),
	y: utils.withGrid(20),
	src: campFire,
});

const Town1 = {
	lowerSrc: imageT,
	upperSrc: null,
	gameObjects: {
		hero2: hero2,
		hero3: hero3,
		hero4: hero4,
		hero5: hero5,
		tree: tree,
		tree2: tree2,
		tree3: tree3,
		fire: fire,
		fire2: fire2
	},
};

export default Town1;
