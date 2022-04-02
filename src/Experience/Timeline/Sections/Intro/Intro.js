import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import { Vector3 } from "three";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_intro(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.JIMBO_INTRO_TITLE,
    initialProperties: {
      text: "BINGO!!!",
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
        startAt: 0,
        endAt: 1.25,
      },
    ],
    started: false,
    startAt: 0,
    endAt: 1.25,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.GLOBE,
    initialProperties: {
      scale: new Vector3(1, 1, 1),
    },
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "model.position",
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
            path: "model.scale",
            from: {
              x: 3,
              y: 3,
              z: 3,
            },
            to: {
              x: 9,
              y: 9,
              z: 9,
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
              x: (Math.PI * 30.0) / 100,
              y: (Math.PI * 41.0) / 100,
              z: 0,
            },
          },
        ],
        startAt: 1.25,
        endAt: 16.9,
      },
    ],
    started: false,
    startAt: 1.25,
    endAt: 16.9,
  };

  // timeline[uuidv4()] = {
  //     isGlobal: true,
  //     effect: {
  //         name: EFFECTS.GLOBAL_FROM_TO,
  //         pathToExperienceGlobal: 'camera.instance',
  //         properties: [{
  //             path: 'position',
  //             from: {
  //                 x: 0,
  //                 y: 0,
  //                 z: 10
  //             },
  //             to: {
  //                 x: 0,
  //                 y: 0,
  //                 z: 10
  //             }
  //         }],
  //         startAt: 1.25,
  //         endAt: 16.9
  //     },
  //     started: false
  // }
}
