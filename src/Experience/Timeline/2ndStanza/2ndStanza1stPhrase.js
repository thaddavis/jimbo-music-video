import Phrase1 from 'Experience/World/Lyrics/2ndStanza/Phrase1'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';

export function addTimelineEvents_2nd_verse_1st_phrase(timeline) {

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
            // startAt: 24500,
            // endAt: 26000
            startAt: 24.5,
            endAt: 26
        },
        started: false,
        theClass: Phrase1
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
                    y: 5,
                    z: 12
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 14
                }
            }],
            // startAt: 24500,
            // endAt: 26000
            startAt: 24.5,
            endAt: 26
        },
        started: false 
    }

}