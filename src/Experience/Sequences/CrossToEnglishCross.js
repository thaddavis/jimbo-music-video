import { v4 as uuidv4 } from "uuid";
import { EFFECTS } from "Experience/Utils/Enums";
import { INSTANCE_NAMES } from "Experience/Utils/Enums";
import { Interpolation } from "Experience/Utils/Interpolation";

// 01:33:14 ->
// 01:34:23 ->
// 01:35:25 ->

// 00:03:00 ->    14/30 = .46    0
// 00:04:09 ->    23/30 = .76    .3
// 00:05:11 ->    25/30 = .83    .36

export function timeline_cross_to_english_cross(timeline) {
  // timeline[uuidv4()] = {
  //   instanceName: INSTANCE_NAMES.CROSS,
  //   effects: [
  //     {
  //       name: EFFECTS.FROM_TO,
  //       properties: [
  //         {
  //           path: "model.position",
  //           interpolationMode: Interpolation.MODES.LINEAR,
  //           from: {
  //             x: 0.04,
  //             y: -3,
  //             z: 4,
  //           },
  //           to: {
  //             x: 0.04,
  //             y: -3,
  //             z: 4,
  //           },
  //         },
  //         {
  //           path: "model.scale",
  //           from: {
  //             x: 0.14,
  //             y: 0.14,
  //             z: 0.14,
  //           },
  //           to: {
  //             x: 0.14,
  //             y: 0.14,
  //             z: 0.14,
  //           },
  //         },
  //       ],
  //       startAt: 0,
  //       endAt: 3,
  //     },
  //     {
  //       name: EFFECTS.FROM_TO,
  //       properties: [
  //         {
  //           path: "model.position",
  //           interpolationMode: Interpolation.MODES.LINEAR,
  //           from: {
  //             x: 0.04,
  //             y: -3,
  //             z: 4,
  //           },
  //           to: {
  //             x: 0.04,
  //             y: -3,
  //             z: 4,
  //           },
  //         },
  //         {
  //           path: "model.scale",
  //           from: {
  //             x: 0.14,
  //             y: 0.14,
  //             z: 0.14,
  //           },
  //           to: {
  //             x: 0.14,
  //             y: 0.14,
  //             z: 0.14,
  //           },
  //         },
  //         {
  //           path: "model.rotation",
  //           interpolationMode: Interpolation.MODES.EASE_OUT,
  //           from: {
  //             x: 0,
  //             y: 0,
  //             z: 0,
  //           },
  //           to: {
  //             x: 0,
  //             // y: 0,
  //             y: Math.PI * 8,
  //             z: 0,
  //           },
  //         },
  //       ],
  //       startAt: 3,
  //       endAt: 4.3,
  //     },
  //     {
  //       name: EFFECTS.FROM_TO,
  //       properties: [
  //         {
  //           path: "model.position",
  //           interpolationMode: Interpolation.MODES.LINEAR,
  //           from: {
  //             x: 0.04,
  //             y: -3,
  //             z: 4,
  //           },
  //           to: {
  //             x: 0.04,
  //             y: -3,
  //             z: 4,
  //           },
  //         },
  //         {
  //           path: "model.scale",
  //           from: {
  //             x: 0.14,
  //             y: 0.14,
  //             z: 0.14,
  //           },
  //           to: {
  //             x: 0.14,
  //             y: 0.14,
  //             z: 0.14,
  //           },
  //         },
  //         {
  //           path: "model.rotation",
  //           interpolationMode: Interpolation.MODES.EASE_IN,
  //           from: {
  //             x: 0,
  //             y: Math.PI * 8,
  //             z: 0,
  //           },
  //           to: {
  //             x: 0,
  //             // y: 0,
  //             y: Math.PI * 16,
  //             z: 0,
  //           },
  //         },
  //       ],
  //       startAt: 4.3,
  //       endAt: 5.36,
  //     },
  //   ],
  //   started: false,
  //   startAt: 0,
  //   endAt: 5.36,
  // };

  // English Cross In

  // English Cross Out

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.BACKGROUND,
    effects: [
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            interpolationMode: Interpolation.MODES.EASE_OUT,
            from: {
              x: 0.04,
              y: 0,
              z: 1,
            },
            to: {
              x: 0.04,
              y: 0,
              z: 1,
            },
          },
          {
            path: "mesh.scale",
            interpolationMode: Interpolation.MODES.EASE_OUT,
            from: {
              x: 1.8,
              y: 1.8,
              z: 1,
            },
            to: {
              x: 0.2,
              y: 0.2,
              z: 1,
            },
          },
        ],
        startAt: 3,
        endAt: 5.36,
      },
      {
        name: EFFECTS.FROM_TO,
        properties: [
          {
            path: "mesh.position",
            interpolationMode: Interpolation.MODES.EASE_OUT,
            from: {
              x: 0.04,
              y: 0,
              z: 1,
            },
            to: {
              x: 0.04,
              y: 0,
              z: 1,
            },
          },
          {
            path: "mesh.scale",
            interpolationMode: Interpolation.MODES.EASE_IN,
            from: {
              x: 0.2,
              y: 0.2,
              z: 1,
            },
            to: {
              x: 1.8,
              y: 1.8,
              z: 1,
            },
          },
        ],
        startAt: 5.36,
        endAt: 7,
      },
    ],
    started: false,
    startAt: 0.0,
    endAt: 7,
  };

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
            interpolationMode: Interpolation.MODES.EASE_OUT,
            from: {
              x: 3.0,
              y: 0.05,
              z: 0.05,
            },
            to: {
              x: 0.05,
              y: 0.05,
              z: 0.05,
            },
          },
        ],
        startAt: 3,
        endAt: 5.36,
      },
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
            interpolationMode: Interpolation.MODES.EASE_IN,
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
        startAt: 5.36,
        endAt: 7,
      },
    ],
    started: false,
    startAt: 3,
    endAt: 7,
  };

  timeline[uuidv4()] = {
    instanceName: INSTANCE_NAMES.LINE_2,
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
            interpolationMode: Interpolation.MODES.EASE_OUT,
            from: {
              x: 0.05,
              y: 3.0,
              z: 0.05,
            },
            to: {
              x: 0.05,
              y: 0.0,
              z: 0.05,
            },
          },
        ],
        startAt: 3,
        endAt: 5.36,
      },
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
            interpolationMode: Interpolation.MODES.EASE_IN,
            from: {
              x: 0.05,
              y: 0.05,
              z: 0.05,
            },
            to: {
              x: 0.05,
              y: 3.0,
              z: 0.05,
            },
          },
        ],
        startAt: 5.36,
        endAt: 7,
      },
    ],
    started: false,
    startAt: 3,
    endAt: 7,
  };
}
