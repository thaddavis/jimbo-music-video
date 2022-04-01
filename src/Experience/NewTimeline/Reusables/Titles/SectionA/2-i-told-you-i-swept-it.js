import Text from "Experience/World/Reusables/Text";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export default {
  theClass: Text,
  initialProperties: {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_2,
    text: "I told you I swept it",
    position: new Vector3(1, 1, 1),
    scale: new Vector3(1, 1, 1),
  },
};
