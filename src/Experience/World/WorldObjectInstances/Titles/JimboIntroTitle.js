import Text from "Experience/World/WorldObjectClasses/Text";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "../../../Utils/Enums";

export default {
  theClass: Text,
  initialProperties: {
    instanceName: INSTANCE_NAMES.JIMBO_INTRO_TITLE,
    text: "JIMBO",
    position: new Vector3(1, 1, 1),
    scale: new Vector3(1, 1, 1),
  },
};
