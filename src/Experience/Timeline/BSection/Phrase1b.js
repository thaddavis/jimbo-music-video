import Phrase2b from 'Experience/World/Lyrics/BSection/Phrase2b'
import Phrase2bLight from 'Experience/World/Lyrics/BSection/Phrase2bLight'
import { v4 as uuidv4 } from 'uuid';

import { EFFECTS } from 'Experience/Utils/Enums';
import Phrase2bLight2 from 'Experience/World/Lyrics/BSection/Phrase2bLight2';

export function addTimelineEvents_b_section_phrase1b(timeline) {

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
            startAt: 51200,
            endAt: 57700
        },
        started: false,
        theClass: Phrase2b
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
                    y: 1,
                    z: 16
                },
                to: {
                    x: 0,
                    y: -1,
                    z: 18
                }
            }],
            startAt: 51200,
            endAt: 57700
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
            startAt: 51200,
            endAt: 57700
        },
        started: false,
        theClass: Phrase2bLight
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
            startAt: 51200,
            endAt: 57700
        },
        started: false,
        theClass: Phrase2bLight2
    }

}