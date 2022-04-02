import { v4 as uuidv4 } from "uuid";
import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_b_section_backgrounds(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND_SKIN_1,
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
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 45.5,
        endAt: 51.2,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 45.5,
    endAt: 51.2,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND_SKIN_2,
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
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 51.2,
        endAt: 57.7,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 51.2,
    endAt: 57.7,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND_SKIN_1,
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
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 59.3,
        endAt: 65.5,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 59.3,
    endAt: 65.5,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND_SKIN_2,
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
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 65.5,
        endAt: 72.5,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 65.5,
    endAt: 72.5,
  };
}
