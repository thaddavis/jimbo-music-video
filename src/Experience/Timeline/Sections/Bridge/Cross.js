import { v4 as uuidv4 } from "uuid";
import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_bridge_cross(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.CROSS,
    initialProperties: {
      scale: new Vector3(1, 1, 1),
    },
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          // {
          //   path: "position",
          //   from: {
          //     x: 0,
          //     y: -3,
          //     z: 2,
          //   },
          //   to: {
          //     x: 0,
          //     y: 3,
          //     z: 2,
          //   },
          // },
          {
            path: "model.position",
            from: {
              x: 0,
              y: -2,
              z: 2,
            },
            to: {
              x: 0,
              y: -2,
              z: 2,
            },
          },
          {
            path: "model.scale",
            from: {
              x: 0.1,
              y: 0.1,
              z: 0.1,
            },
            to: {
              x: 0.3,
              y: 0.3,
              z: 0.3,
            },
          },
          {
            path: "model.rotation",
            from: {
              x: 0,
              y: 0,
              z: 0,
            },
            to: {
              x: 0,
              // y: 0,
              y: Math.PI * 2,
              z: 0,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        startAt: 72.5,
        endAt: 80,
      },
    ],
    started: false,
    startAt: 72.5,
    endAt: 80,
  };
}
