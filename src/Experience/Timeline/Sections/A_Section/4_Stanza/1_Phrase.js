import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_4_stanza_1_phrase(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_4,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 2,
              z: 3,
            },
            to: {
              x: 0,
              y: 1,
              z: 3,
            },
          },
          {
            path: "mesh.rotation",
            from: {
              x: 0,
              y: 0,
              z: -(Math.PI / 32),
            },
            to: {
              x: 0,
              y: 0,
              z: Math.PI / 32,
            },
          },
        ],
        startAt: 38.5,
        endAt: 40,
      },
    ],
    started: false,
    startAt: 38.5,
    endAt: 40,
  };
}
