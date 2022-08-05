import React from "react";
import GameObject from "../JsClasses/GameObject";
import { utils } from "../Utils/Utils";
import Person from "../JsClasses/Person";

import imageT from "../../Assets/maps/town1.png";
import herotwo from "../../Assets/characters/Male16.png";
import herothree from "../../Assets/characters/Female12.png";
import herofour from "../../Assets/characters/Female24.png";
import herofive from "../../Assets/characters/Male2.png";

import Tree from "../../Assets/objects/tree1.png";
import Fire from "../../Assets/objects/fire3.png";
import campFire from "../../Assets/objects/campFire.png";
import Alantern from "../../Assets/objects/lantern.png";

//NPC'S
const hero2 = new Person({
	x: utils.withGrid(40),
	y: utils.withGrid(15),
	src: herotwo,
});

const hero3 = new Person({
	x: utils.withGrid(130),
	y: utils.withGrid(30),
	src: herothree,
});

const hero4 = new Person({
	x: utils.withGrid(135),
	y: utils.withGrid(30),
	src: herofour,
});

const hero5 = new Person({
	x: utils.withGrid(150),
	y: utils.withGrid(20),
	src: herofive,
});

//objects

{ /*const tree = new GameObject({
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

const lantern = new GameObject({
	isGameObject: true,
	loop: [0, 1, 2, 3, 4, 5, 6, 7],
	x: utils.withGrid(68),
	y: utils.withGrid(24),
	src: Alantern,
	imageWidth: 32,
	imageHeight: 95,

});*/}

const Town1 = {
	lowerSrc: imageT,
	upperSrc: null,
	gameObjects: {
		hero2: hero2,
		hero3: hero3,
		hero4: hero4,
		hero5: hero5,
		
	},
};

export default Town1;
