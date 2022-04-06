import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_b_section_1_stanza_2_phrase(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_B_PHRASE_2,
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
              x: 0,
              y: 2,
              z: 2.2,
            },
          },
        ],
        startAt: 50.8,
        endAt: 57.9,
      },
    ],
    started: false,
    startAt: 50.8,
    endAt: 57.9,
  };
}
