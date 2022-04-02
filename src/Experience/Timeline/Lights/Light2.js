import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_light_2(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.LIGHT_2,
    initialProperties: {
      scale: new Vector3(1, 1, 1),
    },
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "light.position",
            from: {
              x: 0,
              y: 3,
              z: 10,
            },
            to: {
              x: 0,
              y: 3,
              z: 10,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 16.9,
        endAt: 179,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 16.9,
    endAt: 179,
  };
}
