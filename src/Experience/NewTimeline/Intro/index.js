import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import Background from "Experience/World/Reusables/Background";
import Light from "Experience/World/Reusables/Light";
import Text from "Experience/World/Reusables/Text";
import { Vector3 } from "three";

export function timeline_intro(timeline) {
  timeline[uuidv4()] = {
    theClass: Text,
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
        endAt: 4.25,
      },
    ],
    started: false,
    startAt: 0,
    endAt: 4.25,
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
