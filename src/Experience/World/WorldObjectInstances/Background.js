import { Vector3 } from "three";

import { INSTANCE_NAMES } from "../../Utils/Enums";
import Background from "Experience/World/WorldObjectClasses/Background";

export default {
  theClass: Background,
  initialProperties: {
    instanceName: INSTANCE_NAMES.BACKGROUND,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Vector3(0, 0, 0),
  },
};
