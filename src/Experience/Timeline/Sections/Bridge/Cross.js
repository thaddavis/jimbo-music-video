import { v4 as uuidv4 } from "uuid";
import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";
import { Interpolation } from "../../../Utils/Interpolation";

export function timeline_bridge_cross(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.CROSS,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "model.position",
            interpolationMode: Interpolation.MODES.EASE_OUT,
            from: {
              x: 0.04,
              y: -3,
              z: 4,
            },
            to: {
              x: 0.04,
              y: -3,
              z: 4,
            },
          },
          {
            path: "model.scale",
            from: {
              x: 0.14,
              y: 0.14,
              z: 0.14,
            },
            to: {
              x: 0.14,
              y: 0.14,
              z: 0.14,
            },
          },
          {
            path: "model.rotation",
            interpolationMode: Interpolation.MODES.EASE_OUT,
            from: {
              x: 0,
              y: 0,
              z: 0,
            },
            to: {
              x: 0,
              // y: 0,
              y: Math.PI * 8,
              z: 0,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        startAt: 72.6,
        endAt: 74.8,
      },
    ],
    started: false,
    startAt: 72.6,
    endAt: 74.8,
  };
}
