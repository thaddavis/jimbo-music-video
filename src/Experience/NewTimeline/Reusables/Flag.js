import Flag from "Experience/World/Reusables/Models/Flag";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "../../Utils/Enums";

export default {
  theClass: Flag,
  initialProperties: {
    instanceName: INSTANCE_NAMES.FLAG,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Vector3(0, 0, 0),
  },
};
