import { atom } from "recoil";
import Warrior from "../MainGame/JsClasses/Player/Class/Warrior/Warrior";

export const ClassState = atom({
	key: "ClassState",
	default: Warrior,
});
