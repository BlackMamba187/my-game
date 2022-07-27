import { atom } from "recoil";

import ShipTown from "../../Maps/ShipTown";
import Town1 from "../../Maps/Town1";

export const MapState = atom({
	key: "MapState ",
	default:  Town1,
});
