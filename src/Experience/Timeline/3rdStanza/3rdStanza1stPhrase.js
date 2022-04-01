import Phrase1 from '../../World/Lyrics/3rdStanza/Phrase1'
import Phrase1Background from '../../World/Lyrics/3rdStanza/Phrase1Background'
import Phrase1Light from '../../World/Lyrics/3rdStanza/Phrase1Light'
import Phrase1Light2 from '../../World/Lyrics/3rdStanza/Phrase1Light2'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from '../../Utils/Enums';

export function addTimelineEvents_3rd_stanza_1st_phrase(timeline) {

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
            // startAt: 31500,
            // endAt: 33000
            startAt: 31.5,
            endAt: 33
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
                    y: 0,
                    z: 12
                },
                to: {
                    x: 0,
                    y: 0,
                    z: 12
                }
            }],
            // startAt: 31500,
            // endAt: 33000
            startAt: 31.5,
            endAt: 33
        },
        started: false 
    }
}