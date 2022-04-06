import { Vector3 } from "three";

import { INSTANCE_NAMES } from "../../Utils/Enums";
import WitherberryLogo from "../WorldObjectClasses/Models/Witherberry";

export default {
  theClass: WitherberryLogo,
  initialProperties: {
    instanceName: INSTANCE_NAMES.WITHERBERRY_LOGO,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: new Vector3(0, 0, 0),
  },
};
