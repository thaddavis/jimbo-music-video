import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_3_stanza_3_phrase(timeline) {
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
              y: 1,
              z: 4,
            },
            to: {
              x: 0,
              y: 0,
              z: 4,
            },
          },
          {
            path: "mesh.rotation",
            from: {
              x: 0,
              y: Math.PI / 16,
              z: 0,
            },
            to: {
              x: 0,
              y: -Math.PI / 16,
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
        startAt: 35,
        endAt: 37.5,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    // startAt: 16.9,
    // endAt: 23.7,
    startAt: 35,
    endAt: 37.5,
  };
}
