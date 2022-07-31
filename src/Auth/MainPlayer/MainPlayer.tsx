import React from "react";
import Person from "../../MainGame/JsClasses/Person";
import { utils } from "../../MainGame/Utils/Utils";
import heroone from "../../images/characters/Female12.png";
import Player from "../../MainGame/JsClasses/Player/Player";

const MainPlayer = new Player({
	isPlayerControlled: true,
	isAuthPlayer: 1, //UserID
	expPoints: 0, //depends on played
	// Creation process
	src: heroone,

	maxHealthPoints: null, //from Con & class & Race

	armorClass: null, //fromclass & Race
	alignment: null, //Player picks

	class: null, //Player picks & bonuses from Race
	race: null, //Player picks
	savingThrows: null, //fromclass & Race
	
	meleeAtk: null, //from Str class & Race

	rangedAtk: null, //from Dex class & Race

	abilityScoreStr: null, //Player picks & bonuses from Race
	abilityScoreDex: null, //Player picks & bonuses from Race
	abilityScoreCon: null, //Player picks & bonuses from Race
	abilityScoreInt: null, //Player picks & bonuses from Race
	abilityScoreWis: null, //Player picks & bonuses from Race
	abilityScoreCha: null, //Player picks & bonuses from Race
	feat: null, //Player picks,
	spell: null, //Player picks depending on class
	equipment: null, //Player picks,
	wealth: null, //Player Rolls,
	language: null, //Player picks & depends on race
	maxWeight: null, // Race

	playerSpeed: 2, // Race

	x: utils.withGrid(10),
	y: utils.withGrid(25),
});

export default MainPlayer;
