import Globe from "Experience/World/WorldObjectClasses/Models/Globe";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "../../Utils/Enums";

export default {
  theClass: Globe,
  initialProperties: {
    instanceName: INSTANCE_NAMES.GLOBE,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Vector3(0, 0, 0),
  },
};
