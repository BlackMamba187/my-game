import React from "react";
import Person from "../../MainGame/JsClasses/Person";
import { utils } from "../../MainGame/Utils/Utils";
import heroone from "../../images/characters/Male9.png";
import Player from "../../MainGame/JsClasses/Player/Player";
import Warrior from "../../MainGame/JsClasses/Player/Class/Warrior/Warrior";

const myLevel = 1;

const MainPlayer = new Player({
	isPlayerControlled: true,
	isAuthPlayer: 1, //UserID
	src: heroone,

	expPoints: 0, //depends on played
	currentExpPoints: 0,

	maxHealthPoints: null, //from Con & class & Race
	currentHealthPoints: null,

	shield: null,//fromclass & Race
	armor: null,//fromclass & Race
	dodge: null,//fromclass & Race
	natural: null,//fromclass & Race
	deflect: null, //fromclass & Race


	alignment: null, //Player picks

	class: new Warrior({
		classLevel: myLevel,
	}), //Player picks & bonuses from Race

	race: null, //Player picks

	savingThrowFort: null,
	savingThrowRef: null,
	savingThrowWill: null, //fromclass & Race

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
