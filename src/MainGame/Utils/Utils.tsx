import Acolyte from "../Player/PlayerClasses/Acolyte";
import Mage from "../Player/PlayerClasses/Mage";
import Ranger from "../Player/PlayerClasses/Ranger";
import Rogue from "../Player/PlayerClasses/Rogue";
import Warrior from "../Player/PlayerClasses/Warrior";

import Bear from "../Player/PlayerRace/Bear";
import Cat from "../Player/PlayerRace/Cat";
import Demon from "../Player/PlayerRace/Demon";
import Dog from "../Player/PlayerRace/Dog";
import Human from "../Player/PlayerRace/Human";
import Rabbit from "../Player/PlayerRace/Rabbit";

export const utils = {
	withGrid(n: number) {
		return n * 16;
	},
};

export const ClassHP = (level: number, PlayerClass: String) => {
	if (PlayerClass === "Warrior") {
		return level * Warrior.HPperLevel;
	}
	if (PlayerClass === "Acolyte") {
		return level * Acolyte.HPperLevel;
	}
	if (PlayerClass === "Mage") {
		return level * Mage.HPperLevel;
	}
	if (PlayerClass === "Rogue") {
		return level * Rogue.HPperLevel;
	}
	if (PlayerClass === "Ranger") {
		return level * Ranger.HPperLevel;
	} else {
		return 0;
	}
};

export const ClassBAB = (level: number, PlayerClass: String) => {
	if (PlayerClass === "Warrior") {
		return Math.round(level * Warrior.BABconstant);
	}
	if (PlayerClass === "Acolyte") {
		return Math.round(level * Acolyte.BABconstant);
	}
	if (PlayerClass === "Mage") {
		return Math.round(level * Mage.BABconstant);
	}
	if (PlayerClass === "Rogue") {
		return Math.round(level * Rogue.BABconstant);
	}
	if (PlayerClass === "Ranger") {
		return Math.round(level * Ranger.BABconstant);
	} else {
		return 0;
	}
};

export const PlayerExp = (level: number, PlayerClass: String) => {
	if (PlayerClass === "Warrior") {
		return Math.round(Math.pow(level, 2) / Math.pow(Warrior.EXPconstant, 2));
	}
	if (PlayerClass === "Acolyte") {
		return Math.round(Math.pow(level, 2) / Math.pow(Acolyte.EXPconstant, 2));
	}
	if (PlayerClass === "Mage") {
		return Math.round(Math.pow(level, 2) / Math.pow(Mage.EXPconstant, 2));
	}
	if (PlayerClass === "Rogue") {
		return Math.round(Math.pow(level, 2) / Math.pow(Rogue.EXPconstant, 2));
	}
	if (PlayerClass === "Ranger") {
		return Math.round(Math.pow(level, 2) / Math.pow(Ranger.EXPconstant, 2));
	} else {
		return 0;
	}
};

export const RaceDodge = (PlayerRace: String) => {
	if (PlayerRace === "Human") {
		return 0;
	} else if (PlayerRace === "Dog") {
		return 0;
	} else if (PlayerRace === "Demon") {
		return 0;
	} else if (PlayerRace === "Bear") {
		return 0;
	} else if (PlayerRace === "Rabbit") {
		return Rabbit.AcDodge;
	} else if (PlayerRace === "Cat") {
		return 0;
	}
};

export const RaceNatural = (PlayerRace: String) => {
	if (PlayerRace === "Bear") {
		return Bear.AcNatural;
	} else {
		return 0;
	}
};

export const RaceFort = (PlayerRace: String) => {
	if (PlayerRace === "Human") {
		return Human.savingThrowFort;
	}
	if (PlayerRace === "Rabbit") {
		return Rabbit.savingThrowFort;
	}
	if (PlayerRace === "Dog") {
		return Dog.savingThrowFort;
	}
	if (PlayerRace === "Demon") {
		return Demon.savingThrowFort;
	}
	if (PlayerRace === "Cat") {
		return Cat.savingThrowFort;
	}
	if (PlayerRace === "Bear") {
		return Bear.savingThrowFort;
	} else {
		return 0;
	}
};

export const RaceRef = (PlayerRace: String) => {
	if (PlayerRace === "Human") {
		return Human.savingThrowRef;
	}
	if (PlayerRace === "Rabbit") {
		return Rabbit.savingThrowRef;
	}
	if (PlayerRace === "Dog") {
		return Dog.savingThrowRef;
	}
	if (PlayerRace === "Demon") {
		return Demon.savingThrowRef;
	}
	if (PlayerRace === "Cat") {
		return Cat.savingThrowRef;
	}
	if (PlayerRace === "Bear") {
		return Bear.savingThrowRef;
	} else {
		return 0;
	}
};

export const RaceWill = (PlayerRace: String) => {
	if (PlayerRace === "Human") {
		return Human.savingThrowWill;
	}
	if (PlayerRace === "Rabbit") {
		return Rabbit.savingThrowWill;
	}
	if (PlayerRace === "Dog") {
		return Dog.savingThrowWill;
	}
	if (PlayerRace === "Demon") {
		return Demon.savingThrowWill;
	}
	if (PlayerRace === "Cat") {
		return Cat.savingThrowWill;
	}
	if (PlayerRace === "Bear") {
		return Bear.savingThrowWill;
	} else {
		return 0;
	}
};
