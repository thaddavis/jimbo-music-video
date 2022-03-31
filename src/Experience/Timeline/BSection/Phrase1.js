import Phrase1 from 'Experience/World/Lyrics/BSection/Phrase1'
import Phrase1_Light from 'Experience/World/Lyrics/BSection/Phrase1_Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Phrase1_Light2 from 'Experience/World/Lyrics/BSection/Phrase1_Light2';

export function addTimelineEvents_b_section_1st_phrase(timeline) {

    timeline[uuidv4()] = {
        isGlobal: false,
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.scale',
                from: {
                    x: 1,
                    y: 1,
                    z: 1
                },
                to: {
                    x: 1,
                    y: 1,
                    z: 1,
                }
                // path: 'mesh.material.opacity',
                // from: 1,
                // to: 0
            }],
            startAt: 45500,
            endAt: 51000
        },
        started: false,
        theClass: Phrase1
    }

    // timeline[uuidv4()] = {
    //     isGlobal: true,
    //     effect: {
    //         name: EFFECTS.GLOBAL_FROM_TO,
    //         pathToExperienceGlobal: 'camera.instance',
    //         properties: [{
    //             path: 'position',
    //             from: {
    //                 x: 0,
    //                 y: 1,
    //                 z: 12
    //             },
    //             to: {
    //                 x: 0,
    //                 y: 0,
    //                 z: 12
    //             }
    //         }],
    //         startAt: 45.5,
    //         endAt: 51
    //     },
    //     started: false 
    // }

    timeline[uuidv4()] = {
        isGlobal: false,
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'light.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 4
                }
            }],
            startAt: 45500,
            endAt: 51000
        },
        started: false,
        theClass: Phrase1_Light
    }

    timeline[uuidv4()] = {
        isGlobal: false,
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'light.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 4
                }
            }],
            startAt: 45500,
            endAt: 51000
        },
        started: false,
        theClass: Phrase1_Light2
    }

}