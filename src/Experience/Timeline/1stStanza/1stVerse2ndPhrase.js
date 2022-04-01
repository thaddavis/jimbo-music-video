import Phrase2 from 'Experience/World/Lyrics/1stStanza/Phrase2'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';


export function addTimelineEvents_1st_verse_2nd_phrase(timeline) {

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
            }],
            // startAt: 19000,
            // endAt: 21000,
            startAt: 19,
            endAt: 21
        },
        started: false,
        theClass: Phrase2
    }

    timeline[uuidv4()] = {
        isGlobal: true,
        effect: {
            name: EFFECTS.GLOBAL_FROM_TO,
            pathToExperienceGlobal: 'camera.instance',
            properties: [{
                path: 'position',
                from: {
                    x: 0,
                    y: 2,
                    z: 12
                },
                to: {
                    x: 1,
                    y: -1,
                    z: 12
                }
            }],
            // startAt: 19000,
            // endAt: 21000
            startAt: 19,
            endAt: 21
        },
        started: false 
    }

    // timeline[uuidv4()] = {
    //     isGlobal: false,
    //     effect: {
    //         name: EFFECTS.FROM_TO,
    //         properties: [{
    //             path: 'light.position',
    //             from: {
    //                 x: 0,
    //                 y: 0,
    //                 z: 2
    //             },
    //             to: {
    //                 x: 0,
    //                 y: 4,
    //                 z: 4
    //             }
    //         }],
    //         // startAt: 19000,
    //         // endAt: 21000
    //         startAt: 19,
    //         endAt: 21
    //     },
    //     started: false,
    //     theClass: Phrase2Light2
    // }

}