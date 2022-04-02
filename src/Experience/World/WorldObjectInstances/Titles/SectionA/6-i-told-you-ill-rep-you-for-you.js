import Text from "Experience/World/WorldObjectClasses/Text";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export default {
  theClass: Text,
  initialProperties: {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_6,
    text: "I told you I'll rep you for you",
    position: new Vector3(1, 1, 1),
    scale: new Vector3(1, 1, 1),
  },
};
