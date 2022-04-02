import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_a_section_background(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND,
    initialProperties: {
      scale: new Vector3(1, 1, 1),
    },
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
              z: 2,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 1,
              y: 1,
              z: 1,
            },
            to: {
              x: 2,
              y: 2,
              z: 1,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 16.9,
        endAt: 23.7,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 16.9,
    endAt: 23.7,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND,
    initialProperties: {
      scale: new Vector3(1, 1, 1),
    },
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
              z: 2,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 1,
              y: 1,
              z: 1,
            },
            to: {
              x: 2,
              y: 2,
              z: 1,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 24.5,
        endAt: 30.5,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 24.5,
    endAt: 30.5,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND,
    initialProperties: {
      scale: new Vector3(1, 1, 1),
    },
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
              z: 2,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 1,
              y: 1,
              z: 1,
            },
            to: {
              x: 2,
              y: 2,
              z: 1,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 31.5,
        endAt: 37.5,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 31.5,
    endAt: 37.5,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND,
    initialProperties: {
      scale: new Vector3(1, 1, 1),
    },
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
              z: 2,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 1,
              y: 1,
              z: 1,
            },
            to: {
              x: 2,
              y: 2,
              z: 1,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 38.5,
        endAt: 44.7,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 38.5,
    endAt: 44.7,
  };
}
