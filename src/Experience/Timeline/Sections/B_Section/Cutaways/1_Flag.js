import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_b_section_cutaway_1_flag(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.FLAG,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 0,
              z: 0,
            },
            to: {
              x: 0,
              y: 0,
              z: 0,
            },
          },
        ],
        startAt: 44.7,
        endAt: 45.7,
      },
    ],
    started: false,
    startAt: 44.7,
    endAt: 45.7,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.FLAG,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 0,
              z: 0,
            },
            to: {
              x: 0,
              y: 0,
              z: 0,
            },
          },
        ],
        startAt: 57.7,
        endAt: 59.3,
      },
    ],
    started: false,
    startAt: 57.7,
    endAt: 59.4,
  };
}
