import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_b_section_1_stanza_1_phrase(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_B_PHRASE_1,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: -3,
              z: 3,
            },
            to: {
              x: 0,
              y: 3,
              z: 4,
            },
          },
        ],
        startAt: 45.5,
        endAt: 50.8,
      },
    ],
    started: false,
    startAt: 45.5,
    endAt: 50.8,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_B_PHRASE_1,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 0,
              z: 2,
            },
            to: {
              x: 0,
              y: 3,
              z: 3,
            },
          },
        ],
        startAt: 50.8,
        endAt: 56.1,
      },
    ],
    started: false,
    startAt: 50.8,
    endAt: 56.1,
  };
}
