import Phrase3 from '../../World/Lyrics/3rdStanza/Phrase3'
import Phrase3Background from '../../World/Lyrics/3rdStanza/Phrase3Background'
import Phrase3Light from '../../World/Lyrics/3rdStanza/Phrase3Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../../Utils/Enums';
import Phrase3Light2 from '../../World/Lyrics/3rdStanza/Phrase3Light2';

export function addTimelineEvents_3rd_stanza_3rd_phrase(timeline) {

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
            // startAt: 35000,
            // endAt: 37500
            startAt: 35,
            endAt: 37.5
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
                    x: 4,
                    y: -5,
                    z: 16
                },
                to: {
                    x: -4,
                    y: -3,
                    z: 18 
                }
            }],
            // startAt: 35000,
            // endAt: 37500
            startAt: 35,
            endAt: 37.5
        },
        started: false 
    }

}