import Cross from "Experience/World/WorldObjectClasses/Models/Cross";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "../../Utils/Enums";

export default {
  theClass: Cross,
  initialProperties: {
    instanceName: INSTANCE_NAMES.CROSS,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Vector3(0, 0, 0),
  },
};
