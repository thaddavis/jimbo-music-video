import Light2 from "Experience/World/WorldObjectClasses/Light2";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "../../Utils/Enums";

export default {
  theClass: Light2,
  initialProperties: {
    instanceName: INSTANCE_NAMES.LIGHT_2,
    position: new Vector3(0, 0, 10),
  },
};
