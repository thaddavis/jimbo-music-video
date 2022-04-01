import Phrase2 from "Experience/World/Lyrics/BSection/Phrase2";
import Phrase2_Light from "Experience/World/Lyrics/BSection/Phrase2_Light";
import { v4 as uuidv4 } from "uuid";

import { EFFECTS } from "Experience/Utils/Enums";
import Phrase2_Light2 from "Experience/World/Lyrics/BSection/Phrase2_Light2";

export function addTimelineEvents_b_section_2nd_phrase(timeline) {
  timeline[uuidv4()] = {
    isGlobal: false,
    effect: {
      name: EFFECTS.FROM_TO,
      properties: [
        {
          path: "mesh.scale",
          from: {
            x: 1,
            y: 1,
            z: 1,
          },
          to: {
            x: 1,
            y: 1,
            z: 1,
          },
        },
      ],
      startAt: 59.3,
      endAt: 64.5,
    },
    started: false,
    theClass: Phrase2,
  };

  timeline[uuidv4()] = {
    isGlobal: true,
    effect: {
      name: EFFECTS.GLOBAL_FROM_TO,
      pathToExperienceGlobal: "camera.instance",
      properties: [
        {
          path: "position",
          from: {
            x: 0,
            y: 1,
            z: 16,
          },
          to: {
            x: 0,
            y: -1,
            z: 18,
          },
        },
      ],
      // startAt: 59300,
      // endAt: 64500
      startAt: 59.3,
      endAt: 64.5,
    },
    started: false,
  };

  timeline[uuidv4()] = {
    isGlobal: false,
    effect: {
      name: EFFECTS.FROM_TO,
      properties: [
        {
          path: "light.position",
          from: {
            x: 0,
            y: 0,
            z: 2,
          },
          to: {
            x: 0,
            y: 4,
            z: 4,
          },
        },
      ],
      startAt: 59.3,
      endAt: 64.5,
    },
    started: false,
    theClass: Phrase2_Light,
  };

  timeline[uuidv4()] = {
    isGlobal: false,
    effect: {
      name: EFFECTS.FROM_TO,
      properties: [
        {
          path: "light.position",
          from: {
            x: 0,
            y: 0,
            z: 2,
          },
          to: {
            x: 0,
            y: 4,
            z: 4,
          },
        },
      ],
      // startAt: 59300,
      // endAt: 64500
      startAt: 59.3,
      endAt: 64.5,
    },
    started: false,
    theClass: Phrase2_Light2,
  };
}
