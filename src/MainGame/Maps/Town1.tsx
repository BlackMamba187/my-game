import React from "react";
import GameObject from "../JsClasses/GameObject";
import { utils } from "../Utils/Utils";
import Person from "../JsClasses/Person";

import LowerTown1 from "../../Assets/maps/Village1Lower.png";

import UpperTown1 from "../../Assets/maps/Village1Upper.png";
import herotwo from "../../Assets/characters/Male16.png";
import herothree from "../../Assets/characters/Female12.png";
import herofour from "../../Assets/characters/Female24.png";
import herofive from "../../Assets/characters/Male2.png";

import Fire from "../../Assets/objects/fire3.png";
import campFire from "../../Assets/objects/campFire.png";
import Alantern from "../../Assets/objects/lantern.png";
import Tree from "../GameObject/Tree";
import collisions from "./collisionData/collision";

//NPC'S
const hero2 = new Person({
	x: utils.withGrid(100),
	y: utils.withGrid(15),
	src: herotwo,
	currentDirection: 0,
});

const hero3 = new Person({
	x: utils.withGrid(100),
	y: utils.withGrid(30),
	src: herothree,
	currentDirection: 1,
});

const hero4 = new Person({
	x: utils.withGrid(105),
	y: utils.withGrid(30),
	src: herofour,
	currentDirection: 2,
});

const hero5 = new Person({
	x: utils.withGrid(90),
	y: utils.withGrid(20),
	src: herofive,
	currentDirection: 3,
});

//objects

const tree1 = new Tree({
	x: 61 * 2,
	y: 20 * 2
});
const tree2 = new Tree({
	x: 65 * 2,
	y: 20 * 2,
});

const collisionsMap = [];
const boundaries: { [x: string]: boolean; }[]= [];

for (let i = 0; i < collisions.length; i += 120) {
	collisionsMap.push(collisions.slice(i, 120 + i));
}

collisionsMap.forEach((row, i) => {
	row.forEach((symbol: number, j: number) => {
		if (symbol === 7510) boundaries.push({ [utils.asGridCoord(j,i)]: true});
	});
});
const mapWalls = Object.assign({}, ...boundaries)

const Town1 = {
	lowerSrc: LowerTown1,
	upperSrc: UpperTown1,
	gameObjects: {
		ob1: tree1,
		ob2: tree2,
	},
	walls: mapWalls
	  
};

export default Town1;
