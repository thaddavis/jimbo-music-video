import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_ad_lib_3_for_you(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_A_AD_LIBS_FOR_YOU_A,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 4,
              z: 3,
            },
            to: {
              x: 0,
              y: 2,
              z: 4,
            },
          },
        ],
        startAt: 37.5,
        endAt: 38.5,
      },
    ],
    started: false,
    startAt: 37.5,
    endAt: 38.5,
  };
}
