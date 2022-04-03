import { v4 as uuidv4 } from "uuid";
import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_bridge_cross(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.CROSS,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "model.position",
            from: {
              x: 0.05,
              y: -3,
              z: 1.5,
            },
            to: {
              x: 0.05,
              y: -3,
              z: 1.5,
            },
          },
          {
            path: "model.scale",
            from: {
              x: 0.18,
              y: 0.18,
              z: 0.18,
            },
            to: {
              x: 0.18,
              y: 0.18,
              z: 0.18,
            },
          },
          // {
          //   path: "model.rotation",
          //   from: {
          //     x: 0,
          //     y: 0,
          //     z: 0,
          //   },
          //   to: {
          //     x: 0,
          //     // y: 0,
          //     y: Math.PI * 2,
          //     z: 0,
          //   },
          // },
        ],
        // startAt: 0,
        // endAt: 1250
        startAt: 72.6,
        endAt: 80,
      },
    ],
    started: false,
    startAt: 72.6,
    endAt: 80,
  };
}
