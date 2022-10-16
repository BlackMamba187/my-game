import React, { Component } from "react";
import GameObject from "../JsClasses/GameObject";
import TreePic from "../../Assets/objects/tree1.png";
import { utils } from "../Utils/Utils";
class Tree extends GameObject {
	constructor(config: any) {
		super(config);
		this.isGameObject = true;
		this.loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		this.x = utils.withGrid(config.x) -35;
		this.y = utils.withGrid(config.y) -160;
		this.sprite.image.src = config.src || TreePic;
		this.sprite.imageHeight = 160;
		this.sprite.imageWidth = 160;
	}
}
export default Tree;
