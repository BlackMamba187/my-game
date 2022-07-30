import React from "react";
import Person from "../Person";
import PlayerClass from "./Class/PlayerClass";
import PlayerRace from "./Race/PlayerRace";

class Player extends Person {
	maxHealthPoints: number;
	armorClass: number;
	alignment: any;
	class: PlayerClass;
	race: PlayerRace;
	savingThrows: any;
	meleeAtk: any;
	rangedAtk: any;
	abilityScoreStr: any;
	abilityScoreDex: any;
	abilityScoreCon: any;
	abilityScoreInt: any;
	abilityScoreWis: any;
	abilityScoreCha: any;
	feat: any;
	spell: any;
	equipment: any;
	wealth: any;
	language: any;
	weight: any;

	constructor(config: any) {
		super(config);

		this.maxHealthPoints = config.maxHealthPoints || 1;
		this.armorClass = config.armorClass || 1;
		this.alignment = config.alignment || "N";
		this.class = new PlayerClass({}) || null;
		this.race = new PlayerRace({}) || null;

		this.meleeAtk = config.meleeAtk || 1;
		this.rangedAtk = config.rangedAtk || 1;
		this.playerSpeed = config.playerSpeed || 1;
		this.savingThrows = config.savingThrows || 1;

		this.abilityScoreStr = config.abilityScoreStr || 1;
		this.abilityScoreDex = config.abilityScoreDex || 1;
		this.abilityScoreCon = config.abilityScoreCon || 1;
		this.abilityScoreInt = config.abilityScoreInt || 1;
		this.abilityScoreWis = config.abilityScoreWis || 1;
		this.abilityScoreCha = config.abilityScoreCha || 1;

		this.weight = config.weight || this.abilityScoreStr * 100;

		this.feat = config.feat || null;
		this.spell = config.spell || null;
		this.equipment = config.equipment || null;
		this.wealth = config.wealth || 0;
		this.language = config.language || null;
	}
	update() {}
}

export default Player;
