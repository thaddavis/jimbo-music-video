import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_b_section_2_stanza_1_phrase(timeline) {
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
              z: 2,
            },
            to: {
              x: 0,
              y: 3,
              z: 4,
            },
          },
        ],
        startAt: 59.4,
        endAt: 64.5,
      },
    ],
    started: false,
    startAt: 59.4,
    endAt: 64.5,
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
              z: 4,
            },
          },
        ],
        startAt: 64.5,
        endAt: 71.6,
      },
    ],
    started: false,
    startAt: 64.5,
    endAt: 71.6,
  };
}
