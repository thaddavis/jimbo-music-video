import Text from "Experience/World/WorldObjectClasses/Text";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export default {
  theClass: Text,
  initialProperties: {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_4,
    text: "Emotions got blended",
    position: new Vector3(1, 1, 1),
    scale: new Vector3(1, 1, 1),
  },
};
