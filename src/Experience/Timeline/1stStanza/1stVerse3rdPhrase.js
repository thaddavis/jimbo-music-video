import Phrase3 from 'Experience/World/Lyrics/1stStanza/Phrase3'
import Phrase3Background from 'Experience/World/Lyrics/1stStanza/Phrase3Background'
import Phrase3Light from 'Experience/World/Lyrics/1stStanza/Phrase3Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Phrase3Light2 from 'Experience/World/Lyrics/1stStanza/Phrase3Light2';

export function addTimelineEvents_1st_verse_3rd_phrase(timeline) {

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
            // startAt: 21000,
            // endAt: 23700
            startAt: 21,
            endAt: 23.7
        },
        started: false,
        theClass: Phrase3
    }

    timeline[uuidv4()] = {
        isGlobal: true,
        effect: {
            name: EFFECTS.GLOBAL_FROM_TO,
            pathToExperienceGlobal: 'camera.instance',
            properties: [{
                path: 'position',
                from: {
                    x: 2,
                    y: -2,
                    z: 16
                },
                to: {
                    x: -2,
                    y: -2,
                    z: 18
                }
            }],
            // startAt: 21000,
            // endAt: 23700
            startAt: 21,
            endAt: 23.7
        },
        started: false 
    }

}