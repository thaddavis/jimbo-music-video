import Phrase1 from 'Experience/World/Lyrics/1stStanza/Phrase1'
import Phrase1Background from 'Experience/World/Lyrics/1stStanza/Phrase1Background'
import Phrase1Light from 'Experience/World/Lyrics/1stStanza/Phrase1Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';

export function addTimelineEvents_1st_verse_1st_phrase(timeline) {

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
            // startAt: 17000,
            // endAt: 19000
            startAt: 16.9,
            endAt: 19
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
                    z: 10
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 10
                }
            }],
            // startAt: 17000,
            // endAt: 19000
            startAt: 16.9,
            endAt: 19
        },
        started: false 
    }

}