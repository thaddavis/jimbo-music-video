// import Background from 'Experience/World/Reusables/Background'
// import Light from 'Experience/World/Reusables/Light'
// import Text from 'Experience/World/Reusables/Text'

// import { Vector2, Vector3 } from 'three';
// import { v4 as uuidv4 } from 'uuid';

import Text from "./Reusables/Text";
import Light from "./Reusables/Light";

export function initializeReusables(reusables) {
  reusables["Text"] = Text;
  reusables["Light"] = Light;

  for (let r in reusables) {
    console.log("r", r);

    reusables[r] = new reusables[r].theClass(reusables[r].initialProperties);
  }
}
