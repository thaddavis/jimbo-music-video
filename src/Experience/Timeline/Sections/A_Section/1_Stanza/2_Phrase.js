import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_1_stanza_2_phrase(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_2,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 2,
              z: 2,
            },
            to: {
              x: 0,
              y: 2,
              z: 4,
            },
          },
          {
            path: "mesh.rotation",
            from: {
              x: 0,
              y: -(Math.PI / 16),
              z: 0,
            },
            to: {
              x: 0,
              y: Math.PI / 16,
              z: 0,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        // startAt: 16.9,
        // endAt: 23.7,
        startAt: 19,
        endAt: 21,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    // startAt: 16.9,
    // endAt: 23.7,
    startAt: 19,
    endAt: 21,
  };
}
