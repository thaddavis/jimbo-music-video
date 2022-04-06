import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_1_stanza_3_phrase(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_3,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: -2,
              z: 3,
            },
            to: {
              x: 1,
              y: 2,
              z: 3,
            },
          },
          {
            path: "mesh.rotation",
            from: {
              x: 0,
              y: Math.PI / 32,
              z: -(Math.PI / 32),
            },
            to: {
              x: 0,
              y: -(Math.PI / 32),
              z: Math.PI / 32,
            },
          },
        ],
        startAt: 21,
        endAt: 23.7,
      },
    ],
    started: false,
    startAt: 21,
    endAt: 23.7,
  };
}
