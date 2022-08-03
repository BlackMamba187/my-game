import React from "react";
import Person from "./Person";
import {
	ClassBAB,
	ClassHP,
	PlayerExp,
	RaceDodge,
	RaceFort,
	RaceNatural,
	RaceRef,
	RaceWill,
} from "../Utils/Utils";
import Hud from "./Hud";

class Player extends Person {
	level: any;
	maxHealthPoints: number;
	currentHealthPoints: number;
	currentExpPoints: number;
	maxExpPoints: number;
	armorClass: number;
	shield: any;
	armor: any;
	dodge: any;
	natural: any;
	deflect: any;
	alignment: any;
	class!: String;
	race: any;
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
	hud: Hud;
	Initiative: any;

	constructor(config: any) {
		super(config);

		this.level = config.level || 1;

		this.currentHealthPoints = config.currentHealthPoints || 1;
		this.currentExpPoints = config.currentExpPoints || 0;

		this.alignment = config.alignment || "N";
		this.class = config.class || "Warrior";
		this.race = config.Race || "Human";
		this.wealth = config.wealth || 1000;

		this.equipment = config.equipment || null;

		this.shield = config.shield || 0;
		this.armor = config.armor || 0;
		this.dodge = RaceDodge(this.race);
		this.natural = RaceNatural(this.race);
		this.deflect = config.deflect || 0;

		this.Initiative = config.Initiative + (this.abilityScoreDex - 10) || 0;
		this.playerSpeed = config.playerSpeed || 1;

		this.savingThrowFort = RaceFort(this.race);
		this.savingThrowRef = RaceRef(this.race);
		this.savingThrowWill = RaceWill(this.race);

		this.abilityScoreStr = config.abilityScoreStr || 10;
		this.abilityScoreDex = config.abilityScoreDex || 10;
		this.abilityScoreCon = config.abilityScoreCon || 10;
		this.abilityScoreInt = config.abilityScoreInt || 10;
		this.abilityScoreWis = config.abilityScoreWis || 10;
		this.abilityScoreCha = config.abilityScoreCha || 10;

		this.feat = config.feat || null;
		this.spell = config.spell || null;

		//this.language = config.language || null;

		this.maxHealthPoints =
			this.abilityScoreCon - 10 + ClassHP(this.level, this.class);

		this.maxExpPoints = PlayerExp(this.level, this.class) || 99999;

		this.armorClass =
			10 + this.shield + this.armor + this.dodge + this.natural + this.deflect;

		this.maxWeight = (this.abilityScoreStr - 9) * 50;

		this.meleeAtk =
			this.abilityScoreStr - 10 + ClassBAB(this.level, this.class);

		this.rangedAtk =
			this.abilityScoreDex - 10 + ClassBAB(this.level, this.class);

		this.hud = new Hud({});
	}

	init() {
		this.hud.init(this.isAuthPlayer, this.isPlayerControlled);
	}
}

export default Player;
