import React from "react";
import Person from "../Person";
import PlayerClass from "./Class/PlayerClass";
import PlayerRace from "./Race/PlayerRace";

class Player extends Person {
	maxHealthPoints: number;
	currentHealthPoints: number;
	currentExpPoints: number;
	expPoints: number;
	armorClass: number;
	shield: any;
	armor: any;
	dodge: any;
	natural: any;
	deflect: any;
	alignment: any;
	class: PlayerClass;
	race: PlayerRace;
	savingThrowFort: number;
	savingThrowRef: number;
	savingThrowWill: number;
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
	maxWeight: any;
	

	constructor(config: any) {
		super(config);

		this.maxHealthPoints = config.maxHealthPoints || 1;
		this.currentHealthPoints = config.currentHealthPoints || 1;

		this.expPoints = config.expPoints || 0
		this.currentExpPoints = config.currentExpPoints || 0


		this.armorClass = this.shield+ this.armor + this.dodge + this.natural +this.deflect
		this.shield = config.shield || 0;  
		this.armor= config.armor || 0;  
		this.dodge = config.dodge || 0;  
		this.natural = config.natural || 0;  
		this.deflect = config.deflect || 0; 

		this.alignment = config.alignment || "N";

		this.class = config.class ||null;
		this.race = config.Race || null;

		this.meleeAtk = config.meleeAtk || 1;
		this.rangedAtk = config.rangedAtk || 1;
		this.playerSpeed = config.playerSpeed || 1;
		this.savingThrowFort = config.savingThrowFort || 1;
		this.savingThrowRef = config.savingThrowRef || 1;
		this.savingThrowWill = config.savingThrowWill || 1;
		this.abilityScoreStr = config.abilityScoreStr || 1;
		this.abilityScoreDex = config.abilityScoreDex || 1;
		this.abilityScoreCon = config.abilityScoreCon || 1;
		this.abilityScoreInt = config.abilityScoreInt || 1;
		this.abilityScoreWis = config.abilityScoreWis || 1;
		this.abilityScoreCha = config.abilityScoreCha || 1;

		this.maxWeight = config.maxWeight || this.abilityScoreStr * 100;

		this.feat = config.feat || null;
		this.spell = config.spell || null;
		this.equipment = config.equipment || null;
		this.wealth = config.wealth || 0;
		this.language = config.language || null;
	}
	
}

export default Player;
