import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_b_section_2_stanza_2_phrase(timeline) {
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
              z: 1,
            },
            to: {
              x: 0,
              y: 2,
              z: 3,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        // startAt: 16.9,
        // endAt: 23.7,
        startAt: 51.2,
        endAt: 57.7,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    // startAt: 16.9,
    // endAt: 23.7,
    startAt: 51.2,
    endAt: 57.7,
  };

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
              z: 5,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        // startAt: 16.9,
        // endAt: 23.7,
        startAt: 65.2,
        endAt: 71.6,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    // startAt: 16.9,
    // endAt: 23.7,
    startAt: 65.2,
    endAt: 71.6,
  };
}