import Light1 from "Experience/World/WorldObjectClasses/Light1";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "../../Utils/Enums";

export default {
  theClass: Light1,
  initialProperties: {
    instanceName: INSTANCE_NAMES.LIGHT_1,
    position: new Vector3(0, 0, 10),
  },
};
