import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_bridge_line_1(timeline) {
  // --- --- --- --- --- --- --- --- BRIDGE STARTS
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.LINE_1,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 0,
              z: 1,
            },
            to: {
              x: 0,
              y: 0,
              z: 1,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 0.05,
              y: 0.05,
              z: 0.05,
            },
            to: {
              x: 3.0,
              y: 0.05,
              z: 0.05,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 72.6,
        endAt: 74.8,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 72.6,
    endAt: 74.8,
  };

  // --- --- --- It's time to say
  // --- --- --- the things you've

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.LINE_1,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 0,
              z: 1,
            },
            to: {
              x: 0,
              y: 0,
              z: 1,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 0.05,
              y: 0.05,
              z: 0.05,
            },
            to: {
              x: 3.0,
              y: 0.05,
              z: 0.05,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 74.8,
        endAt: 77.0,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 74.8,
    endAt: 77.7,
  };

  // --- --- --- always wanted

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.LINE_1,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 0,
              z: 1,
            },
            to: {
              x: 0,
              y: 0,
              z: 1,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 0.05,
              y: 0.05,
              z: 0.05,
            },
            to: {
              x: 3.0,
              y: 0.05,
              z: 0.05,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 74.8,
        endAt: 77.0,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 74.8,
    endAt: 77.9,
  };

  // --- --- --- Hurry up
  // --- --- --- before you

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.LINE_1,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 0,
              z: 1,
            },
            to: {
              x: 0,
              y: 0,
              z: 1,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 0.05,
              y: 0.05,
              z: 0.05,
            },
            to: {
              x: 3.0,
              y: 0.05,
              z: 0.05,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 74.8,
        endAt: 77.0,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 74.8,
    endAt: 77.9,
  };
}
