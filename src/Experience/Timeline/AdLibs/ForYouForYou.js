import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../../Utils/Enums';
import ForYou from '../../World/Lyrics/AdLibs/ForYou';
import ForYouLight from '../../World/Lyrics/AdLibs/ForYouLight';


export function addTimelineEvents_ad_libs_for_you_for_you(timeline) {

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 1
                },
                to: {
                    x: 0,
                    y: -2,
                    z: 2
                }
            }],
            // startAt: 23700,
            // endAt: 24500
            startAt: 23.7,
            endAt: 24.5
        },
        started: false,
        theClass: ForYou
    }

    timeline[uuidv4()] = {
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'mesh.position',
                from: {
                    x: 10,
                    y: -44,
                    z: 0
                },
                to: {
                    x: 11,
                    y: -46,
                    z: 0
                }
            }],
            // startAt: 23700,
            // endAt: 24500
            startAt: 23.7,
            endAt: 24.5
        },
        started: false,
        theClass: ForYouLight
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
                    y: -8,
                    z: 10
                },
                to: {
                    x: 0,
                    y: -9,
                    z: 12
                }
            }],
            // startAt: 23700,
            // endAt: 24500
            startAt: 23.7,
            endAt: 24.5
        },
        started: false 
    }

}