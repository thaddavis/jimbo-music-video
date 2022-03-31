import Phrase1 from 'Experience/World/Lyrics/1stStanza/Phrase1'
import Phrase1Background from 'Experience/World/Lyrics/1stStanza/Phrase1Background'
import Phrase1Light from 'Experience/World/Lyrics/1stStanza/Phrase1Light'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Phrase1Light2 from 'Experience/World/Lyrics/1stStanza/Phrase1Light2';

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
                // path: 'mesh.material.opacity',
                // from: 1,
                // to: 0
            }],
            startAt: 17000,
            endAt: 19000
        },
        started: false,
        theClass: Phrase1
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
                    x: 2,
                    y: 2,
                    z: 2,
                }
                // path: 'mesh.material.opacity',
                // from: 1,
                // to: 0
            }],
            startAt: 17000,
            endAt: 19000
        },
        started: false,
        theClass: Phrase1Background
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
            startAt: 17000,
            endAt: 19000
        },
        started: false 
    }

    timeline[uuidv4()] = {
        isGlobal: false,
        effect: {
            name: EFFECTS.FROM_TO,
            properties: [{
                path: 'light.position',
                from: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                to: {
                    x: 0,
                    y: 4,
                    z: 4
                }
            }],
            startAt: 17000,
            endAt: 19000
        },
        started: false,
        theClass: Phrase1Light
    }

}