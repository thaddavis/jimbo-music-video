import Phrase3 from '../../World/Lyrics/4thStanza/Phrase3'
import Phrase3Background from '../../World/Lyrics/4thStanza/Phrase3Background'
import Phrase3Light from '../../World/Lyrics/4thStanza/Phrase3Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../../Utils/Enums';
import Phrase3Light2 from '../../World/Lyrics/4thStanza/Phrase3Light2';

export function addTimelineEvents_4th_stanza_3rd_phrase(timeline) {

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
            // startAt: 42000,
            // endAt: 44700
            startAt: 42,
            endAt: 44.7
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
            // startAt: 42000,
            // endAt: 44700
            startAt: 42,
            endAt: 44.7
        },
        started: false 
    }

}