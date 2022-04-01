import Phrase2 from '../../World/Lyrics/4thStanza/Phrase2'
import Phrase2Background from '../../World/Lyrics/4thStanza/Phrase2Background'
import Phrase2Light from '../../World/Lyrics/4thStanza/Phrase2Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../../Utils/Enums';
import Phrase2Light2 from '../../World/Lyrics/4thStanza/Phrase2Light2';

export function addTimelineEvents_4th_stanza_2nd_phrase(timeline) {

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
            // startAt: 40000,
            // endAt: 42000
            startAt: 40,
            endAt: 42
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
                    y: 5,
                    z: 12
                },
                to: {
                    x: 4,
                    y: -3,
                    z: 12
                }
            }],
            // startAt: 40000,
            // endAt: 42000
            startAt: 40,
            endAt: 42
        },
        started: false 
    }

}