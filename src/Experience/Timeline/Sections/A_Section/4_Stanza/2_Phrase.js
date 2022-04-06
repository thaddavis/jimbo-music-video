import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_4_stanza_2_phrase(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.SECTION_A_PHRASE_5,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 3,
              z: 3,
            },
            to: {
              x: 0,
              y: 2,
              z: 3,
            },
          },
        ],
        startAt: 40,
        endAt: 42,
      },
    ],
    started: false,
    startAt: 40,
    endAt: 42,
  };
}
