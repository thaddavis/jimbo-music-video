import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";

import { INSTANCE_NAMES } from "Experience/Utils/Enums";

export function timeline_intro(timeline) {
  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.JIMBO_INTRO_TITLE,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            from: {
              x: 0,
              y: 1.8,
              z: 4,
            },
            to: {
              x: 0,
              y: 1.8,
              z: 4,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 2.5,
              y: 2.5,
              z: 2.5,
            },
            to: {
              x: 2.5,
              y: 2.5,
              z: 2.5,
            },
          },
        ],
        startAt: 0,
        endAt: 16.9,
      },
    ],
    started: false,
    startAt: 0,
    endAt: 16.9,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.WITHERBERRY_LOGO,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "model.position",
            from: {
              x: 0,
              y: -2.6,
              z: 4,
            },
            to: {
              x: 0,
              y: -2.6,
              z: 4,
            },
          },
          {
            path: "model.scale",
            from: {
              x: 0.4,
              y: 0.4,
              z: 0.4,
            },
            to: {
              x: 0.4,
              y: 0.4,
              z: 0.4,
            },
          },
        ],
        startAt: 0,
        endAt: 16.9,
      },
    ],
    started: false,
    startAt: 0,
    endAt: 16.9,
  };

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
              z: 4,
            },
            to: {
              x: 0,
              y: 0,
              z: 4,
            },
          },
          {
            path: "mesh.scale",
            from: {
              x: 0.6,
              y: 0.6,
              z: 0.6,
            },
            to: {
              x: 0.6,
              y: 0.6,
              z: 0.6,
            },
          },
        ],
        startAt: 0,
        endAt: 16.9,
      },
    ],
    started: false,
    startAt: 0,
    endAt: 16.9,
  };

  // timeline[uuidv4()] = {
  //   instanceName: INSTANCE_NAMES.GLOBE,
  //   effects: [
  //     {
  //       name: EFFECTS.FROM_TO,
  //       properties: [
  //         {
  //           path: "model.position",
  //           from: {
  //             x: 0,
  //             y: 0,
  //             z: 0,
  //           },
  //           to: {
  //             x: 0,
  //             y: 0,
  //             z: 0,
  //           },
  //         },
  //         {
  //           path: "model.scale",
  //           from: {
  //             x: 3,
  //             y: 3,
  //             z: 3,
  //           },
  //           to: {
  //             x: 9,
  //             y: 9,
  //             z: 9,
  //           },
  //         },
  //         {
  //           path: "model.rotation",
  //           from: {
  //             x: 0,
  //             y: 0,
  //             z: 0,
  //           },
  //           to: {
  //             x: (Math.PI * 26.0) / 100,
  //             y: (Math.PI * 40.2) / 100,
  //             z: 0,
  //           },
  //         },
  //       ],
  //       startAt: 0.0,
  //       endAt: 16.9,
  //     },
  //   ],
  //   started: false,
  //   startAt: 0.0,
  //   endAt: 16.9,
  // };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.GLOBE,
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
              x: (Math.PI * 26.4) / 100,
              y: (Math.PI * 53.5) / 100,
              z: 0,
            },
          },
        ],
        startAt: 114.0,
        endAt: 122,
      },
    ],
    started: false,
    startAt: 114.0,
    endAt: 122,
  };
}
