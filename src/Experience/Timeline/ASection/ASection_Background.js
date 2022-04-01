
import ASection_Background from 'Experience/World/Lyrics/ASection/ASection_Background'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';

export function addTimelineEvents_A_Section_Background(timeline) {

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
                    x: 2,
                    y: 2,
                    z: 2,
                }
            }],
            // startAt: 17000,
            // endAt: 19000,
            startAt: 17,
            // endAt: 19
            endAt: 23.7
        },
        started: false,
        theClass: ASection_Background
    }

    // timeline[uuidv4()] = {
    //     isGlobal: false,
    //     effect: {
    //         name: EFFECTS.FROM_TO,
    //         properties: [{
    //             path: 'mesh.scale',
    //             from: {
    //                 x: 1,
    //                 y: 1,
    //                 z: 1
    //             },
    //             to: {
    //                 x: 2,
    //                 y: 2,
    //                 z: 2,
    //             }
    //         }],
    //         // startAt: 24500,
    //         // endAt: 26000
    //         startAt: 24.5,
    //         endAt: 30.5
    //     },
    //     started: false,
    //     theClass: ASection_Background
    // }

    // timeline[uuidv4()] = {
    //     isGlobal: false,
    //     effect: {
    //         name: EFFECTS.FROM_TO,
    //         properties: [{
    //             path: 'mesh.scale',
    //             from: {
    //                 x: 1,
    //                 y: 1,
    //                 z: 1
    //             },
    //             to: {
    //                 x: 2,
    //                 y: 2,
    //                 z: 2,
    //             }
    //         }],
    //         // startAt: 24500,
    //         // endAt: 26000
    //         startAt: 31.5,
    //         endAt: 37.5
    //     },
    //     started: false,
    //     theClass: ASection_Background
    // }

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
                    x: 2,
                    y: 2,
                    z: 2,
                }
            }],
            // startAt: 24500,
            // endAt: 26000
            startAt: 38.5,
            endAt: 44.7
        },
        started: false,
        theClass: ASection_Background
    }

}