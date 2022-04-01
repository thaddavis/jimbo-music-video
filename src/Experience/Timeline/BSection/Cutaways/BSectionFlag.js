// import Phrase1 from 'Experience/World/Lyrics/1stStanza/Phrase1'
// import Phrase1Background from 'Experience/World/Lyrics/1stStanza/Phrase1Background'
// import Phrase1Light from 'Experience/World/Lyrics/1stStanza/Phrase1Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Flag from 'Experience/World/Flag/Flag';

export function addTimelineEvents_b_section_flag_cutaway(timeline) {

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
            // startAt: 44700,
            // endAt: 45700
            startAt: 44.7,
            endAt: 45.7
        },
        started: false,
        theClass: Flag
    }

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
            // startAt: 57700,
            // endAt: 59300
            startAt: 57.7,
            endAt: 59.3
        },
        started: false,
        theClass: Flag
    }

}