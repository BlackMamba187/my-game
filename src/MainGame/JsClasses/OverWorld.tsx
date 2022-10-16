import React, { Component } from "react";
import Maps from "../Maps/Maps";
import Town1 from "../Maps/Town1";
import OverWorldMap from "./OverWorldMap";

class OverWorld {
	map: any;
	constructor() {
		this.map = null;
	}
	init(context: any) {
		this.map = new OverWorldMap(Maps.VillageOne);
		this.map.draw(context);
	}
}

export default OverWorld;
