import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_bridge_white_background(timeline) {
  // --- --- --- --- --- --- --- --- BRIDGE STARTS
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND,
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
          {
            path: "mesh.scale",
            from: {
              x: 1.5,
              y: 1.5,
              z: 1,
            },
            to: {
              x: 2.2,
              y: 2.2,
              z: 1,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 72.8,
        // endAt: 1:54.3,
        endAt: 114.0,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 72.8,
    endAt: 114.0,
  };
}
