import Light from "Experience/World/Reusables/Light";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "../../Utils/Enums";

export default {
  theClass: Light,
  initialProperties: {
    instanceName: INSTANCE_NAMES.LIGHT,
    position: new Vector3(0, 0, 10),
  },
};
