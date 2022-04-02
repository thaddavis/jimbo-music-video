import { v4 as uuidv4 } from "uuid";

import { EFFECTS, GLOBAL_UPDATABLES } from "Experience/Utils/Enums";

export function timeline_camera(timeline) {
  timeline[uuidv4()] = {
    isGlobal: true,
    pathToExperienceGlobal: GLOBAL_UPDATABLES.CAMERA_INSTANCE,
    effects: [
      {
        name: EFFECTS.GLOBAL_FROM_TO,
        properties: [
          {
            path: "instance.position",
            from: {
              x: 0,
              y: -3,
              z: 10,
            },
            to: {
              x: 0,
              y: 3,
              z: 10,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 1,
        endAt: 16.9,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 1,
    endAt: 16.9,
  };

  timeline[uuidv4()] = {
    isGlobal: true,
    pathToExperienceGlobal: GLOBAL_UPDATABLES.CAMERA_INSTANCE,
    effects: [
      {
        name: EFFECTS.GLOBAL_FROM_TO,
        properties: [
          {
            path: "instance.position",
            from: {
              x: -3,
              y: 0,
              z: 10,
            },
            to: {
              x: 3,
              y: 0,
              z: 10,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 16.9,
        endAt: 32,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 16.9,
    endAt: 32,
  };

  timeline[uuidv4()] = {
    isGlobal: true,
    pathToExperienceGlobal: GLOBAL_UPDATABLES.CAMERA_INSTANCE,
    effects: [
      {
        name: EFFECTS.GLOBAL_FROM_TO,
        properties: [
          {
            path: "instance.position",
            from: {
              x: -3,
              y: 0,
              z: 10,
            },
            to: {
              x: 3,
              y: 0,
              z: 10,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 32,
        endAt: 44.7,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 32,
    endAt: 44.7,
  };

  timeline[uuidv4()] = {
    isGlobal: true,
    pathToExperienceGlobal: GLOBAL_UPDATABLES.CAMERA_INSTANCE,
    effects: [
      {
        name: EFFECTS.GLOBAL_FROM_TO,
        properties: [
          {
            path: "instance.position",
            from: {
              x: -3,
              y: 0,
              z: 10,
            },
            to: {
              x: 3,
              y: 0,
              z: 10,
            },
          },
        ],
        // startAt: 0,
        // endAt: 1250
        // startAt: 0,
        // endAt: 1.25,
        startAt: 44.7,
        endAt: 45.7,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 44.7,
    endAt: 45.7,
  };

  timeline[uuidv4()] = {
    isGlobal: true,
    pathToExperienceGlobal: GLOBAL_UPDATABLES.CAMERA_INSTANCE,
    effects: [
      {
        name: EFFECTS.GLOBAL_FROM_TO,
        properties: [
          {
            path: "instance.position",
            from: {
              x: 0,
              y: 0,
              z: 10,
            },
            to: {
              x: 0,
              y: 0,
              z: 10,
            },
          },
        ],
        startAt: 45.7,
        endAt: 57.7,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 45.7,
    endAt: 57.7,
  };

  timeline[uuidv4()] = {
    isGlobal: true,
    pathToExperienceGlobal: GLOBAL_UPDATABLES.CAMERA_INSTANCE,
    effects: [
      {
        name: EFFECTS.GLOBAL_FROM_TO,
        properties: [
          {
            path: "instance.position",
            from: {
              x: 0,
              y: 0,
              z: 2,
            },
            to: {
              x: 0,
              y: 0,
              z: 2,
            },
          },
        ],
        startAt: 57.7,
        endAt: 59.3,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 57.7,
    endAt: 59.3,
  };

  timeline[uuidv4()] = {
    isGlobal: true,
    pathToExperienceGlobal: GLOBAL_UPDATABLES.CAMERA_INSTANCE,
    effects: [
      {
        name: EFFECTS.GLOBAL_FROM_TO,
        properties: [
          {
            path: "instance.position",
            from: {
              x: 0,
              y: 0,
              z: 2,
            },
            to: {
              x: 0,
              y: 0,
              z: 2,
            },
          },
        ],
        startAt: 59.3,
        endAt: 179,
      },
    ],
    started: false,
    // startAt: 0,
    // endAt: 1.25,
    startAt: 59.3,
    endAt: 179,
  };
}
