import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_1_stanza_1_phrase(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_1,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: -1,
              y: -2,
              z: 3,
            },
            to: {
              x: 0,
              y: 2,
              z: 3,
            },
          },
          {
            path: "mesh.rotation",
            from: {
              x: -(Math.PI / 32),
              y: 0,
              z: 0,
            },
            to: {
              x: Math.PI / 32,
              y: 0,
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
        startAt: 16.9,
        endAt: 19,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    // startAt: 16.9,
    // endAt: 23.7,
    startAt: 16.9,
    endAt: 19,
  };
}
