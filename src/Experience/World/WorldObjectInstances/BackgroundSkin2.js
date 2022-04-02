import { Vector3 } from "three";

import { INSTANCE_NAMES } from "../../Utils/Enums";
import BackgroundSkin2 from "Experience/World/WorldObjectClasses/BackgroundSkin2";

export default {
  theClass: BackgroundSkin2,
  initialProperties: {
    instanceName: INSTANCE_NAMES.BACKGROUND_SKIN_2,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Vector3(0, 0, 0),
  },
};
